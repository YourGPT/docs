import React, { useMemo, useEffect, useRef } from 'react';
import { cn } from "~/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, X, Home, Book, Settings, Cpu, KeyRound, SquareFunction, BookOpenText, Link, Zap, LayoutGrid } from "lucide-react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useSidebar, SidebarProvider } from './SidebarContext';
import type { SidebarProps, NavigationSections, NavLinkType } from './types';
import { sidebarNavigation } from "~/lib/navigation";

// Sidebar constants
const SIDEBAR_CONSTANTS = {
  ACCORDIONS: {
    TRAINING: 'training',
    CUSTOMIZATION: 'customization', 
    INTEGRATIONS: 'integrations',
    AI_STUDIO: 'ai-studio',
    OTHER: 'other'
  },
  NESTED_ACCORDIONS: {
    CHATBOT_SDK: 'chatbot-sdk',
    CHATBOT_INTEGRATIONS: 'chatbot-integrations',
    WEBSITE_BUILDERS: 'website-builders',
    SOCIAL_PLATFORMS: 'social-platforms',
    VOICE_INTEGRATIONS: 'voice-ai',
    CONNECTORS: 'connectors',
    ADVANCED_OPTIONS: 'advanced-options',
    DEBUGGING: 'debugging'
  },
  PATH_PATTERNS: {
    CUSTOMIZATION_SDK: '/customization/sdk/',
    INTEGRATIONS_CHATBOTS: '/integrations/chatbots/',
    INTEGRATIONS_WEBSITE: '/integrations/website/',
    INTEGRATIONS_SOCIAL: '/integrations/social/',
    INTEGRATIONS_VOICE: '/integrations/voice/',
    INTEGRATIONS_CONNECTORS: '/integrations/connectors/',
    STUDIO_ADVANCED: '/studio/elements/advanced/',
    OTHER_DEBUGGING: '/other/debugging/',
    TRAINING: '/training',
    KNOWLEDGE_SOURCE: '/knowledge-source-integration',
    CUSTOMIZATION: '/customization',
    HOW_TO_CHANGE: '/how-to-change',
    INTEGRATIONS: '/integrations',
    STUDIO: '/studio',
    OTHER: '/other'
  }
};

// Cache for organized navigation sections
let cachedSections: NavigationSections | null = null;

function organizeNavigationItems(): NavigationSections {
  if (cachedSections) return cachedSections;

  const sections: NavigationSections = {
    gettingStarted: [],
    training: [],
    customization: [],
    customizationSDK: [],
    integrations: {
      chatbots: [],
      website: [],
      social: [],
      connectors: [],
      voice: [],
      other: []
    },
    coreFeatures: [],
    aiStudio: [],
    aiStudioAdvanced: [],
    other: [],
    debugging: []
  };

  const categorizationRules = [
    {
      condition: (href: string) => href.includes('/introduction') || href.includes('/what-is-yourgpt') || 
                                   href.includes('/setup') || href.includes('/link-shareable-chatbot'),
      section: 'gettingStarted'
    },
    {
      condition: (href: string) => href.includes('/other/debugging/'),
      section: 'debugging'
    },
    {
      condition: (href: string) => (href.includes('/training') || href.includes('/knowledge-source-integration')) && 
                                   !href.includes('/other/debugging/'),
      section: 'training'
    },
    {
      condition: (href: string) => href.includes('/customization/sdk/'),
      section: 'customizationSDK'
    },
    {
      condition: (href: string) => href.includes('/customization') || href.includes('/how-to-change') || 
                                   href.includes('/prompts/example') || href.includes('/how-to-add-custom-domain'),
      section: 'customization'
    },
    {
      condition: (href: string) => href.includes('/integrations/chatbots/'),
      section: 'integrations.chatbots'
    },
    {
      condition: (href: string) => href.includes('/integrations/website/'),
      section: 'integrations.website'
    },
    {
      condition: (href: string) => href.includes('/integrations/social/'),
      section: 'integrations.social'
    },
    {
      condition: (href: string) => href.includes('/integrations/connectors/'),
      section: 'integrations.connectors'
    },
    {
      condition: (href: string) => href.includes('/integrations/voice/'),
      section: 'integrations.voice'
    },
    {
      condition: (href: string) => href.includes('/integrations/api-integration') || href.includes('/integrations/mcp') || 
                                   href.includes('/integrations/webhooks'),
      section: 'integrations.other'
    },
    {
      condition: (href: string) => href.includes('/functions') || href.includes('/custom-sso') || href.includes('/triggers'),
      section: 'coreFeatures'
    },
    {
      condition: (href: string) => href.includes('/studio/elements/advanced/'),
      section: 'aiStudioAdvanced'
    },
    {
      condition: (href: string) => href.includes('/studio/elements/'),
      section: 'aiStudio'
    },
    {
      condition: (href: string) => href.includes('/other/') || href.includes('/queue-replies'),
      section: 'other'
    }
  ];

  sidebarNavigation.forEach(item => {
    for (const rule of categorizationRules) {
      if (rule.condition(item.href)) {
        if (rule.section.includes('.')) {
          const [parent, child] = rule.section.split('.');
          (sections as any)[parent][child].push(item);
        } else {
          (sections as any)[rule.section].push(item);
        }
        break;
      }
    }
  });

  cachedSections = sections;
  return sections;
}

