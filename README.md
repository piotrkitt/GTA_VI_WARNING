# GTA VI Warning

A tiny browser extension for Chrome and Firefox that protects you from GTA VI content.

When a page mentions GTA VI, the extension hides the whole page and shows a full-screen red warning instead:

> ⚠️ WARNING: GTA VI CONTENT - RUN AWAY ⚠️

If you really want to see the page, click **I AM AN ADULT, OPEN ANYWAY** and the original page comes back.

## What triggers the warning

The extension checks the page title and visible text for any of these (case-insensitive):

- `GTA VI`, `GTA 6`, `GTA6`
- `Grand Theft Auto VI`, `Grand Theft Auto 6`

Other titles such as `GTA V` or `GTA Vice City` do not trigger it. Pages that load content dynamically are re-checked as new content appears.

## Installation

Download or clone this repository first:

```bash
git clone https://github.com/piotrkitt/GTA_VI_WARNING.git
```

### Chrome (and Edge, Brave, other Chromium browsers)

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top right corner).
3. Click **Load unpacked** and select the folder with `manifest.json`.

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select the `manifest.json` file.

A temporary add-on in Firefox is removed when the browser restarts. To keep it permanently, the extension has to be packaged and signed through [addons.mozilla.org](https://addons.mozilla.org).

## Updating

After changing the files or pulling a new version, click the reload icon on the extension card in `chrome://extensions` (or **Reload** in `about:debugging` in Firefox), then refresh the page.

## Turning it off

Disable or remove the extension on the browser's extensions page, then refresh the page.

## Files

- `manifest.json` – extension manifest (Manifest V3)
- `content.js` – content script that detects GTA VI mentions and shows the warning

## Privacy

Everything runs locally in your browser. The extension does not collect or send any data.
