import { useCallback, useEffect, useRef, useState } from 'react';
import { products } from './data/products.js';
import { IconSprite } from './components/Icon.jsx';
import Announcement from './components/Announcement.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Categories from './components/Categories.jsx';
import Catalog from './components/Catalog.jsx';
import TabletBanner from './components/TabletBanner.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import LegalNotice from './components/LegalNotice.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ProductDialog from './components/ProductDialog.jsx';

function readFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem('burgos-favorites') || '[]');
    return new Set(
      Array.isArray(stored) ? stored.filter((id) => products.some((p) => p.id === id)) : [],
    );
  } catch {
    return new Set();
  }
}
export default function App() {
  const [state, setState] = useState({
    filter: 'all',
    query: '',
    sort: 'featured',
    expanded: false,
  });
  const [saved, setSaved] = useState(readFavorites);
  const [productId, setProductId] = useState(null);
  const [message, setMessage] = useState('');
  const searchRef = useRef(null);
  const catalogRef = useRef(null);
  const toastTimer = useRef(null);
  const toast = useCallback((text) => {
    clearTimeout(toastTimer.current);
    setMessage(text);
    toastTimer.current = setTimeout(() => setMessage(''), 2800);
  }, []);
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  useEffect(() => {
    try {
      localStorage.setItem('burgos-favorites', JSON.stringify([...saved]));
    } catch {
      /* Storage may be blocked. */
    }
  }, [saved]);
  const scrollToCatalog = useCallback(
    () =>
      catalogRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
        block: 'start',
      }),
    [],
  );
  const search = useCallback(() => {
    scrollToCatalog();
    searchRef.current?.focus({ preventScroll: true });
  }, [scrollToCatalog]);
  const selectCategory = (filter, scroll = true) => {
    setState((previous) => ({ ...previous, filter, query: '', expanded: false }));
    if (scroll) scrollToCatalog();
  };
  function toggleFavorite(id) {
    const removing = saved.has(id);
    setSaved((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    toast(
      removing
        ? 'Equipo eliminado de tus favoritos'
        : 'Guardado. Tu próximo estreno está más cerca.',
    );
  }
  useEffect(() => {
    const shortcut = (event) => {
      if (
        event.key === '/' &&
        !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '') &&
        !document.activeElement?.isContentEditable &&
        !productId
      ) {
        event.preventDefault();
        search();
      }
    };
    document.addEventListener('keydown', shortcut);
    return () => document.removeEventListener('keydown', shortcut);
  }, [productId, search]);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px 30px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    document.body.classList.add('js-ready');
    return () => {
      observer.disconnect();
      document.body.classList.remove('js-ready');
    };
  }, []);
  function handleSectionClick(event) {
    const product = event.target.closest('[data-product]');
    if (product) {
      setProductId(product.dataset.product);
      return;
    }
    const category = event.target.closest('[data-category-link]');
    if (category) selectCategory(category.dataset.categoryLink);
  }
  return (
    <div onClick={handleSectionClick}>
      <IconSprite />
      <a className="skip-link" href="#catalogo">
        Ir al catálogo
      </a>
      <Announcement />
      <Header
        favoritesCount={saved.size}
        onSearch={search}
        onFavorites={() => selectCategory('favorites')}
      />
      <main>
        <Hero dialogOpen={Boolean(productId)} />
        <Benefits />
        <Categories />
        <Catalog
          state={state}
          setState={setState}
          saved={saved}
          onSave={toggleFavorite}
          onCategory={selectCategory}
          searchRef={searchRef}
          catalogRef={catalogRef}
        />
        <TabletBanner />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <LegalNotice />
      <FloatingWhatsApp />
      <ProductDialog
        productId={productId}
        onSelect={setProductId}
        onClose={() => setProductId(null)}
        onToast={toast}
      />
      <div
        id="toast"
        className={`toast${message ? ' is-visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </div>
  );
}