// Cached current path - only updates when actually changed
let cachedCurrentPath: string = '';
let pathCheckTimestamp: number = 0;

function getCurrentPath(): string {
  if (typeof window === 'undefined') return '';
  
  const now = Date.now();
  // Only check path every 100ms to avoid excessive checks
  if (now - pathCheckTimestamp > 100) {
    const currentPath = window.location.pathname;
    if (currentPath !== cachedCurrentPath) {
      cachedCurrentPath = currentPath;
    }
    pathCheckTimestamp = now;
  }
  
  return cachedCurrentPath;
}

// Cache for active state checks
const activeStateCache = new Map<string, boolean>();
let lastPathForCache = '';

function isLinkActive(href: string): boolean {
  const currentPath = getCurrentPath();
  
  // Only clear cache if we've moved to a completely different section
  if (currentPath !== lastPathForCache) {
    // Only clear cache if we're not just navigating within the same folder
    const currentFolder = currentPath.split('/').slice(0, -1).join('/');
    const lastFolder = lastPathForCache.split('/').slice(0, -1).join('/');
    
    if (currentFolder !== lastFolder) {
      activeStateCache.clear();
    }
    lastPathForCache = currentPath;
  }
  
  // Return cached result if available
  const cacheKey = `${href}-${currentPath}`;
  if (activeStateCache.has(cacheKey)) {
    return activeStateCache.get(cacheKey)!;
  }
  
  // Calculate active state
  const normalizePath = (path: string): string => path.endsWith('/') ? path.slice(0, -1) : path;
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedHref = normalizePath(href);
  
  let isActive = false;
  if (normalizedCurrentPath === normalizedHref) {
    isActive = true;
  } else if (normalizedHref !== '/chatbot' && normalizedCurrentPath.startsWith(normalizedHref + '/')) {
    isActive = true;
  } else if (href === '/' && currentPath === '/') {
    isActive = true;
  }
  
  // Cache the result
  activeStateCache.set(cacheKey, isActive);
  return isActive;
}

// Stable NavLink component that doesn't re-render unnecessarily
const SmartNavLink = React.memo(({ href, children, icon, className }: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) => {
  // Use a stable reference that only changes when the link becomes active/inactive
  const [isActive, setIsActive] = React.useState(() => isLinkActive(href));
  const lastCheckedPath = useRef('');
  
  // Check active state only when path actually changes
  React.useEffect(() => {
    const checkActive = () => {
      const currentPath = getCurrentPath();
      
      // Only check if path has actually changed
      if (currentPath !== lastCheckedPath.current) {
        lastCheckedPath.current = currentPath;
        const newIsActive = isLinkActive(href);
        if (newIsActive !== isActive) {
          setIsActive(newIsActive);
        }
      }
    };
    
    // Check immediately
    checkActive();
    
    // Set up less frequent check - only when needed
    const interval = setInterval(checkActive, 500);
    
    return () => clearInterval(interval);
  }, [href, isActive]);

  return (
    <a
      href={href}
      className={`flex items-center gap-3 py-1.75 px-3 text-sm transition-all relative nav-link ${
        isActive 
          ? 'text-primary font-medium active-nav-link bg-accent/50' 
          : 'text-foreground/80 hover:text-foreground hover:bg-accent/30'
      } ${className || ''}`}
      data-current-page={isActive}
      style={{ textDecoration: 'none' }}
    >
      {icon && (
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center icon-container">
          {icon}
        </span>
      )}
      <span className="link-text">{children}</span>
      {isActive && (
        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-r"></span>
      )}
    </a>
  );
});

SmartNavLink.displayName = 'SmartNavLink';

