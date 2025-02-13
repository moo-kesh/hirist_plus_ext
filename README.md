# Hirist+ Company Research Tool

A Chrome extension that enhances your Hirist job search experience by adding quick LinkedIn company research capabilities. When viewing job listings, the extension adds a "Find on LinkedIn" button that lets you instantly search for the company on LinkedIn.

## Features

- 🔍 Automatically detects company names on Hirist job listings
- 🚀 One-click access to company LinkedIn profiles
- 💨 Fast and lightweight
- 🔒 Minimal permissions required
- 🎯 Clean and intuitive interface

## Installation

### From Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store (link coming soon)
2. Click "Add to Chrome"
3. Click "Add Extension" when prompted

### Manual Installation
1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the folder containing the extension files

## Usage

1. Visit any job listing on [Hirist](https://www.hirist.tech/)
2. Look for the "Find on LinkedIn" button near the company name
3. Click the button to search for the company on LinkedIn

## Development

### Project Structure
```
├── manifest.json       # Extension configuration
├── content.js         # Main content script
├── background.js      # Background service worker
├── styles.css        # Button and UI styles
└── icons/            # Extension icons
```

### Local Development
1. Make your changes
2. Go to `chrome://extensions/`
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
- Only requires minimal permissions to function