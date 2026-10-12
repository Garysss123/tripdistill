export const switzerlandCh15Routes = [
  '/switzerland/lugano-southern-ticino/mendrisiotto-generoso/',
  '/switzerland/locarno-ascona-valleys/maggia-centovalli/',
  '/switzerland/locarno-ascona-valleys/verzasca-valley/',
  '/switzerland/schaffhausen-rhine-falls/stein-am-rhein/'
];

export const switzerlandCh15CardRoutes = [
  '/switzerland/lugano-southern-ticino/',
  '/switzerland/locarno-ascona-valleys/',
  '/switzerland/schaffhausen-rhine-falls/',
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/locarno-ascona-valleys/locarno-ascona/',
  '/switzerland/locarno-ascona-valleys/maggia-centovalli/',
  '/switzerland/locarno-ascona-valleys/verzasca-valley/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
];

export const switzerlandCh15AffectedRoutes = [...new Set([...switzerlandCh15Routes, ...switzerlandCh15CardRoutes])];
