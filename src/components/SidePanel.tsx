import { X, Copy, Check, ExternalLink, Edit2, Plus, Trash2, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Tool {
  name: string;
  url: string;
}

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: {
    id: string;
    title: string;
    aiRole: string;
    pdRole: string;
    expectedResults: string;
    aiTools: string;
    promptSuggestion: string;
  } | null;
}

export function SidePanel({ isOpen, onClose, cardData }: SidePanelProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isEditingTools, setIsEditingTools] = useState(false);
  const [customTools, setCustomTools] = useState<Tool[]>([]);
  const [newToolName, setNewToolName] = useState('');
  const [newToolUrl, setNewToolUrl] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Load custom tools from local storage when card changes
  useEffect(() => {
    if (cardData?.id) {
      const stored = localStorage.getItem(`custom-tools-${cardData.id}`);
      if (stored) {
        try {
          setCustomTools(JSON.parse(stored));
        } catch (e) {
          setCustomTools([]);
        }
      } else {
        setCustomTools([]);
      }
    }
  }, [cardData?.id]);

  // Save custom tools to local storage
  const saveToLocalStorage = (tools: Tool[]) => {
    if (cardData?.id) {
      localStorage.setItem(`custom-tools-${cardData.id}`, JSON.stringify(tools));
    }
  };

  const handleCopyPrompt = () => {
    if (cardData?.promptSuggestion) {
      navigator.clipboard.writeText(cardData.promptSuggestion);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddTool = () => {
    if (newToolName.trim() && newToolUrl.trim()) {
      const updatedTools = [...customTools, { name: newToolName.trim(), url: newToolUrl.trim() }];
      setCustomTools(updatedTools);
      saveToLocalStorage(updatedTools);
      setNewToolName('');
      setNewToolUrl('');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const handleEditTool = (index: number) => {
    const tool = customTools[index];
    setEditingIndex(index);
    setNewToolName(tool.name);
    setNewToolUrl(tool.url);
  };

  const handleUpdateTool = () => {
    if (editingIndex !== null && newToolName.trim() && newToolUrl.trim()) {
      const updatedTools = customTools.map((tool, index) =>
        index === editingIndex ? { name: newToolName.trim(), url: newToolUrl.trim() } : tool
      );
      setCustomTools(updatedTools);
      saveToLocalStorage(updatedTools);
      setEditingIndex(null);
      setNewToolName('');
      setNewToolUrl('');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const handleDeleteTool = (index: number) => {
    const updatedTools = customTools.filter((_, i) => i !== index);
    setCustomTools(updatedTools);
    saveToLocalStorage(updatedTools);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setNewToolName('');
    setNewToolUrl('');
  };

  const handleToggleEditMode = () => {
    setIsEditingTools(!isEditingTools);
    setEditingIndex(null);
    setNewToolName('');
    setNewToolUrl('');
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (isEditingTools) {
          handleToggleEditMode();
        } else {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, isEditingTools, onClose]);

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

  if (!cardData) return null;

  // Tool URL mapping
  const toolUrls: Record<string, string> = {
    'ChatGPT': 'https://chat.openai.com',
    'GPT-4': 'https://chat.openai.com',
    'Claude': 'https://claude.ai',
    'Gemini': 'https://gemini.google.com',
    'Notion AI': 'https://www.notion.so/product/ai',
    'Perplexity': 'https://www.perplexity.ai',
    'Dovetail AI': 'https://dovetailapp.com',
    'Consensus': 'https://consensus.app',
    'Uizard': 'https://uizard.io',
    'Runway': 'https://runwayml.com',
    'Figma AI': 'https://www.figma.com',
    'Miro AI': 'https://miro.com',
    'Framer AI': 'https://www.framer.com',
    'Gamma AI': 'https://gamma.app',
    'Otter.ai': 'https://otter.ai',
    'Midjourney': 'https://www.midjourney.com',
    'DALL-E': 'https://openai.com/dall-e',
    'v0': 'https://v0.dev',
    'Galileo AI': 'https://www.usegalileo.ai',
    'Whimsical': 'https://whimsical.com',
    'Jasper AI': 'https://www.jasper.ai',
    'Maze AI': 'https://maze.co',
    'axe DevTools': 'https://www.deque.com/axe/devtools',
    'Mixpanel AI': 'https://mixpanel.com',
    'GitHub Copilot': 'https://github.com/features/copilot',
    'Beautiful.ai': 'https://www.beautiful.ai'
  };

  const getToolUrl = (toolName: string): string | null => {
    const trimmedName = toolName.trim();
    return toolUrls[trimmedName] || null;
  };

  return (
    <div>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 z-40 ${
          isOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`side-panel fixed top-0 right-0 h-full transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{
          width: 'min(640px, 45vw)',
          backgroundColor: '#FFFFFF',
          borderLeft: '1px solid #111',
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Panel Header - Fixed */}
        <div
          className="panel-header flex items-center justify-between"
          style={{
            padding: '24px 32px',
            borderBottom: '1px solid #E0E0E0',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 10,
          }}
        >
          <h3
            className="panel-title uppercase tracking-tight flex-1"
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            {cardData.title}
          </h3>

          {/* BOTÃO DE FECHAR */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="close-button flex-shrink-0"
            style={{
              width: 32,
              height: 32,
              borderRadius: 0,
              border: '1px solid #111',
              backgroundColor: '#FFF',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              color: '#111',
            }}
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Confirmation Message */}
        {showConfirmation && (
          <div
            className="confirmation-message"
            style={{
              position: 'sticky',
              top: '89px',
              backgroundColor: '#000',
              color: '#FFF',
              padding: '12px 32px',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
              zIndex: 9,
              animation: 'slideDown 0.3s ease-out',
            }}
          >
            Tools updated for your current session
          </div>
        )}

        {/* Panel Content - Scrollable */}
        <div
          className="panel-content overflow-y-auto"
          style={{
            padding: '32px',
            height: 'calc(100% - 89px)', // Subtract header height
          }}
        >
          {/* Task Title */}
          <h2
            className="task-title"
            style={{
              fontFamily: 'Neue Haas Grotesk Display, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#111',
              marginBottom: '32px',
            }}
          >
            {cardData.title}
          </h2>

          {/* AI Role */}
          {/* (DAQUI PRA BAIXO você pode manter exatamente igual ao que já está:
              AI Role, PD Role, Expected Results, AI Tools, editor, prompt etc.) */}
        </div>

        {/* Sticky Footer with Copy Button */}
        <div
          className="panel-footer"
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E6E6E6',
            padding: '16px 32px',
            zIndex: 10,
          }}
        >
          <button
            onClick={handleCopyPrompt}
            className="copy-prompt-button flex items-center gap-2 px-5 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors w-full justify-center"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '0px',
            }}
          >
            {copied ? (
              <>
                <Check size={16} strokeWidth={2.5} />
                {t.promptCopied}
              </>
            ) : (
              <>
                <Copy size={16} strokeWidth={2.5} />
                {t.copyPrompt}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Responsive Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-button:hover {
          background-color: #000 !important;
          color: #FFF !important;
        }

        .tool-tag-link:hover {
          background-color: #E735A5 !important;
          border-color: #000 !important;
        }

        .tool-tag-link.custom:hover {
          background-color: #E735A5 !important;
        }

        .add-edit-tools-btn:hover {
          color: #FF80B0 !important;
        }

        .tool-action-btn:hover {
          opacity: 0.7 !important;
        }

        @media (max-width: 768px) {
          .side-panel {
            width: 100vw !important;
            height: 100vh !important;
            top: 0 !important;
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            border-left: none !important;
            border-radius: 0 !important;
            background-color: #FFFFFF !important;
            transition: transform 220ms ease-in-out, opacity 220ms ease-in-out !important;
          }
          
          .side-panel.translate-x-full {
            transform: translateY(100%) !important;
            opacity: 1 !important;
          }
          
          .side-panel.translate-x-0 {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }

          .panel-header {
            padding: 16px !important;
            border-bottom: 1px solid #E6E6E6 !important;
            position: sticky !important;
            top: 0 !important;
            background-color: #FFFFFF !important;
            z-index: 20 !important;
          }

          .panel-title {
            font-size: 18px !important;
            font-weight: 700 !important;
            letter-spacing: -0.02em !important;
          }

          .close-button {
            min-width: 40px !important;
            min-height: 40px !important;
          }

          .panel-content {
            padding: 16px !important;
            height: calc(100vh - 73px - 72px) !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }

          .content-section {
            margin-bottom: 24px !important;
          }

          .section-divider {
            margin-bottom: 24px !important;
            background-color: #E6E6E6 !important;
          }

          .section-label {
            font-size: 12px !important;
            letter-spacing: 0.03em !important;
            margin-bottom: 12px !important;
          }

          .section-body,
          .prompt-text {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          .tool-tag,
          .tool-tag-link {
            font-size: 13px !important;
            padding: 6px 12px !important;
          }

          .tools-wrapper {
            gap: 8px !important;
          }

          .panel-footer {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            padding: 16px !important;
            border-top: 1px solid #E6E6E6 !important;
            background-color: #FFFFFF !important;
            box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05) !important;
            z-index: 20 !important;
          }

          .copy-prompt-button {
            padding: 14px 20px !important;
            font-size: 12px !important;
          }

          .confirmation-message {
            padding: 10px 16px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </div>
  );
}
