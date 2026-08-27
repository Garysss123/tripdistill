(function () {
  'use strict';

  const BUILD_VERSION = '20260827-2';
  const LOCALES = {
    en: { prefix: '', short: 'EN', nativeName: 'English' },
    'zh-Hant': { prefix: '/zh', short: '繁中', nativeName: '繁體中文' },
    ja: { prefix: '/ja', short: '日本語', nativeName: '日本語' },
    ko: { prefix: '/ko', short: '한국어', nativeName: '한국어' },
    th: { prefix: '/th', short: 'ไทย', nativeName: 'ไทย' }
  };
  const documentLanguage = document.documentElement.lang.toLowerCase();
  const LOCALE = documentLanguage.startsWith('zh') ? 'zh-Hant'
    : documentLanguage.startsWith('ja') ? 'ja'
      : documentLanguage.startsWith('ko') ? 'ko'
        : documentLanguage.startsWith('th') ? 'th'
          : 'en';
  const LOCALE_PREFIX = LOCALES[LOCALE].prefix;
  const LANGUAGE_CHOICE_KEY = 'tripdistill-language-choice-v1';
  const COMPONENTS = [
    ['layout-header', LOCALE_PREFIX + '/components/header.html'],
    ['layout-sidebar', LOCALE_PREFIX + '/components/sidebar.html'],
    ['layout-footer', LOCALE_PREFIX + '/components/footer.html']
  ];
  const COPY_BY_LOCALE = {
    en: {
      componentError: 'This navigation component could not load. Refresh the page to try again.',
      noResults: 'No guide found yet. Try “Shanghai”, “Jeju”, “ferry” or “transport”.',
      languageAria: 'Choose language',
      editionNote: 'English edition · Facts change—verify time-sensitive details with linked official sources.',
      resultTypeFallback: 'Guide'
    },
    'zh-Hant': {
      componentError: '導覽元件暫時無法載入，請重新整理頁面再試一次。',
      noResults: '暫時找不到相關指南，請改用城市、地區、交通或景點名稱搜尋。',
      languageAria: '選擇語言',
      editionNote: '繁體中文版 · 資訊可能變動，請透過頁面連結的官方來源確認具時效性的細節。',
      resultTypeFallback: '指南'
    },
    ja: {
      componentError: 'ナビゲーションを読み込めませんでした。ページを再読み込みしてください。',
      noResults: '該当するガイドが見つかりません。都市、地域、交通機関、観光スポット名で検索してください。',
      languageAria: '言語を選択',
      editionNote: '日本語版 · 最新情報は変更されるため、リンク先の公式情報をご確認ください。',
      resultTypeFallback: 'ガイド'
    },
    ko: {
      componentError: '탐색 메뉴를 불러오지 못했습니다. 페이지를 새로고침해 주세요.',
      noResults: '관련 가이드를 찾지 못했습니다. 도시, 지역, 교통편 또는 명소 이름으로 검색해 보세요.',
      languageAria: '언어 선택',
      editionNote: '한국어판 · 시기에 따라 달라지는 정보는 연결된 공식 자료에서 다시 확인하세요.',
      resultTypeFallback: '가이드'
    },
    th: {
      componentError: 'ไม่สามารถโหลดเมนูนำทางได้ โปรดลองรีเฟรชหน้าเว็บ',
      noResults: 'ยังไม่พบคู่มือที่เกี่ยวข้อง ลองค้นหาด้วยชื่อเมือง ย่าน การเดินทาง หรือสถานที่ท่องเที่ยว',
      languageAria: 'เลือกภาษา',
      editionNote: 'ฉบับภาษาไทย · ข้อมูลอาจเปลี่ยนแปลง โปรดตรวจสอบรายละเอียดล่าสุดจากแหล่งข้อมูลทางการที่เชื่อมโยงไว้',
      resultTypeFallback: 'คู่มือ'
    }
  };
  const COPY = COPY_BY_LOCALE[LOCALE];
  let searchIndexPromise;

  async function loadComponent(id, url) {
    const host = document.getElementById(id);
    if (!host) return;
    try {
      const response = await fetch(url + '?v=' + BUILD_VERSION);
      if (!response.ok) throw new Error('HTTP ' + response.status);
      host.innerHTML = await response.text();
    } catch (error) {
      console.error('TripDistill component failed:', url, error);
      host.innerHTML = '<div class="status-card" role="alert">' + COPY.componentError + '</div>';
    }
  }

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    document.querySelectorAll('[data-menu-toggle]').forEach(function (button) {
      button.setAttribute('aria-expanded', String(open));
    });
  }

  function setupMenu() {
    document.querySelectorAll('[data-menu-toggle]').forEach(function (button) {
      button.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
    });
    document.querySelectorAll('[data-menu-close], [data-mobile-overlay]').forEach(function (element) {
      element.addEventListener('click', function () { setMenu(false); });
    });
    document.querySelectorAll('#layout-sidebar a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
  }

  function setSearchOpen(open) {
    document.body.classList.toggle('search-open', open);
    const button = document.querySelector('[data-search-toggle]');
    const input = document.getElementById('site-search');
    if (button) button.setAttribute('aria-expanded', String(open));
    if (open && input) window.setTimeout(function () { input.focus(); }, 50);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character];
    });
  }

  function loadSearchIndex() {
    if (!searchIndexPromise) {
      searchIndexPromise = fetch(LOCALE_PREFIX + '/data/search-index.json?v=' + BUILD_VERSION).then(function (response) {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      }).catch(function (error) {
        console.error(error);
        return [];
      });
    }
    return searchIndexPromise;
  }

  function getSearchScore(item, query) {
    const title = item.title.toLowerCase();
    const parent = item.parent.toLowerCase();
    const summary = item.summary.toLowerCase();
    const keywords = (item.keywords || []).map(function (keyword) { return keyword.toLowerCase(); });
    let score = 0;
    if (title === query) score = Math.max(score, 100);
    else if (title.startsWith(query)) score = Math.max(score, 85);
    else if (title.includes(query)) score = Math.max(score, 70);
    if (keywords.includes(query)) score = Math.max(score, 80);
    else if (keywords.some(function (keyword) { return keyword.startsWith(query); })) score = Math.max(score, 60);
    else if (keywords.some(function (keyword) { return keyword.includes(query); })) score = Math.max(score, 45);
    if (parent.includes(query)) score = Math.max(score, 30);
    if (summary.includes(query)) score = Math.max(score, 20);
    return score;
  }

  async function renderSearch(query) {
    const results = document.getElementById('search-results');
    const input = document.getElementById('site-search');
    if (!results || !input) return;
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      results.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    const index = await loadSearchIndex();
    const matches = index.map(function (item, order) {
      return { item: item, order: order, score: getSearchScore(item, normalized) };
    }).filter(function (result) {
      return result.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score || a.order - b.order;
    }).slice(0, 7).map(function (result) {
      return result.item;
    });
    if (!matches.length) {
      results.innerHTML = '<div class="search-empty">' + COPY.noResults + '</div>';
    } else {
      results.innerHTML = matches.map(function (item) {
        return '<a class="search-result" role="option" href="' + encodeURI(item.url) + '">' +
          '<span class="search-result-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></span>' +
          '<span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.parent) + '</small></span>' +
          '<span>' + escapeHtml(item.type || COPY.resultTypeFallback) + '</span></a>';
      }).join('');
    }
    results.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function setupSearch() {
    const input = document.getElementById('site-search');
    const results = document.getElementById('search-results');
    const toggle = document.querySelector('[data-search-toggle]');
    if (toggle) toggle.addEventListener('click', function () { setSearchOpen(!document.body.classList.contains('search-open')); });
    if (!input || !results) return;
    input.addEventListener('input', function () { renderSearch(input.value); });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        results.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        setSearchOpen(false);
      }
      if (event.key === 'Enter') {
        const first = results.querySelector('a');
        if (first) window.location.href = first.href;
      }
    });
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.header-search') && !event.target.closest('[data-search-toggle]')) {
        results.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        if (window.innerWidth <= 640) setSearchOpen(false);
      }
    });
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) {
      input.value = initialQuery;
      if (window.innerWidth <= 640) setSearchOpen(true);
      renderSearch(initialQuery);
    }
  }

  function applyActiveNavigation() {
    const page = document.body.dataset.page || 'home';
    const parentPage = document.body.dataset.parentPage || page;
    document.querySelectorAll('[data-nav-key]').forEach(function (link) {
      const isPrimaryNavigation = Boolean(link.closest('.desktop-nav'));
      const exact = link.dataset.navKey === page;
      const parent = isPrimaryNavigation && link.dataset.navKey === parentPage;
      const active = exact || parent;
      link.classList.toggle('active', active);
      if (exact) link.setAttribute('aria-current', 'page');
      else if (parent) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function localizedPath(targetLocale) {
    const current = window.location.pathname;
    const stripped = current.replace(/^\/(?:zh|ja|ko|th)(?=\/|$)/, '') || '/';
    const prefix = LOCALES[targetLocale]?.prefix || '';
    return prefix ? (stripped === '/' ? prefix + '/' : prefix + stripped) : stripped;
  }

  function rememberLanguage(locale) {
    try { window.localStorage.setItem(LANGUAGE_CHOICE_KEY, locale); } catch (error) { /* Storage can be unavailable in strict privacy modes. */ }
  }

  function setupLanguageSwitches() {
    document.querySelectorAll('[data-language-current]').forEach(function (label) {
      label.textContent = LOCALES[LOCALE].short;
    });
    document.querySelectorAll('[data-language-menu-toggle]').forEach(function (button) {
      button.setAttribute('aria-label', COPY.languageAria);
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        const container = button.closest('.language-menu');
        const panel = container?.querySelector('[data-language-menu]');
        if (!container || !panel) return;
        const open = panel.hidden;
        document.querySelectorAll('.language-menu.open').forEach(function (other) {
          if (other === container) return;
          other.classList.remove('open');
          const otherPanel = other.querySelector('[data-language-menu]');
          const otherButton = other.querySelector('[data-language-menu-toggle]');
          if (otherPanel) otherPanel.hidden = true;
          if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
        });
        container.classList.toggle('open', open);
        panel.hidden = !open;
        button.setAttribute('aria-expanded', String(open));
      });
    });
    document.querySelectorAll('[data-language-option]').forEach(function (link) {
      const targetLocale = link.dataset.languageOption;
      if (!LOCALES[targetLocale]) return;
      link.href = localizedPath(targetLocale) + window.location.search + window.location.hash;
      link.setAttribute('lang', targetLocale);
      link.setAttribute('hreflang', targetLocale);
      if (targetLocale === LOCALE) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
      link.addEventListener('click', function () { rememberLanguage(targetLocale); });
    });
  }

  function browserPreferredLocale() {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (const language of languages) {
      const normalized = String(language).toLowerCase();
      if (normalized === 'zh-tw' || normalized === 'zh-hk' || normalized === 'zh-mo' || normalized.startsWith('zh-hant')) return 'zh-Hant';
      if (normalized === 'ja' || normalized.startsWith('ja-')) return 'ja';
      if (normalized === 'ko' || normalized.startsWith('ko-')) return 'ko';
      if (normalized === 'th' || normalized.startsWith('th-')) return 'th';
      if (normalized === 'en' || normalized.startsWith('en-')) return 'en';
    }
    return 'en';
  }

  function getRememberedLanguage() {
    try { return window.localStorage.getItem(LANGUAGE_CHOICE_KEY); } catch (error) { return null; }
  }

  function showLanguageSuggestion() {
    if (getRememberedLanguage()) return;
    const suggestedLocale = browserPreferredLocale();
    if (suggestedLocale === LOCALE) return;

    const suggestionCopy = {
      en: {
        kicker: 'TripDistill language',
        title: 'Switch to English?',
        message: 'Your browser appears to prefer English. Would you like to open the complete English edition? The site will not redirect automatically.',
        accept: 'Switch to English',
        stay: 'Stay on this edition'
      },
      'zh-Hant': {
        kicker: 'TripDistill 語言',
        title: '建議使用繁體中文',
        message: '偵測到您的瀏覽器偏好繁體中文。是否切換至完整的繁體中文頁面？網站不會自動重新導向。',
        accept: '切換至繁體中文',
        stay: '留在目前語言'
      },
      ja: {
        kicker: 'TripDistill の言語',
        title: '日本語版に切り替えますか？',
        message: 'ブラウザーの言語設定は日本語です。完全な日本語版を開きますか？サイトが自動的にリダイレクトすることはありません。',
        accept: '日本語に切り替える',
        stay: '現在の言語のまま'
      },
      ko: {
        kicker: 'TripDistill 언어',
        title: '한국어판으로 전환할까요?',
        message: '브라우저의 기본 언어가 한국어로 설정되어 있습니다. 전체 한국어판을 여시겠습니까? 사이트가 자동으로 이동하지는 않습니다.',
        accept: '한국어로 전환',
        stay: '현재 언어 유지'
      },
      th: {
        kicker: 'ภาษาของ TripDistill',
        title: 'เปลี่ยนเป็นภาษาไทยหรือไม่',
        message: 'เบราว์เซอร์ของคุณตั้งค่าภาษาไทยไว้ ต้องการเปิดเว็บไซต์ฉบับภาษาไทยแบบเต็มหรือไม่ เว็บไซต์จะไม่เปลี่ยนหน้าให้อัตโนมัติ',
        accept: 'เปลี่ยนเป็นภาษาไทย',
        stay: 'ใช้ภาษาปัจจุบันต่อ'
      }
    }[suggestedLocale];
    const backdrop = document.createElement('div');
    backdrop.className = 'language-dialog-backdrop';
    backdrop.innerHTML = '<section class="language-dialog" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title" aria-describedby="language-dialog-copy">' +
      '<span class="language-dialog-mark" aria-hidden="true">文 / A</span>' +
      '<div><p class="language-dialog-kicker">' + suggestionCopy.kicker + '</p><h2 id="language-dialog-title">' + suggestionCopy.title + '</h2><p id="language-dialog-copy">' + suggestionCopy.message + '</p></div>' +
      '<div class="language-dialog-actions"><button class="button primary" type="button" data-language-accept>' + suggestionCopy.accept + '</button><button class="button secondary" type="button" data-language-stay>' + suggestionCopy.stay + '</button></div>' +
      '</section>';
    document.body.appendChild(backdrop);
    const accept = backdrop.querySelector('[data-language-accept]');
    const stay = backdrop.querySelector('[data-language-stay]');
    const onKeydown = function (event) {
      if (event.key === 'Escape' && document.body.contains(backdrop)) close();
    };
    const close = function () {
      rememberLanguage(LOCALE);
      document.removeEventListener('keydown', onKeydown);
      backdrop.remove();
    };
    accept.addEventListener('click', function () {
      rememberLanguage(suggestedLocale);
      document.removeEventListener('keydown', onKeydown);
      window.location.assign(localizedPath(suggestedLocale) + window.location.search + window.location.hash);
    });
    stay.addEventListener('click', close);
    backdrop.addEventListener('click', function (event) { if (event.target === backdrop) close(); });
    document.addEventListener('keydown', onKeydown);
    window.setTimeout(function () { accept.focus(); }, 50);
  }

  function setupGlobalEvents() {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenu(false);
        setSearchOpen(false);
        document.querySelectorAll('.language-menu.open').forEach(function (container) {
          container.classList.remove('open');
          const panel = container.querySelector('[data-language-menu]');
          const button = container.querySelector('[data-language-menu-toggle]');
          if (panel) panel.hidden = true;
          if (button) button.setAttribute('aria-expanded', 'false');
        });
      }
    });
    document.addEventListener('click', function (event) {
      if (event.target.closest('.language-menu')) return;
      document.querySelectorAll('.language-menu.open').forEach(function (container) {
        container.classList.remove('open');
        const panel = container.querySelector('[data-language-menu]');
        const button = container.querySelector('[data-language-menu-toggle]');
        if (panel) panel.hidden = true;
        if (button) button.setAttribute('aria-expanded', 'false');
      });
    });
    document.querySelectorAll('[data-current-year]').forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
    document.querySelectorAll('[data-edition-note]').forEach(function (element) {
      element.textContent = COPY.editionNote;
    });
  }

  async function init() {
    document.documentElement.dataset.locale = LOCALE;
    showLanguageSuggestion();
    await Promise.all(COMPONENTS.map(function (component) { return loadComponent(component[0], component[1]); }));
    setupMenu();
    setupSearch();
    applyActiveNavigation();
    setupLanguageSwitches();
    setupGlobalEvents();
    window.dispatchEvent(new CustomEvent('tripdistill:components-ready'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
