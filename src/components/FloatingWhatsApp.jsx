import { asset, WHATSAPP_URL } from '../config.js';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <svg className="icon">
        <use href="#i-whatsapp" />
      </svg>
      <span>¿Listo para estrenar?</span>
    </a>
  );
}
