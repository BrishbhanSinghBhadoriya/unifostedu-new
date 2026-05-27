/**
 * Auto-center all modals when they open - Universal solution
 * This script automatically detects and centers any modal that opens on the page
 */

let observer = null;
let isInitialized = false;

const MODAL_SELECTORS = [
  '[role="dialog"]',
  '[data-slot="dialog-content"]',
  '[data-radix-dialog-content]',
  '.radix-dialog-content',
  '[aria-modal="true"]',
  '.dialog-content',
  '.modal-content',
  '[data-dialog="true"]'
];

const centerModal = (element) => {
  if (!element) return;
  
  // Apply centering styles
  element.style.position = 'fixed';
  element.style.top = '50vh';
  element.style.left = '50vw';
  element.style.transform = 'translate(-50%, -50%)';
  element.style.margin = '0';
  element.style.zIndex = '9999';
  
  // Add data attribute to mark as centered
  element.setAttribute('data-auto-centered', 'true');
  
  console.log('Modal auto-centered:', element);
};

const checkAndCenterModals = () => {
  MODAL_SELECTORS.forEach(selector => {
    const modals = document.querySelectorAll(selector);
    modals.forEach(modal => {
      // Only center if not already centered
      if (!modal.getAttribute('data-auto-centered')) {
        centerModal(modal);
      }
    });
  });
};

const initializeModalObserver = () => {
  if (isInitialized || typeof window === 'undefined') return;
  
  // Create mutation observer to watch for new modals
  observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    mutations.forEach((mutation) => {
      // Check for added nodes
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if the node itself is a modal
          const isModal = MODAL_SELECTORS.some(selector => 
            node.matches && node.matches(selector)
          );
          
          if (isModal) {
            centerModal(node);
            return;
          }
          
          // Check if the node contains modals
          if (node.querySelectorAll) {
            const childModals = MODAL_SELECTORS.flatMap(selector => 
              Array.from(node.querySelectorAll(selector))
            );
            
            if (childModals.length > 0) {
              shouldCheck = true;
            }
          }
        }
      });
      
      // Check for attribute changes that might indicate modal state change
      if (mutation.type === 'attributes') {
        const target = mutation.target;
        if (target.nodeType === Node.ELEMENT_NODE) {
          const isModal = MODAL_SELECTORS.some(selector => 
            target.matches && target.matches(selector)
          );
          
          if (isModal && (
            mutation.attributeName === 'data-state' ||
            mutation.attributeName === 'aria-modal' ||
            mutation.attributeName === 'style' ||
            mutation.attributeName === 'class'
          )) {
            // Check if modal is now open
            const isOpen = target.getAttribute('data-state') === 'open' ||
                          target.getAttribute('aria-modal') === 'true' ||
                          target.style.display !== 'none';
            
            if (isOpen && !target.getAttribute('data-auto-centered')) {
              centerModal(target);
            }
          }
        }
      }
    });
    
    if (shouldCheck) {
      // Small delay to ensure DOM is updated
      setTimeout(checkAndCenterModals, 10);
    }
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-state', 'aria-modal', 'style', 'class']
  });
  
  // Initial check for existing modals
  checkAndCenterModals();
  
  // Also check periodically for any missed modals
  const intervalCheck = setInterval(() => {
    checkAndCenterModals();
  }, 1000);
  
  // Clean up interval after 30 seconds (modals should be detected by then)
  setTimeout(() => {
    clearInterval(intervalCheck);
  }, 30000);
  
  isInitialized = true;
  console.log('Modal auto-center observer initialized');
};

const destroyModalObserver = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  isInitialized = false;
};

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModalObserver);
  } else {
    initializeModalObserver();
  }
}

export {
  initializeModalObserver,
  destroyModalObserver,
  centerModal,
  checkAndCenterModals
};