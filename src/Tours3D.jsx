/* Hiberg — Block 8: Виртуальные 3D туры.
   A featured tour on the left + a grid of 3 smaller tours on the right.
   Each tour is an interior scene with a "rotate3d" badge and a CTA. */

function Tours3D() {
  const featured = {
    img: 'assets/banner-royal-wine.webp',
    title: 'Премиум-кухня ROYAL',
    sub: '6 устройств · 14 точек обзора',
    duration: '5–7 минут',
    rooms: ['Кухня-гостиная 32 м²', 'Винная зона', 'Островная композиция'],
    devices: ['ROYAL W-85', 'i-RFCB 520F NFW', 'PROFF-K Ice', 'i-VM 9035 B'],
  };

  const tours = [
    { img: 'assets/banner-turelle-2.webp',  title: 'Гардеробная с TURELLE',  rooms: '2 комнаты',  pts: 8,  dur: '3 мин' },
    { img: 'assets/banner-split-night.webp',title: 'Спальня с i-18 Night',   rooms: '1 комната',  pts: 6,  dur: '2 мин' },
    { img: 'assets/banner-zevs.webp',       title: 'Прихожая с ZEVS',        rooms: '1 комната',  pts: 5,  dur: '2 мин' },
    { img: 'assets/banner-catalog.webp',    title: 'Шоурум Москва',          rooms: '4 зоны',     pts: 22, dur: '8 мин' },
    { img: 'assets/banner-catalog-2.webp',  title: 'Кухня i-RFT 750G B',     rooms: '1 комната',  pts: 7,  dur: '3 мин' },
    { img: 'assets/banner-royal-wine-2.webp',title:'Винная зона Royal',      rooms: '1 комната',  pts: 4,  dur: '2 мин' },
  ];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px' }}>
      <Container>
        <SectionHead
          eyebrow="08 · Виртуальные 3D туры"
          title={<>Войдите в интерьер,<br/>не выходя из браузера</>}
          subtitle="Виртуальные туры по шоурумам и референс-интерьерам с реальной техникой HIBERG. Управление с клавиатуры или мыши."
          action={<Button variant="ghost" size="md">Все туры (22) <Icon name="arrow" size={16}/></Button>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
          {/* Featured tour */}
          <FeaturedTour t={featured}/>

          {/* Side tours */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {tours.slice(0, 4).map(t => <TourCard key={t.title} t={t}/>)}
          </div>
        </div>

        {/* Second row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12 }}>
          {tours.slice(4).concat([{
            placeholder: true,
            title: 'Запросить тур',
            sub: 'Создадим виртуальный тур по Вашему проекту',
          }, {
            placeholder: true,
            title: 'Партнёрам',
            sub: 'Размещение туров на сайтах партнёров',
          }]).map((t, i) => (
            t.placeholder ? <PlaceholderTour key={i} t={t}/> : <TourCard key={t.title} t={t}/>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedTour({ t }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', borderRadius: 15, overflow: 'hidden',
        height: 632, background: '#0A0A0A', cursor: 'pointer',
      }}
    >
      <img src={t.img} alt={t.title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.60) 80%, rgba(0,0,0,0.88) 100%)',
      }}/>

      {/* Top-left HUD: dot pattern + label */}
      <div style={{ position: 'absolute', top: 28, left: 28, right: 28, display: 'flex', justifyContent: 'space-between' }}>
        <Badge variant="dark" style={{ background: 'rgba(0,0,0,0.55)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: HI_GREEN, animation: 'hi-pulse 1.4s ease-in-out infinite' }}/>
          Live · 360°
        </Badge>
        <Badge variant="dark">{t.duration}</Badge>
      </div>

      {/* Center play */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 92, height: 92, borderRadius: 999,
          background: hover ? HI_GREEN : 'rgba(255,255,255,0.16)',
          backdropFilter: 'blur(14px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.30)',
          color: '#fff',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 280ms cubic-bezier(.2,.8,.2,1)',
        }}>
          <Icon name="rotate3d" size={32}/>
        </div>
      </div>

      {/* Hotspot dots */}
      {[
        { l: '22%', t: '40%' }, { l: '64%', t: '32%' }, { l: '48%', t: '70%' },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: p.l, top: p.t,
          width: 24, height: 24, borderRadius: 999,
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.45)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: HI_GREEN,
            boxShadow: '0 0 0 6px rgba(4,147,70,0.18)',
            animation: 'hi-pulse 1.6s ease-in-out infinite',
          }}/>
        </div>
      ))}

      {/* Bottom content */}
      <div style={{ position: 'absolute', left: 32, right: 32, bottom: 32, color: '#fff' }}>
        <Eyebrow style={{ marginBottom: 12 }}>Премьерный тур</Eyebrow>
        <h3 style={{
          fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
          fontSize: 44, lineHeight: 1.0, letterSpacing: '-0.030em',
          margin: '0 0 12px',
        }}>{t.title}</h3>
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.78)', margin: '0 0 24px' }}>
          {t.sub}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
          {t.devices.map(d => (
            <span key={d} style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 500,
              padding: '6px 12px', borderRadius: 999,
              background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)',
              color: 'rgba(255,255,255,0.9)',
            }}>{d}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="secondary" size="md">Начать тур <Icon name="rotate3d" size={16}/></Button>
          <Button variant="ghost" size="md">Состав техники</Button>
        </div>
      </div>

      <style>{`@keyframes hi-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .55; transform: scale(.86); } }`}</style>
    </article>
  );
}

function TourCard({ t }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', borderRadius: 15, overflow: 'hidden',
        height: 310, background: '#0A0A0A', cursor: 'pointer',
      }}
    >
      <img src={t.img} alt={t.title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 800ms cubic-bezier(.2,.8,.2,1)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, transparent 30%, rgba(0,0,0,0.78) 100%)',
      }}/>

      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <Badge variant="dark"><Icon name="rotate3d" size={11}/> 360°</Badge>
      </div>

      <div style={{
        position: 'absolute', top: 16, right: 16,
        width: 34, height: 34, borderRadius: 999,
        background: hover ? HI_GREEN : 'rgba(255,255,255,0.16)',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.25)',
        transition: 'all 240ms', transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
      }}>
        <Icon name="arrow" size={14}/>
      </div>

      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, color: '#fff' }}>
        <h4 style={{
          fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
          fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.025em',
          margin: '0 0 10px',
        }}>{t.title}</h4>
        <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
          <span>{t.rooms}</span>
          <span>· {t.pts} точек</span>
          <span>· {t.dur}</span>
        </div>
      </div>
    </article>
  );
}

function PlaceholderTour({ t }) {
  return (
    <a style={{
      borderRadius: 15, height: 310, padding: 28,
      background: 'rgba(255,255,255,0.04)',
      border: '1px dashed rgba(255,255,255,0.18)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      cursor: 'pointer',
      transition: 'background 240ms',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
    >
      <Icon name="plus" size={28} style={{ color: 'rgba(255,255,255,0.5)' }}/>
      <div>
        <div style={{
          fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400, fontSize: 22,
          letterSpacing: '-0.025em', color: '#fff', marginBottom: 10, lineHeight: 1.1,
        }}>{t.title}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>{t.sub}</div>
      </div>
    </a>
  );
}

Object.assign(window, { Tours3D });
