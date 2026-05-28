/* Hiberg — primitives. Logo, Button, Tile, Badge, Icon, Eyebrow, SectionHead */

const HI_GREEN = '#049346';

function Logo({ height = 22, color = 'white', ...rest }) {
  return (
    <img
      src="assets/logo-wordmark.svg"
      alt="HIBERG"
      style={{
        height, width: 'auto', display: 'block',
        filter: color === 'black' ? 'invert(1) brightness(0)' : null,
        ...rest.style,
      }}
    />
  );
}

function HiSymbol({ height = 24, ...rest }) {
  return (
    <img src="assets/logo-symbol.svg" alt="" style={{ height, width: 'auto', display: 'block', ...rest.style }} />
  );
}

function Button({ variant = 'primary', size = 'md', children, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: 'Manrope, "Helvetica Neue", sans-serif',
    fontWeight: 500,
    border: 0,
    borderRadius: 999,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    letterSpacing: '-0.01em',
    transition: 'background 200ms cubic-bezier(.2,.8,.2,1), opacity 200ms, transform 120ms, border-color 200ms',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { fontSize: 14, padding: '10px 18px' },
    md: { fontSize: 15, padding: '14px 24px' },
    lg: { fontSize: 17, padding: '18px 32px' },
  };
  const variants = {
    primary:   { background: HI_GREEN, color: '#fff' },
    secondary: { background: '#fff',    color: '#000' },
    ghost:     { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.30)' },
    inverse:   { background: '#0F0F0F', color: '#fff', border: '1px solid rgba(255,255,255,0.10)' },
  };
  const hoverFx = {
    primary:   { background: '#06A050' },
    secondary: { background: 'rgba(255,255,255,0.88)' },
    ghost:     { borderColor: '#fff', background: 'rgba(255,255,255,0.06)' },
    inverse:   { background: '#1a1a1a' },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...(hover ? hoverFx[variant] : null), ...style }}
      {...rest}
    >{children}</button>
  );
}

function Tile({ variant = 'fill', as = 'div', children, style, ...rest }) {
  const variants = {
    fill:     { background: 'rgba(255,255,255,0.06)' },
    fill2:    { background: 'rgba(255,255,255,0.10)' },
    gradient: { background: 'linear-gradient(180deg, #000 0%, #049346 100%)' },
    cream:    { background: '#FEF4E8', color: '#0d0d0d' },
    black:    { background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)' },
    image:    {},
  };
  const Tag = as;
  return (
    <Tag style={{ borderRadius: 15, overflow: 'hidden', color: '#fff', ...variants[variant], ...style }} {...rest}>
      {children}
    </Tag>
  );
}

function Badge({ variant = 'fill', children, style, ...rest }) {
  const v = {
    fill:    { background: 'rgba(255,255,255,0.10)', color: '#fff', backdropFilter: 'blur(8px)' },
    accent:  { background: HI_GREEN, color: '#fff' },
    line:    { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.30)' },
    alert:   { background: '#E14F26', color: '#fff' },
    dark:    { background: 'rgba(0,0,0,0.5)', color: '#fff', backdropFilter: 'blur(8px)' },
  };
  return (
    <span style={{
      fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 11,
      lineHeight: 1, padding: '7px 12px', borderRadius: 999, letterSpacing: '0.06em',
      textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6,
      ...v[variant], ...style,
    }} {...rest}>{children}</span>
  );
}

