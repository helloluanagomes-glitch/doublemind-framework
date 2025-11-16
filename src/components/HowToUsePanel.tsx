import { X, BookOpen, MousePointer, Tag, Download, Languages } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CloseButton } from './CloseButton';

interface HowToUsePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowToUsePanel({ isOpen, onClose }: HowToUsePanelProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-250 z-40 ${
          isOpen ? 'opacity-10' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`how-to-panel fixed top-0 right-0 h-full transition-all duration-250 ease-in-out z-50 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{
          width: 'min(520px, 100vw)',
          backgroundColor: '#FDFCFB',
          borderLeft: '1px solid #111',
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Panel Header - Fixed */}
        <div 
          className="how-to-header flex items-center justify-between"
          style={{
            padding: '24px 32px',
            borderBottom: '1px solid #E0E0E0',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FDFCFB',
            zIndex: 10
          }}
        >
          <h2 
            className="uppercase tracking-tight flex-1"
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111'
            }}
          >
            {t.howToUseTitle}
          </h2>
          <CloseButton onClick={onClose} />
        </div>

        {/* Panel Content - Scrollable */}
        <div 
          className="how-to-content overflow-y-auto"
          style={{ 
            padding: '32px',
            height: 'calc(100% - 89px)'
          }}
        >
          {/* Hey, you! Section */}
          <div className="content-block" style={{ marginBottom: '32px' }}>
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#111',
                marginBottom: '16px'
              }}
            >
              {t.heyYou}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '0'
              }}
            >
              {t.heyYouContent}
            </p>
          </div>

          <div className="divider" style={{ height: '1px', backgroundColor: '#E6E6E6', marginBottom: '32px' }} />

          {/* What you can do Section */}
          <div className="content-block" style={{ marginBottom: '32px' }}>
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#111',
                marginBottom: '16px'
              }}
            >
              {t.whatYouCanDo}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '16px'
              }}
            >
              {t.whatYouCanDoIntro}
            </p>
            <ul style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#111',
              paddingLeft: '24px',
              marginBottom: '16px',
              listStyleType: 'disc'
            }}>
              {t.whatYouCanDoList.map((item, index) => (
                <li key={index} style={{ marginBottom: index === t.whatYouCanDoList.length - 1 ? '0' : '8px' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '0'
              }}
            >
              {t.whatYouCanDoOutro}
            </p>
          </div>

          <div className="divider" style={{ height: '1px', backgroundColor: '#E6E6E6', marginBottom: '32px' }} />

          {/* Navigation Section */}
          <div className="content-block" style={{ marginBottom: '32px' }}>
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#111',
                marginBottom: '16px'
              }}
            >
              {t.navigation}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '16px'
              }}
            >
              {t.navigationIntro}
            </p>
            <ul style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#111',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              {t.navigationList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div className="divider" style={{ height: '1px', backgroundColor: '#E6E6E6', marginBottom: '32px' }} />

          {/* Cards & Interactions Section */}
          <div className="content-block" style={{ marginBottom: '32px' }}>
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#111',
                marginBottom: '16px'
              }}
            >
              {t.cardsAndInteractions}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '16px'
              }}
            >
              {t.cardsIntro}
            </p>
            <ul style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#111',
              paddingLeft: '20px',
              marginBottom: '16px'
            }}>
              {t.cardsList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '0'
              }}
            >
              {t.cardsOutro}
            </p>
          </div>

          <div className="divider" style={{ height: '1px', backgroundColor: '#E6E6E6', marginBottom: '32px' }} />

          {/* Downloads Section */}
          <div className="content-block" style={{ marginBottom: '32px' }}>
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#111',
                marginBottom: '16px'
              }}
            >
              {t.downloads}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '16px'
              }}
            >
              {t.downloadsIntro}
            </p>
            <ul style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#111',
              paddingLeft: '20px',
              marginBottom: '16px'
            }}>
              {t.downloadsList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '0'
              }}
            >
              {t.downloadsOutro}
            </p>
          </div>

          <div className="divider" style={{ height: '1px', backgroundColor: '#E6E6E6', marginBottom: '32px' }} />

          {/* Tip Section */}
          <div 
            className="content-block" 
            style={{ 
              marginBottom: '32px',
              backgroundColor: 'rgba(255, 68, 196, 0.10)',
              padding: '24px 24px',
              borderLeft: '3px solid #FF44C4'
            }}
          >
            <h3 
              className="uppercase"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#FF44C4',
                marginBottom: '16px'
              }}
            >
              {t.tip}
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#111',
                fontWeight: 400,
                marginBottom: '0'
              }}
            >
              {t.tipContent}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Responsive Styles */}
      <style>{`
        .how-to-close:hover {
          background-color: #000 !important;
          color: #FFF !important;
        }

        @media (max-width: 768px) {
          .how-to-panel {
            width: 100vw !important;
            height: 100vh !important;
            top: 0 !important;
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            border-left: none !important;
            border-radius: 0 !important;
            background-color: #FDFCFB !important;
            transition: transform 250ms ease-in-out, opacity 250ms ease-in-out !important;
          }
          
          .how-to-panel.translate-x-full {
            transform: translateY(100%) !important;
            opacity: 1 !important;
          }
          
          .how-to-panel.translate-x-0 {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }

          .how-to-header {
            padding: 16px !important;
            border-bottom: 1px solid #E6E6E6 !important;
          }

          .how-to-header h2 {
            font-size: 16px !important;
          }

          .close-btn {
            min-width: 40px !important;
            min-height: 40px !important;
          }

          .how-to-content {
            padding: 16px !important;
            height: calc(100vh - 73px) !important;
          }

          .content-block {
            margin-bottom: 24px !important;
          }

          .content-block p,
          .content-block ul {
            font-size: 14px !important;
          }

          .divider {
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </>
  );
}