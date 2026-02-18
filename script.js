/**
 * 嘆佬NO TIME - Landing Page Scripts
 * Japanese minimalist design
 */

(function () {
  'use strict';

  const LANG_KEY = 'notime-lang';
  const LANG_EN = 'en';
  const LANG_ZH = 'zh';

  let currentLang = localStorage.getItem(LANG_KEY) || LANG_EN;
  let currentLightboxIndex = 0;
  let visibleItems = [];

  /**
   * Switch all translatable elements to the given language
   */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active',
        (lang === LANG_EN && btn.id === 'lang-en') ||
        (lang === LANG_ZH && btn.id === 'lang-zh')
      );
    });

    document.documentElement.lang = lang === LANG_ZH ? 'zh-Hant' : 'en';

    document.querySelectorAll('[data-en][data-zh]').forEach((el) => {
      const text = lang === LANG_ZH ? el.getAttribute('data-zh') : el.getAttribute('data-en');
      if (text && el.textContent !== text) {
        el.textContent = text;
      }
    });
  }

  /**
   * Initialize language toggle buttons
   */
  function initLanguageToggle() {
    document.getElementById('lang-en')?.addEventListener('click', () => setLanguage(LANG_EN));
    document.getElementById('lang-zh')?.addEventListener('click', () => setLanguage(LANG_ZH));
    setLanguage(currentLang);
  }

  /**
   * Update visible items array for lightbox navigation
   */
  function updateVisibleItems() {
    visibleItems = Array.from(document.querySelectorAll('.portfolio-item:not(.hidden)'));
  }

  /**
   * Portfolio filter
   */
  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        items.forEach((item) => {
          const category = item.getAttribute('data-category');
          const show = filter === 'all' || category === filter;
          item.classList.toggle('hidden', !show);
        });

        updateVisibleItems();
      });
    });

    updateVisibleItems();
  }

  /**
   * Lightbox with prev/next navigation
   */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    function openLightbox(index) {
      if (index < 0 || index >= visibleItems.length) return;
      currentLightboxIndex = index;
      const img = visibleItems[index].querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
      }
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPrev() {
      const newIndex = (currentLightboxIndex - 1 + visibleItems.length) % visibleItems.length;
      openLightbox(newIndex);
    }

    function showNext() {
      const newIndex = (currentLightboxIndex + 1) % visibleItems.length;
      openLightbox(newIndex);
    }

    document.querySelectorAll('.portfolio-item').forEach((item) => {
      item.addEventListener('click', () => {
        updateVisibleItems();
        const index = visibleItems.indexOf(item);
        if (index !== -1) openLightbox(index);
      });
    });

    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', showPrev);
    nextBtn?.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  /**
   * Scroll indicator
   */
  function initScrollIndicator() {
    const hint = document.querySelector('.scroll-hint');
    if (hint) {
      hint.addEventListener('click', () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  /**
   * Navbar scroll effect
   */
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        nav.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * Smooth scroll for nav links
   */
  function initSmoothScroll() {
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Initialize all
   */
  function init() {
    initLanguageToggle();
    initPortfolioFilter();
    initLightbox();
    initScrollIndicator();
    initNavScroll();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
