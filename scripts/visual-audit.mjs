import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const browserPath = process.env.TRIPDISTILL_EDGE || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const baseUrl = process.env.TRIPDISTILL_BASE_URL || 'http://127.0.0.1:8877';
const port = Number(process.env.TRIPDISTILL_CDP_PORT || 9333);
const viewportScreenshotsOnly = process.env.TRIPDISTILL_SCREENSHOT_VIEWPORT_ONLY === '1';
const focusSelector = process.env.TRIPDISTILL_FOCUS_SELECTOR || '';
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const outputDir = path.join(os.tmpdir(), `tripdistill-visual-audit-${runId}-${process.pid}`);
const profileDir = path.join(os.tmpdir(), `tripdistill-edge-profile-${runId}-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });

const allRoutes = [
  ['home', '/'],
  ['malaysia', '/malaysia/'],
  ['kuala-lumpur-putrajaya', '/malaysia/kuala-lumpur-putrajaya/'],
  ['george-town-penang', '/malaysia/george-town-penang/'],
  ['melaka', '/malaysia/melaka/'],
  ['ipoh-kinta-valley', '/malaysia/ipoh-kinta-valley/'],
  ['langkawi', '/malaysia/langkawi/'],
  ['cameron-highlands', '/malaysia/cameron-highlands/'],
  ['taman-negara', '/malaysia/taman-negara/'],
  ['perhentian-redang', '/malaysia/perhentian-redang/'],
  ['kota-kinabalu-tunku-abdul-rahman', '/malaysia/kota-kinabalu-tunku-abdul-rahman/'],
  ['kinabalu-park-kundasang', '/malaysia/kinabalu-park-kundasang/'],
  ['sandakan-kinabatangan', '/malaysia/sandakan-kinabatangan/'],
  ['semporna-tun-sakaran', '/malaysia/semporna-tun-sakaran/'],
  ...malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => [`my-${cluster.hubSlug}`, `/malaysia/${cluster.hubSlug}/`]),
  ...malaysiaDepthGuides.map((guide) => [`my-${guide.hubSlug}-${guide.slug}`, guide.url]),
  ['about', '/about/'],
  ['contact', '/contact/'],
  ['privacy-policy', '/privacy-policy/'],
  ['terms-of-use', '/terms-of-use/'],
  ['japan', '/japan/'],
  ['hokkaido', '/japan/hokkaido/'],
  ['sapporo', '/japan/hokkaido/sapporo/'],
  ['otaru-shakotan', '/japan/hokkaido/otaru-shakotan/'],
  ['hakodate-onuma', '/japan/hokkaido/hakodate-onuma/'],
  ['furano-biei', '/japan/hokkaido/furano-biei/'],
  ['asahikawa-daisetsuzan', '/japan/hokkaido/asahikawa-daisetsuzan/'],
  ['niseko-yoichi', '/japan/hokkaido/niseko-yoichi/'],
  ['noboribetsu-lake-toya', '/japan/hokkaido/noboribetsu-lake-toya/'],
  ['kushiro-lake-akan', '/japan/hokkaido/kushiro-lake-akan/'],
  ['abashiri-shiretoko', '/japan/hokkaido/abashiri-shiretoko/'],
  ['kyoto', '/japan/kyoto/'],
  ['gion-pontocho', '/japan/kyoto/gion-pontocho/'],
  ['kiyomizudera-higashiyama', '/japan/kyoto/kiyomizudera-higashiyama/'],
  ['arashiyama-sagano', '/japan/kyoto/arashiyama-sagano/'],
  ['fushimi-inari-sake', '/japan/kyoto/fushimi-inari-sake-district/'],
  ['central-kyoto-nishiki', '/japan/kyoto/central-kyoto-nishiki/'],
  ['kyoto-station-south', '/japan/kyoto/kyoto-station-south/'],
  ['kinkakuji-northwest', '/japan/kyoto/kinkakuji-northwest/'],
  ['philosophers-path-okazaki', '/japan/kyoto/philosophers-path-okazaki/'],
  ['tokyo', '/japan/tokyo/'],
  ['shinjuku', '/japan/tokyo/shinjuku/'],
  ['shibuya-harajuku', '/japan/tokyo/shibuya-harajuku/'],
  ['asakusa-ueno', '/japan/tokyo/asakusa-ueno/'],
  ['tokyo-station-ginza', '/japan/tokyo/tokyo-station-ginza/'],
  ['akihabara-kanda', '/japan/tokyo/akihabara-kanda/'],
  ['roppongi-azabu', '/japan/tokyo/roppongi-azabu/'],
  ['odaiba-toyosu', '/japan/tokyo/odaiba-toyosu/'],
  ['ikebukuro', '/japan/tokyo/ikebukuro/'],
  ['osaka', '/japan/osaka/'],
  ['namba', '/japan/osaka/namba/'],
  ['umeda', '/japan/osaka/umeda/'],
  ['tennoji-shinsekai', '/japan/osaka/tennoji-shinsekai/'],
  ['osaka-castle', '/japan/osaka/osaka-castle-area/'],
  ['osaka-bay', '/japan/osaka/osaka-bay/'],
  ['south-korea', '/south-korea/'],
  ['seoul', '/south-korea/seoul/'],
  ['jongno-gwanghwamun', '/south-korea/seoul/jongno-gwanghwamun/'],
  ['bukchon-seochon', '/south-korea/seoul/bukchon-seochon/'],
  ['myeongdong-namsan', '/south-korea/seoul/myeongdong-namsan/'],
  ['hongdae-yeonnam', '/south-korea/seoul/hongdae-yeonnam/'],
  ['gangnam-jamsil', '/south-korea/seoul/gangnam-jamsil/'],
  ['itaewon-hannam', '/south-korea/seoul/itaewon-hannam/'],
  ['seongsu-seoul-forest', '/south-korea/seoul/seongsu-seoul-forest/'],
  ['yeouido-hangang', '/south-korea/seoul/yeouido-hangang/'],
  ['busan', '/south-korea/busan/'],
  ['nampo-jagalchi', '/south-korea/busan/nampo-jagalchi/'],
  ['gamcheon-songdo', '/south-korea/busan/gamcheon-songdo/'],
  ['haeundae-dongbaek', '/south-korea/busan/haeundae-dongbaek/'],
  ['gwangalli-millak', '/south-korea/busan/gwangalli-millak/'],
  ['seomyeon-jeonpo', '/south-korea/busan/seomyeon-jeonpo/'],
  ['yeongdo-taejongdae', '/south-korea/busan/yeongdo-taejongdae/'],
  ['haedong-yonggungsa-gijang', '/south-korea/busan/haedong-yonggungsa-gijang/'],
  ['dadaepo-amisan', '/south-korea/busan/dadaepo-amisan/'],
  ['gyeongju', '/south-korea/gyeongju/'],
  ['daereungwon-hwangnidan-gil', '/south-korea/gyeongju/daereungwon-hwangnidan-gil/'],
  ['wolseong-donggung-wolji', '/south-korea/gyeongju/wolseong-donggung-wolji/'],
  ['bulguksa-seokguram', '/south-korea/gyeongju/bulguksa-seokguram/'],
  ['namsan', '/south-korea/gyeongju/namsan/'],
  ['bomun-lake', '/south-korea/gyeongju/bomun-lake/'],
  ['yangdong-village', '/south-korea/gyeongju/yangdong-village/'],
  ['jeju', '/south-korea/jeju/'],
  ['jeju-city-yongduam', '/south-korea/jeju/jeju-city-yongduam/'],
  ['aewol-hyeopjae', '/south-korea/jeju/aewol-hyeopjae/'],
  ['hallasan', '/south-korea/jeju/hallasan/'],
  ['seogwipo-jeongbang', '/south-korea/jeju/seogwipo-jeongbang/'],
  ['jungmun-andeok', '/south-korea/jeju/jungmun-andeok/'],
  ['moseulpo-gapado', '/south-korea/jeju/moseulpo-gapado/'],
  ['seongsan-udo', '/south-korea/jeju/seongsan-udo/'],
  ['woljeongri-gimnyeong', '/south-korea/jeju/woljeongri-gimnyeong/'],
  ['thailand', '/thailand/'],
  ['bangkok', '/thailand/bangkok/'],
  ['rattanakosin-grand-palace', '/thailand/bangkok/rattanakosin-grand-palace/'],
  ['banglamphu-phra-athit', '/thailand/bangkok/banglamphu-phra-athit/'],
  ['yaowarat-talat-noi', '/thailand/bangkok/yaowarat-talat-noi/'],
  ['siam-ratchaprasong', '/thailand/bangkok/siam-ratchaprasong/'],
  ['sukhumvit-thong-lo', '/thailand/bangkok/sukhumvit-thong-lo/'],
  ['silom-sathorn', '/thailand/bangkok/silom-sathorn/'],
  ['thonburi-khlong-bang-luang', '/thailand/bangkok/thonburi-khlong-bang-luang/'],
  ['chatuchak-ari', '/thailand/bangkok/chatuchak-ari/'],
  ['chiang-mai', '/thailand/chiang-mai/'],
  ['old-city-moat', '/thailand/chiang-mai/old-city-moat/'],
  ['nimman-university', '/thailand/chiang-mai/nimman-university/'],
  ['doi-suthep-wat-pha-lat', '/thailand/chiang-mai/doi-suthep-wat-pha-lat/'],
  ['chang-moi-warorot', '/thailand/chiang-mai/chang-moi-warorot/'],
  ['wat-ket-ping-river', '/thailand/chiang-mai/wat-ket-ping-river/'],
  ['mae-rim-mae-sa', '/thailand/chiang-mai/mae-rim-mae-sa/'],
  ['mae-kampong', '/thailand/chiang-mai/mae-kampong/'],
  ['doi-inthanon', '/thailand/chiang-mai/doi-inthanon/'],
  ['andaman', '/thailand/andaman/'],
  ['phuket-old-town-south', '/thailand/andaman/phuket-old-town-south/'],
  ['phang-nga-ko-yao', '/thailand/andaman/phang-nga-ko-yao/'],
  ['krabi-railay', '/thailand/andaman/krabi-railay/'],
  ['phi-phi-islands', '/thailand/andaman/phi-phi-islands/'],
  ['ko-lanta', '/thailand/andaman/ko-lanta/'],
  ['trang-islands', '/thailand/andaman/trang-islands/'],
  ['ko-lipe-tarutao', '/thailand/andaman/ko-lipe-tarutao/'],
  ['similan-surin', '/thailand/andaman/similan-surin/'],
  ['ayutthaya', '/thailand/ayutthaya/'],
  ['railway-station-chao-phrom', '/thailand/ayutthaya/railway-station-chao-phrom/'],
  ['wat-mahathat-ratchaburana', '/thailand/ayutthaya/wat-mahathat-ratchaburana/'],
  ['palace-quarter-wat-phra-si-sanphet', '/thailand/ayutthaya/palace-quarter-wat-phra-si-sanphet/'],
  ['west-island-wat-lokayasutharam', '/thailand/ayutthaya/west-island-wat-lokayasutharam/'],
  ['wat-chaiwatthanaram-west-bank', '/thailand/ayutthaya/wat-chaiwatthanaram-west-bank/'],
  ['wat-yai-chai-mongkhon-phanan-choeng', '/thailand/ayutthaya/wat-yai-chai-mongkhon-phanan-choeng/'],
  ['foreign-settlements-south-river', '/thailand/ayutthaya/foreign-settlements-south-river/'],
  ['bang-pa-in-palace', '/thailand/ayutthaya/bang-pa-in-palace/'],
  ['china', '/china/'],
  ['beijing', '/china/beijing/'],
  ['central-axis-forbidden-city', '/china/beijing/central-axis-forbidden-city/'],
  ['jingshan-beihai', '/china/beijing/jingshan-beihai/'],
  ['temple-of-heaven-qianmen', '/china/beijing/temple-of-heaven-qianmen/'],
  ['shichahai-drum-tower', '/china/beijing/shichahai-drum-tower/'],
  ['yonghe-guozijian', '/china/beijing/yonghe-guozijian/'],
  ['798-chaoyang', '/china/beijing/798-chaoyang/'],
  ['summer-palace', '/china/beijing/summer-palace/'],
  ['mutianyu-great-wall', '/china/beijing/mutianyu-great-wall/'],
  ['shanghai', '/china/shanghai/'],
  ['shanghai-bund', '/china/shanghai/the-bund-huangpu/'],
  ['shanghai-lujiazui', '/china/shanghai/lujiazui-pudong/'],
  ['shanghai-yuyuan', '/china/shanghai/yuyuan-old-city/'],
  ['shanghai-wukang', '/china/shanghai/wukang-road-xuhui/'],
  ['shanghai-museums', '/china/shanghai/peoples-square-museums/'],
  ['shanghai-hongkou', '/china/shanghai/hongkou-suzhou-creek/'],
  ['shanghai-west-bund', '/china/shanghai/west-bund-longhua/'],
  ['shanghai-zhujiajiao', '/china/shanghai/zhujiajiao-water-town/'],
  ['hangzhou', '/china/hangzhou/'],
  ['hangzhou-north-lake', '/china/hangzhou/west-lake-north-broken-bridge/'],
  ['hangzhou-south-lake', '/china/hangzhou/west-lake-south-leifeng/'],
  ['hangzhou-lingyin', '/china/hangzhou/lingyin-feilai-peak/'],
  ['hangzhou-longjing', '/china/hangzhou/longjing-nine-creeks/'],
  ['hangzhou-grand-canal', '/china/hangzhou/grand-canal-gongchen-bridge/'],
  ['hangzhou-hefang', '/china/hangzhou/hefang-southern-song/'],
  ['hangzhou-xixi', '/china/hangzhou/xixi-wetland/'],
  ['hangzhou-liangzhu', '/china/hangzhou/liangzhu-archaeological-city/'],
  ['guangzhou', '/china/guangzhou/'],
  ['shenzhen', '/china/shenzhen/'],
  ['xiamen-fujian-tulou', '/china/xiamen-fujian-tulou/'],
  ['sanya-hainan', '/china/sanya-hainan/'],
  ['guilin-yangshuo', '/china/guilin-yangshuo/'],
  ['changsha', '/china/changsha/'],
  ['wuhan', '/china/wuhan/'],
  ['chengdu', '/china/chengdu/'],
  ['chongqing', '/china/chongqing/'],
  ['kunming', '/china/kunming/'],
  ['dali', '/china/dali/'],
  ['lijiang-shangri-la', '/china/lijiang-shangri-la/'],
  ['zhangjiajie', '/china/zhangjiajie/'],
  ['guiyang-guizhou', '/china/guiyang-guizhou/'],
  ['dunhuang-hexi-corridor', '/china/dunhuang-hexi-corridor/'],
  ['xinjiang-corridor', '/china/xinjiang-corridor/'],
  ['lhasa-tibetan-plateau', '/china/lhasa-tibetan-plateau/'],
  ['datong', '/china/datong/'],
  ['pingyao', '/china/pingyao/'],
  ['luoyang', '/china/luoyang/'],
  ['xian', '/china/xian/'],
  ['harbin', '/china/harbin/'],
  ['hohhot-inner-mongolia', '/china/hohhot-inner-mongolia/'],
  ['suzhou', '/china/suzhou/'],
  ['nanjing', '/china/nanjing/'],
  ['huangshan', '/china/huangshan/'],
  ['qingdao', '/china/qingdao/'],
  ['zh-home', '/zh/'],
  ['zh-malaysia', '/zh/malaysia/'],
  ['zh-kuala-lumpur-putrajaya', '/zh/malaysia/kuala-lumpur-putrajaya/'],
  ['zh-george-town-penang', '/zh/malaysia/george-town-penang/'],
  ['zh-melaka', '/zh/malaysia/melaka/'],
  ['zh-ipoh-kinta-valley', '/zh/malaysia/ipoh-kinta-valley/'],
  ['zh-langkawi', '/zh/malaysia/langkawi/'],
  ['zh-cameron-highlands', '/zh/malaysia/cameron-highlands/'],
  ['zh-taman-negara', '/zh/malaysia/taman-negara/'],
  ['zh-perhentian-redang', '/zh/malaysia/perhentian-redang/'],
  ['zh-kota-kinabalu-tunku-abdul-rahman', '/zh/malaysia/kota-kinabalu-tunku-abdul-rahman/'],
  ['zh-kinabalu-park-kundasang', '/zh/malaysia/kinabalu-park-kundasang/'],
  ['zh-sandakan-kinabatangan', '/zh/malaysia/sandakan-kinabatangan/'],
  ['zh-semporna-tun-sakaran', '/zh/malaysia/semporna-tun-sakaran/'],
  ['zh-japan', '/zh/japan/'],
  ['zh-south-korea', '/zh/south-korea/'],
  ['zh-thailand', '/zh/thailand/'],
  ['zh-china', '/zh/china/'],
  ['zh-beijing', '/zh/china/beijing/'],
  ['zh-shanghai', '/zh/china/shanghai/'],
  ['zh-shanghai-bund', '/zh/china/shanghai/the-bund-huangpu/'],
  ['zh-shanghai-lujiazui', '/zh/china/shanghai/lujiazui-pudong/'],
  ['zh-shanghai-yuyuan', '/zh/china/shanghai/yuyuan-old-city/'],
  ['zh-shanghai-wukang', '/zh/china/shanghai/wukang-road-xuhui/'],
  ['zh-shanghai-museums', '/zh/china/shanghai/peoples-square-museums/'],
  ['zh-shanghai-hongkou', '/zh/china/shanghai/hongkou-suzhou-creek/'],
  ['zh-shanghai-west-bund', '/zh/china/shanghai/west-bund-longhua/'],
  ['zh-shanghai-zhujiajiao', '/zh/china/shanghai/zhujiajiao-water-town/'],
  ['zh-hangzhou', '/zh/china/hangzhou/'],
  ['zh-guangzhou', '/zh/china/guangzhou/'],
  ['zh-chengdu', '/zh/china/chengdu/'],
  ['zh-lhasa', '/zh/china/lhasa-tibetan-plateau/'],
  ['zh-datong', '/zh/china/datong/'],
  ['zh-harbin', '/zh/china/harbin/'],
  ['zh-hohhot', '/zh/china/hohhot-inner-mongolia/'],
  ['zh-suzhou', '/zh/china/suzhou/'],
  ['ja-home', '/ja/'],
  ['ja-malaysia', '/ja/malaysia/'],
  ['ja-kuala-lumpur-putrajaya', '/ja/malaysia/kuala-lumpur-putrajaya/'],
  ['ja-george-town-penang', '/ja/malaysia/george-town-penang/'],
  ['ja-melaka', '/ja/malaysia/melaka/'],
  ['ja-ipoh-kinta-valley', '/ja/malaysia/ipoh-kinta-valley/'],
  ['ja-langkawi', '/ja/malaysia/langkawi/'],
  ['ja-cameron-highlands', '/ja/malaysia/cameron-highlands/'],
  ['ja-taman-negara', '/ja/malaysia/taman-negara/'],
  ['ja-perhentian-redang', '/ja/malaysia/perhentian-redang/'],
  ['ja-kota-kinabalu-tunku-abdul-rahman', '/ja/malaysia/kota-kinabalu-tunku-abdul-rahman/'],
  ['ja-kinabalu-park-kundasang', '/ja/malaysia/kinabalu-park-kundasang/'],
  ['ja-sandakan-kinabatangan', '/ja/malaysia/sandakan-kinabatangan/'],
  ['ja-semporna-tun-sakaran', '/ja/malaysia/semporna-tun-sakaran/'],
  ['ja-kyoto', '/ja/japan/kyoto/'],
  ['ja-china', '/ja/china/'],
  ['ja-shanghai', '/ja/china/shanghai/'],
  ['ja-hangzhou', '/ja/china/hangzhou/'],
  ['ja-guangzhou', '/ja/china/guangzhou/'],
  ['ja-chengdu', '/ja/china/chengdu/'],
  ['ja-lhasa', '/ja/china/lhasa-tibetan-plateau/'],
  ['ja-pingyao', '/ja/china/pingyao/'],
  ['ja-nanjing', '/ja/china/nanjing/'],
  ['ko-home', '/ko/'],
  ['ko-malaysia', '/ko/malaysia/'],
  ['ko-kuala-lumpur-putrajaya', '/ko/malaysia/kuala-lumpur-putrajaya/'],
  ['ko-george-town-penang', '/ko/malaysia/george-town-penang/'],
  ['ko-melaka', '/ko/malaysia/melaka/'],
  ['ko-ipoh-kinta-valley', '/ko/malaysia/ipoh-kinta-valley/'],
  ['ko-langkawi', '/ko/malaysia/langkawi/'],
  ['ko-cameron-highlands', '/ko/malaysia/cameron-highlands/'],
  ['ko-taman-negara', '/ko/malaysia/taman-negara/'],
  ['ko-perhentian-redang', '/ko/malaysia/perhentian-redang/'],
  ['ko-kota-kinabalu-tunku-abdul-rahman', '/ko/malaysia/kota-kinabalu-tunku-abdul-rahman/'],
  ['ko-kinabalu-park-kundasang', '/ko/malaysia/kinabalu-park-kundasang/'],
  ['ko-sandakan-kinabatangan', '/ko/malaysia/sandakan-kinabatangan/'],
  ['ko-semporna-tun-sakaran', '/ko/malaysia/semporna-tun-sakaran/'],
  ['ko-seoul', '/ko/south-korea/seoul/'],
  ['ko-china', '/ko/china/'],
  ['ko-shanghai', '/ko/china/shanghai/'],
  ['ko-hangzhou', '/ko/china/hangzhou/'],
  ['ko-guangzhou', '/ko/china/guangzhou/'],
  ['ko-chengdu', '/ko/china/chengdu/'],
  ['ko-lhasa', '/ko/china/lhasa-tibetan-plateau/'],
  ['ko-luoyang', '/ko/china/luoyang/'],
  ['ko-huangshan', '/ko/china/huangshan/'],
  ['th-home', '/th/'],
  ['th-malaysia', '/th/malaysia/'],
  ['th-kuala-lumpur-putrajaya', '/th/malaysia/kuala-lumpur-putrajaya/'],
  ['th-george-town-penang', '/th/malaysia/george-town-penang/'],
  ['th-melaka', '/th/malaysia/melaka/'],
  ['th-ipoh-kinta-valley', '/th/malaysia/ipoh-kinta-valley/'],
  ['th-langkawi', '/th/malaysia/langkawi/'],
  ['th-cameron-highlands', '/th/malaysia/cameron-highlands/'],
  ['th-taman-negara', '/th/malaysia/taman-negara/'],
  ['th-perhentian-redang', '/th/malaysia/perhentian-redang/'],
  ['th-kota-kinabalu-tunku-abdul-rahman', '/th/malaysia/kota-kinabalu-tunku-abdul-rahman/'],
  ['th-kinabalu-park-kundasang', '/th/malaysia/kinabalu-park-kundasang/'],
  ['th-sandakan-kinabatangan', '/th/malaysia/sandakan-kinabatangan/'],
  ['th-semporna-tun-sakaran', '/th/malaysia/semporna-tun-sakaran/'],
  ['th-bangkok', '/th/thailand/bangkok/'],
  ['th-china', '/th/china/'],
  ['th-shanghai', '/th/china/shanghai/'],
  ['th-hangzhou', '/th/china/hangzhou/'],
  ['th-guangzhou', '/th/china/guangzhou/'],
  ['th-chengdu', '/th/china/chengdu/'],
  ['th-lhasa', '/th/china/lhasa-tibetan-plateau/'],
  ['th-xian', '/th/china/xian/'],
  ['th-qingdao', '/th/china/qingdao/'],
  ...['zh', 'ja', 'ko', 'th'].flatMap((locale) => [
    ...malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => [`${locale}-my-${cluster.hubSlug}`, `/${locale}/malaysia/${cluster.hubSlug}/`]),
    ...malaysiaDepthClusters.map((cluster) => {
      const guide = cluster.guides[0];
      return [`${locale}-my-${cluster.hubSlug}-${guide.slug}`, `/${locale}/malaysia/${cluster.hubSlug}/${guide.slug}/`];
    })
  ])
];

const requestedRoutes = new Set((process.env.TRIPDISTILL_ROUTE_FILTER || '').split(',').map((item) => item.trim()).filter(Boolean));
const routes = requestedRoutes.size ? allRoutes.filter(([slug]) => requestedRoutes.has(slug)) : allRoutes;
if (!routes.length) throw new Error(`TRIPDISTILL_ROUTE_FILTER did not match a known route: ${[...requestedRoutes].join(', ')}`);

const allViewports = [
  ['desktop', 1440, 1000, false],
  ['mobile', 390, 844, true]
];
const requestedViewports = new Set((process.env.TRIPDISTILL_VIEWPORT_FILTER || '').split(',').map((item) => item.trim()).filter(Boolean));
const viewports = requestedViewports.size ? allViewports.filter(([name]) => requestedViewports.has(name)) : allViewports;
if (!viewports.length) throw new Error(`TRIPDISTILL_VIEWPORT_FILTER did not match desktop or mobile: ${[...requestedViewports].join(', ')}`);

if (!fs.existsSync(browserPath)) throw new Error(`Microsoft Edge not found at ${browserPath}`);

const browser = spawn(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--disable-extensions',
  '--disable-background-networking',
  '--disable-component-update',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  'about:blank'
], { stdio: 'ignore', windowsHide: true });

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForDebugger() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {}
    await delay(100);
  }
  throw new Error('Chrome DevTools endpoint did not become ready');
}

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
        else pending.resolve(message.result);
        return;
      }
      const listeners = this.listeners.get(message.method) || [];
      for (const listener of listeners) listener(message.params);
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject, method }));
  }

  once(method) {
    return new Promise((resolve) => {
      const listener = (params) => {
        const list = this.listeners.get(method) || [];
        this.listeners.set(method, list.filter((item) => item !== listener));
        resolve(params);
      };
      this.listeners.set(method, [...(this.listeners.get(method) || []), listener]);
    });
  }

  on(method, listener) {
    this.listeners.set(method, [...(this.listeners.get(method) || []), listener]);
  }
}

async function evaluate(client, expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Browser evaluation failed');
  return result.result.value;
}

async function navigate(client, url, dismissLanguageDialog = true) {
  const loaded = client.once('Page.loadEventFired');
  await client.send('Page.navigate', { url });
  await loaded;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const componentsReady = await evaluate(client, `new Promise((resolve) => {
        const started = Date.now();
        const timer = setInterval(() => {
          const ready = document.querySelector('#layout-header .site-header') &&
            document.querySelector('#layout-sidebar nav') &&
            document.querySelector('#layout-footer .site-footer');
          if (ready || Date.now() - started > 8000) {
            clearInterval(timer);
            resolve(Boolean(ready));
          }
        }, 80);
      })`);
      if (dismissLanguageDialog) {
        await evaluate(client, `(() => {
          document.querySelector('[data-language-stay]')?.click();
          return true;
        })()`);
      }
      return componentsReady;
    } catch (error) {
      if (!error.message.includes('Inspected target navigated or closed') || attempt === 3) throw error;
      await delay(180);
    }
  }
  return false;
}

async function waitForLocation(client, expectedPath) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const location = await evaluate(client, `({ pathname: window.location.pathname, search: window.location.search, hash: window.location.hash })`);
      if (location.pathname === expectedPath) return location;
    } catch {}
    await delay(100);
  }
  return evaluate(client, `({ pathname: window.location.pathname, search: window.location.search, hash: window.location.hash })`);
}

function sanitizeErrors(errors) {
  const browserOrAdFrameNoise = [
    'Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.',
    "Framing 'https://www.google.com/' violates the following report-only Content Security Policy directive"
  ];
  return [...new Set(errors.filter(Boolean).filter((error) => !browserOrAdFrameNoise.some((noise) => error.includes(noise))))];
}

await waitForDebugger();
const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' });
if (!targetResponse.ok) throw new Error(`Could not create Chrome target: HTTP ${targetResponse.status}`);
const target = await targetResponse.json();
const client = new CdpClient(target.webSocketDebuggerUrl);
await client.open();
await client.send('Page.enable');
await client.send('Page.bringToFront');
await client.send('Runtime.enable');
await client.send('Log.enable');
await client.send('Network.enable');
await client.send('Network.setBlockedURLs', {
  urls: [
    '*://pagead2.googlesyndication.com/*',
    '*://googleads.g.doubleclick.net/*',
    '*://www.google.com/recaptcha/*'
  ]
});

const runtimeErrors = [];
client.on('Runtime.exceptionThrown', (event) => {
  const details = event.exceptionDetails || {};
  const message = details.exception?.description || details.text || 'Runtime exception';
  const source = details.url ? ` (${details.url}:${Number(details.lineNumber || 0) + 1})` : '';
  runtimeErrors.push(`${message}${source}`);
});
client.on('Log.entryAdded', (event) => {
  if (event.entry?.level === 'error') {
    const source = event.entry.url ? ` (${event.entry.url}:${Number(event.entry.lineNumber || 0) + 1})` : '';
    runtimeErrors.push(`${event.entry.text}${source}`);
  }
});

const report = [];

for (const [viewportName, width, height, mobile] of viewports) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height
  });
  await client.send('Emulation.setTouchEmulationEnabled', { enabled: mobile, maxTouchPoints: mobile ? 5 : 1 });

  for (const [slug, route] of routes) {
    runtimeErrors.length = 0;
    const componentsReady = await navigate(client, `${baseUrl}${route}`);
    await delay(250);
    await evaluate(client, `new Promise((resolve) => {
      const images = [...document.images];
      images.forEach((image) => { image.loading = 'eager'; });
      const pending = images.filter((image) => !image.complete);
      if (!pending.length) {
        resolve(true);
        return;
      }
      let remaining = pending.length;
      const finish = () => {
        remaining -= 1;
        if (remaining <= 0) resolve(true);
      };
      pending.forEach((image) => {
        image.addEventListener('load', finish, { once: true });
        image.addEventListener('error', finish, { once: true });
      });
      setTimeout(() => resolve(false), 8000);
    })`);
    await evaluate(client, `(async () => {
      const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
      const focusSelector = ${JSON.stringify(focusSelector)};
      const step = Math.max(500, Math.floor(innerHeight * .75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        scrollTo(0, y);
        await wait(45);
      }
      const focusTarget = focusSelector ? document.querySelector(focusSelector) : null;
      if (focusTarget) focusTarget.scrollIntoView({ block: 'start' });
      else scrollTo(0, 0);
      await wait(700);
      const visibleImages = [...document.images].filter((image) => {
        const rect = image.getBoundingClientRect();
        return rect.bottom > -innerHeight && rect.top < innerHeight * 2;
      });
      await Promise.all(visibleImages.map((image) => image.decode?.().catch(() => undefined)));
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      await wait(200);
      return true;
    })()`);

    const state = await evaluate(client, `(() => {
      const root = document.documentElement;
      const brokenImages = [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src);
      const activeLinks = [...document.querySelectorAll('[data-nav-key].active')].map((link) => link.textContent.trim());
      const header = document.querySelector('.site-header')?.getBoundingClientRect();
      const componentErrors = [...document.querySelectorAll('.status-card[role="alert"]')].map((item) => item.textContent.trim());
      return {
        title: document.title,
        h1: document.querySelector('h1')?.textContent.trim() || '',
        viewportWidth: innerWidth,
        scrollWidth: root.scrollWidth,
        overflowX: root.scrollWidth > innerWidth + 1,
        brokenImages,
        activeLinks,
        componentErrors,
        headerHeight: header ? Math.round(header.height) : 0,
        footerLoaded: Boolean(document.querySelector('.site-footer')),
        mainTextLength: document.querySelector('main')?.innerText.length || 0
      };
    })()`);

    const metrics = await client.send('Page.getLayoutMetrics');
    const content = metrics.cssContentSize || metrics.contentSize;
    const screenshotOptions = {
      format: 'jpeg',
      quality: 86,
      fromSurface: true
    };
    if (!viewportScreenshotsOnly) {
      screenshotOptions.captureBeyondViewport = true;
      screenshotOptions.clip = {
        x: 0,
        y: 0,
        width: Math.ceil(content.width),
        height: Math.min(Math.ceil(content.height), 14000),
        scale: 1
      };
    }
    const screenshot = await client.send('Page.captureScreenshot', screenshotOptions);
    const screenshotPath = path.join(outputDir, `${slug}-${viewportName}.jpg`);
    fs.writeFileSync(screenshotPath, screenshot.data, 'base64');
    await client.send('HeapProfiler.collectGarbage').catch(() => {});

    report.push({
      route,
      viewport: viewportName,
      componentsReady,
      ...state,
      runtimeErrors: sanitizeErrors(runtimeErrors),
      screenshot: screenshotPath
    });
  }
}

const interactionClient = client;
const skipInteractions = process.env.TRIPDISTILL_SKIP_INTERACTIONS === '1';
let interactions = { skipped: true };
if (!skipInteractions) {
  await interactionClient.send('Page.bringToFront');
  await interactionClient.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: 390,
    screenHeight: 844
  });
  await delay(300);
  await navigate(interactionClient, `${baseUrl}/china/hangzhou/grand-canal-gongchen-bridge/`);
  await delay(400);
  interactions = await evaluate(interactionClient, `(async () => {
  const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.transition = 'none';
  document.querySelector('[data-menu-toggle]')?.click();
  await wait(100);
  const sidebarRect = sidebar?.getBoundingClientRect();
  const sidebarStyle = sidebar ? getComputedStyle(sidebar) : null;
  const menu = {
    opened: document.body.classList.contains('menu-open'),
    expanded: document.querySelector('[data-menu-toggle]')?.getAttribute('aria-expanded'),
    viewportWidth: innerWidth,
    mobileMedia: matchMedia('(max-width: 1080px)').matches,
    selectorMatch: Boolean(document.querySelector('body.menu-open .sidebar')),
    visible: sidebarRect ? sidebarRect.right > 0 && sidebarRect.left < innerWidth : false,
    rect: sidebarRect ? { left: sidebarRect.left, right: sidebarRect.right, width: sidebarRect.width } : null,
    transform: sidebarStyle?.transform || '',
    display: sidebarStyle?.display || '',
    active: document.querySelector('#layout-sidebar .active')?.textContent.trim() || '',
    accordionCount: document.querySelectorAll('#layout-sidebar details.sidebar-accordion').length,
    asiaOpen: Boolean(document.querySelector('#layout-sidebar details[data-sidebar-id="asia"]')?.open),
    chinaOpen: Boolean(document.querySelector('#layout-sidebar details[data-sidebar-id="china"]')?.open),
    chapterOpen: Boolean(document.querySelector('#layout-sidebar [data-nav-key="grand-canal-gongchen-bridge"]')?.closest('details')?.open)
  };
  document.querySelector('[data-menu-close]')?.click();
  await wait(450);
  document.querySelector('[data-search-toggle]')?.click();
  const input = document.querySelector('#site-search');
  input.value = 'Hangzhou';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  for (let attempt = 0; attempt < 50 && !document.querySelector('#search-results .search-result'); attempt += 1) {
    await wait(100);
  }
  const results = document.querySelector('#search-results');
  const resultRect = results?.getBoundingClientRect();
  const search = {
    open: document.body.classList.contains('search-open'),
    count: results?.querySelectorAll('.search-result').length || 0,
    first: results?.querySelector('.search-result strong')?.textContent.trim() || '',
    withinViewport: resultRect ? resultRect.left >= 0 && resultRect.right <= innerWidth : false
  };
  document.querySelector('.faq-list summary')?.click();
  const faq = { opened: Boolean(document.querySelector('.faq-list details[open]')) };
  return { menu, search, faq };
  })()`);

  const browserUserAgent = await evaluate(interactionClient, 'navigator.userAgent');
  const languageCases = [
    { key: 'zh-Hant', acceptLanguage: 'zh-TW,zh;q=0.9,en;q=0.8', suffix: 'zh', expectedPath: '/zh/china/shanghai/', expectedTitle: '建議使用繁體中文' },
    { key: 'ja', acceptLanguage: 'ja-JP,ja;q=0.9,en;q=0.8', suffix: 'ja', expectedPath: '/ja/china/shanghai/', expectedTitle: '日本語版に切り替えますか？' },
    { key: 'ko', acceptLanguage: 'ko-KR,ko;q=0.9,en;q=0.8', suffix: 'ko', expectedPath: '/ko/china/shanghai/', expectedTitle: '한국어판으로 전환할까요?' },
    { key: 'th', acceptLanguage: 'th-TH,th;q=0.9,en;q=0.8', suffix: 'th', expectedPath: '/th/china/shanghai/', expectedTitle: 'เปลี่ยนเป็นภาษาไทยหรือไม่' }
  ];
  const suggestions = {};
  for (const testCase of languageCases) {
    await interactionClient.send('Network.setUserAgentOverride', { userAgent: browserUserAgent, acceptLanguage: testCase.acceptLanguage });
    await evaluate(interactionClient, `localStorage.removeItem('tripdistill-language-choice-v1')`);
    await navigate(interactionClient, `${baseUrl}/china/shanghai/?language-test=${testCase.suffix}#itinerary`, false);
    const prompt = await evaluate(interactionClient, `(() => {
      const dialog = document.querySelector('.language-dialog');
      const state = {
        visible: Boolean(dialog),
        title: dialog?.querySelector('h2')?.textContent.trim() || '',
        message: dialog?.querySelector('#language-dialog-copy')?.textContent.trim() || '',
        accept: dialog?.querySelector('[data-language-accept]')?.textContent.trim() || '',
        stay: dialog?.querySelector('[data-language-stay]')?.textContent.trim() || '',
        languages: [...navigator.languages]
      };
      dialog?.querySelector('[data-language-accept]')?.click();
      return state;
    })()`);
    const location = await waitForLocation(interactionClient, testCase.expectedPath);
    const stored = await evaluate(interactionClient, `localStorage.getItem('tripdistill-language-choice-v1')`);
    suggestions[testCase.key] = { ...testCase, prompt, location, stored };
  }

  await interactionClient.send('Network.setUserAgentOverride', { userAgent: browserUserAgent, acceptLanguage: 'en-US,en;q=0.9' });
  await evaluate(interactionClient, `localStorage.removeItem('tripdistill-language-choice-v1')`);
  await navigate(interactionClient, `${baseUrl}/ja/china/shanghai/?language-test=en#itinerary`, false);
  const englishPrompt = await evaluate(interactionClient, `(() => {
    const dialog = document.querySelector('.language-dialog');
    const state = {
      visible: Boolean(dialog),
      title: dialog?.querySelector('h2')?.textContent.trim() || '',
      message: dialog?.querySelector('#language-dialog-copy')?.textContent.trim() || ''
    };
    dialog?.querySelector('[data-language-accept]')?.click();
    return state;
  })()`);
  const englishLocation = await waitForLocation(interactionClient, '/china/shanghai/');
  const englishStored = await evaluate(interactionClient, `localStorage.getItem('tripdistill-language-choice-v1')`);

  await interactionClient.send('Network.setUserAgentOverride', { userAgent: browserUserAgent, acceptLanguage: 'zh-TW,zh;q=0.9,en;q=0.8' });
  await evaluate(interactionClient, `localStorage.removeItem('tripdistill-language-choice-v1')`);
  await navigate(interactionClient, `${baseUrl}/china/shanghai/`, false);
  const stayChoice = await evaluate(interactionClient, `(() => {
    const visibleBefore = Boolean(document.querySelector('.language-dialog'));
    document.querySelector('[data-language-stay]')?.click();
    return { visibleBefore, visibleAfter: Boolean(document.querySelector('.language-dialog')), pathname: location.pathname, stored: localStorage.getItem('tripdistill-language-choice-v1') };
  })()`);

  await interactionClient.send('Network.setUserAgentOverride', { userAgent: browserUserAgent, acceptLanguage: 'en-US,en;q=0.9' });
  await navigate(interactionClient, `${baseUrl}/china/shanghai/?language-menu=1#itinerary`);
  const languageMenu = await evaluate(interactionClient, `(() => {
    const button = document.querySelector('[data-language-menu-toggle]');
    button?.click();
    return {
      expanded: button?.getAttribute('aria-expanded') || '',
      visible: !document.querySelector('[data-language-menu]')?.hidden,
      current: document.querySelector('[data-language-current]')?.textContent.trim() || '',
      options: [...document.querySelectorAll('header [data-language-option]')].map((link) => ({ locale: link.dataset.languageOption, href: link.getAttribute('href'), current: link.getAttribute('aria-current') }))
    };
  })()`);

  interactions.language = { suggestions, englishPrompt, englishLocation, englishStored, stayChoice, languageMenu };
}

