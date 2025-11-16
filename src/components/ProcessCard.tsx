import { Plus } from 'lucide-react';

interface ProcessCardProps {
  id: string;
  title: string;
  aiRole: string;
  pdRole: string;
  expectedResults: string;
  aiTools: string;
  promptSuggestion: string;
  onCardClick: () => void;
}

export function ProcessCard({ 
  title, 
  onCardClick
}: ProcessCardProps) {
  return (
    <div 
      className="process-card mb-3 transition-all duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
      style={{
        border: '2px solid #000000',
        backgroundColor: '#E95F9C',
        cursor: 'pointer',
        boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 0.08)',
        borderRadius: '0px',
        minHeight: '64px'
      }}
      onClick={onCardClick}
    >
      <div 
        className="card-inner flex items-center justify-between gap-2"
        style={{
          padding: '16px 20px',
        }}
      >
        <h3 
          className="card-title uppercase tracking-tight flex-1"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 450,
            fontSize: '16px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#000000'
          }}
        >
          {title}
        </h3>
        <div
          className="card-icon flex-shrink-0"
          style={{ 
            color: '#000000',
            minWidth: '24px',
            minHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Plus size={20} strokeWidth={2.5} />
        </div>
      </div>

      {/* Responsive Card Styles - Corner Radius 0 enforced */}
      <style>{`
        /* Ensure sharp rectangular corners - no rounding */
        .process-card {
          border-radius: 0px !important;
        }

        .process-card * {
          border-radius: 0px !important;
        }

        @media (max-width: 767px) {
          .process-card {
            width: 100% !important;
            min-height: 64px !important;
            border-radius: 0px !important;
          }

          .card-title {
            font-size: 16px !important;
            font-weight: 450 !important;
            text-transform: uppercase !important;
            letter-spacing: -0.02em !important;
          }

          .card-inner {
            padding: 16px 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .process-card {
            border-radius: 0px !important;
          }
          
          .card-title {
            font-size: 16px !important;
            font-weight: 450 !important;
            text-transform: uppercase !important;
            letter-spacing: -0.02em !important;
          }
        }

        @media (min-width: 1024px) {
          .process-card {
            border-radius: 0px !important;
          }
          
          .card-title {
            font-size: 16px !important;
            font-weight: 450 !important;
            text-transform: uppercase !important;
            letter-spacing: -0.02em !important;
          }
        }
      `}</style>
    </div>
  );
}