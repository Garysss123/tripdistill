export const integrationSprintBaseline = 'a014412eceb30efae51894be3b6167debaa96ca3';

export const integrationRouteGroups = Object.freeze({
  unitedKingdom: Object.freeze([
    '/united-kingdom/',
    '/united-kingdom/scottish-highlands/',
    '/united-kingdom/scottish-highlands/aviemore-cairngorms/',
    '/united-kingdom/scottish-highlands/glencoe-fort-william/',
    '/united-kingdom/scottish-highlands/inverness-loch-ness/',
    '/united-kingdom/pembrokeshire-west-wales/',
    '/united-kingdom/pembrokeshire-west-wales/aberystwyth-ceredigion/',
    '/united-kingdom/pembrokeshire-west-wales/st-davids-coast/',
    '/united-kingdom/pembrokeshire-west-wales/tenby-caldey-coast/'
  ]),
  france: Object.freeze([
    '/france/',
    '/france/corsica/',
    '/france/corsica/ajaccio-west-coast/',
    '/france/corsica/bastia-cap-corse/',
    '/france/corsica/bonifacio-porto-vecchio/',
    '/france/french-alps/',
    '/france/french-alps/annecy-lake-old-town/',
    '/france/french-alps/chamonix-mountain-systems/',
    '/france/french-alps/grenoble-bastille-chartreuse/',
    '/france/languedoc-camargue/',
    '/france/languedoc-camargue/arles-camargue/',
    '/france/languedoc-camargue/montpellier-sete/',
    '/france/languedoc-camargue/nimes-pont-du-gard/',
    '/france/lille-french-flanders/',
    '/france/lille-french-flanders/arras-vimy-remembrance/',
    '/france/lille-french-flanders/old-lille-roubaix/',
    '/france/lille-french-flanders/opal-coast-headlands/'
  ]),
  malaysia: Object.freeze([
    '/malaysia/semporna-tun-sakaran/',
    '/malaysia/semporna-tun-sakaran/semporna-jetty-operator/',
    '/malaysia/semporna-tun-sakaran/bohey-dulang-bodgaya/',
    '/malaysia/semporna-tun-sakaran/mabul-kapalai/',
    '/malaysia/semporna-tun-sakaran/sipadan-permit-day/',
    '/malaysia/sandakan-kinabatangan/',
    '/malaysia/sandakan-kinabatangan/sandakan-heritage-waterfront/',
    '/malaysia/sandakan-kinabatangan/sepilok-conservation-centres/',
    '/malaysia/sandakan-kinabatangan/sukau-kinabatangan/',
    '/malaysia/sandakan-kinabatangan/gomantong-batu-puteh/',
    '/malaysia/kuching-bako/',
    '/malaysia/kuching-bako/kuching-waterfront-old-courthouse/',
    '/malaysia/kuching-bako/borneo-cultures-museum/',
    '/malaysia/kuching-bako/semenggoh-wildlife-centre/',
    '/malaysia/kuching-bako/bako-national-park/',
    '/malaysia/perhentian-redang/',
    '/malaysia/perhentian-redang/kuala-besut-transfer/',
    '/malaysia/perhentian-redang/perhentian-kecil/',
    '/malaysia/perhentian-redang/perhentian-besar/',
    '/malaysia/perhentian-redang/redang-merang-transfer/',
    '/malaysia/kota-kinabalu-tunku-abdul-rahman/',
    '/malaysia/kota-kinabalu-tunku-abdul-rahman/gaya-street-waterfront/',
    '/malaysia/kota-kinabalu-tunku-abdul-rahman/tanjung-aru-museum/',
    '/malaysia/kota-kinabalu-tunku-abdul-rahman/manukan-mamutik/',
    '/malaysia/kota-kinabalu-tunku-abdul-rahman/sapi-gaya-islands/',
    '/malaysia/gunung-mulu/',
    '/malaysia/gunung-mulu/deer-lang-caves/',
    '/malaysia/gunung-mulu/clearwater-wind-caves/',
    '/malaysia/gunung-mulu/pinnacles-expedition/',
    '/malaysia/gunung-mulu/canopy-night-walks/',
    '/malaysia/kuala-lumpur-putrajaya/',
    '/malaysia/kuala-lumpur-putrajaya/merdeka-chinatown/',
    '/malaysia/kuala-lumpur-putrajaya/klcc-bukit-bintang/',
    '/malaysia/kuala-lumpur-putrajaya/batu-caves/',
    '/malaysia/kuala-lumpur-putrajaya/putrajaya-civic-core/',
    '/malaysia/',
    '/malaysia/kinabalu-park-kundasang/',
    '/malaysia/kinabalu-park-kundasang/park-headquarters-botanical-garden/',
    '/malaysia/kinabalu-park-kundasang/mount-kinabalu-summit/',
    '/malaysia/kinabalu-park-kundasang/kundasang-ranau/',
    '/malaysia/kinabalu-park-kundasang/poring-hot-springs/'
  ])
});

export const integrationRoutes = Object.freeze([
  ...integrationRouteGroups.unitedKingdom,
  ...integrationRouteGroups.france,
  ...integrationRouteGroups.malaysia
]);

export const integrationSitemapRoutes = Object.freeze(
  integrationRoutes.filter((route) => route !== '/united-kingdom/')
);

export const integrationSearchRoutes = Object.freeze(
  integrationRoutes.filter((route) => ![
    '/france/french-alps/annecy-lake-old-town/',
    '/france/french-alps/chamonix-mountain-systems/',
    '/france/french-alps/grenoble-bastille-chartreuse/',
    '/france/languedoc-camargue/arles-camargue/',
    '/france/languedoc-camargue/nimes-pont-du-gard/'
  ].includes(route))
);

export const localizedIntegrationSitemapRoutes = (prefixes) => new Set(
  prefixes.flatMap((prefix) => integrationSitemapRoutes.map((route) => `${prefix}${route}`))
);
