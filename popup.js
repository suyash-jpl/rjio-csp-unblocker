document.addEventListener('DOMContentLoaded', () => {
    const enableExtensionCheckbox = document.getElementById('enable-extension');
    const rulesCheckboxes = {
      'csp-1': document.getElementById('csp-1'),
      'csp-2': document.getElementById('csp-2'),
      'csp-3': document.getElementById('csp-3'),
      'csp-4': document.getElementById('csp-4')
    };
    const testPageButton = document.getElementById('open-test-page');
  
    // Initialize the UI with stored values
    chrome.storage.local.get({
      enabled: false,
      'csp-1': true,
      'csp-2': true,
      'csp-3': true,
      'csp-4': true
    }, prefs => {
      enableExtensionCheckbox.checked = prefs.enabled;
      Object.keys(rulesCheckboxes).forEach(rule => {
        rulesCheckboxes[rule].checked = prefs[rule];
      });
    });
  
    // Toggle the extension enable state
    enableExtensionCheckbox.addEventListener('change', e => {
      chrome.storage.local.set({ enabled: e.target.checked });
    });
  
    // Update individual rule settings
    Object.entries(rulesCheckboxes).forEach(([rule, checkbox]) => {
      checkbox.addEventListener('change', e => {
        chrome.storage.local.set({ [rule]: e.target.checked });
      });
    });
  
    // Open the test page
    testPageButton.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://webbrowsertools.com/test-csp/' });
    });
  });
  