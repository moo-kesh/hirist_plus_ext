/**
 * Hirist+ Company Research Tool
 * Background Service Worker
 */

// Installation event handler
chrome.runtime.onInstalled.addListener(() => {
    // Future initialization can go here
    // For example: setting up default settings, creating context menus, etc.
});

/**
 * Message handler for communication with content script
 * Currently unused but kept for future features like:
 * - Saving recently viewed companies
 * - Custom search preferences
 * - Analytics (if added in the future)
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.type) {
        case 'COMPANY_SEARCH':
            // Handle company search related background tasks
            sendResponse({ status: 'success' });
            break;

        // Add more message types here as needed
    }
    return true;
});

// Keep service worker alive if needed for future features
// chrome.runtime.onConnect.addListener((port) => {
//     port.onDisconnect.addListener(() => {
//         // Handle cleanup
//     });
// });