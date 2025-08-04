import React, { useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar';
import { FaDiscord, FaYoutube } from "react-icons/fa";

// Scroll preservation utility
function ScrollPreserver({ children, preserveKey = 'default' }: {
  children: React.ReactNode;
  preserveKey?: string;
}) {
  const scrollPositions = useRef<Map<string, number>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const isRestoringRef = useRef<boolean>(false);

  const saveScrollPosition = () => {
    const container = containerRef.current?.querySelector('.sidebar-scroll-container');
    if (container && !isRestoringRef.current) {
      scrollPositions.current.set(preserveKey, container.scrollTop);
    }
  };

  const restoreScrollPosition = () => {
    const container = containerRef.current?.querySelector('.sidebar-scroll-container');
    const savedPosition = scrollPositions.current.get(preserveKey);

    if (container && savedPosition !== undefined && savedPosition > 0) {
      isRestoringRef.current = true;

      requestAnimationFrame(() => {
        if (container) {
          container.scrollTop = savedPosition;

          setTimeout(() => {
            isRestoringRef.current = false;
          }, 100);
        }
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current?.querySelector('.sidebar-scroll-container');

    if (container) {
      const handleScroll = () => {
        if (!isRestoringRef.current) {
          scrollPositions.current.set(preserveKey, container.scrollTop);
        }
      };

      container.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        container.removeEventListener('scroll', handleScroll);
        saveScrollPosition();
      };
    }
  }, [preserveKey]);

  useEffect(() => {
    restoreScrollPosition();
  });

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  );
}

const FooterLinks = React.memo(() => (
  <div className="sidebar-footer-container">
    <a href="https://discord.gg/z8PBs5ckcd" className="sidebar-footer-item">
      <FaDiscord />
      <span>Community</span>
    </a>
    <a href="https://www.youtube.com/@YourGPTAI" className="sidebar-footer-item">
      <FaYoutube />
      <span>Youtube</span>
    </a>
  </div>
));

FooterLinks.displayName = 'FooterLinks';

// Cached sidebar content to prevent re-renders
let cachedSidebarContent: React.ReactNode | null = null;
let sidebarRenderCount = 0;

const SidebarContent = React.memo(() => {
  // Only re-render if this is the first render or if explicitly needed
  const renderKey = React.useMemo(() => {
    sidebarRenderCount++;
    return sidebarRenderCount;
  }, []);

  // Cache the sidebar content
  const sidebarElement = React.useMemo(() => {
    if (!cachedSidebarContent || renderKey === 1) {
      cachedSidebarContent = (
        <ScrollPreserver preserveKey="sidebar-main">
          <div className="sidebar-wrapper">
            <div className="sidebar-scroll-container">
              <Sidebar />
            </div>

            <div className="sidebar-footer">
              <FooterLinks />
            </div>
          </div>
        </ScrollPreserver>
      );
    }
    return cachedSidebarContent;
  }, [renderKey]);

  return sidebarElement;
});

SidebarContent.displayName = 'SidebarContent';

// Stable wrapper that never re-renders unless forced
export const SidebarWrapper = React.memo(() => {
  const [forceRender, setForceRender] = React.useState(0);

  // Expose a way to force re-render if needed (for development)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__forceSidebarRender = () => {
        cachedSidebarContent = null;
        setForceRender(prev => prev + 1);
      };
    }
  }, []);

  return <SidebarContent key={`stable-sidebar-${forceRender}`} />;
});

SidebarWrapper.displayName = 'SidebarWrapper'; 