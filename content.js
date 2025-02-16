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
    EXISTING_LINKEDIN_BUTTON: '.linkedin-search-btn',
    EXISTING_GLASSDOOR_BUTTON: '.glassdoor-search-btn'
};

/**
 * Creates and adds search buttons for the given company
 * @param {string} companyName - The name of the company to search for
 * @returns {void}
 */
function addSearchButtons(companyName) {
    // Remove any existing button container
    const existingContainer = document.querySelector('.company-search-buttons');
    if (existingContainer) {
        existingContainer.remove();
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'company-search-buttons';

    const linkedinButton = createSearchButton(companyName, 'linkedin');
    const glassdoorButton = createSearchButton(companyName, 'glassdoor');

    buttonContainer.appendChild(linkedinButton);
    buttonContainer.appendChild(glassdoorButton);

    // Insert after job title
    const jobTitle = document.querySelector('.job-detail-title');
    if (jobTitle && jobTitle.nextSibling) {
        jobTitle.parentNode.insertBefore(buttonContainer, jobTitle.nextSibling);
    } else if (jobTitle) {
        jobTitle.parentNode.appendChild(buttonContainer);
    }
}

/**
 * Creates a search button element for the specified platform
 * @param {string} companyName - Company name to search for when clicked
 * @param {string} platform - The platform to search on ('linkedin' or 'glassdoor')
 * @returns {HTMLButtonElement} The created button element
 */
function createSearchButton(companyName, platform) {
    const button = document.createElement('button');
    const config = {
        linkedin: {
            className: 'linkedin-search-btn',
            icon: 'https://www.linkedin.com/favicon.ico',
            text: 'Find on LinkedIn',
            url: `https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(companyName)}`
        },
        glassdoor: {
            className: 'glassdoor-search-btn',
            icon: 'https://www.glassdoor.com/favicon.ico',
            text: 'Find on Glassdoor',
            url: `https://www.glassdoor.com/Search/results.htm?keyword=${encodeURIComponent(companyName)}`
        }
    };

    const platformConfig = config[platform];
    button.className = platformConfig.className;
    button.innerHTML = `<img src="${platformConfig.icon}" alt="${platform}" /> ${platformConfig.text}`;

    button.addEventListener('click', () => {
        window.open(platformConfig.url, '_blank');
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
        addSearchButtons(companyName);
        return;
    }

    const observer = new MutationObserver(() => {
        const companyName = findCompanyName();
        if (companyName) {
            addSearchButtons(companyName);
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