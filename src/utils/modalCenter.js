/**
 * Utility functions to ensure modals open in the exact center of the screen
 */

export const addModalCenterStyles = () => {
  // Create or update the style element for modal centering
  let styleElement = document.getElementById('modal-center-styles');
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'modal-center-styles';
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `
    /* FORCE ALL MODALS TO SCREEN CENTER - RUNTIME OVERRIDE */
    [role="dialog"],
    [data-slot="dialog-content"],
    [data-radix-dialog-content],
    .radix-dialog-content,
    [data-state="open"][role="dialog"],
    [data-state="open"][data-slot="dialog-content"],
    [aria-modal="true"] {
      position: fixed !important;
      top: 50vh !important;
      left: 50vw !important;
      transform: translate(-50%, -50%) !important;
      margin: 0 !important;
      z-index: 9999 !important;
    }
    
    /* Override any inline styles */
    [style*="top:"][role="dialog"],
    [style*="top:"][data-slot="dialog-content"] {
      top: 50vh !important;
      left: 50vw !important;
      transform: translate(-50%, -50%) !important;
    }
  `;
};

export const removeModalCenterStyles = () => {
  const styleElement = document.getElementById('modal-center-styles');
  if (styleElement) {
    styleElement.remove();
  }
};

export const forceModalCenter = (modalElement) => {
  if (modalElement) {
    modalElement.style.position = 'fixed';
    modalElement.style.top = '50vh';
    modalElement.style.left = '50vw';
    modalElement.style.transform = 'translate(-50%, -50%)';
    modalElement.style.margin = '0';
    modalElement.style.zIndex = '9999';
  }
};

// Auto-apply centering when DOM changes (for dynamic modals)
export const observeModalChanges = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if the added node is a modal or contains modals
          const modals = node.querySelectorAll ? 
            node.querySelectorAll('[role="dialog"], [data-slot="dialog-content"], [aria-modal="true"]') : 
            [];
          
          // Also check if the node itself is a modal
          if (node.getAttribute && (
            node.getAttribute('role') === 'dialog' || 
            node.getAttribute('data-slot') === 'dialog-content' ||
            node.getAttribute('aria-modal') === 'true'
          )) {
            forceModalCenter(node);
          }
          
          // Apply centering to found modals
          modals.forEach(forceModalCenter);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  return observer;
};