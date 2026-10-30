export const WHATSAPP_URL = 'https://wa.me/message/AM33PPPCK7BIG1';
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const formatPrice = (value) =>
  '$' + new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 }).format(value);
