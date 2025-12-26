## PR draft: Improve theme clarity & add bold theme variant ✅

**Summary**
- Tighten text contrast and background gradients to improve legibility.
- Add a **bold** theme-strength variant with a header toggle (subtle ↔ bold) and persistence.
- Fix visited link color to prevent browser default purple from reducing readability.
- Update Playwright screenshots to capture bold and dark+bold variants for visual review.

**Files changed (high level)**
- `docs/assets/css/style.css` — tuned variables, hero overlay, card shadows, added `[data-theme-strength="bold"]` styles, and enforced anchor colors.
- `docs/_layouts/default.html` — added the **theme strength** toggle button (⚡).
- `docs/assets/js/main.js` — added toggle + localStorage persistence for `ajdevhub-theme-strength`.
- `tools/visual-tests/screenshot.js` — capture `desktop-bold` and `dark-bold` screenshots.
- `tools/visual-tests/README.md` — note the additional captures.

**Motivation**
- On some displays the background felt washed out and link color (visited) fell back to browser default purple which made content hard to read. These changes keep the existing visual language but improve clarity and give an option for a punchier look.

**How to test locally**
1. Build or serve the site locally (Jekyll) or load the GitHub Pages preview.
2. Toggle the **⚡** button next to the theme toggle in the header to switch between subtle and bold.
3. Confirm links and nav items use theme colors (no browser purple visited links).
4. Run Playwright screenshots to collect `desktop`, `desktop-bold`, `dark`, and `dark-bold` variants: `cd tools/visual-tests && npm install && npx playwright install chromium && npm run screenshot`.

**Checklist**
- [ ] Visual tests run and screenshots attached to PR.
- [ ] Accessibility (axe) reports reviewed for any regressions.
- [ ] Confirm no layout regressions on small screens.
- [ ] Approve and merge (or request follow-up tweaks).

**Notes / Next steps**
- If you prefer, I can apply a slightly stronger or subtler set of changes (I can push follow-ups to the same branch).
- After your approval I will run the Visual & Accessibility workflow and attach screenshots to the PR for final review.

---

To open this PR in GitHub: https://github.com/Ajay3007/ajdevhub/compare/master...Ajay3007:theme/tune-contrast-and-bold-variant?expand=1

Please review the draft and tell me any edits you want me to make before I open the PR formally.
