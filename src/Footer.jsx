/* Hiberg — Block 11: Footer.
   Newsletter strip + 4 link columns + retailer logos + legal row. */

function Footer() {
  const cols = [
    ['Каталог',  ['Холодильники', 'Стирка и уход', 'Варочные панели', 'Духовые шкафы', 'Встраиваемая техника', 'Smart Home', 'Климат']],
    ['Бренд',    ['О HIBERG', 'Платформа бренда', 'Мир инноваций', 'Производство', 'Карьера', 'Пресс-центр']],
    ['Сервис',   ['Доставка и установка', 'Гарантия', 'Замена и возврат', 'Сервисные центры', 'Документация', 'FAQ']],
    ['Партнёрам',['Дистрибуция', 'Для дизайнеров', 'Для девелоперов', 'Размещение туров', 'B2B-каталог']],
  ];
  const retailers = [
    { src: 'assets/ozon-logo.png',          alt: 'Ozon' },
    { src: 'assets/wildberries-logo.png',   alt: 'Wildberries' },
    { src: 'assets/yandex-market-logo.png', alt: 'Яндекс Маркет' },
  ];

  const linkStyle = {
    fontFamily: 'Manrope, sans-serif', fontSize: 14,
    color: 'rgba(255,255,255,0.55)',
    cursor: 'pointer', display: 'block',
    padding: '5px 0',
    transition: 'color 200ms',
  };

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Newsletter strip with gradient */}
      <div style={{
        background: 'linear-gradient(180deg, #000 0%, #049346 200%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Container style={{ padding: '64px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ marginBottom: 18 }}>Newsletter</Eyebrow>
              <h3 style={{
                fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
                fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.030em',
                color: '#fff', margin: 0, maxWidth: 480,
              }}>
                Подпишитесь — узнавайте о новинках первыми
              </h3>
            </div>
            <div>
              <div style={{
                display: 'flex', gap: 8, alignItems: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 999, padding: 6, paddingLeft: 24,
                backdropFilter: 'blur(8px)',
              }}>
                <Icon name="mail" size={18} style={{ color: 'rgba(255,255,255,0.6)' }}/>
                <input
                  placeholder="your@email.com"
                  style={{
                    flex: 1, background: 'transparent', border: 0,
                    color: '#fff', fontFamily: 'Manrope, sans-serif', fontSize: 15,
                    outline: 'none', padding: '10px 4px',
                  }}
                />
                <Button variant="secondary" size="md">Подписаться</Button>
              </div>
              <div style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>
                Не более 2 писем в месяц. Только премьеры, акции и приглашения на закрытые мероприятия.
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container style={{ padding: '72px 40px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <Logo height={28}/>
            <p style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 14, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)', marginTop: 24, maxWidth: 300,
            }}>
              Российский бренд крупной и встраиваемой бытовой техники в среднем и премиальном сегментах.
              Опережаем тренды, чтобы будущее наступало раньше времени.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
              {['vk', 'telegram', 'ok', 'rutube'].map(s => (
                <a key={s} style={{
                  width: 40, height: 40, borderRadius: 999,
                  background: 'rgba(255,255,255,0.06)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'background 200ms',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                ><img src={`assets/social-${s}.svg`} alt={s} style={{ height: 16, width: 16, filter: 'invert(1) brightness(1.2)' }}/></a>
              ))}
            </div>
          </div>

          {cols.map(([title, items]) => (
            <div key={title}>
              <div style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 11,
                color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: 18,
              }}>{title}</div>
              {items.map(i => (
                <a key={i} style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >{i}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Retailers strip */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
          padding: '28px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: 28,
        }}>
          <div style={{
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 11,
            color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em',
          }}>Где купить</div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flex: 1 }}>
            {retailers.map(r => (
              <a key={r.alt} style={{
                background: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '12px 24px',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 56, minWidth: 160,
                transition: 'background 200ms, transform 200ms cubic-bezier(.2,.8,.2,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F4F3F3'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <img src={r.src} alt={r.alt} style={{ height: 24, width: 'auto', objectFit: 'contain' }}/>
              </a>
            ))}
          </div>
          <Button variant="ghost" size="sm">Все партнёры <Icon name="arrow" size={14}/></Button>
        </div>

        {/* Legal row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', fontFamily: 'Manrope, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            <span>© 2014 – 2026 HIBERG. Все права защищены.</span>
            <a style={{ cursor: 'pointer' }}>Политика конфиденциальности</a>
            <a style={{ cursor: 'pointer' }}>Условия использования</a>
            <a style={{ cursor: 'pointer' }}>Cookie</a>
            <a style={{ cursor: 'pointer' }}>Карта сайта</a>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
            <span>Сделано в России</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: HI_GREEN }}/>
            <span>Дизайн tutkovbudkov · 2026</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Footer });
