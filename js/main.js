(function () {
  'use strict';

  const BUILD_VERSION = '20260826-9';
  const COMPONENTS = [
    ['layout-header', '/components/header.html'],
    ['layout-sidebar', '/components/sidebar.html'],
    ['layout-footer', '/components/footer.html']
  ];
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
      host.innerHTML = '<div class="status-card" role="alert">This navigation component could not load. Refresh the page to try again.</div>';
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
      searchIndexPromise = fetch('/data/search-index.json?v=' + BUILD_VERSION).then(function (response) {
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
      results.innerHTML = '<div class="search-empty">No guide found yet. Try “Jeju”, “Busan”, “ferry” or “transport”.</div>';
    } else {
      results.innerHTML = matches.map(function (item) {
        return '<a class="search-result" role="option" href="' + encodeURI(item.url) + '">' +
          '<span class="search-result-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></span>' +
          '<span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.parent) + '</small></span>' +
          '<span>' + escapeHtml(item.type) + '</span></a>';
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

  function setupGlobalEvents() {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenu(false);
        setSearchOpen(false);
      }
    });
    document.querySelectorAll('[data-current-year]').forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
  }

  async function init() {
    await Promise.all(COMPONENTS.map(function (component) { return loadComponent(component[0], component[1]); }));
    setupMenu();
    setupSearch();
    applyActiveNavigation();
    setupGlobalEvents();
    window.dispatchEvent(new CustomEvent('tripdistill:components-ready'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
