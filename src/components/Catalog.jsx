import { useMemo, useRef } from 'react';
import { products } from '../data/products.js';
import { filterProducts } from '../catalog.js';
import { Icon } from './Icon.jsx';
import ProductCard from './ProductCard.jsx';

const categories = [
  ['all', 'Todos'],
  ['iphone', 'iPhone'],
  ['samsung', 'Samsung'],
  ['plegables', 'Plegables'],
  ['tablets', 'Tablets'],
  ['favorites', 'Favoritos'],
];
export default function Catalog({
  state,
  setState,
  saved,
  onSave,
  onCategory,
  searchRef,
  catalogRef,
}) {
  const list = useMemo(() => filterProducts(products, state, saved), [state, saved]);
  const shown = state.expanded || state.filter !== 'all' || state.query ? list : list.slice(0, 8);
  const hasMore = shown.length < list.length;
  const emptyFavorites = state.filter === 'favorites' && !list.length && !state.query;
  const grid = useRef(null);
  function expand() {
    setState((previous) => ({ ...previous, expanded: true }));
    requestAnimationFrame(() =>
      grid.current
        ?.querySelectorAll('[data-card]')[8]
        ?.querySelector('[data-product]')
        ?.focus({ preventScroll: true }),
    );
  }
  const countText =
    list.length === 0
      ? 'Sin equipos para mostrar'
      : `${list.length} ${list.length === 1 ? 'equipo' : 'equipos'}${state.filter === 'favorites' ? ' en tus favoritos' : ' para tu próximo estreno'}${hasMore ? ' · Mostrando ' + shown.length : ''}`;
  return (
    <section id="catalogo" className="catalog content-shell reveal" ref={catalogRef}>
      <div className="section-heading catalog-heading">
        <div>
          <span className="eyebrow">ENCUENTRA ESE QUE YA IMAGINAS EN TUS MANOS</span>
          <h2>
            Tu próximo teléfono está aquí<span className="orange">.</span>
          </h2>
        </div>
        <label className="search-box">
          <Icon name="search" />
          <input
            id="product-search"
            type="search"
            placeholder="Busca tu próximo equipo"
            aria-label="Buscar por modelo, marca o capacidad"
            autoComplete="off"
            value={state.query}
            ref={searchRef}
            onChange={(event) =>
              setState((previous) => ({ ...previous, query: event.target.value, expanded: true }))
            }
          />
          <kbd>/</kbd>
        </label>
      </div>
      <div className="filter-row">
        <div className="filter-pills" role="group" aria-label="Filtrar catálogo por categoría">
          {categories.map(([filter, label]) => (
            <button
              key={filter}
              className={`filter-pill${filter === 'favorites' ? ' favorites-filter' : ''}${state.filter === filter ? ' is-active' : ''}`}
              data-filter={filter}
              aria-pressed={state.filter === filter}
              onClick={() => onCategory(filter, false)}
            >
              {filter === 'favorites' && <Icon name="heart" />}
              {label}
              {filter === 'all' && <span>{products.length}</span>}
            </button>
          ))}
        </div>
        <label className="sort-label">
          Ordenar{' '}
          <select
            id="product-sort"
            aria-label="Ordenar equipos"
            value={state.sort}
            onChange={(event) =>
              setState((previous) => ({ ...previous, sort: event.target.value }))
            }
          >
            <option value="featured">Recomendados</option>
            <option value="name">Nombre: A–Z</option>
            <option value="storage">Mayor capacidad</option>
          </select>
        </label>
      </div>
      <div className="catalog-meta">
        <p id="results-count" role="status" aria-live="polite">
          {countText}
        </p>
        <span>
          <span className="small-dot" /> Consulta disponibilidad y condiciones
        </span>
      </div>
      <div id="product-grid" className="product-grid" ref={grid}>
        {shown.map((p, index) => (
          <ProductCard
            key={p.id}
            product={p}
            index={index}
            saved={saved.has(p.id)}
            onSave={onSave}
          />
        ))}
      </div>
      <div id="empty-state" className="empty-state" hidden={list.length !== 0}>
        <Icon name="search" />
        <h3>{emptyFavorites ? 'Tu próximo favorito te espera' : 'No encontramos ese equipo'}</h3>
        <p>
          {emptyFavorites
            ? 'Toca el corazón de los equipos que te gustan para encontrarlos aquí.'
            : 'Prueba con otro modelo o explora el catálogo completo.'}
        </p>
        <button
          className="button button-dark"
          id="reset-filters"
          onClick={() => {
            onCategory('all', false);
            searchRef.current?.focus({ preventScroll: true });
          }}
        >
          Ver todos los equipos <Icon name="arrow" />
        </button>
      </div>
      <div className="load-more-wrap" hidden={!hasMore}>
        <button id="load-more" className="button button-outline" onClick={expand}>
          Ver todos los equipos <span id="remaining-count">+{list.length - shown.length}</span>
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}