const failures = report.filter((item) => !item.componentsReady || item.overflowX || item.brokenImages.length || item.componentErrors.length || item.runtimeErrors.length || !item.footerLoaded || !item.h1);
const result = {
  outputDir,
  pagesChecked: report.length,
  failures,
  interactions,
  report
};

fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({
  outputDir,
  pagesChecked: report.length,
  failureCount: failures.length,
  interactions,
  pageSummary: report.map(({ route, viewport, overflowX, brokenImages, runtimeErrors, activeLinks, mainTextLength }) => ({
    route,
    viewport,
    overflowX,
    brokenImages: brokenImages.length,
    runtimeErrors: runtimeErrors.length,
    activeLinks,
    mainTextLength
  }))
}, null, 2));

await interactionClient.send('Browser.close').catch(() => {});
await delay(250);
if (!browser.killed) browser.kill();
const language = interactions.language || {};
const suggestionFailures = !skipInteractions && [
  ['zh-Hant', '/zh/china/shanghai/', '建議使用繁體中文'],
  ['ja', '/ja/china/shanghai/', '日本語版に切り替えますか？'],
  ['ko', '/ko/china/shanghai/', '한국어판으로 전환할까요?'],
  ['th', '/th/china/shanghai/', 'เปลี่ยนเป็นภาษาไทยหรือไม่']
].some(([locale, pathname, title]) => {
  const result = language.suggestions?.[locale];
  return !result?.prompt?.visible || result.prompt.title !== title || result.location?.pathname !== pathname || result.location?.search !== `?language-test=${locale === 'zh-Hant' ? 'zh' : locale}` || result.location?.hash !== '#itinerary' || result.stored !== locale;
});
const languageOptions = language.languageMenu?.options || [];
const interactionFailed = !skipInteractions && (
  !interactions.menu.opened ||
  interactions.menu.expanded !== 'true' ||
  !interactions.menu.visible ||
  interactions.menu.active !== 'Grand Canal & Gongchen Bridge' ||
  interactions.menu.accordionCount < 20 ||
  !interactions.menu.asiaOpen ||
  !interactions.menu.chinaOpen ||
  !interactions.menu.chapterOpen ||
  interactions.search.count < 1 ||
  interactions.search.first !== 'Hangzhou Travel Guide' ||
  !interactions.search.withinViewport ||
  !interactions.faq.opened ||
  suggestionFailures ||
  !language.englishPrompt?.visible ||
  language.englishPrompt?.title !== 'Switch to English?' ||
  language.englishLocation?.pathname !== '/china/shanghai/' ||
  language.englishLocation?.search !== '?language-test=en' ||
  language.englishLocation?.hash !== '#itinerary' ||
  language.englishStored !== 'en' ||
  !language.stayChoice?.visibleBefore ||
  language.stayChoice?.visibleAfter ||
  language.stayChoice?.pathname !== '/china/shanghai/' ||
  language.stayChoice?.stored !== 'en' ||
  language.languageMenu?.expanded !== 'true' ||
  !language.languageMenu?.visible ||
  language.languageMenu?.current !== 'EN' ||
  languageOptions.length !== 5 ||
  !['en', 'zh-Hant', 'ja', 'ko', 'th'].every((locale) => languageOptions.some((option) => option.locale === locale && option.href?.includes(locale === 'en' ? '/china/shanghai/' : `/${locale === 'zh-Hant' ? 'zh' : locale}/china/shanghai/`)))
);
if (failures.length || interactionFailed) {
  process.exitCode = 1;
}
