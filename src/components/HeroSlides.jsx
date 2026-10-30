import { asset, WHATSAPP_URL } from '../config.js';

export default function HeroSlides({ active }) {
  return (
    <div className="hero-slides">
      <article
        data-slide="0"
        aria-label="1 de 4: Próximamente, financiamiento para auto o moto"
        className={'hero-slide hero-slide--vehicles' + (active === 0 ? ' is-active' : '')}
        inert={active !== 0}
        aria-hidden={active !== 0}
      >
        <img
          className="hero-visual"
          src={asset('assets/hero-autos-motos.jpg')}
          alt="Autos y motos frente al Cerro de la Silla al atardecer"
          fetchPriority="high"
          width="2047"
          height="811"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">
            <span className="status-dot" /> TU PRÓXIMO DESTINO
          </span>
          <h1>
            Estrenar está
            <br />
            más cerca de lo
            <br />
            <em>que imaginas.</em>
          </h1>
          <p>
            Próximamente, financiamiento
            <br />
            para tu auto o moto.
          </p>
          <div className="hero-actions">
            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero información{' '}
              <svg className="icon">
                <use href="#i-up-right" />
              </svg>
            </a>
            <a className="text-link light-link" href="#catalogo">
              Ver celulares{' '}
              <svg className="icon">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </article>
      <article
        data-slide="1"
        aria-label="2 de 4: iPhone 17 Pro"
        className={'hero-slide hero-slide--iphone' + (active === 1 ? ' is-active' : '')}
        inert={active !== 1}
        aria-hidden={active !== 1}
      >
        <img
          className="hero-visual"
          src={asset('assets/hero-iphone.png')}
          alt="iPhone naranja bajo iluminación cinematográfica"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">
            <span className="status-dot" /> TU PRÓXIMA GRAN CONEXIÓN
          </span>
          <h2>
            Es tiempo
            <br />
            de <em>estrenar.</em>
          </h2>
          <p>
            Ese teléfono que quieres.
            <br />
            Ese nuevo comienzo que mereces.
          </p>
          <div className="hero-actions">
            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero estrenar{' '}
              <svg className="icon">
                <use href="#i-up-right" />
              </svg>
            </a>
            <a className="text-link light-link" href="#catalogo">
              Explorar catálogo{' '}
              <svg className="icon">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
        <button className="hero-product" data-product="iphone-17-pro">
          <span className="hero-product-icon">
            <svg className="icon">
              <use href="#i-spark" />
            </svg>
          </span>
          <span>
            <small>NUESTRA RECOMENDACIÓN</small>
            <strong>
              iPhone 17 Pro <b>· 256 GB</b>
            </strong>
          </span>
          <svg className="icon">
            <use href="#i-up-right" />
          </svg>
        </button>
      </article>
      <article
        data-slide="2"
        aria-label="3 de 4: Galaxy S26 Ultra"
        className={'hero-slide' + (active === 2 ? ' is-active' : '')}
        inert={active !== 2}
        aria-hidden={active !== 2}
      >
        <img
          className="hero-visual"
          src={asset('assets/hero-samsung.png')}
          alt="Galaxy S26 Ultra con iluminación naranja"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">
            <span className="status-dot" /> DESCUBRE LO NUEVO DEL CATÁLOGO
          </span>
          <h2>
            Haz espacio
            <br />
            para <em>más.</em>
          </h2>
          <p>
            Más ideas. Más momentos. Más tú.
            <br />
            Tu siguiente paso tiene nombre.
          </p>
          <div className="hero-actions">
            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Lo quiero cotizar{' '}
              <svg className="icon">
                <use href="#i-up-right" />
              </svg>
            </a>
            <button className="text-link light-link" data-product="samsung-s26-ultra">
              Conocer equipo{' '}
              <svg className="icon">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <button className="hero-product" data-product="samsung-s26-ultra">
          <span className="hero-product-icon">
            <svg className="icon">
              <use href="#i-spark" />
            </svg>
          </span>
          <span>
            <small>DESTACADO DEL CATÁLOGO</small>
            <strong>
              Galaxy S26 Ultra <b>· 512 GB</b>
            </strong>
          </span>
          <svg className="icon">
            <use href="#i-up-right" />
          </svg>
        </button>
      </article>
      <article
        data-slide="3"
        aria-label="4 de 4: Galaxy Z Fold8"
        className={'hero-slide hero-slide--fold' + (active === 3 ? ' is-active' : '')}
        inert={active !== 3}
        aria-hidden={active !== 3}
      >
        <img
          className="hero-visual"
          src={asset('assets/hero-fold.png')}
          alt="Galaxy Z Fold8 abierto en una escena cinematográfica"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">
            <span className="status-dot" /> EXPLORA LOS PLEGABLES
          </span>
          <h2>
            Abre nuevas
            <br />
            <em>posibilidades.</em>
          </h2>
          <p>
            Hay estrenos que cambian tu perspectiva.
            <br />
            Encuentra el tuyo.
          </p>
          <div className="hero-actions">
            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero el mío{' '}
              <svg className="icon">
                <use href="#i-up-right" />
              </svg>
            </a>
            <button className="text-link light-link" data-category-link="plegables">
              Ver plegables{' '}
              <svg className="icon">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <button className="hero-product" data-product="galaxy-z-fold8">
          <span className="hero-product-icon">
            <svg className="icon">
              <use href="#i-spark" />
            </svg>
          </span>
          <span>
            <small>UNA NUEVA PERSPECTIVA</small>
            <strong>
              Galaxy Z Fold8 <b>· 512 GB</b>
            </strong>
          </span>
          <svg className="icon">
            <use href="#i-up-right" />
          </svg>
        </button>
      </article>
    </div>
  );
}
