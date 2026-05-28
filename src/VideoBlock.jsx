/* Hiberg — Block 9: Видео.
   Full-bleed featured video panel + a side list of 3 chapters/episodes. */

function VideoBlock() {
  const chapters = [
    { i: 1, title: 'HIBERG ZEVS: интеллектуальная безопасность', dur: '3:42', img: 'assets/banner-zevs-2.webp' },
    { i: 2, title: 'PROFF-K Ice: кофе с ледогенератором',        dur: '2:18', img: 'assets/new-coffee-proff.webp' },
    { i: 3, title: 'TURELLE: лето для себя',                     dur: '1:54', img: 'assets/banner-turelle.webp' },
    { i: 4, title: 'Паровые шкафы SD 6GB: уход за гардеробом',   dur: '4:08', img: 'assets/new-steam-cabinet.webp' },
  ];

  const [playing, setPlaying] = React.useState(false);
  const [active, setActive] = React.useState(0);

  const v = chapters[active];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px' }}>
      <Container>
        <SectionHead
          eyebrow="09 · Видео"
          title={<>Технологии HIBERG —<br/>в движении</>}
          subtitle="Серия фильмов о наших устройствах: как они работают, что внутри и зачем мы их сделали."
          action={
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              <span>HIBERG.TV</span>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.3)' }}/>
              <span>{chapters.length} эпизодов</span>
            </div>
          }
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16 }}>
          {/* Player */}
          <div style={{
            position: 'relative', borderRadius: 15, overflow: 'hidden',
            background: '#0A0A0A', height: 620,
          }}>
            <img src={v.img} alt={v.title} style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
              transform: playing ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 9s linear',
            }}/>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 30%, rgba(0,0,0,0.85) 100%)',
            }}/>

            {/* Top hud */}
            <div style={{
              position: 'absolute', top: 24, left: 24, right: 24,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Badge variant="accent">Эпизод {String(v.i).padStart(2,'0')}</Badge>
                {playing && <Badge variant="dark">
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: '#E14F26', animation: 'hi-pulse 1.4s ease-in-out infinite' }}/>
                  LIVE
                </Badge>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={iconBtnLg} aria-label="Звук"><Icon name="sound" size={16}/></button>
                <button style={iconBtnLg} aria-label="Полный экран"><Icon name="expand" size={16}/></button>
              </div>
            </div>

            {/* Center play */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button onClick={() => setPlaying(p => !p)} style={{
                width: 96, height: 96, borderRadius: 999, border: 0, cursor: 'pointer',
                background: playing ? 'rgba(0,0,0,0.5)' : HI_GREEN,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
                boxShadow: playing ? 'none' : '0 0 0 14px rgba(4,147,70,0.18)',
                transition: 'all 240ms cubic-bezier(.2,.8,.2,1)',
              }} aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
                {playing ? <Icon name="pause" size={28}/> : <Icon name="play" size={32} style={{ marginLeft: 4 }}/>}
              </button>
            </div>

            {/* Bottom content + progress */}
            <div style={{ position: 'absolute', left: 32, right: 32, bottom: 28, color: '#fff' }}>
              <div style={{
                fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 12,
                color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', marginBottom: 10,
              }}>0:00 / {v.dur}</div>
              <h3 style={{
                fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
                fontSize: 44, lineHeight: 1.0, letterSpacing: '-0.030em',
                margin: '0 0 24px', maxWidth: 600,
              }}>{v.title}</h3>
              {/* Progress bar */}
              <div style={{ height: 3, background: 'rgba(255,255,255,0.18)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: playing ? '32%' : '0%',
                  background: HI_GREEN, borderRadius: 2,
                  transition: 'width 1s linear',
                }}/>
              </div>
            </div>
          </div>

          {/* Chapter list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {chapters.map((c, i) => (
              <button key={c.i} onClick={() => setActive(i)} style={{
                display: 'flex', alignItems: 'stretch', gap: 14, padding: 12,
                border: '1px solid ' + (i === active ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.06)'),
                background: i === active ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                borderRadius: 12, cursor: 'pointer',
                transition: 'all 200ms',
                textAlign: 'left',
              }}
              onMouseEnter={e => { if (i !== active) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { if (i !== active) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                <div style={{
                  width: 120, height: 84, borderRadius: 8, overflow: 'hidden', flexShrink: 0,
                  position: 'relative', background: '#0A0A0A',
                }}>
                  <img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={14} style={{ color: '#fff' }}/>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, color: '#fff', paddingRight: 4 }}>
                  <div style={{
                    fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 11,
                    color: i === active ? HI_GREEN : 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.06em',
                  }}>EP {String(c.i).padStart(2,'0')}</div>
                  <div style={{
                    fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 14,
                    lineHeight: 1.3, color: i === active ? '#fff' : 'rgba(255,255,255,0.78)',
                  }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{c.dur}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const iconBtnLg = {
  width: 40, height: 40, borderRadius: 999,
  background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.15)',
  color: '#fff', cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 200ms',
};

Object.assign(window, { VideoBlock });
