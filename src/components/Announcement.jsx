import { asset, WHATSAPP_URL } from '../config.js';

export default function Announcement() {
  return (
    <div className="announcement">
      <span>Una nueva conexión. Un nuevo comienzo.</span>
      <a href="#catalogo">
        Es tiempo de estrenar{' '}
        <svg className="icon">
          <use href="#i-up-right" />
        </svg>
      </a>
    </div>
  );
}
