import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TopNavProps {
  onHowToUseClick: () => void;
}

export function TopNav({ onHowToUseClick }: TopNavProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = (newLang: 'en' | 'pt-BR') => {
    if (newLang === language) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(newLang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 50);
  };

  return (
    <>
      <nav
        className="top-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: 'rgba(250, 249, 246, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          zIndex: 100,
          transition: 'opacity 300ms ease'
        }}
      >
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: isTransitioning ? 0.5 : 1,
            transition: 'opacity 300ms ease'
          }}
        >
          {/* Left: Logo/Title */}
          <div
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '-0.01em',
              color: '#111'
            }}
          >
            DoubleMind
          </div>

          {/* Right: How to Use + Language Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            {/* How to Use Button */}
            <button
              onClick={onHowToUseClick}
              className="nav-how-to-use-btn"
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#111',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '8px 0',
                transition: 'color 0.2s ease'
              }}
              aria-label={t.howToUse}
            >
              {t.howToUse}
            </button>

            {/* Language Toggle */}
            <div
              className="language-toggle"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              role="group"
              aria-label="Switch language"
            >
              <button
                onClick={() => handleLanguageChange('en')}
                className="lang-btn"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: language === 'en' ? '#FF44C4' : '#000',
                  opacity: language === 'en' ? 1 : 0.7,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>

              <span
                style={{
                  color: '#000',
                  opacity: 0.3,
                  fontWeight: 300
                }}
              >
                |
              </span>

              <button
                onClick={() => handleLanguageChange('pt-BR')}
                className="lang-btn"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: language === 'pt-BR' ? '#FF44C4' : '#000',
                  opacity: language === 'pt-BR' ? 1 : 0.7,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Mudar para Português"
                aria-pressed={language === 'pt-BR'}
              >
                PT-BR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div style={{ height: '66px' }} />

      {/* Styles */}
      <style>{`
        .nav-how-to-use-btn:hover {
          color: #FF44C4 !important;
        }

        .lang-btn:hover {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .top-nav > div {
            padding: 12px 16px !important;
          }

          .top-nav > div > div:first-child {
            font-size: 16px !important;
          }

          .top-nav > div > div:last-child {
            gap: 16px !important;
          }

          .nav-how-to-use-btn {
            font-size: 12px !important;
          }

          .lang-btn {
            font-size: 12px !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }
        }
      `}</style>
    </>
  );
}
