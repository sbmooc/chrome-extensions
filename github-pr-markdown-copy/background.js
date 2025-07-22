chrome.action.onClicked.addListener(async (tab) => {
  // Check if we're on a GitHub PR page
  if (!tab.url || !tab.url.includes('github.com') || !tab.url.includes('/pull/')) {
    // Show error badge
    chrome.action.setBadgeText({ text: '!', tabId: tab.id });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000', tabId: tab.id });
    
    // Clear badge after 2 seconds
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '', tabId: tab.id });
    }, 2000);
    return;
  }

  try {
    // Execute script to get PR info
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const titleElement = document.querySelector('.js-issue-title');
        if (!titleElement) {
          return null;
        }
        
        const title = titleElement.textContent.trim();
        const url = window.location.href.split('?')[0]; // Remove query parameters
        
        return { title, url };
      }
    });

    if (!results || !results[0] || !results[0].result) {
      throw new Error('Could not find PR information');
    }

    const { title, url } = results[0].result;
    const markdownLink = `[${title}](${url})`;

    // Copy to clipboard using offscreen document approach
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => {
        navigator.clipboard.writeText(text);
      },
      args: [markdownLink]
    });

    // Show success badge
    chrome.action.setBadgeText({ text: '✓', tabId: tab.id });
    chrome.action.setBadgeBackgroundColor({ color: '#00AA00', tabId: tab.id });
    
    // Clear badge after 2 seconds
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '', tabId: tab.id });
    }, 2000);

  } catch (error) {
    console.error('Error copying PR info:', error);
    
    // Show error badge
    chrome.action.setBadgeText({ text: '!', tabId: tab.id });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000', tabId: tab.id });
    
    // Clear badge after 2 seconds
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '', tabId: tab.id });
    }, 2000);
  }
});