import { asset, WHATSAPP_URL } from '../config.js';

export default function LegalNotice() {
  return (
    <section className="legal-notice" aria-label="Información legal">
      <div className="content-shell">
        <p>
          BURGOS FINANCIAL, S.A. de C.V., SOFOM, E.N.R., para su constitución y operación con el
          carácter de Sociedad Financiera de Objeto Múltiple, Entidad No Regulada, no requiere de la
          autorización de la Secretaría de Hacienda y Crédito Público y únicamente está sujeta a la
          supervisión de la Comisión Nacional Bancaria y de Valores (CNBV) para efectos de lo
          dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares
          del Crédito (LGOAAC). Condiciones sujetas a políticas y aprobación del crédito.
        </p>
        <p className="legal-terms">
          <a
            href="https://burgosfinancial.mx/tasas-y-condiciones"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta tasas, comisiones, términos y condiciones aquí.
          </a>
        </p>
        <p className="legal-copyright">© 2026 Burgos Financial. Todos los derechos reservados.</p>
      </div>
    </section>
  );
}
