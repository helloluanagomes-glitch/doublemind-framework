interface FooterProps {
  onAboutClick: () => void;
  onHowToUseClick: () => void;
  onDownloadClick: () => void;
  onPartnerClick: () => void;
}

export function Footer({ onAboutClick, onHowToUseClick, onDownloadClick, onPartnerClick }: FooterProps) {
  return (
    <>
      {/* Divider line above footer */}
      <div 
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      
      <footer 
        className="footer-section w-full"
        style={{
          backgroundColor: '#E95F9C',
          boxShadow: 'none'
        }}
      >
        <div 
          className="footer-content"
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '48px 32px 32px 32px'
          }}
        >
          {/* Main Navigation Links */}
          <nav 
            className="footer-nav"
            style={{
              display: 'flex',
              gap: '32px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={onAboutClick}
              className="footer-link-btn"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 450,
                color: '#FFFFFF',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease'
              }}
            >
              ABOUT
            </button>

            <button
              onClick={onHowToUseClick}
              className="footer-link-btn"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 450,
                color: '#FFFFFF',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease'
              }}
            >
              HOW TO USE
            </button>

            <button
              onClick={onDownloadClick}
              className="footer-link-btn"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 450,
                color: '#FFFFFF',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease'
              }}
            >
              DOWNLOAD
            </button>

            <button
              onClick={onPartnerClick}
              className="footer-link-btn"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 450,
                color: '#FFFFFF',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease'
              }}
            >
              PARTNER WITH US
            </button>
          </nav>

          {/* Divider */}
          <div 
            className="footer-divider"
            style={{
              height: '1px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              marginBottom: '24px'
            }}
          />

          {/* Bottom Line */}
          <div 
            className="footer-bottom"
            style={{
              paddingTop: 0
            }}
          >
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#FFFFFF',
                fontWeight: 450,
                margin: 0,
                opacity: 0.75
              }}
            >
              Developed by Luana Gomes · © 2025 DoubleMind
            </p>
          </div>
        </div>

        {/* Footer Styles */}
        <style>{`
          .footer-link-btn:hover {
            opacity: 0.7 !important;
          }

          @media (max-width: 768px) {
            .footer-content {
              padding: 48px 16px 32px 16px !important;
            }

            .footer-nav {
              flex-direction: column !important;
              gap: 16px !important;
              align-items: center !important;
              text-align: center !important;
              margin-bottom: 32px !important;
            }

            .footer-link-btn {
              font-size: 14px !important;
            }

            .footer-bottom {
              text-align: center !important;
            }

            .footer-bottom p {
              font-size: 12px !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}