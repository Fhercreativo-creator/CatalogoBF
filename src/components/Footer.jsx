import { asset, WHATSAPP_URL } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer content-shell">
      <div className="footer-main">
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
        <p>Conecta con lo que sigue.</p>
        <nav aria-label="Enlaces de pie de página">
          <a href="#catalogo">Catálogo</a>
          <a href="#como-estrenar">Cómo estrenar</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Contacto{' '}
            <svg className="icon">
              <use href="#i-up-right" />
            </svg>
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          Imágenes de referencia. Consulta precio, colores, disponibilidad y condiciones de compra
          con un asesor.
        </p>
      </div>
    </footer>
  );
}