function Eyebrow({ children, style, ...rest }) {
  return (
    <span style={{
      fontFamily: 'Manrope, sans-serif', fontWeight: 500,
      fontSize: 12, lineHeight: 1.4,
      color: HI_GREEN, textTransform: 'uppercase', letterSpacing: '0.16em',
      display: 'inline-flex', alignItems: 'center', gap: 10,
      ...style,
    }} {...rest}>
      <span style={{ width: 24, height: 1, background: HI_GREEN, display: 'inline-block' }} />
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, subtitle, action, align = 'left', style }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: align === 'center' ? 'column' : 'row',
      alignItems: align === 'center' ? 'center' : 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      marginBottom: 48,
      textAlign: align === 'center' ? 'center' : 'left',
      ...style,
    }}>
      <div style={{ maxWidth: align === 'center' ? 820 : 980 }}>
        {eyebrow && <Eyebrow style={{ marginBottom: 18, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>{eyebrow}</Eyebrow>}
        <h2 style={{
          fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
          fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.030em',
          margin: 0, color: '#fff',
        }}>{title}</h2>
        {subtitle && <p style={{
          fontFamily: 'Manrope, sans-serif', fontWeight: 400,
          fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)',
          margin: '20px 0 0', maxWidth: 620,
        }}>{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

/* Icons — thin-stroke geometric, Lucide-flavoured */
function Icon({ name, size = 20, stroke = 1.5, style, ...rest }) {
  const paths = {
    search:   <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    user:     <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
    cart:     <><path d="M3 4h2l2.5 12h11L21 8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></>,
    heart:    <><path d="M12 21s-7-4.5-9.5-9C.7 8.3 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.3 4.3 4.5 8-2.5 4.5-9.5 9-9.5 9z"/></>,
    arrow:    <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    arrowL:   <><path d="M19 12H5M11 5l-7 7 7 7"/></>,
    arrowR:   <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    arrowDR:  <><path d="M7 7h10v10"/><path d="M7 17 17 7"/></>,
    arrowUR:  <><path d="M7 17 17 7M9 7h8v8"/></>,
    menu:     <><path d="M3 6h18M3 12h18M3 18h18"/></>,
    close:    <><path d="M6 6l12 12M18 6 6 18"/></>,
    phone:    <><path d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.6A2 2 0 0 1 22 16z"/></>,
    play:     <><path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/></>,
    plus:     <><path d="M12 5v14M5 12h14"/></>,
    check:    <><path d="m5 12 5 5 9-11"/></>,
    chevR:    <><path d="m9 6 6 6-6 6"/></>,
    chevL:    <><path d="m15 6-6 6 6 6"/></>,
    chevD:    <><path d="m6 9 6 6 6-6"/></>,
    star:     <><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"/></>,
    spark:    <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></>,
    rotate3d: <><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></>,
    cube:     <><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 22V13"/></>,
    mapPin:   <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    mail:     <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    mic:      <><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></>,
    pause:    <><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></>,
    expand:   <><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></>,
    sound:    <><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M19 12a4 4 0 0 0-2-3.5M22 12a8 8 0 0 0-4-7"/></>,
    fridge:   <><rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M6 10h12M9 6v2M9 13v3"/></>,
    washer:   <><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="8" cy="6.5" r="0.6" fill="currentColor"/></>,
    dishes:   <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M9 11v6M12 11v6M15 11v6"/></>,
    cooktop:  <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2.2"/><circle cx="16" cy="8" r="2.2"/><circle cx="8" cy="16" r="2.2"/><circle cx="16" cy="16" r="2.2"/></>,
    oven:     <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><rect x="6" y="12" width="12" height="6" rx="1"/></>,
    coffee:   <><path d="M4 8h14v6a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5z"/><path d="M18 11h2a3 3 0 0 1 0 6h-2"/><path d="M7 4v2M10 4v2M13 4v2"/></>,
    wine:     <><path d="M7 3h10v4a5 5 0 0 1-10 0z"/><path d="M12 12v9M8 21h8"/></>,
    vacuum:   <><circle cx="12" cy="14" r="7"/><path d="M12 7V3M9 3h6"/></>,
    lock:     <><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></>,
    cooler:   <><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 14h12M10 18v2M14 18v2"/></>,
    aerogrill:<><circle cx="12" cy="13" r="7"/><path d="M5 13h14M12 6V3M9 3h6"/></>,
    hood:     <><path d="M3 9h18l-2 6H5z"/><path d="M3 9 5 5h14l2 4M9 21v-6M15 21v-6"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', flexShrink: 0, ...style }} {...rest}>
      {paths[name] || null}
    </svg>
  );
}

function Container({ children, style, ...rest }) {
  return <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', ...style }} {...rest}>{children}</div>;
}

Object.assign(window, { Logo, HiSymbol, Button, Tile, Badge, Eyebrow, Icon, SectionHead, Container, HI_GREEN });
