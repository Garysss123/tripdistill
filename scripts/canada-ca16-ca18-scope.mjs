export const laterCa16Routes = Object.freeze([
  '/canada/winnipeg-churchill/',
  '/canada/winnipeg-churchill/forks-exchange/',
  '/canada/winnipeg-churchill/human-rights-assiniboine/',
  '/canada/winnipeg-churchill/churchill-hudson-bay/'
]);

export const laterCa17Routes = Object.freeze([
  '/canada/whitehorse-kluane/',
  '/canada/whitehorse-kluane/whitehorse-river/',
  '/canada/whitehorse-kluane/kluane-haines-junction/',
  '/canada/whitehorse-kluane/miles-canyon-aurora/'
]);

export const laterCa18SearchRoutes = Object.freeze([
  '/canada/',
  '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/'
]);

export const laterCa18DatedRoutes = Object.freeze(laterCa18SearchRoutes.slice(1));
export const laterCa16Ca18SearchRoutes = Object.freeze([
  ...laterCa18SearchRoutes.slice(0, 1),
  ...laterCa16Routes,
  ...laterCa17Routes,
  ...laterCa18SearchRoutes.slice(1)
]);
export const laterCa16Ca18DatedRoutes = Object.freeze([
  ...laterCa16Routes,
  ...laterCa17Routes,
  ...laterCa18DatedRoutes
]);
