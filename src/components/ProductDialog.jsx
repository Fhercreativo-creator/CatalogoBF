import { useEffect, useRef } from 'react';
import { products } from '../data/products.js';
import { asset, formatPrice, WHATSAPP_URL } from '../config.js';
import { Icon } from './Icon.jsx';

export default function ProductDialog({ productId, onSelect, onClose, onToast }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const p = products.find((item) => item.id === productId);
  const open = Boolean(p);
  useEffect(() => {
    const element = dialog.current;
    if (!open) return;
    const previousFocus = document.activeElement;
    element.showModal();
    document.body.classList.add('modal-open');
    closeButton.current?.focus();
    return () => {
      if (element.open) element.close();
      document.body.classList.remove('modal-open');
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open]);
  const variants = p ? products.filter((item) => item.name === p.name) : [];
  async function copyModel() {
    const message = `Hola, Burgos Financial. Me gustaría cotizar el ${p.name}${p.storage ? ' de ' + p.storage : ''}${p.color ? ' en color ' + p.color : ''}. ¿Me comparten precio, disponibilidad y opciones de compra?`;
    try {
      await navigator.clipboard.writeText(message);
      onToast('Mensaje copiado. Pégalo en el chat de WhatsApp.');
    } catch {
      const field = document.createElement('textarea');
      field.value = message;
      field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      dialog.current.appendChild(field);
      field.select();
      let copied = false;
      try {
        copied = document.execCommand('copy');
      } catch {
        /* Manual entry remains available. */
      }
      field.remove();
      onToast(
        copied
          ? 'Mensaje copiado. Pégalo en WhatsApp.'
          : 'No se pudo copiar. Puedes escribir el modelo en WhatsApp.',
      );
    }
  }
  return (
    <dialog
      id="product-dialog"
      className="product-dialog"
      aria-labelledby="detail-title"
      ref={dialog}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close icon-button"
        aria-label="Cerrar ficha de producto"
        onClick={onClose}
        ref={closeButton}
      >
        <Icon name="close" />
      </button>
      <div id="product-detail">
        {p && (
          <div className="detail-layout">
            <div className="detail-image">
              <img src={asset(p.image)} alt={`${p.name} ${p.color || ''}`} />
              <span>Imagen de referencia del equipo</span>
            </div>
            <div className="detail-copy">
              <span className="eyebrow">{p.brand} · TU PRÓXIMO ESTRENO</span>
              <h2 id="detail-title">{p.name}</h2>
              <p className="detail-tagline">{p.tagline}</p>
              <dl className="detail-specs">
                <div>
                  <dt>Almacenamiento</dt>
                  <dd>{p.storage || 'Consultar'}</dd>
                </div>
                {p.ram && (
                  <div>
                    <dt>Memoria RAM</dt>
                    <dd>{p.ram}</dd>
                  </div>
                )}
                {p.color && (
                  <div>
                    <dt>Color</dt>
                    <dd>{p.color}</dd>
                  </div>
                )}
                <div>
                  <dt>Categoría</dt>
                  <dd>
                    {p.category === 'tablets'
                      ? 'Tablet'
                      : p.category === 'plegables'
                        ? 'Plegable'
                        : 'Celular'}
                  </dd>
                </div>
              </dl>
              {variants.length > 1 && (
                <label className="detail-variant">
                  Otra opción del catálogo{' '}
                  <select
                    id="detail-variant"
                    value={p.id}
                    onChange={(event) => onSelect(event.target.value)}
                  >
                    {variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.storage || ''}
                        {variant.color
                          ? ' · ' + variant.color
                          : variants.some((item) => item.color)
                            ? ' · Imagen principal'
                            : ''}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <p className="detail-price">
                <span>Precio desde</span>
                <strong>{formatPrice(p.priceFrom)}</strong>
              </p>
              <div className="detail-cta">
                <a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" /> Cotizar por WhatsApp <Icon name="up-right" />
                </a>
                <button className="copy-message" onClick={copyModel}>
                  <Icon name="copy" /> Copiar modelo para enviar
                </button>
              </div>
              <p className="detail-note">
                Cuéntanos qué equipo te gusta. Un asesor te ayudará a consultar precio, colores,
                disponibilidad y condiciones de compra.
              </p>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
