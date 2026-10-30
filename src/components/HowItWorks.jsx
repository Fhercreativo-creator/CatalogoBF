import { asset, WHATSAPP_URL } from '../config.js';

export default function HowItWorks() {
  return (
    <section id="como-estrenar" className="how-section content-shell reveal">
      <div className="section-heading">
        <div>
          <span className="eyebrow">DE “LO QUIERO” A DAR EL PRIMER PASO</span>
          <h2>Estrenar empieza así.</h2>
        </div>
        <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Hablemos por WhatsApp{' '}
          <svg className="icon">
            <use href="#i-up-right" />
          </svg>
        </a>
      </div>
      <div className="steps">
        <article>
          <span className="step-number">01</span>
          <div>
            <h3>Encuentra tu favorito</h3>
            <p>Explora las categorías y elige el equipo que se conecta con tu estilo.</p>
          </div>
        </article>
        <article>
          <span className="step-number">02</span>
          <div>
            <h3>Hablemos de tu estreno</h3>
            <p>
              Escríbenos por WhatsApp para consultar precio, disponibilidad y opciones de compra.
            </p>
          </div>
        </article>
        <article>
          <span className="step-number">03</span>
          <div>
            <h3>Da el siguiente paso</h3>
            <p>Confirma los detalles con un asesor y conoce cómo adquirir tu próximo equipo.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
