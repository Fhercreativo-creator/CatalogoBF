import { asset, WHATSAPP_URL } from '../config.js';

export default function Benefits() {
  return (
    <section className="benefits content-shell" aria-label="Así de fácil es estrenar">
      <div>
        <span className="benefit-icon">
          <svg className="icon">
            <use href="#i-phone" />
          </svg>
        </span>
        <p>
          <strong>Un equipo para ti</strong>
          <span>Encuentra tu próximo favorito</span>
        </p>
      </div>
      <div>
        <span className="benefit-icon">
          <svg className="icon">
            <use href="#i-chat" />
          </svg>
        </span>
        <p>
          <strong>Atención personal</strong>
          <span>Resuelve tus dudas con un asesor</span>
        </p>
      </div>
      <div>
        <span className="benefit-icon">
          <svg className="icon">
            <use href="#i-whatsapp" />
          </svg>
        </span>
        <p>
          <strong>Cotiza por WhatsApp</strong>
          <span>Da el primer paso, sin complicarte</span>
        </p>
      </div>
    </section>
  );
}
