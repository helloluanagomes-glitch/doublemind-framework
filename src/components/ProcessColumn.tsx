import { ProcessCard } from './ProcessCard';

interface Card {
  id: string;
  title: string;
  aiRole: string;
  pdRole: string;
  expectedResults: string;
  aiTools: string;
  promptSuggestion: string;
}

interface ProcessColumnProps {
  title: string;
  cards: Card[];
  onCardClick: (card: Card) => void;
}

export function ProcessColumn({ title, cards, onCardClick }: ProcessColumnProps) {
  return (
    <div 
      className="column-frame flex flex-col"
      style={{ 
        gap: '16px',
        flex: '1 1 0',
        minWidth: '0'
      }}
    >
      {/* Column header - Phase Heading */}
      <h2 
        className="phase-heading"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: 1.05,
          letterSpacing: '0.04em',
          color: '#111111',
          textTransform: 'uppercase',
          textAlign: 'left',
          borderBottom: '2px solid #111111',
          paddingBottom: '12px',
          margin: 0
        }}
      >
        {title}
      </h2>

      {/* Cards */}
      <div className="flex flex-col">
        {cards.map((card) => (
          <ProcessCard 
            key={card.id} 
            {...card} 
            onCardClick={() => onCardClick(card)}
          />
        ))}
      </div>

      {/* Responsive Typography Styles - Text / Phase Heading */}
      <style>{`
        /* Text / Phase Heading - Shared Style */
        .phase-heading {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-style: normal !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.04em !important;
          line-height: 1.05 !important;
          color: #111111 !important;
          text-align: left !important;
          margin: 0 !important;
          padding-bottom: 12px !important;
          
          /* Stroke / Phase Divider - Shared Style */
          border-bottom: 2px solid #111111 !important;
          width: 100% !important;
          
          /* Reset any variable font axis settings */
          font-variation-settings: normal !important;
          font-optical-sizing: auto !important;
        }

        /* Mobile: 24px font-size */
        @media (max-width: 767px) {
          .phase-heading {
            font-size: 24px !important;
          }
        }

        /* Tablet: 32px font-size */
        @media (min-width: 768px) and (max-width: 1023px) {
          .phase-heading {
            font-size: 32px !important;
          }
        }

        /* Desktop: 40px font-size */
        @media (min-width: 1024px) {
          .phase-heading {
            font-size: 40px !important;
          }
        }

        /* Lock the text style - prevent local overrides */
        .phase-heading * {
          font-family: inherit !important;
          font-weight: inherit !important;
          font-style: inherit !important;
          letter-spacing: inherit !important;
          text-transform: inherit !important;
        }
      `}</style>
    </div>
  );
}
