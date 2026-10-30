import { asset, WHATSAPP_URL } from '../config.js';

export default function Categories() {
  return (
    <section id="categorias" className="categories content-shell reveal">
      <div className="section-heading">
        <div>
          <span className="eyebrow">A TU ESTILO. A TU RITMO.</span>
          <h2>¿Con qué vas a conectar?</h2>
        </div>
        <p>Tu mundo, tu equipo. Elige una categoría.</p>
      </div>
      <div className="category-grid">
        <button className="category-card" data-category-link="iphone">
          <div>
            <span>El universo Apple</span>
            <h3>iPhone</h3>
            <span className="category-count">7 equipos</span>
          </div>
          <img
            src={asset('assets/products/iphone-17-pro.webp')}
            alt=""
            loading="lazy"
            width="237"
            height="315"
          />
          <span className="category-arrow">
            <svg className="icon">
              <use href="#i-up-right" />
            </svg>
          </span>
        </button>
        <button className="category-card" data-category-link="samsung">
          <div>
            <span>Tu siguiente Galaxy</span>
            <h3>Samsung</h3>
            <span className="category-count">8 equipos</span>
          </div>
          <img
            src={asset('assets/products/samsung-s26-ultra.jpeg')}
            alt=""
            loading="lazy"
            width="444"
            height="450"
          />
          <span className="category-arrow">
            <svg className="icon">
              <use href="#i-up-right" />
            </svg>
          </span>
        </button>
        <button className="category-card" data-category-link="plegables">
          <div>
            <span>Abre posibilidades</span>
            <h3>Plegables</h3>
            <span className="category-count">2 equipos</span>
          </div>
          <img
            className="fold-category"
            src={asset('assets/products/galaxy-z-flip8.jpeg')}
            alt=""
            loading="lazy"
            width="399"
            height="500"
          />
          <span className="category-arrow">
            <svg className="icon">
              <use href="#i-up-right" />
            </svg>
          </span>
        </button>
        <button className="category-card" data-category-link="tablets">
          <div>
            <span>Ideas en grande</span>
            <h3>Tablets</h3>
            <span className="category-count">2 equipos</span>
          </div>
          <img
            src={asset('assets/products/ipad-11.webp')}
            alt=""
            loading="lazy"
            width="237"
            height="270"
          />
          <span className="category-arrow">
            <svg className="icon">
              <use href="#i-up-right" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
