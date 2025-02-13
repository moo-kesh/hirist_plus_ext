/**
 * Constants for DOM selectors and configuration
 */
const SELECTORS = {
    COMPANY_NAME: [
        '#company-job span.dark_grey.align-title',
        '.company-detail-wrapper a',
        'a[href*="careers.html"]'
    ],
    BUTTON_LOCATIONS: [
        { selector: '.job-detail-title', position: 'after' },
        { selector: '.company-detail-wrapper', position: 'append' },
        { selector: '.job-fields', position: 'prepend' }
    ],
    EXISTING_BUTTON: '.linkedin-search-btn'
};

/**
 * Creates and adds a LinkedIn search button for the given company
 * @param {string} companyName - The name of the company to search for
 * @returns {void}
 */
function addLinkedInButton(companyName) {
    if (document.querySelector(SELECTORS.EXISTING_BUTTON)) {
        return;
    }

    const button = createButton(companyName);
    insertButtonInPage(button);
}

/**
 * Creates the LinkedIn search button element
 * @param {string} companyName - Company name to search for when clicked
 * @returns {HTMLButtonElement} The created button element
 */
function createButton(companyName) {
    const button = document.createElement('button');
    button.className = 'linkedin-search-btn';
    button.innerHTML = '<img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" /> Find on LinkedIn';

    button.addEventListener('click', () => {
        const searchUrl = `https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(companyName)}`;
        window.open(searchUrl, '_blank');
    });

    return button;
}

/**
 * Attempts to insert the button in one of the predefined page locations
 * @param {HTMLButtonElement} button - The button to insert
 * @returns {void}
 */
function insertButtonInPage(button) {
    for (const loc of SELECTORS.BUTTON_LOCATIONS) {
        const element = document.querySelector(loc.selector);
        if (!element) continue;

        switch (loc.position) {
            case 'after':
                element.parentNode.insertBefore(button, element.nextSibling);
                break;
            case 'append':
                element.appendChild(button);
                break;
            case 'prepend':
                element.insertBefore(button, element.firstChild);
                break;
        }
        return;
    }
}

/**
 * Searches for the company name in the page
 * @returns {string|null} The company name if found, null otherwise
 */
function findCompanyName() {
    for (const selector of SELECTORS.COMPANY_NAME) {
        const element = document.querySelector(selector);
        if (element) {
            return element.textContent.trim();
        }
    }
    return null;
}

/**
 * Initializes the MutationObserver to watch for DOM changes
 * @returns {void}
 */
function initObserver() {
    const companyName = findCompanyName();
    if (companyName) {
        addLinkedInButton(companyName);
        return;
    }

    const observer = new MutationObserver(() => {
        const companyName = findCompanyName();
        if (companyName) {
            addLinkedInButton(companyName);
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Cleanup observer after timeout
    setTimeout(() => observer.disconnect(), 10000);
}

// Initialize the extension
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
} else {
    initObserver();
}