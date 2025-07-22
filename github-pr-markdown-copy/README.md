# GitHub PR Markdown Copy

A Chrome extension that copies GitHub pull request titles and links as markdown format with a single click.

## Features

- One-click copy of PR title and URL
- Formats as markdown link: `[PR Title](https://github.com/owner/repo/pull/123)`
- Visual feedback with badge notifications
- Works on any GitHub pull request page

## Installation

1. Follow the [developer mode setup instructions](../README.md#enabling-developer-mode) in the parent directory
2. Load this extension by selecting the `github-pr-markdown-copy` directory

## Usage

1. Navigate to any GitHub pull request page
2. Click the extension icon in your Chrome toolbar
3. The PR information will be copied to your clipboard as a markdown link
4. Look for visual feedback:
   - ✓ Green badge: Successfully copied
   - ! Red badge: Error (not on a PR page or copy failed)

## How it Works

The extension uses:
- A background service worker to handle the extension button click
- Chrome's scripting API to extract PR information from the page
- The clipboard API to copy the formatted markdown link

## Slack Integration

To make the markdown links work properly in Slack:

1. **Enable markdown formatting in Slack:**
   - Go to **Preferences** → **Advanced**
   - Under **Input options**, check "Format messages with markup"
   - This allows Slack to recognize and render markdown-style links

2. **Using the copied links:**
   - After copying from GitHub, paste directly into Slack
   - The link will appear as `[PR Title](url)` initially
   - Press Enter to send, and Slack will render it as a clickable link with the PR title as text

**Note:** Without enabling markup formatting in Slack, the links will appear as plain text rather than clickable links.

## Permissions

- `activeTab`: To read PR information from the current tab
- `clipboardWrite`: To copy the markdown link to your clipboard
- `scripting`: To execute scripts on GitHub pages
- Host permission for `https://github.com/*`