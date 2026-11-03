# Website page template and Reading Mode

Use `PAGE_TEMPLATE.html` as the starting point for **every new HTML page**. Preserve the existing page theme, layout, and footer when using an existing character page as the starting point.

## Navigation convention

Keep your navigation links left-aligned inside the page's `<nav>`. The shared `reader-mode.js` script places a **📖 Reading Mode** button on the far right of that same navigation row. You do not need to add the button manually.

Near the end of every page, before `</body>`, load the script using the relative path from that page to the repository root:

- Root pages: `<script src="reader-mode.js" defer></script>`
- `RP/Brinn/index.html`: `<script src="../../reader-mode.js" defer></script>`
- `RP/Brinn/journal/index.html`: `<script src="../../../reader-mode.js" defer></script>`
- `RP/Brinn/journal/2026-11-04/index.html`: `<script src="../../../../reader-mode.js" defer></script>`

The shared CSS and JavaScript provide a comfortable light reading view, one-click return to the original themed view, keyboard access, and preference persistence across pages via browser local storage.

**Default for future pages:** Always include this script and the `<nav>` element. The regular themed view is the default unless the visitor previously selected Reading Mode. This is a website-based reader, not Chromium's built-in Reading Mode.
