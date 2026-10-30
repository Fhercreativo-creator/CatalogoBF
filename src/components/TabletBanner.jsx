import { asset, WHATSAPP_URL } from '../config.js';

export default function TabletBanner() {
  return (
    <section className="tablet-banner content-shell reveal">
      <div className="tablet-copy">
        <span className="eyebrow">MÁS ALLÁ DEL TELÉFONO</span>
        <h2>
          Grandes ideas.
          <br />
          <span>Otra pantalla.</span>
        </h2>
        <p>
          Para tus proyectos, tus series o eso que estás por crear.
          <br />
          Encuentra una tablet que vaya contigo.
        </p>
        <button className="button button-dark" data-category-link="tablets">
          Descubrir tablets{' '}
          <svg className="icon">
            <use href="#i-up-right" />
          </svg>
        </button>
      </div>
      <div className="tablet-art">
        <span className="tablet-word" aria-hidden="true">
          CREA.
        </span>
        <img
          src={asset('assets/products/ipad-11.webp')}
          alt="iPad de 11.ª generación"
          width="237"
          height="270"
          loading="lazy"
        />
        <span className="tablet-label">
          <svg className="icon">
            <use href="#i-spark" />
          </svg>{' '}
          Tu siguiente gran idea empieza aquí.
        </span>
      </div>
    </section>
  );
}
