import { useEffect, useState } from 'react';
import { asset, WHATSAPP_URL } from '../config.js';
import { Icon } from './Icon.jsx';

const links = [
  ['#inicio', 'Inicio'],
  ['#catalogo', 'Catálogo'],
  ['#categorias', 'Categorías'],
  ['#como-estrenar', 'Cómo estrenar'],
];
export default function Header({ favoritesCount, onSearch, onFavorites }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');
  useEffect(() => {
    const escape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  const navigate = (href) => {
    setActive(href);
    setOpen(false);
  };
  return (
    <header className="header">
      <div className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Burgos Financial, inicio">
          <span className="brand-mark">
            <img
              src={asset('assets/burgos-financial.png')}
              alt="Burgos Financial"
              width="2048"
              height="1243"
            />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([href, text]) => (
            <a
              key={href}
              href={href}
              className={active === href ? 'active' : ''}
              onClick={() => navigate(href)}
            >
              {text}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button search-shortcut"
            aria-label="Buscar un equipo"
            onClick={onSearch}
          >
            <Icon name="search" />
          </button>
          <button
            className="icon-button favorites-shortcut"
            aria-label={`Ver mis favoritos${favoritesCount ? ': ' + favoritesCount : ''}`}
            onClick={onFavorites}
          >
            <Icon name="heart" />
            <span className="favorites-count" hidden={!favoritesCount}>
              {favoritesCount}
            </span>
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-small nav-quote"
          >
            Cotizar ahora <Icon name="up-right" />
          </a>
          <button
            id="menu-toggle"
            className="icon-button mobile-menu-toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Navegación móvil" hidden={!open}>
        {links.map(([href, text]) => (
          <a key={href} href={href} onClick={() => navigate(href)}>
            {href === '#catalogo' ? 'Ver catálogo' : text}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Cotizar por WhatsApp ↗
        </a>
      </nav>
    </header>
  );
}