// Cache for required accordion calculation
let cachedRequiredAccordion: { accordion: string | undefined; nested: string | undefined } | null = null;
let lastPathForAccordion = '';

function getRequiredAccordionForCurrentPath(): { accordion: string | undefined; nested: string | undefined } {
  const currentPath = getCurrentPath();
  
  // Return cached result if path hasn't changed
  if (currentPath === lastPathForAccordion && cachedRequiredAccordion) {
    return cachedRequiredAccordion;
  }
  
  // Only update cache if we're actually changing to a different folder structure
  const shouldUpdateCache = !lastPathForAccordion || 
    !currentPath.startsWith(lastPathForAccordion.split('/').slice(0, -1).join('/')) ||
    !lastPathForAccordion.startsWith(currentPath.split('/').slice(0, -1).join('/'));
  
  if (shouldUpdateCache) {
    lastPathForAccordion = currentPath;
  } else {
    // If we're in the same folder, return cached result
    if (cachedRequiredAccordion) {
      return cachedRequiredAccordion;
    }
    lastPathForAccordion = currentPath;
  }
  
  if (typeof window === 'undefined') {
    cachedRequiredAccordion = { accordion: undefined, nested: undefined };
    return cachedRequiredAccordion;
  }
  
  const { ACCORDIONS, NESTED_ACCORDIONS, PATH_PATTERNS } = SIDEBAR_CONSTANTS;
  
  let requiredAccordion: string | undefined = undefined;
  let requiredNested: string | undefined = undefined;
  
  if (currentPath.includes(PATH_PATTERNS.CUSTOMIZATION_SDK)) {
    requiredAccordion = ACCORDIONS.CUSTOMIZATION;
    requiredNested = NESTED_ACCORDIONS.CHATBOT_SDK;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS_CHATBOTS)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
    requiredNested = NESTED_ACCORDIONS.CHATBOT_INTEGRATIONS;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS_WEBSITE)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
    requiredNested = NESTED_ACCORDIONS.WEBSITE_BUILDERS;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS_SOCIAL)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
    requiredNested = NESTED_ACCORDIONS.SOCIAL_PLATFORMS;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS_VOICE)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
    requiredNested = NESTED_ACCORDIONS.VOICE_INTEGRATIONS;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS_CONNECTORS)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
    requiredNested = NESTED_ACCORDIONS.CONNECTORS;
  } else if (currentPath.includes(PATH_PATTERNS.STUDIO_ADVANCED)) {
    requiredAccordion = ACCORDIONS.AI_STUDIO;
    requiredNested = NESTED_ACCORDIONS.ADVANCED_OPTIONS;
  } else if (currentPath.includes(PATH_PATTERNS.OTHER_DEBUGGING)) {
    requiredAccordion = ACCORDIONS.OTHER;
    requiredNested = NESTED_ACCORDIONS.DEBUGGING;
  } else if (currentPath.includes(PATH_PATTERNS.TRAINING) || currentPath.includes(PATH_PATTERNS.KNOWLEDGE_SOURCE)) {
    requiredAccordion = ACCORDIONS.TRAINING;
  } else if (currentPath.includes(PATH_PATTERNS.CUSTOMIZATION) || currentPath.includes(PATH_PATTERNS.HOW_TO_CHANGE)) {
    requiredAccordion = ACCORDIONS.CUSTOMIZATION;
  } else if (currentPath.includes(PATH_PATTERNS.INTEGRATIONS)) {
    requiredAccordion = ACCORDIONS.INTEGRATIONS;
  } else if (currentPath.includes(PATH_PATTERNS.STUDIO)) {
    requiredAccordion = ACCORDIONS.AI_STUDIO;
  } else if (currentPath.includes(PATH_PATTERNS.OTHER)) {
    requiredAccordion = ACCORDIONS.OTHER;
  }
  
  cachedRequiredAccordion = { accordion: requiredAccordion, nested: requiredNested };
  return cachedRequiredAccordion;
}

