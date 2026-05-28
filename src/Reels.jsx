/* Hiberg — Block 5: Reels (vertical 9:16 short-video cards, horizontal scroller).
   Tasteful interpretation: each "reel" is a 9:16 product/lifestyle shot with a play overlay,
   author handle, view count and like count. Cards scroll horizontally. */

function Reels() {
  const reels = [
    { img: 'assets/new-vacuum-stylle.webp', title: 'Бесшумный пылесос STYLLE Q в действии', author: '@hiberg_official', duration: '0:34', views: '128K', likes: '4.2K' },
    { img: 'assets/new-aerogrill.webp',     title: '5 блюд в аэрогриле GF-400 GB',           author: '@hiberg_kitchen',  duration: '1:12', views: '89K',  likes: '3.1K' },
    { img: 'assets/banner-zevs-2.webp',     title: 'ZEVS — установка за 5 минут',            author: '@hiberg_smart',    duration: '0:48', views: '212K', likes: '7.8K' },
    { img: 'assets/new-cooktop-ims6249.webp',title: 'Индукция i-MS 6249 — тест на скорость',  author: '@hiberg_kitchen',  duration: '0:22', views: '67K',  likes: '2.4K' },
    { img: 'assets/new-wine-cabinet.webp',  title: 'ROYAL W-85 в интерьере',                 author: '@hiberg_design',   duration: '0:58', views: '54K',  likes: '1.9K' },
    { img: 'assets/new-steamer-gsw.webp',   title: 'GSW 8000 — пар на 8 минут готовности',   author: '@hiberg_care',     duration: '0:41', views: '93K',  likes: '3.6K' },
    { img: 'assets/new-dishwasher.webp',    title: 'Посудомойка i-Q 6815 LB: первый запуск', author: '@hiberg_kitchen',  duration: '1:24', views: '41K',  likes: '1.2K' },
    { img: 'assets/banner-turelle-2.webp',  title: 'TURELLE — день из жизни',                author: '@hiberg_official', duration: '0:38', views: '184K', likes: '6.5K' },
  ];

  const scrollerRef = React.useRef(null);
  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * 540, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#000', padding: '120px 0 32px' }}>
      <Container>
        <SectionHead
          eyebrow="05 · Reels"
          title={<>Hiberg в коротких<br/>историях</>}
          subtitle="Короткие видео о продуктах, технологиях и сценариях использования — то, чем мы делимся в социальных сетях."
          action={
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Button variant="ghost" size="md">Все Reels</Button>
              <button style={navBtnSm} onClick={() => scrollBy(-1)} aria-label="Назад"><Icon name="arrowL" size={16}/></button>
              <button style={navBtnSm} onClick={() => scrollBy(1)} aria-label="Вперёд"><Icon name="arrowR" size={16}/></button>
            </div>
          }
        />
      </Container>

      {/* Edge-bleed scroller */}
      <div
        ref={scrollerRef}
        className="hi-scroller"
        style={{
          display: 'flex', gap: 16, overflowX: 'auto', padding: '0 40px 24px',
          scrollSnapType: 'x mandatory',
          maskImage: 'linear-gradient(90deg, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
        }}
      >
        {reels.map((r, i) => <ReelCard key={i} reel={r} index={i}/>)}
      </div>
    </section>
  );
}

function ReelCard({ reel, index }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: '0 0 auto',
        width: 260, height: 462,        /* 9:16 ratio */
        scrollSnapAlign: 'start',
        borderRadius: 15, overflow: 'hidden', position: 'relative',
        background: '#0A0A0A', cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <img src={reel.img} alt={reel.title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1.0)',
        transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
      }}/>

      {/* Top: duration + index */}
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
        <Badge variant="dark">{reel.duration}</Badge>
        <span style={{
          fontFamily: 'Rooftop Mono, ui-monospace, monospace', fontSize: 11,
          color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em',
        }}>R{String(index+1).padStart(2,'0')}</span>
      </div>

      {/* Play */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hover ? 1 : 0.85, transition: 'opacity 240ms',
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 999,
          background: hover ? HI_GREEN : 'rgba(255,255,255,0.20)',
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 240ms cubic-bezier(.2,.8,.2,1)',
          border: '1px solid rgba(255,255,255,0.25)',
        }}>
          <Icon name="play" size={22} style={{ marginLeft: 3, color: '#fff' }}/>
        </div>
      </div>

      {/* Bottom: title + author + stats */}
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16, color: '#fff' }}>
        <div style={{
          fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 14, lineHeight: 1.3,
          marginBottom: 8, textWrap: 'balance',
        }}>{reel.title}</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.65)',
          marginBottom: 12,
        }}>{reel.author}</div>
        <div style={{ display: 'flex', gap: 14, fontSize: 11, color: 'rgba(255,255,255,0.7)', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="play" size={12}/> {reel.views}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="heart" size={12}/> {reel.likes}
          </span>
        </div>
      </div>
    </article>
  );
}

const navBtnSm = {
  width: 40, height: 40, borderRadius: 999,
  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)',
  color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 200ms',
};

Object.assign(window, { Reels });
