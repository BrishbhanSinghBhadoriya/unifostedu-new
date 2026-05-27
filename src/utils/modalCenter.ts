/**
 * Utility function to force center modal positioning
 * यह function modal को screen के exact center में position करता है
 */

export const centerModal = (selector: string = '[data-slot="dialog-content"]') => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    console.log('🎯 Positioning modal at BOTTOM:', selector, element);
    
    // Force BOTTOM positioning
    element.style.setProperty('position', 'fixed', 'important');
    element.style.setProperty('bottom', '20px', 'important');
    element.style.setProperty('left', '50vw', 'important');
    element.style.setProperty('top', 'auto', 'important');
    element.style.setProperty('transform', 'translateX(-50%)', 'important');
    element.style.setProperty('margin', '0', 'important');
    element.style.setProperty('z-index', '9999', 'important');
    element.style.setProperty('right', 'auto', 'important');
    
    // Remove any conflicting styles
    element.style.removeProperty('inset');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-left');
    
    // Log final position
    const rect = element.getBoundingClientRect();
    console.log('📍 Modal position (BOTTOM):', {
      top: rect.top,
      bottom: window.innerHeight - rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      centerX: window.innerWidth / 2
    });
    
    return true;
  }
  console.log('❌ Modal not found:', selector);
  return false;
};

export const ensureModalCenter = () => {
  console.log('🚀 Starting modal BOTTOM positioning observer');
  
  // Multiple attempts to ensure bottom positioning
  const selectors = [
    '[data-slot="dialog-content"]',
    '[role="dialog"]',
    '[aria-modal="true"]',
    '[data-radix-dialog-content]',
    '.max-w-5xl',
    '[class*="max-w-5xl"]'
  ];
  
  selectors.forEach(selector => {
    centerModal(selector);
  });
  
  // Observer to watch for new modals
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches('[data-slot="dialog-content"]') || 
                element.querySelector('[data-slot="dialog-content"]')) {
              console.log('🔄 New modal detected, positioning at BOTTOM...');
              setTimeout(() => {
                selectors.forEach(sel => centerModal(sel));
              }, 10);
            }
          }
        });
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  return observer;
};