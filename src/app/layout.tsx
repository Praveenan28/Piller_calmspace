import './globals.css';

export const metadata = {
  title: 'CalmSpace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          backgroundColor: '#020617',
          color: '#e2e8f0',
        }}
      >
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            borderBottom: '1px solid rgba(148,163,184,0.35)',
            background:
              'linear-gradient(to right, rgba(15,23,42,0.96), rgba(15,23,42,0.9))',
            backdropFilter: 'blur(16px)',
          }}
        >
 

          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  background:
                    'radial-gradient(circle at 30% 20%, #22d3ee, #4f46e5)',
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 16 }}>Piller</span>
            </div>

            <nav style={{ display: 'flex', gap: 16, fontSize: 13 }}>
              <a
                href="/"
                style={{ color: '#e2e8f0', textDecoration: 'none' }}
              >
                Parent console
              </a>
              <a
                href="/child"
                style={{ color: '#e2e8f0', textDecoration: 'none' }}
              >
                Child space
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