// Main sidebar content component - now truly stable
const SidebarContent = React.memo(() => {
  const { state, setActiveAccordion, setActiveNestedAccordion } = useSidebar();
  const sections = useMemo(() => organizeNavigationItems(), []);
  const initializedRef = useRef(false);
  const lastInitPath = useRef('');
  const lastRequiredAccordion = useRef<string | undefined>();
  const lastRequiredNested = useRef<string | undefined>();

  // Only initialize once per path change, and only when accordion requirements actually change
  useEffect(() => {
    const currentPath = getCurrentPath();
    const { accordion, nested } = getRequiredAccordionForCurrentPath();
    
    // Check if we're navigating within the same folder structure
    const accordionChanged = accordion !== lastRequiredAccordion.current;
    const nestedChanged = nested !== lastRequiredNested.current;
    
    if (!initializedRef.current || (currentPath !== lastInitPath.current && (accordionChanged || nestedChanged))) {
      initializedRef.current = true;
      lastInitPath.current = currentPath;
      lastRequiredAccordion.current = accordion;
      lastRequiredNested.current = nested;
      
      // Only auto-open if not manually closed AND if the requirement actually changed
      if (accordion && !state.manuallyClosedAccordions.includes(accordion) && accordionChanged) {
        if (!state.activeAccordions.includes(accordion)) {
          setActiveAccordion(accordion, false);
        }
      }
      
      if (nested && !state.manuallyClosedNestedAccordions.includes(nested) && nestedChanged) {
        if (state.activeNestedAccordion !== nested) {
          setActiveNestedAccordion(nested, false);
        }
      }
    }
  }, [state.manuallyClosedAccordions, state.manuallyClosedNestedAccordions, state.activeAccordions, state.activeNestedAccordion, setActiveAccordion, setActiveNestedAccordion]);

  const handleAccordionChange = React.useCallback((value: string | undefined) => {
    setActiveAccordion(value, true);
  }, [setActiveAccordion]);

  const handleNestedAccordionChange = React.useCallback((value: string | undefined) => {
    setActiveNestedAccordion(value, true);
  }, [setActiveNestedAccordion]);

  return (
    <div className="space-y-4 px-4">
      {/* Getting Started */}
      <div className="space-y-1">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">
          Getting Started
        </div>
        {sections.gettingStarted.map((item, index) => (
          <SmartNavLink 
            key={item.href} 
            href={item.href} 
            icon={index === 0 ? <Home size={16} /> : index === 1 ? <BookOpenText size={16} /> : index === 2 ? <Settings size={16} /> : <Link size={16} />}
          >
            {item.label}
          </SmartNavLink>
        ))}
      </div>

      {/* Core Features */}
      <div className="space-y-1">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">
          Core Features
        </div>
        
        <Accordion 
          type="multiple" 
          value={state.activeAccordions} 
          onValueChange={(values) => {
            const lastChanged = values.length > state.activeAccordions.length ? 
              values.find(v => !state.activeAccordions.includes(v)) :
              state.activeAccordions.find(v => !values.includes(v));
            if (lastChanged) {
              handleAccordionChange(lastChanged);
            }
          }} 
          className="w-full space-y-1"
        >
          {/* Training Section */}
          <AccordionItem value="training" className="border-none">
            <AccordionTrigger className="flex items-center py-2 px-3 text-sm main-folder transition-all duration-200 hover:bg-accent/50 rounded-lg group">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                  <Book size={16} />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground font-medium">Training</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-8 space-y-1 mt-1">
                {sections.training.map((item) => (
                  <SmartNavLink key={item.href} href={item.href}>
                    {item.label}
                  </SmartNavLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Customization Section */}
          <AccordionItem value="customization" className="border-none">
            <AccordionTrigger className="flex items-center py-2 px-3 text-sm main-folder transition-colors hover:bg-accent/50 rounded-md">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <Settings size={16} />
                </span>
                <span>Customization</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-8 space-y-1 mt-1">
                {sections.customization.map((item) => (
                  <SmartNavLink key={item.href} href={item.href}>
                    {item.label}
                  </SmartNavLink>
                ))}
                
                <Accordion type="single" collapsible value={state.activeNestedAccordion} onValueChange={handleNestedAccordionChange} className="w-full">
                  <AccordionItem value="chatbot-sdk" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md">
                      <span>Chatbot SDK</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1">
                        {sections.customizationSDK.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Integrations Section */}
          <AccordionItem value="integrations" className="border-none">
            <AccordionTrigger className="flex items-center py-2 px-3 text-sm main-folder transition-colors hover:bg-accent/50 rounded-md">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <Link size={16} />
                </span>
                <span>All Integrations</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-8 space-y-1 mt-1">
                <Accordion type="single" collapsible value={state.activeNestedAccordion} onValueChange={handleNestedAccordionChange} className="w-full">
                  <AccordionItem value="chatbot-integrations" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md w-full">
                      <span>Chatbot Integrations</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1 w-full">
                        {sections.integrations.chatbots.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="website-builders" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md w-full">
                      <span>Website Builders</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1 w-full">
                        {sections.integrations.website.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="social-platforms" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md w-full">
                      <span>Social Platforms</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1 w-full">
                        {sections.integrations.social.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="connectors" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md w-full">
                      <span>Connectors</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1 w-full">
                        {sections.integrations.connectors.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="voice-ai" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md w-full">
                      <span>Voice AI</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1 w-full">
                        {sections.integrations.voice.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {sections.integrations.other.map((item) => (
                  <SmartNavLink key={item.href} href={item.href}>
                    {item.label}
                  </SmartNavLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* AI Studio Section */}
          <AccordionItem value="ai-studio" className="border-none">
            <AccordionTrigger className="flex items-center py-2 px-3 text-sm main-folder transition-colors hover:bg-accent/50 rounded-md">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <Cpu size={16} />
                </span>
                <span>AI Studio</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-8 space-y-1 mt-1">
                {sections.aiStudio.map((item) => (
                  <SmartNavLink key={item.href} href={item.href}>
                    {item.label}
                  </SmartNavLink>
                ))}

                <Accordion type="single" collapsible value={state.activeNestedAccordion} onValueChange={handleNestedAccordionChange} className="w-full">
                  <AccordionItem value="advanced-options" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md">
                      <span>Advanced Options</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1">
                        {sections.aiStudioAdvanced.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Other Section */}
          <AccordionItem value="other" className="border-none">
            <AccordionTrigger className="flex items-center py-2 px-3 text-sm main-folder transition-colors hover:bg-accent/50 rounded-md">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <LayoutGrid size={16} />
                </span>
                <span>Other</span>
              </span>
            </AccordionTrigger>
            
            <AccordionContent>
              <div className="ml-8 space-y-1 mt-1">
                {sections.other.map((item) => (
                  <SmartNavLink key={item.href} href={item.href}>
                    {item.label}
                  </SmartNavLink>
                ))}

                <Accordion type="single" collapsible value={state.activeNestedAccordion} onValueChange={handleNestedAccordionChange} className="w-full">
                  <AccordionItem value="debugging" className="border-none">
                    <AccordionTrigger className="py-1.5 px-3 text-sm nested-folder transition-colors hover:bg-accent/30 rounded-md">
                      <span>Debugging</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2 space-y-1 mt-1">
                        {sections.debugging.map((item) => (
                          <SmartNavLink key={item.href} href={item.href}>
                            {item.label}
                          </SmartNavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Core Features - Static */}
        {sections.coreFeatures.map((item) => (
          <SmartNavLink 
            key={item.href} 
            href={item.href} 
            icon={item.href.includes('/functions') ? <SquareFunction size={16} /> : 
                  item.href.includes('/custom-sso') ? <KeyRound size={16} /> : 
                  <Zap size={16} />}
          >
            {item.label}
          </SmartNavLink>
        ))}
      </div>
    </div>
  );
});

SidebarContent.displayName = 'SidebarContent';

// Error boundary component
class SidebarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Sidebar error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center text-muted-foreground">
          <p>Something went wrong with the sidebar.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 text-sm bg-accent rounded hover:bg-accent/80"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main Sidebar component
export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile sidebar trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <button className="p-2 rounded-md hover:bg-accent">
            <Menu size={20} />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[320px] pr-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 px-4 py-2">
              <h2 className="text-lg font-semibold">CHATBOT</h2>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-md hover:bg-accent/50">
                <X size={18} />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto pb-20 sidebar-nav">
              <SidebarProvider>
                <SidebarErrorBoundary>
                  <SidebarContent />
                </SidebarErrorBoundary>
              </SidebarProvider>
            </div>
            
            {/* Mobile footer */}
            <div className="border-t border-border p-4 bg-background">
              <div className="flex flex-col space-y-2">
                <a href="https://discord.gg/z8PBs5ckcd" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50 transition-colors">
                  <FaDiscord className="w-4 h-4" />
                  <span>Community</span>
                </a>
                <a href="https://www.youtube.com/@YourGPTAI" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50 transition-colors">
                  <FaYoutube className="w-4 h-4" />
                  <span>Youtube</span>
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className={cn("hidden lg:block sidebar-nav", className)}>
        <div className="h-full py-2 pr-2 w-[280px]">
          <div className="sidebar-section">
            <SidebarProvider>
              <SidebarErrorBoundary>
                <SidebarContent />
              </SidebarErrorBoundary>
            </SidebarProvider>
          </div>
        </div>
      </div>
    </>
  );
} 