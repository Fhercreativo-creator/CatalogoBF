export function Icon({ name, ...props }) {
  return (
    <svg className="icon" aria-hidden="true" {...props}>
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconSprite() {
  return (
    <svg className="icon-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M4 12h15M13 5l7 7-7 7" />
        </symbol>
        <symbol id="i-up-right" viewBox="0 0 24 24">
          <path d="M6 18 18 6M6 6h12v12" />
        </symbol>
        <symbol id="i-chevron" viewBox="0 0 24 24">
          <path d="m9 5 7 7-7 7" />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 24 24">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        </symbol>
        <symbol id="i-close" viewBox="0 0 24 24">
          <path d="m6 6 12 12M6 18 18 6" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <path d="M10 5h4M11 19h2" />
        </symbol>
        <symbol id="i-spark" viewBox="0 0 24 24">
          <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3ZM20 1v4M18 3h4" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 11.5A8.5 8.5 0 0 1 12.5 20a9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" />
          <path d="M8 10h8M8 14h5" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="m5 12 4 4L19 6" />
        </symbol>
        <symbol id="i-copy" viewBox="0 0 24 24">
          <rect x="8" y="8" width="12" height="13" rx="2" />
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
        </symbol>
        <symbol id="i-pause" viewBox="0 0 24 24">
          <path d="M8 5v14M16 5v14" />
        </symbol>
        <symbol id="i-play" viewBox="0 0 24 24">
          <path d="m8 4 12 8-12 8V4Z" />
        </symbol>
        <symbol id="i-whatsapp" viewBox="0 0 24 24">
          <path d="M20.5 3.5a11.5 11.5 0 0 0-18 13.8L1 23l5.9-1.5a11.5 11.5 0 0 0 13.6-18Z" />
          <path d="M8 6.5c-.5 0-1.7 1-1.7 2.4 0 2.8 4.7 7.6 7.6 7.6 1.4 0 2.4-1.2 2.4-1.7 0-.4-2.4-1.8-2.8-1.7-.4.1-.9 1-1.3 1-1.1-.4-2.8-2.1-3.2-3.2 0-.4.9-.9 1-1.3.1-.4-1.3-3.1-2-3.1Z" />
        </symbol>
      </defs>
    </svg>
  );
}
