# Spain route expansion — 20 October 2026

## Scope and editorial review

This release adds 33 English source pages: one country entry, eight regional hubs, and 24 local guides. Each is generated into four fully localized editions (zh-Hant, ja, ko, th), for 165 public page files across five editions. Search has 33 English route records; the sitemap adds exactly 165 localized URLs.

| Level | Coverage |
|---|---|
| Country (1) | Spain: choose a first base and combine regions by rail, air, or ferry |
| Madrid/Castile hub + 3 guides | Sol/Plaza Mayor/Royal Palace; Prado/Retiro/Literary Quarter; Toledo station-to-ridge |
| Catalonia/Barcelona hub + 3 | Ciutat Vella-to-waterfront; Eixample/Modernisme/Sagrada Família; Girona/Costa Brava gateways |
| Andalusia hub + 3 | Seville Alcázar/Cathedral/Santa Cruz; Córdoba Mosque-Cathedral/river; Granada Alhambra/Albaicín |
| Basque Country hub + 3 | Bilbao Ría/Guggenheim/Old Town; Donostia La Concha/Parte Vieja/hills; Urdaibai/Bermeo/coastal rail |
| Valencia hub + 3 | Old Town/Market/Cathedral; Turia/City of Arts/coast; Albufera/El Palmar |
| Balearics hub + 3 | Mallorca Palma/Sóller/Tramuntana; Menorca Maó/Ciutadella/coves; Ibiza/Formentera port-to-beach |
| Canaries hub + 3 | Tenerife La Laguna/Teide; Gran Canaria Las Palmas/south coast; Lanzarote-or-Fuerteventura decision |
| Galicia/Asturias hub + 3 | Santiago station-to-old-town; Rías Baixas/Pontevedra/Vigo; Oviedo/Covadonga/Picos access |

**Reference comparison:** I compared this hierarchy with the live Japanese pages `/japan/`, `/japan/osaka/`, and `/japan/osaka/namba/`, and inspected their actual long-form content and desktop/mobile presentation. The Japanese references are about 1,833 words for the country entry, 1,411 for Osaka, and 1,636 for Namba. Spain has a 1,707-word country body; hub bodies are about 909–1,048 words and local guides about 984–1,098 words. The page-count and word-count comparison is only a locator: the editorial check also examined the sections and screens. Spain’s pages carry their own decisions—such as Madrid last-mile transfer, Seville–Córdoba–Granada sequencing, Basque coastal rail, Toledo’s lower station and uphill entry, island transfers, and the northern coast’s thinner connections—rather than replicating a generic national template.

The country, Toledo, Madrid and Catalonia pages were reviewed at desktop and narrow mobile sizes before integration. A local search for Toledo returned the Toledo guide. Spain home and guide layout fixes addressed wrapping/heading scale; Madrid and Catalonia mobile cards were checked for overflow. Production desktop/mobile review and live search/language-switch checks are recorded in the release section below after deployment.

## Practical content and official references

Pages distinguish AVE/long-distance corridors from regional rail and local last-mile movement; make station arrival and lodging-area choices explicit; avoid invented times and prices; and direct readers to date-specific operator checks. Island chapters treat flights, ferries, port/airport transfers, seasonal service and beach access as separate legs. Seasonal sections call out exposed summer heat, shoulder-season service changes, and weather checks without prescribing unsupported exact hours.

The route source records include official operator or destination references, among them [Renfe AVE/long-distance network maps](https://www.renfe.com/es/en/travel/informacion-util/mapas-y-lineas/ave-y-larga-distancia), [Metro de Madrid airport guidance](https://www.metromadrid.es/en/viaja-en-metro/titulos-y-tarifas/aeropuerto), [TMB Barcelona airport Metro guidance](https://www.tmb.cat/en/visit-barcelona/public-transport/metro-airport), [Euskotren schedules](https://www.euskotren.eus/en/tren/schedules), [AEMET warnings](https://www.aemet.es/en/eltiempo/prediccion/avisos), [Baleària Ibiza–Formentera](https://www.balearia.com/en/routes-timetables/ferry-ibiza-formentera), [official Canary Islands inter-island travel guidance](https://www.hellocanaryislands.com/travelling-between-the-islands/), and [Galicia’s official Rías Baixas destination information](https://www.turismo.gal/que-visitar/destacados/as-rias/rias-baixas?langId=en_US). Every individual hub/local-guide source list is in `data/spain/*.json` and is rendered on its page.

## Images and licensing

Eight compressed Commons derivatives are used, with creator, license and linked source visible in the page credit. The manifest is `data/spain/images.json`.

| Region | Creator | License |
|---|---|---|
| Madrid | Sheila1988 | CC BY-SA 4.0 |
| Catalonia | Felvalen | CC BY-SA 4.0 |
| Andalusia | Mervat | CC BY-SA 4.0 |
| Basque Country | Zinneke | CC BY-SA 3.0 |
| Valencia | ChiralJon | CC BY 2.0 |
| Balearics | Matthias Süßen | CC BY-SA 4.0 |
| Canaries | dronepicr | CC BY 2.0 |
| Galicia/Asturias | Sudzie | CC BY-SA 4.0 |

## Verification

- `npm run generate:spain`: 1 country + 8 hubs + 24 guides.
- `npm run audit:spain`: passed—33 English pages, 132 localized pages, 33 search records, 8 license-checked images, body depth, canonical/hreflang, internal navigation and 4,725 sitemap entries.
- `npm run audit:i18n`: passed—62,769 required strings in each of the four localized editions, zero missing or stale; the reviewed-target and locale-script guards passed.
- Translation batches (00 country/Madrid and 01 regions/local guides): all four locale files validated and all four locale sample reviews passed without long source sentences reusing another target translation.
- Old-country route preservation: the integration regression compares the prior 4,560 sitemap URLs against the current set and requires every pre-existing URL to remain, with exactly 165 new Spain URLs; it also requires exactly 33 Spain search additions. The Vietnam localized regression separately confirms the Spain sitemap additions while keeping every non-Spain URL unchanged.
- `npm run audit` is the canonical pre-release suite. Its first run reached `test:malaysia-semporna-refresh` and stopped because an old assertion expected 955 global search rows rather than 988 after Spain was added. The assertion was corrected to validate the Spain delta and preserve the old URLs; that test passed. The downstream impacted audit checks were then rerun in dependency order through `audit:spain` and `audit-site`; all passed. `deploy:trip` will run the canonical suite again before deployment.
- Production commit, Cloudflare deployment ID/commit, HTTP checks, and live screenshots: **pending**.

### Candidate browser and hosting checks

- Inspected the built Spain country entry at desktop size and at 390 × 844. The hero, 8-region cards, two itinerary actions, and navigation fit; no horizontal overflow was observed.
- At 390 × 844, searched for “Toledo”, opened the matching Spain guide, and verified its route content, official-source links, translated Traditional Chinese edition, and loaded 1600 px WebP image. Browser layout measurement reported no horizontal overflow.
- The Cloudflare identity check succeeded with Pages write access. The Pages project list confirmed project `trip` and custom domain `tripdistill.com`; `recipenestvault` was visible as a separate project and was not selected.

## Release evidence

This section will be updated with the main commit, production deployment identity, live route checks, and desktop/mobile screenshot evidence after release.
