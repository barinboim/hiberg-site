/* Hiberg — Block 10: Обратная связь.
   Two columns: contact form (left) + contact channels grid (right) + bottom strip. */

function Contact() {
  const [type, setType] = React.useState('Вопрос о продукте');
  const types = ['Вопрос о продукте', 'Сервис и гарантия', 'Сотрудничество', 'Другое'];

  return (
    <section style={{ background: '#000', padding: '120px 0 32px', position: 'relative' }}>
      <Container>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #0A0A0A 0%, #000 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 15,
          padding: 64,
          overflow: 'hidden',
        }}>
          {/* Subtle green corner glow */}
          <div style={{
            position: 'absolute', right: -200, bottom: -200, width: 600, height: 600,
            background: 'radial-gradient(closest-side, rgba(4,147,70,0.18), transparent 70%)',
            pointerEvents: 'none',
          }}/>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64 }}>
            {/* LEFT — form */}
            <div>
              <Eyebrow style={{ marginBottom: 22 }}>10 · Обратная связь</Eyebrow>
              <h2 style={{
                fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
                fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.030em',
                color: '#fff', margin: '0 0 18px',
              }}>Напишите нам</h2>
              <p style={{
                fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: 1.6,
                color: 'rgba(255,255,255,0.6)', margin: '0 0 40px', maxWidth: 460,
              }}>
                Отвечаем в течение одного рабочего дня. Для срочных сервисных вопросов используйте телефон.
              </p>

              {/* Type picker */}
              <div style={{ display: 'flex', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
                {types.map(t => (
                  <button key={t} onClick={() => setType(t)} style={{
                    fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 13,
                    padding: '10px 16px', borderRadius: 999, cursor: 'pointer',
                    background: t === type ? '#fff' : 'transparent',
                    color: t === type ? '#000' : 'rgba(255,255,255,0.65)',
                    border: t === type ? '1px solid #fff' : '1px solid rgba(255,255,255,0.15)',
                    transition: 'all 200ms cubic-bezier(.2,.8,.2,1)',
                  }}>{t}</button>
                ))}
              </div>

              {/* Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <Field label="Ваше имя" placeholder="Анна Иванова"/>
                <Field label="E-mail" placeholder="anna@mail.ru"/>
              </div>
              <Field label="Телефон" placeholder="+7 999 000 00 00" style={{ marginBottom: 14 }}/>
              {type === 'Вопрос о продукте' && (
                <Field label="Модель (если есть)" placeholder="например, i-RFCB 520F NFW" style={{ marginBottom: 14 }}/>
              )}
              <Field label="Сообщение" placeholder="Расскажите, чем мы можем помочь" multiline style={{ marginBottom: 22 }}/>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 24, lineHeight: 1.5, cursor: 'pointer' }}>
                <span style={{
                  width: 16, height: 16, borderRadius: 4, marginTop: 2, flexShrink: 0,
                  border: '1px solid rgba(255,255,255,0.30)', background: '#0A0A0A',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: HI_GREEN,
                }}><Icon name="check" size={12}/></span>
                Я соглашаюсь с обработкой персональных данных согласно политике конфиденциальности HIBERG.
              </label>

              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="primary" size="lg">Отправить <Icon name="arrow" size={16}/></Button>
                <Button variant="ghost" size="lg">Очистить</Button>
              </div>
            </div>

            {/* RIGHT — channels */}
            <div>
              <h4 style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 12,
                color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase',
                margin: '0 0 22px',
              }}>Каналы связи</h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Channel icon="phone" title="Горячая линия" value="8 800 555 03 55" hint="Ежедневно, 8:00 – 22:00"/>
                <Channel icon="mail"  title="E-mail"        value="hello@hiberg.ru" hint="Ответ в течение 24 часов"/>
                <Channel icon="mic"   title="Сервис"        value="service@hiberg.ru" hint="Гарантия и ремонт"/>
                <Channel icon="mapPin" title="Шоурумы"      value="14 городов России" hint="Найти ближайший" link/>
              </div>

              <div style={{
                marginTop: 14,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 15, padding: 24,
              }}>
                <div style={{
                  fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 14,
                  color: '#fff', marginBottom: 14,
                }}>Мы в социальных сетях</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['vk', 'telegram', 'ok', 'rutube'].map(s => (
                    <a key={s} style={{
                      width: 44, height: 44, borderRadius: 999,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'background 200ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                    >
                      <img src={`assets/social-${s}.svg`} alt={s} style={{ height: 18, width: 18, opacity: 0.9, filter: 'invert(1) brightness(1.2)' }}/>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{
                marginTop: 14,
                borderRadius: 15, overflow: 'hidden',
                height: 200, position: 'relative',
                background: 'linear-gradient(135deg, #0F1A14 0%, #061308 50%, #0a1f10 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                {/* Map "lines" */}
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.20 }}>
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#049346" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                  <path d="M 0 100 Q 200 60 400 120 T 800 80" fill="none" stroke="#049346" strokeWidth="1.5" opacity="0.6"/>
                  <path d="M 0 150 Q 250 90 500 170 T 900 130" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3"/>
                </svg>
                {/* Pin */}
                <div style={{ position: 'absolute', left: '38%', top: '46%', color: HI_GREEN, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Icon name="mapPin" size={24}/>
                  <span style={{ fontSize: 12, color: '#fff', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: 999, fontFamily: 'Manrope, sans-serif' }}>Москва, ТЦ Авиапарк</span>
                </div>
                <div style={{ position: 'absolute', right: '20%', top: '30%', color: 'rgba(255,255,255,0.5)' }}>
                  <Icon name="mapPin" size={14}/>
                </div>
                <div style={{ position: 'absolute', left: '18%', bottom: '20%', color: 'rgba(255,255,255,0.5)' }}>
                  <Icon name="mapPin" size={14}/>
                </div>
                <Badge variant="dark" style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,0.6)' }}>14 шоурумов</Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, placeholder, multiline, style }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'block', ...style }}>
      <div style={{
        fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 11,
        color: focused ? HI_GREEN : 'rgba(255,255,255,0.45)',
        textTransform: 'uppercase', letterSpacing: '0.10em',
        marginBottom: 8,
        transition: 'color 200ms',
      }}>{label}</div>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid ' + (focused ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.10)'),
            borderRadius: 12,
            padding: 14,
            color: '#fff',
            fontFamily: 'Manrope, sans-serif', fontSize: 15,
            outline: 'none', resize: 'vertical',
            transition: 'border-color 200ms',
          }}
        />
      ) : (
        <input
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid ' + (focused ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.10)'),
            borderRadius: 12,
            padding: '14px 16px',
            color: '#fff',
            fontFamily: 'Manrope, sans-serif', fontSize: 15,
            outline: 'none',
            transition: 'border-color 200ms',
          }}
        />
      )}
    </label>
  );
}

function Channel({ icon, title, value, hint, link }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 15, padding: 24,
        transition: 'background 200ms',
        cursor: link ? 'pointer' : 'default',
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 999,
        background: 'rgba(4,147,70,0.18)', color: HI_GREEN,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
      }}><Icon name={icon} size={16}/></div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: 8, fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>{title}</div>
      <div style={{
        fontFamily: 'Rooftop, Manrope, sans-serif', fontWeight: 400,
        fontSize: 20, color: '#fff', letterSpacing: '-0.015em', marginBottom: 6, lineHeight: 1.2,
      }}>{value}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {hint}{link && <Icon name="arrow" size={12}/>}
      </div>
    </div>
  );
}

Object.assign(window, { Contact });
