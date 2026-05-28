/* Hiberg — Block 7: Каталог по категориям.
   Two-tier layout: a left "promo" column (smart appliances spotlight) +
   right grid of 18 category tiles with image, label, model count, arrow. */

function Catalog() {
  const groups = [
    { title: 'Кухня — крупная', cats: [
      { img: 'assets/cat-fridges.webp',          label: 'Холодильники',                count: 38 },
      { img: 'assets/cat-freezers.webp',         label: 'Морозильники',                count: 12 },
      { img: 'assets/cat-built-in-fridge.webp',  label: 'Встраиваемые холодильники',   count: 14 },
      { img: 'assets/cat-cooktops.webp',         label: 'Варочные панели',             count: 36 },
      { img: 'assets/cat-cooktops-hood.webp',    label: 'Варочные с вытяжкой',         count: 9  },
      { img: 'assets/cat-hoods.webp',            label: 'Вытяжки',                     count: 24 },
      { img: 'assets/cat-ovens.webp',            label: 'Духовые шкафы',               count: 28 },
      { img: 'assets/cat-mwo.webp',              label: 'СВЧ',                         count: 18 },
      { img: 'assets/cat-coffee.webp',           label: 'Встраиваемые кофемашины',     count: 6  },
    ]},
    { title: 'Кухня — малая', cats: [
      { img: 'assets/cat-wine.webp',             label: 'Винные шкафы',                count: 11 },
      { img: 'assets/cat-aerogrill.webp',        label: 'Аэрогрили',                   count: 7  },
      { img: 'assets/cat-plity.webp',            label: 'Плиты',                       count: 8  },
      { img: 'assets/cat-coolers.webp',          label: 'Кулеры',                      count: 5  },
    ]},
    { title: 'Стирка и уход', cats: [
      { img: 'assets/cat-washers.webp',          label: 'Стиральные машины',           count: 22 },
      { img: 'assets/cat-washer-dryer.webp',     label: 'Стирально-сушильные колонны', count: 6  },
      { img: 'assets/cat-dishwashers.webp',      label: 'Посудомоечные машины',        count: 19 },
      { img: 'assets/cat-steam-cab.webp',        label: 'Паровые шкафы',               count: 5  },
      { img: 'assets/cat-steamers.webp',         label: 'Отпариватели',                count: 9  },
      { img: 'assets/cat-vacuums.webp',          label: 'Пылесосы',                    count: 14 },
    ]},
    { title: 'Smart Home', cats: [
      { img: 'assets/cat-smart-locks.webp',      label: 'Умные замки',                 count: 4  },
      { img: 'assets/cat-smart-table.webp',      label: 'Умные журнальные столики',    count: 3  },
    ]},
  ];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px' }}>
      <Container>
        <SectionHead
          eyebrow="07 · Каталог"
          title={<>Весь HIBERG —<br/>в 22 категориях</>}
          subtitle="От встраиваемой техники для премиальных кухонь до Smart-устройств для дома. Выберите категорию, чтобы перейти к подбору модели."
          action={<Button variant="primary" size="md">Подобрать по параметрам <Icon name="arrow" size={16}/></Button>}
        />

        {groups.map((g, gi) => (
          <div key={g.title} style={{ marginBottom: 56 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20,
            }}>
              <h3 style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)', margin: 0,
              }}>{g.title}</h3>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }}/>
              <span style={{
                fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 12,
                color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em',
              }}>{String(g.cats.length).padStart(2,'0')}</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(g.cats.length, 4)}, 1fr)`,
              gap: 10,
            }}>
              {g.cats.map(c => <CatTile key={c.label} c={c}/>)}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function CatTile({ c }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 15, overflow: 'hidden',
        position: 'relative',
        padding: 0,
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
        transition: 'background 240ms cubic-bezier(.2,.8,.2,1)',
        textDecoration: 'none',
      }}
    >
      <div style={{
        height: 140, position: 'relative', overflow: 'hidden',
        background: '#0A0A0A',
      }}>
        <img src={c.img} alt={c.label} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
        }}/>
      </div>
      <div style={{
        padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 12,
      }}>
        <div>
          <div style={{
            fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 14,
            color: '#fff', lineHeight: 1.3, letterSpacing: '-0.005em',
          }}>{c.label}</div>
          <div style={{
            fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 11,
            color: 'rgba(255,255,255,0.45)', marginTop: 4, letterSpacing: '0.04em',
          }}>{c.count} моделей</div>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: 999,
          background: hover ? HI_GREEN : 'rgba(255,255,255,0.10)',
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'all 240ms',
          transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
        }}>
          <Icon name="arrow" size={12}/>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { Catalog });
