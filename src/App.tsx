import { useState } from 'react';
import { ProcessColumn } from './components/ProcessColumn';
import { SidePanel } from './components/SidePanel';
import { HowToUsePanel } from './components/HowToUsePanel';
import { InfoPanel, InfoPanelType } from './components/InfoPanel';
import { Footer } from './components/Footer';
import { TopNav } from './components/TopNav';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { cardTranslations } from './card-translations';
import { translations } from './translations';
import './styles/globals.css';

interface Card {
  id: string;
  title: string;
  aiRole: string;
  pdRole: string;
  expectedResults: string;
  aiTools: string;
  promptSuggestion: string;
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { language } = useLanguage();
  const [bgColor, setBgColor] = useState<'#FAF9F6' | '#FCF400'>('#FAF9F6');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false);
  const [infoPanelType, setInfoPanelType] = useState<InfoPanelType>(null);

  const handleCardClick = (card: Card) => {
    // Close all other panels
    if (isHowToUseOpen) setIsHowToUseOpen(false);
    if (infoPanelType) setInfoPanelType(null);
    
    setSelectedCard(card);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedCard(null), 200); // Wait for animation to complete
  };

  const handleHowToUseToggle = () => {
    // Close all other panels
    if (isPanelOpen) {
      setIsPanelOpen(false);
      setTimeout(() => setSelectedCard(null), 200);
    }
    if (infoPanelType) setInfoPanelType(null);
    
    setIsHowToUseOpen(!isHowToUseOpen);
  };

  const handleCloseHowToUse = () => {
    setIsHowToUseOpen(false);
  };

  const handleInfoPanelOpen = (type: InfoPanelType) => {
    // Close all other panels
    if (isPanelOpen) {
      setIsPanelOpen(false);
      setTimeout(() => setSelectedCard(null), 200);
    }
    if (isHowToUseOpen) setIsHowToUseOpen(false);
    
    setInfoPanelType(type);
  };

  const handleCloseInfoPanel = () => {
    setInfoPanelType(null);
  };

  const scrollToCanvas = () => {
    const canvasSection = document.getElementById('canvas-section');
    if (canvasSection) {
      canvasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper function to get translated card data
  const getTranslatedCard = (id: string): Card => {
    const trans = cardTranslations[language][id];
    return {
      id,
      title: trans.title,
      aiRole: trans.aiRole,
      pdRole: trans.pdRole,
      expectedResults: trans.expectedResults,
      aiTools: trans.aiTools,
      promptSuggestion: trans.promptSuggestion
    };
  };

  const processData = {
    discover: {
      title: 'DISCOVER',
      cards: [
        getTranslatedCard('d1'),
        getTranslatedCard('d2'),
        getTranslatedCard('d3'),
        getTranslatedCard('d4'),
        getTranslatedCard('d5')
      ]
    },
    define: {
      title: 'DEFINE',
      cards: [
        getTranslatedCard('df1'),
        getTranslatedCard('df2'),
        getTranslatedCard('df3'),
        getTranslatedCard('df4')
      ]
    },
    develop: {
      title: 'DEVELOP',
      cards: [
        getTranslatedCard('dv1'),
        getTranslatedCard('dv2'),
        getTranslatedCard('dv3'),
        getTranslatedCard('dv4'),
        getTranslatedCard('dv5')
      ]
    },
    deliver: {
      title: 'DELIVER',
      cards: [
        getTranslatedCard('dl1'),
        getTranslatedCard('dl2'),
        getTranslatedCard('dl3'),
        getTranslatedCard('dl4'),
        getTranslatedCard('dl5')
      ]
    }
  };

  return (
    <div 
      className="app-container"
      style={{ 
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      {/* Top Navigation */}
      <TopNav onHowToUseClick={handleHowToUseToggle} />

      {/* Hero Section */}
      <section
        className="hero-section w-full flex items-center justify-center"
        style={{ 
          backgroundColor: '#FAF9F6',
          padding: '48px 24px',
          minHeight: '100vh'
        }}
      >
        <div 
          className="hero-content text-center"
          style={{ 
            maxWidth: '100%',
            width: '100%'
          }}
        >
          {/* Main Title */}
          <h1 
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 8vw, 72px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#111',
              marginBottom: '8px'
            }}
          >
            {translations[language].heroTitle}
          </h1>

          {/* Subtitle */}
          <h2 
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(28px, 5vw, 48px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111',
              marginBottom: '24px'
            }}
          >
            {translations[language].heroSubtitle}
          </h2>

          {/* Supporting Text */}
          <p 
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.5vw, 18px)',
              lineHeight: 1.5,
              color: '#111',
              maxWidth: '80%',
              width: '100%',
              margin: '0 auto 32px',
              opacity: 0.85
            }}
          >
            {translations[language].heroDescription}
          </p>

          {/* CTAs */}
          <div 
            className="cta-group"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              width: '100%',
              maxWidth: '390px',
              margin: '0 auto'
            }}
          >
            {/* Primary Button */}
            <button
              onClick={scrollToCanvas}
              className="primary-cta"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 450,
                width: 'auto',
                height: 'auto',
                padding: '16px 24px',
                backgroundColor: '#E95F9C',
                color: '#000000',
                border: '2px solid #000000',
                borderRadius: '0px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 150ms ease-in-out',
                whiteSpace: 'nowrap'
              }}
            >
              {translations[language].exploreCanvas}
            </button>

            {/* Secondary Link */}
            <button
              onClick={handleHowToUseToggle}
              className="secondary-cta"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                fontWeight: 600,
                color: '#111',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease'
              }}
            >
              {translations[language].learnHow}
            </button>
          </div>
        </div>
      </section>

      {/* Canvas Section */}
      <section
        id="canvas-section"
        className="canvas-section w-full flex items-center justify-center transition-colors duration-500"
        style={{ 
          backgroundColor: bgColor,
          padding: '48px 24px',
          minHeight: '100vh'
        }}
      >
        <div className="relative w-full max-w-[1600px]">
          {/* Canvas Header - Parent Container for Title + Subtitle */}
          <div 
            className="canvas-header"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '16px',
              width: '100%',
              backgroundColor: 'transparent'
            }}
          >
            {/* Canvas Title */}
            <h1 
              className="canvas-title"
              style={{ 
                fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 96px)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                color: '#111111',
                textAlign: 'left',
                width: '100%'
              }}
              aria-label="TITLE — PRODUCT DESIGN AI CANVAS"
            >
              {translations[language].canvasTitle}
            </h1>
          </div>

          {/* Paper block */}
          <div 
            className="paper-block relative"
            style={{ 
              backgroundColor: '#F9F8F4',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              padding: '24px',
              borderRadius: '0px'
            }}
          >
            {/* Subtitle */}
            <p 
              className="mb-12 uppercase subtitle-text"
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#777777',
                lineHeight: 1.5
              }}
              aria-label="SUBTITLE — FRAMEWORK STATEMENT"
            >
              {translations[language].canvasSubtitle}
            </p>

            {/* Main Canvas Frame */}
            <div className="main-canvas-frame" style={{ paddingBottom: '20px' }}>
              <div className="canvas-columns-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                <ProcessColumn 
                  title={processData.discover.title} 
                  cards={processData.discover.cards}
                  onCardClick={handleCardClick}
                />
                <ProcessColumn 
                  title={processData.define.title} 
                  cards={processData.define.cards}
                  onCardClick={handleCardClick}
                />
                <ProcessColumn 
                  title={processData.develop.title} 
                  cards={processData.develop.cards}
                  onCardClick={handleCardClick}
                />
                <ProcessColumn 
                  title={processData.deliver.title} 
                  cards={processData.deliver.cards}
                  onCardClick={handleCardClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Panel */}
      <SidePanel 
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        cardData={selectedCard}
      />

      {/* How to Use Panel */}
      <HowToUsePanel 
        isOpen={isHowToUseOpen}
        onClose={handleCloseHowToUse}
      />

      {/* Info Panel */}
      <InfoPanel 
        isOpen={infoPanelType !== null}
        type={infoPanelType}
        onClose={handleCloseInfoPanel}
      />

      {/* Footer */}
      <Footer 
        onAboutClick={() => handleInfoPanelOpen('about')}
        onHowToUseClick={handleHowToUseToggle}
        onDownloadClick={() => handleInfoPanelOpen('download')}
        onPartnerClick={() => handleInfoPanelOpen('partner')}
      />

      {/* Mobile Responsive Styles */}
      <style>{`
        /* Prevent horizontal scroll globally */
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }

        /* Ensure sharp rectangular corners on all canvas elements - No rounded corners */
        .process-card,
        .process-card *,
        .paper-block,
        .primary-cta,
        .phase-heading {
          border-radius: 0px !important;
        }

        /* CTA Button Interaction States */
        .primary-cta:hover {
          background-color: #E735A5 !important;
          transform: scale(1.02) !important;
          text-decoration: none !important;
        }

        .primary-cta:active,
        .primary-cta:focus:active {
          background-color: #CC2C8F !important;
          transform: scale(0.98) !important;
          transition: all 100ms ease-in-out !important;
        }

        /* Mobile touch feedback */
        @media (max-width: 767px) {
          .primary-cta:active {
            background-color: #CC2C8F !important;
            transform: scale(0.98) !important;
          }
        }

        .secondary-cta:hover {
          color: #FF80B0 !important;
        }

        /* Extra small mobile: up to 480px - Canvas Title Left Aligned */
        @media (max-width: 480px) {
          /* Canvas Header - Parent Container */
          .canvas-header {
            padding: 32px 24px 24px 24px !important;
          }

          /* Canvas Title - Left Aligned on Mobile */
          .canvas-title {
            text-align: left !important;
            max-width: 90% !important;
            width: 100% !important;
            margin-bottom: 0 !important;
          }

          /* Subtitle stays left-aligned to match */
          .subtitle-text {
            text-align: left !important;
          }
        }

        /* Mobile: up to 767px - Stacked vertical layout */
        @media (max-width: 767px) {
          .hero-section {
            padding: 48px 24px !important;
            min-height: 90vh !important;
          }

          .canvas-section {
            padding: 48px 24px !important;
          }

          .canvas-header {
            padding: 32px 24px 24px 24px !important;
            margin-bottom: 32px !important;
          }

          .canvas-title {
            text-align: left !important;
            margin-bottom: 0 !important;
          }

          .paper-block {
            padding: 24px !important;
            border-radius: 0px !important;
          }

          .subtitle-text {
            font-size: 13px !important;
            font-weight: 400 !important;
            letter-spacing: 0.08em !important;
            line-height: 1.5 !important;
            text-transform: uppercase !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            text-align: left !important;
          }

          .canvas-columns-wrapper {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
          }

          .column-frame {
            width: 100% !important;
          }
        }

        /* Tablet: 768px - 1023px - 2-column layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-section {
            padding: 64px 40px !important;
          }

          .canvas-section {
            padding: 64px 40px !important;
          }

          .canvas-header {
            padding: 48px 40px 32px 40px !important;
            margin-bottom: 32px !important;
          }

          .canvas-title {
            text-align: left !important;
            margin-bottom: 0 !important;
          }

          .paper-block {
            padding: 32px !important;
            border-radius: 0px !important;
          }

          .subtitle-text {
            font-size: 13px !important;
            font-weight: 400 !important;
            letter-spacing: 0.08em !important;
            line-height: 1.5 !important;
            text-transform: uppercase !important;
            text-align: left !important;
          }

          .canvas-columns-wrapper {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }

          .cta-group {
            flex-direction: row !important;
            max-width: 600px !important;
            gap: 16px !important;
          }

          .primary-cta,
          .secondary-cta {
            width: auto !important;
            flex: 1;
          }
        }

        /* Desktop: 1024px+ - Original 4-column grid */
        @media (min-width: 1024px) {
          .hero-section {
            padding: 80px 48px !important;
          }

          .canvas-section {
            padding: 80px 48px !important;
          }

          .canvas-header {
            padding: 48px 64px 32px 64px !important;
            margin-bottom: 0 !important;
          }

          .canvas-title {
            text-align: left !important;
            margin-bottom: 0 !important;
          }

          .paper-block {
            padding: 48px !important;
            border-radius: 0px !important;
          }

          .subtitle-text {
            font-size: 13px !important;
            font-weight: 400 !important;
            letter-spacing: 0.08em !important;
            line-height: 1.5 !important;
            text-transform: uppercase !important;
            text-align: left !important;
          }

          .canvas-columns-wrapper {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 24px !important;
          }

          .cta-group {
            flex-direction: row !important;
            max-width: 600px !important;
            gap: 24px !important;
          }

          .primary-cta {
            width: auto !important;
            padding: 16px 48px !important;
          }

          .secondary-cta {
            width: auto !important;
          }
        }
      `}</style>
    </div>
  );
}