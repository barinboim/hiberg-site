/* Hiberg — Block 3: Мир инноваций.
   Editorial bento grid of new tech: 1 hero card + 4 supporting tiles. */

function Innovations() {
  const items = [
    {
      img: 'assets/new-coffee-proff.webp',
      tag: 'Премьера 2026',
      name: 'PROFF-K Ice',
      desc: 'Встраиваемые кофемашины с ледогенератором — 19 бар, 12 режимов, регулировка помола.',
      meta: ['19 бар', '12 режимов', 'Авто-самоочистка'],
    },
    {
      img: 'assets/new-steam-cabinet.webp',
      tag: 'Инновация',
      name: 'SD 4GW',
      desc: 'Паровой шкаф для бережного ухода за гардеробом.',
    },
    {
      img: 'assets/new-fridge-built-in.webp',
      tag: 'Inverter Pro',
      name: 'S-RFC 600 B',
      desc: 'Встраиваемый комби с инверторным компрессором.',
    },
    {
      img: 'assets/new-cooktop-i8vm8.webp',
      tag: 'Premium',
      name: 'i8-VM 8 B',
      desc: 'Индукция со встроенной вытяжкой нового поколения.',
    },
    {
      img: 'assets/new-smart-table.webp',
      tag: 'Smart Living',
      name: 'X3-MB',
      desc: 'Журнальный столик с встроенным холодильником.',
    },
  ];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px', position: 'relative' }}>
      <Container>
        <SectionHead
          eyebrow="03 · Мир инноваций"
          title={<>Технологии, которые<br/>появляются раньше времени</>}
          subtitle="Мы изучаем мировые тренды и первыми приносим в дом то, что завтра станет нормой. Ниже — новые модели сезона."
          action={<Button variant="ghost" size="md">Все инновации <Icon name="arrow" size={16}/></Button>}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gridTemplateRows: '380px 380px',
          gap: 12,
        }}>
          {/* Big hero card spans 2 rows */}
          <InnovCard item={items[0]} large gridArea="1 / 1 / 3 / 2" />
          {/* Top right */}
          <InnovCard item={items[1]} gridArea="1 / 2 / 2 / 3" />
          <InnovCard item={items[2]} gridArea="1 / 3 / 2 / 4" />
          {/* Bottom right */}
          <InnovCard item={items[3]} gridArea="2 / 2 / 3 / 3" />
          <InnovCard item={items[4]} gridArea="2 / 3 / 3 / 4" />
        </div>
      </Container>
    </section>
  );
}

function InnovCard({ item, large, gridArea }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gridArea,
        position: 'relative',
        borderRadius: 15,
        overflow: 'hidden',
        background: '#0A0A0A',
        cursor: 'pointer',
      }}
    >
      <img src={item.img} alt={item.name} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.04)' : 'scale(1.0)',
        transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.50) 80%, rgba(0,0,0,0.85) 100%)',
      }}/>
      <div style={{
        position: 'absolute', top: 20, left: 20,
      }}>
        <Badge variant="accent">{item.tag}</Badge>
      </div>
      <div style={{
        position: 'absolute', top: 20, right: 20,
        width: 36, height: 36, borderRadius: 999,
        background: hover ? '#fff' : 'rgba(255,255,255,0.12)',
        color: hover ? '#000' : '#fff',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 240ms cubic-bezier(.2,.8,.2,1)',
        transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
      }}>
        <Icon name="arrow" size={16}/>
      </div>
      <div style={{
        position: 'absolute', left: large ? 32 : 20, right: large ? 32 : 20, bottom: large ? 32 : 20,
        color: '#fff',
      }}>
        <h3 style={{
          fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
          fontSize: large ? 44 : 22, lineHeight: 1.05, letterSpacing: '-0.030em',
          margin: '0 0 10px',
        }}>{item.name}</h3>
        <p style={{
          fontFamily: 'Manrope, sans-serif', fontSize: large ? 15 : 13,
          lineHeight: 1.5, color: 'rgba(255,255,255,0.78)',
          margin: 0, maxWidth: large ? 460 : 320,
        }}>{item.desc}</p>
        {item.meta && (
          <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
            {item.meta.map(m => (
              <span key={m} style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 12,
                padding: '6px 10px', border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 999, color: 'rgba(255,255,255,0.85)',
              }}>{m}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

Object.assign(window, { Innovations });
