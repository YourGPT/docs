import { ReactNode } from 'react';

// Sidebar component props
export interface SidebarProps {
  className?: string;
}

// Navigation link props
export interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

// Extended NavLink props with isActive function
export interface NavLinkWithActiveProps extends NavLinkProps {
  isActive?: (path: string) => boolean;
}

// Sidebar state interface
export interface SidebarState {
  activeAccordions: string[];
  activeNestedAccordion: string | undefined;
  isInitialized: boolean;
  manuallyClosedAccordions: string[];
  manuallyClosedNestedAccordions: string[];
}

// Sidebar context interface
export interface SidebarContextType {
  state: SidebarState;
  setActiveAccordion: (value: string | undefined, isManual?: boolean) => void;
  setActiveNestedAccordion: (value: string | undefined, isManual?: boolean) => void;
  setInitialized: (value: boolean) => void;
  updateState: (newState: Partial<SidebarState>) => void;
}

// Navigation sections interface
export interface NavigationSections {
  gettingStarted: NavLinkType[];
  training: NavLinkType[];
  customization: NavLinkType[];
  customizationSDK: NavLinkType[];
  integrations: {
    chatbots: NavLinkType[];
    website: NavLinkType[];
    social: NavLinkType[];
    connectors: NavLinkType[];
    voice: NavLinkType[];
    other: NavLinkType[];
  };
  coreFeatures: NavLinkType[];
  aiStudio: NavLinkType[];
  aiStudioAdvanced: NavLinkType[];
  other: NavLinkType[];
  debugging: NavLinkType[];
}

// Navigation link type
export interface NavLinkType {
  href: string;
  label: string;
}

// Categorization rule interface
export interface CategorizationRule {
  condition: (href: string) => boolean;
  section: string;
}

// Accordion state result interface
export interface AccordionStateResult {
  newActiveAccordion: string | undefined;
  newActiveNestedAccordion: string | undefined;
} 