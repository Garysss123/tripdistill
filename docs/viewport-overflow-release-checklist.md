# Responsive overflow release checklist

Use this checklist whenever a shared layout or a city guide changes its narrow-screen behavior.

## Route and viewport matrix

- List every affected route and language before capture. For the current six-route, five-language Osaka release, inspect all 30 route-language pages at both 320px and 390px (60 renders).
- Set the browser viewport in CSS pixels. Record `window.innerWidth`, `document.documentElement.clientWidth`, and `document.documentElement.scrollWidth`; classic scrollbars can make the layout viewport narrower than the outer frame.
- Pass when the document root does not scroll horizontally: `scrollWidth <= clientWidth + 1`. Check the body and main wrapper too; a 320px-wide child inside an overflowing parent still fails.
- Inspect headings, translated names, image crops, cards, route boards, buttons, and footers in every locale. Look for clipped glyphs, orphaned characters, forced hyphenation, overlays, and controls that extend beyond the visible viewport.
- Measure compact labels as well as page overflow: compare the bounding boxes of step numbers, short kicker labels, adjacent quick facts, table tags, and their text. Pass only when long CJK and Latin labels wrap within their own cards without overlapping headings, images, or neighboring controls.

## Scrolling and interaction

- Keep intentional horizontal scrollers, such as comparison tables and area navigation, inside their own containers. Confirm they do not increase document `scrollWidth` and can be reached and operated with a keyboard.
- At narrow widths, use keyboard-only navigation to open and close the menu, search, and language controls; follow focus order and confirm focus remains visible and does not sit underneath a closed or open overlay.
- Verify links, same-page navigation, forms, and close buttons remain reachable without horizontal page panning.
- Test browser text enlargement or zoom on representative CJK and Latin pages after the fixed-width pass; content must reflow without losing labels or controls.

## Fix and record

- Fix the element that establishes the excessive minimum width. Prefer a route- or component-scoped rule when a legacy page needs an exception.
- Do not mask the defect with page-level `overflow-x: hidden`; preserve focus, scroll affordances, and access to content.
- Rebuild after each layout change and repeat all affected locale/viewport combinations, not only the page used to find the defect.
- Record viewport, layout viewport, root `scrollWidth`, label boxes reviewed, routes/locales reviewed, screenshots, keyboard checks, and any remaining exceptions with the release evidence.
