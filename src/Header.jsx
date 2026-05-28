/* Hiberg — Block 1: Header. Top promo strip + sticky nav with mega-menu trigger. */

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [hover, setHover] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    'Холодильники', 'Стирка', 'Встраиваемая техника',
    'Климат', 'Smart Home', 'Премиум',
  ];

  const linkStyle = {
    fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 14,
    color: 'rgba(255,255,255,0.78)', letterSpacing: '-0.005em',
    cursor: 'pointer',
    transition: 'color 200ms cubic-bezier(.2,.8,.2,1)',
    padding: '6px 0',
    position: 'relative',
  };
  const iconBtn = {
    background: 'transparent', border: 0, color: '#fff',
    cursor: 'pointer', padding: 10, display: 'inline-flex', alignItems: 'center',
    borderRadius: 999,
    transition: 'background 200ms',
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 80,
      background: scrolled ? 'rgba(8,8,8,0.78)' : '#000',
      backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
      transition: 'background 240ms, border-color 240ms, backdrop-filter 240ms',
    }}>
      {/* Top promo strip */}
      <div style={{
        background: '#0A0A0A', color: 'rgba(255,255,255,0.55)',
        fontFamily: 'Manrope, sans-serif', fontSize: 12, letterSpacing: '-0.005em',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 38 }}>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a style={{ display: 'inline-flex', gap: 6, alignItems: 'center', cursor: 'pointer' }}>
              <Icon name="mapPin" size={14} style={{ color: HI_GREEN }} /> Москва
            </a>
            <a style={{ cursor: 'pointer' }}>Шоурумы</a>
            <a style={{ cursor: 'pointer' }}>Сервис</a>
            <a style={{ cursor: 'pointer' }}>Где купить</a>
            <a style={{ cursor: 'pointer' }}>Для дизайнеров</a>
          </div>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a style={{ display: 'inline-flex', gap: 6, alignItems: 'center', cursor: 'pointer' }}>
              <Icon name="phone" size={13} /> 8 800 555 03 55
            </a>
            <a style={{ cursor: 'pointer' }}>RU / EN</a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 40, height: 72,
      }}>
        <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
          <Logo height={22} />
          <nav style={{ display: 'flex', gap: 28 }}>
            {navItems.map((t, i) => (
              <a key={t}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{ ...linkStyle, color: hover === i ? '#fff' : linkStyle.color }}
              >
                {t}
                {hover === i && <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: -2, height: 1, background: HI_GREEN,
                }} />}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.06)', borderRadius: 999,
            padding: '8px 14px 8px 12px', minWidth: 240,
            color: 'rgba(255,255,255,0.55)', fontSize: 13,
          }}>
            <Icon name="search" size={16} />
            <span>Поиск по 460+ моделям</span>
            <span style={{ marginLeft: 'auto', fontSize: 10, padding: '2px 6px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, letterSpacing: '0.05em' }}>⌘ K</span>
          </div>
          <button style={iconBtn} onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.06)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}><Icon name="heart" size={18}/></button>
          <button style={iconBtn} onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.06)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}><Icon name="user" size={18}/></button>
          <button style={{ ...iconBtn, position: 'relative' }} onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.06)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            <Icon name="cart" size={18}/>
            <span style={{
              position: 'absolute', top: 4, right: 2,
              background: HI_GREEN, color: '#fff', borderRadius: 999,
              minWidth: 16, height: 16, fontSize: 10, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 4px',
            }}>2</span>
          </button>
        </div>
      </Container>
    </header>
  );
}

Object.assign(window, { Header });
