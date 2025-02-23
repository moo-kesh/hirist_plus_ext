# Hirist+ Company Research Tool
A browser extension that enhances Hirist job listings by adding instant LinkedIn and Glassdoor research buttons. Streamlines your job search by providing quick access to company information and reviews.

## Features

- 🔍 Automatically detects company names on Hirist job listings
- 🚀 One-click access to company profiles on LinkedIn and Glassdoor
- 💨 Fast and lightweight
- 🔒 Minimal permissions required
- 🎯 Clean and intuitive interface
- 🔄 Supports both Chrome and Edge browsers

## Installation

### From Chrome Web Store / Microsoft Edge Add-ons
1. Microsoft Edge Add-ons: [Install from Edge Add-ons Store](https://microsoftedge.microsoft.com/addons/detail/hirist-company-research-/ccpapgkjmmndencjgdbbooebggihmmnd)
2. Chrome Web Store: Coming Soon
3. Click "Add Extension" when prompted

### Manual Installation
1. Clone this repository
2. Open Chrome/Edge and go to extensions page
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the folder containing the extension files

## Usage

1. Visit any job listing on [Hirist](https://www.hirist.tech/)
2. Look for the research buttons below the job title
3. Click either button to:
   - Search for the company on LinkedIn
   - Research company reviews and ratings on Glassdoor

## Development

### Project Structure
```
├── manifest.json       # Extension configuration
├── content.js         # Main content script
├── background.js      # Background service worker
├── styles.css         # Button and UI styles
└── icons/            # Extension icons
```

### Local Development
1. Make your changes
2. Go to browser's extensions page
3. Click the refresh icon on the extension card
4. Test your changes on Hirist

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this code in your own projects.

## Privacy

This extension:
- Only activates on Hirist job listing pages
- Does not collect any user data
- Does not track your browsing
- Only requires minimal permissions to function:
  - Access to hirist.tech for functionality
  - Access to LinkedIn/Glassdoor for search redirection