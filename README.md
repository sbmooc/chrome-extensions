# Chrome Extensions

A collection of useful (to me) Chrome extensions.

## Available Extensions

- **[GitHub PR Markdown Copy](./github-pr-markdown-copy)** - Copy GitHub PR titles and links as markdown

## Enabling Developer Mode

Developer mode is required to load unpacked extensions that haven't been published to the Chrome Web Store.

### Steps to Enable Developer Mode

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** by toggling the switch in the top right corner
3. You'll see additional options appear: "Load unpacked", "Pack extension", and "Update"

### What Developer Mode Allows

- **Test extensions during development** - Load your extensions directly from a folder
- **Use custom extensions** - Run extensions without publishing to the Chrome Web Store
- **Modify and reload instantly** - Make changes and see them immediately with the refresh button
- **Inspect extension pages** - Debug background scripts and popups with Chrome DevTools

### Important Notes

- Extensions loaded in developer mode will show a warning banner on Chrome startup
- This warning is normal and can be dismissed - it's Chrome's way of alerting users to unofficial extensions
- Developer mode extensions have full permissions, so only load extensions you trust

## Installing Extensions from This Repository

1. First, [enable developer mode](#enabling-developer-mode)
2. Click the **Load unpacked** button
3. Navigate to and select the specific extension directory (e.g., `github-pr-markdown-copy`)
4. The extension will appear in your Chrome toolbar
5. You may need to pin it by clicking the puzzle piece icon and clicking the pin button

## Updating Extensions

After making changes to an extension:

1. Go to `chrome://extensions/`
2. Find your extension and click the refresh icon
3. Or click the "Update" button at the top to update all developer mode extensions

## Troubleshooting

- **Extension not appearing?** Check the puzzle piece icon in the toolbar and pin the extension
- **Changes not reflecting?** Remember to refresh the extension after making changes
- **Errors loading?** Check the extension's error log by clicking "Errors" on the extension card
