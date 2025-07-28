import React, { createContext, useContext, useState, useCallback, useEffect, useMemo, useRef } from 'react';
import type { SidebarState, SidebarContextType } from './types';

// Sidebar constants
const SIDEBAR_CONSTANTS = {
  STORAGE_KEY: 'sidebar-state'
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Helper functions for localStorage
function getStoredSidebarState(): SidebarState {
  if (typeof window === 'undefined') {
    return {
      activeAccordions: [],
      activeNestedAccordion: undefined,
      isInitialized: false,
      manuallyClosedAccordions: [],
      manuallyClosedNestedAccordions: []
    };
  }
  
  try {
    const stored = localStorage.getItem(SIDEBAR_CONSTANTS.STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      
      // Validate the parsed data structure
      if (parsed && typeof parsed === 'object') {
        return {
          activeAccordions: Array.isArray(parsed.activeAccordions) ? parsed.activeAccordions : [],
          activeNestedAccordion: typeof parsed.activeNestedAccordion === 'string' ? parsed.activeNestedAccordion : undefined,
          isInitialized: typeof parsed.isInitialized === 'boolean' ? parsed.isInitialized : false,
          manuallyClosedAccordions: Array.isArray(parsed.manuallyClosedAccordions) ? parsed.manuallyClosedAccordions : [],
          manuallyClosedNestedAccordions: Array.isArray(parsed.manuallyClosedNestedAccordions) ? parsed.manuallyClosedNestedAccordions : []
        };
      }
    }
  } catch (error) {
    console.error('Failed to parse stored sidebar state:', error);
    // Clear corrupted data
    try {
      localStorage.removeItem(SIDEBAR_CONSTANTS.STORAGE_KEY);
    } catch (clearError) {
      console.error('Failed to clear corrupted sidebar state:', clearError);
    }
  }
  
  return {
    activeAccordions: [],
    activeNestedAccordion: undefined,
    isInitialized: false,
    manuallyClosedAccordions: [],
    manuallyClosedNestedAccordions: []
  };
}

function storeSidebarState(state: SidebarState): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(SIDEBAR_CONSTANTS.STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to store sidebar state:', error);
  }
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SidebarState>(() => getStoredSidebarState());
  const lastStoredState = useRef<string>('');
  const scrollPositionRef = useRef<number>(0);
  const isUpdatingRef = useRef<boolean>(false);

  // Preserve scroll position during state updates
  const preserveScrollPosition = useCallback(() => {
    const scrollContainer = document.querySelector('.sidebar-scroll-container');
    if (scrollContainer) {
      scrollPositionRef.current = scrollContainer.scrollTop;
    }
  }, []);

  const restoreScrollPosition = useCallback(() => {
    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      const scrollContainer = document.querySelector('.sidebar-scroll-container');
      if (scrollContainer && scrollPositionRef.current > 0) {
        scrollContainer.scrollTop = scrollPositionRef.current;
      }
    });
  }, []);

  const setActiveAccordion = useCallback((value: string | undefined, isManual: boolean = false) => {
    if (isUpdatingRef.current) return;
    
    setState(prev => {
      let newActiveAccordions: string[];
      let newManuallyClosedAccordions = [...prev.manuallyClosedAccordions];
      
      if (value === undefined || value === '') {
        newActiveAccordions = [];
      } else {
        // Check if we're trying to open an already open accordion
        if (prev.activeAccordions.includes(value) && !isManual) {
          // Don't change anything if it's already open and this isn't a manual toggle
          return prev;
        }
        
        // Toggle the accordion
        if (prev.activeAccordions.includes(value)) {
          // Remove from array if already present (close it)
          newActiveAccordions = prev.activeAccordions.filter(acc => acc !== value);
          
          // If manually closed, track it
          if (isManual && !newManuallyClosedAccordions.includes(value)) {
            newManuallyClosedAccordions.push(value);
          }
        } else {
          // Add to array if not present (open it)
          newActiveAccordions = [...prev.activeAccordions, value];
          
          // If manually opened, remove from manually closed list
          if (isManual) {
            newManuallyClosedAccordions = newManuallyClosedAccordions.filter(acc => acc !== value);
          }
        }
      }
      
      const newState = { 
        ...prev, 
        activeAccordions: newActiveAccordions,
        manuallyClosedAccordions: newManuallyClosedAccordions
      };
      
      // Only update if state actually changed
      const newStateString = JSON.stringify(newState);
      if (newStateString !== lastStoredState.current) {
        lastStoredState.current = newStateString;
        
        // Store state asynchronously without blocking
        requestAnimationFrame(() => storeSidebarState(newState));
        
        return newState;
      }
      
      return prev;
    });
  }, []);

  const setActiveNestedAccordion = useCallback((value: string | undefined, isManual: boolean = false) => {
    if (isUpdatingRef.current) return;
    
    setState(prev => {
      // Don't change anything if the value is the same and this isn't a manual action
      if (prev.activeNestedAccordion === value && !isManual) {
        return prev;
      }
      
      let newManuallyClosedNestedAccordions = [...prev.manuallyClosedNestedAccordions];
      
      // Handle manual close/open tracking
      if (isManual && value !== prev.activeNestedAccordion) {
        if (value === undefined && prev.activeNestedAccordion) {
          // Manually closing
          if (!newManuallyClosedNestedAccordions.includes(prev.activeNestedAccordion)) {
            newManuallyClosedNestedAccordions.push(prev.activeNestedAccordion);
          }
        } else if (value) {
          // Manually opening
          newManuallyClosedNestedAccordions = newManuallyClosedNestedAccordions.filter(acc => acc !== value);
        }
      }
      
      // Only update if value actually changed
      if (prev.activeNestedAccordion === value && JSON.stringify(prev.manuallyClosedNestedAccordions) === JSON.stringify(newManuallyClosedNestedAccordions)) {
        return prev;
      }
      
      const newState = { 
        ...prev, 
        activeNestedAccordion: value,
        manuallyClosedNestedAccordions: newManuallyClosedNestedAccordions
      };
      const newStateString = JSON.stringify(newState);
      if (newStateString !== lastStoredState.current) {
        lastStoredState.current = newStateString;
        
        // Store state asynchronously without blocking
        requestAnimationFrame(() => storeSidebarState(newState));
        
        return newState;
      }
      
      return prev;
    });
  }, []);

  const setInitialized = useCallback((value: boolean) => {
    setState(prev => {
      // Only update if value actually changed
      if (prev.isInitialized === value) {
        return prev;
      }
      
      const newState = { ...prev, isInitialized: value };
      const newStateString = JSON.stringify(newState);
      if (newStateString !== lastStoredState.current) {
        lastStoredState.current = newStateString;
        storeSidebarState(newState);
        return newState;
      }
      return prev;
    });
  }, []);

  const updateState = useCallback((newState: Partial<SidebarState>) => {
    if (isUpdatingRef.current) return;
    
    setState(prev => {
      const updatedState = { ...prev, ...newState };
      const newStateString = JSON.stringify(updatedState);
      
      // Only update if state actually changed
      if (newStateString !== lastStoredState.current) {
        lastStoredState.current = newStateString;
        
        // Store state asynchronously without blocking
        requestAnimationFrame(() => storeSidebarState(updatedState));
        
        return updatedState;
      }
      
      return prev;
    });
  }, []);

  // Initialize lastStoredState ref
  useEffect(() => {
    lastStoredState.current = JSON.stringify(state);
  }, []);

  const contextValue: SidebarContextType = useMemo(() => ({
    state,
    setActiveAccordion,
    setActiveNestedAccordion,
    setInitialized,
    updateState
  }), [state, setActiveAccordion, setActiveNestedAccordion, setInitialized, updateState]);

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
} 