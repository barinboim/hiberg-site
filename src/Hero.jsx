/* Hiberg — Block 2: Имиджевый hero slider.
   Full-bleed image slider with brand-green glow overlay, slide indicators, and KV slogan. */

function Hero() {
  const slides = [
  {
    img: 'assets/banner-turelle.webp',
    eyebrow: 'TURELLE · стирально-сушильная колонна',
    title: 'Лето для себя\nи полной свободы',
    sub: 'Безупречный уход за вещами в ритме активного лета.',
    cta: 'Открыть TURELLE',
    tint: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.20) 55%, transparent 100%)'
  },
  {
    img: 'assets/banner-zevs.webp',
    eyebrow: 'HIBERG ZEVS · умный замок',
    title: 'Безопасность,\nкоторая думает',
    sub: 'Интеллектуальный контроль доступа в Ваш дом — без ключа.',
    cta: 'Узнать о ZEVS',
    tint: 'linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 60%, transparent 100%)'
  },
  {
    img: 'assets/banner-royal-wine.webp',
    eyebrow: 'HIBERG ROYAL · винные шкафы',
    title: 'Для истинных\nценителей вкуса',
    sub: 'Премиальные винные шкафы серии ROYAL.',
    cta: 'Открыть коллекцию',
    tint: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)'
  },
  {
    img: 'assets/banner-split-night.webp',
    eyebrow: 'i-18 NIGHT · сплит-система',
    title: 'Тишина,\nкоторая успокаивает',
    sub: 'Ночной режим работы и инверторное управление климатом.',
    cta: 'Открыть i-18 Night',
    tint: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)'
  }];


  const [i, setI] = React.useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  const s = slides[i];

  return (
    <section style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
      <div style={{
        position: 'relative', height: 720, width: '100%'
      }}>
        {slides.map((slide, idx) =>
        <div key={idx} style={{
          position: 'absolute', inset: 0,
          opacity: idx === i ? 1 : 0,
          transition: 'opacity 700ms cubic-bezier(.2,.8,.2,1)',
          pointerEvents: idx === i ? 'auto' : 'none'
        }}>
            <img src={slide.img} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: idx === i ? 'scale(1.02)' : 'scale(1.06)',
            transition: 'transform 8s linear'
          }} />
            <div style={{ position: 'absolute', inset: 0, background: slide.tint }} />
            {/* Brand green corner glow */}
            <div style={{
            position: 'absolute', right: -200, bottom: -200, width: 700, height: 700,
            background: 'radial-gradient(closest-side, rgba(4,147,70,0.30), transparent 70%)',
            pointerEvents: 'none'
          }} />
            {/* Large brand symbol overlay — high transparency, right-aligned */}
            <img src="assets/logo-symbol.svg" alt="" style={{
              position: 'absolute',
              right: '-6%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '120%',
              width: 'auto',
              opacity: 0.18,
              mixBlendMode: 'screen',
              pointerEvents: 'none',
              filter: 'drop-shadow(0 0 60px rgba(4,147,70,0.35))'
            }} />
          </div>
        )}

        {/* Slide content */}
        <Container style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: 620 }}>
            <Eyebrow style={{ marginBottom: 24 }}>{s.eyebrow}</Eyebrow>
            <h1 style={{
              fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
              fontSize: 84, lineHeight: 0.98, letterSpacing: '-0.030em',
              color: '#fff', margin: '0 0 28px',
              whiteSpace: 'pre-line'
            }}>{s.title}</h1>
            <p style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 19, lineHeight: 1.5,
              color: 'rgba(255,255,255,0.78)', margin: '0 0 40px', maxWidth: 500
            }}>{s.sub}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary" size="lg">{s.cta} <Icon name="arrow" size={18} /></Button>
              <Button variant="ghost" size="lg">Все коллекции</Button>
            </div>
          </div>
        </Container>

        {/* Controls */}
        <Container style={{
          position: 'absolute', left: 0, right: 0, bottom: 32,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {slides.map((_, idx) =>
            <button key={idx} onClick={() => setI(idx)} style={{
              width: idx === i ? 48 : 24, height: 3, border: 0, padding: 0,
              background: idx === i ? '#fff' : 'rgba(255,255,255,0.30)',
              borderRadius: 2, cursor: 'pointer',
              transition: 'all 320ms cubic-bezier(.2,.8,.2,1)'
            }} aria-label={`Слайд ${idx + 1}`} />
            )}
            <span style={{
              fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 12,
              color: 'rgba(255,255,255,0.7)', marginLeft: 12, letterSpacing: '0.06em'
            }}>{String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={prev} style={navBtnStyle} aria-label="Назад"><Icon name="arrowL" size={18} /></button>
            <button onClick={next} style={navBtnStyle} aria-label="Вперёд"><Icon name="arrowR" size={18} /></button>
          </div>
        </Container>
      </div>
    </section>);

}

const navBtnStyle = {
  width: 48, height: 48, borderRadius: 999,
  background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)',
  color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 200ms, border-color 200ms',
  backdropFilter: 'blur(8px)'
};

Object.assign(window, { Hero });