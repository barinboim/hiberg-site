/* Hiberg — Block 6: Топ продаж.
   Tabs by category, then a grid of 8 product cards on cream/black product surface. */

function TopSales() {
  const tabs = ['Все', 'Холодильники', 'Стирка', 'Варочные', 'Духовые', 'Климат'];
  const [tab, setTab] = React.useState(0);

  const products = [
    { img: 'assets/top-fridge-rfq590.webp',     cat: 'Холодильники', name: 'RFQ-590G GT Inverter', sku: 'RFQ-590G GT', price: '149 990', old: '169 990', tag: 'Хит',  rating: 4.9, reviews: 342 },
    { img: 'assets/top-fridge-irfq705.webp',    cat: 'Холодильники', name: 'i-RFQ 705G B Inverter', sku: 'i-RFQ 705G B', price: '189 990', old: null,    tag: 'Новинка', rating: 4.8, reviews: 128 },
    { img: 'assets/top-washer-turelle.webp',    cat: 'Стирка',       name: 'TURELLE i-10 SD',       sku: 'TURELLE i-10 SD', price: '249 990', old: '279 990', tag: '-11%', rating: 5.0, reviews: 89 },
    { img: 'assets/top-cooktop-ims4539.webp',   cat: 'Варочные',     name: 'i-MS 4539 B Induction', sku: 'i-MS 4539 B', price:  '54 990', old: null,    tag: 'Хит',  rating: 4.9, reviews: 412 },
    { img: 'assets/top-cooktop-vm4235.webp',    cat: 'Варочные',     name: 'VM 4235 B Gas',         sku: 'VM 4235 B', price:  '32 990', old: '38 990', tag: '-15%', rating: 4.7, reviews: 256 },
    { img: 'assets/top-oven-svm6415.webp',      cat: 'Духовые',      name: 'S-VM 6415 B Smart',     sku: 'S-VM 6415 B', price: '104 990', old: null,    tag: 'Хит',  rating: 4.8, reviews: 174 },
    { img: 'assets/top-freezer-ifr40.webp',     cat: 'Холодильники', name: 'i-FR 40 S Freezer',     sku: 'i-FR 40 S', price:  '67 990', old: '74 990', tag: '-9%',  rating: 4.6, reviews: 92  },
    { img: 'assets/top-heater.webp',            cat: 'Климат',       name: 'TSH 3000 B Heater',     sku: 'TSH 3000 B', price:  '18 990', old: null,    tag: 'Сезон', rating: 4.7, reviews: 308 },
  ];

  const filtered = tab === 0 ? products : products.filter(p => p.cat === tabs[tab]);

  return (
    <section style={{ background: '#000', padding: '120px 0 32px' }}>
      <Container>
        <SectionHead
          eyebrow="06 · Топ продаж"
          title={<>Что выбирают<br/>в этом сезоне</>}
          subtitle="8 самых популярных моделей по данным наших партнёров и собственного канала продаж."
          action={<Button variant="ghost" size="md">Все хиты <Icon name="arrow" size={16}/></Button>}
        />

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 6, marginBottom: 32, flexWrap: 'wrap',
          paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 14,
              padding: '10px 18px', borderRadius: 999, cursor: 'pointer',
              background: i === tab ? '#fff' : 'transparent',
              color: i === tab ? '#000' : 'rgba(255,255,255,0.65)',
              border: i === tab ? '1px solid #fff' : '1px solid rgba(255,255,255,0.12)',
              transition: 'all 200ms cubic-bezier(.2,.8,.2,1)',
              letterSpacing: '-0.005em',
            }}>{t}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {filtered.map(p => <ProductCard key={p.sku} p={p}/>)}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#FEF4E8', color: '#0d0d0d',
        borderRadius: 15, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer', position: 'relative',
        transition: 'transform 240ms cubic-bezier(.2,.8,.2,1)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div style={{
        position: 'relative', aspectRatio: '4 / 3',
        background: '#F7EBD8', overflow: 'hidden',
      }}>
        <img src={p.img} alt={p.name} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
        }}/>
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <Badge variant={p.tag.startsWith('-') ? 'alert' : (p.tag === 'Новинка' ? 'accent' : 'fill')} style={{
            background: p.tag.startsWith('-') ? '#E14F26' : (p.tag === 'Новинка' ? HI_GREEN : 'rgba(0,0,0,0.8)'),
            color: '#fff',
          }}>{p.tag}</Badge>
        </div>
        <button style={{
          position: 'absolute', top: 14, right: 14,
          width: 36, height: 36, borderRadius: 999,
          background: 'rgba(255,255,255,0.85)', border: 0, cursor: 'pointer',
          color: '#0d0d0d',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 200ms',
        }}
          onMouseEnter={e => { e.stopPropagation(); e.currentTarget.style.background = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; }}
          onClick={e => e.stopPropagation()}
        ><Icon name="heart" size={16}/></button>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{
          fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 10,
          color: '#999896', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>{p.cat}</div>
        <h3 style={{
          fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16,
          lineHeight: 1.3, margin: 0, color: '#0d0d0d',
          letterSpacing: '-0.01em',
        }}>{p.name}</h3>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#0d0d0d',
        }}>
          <Icon name="star" size={12} style={{ color: '#E14F26', fill: '#E14F26' }} stroke={0}/>
          <span style={{ fontWeight: 600 }}>{p.rating}</span>
          <span style={{ color: '#8E9095' }}>· {p.reviews} отзывов</span>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, paddingTop: 8 }}>
          <div>
            <div style={{
              fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 500, fontSize: 24,
              letterSpacing: '-0.025em', color: '#0d0d0d',
            }}>{p.price} ₽</div>
            {p.old && <div style={{ fontSize: 13, color: '#999896', textDecoration: 'line-through' }}>{p.old} ₽</div>}
          </div>
          <button style={{
            width: 44, height: 44, borderRadius: 999, border: 0, cursor: 'pointer',
            background: hover ? HI_GREEN : '#0d0d0d',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 240ms',
          }} aria-label="В корзину" onClick={e => e.stopPropagation()}>
            <Icon name="cart" size={18}/>
          </button>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { TopSales });
