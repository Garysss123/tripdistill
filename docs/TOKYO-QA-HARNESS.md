# Tokyo responsive QA harness

After `npm run build`, run `npm run build:tokyo-qa-harness` to create
`dist/qa/tokyo-responsive/index.html`. Deploy this artifact only to the
`tokyo-qa` Cloudflare Pages preview branch.

The page has route and language selectors for the Tokyo hub, Ikebukuro,
Odaiba & Toyosu, and Roppongi & Azabu, plus 320 px and 390 px viewport
buttons. It embeds the selected guide from the same origin in an 800 px-tall
iframe, allowing ordinary guide interactions to work during visual review.

The harness is generated after the site build. `build-dist.mjs` removes and
recreates `dist` and its public-directory allowlist does not include `qa`;
`npm run build` and `npm run deploy:trip` do not call the harness generator.
Therefore, every normal build removes it, and the production deploy command
does not publish it. The generated page carries `noindex,nofollow,noarchive`
and is not added to the site navigation or sitemap.
