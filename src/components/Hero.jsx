import { useEffect, useRef, useState } from 'react';
import HeroSlides from './HeroSlides.jsx';
import { Icon } from './Icon.jsx';

const labels = [
  'Ver financiamiento de auto o moto',
  'Ver iPhone 17 Pro',
  'Ver Galaxy S26 Ultra',
  'Ver Galaxy Z Fold8',
];
export default function Hero({ dialogOpen }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageHidden, setPageHidden] = useState(document.hidden);
  const [touching, setTouching] = useState(false);
  const hero = useRef(null);
  const touch = useRef(null);
  const go = (value) =>
    setActive(
      (previous) =>
        ((typeof value === 'function' ? value(previous) : value) + labels.length) % labels.length,
    );
  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
            threshold: 0.15,
          })
        : null;
    observer?.observe(hero.current);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      observer?.disconnect();
    };
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || !visible || pageHidden || dialogOpen || touching) return;
    const timer = setTimeout(() => go((previous) => previous + 1), 7500);
    return () => clearTimeout(timer);
  }, [active, paused, hovered, focused, visible, pageHidden, dialogOpen, touching]);
  return (
    <section
      id="inicio"
      className="hero page-shell"
      aria-roledescription="carrusel"
      aria-label="Equipos destacados"
      ref={hero}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          go((previous) => previous + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}
      onTouchStart={(event) => {
        touch.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
        setTouching(true);
      }}
      onTouchCancel={() => {
        touch.current = null;
        setTouching(false);
      }}
      onTouchEnd={(event) => {
        if (touch.current) {
          const dx = event.changedTouches[0].clientX - touch.current.x;
          const dy = event.changedTouches[0].clientY - touch.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.3)
            go((previous) => previous + (dx < 0 ? 1 : -1));
        }
        touch.current = null;
        setTouching(false);
      }}
    >
      <HeroSlides active={active} />
      <div className="hero-controls">
        <div className="slide-indicators" role="group" aria-label="Elegir destacado">
          {labels.map((label, index) => (
            <button
              key={label}
              className={`slide-dot${active === index ? ' is-active' : ''}`}
              aria-label={label}
              aria-pressed={active === index}
              onClick={() => go(index)}
            />
          ))}
        </div>
        <span className="slide-number">
          <b id="slide-current">{String(active + 1).padStart(2, '0')}</b> /{' '}
          <span id="slide-total">04</span>
        </span>
        <button
          className="slide-pause"
          aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          <Icon name={paused ? 'play' : 'pause'} />
        </button>
      </div>
      <div className="slide-arrows">
        <button
          className="hero-prev"
          aria-label="Destacado anterior"
          onClick={() => go((previous) => previous - 1)}
        >
          <Icon name="chevron" />
        </button>
        <button
          className="hero-next"
          aria-label="Siguiente destacado"
          onClick={() => go((previous) => previous + 1)}
        >
          <Icon name="chevron" />
        </button>
      </div>
    </section>
  );
}
