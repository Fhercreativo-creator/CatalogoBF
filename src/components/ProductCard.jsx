import { asset, formatPrice, WHATSAPP_URL } from '../config.js';
import { Icon } from './Icon.jsx';
export default function ProductCard({ product: p, index, saved, onSave }) {
  return (
    <article
      className="product-card"
      style={{ animationDelay: `${Math.min(index, 7) * 25}ms` }}
      data-card={p.id}
    >
      {p.badge && <span className={`product-badge${p.featured ? ' primary' : ''}`}>{p.badge}</span>}
      <button
        className={`favorite-button${saved ? ' is-saved' : ''}`}
        aria-label={`${saved ? 'Quitar' : 'Guardar'} ${p.name} ${p.storage || ''} ${p.color || ''} ${saved ? 'de' : 'en'} favoritos`}
        aria-pressed={saved}
        onClick={() => onSave(p.id)}
      >
        <Icon name="heart" />
      </button>
      <button
        className="product-image-button"
        data-product={p.id}
        aria-label={`Ver ficha de ${p.name} ${p.storage || ''} ${p.color || ''}`}
      >
        <img
          src={asset(p.image)}
          alt={`${p.name}${p.color ? ' ' + p.color : ''}`}
          loading="lazy"
          width="300"
          height="300"
        />
      </button>
      <div className="product-info">
        <span className="product-brand">{p.brand}</span>
        <button className="product-name" data-product={p.id}>
          {p.name}
        </button>
        <div className="product-specs">
          <span>{p.storage || 'Consulta capacidad'}</span>
          {p.ram && (
            <>
              <i>·</i>
              <span>{p.ram} RAM</span>
            </>
          )}
          {p.color && (
            <>
              <i>·</i>
              <span>{p.color}</span>
            </>
          )}
        </div>
        <p className="product-price">
          <span>Precio desde</span>
          <strong>{formatPrice(p.priceFrom)}</strong>
        </p>
        <div className="product-actions">
          <a
            className="button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Cotizar ${p.name} ${p.storage || ''} por WhatsApp`}
          >
            Cotizar ahora <Icon name="whatsapp" />
          </a>
          <button
            className="product-view"
            data-product={p.id}
            aria-label={`Ver detalles de ${p.name} ${p.storage || ''}`}
          >
            <Icon name="up-right" />
          </button>
        </div>
      </div>
    </article>
  );
}
