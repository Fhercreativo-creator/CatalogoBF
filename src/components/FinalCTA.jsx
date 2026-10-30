import { asset, WHATSAPP_URL } from '../config.js';

export default function FinalCTA() {
  return (
    <section className="final-cta page-shell reveal">
      <div className="cta-orbit" aria-hidden="true" />
      <div>
        <span className="eyebrow light">TU NUEVA VERSIÓN TE ESTÁ LLAMANDO</span>
        <h2>Contesta con un estreno.</h2>
        <p>¿Ya tienes uno en mente? Hagamos que pase.</p>
      </div>
      <a
        className="button button-white"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="icon">
          <use href="#i-whatsapp" />
        </svg>{' '}
        Cotizar mi próximo equipo{' '}
        <svg className="icon">
          <use href="#i-up-right" />
        </svg>
      </a>
    </section>
  );
}
