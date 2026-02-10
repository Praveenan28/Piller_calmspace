import './parent.css';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 60%), radial-gradient(circle at bottom, rgba(168,85,247,0.15), #020617)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1000 }}>
        <h1 style={{ fontSize: 40, marginBottom: 10, fontWeight: 600 }}>
          CalmSpace Parent Console
        </h1>

        <p style={{ fontSize: 16, color: '#94a3b8', marginBottom: 40 }}>
          A gentle, adaptive learning environment for autistic children.
        </p>

        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          {[
            {
              title: 'Comfort Overview',
              desc: 'See how your child engages across micro-worlds.',
            },
            {
              title: 'Emotional Trends',
              desc: 'Track comfort clouds and calming activities.',
            },
            {
              title: 'Child Space',
              desc: 'Switch to the child’s calm environment.',
              link: '/child',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="fadeIn glassHover shimmer"
              style={{
                padding: 24,
                borderRadius: 24,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
              }}
            >
              <h2 style={{ fontSize: 18, marginBottom: 8 }}>{card.title}</h2>

              <p style={{ fontSize: 14, color: '#cbd5e1', marginBottom: 16 }}>
                {card.desc}
              </p>

              {card.link && (
                <a
                  href={card.link}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 999,
                    background: '#e2e8f0',
                    color: '#020617',
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Enter child view
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
