/* Hiberg — Block 4: Мир Hiberg.
   Brand-story panel with the signature gradient + 4 pillars + a horizontal news ticker. */

function World() {
  const pillars = [
    { n: '01', t: 'Инновации',    d: 'Изучаем мировые тренды и применяем технологии первыми.' },
    { n: '02', t: 'Первенство',   d: 'Создаём место, где будущее появляется раньше времени.' },
    { n: '03', t: 'Смелость',     d: 'Не боимся менять привычное представление о бытовой технике.' },
    { n: '04', t: 'Качество',     d: 'Высочайшие стандарты на каждом этапе — от детали до сервиса.' },
  ];

  const news = [
    { date: '15.05.2026', tag: 'Выставка',  title: 'HIBERG на ARTDOM 2026 — технологии дизайна и инновационный комфорт.', img: 'assets/banner-catalog.webp' },
    { date: '08.05.2026', tag: 'Премьера',  title: 'Премьера паровых шкафов SD 5G — новая эра домашнего комфорта.',     img: 'assets/new-steam-cabinet.webp' },
    { date: '02.04.2026', tag: 'Технология',title: 'i-RFCB 520F NFW — холодильник, сохраняющий свежесть и эстетику.',    img: 'assets/banner-catalog-2.webp' },
    { date: '20.03.2026', tag: 'Коллекция', title: 'Новая коллекция аэрогрилей — раскрываем технологию идеального вкуса.', img: 'assets/new-aerogrill.webp' },
  ];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px', position: 'relative' }}>
      <Container>
        {/* Big gradient panel */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #000 0%, #049346 110%)',
          borderRadius: 15,
          padding: '80px 64px 72px',
          overflow: 'hidden',
          minHeight: 540,
        }}>
          {/* Background symbol */}
          <img src="assets/logo-symbol.svg" alt="" style={{
            position: 'absolute', right: -80, top: -40, height: 620, opacity: 0.10,
            pointerEvents: 'none',
          }}/>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
            <div>
              <Eyebrow style={{ marginBottom: 24, color: '#fff' }}>
                <span style={{ background: '#fff', width: 24, height: 1 }}/>04 · Мир HIBERG
              </Eyebrow>
              <h2 style={{
                fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
                fontSize: 72, lineHeight: 1.0, letterSpacing: '-0.030em',
                color: '#fff', margin: '0 0 32px',
              }}>
                Жить ярко.<br/>Жить интересно.
              </h2>
              <p style={{
                fontFamily: 'Manrope, sans-serif', fontSize: 18, lineHeight: 1.6,
                color: 'rgba(255,255,255,0.85)', margin: '0 0 36px', maxWidth: 480,
              }}>
                Бытовая техника HIBERG — это возможность жить не только комфортно, но интересно.
                Мы создаём место, где будущее появляется раньше времени, где люди впервые сталкиваются
                с тем, что завтра станет нормой.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="secondary" size="lg">О бренде <Icon name="arrow" size={16}/></Button>
                <Button variant="ghost" size="lg">Платформа</Button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {pillars.map(p => (
                <div key={p.n} style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 15,
                  padding: 28,
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{
                    fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 12,
                    color: 'rgba(255,255,255,0.55)', letterSpacing: '0.10em', marginBottom: 18,
                  }}>{p.n}</div>
                  <div style={{
                    fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400, fontSize: 28,
                    color: '#fff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 10,
                  }}>{p.t}</div>
                  <div style={{
                    fontFamily: 'Manrope, sans-serif', fontSize: 13, lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.75)',
                  }}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.10)',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
        }}>
          {[
            ['2014',  'Год основания бренда'],
            ['460+',  'Моделей в каталоге'],
            ['52',    'Региона присутствия'],
            ['18',    'Категорий техники'],
          ].map(([n, d], i) => (
            <div key={n} style={{
              padding: '32px 28px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.10)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400, fontSize: 56,
                lineHeight: 1, letterSpacing: '-0.030em', color: '#fff', marginBottom: 8,
              }}>{n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* News strip */}
        <div style={{ marginTop: 80 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
            <h3 style={{
              fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400, fontSize: 36,
              letterSpacing: '-0.030em', margin: 0, color: '#fff',
            }}>Новости и события</h3>
            <a style={{
              fontSize: 14, color: 'rgba(255,255,255,0.6)', display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer',
            }}>Все материалы <Icon name="arrow" size={14}/></a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {news.map(n => (
              <article key={n.title} style={{
                borderRadius: 15, overflow: 'hidden', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                transition: 'background 240ms',
              }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.04)'}
              >
                <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
                  <img src={n.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <Badge variant="dark">{n.tag}</Badge>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{
                    fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 12,
                    color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', marginBottom: 10,
                  }}>{n.date}</div>
                  <p style={{
                    fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 15,
                    lineHeight: 1.4, margin: 0, color: '#fff',
                  }}>{n.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { World });
