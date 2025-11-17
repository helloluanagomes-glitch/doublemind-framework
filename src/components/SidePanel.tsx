import { X, Copy, Check, ExternalLink, Edit2, Plus, Trash2, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

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
  const [newToolName, setNewToolName] = useState("");
  const [newToolUrl, setNewToolUrl] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (cardData?.id) {
      const stored = localStorage.getItem(`custom-tools-${cardData.id}`);
      if (stored) {
        try {
          setCustomTools(JSON.parse(stored));
        } catch {
          setCustomTools([]);
        }
      } else {
        setCustomTools([]);
      }
    }
  }, [cardData?.id]);

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
      setNewToolName("");
      setNewToolUrl("");
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
      setNewToolName("");
      setNewToolUrl("");
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
    setNewToolName("");
    setNewToolUrl("");
  };

  const handleToggleEditMode = () => {
    setIsEditingTools(!isEditingTools);
    setEditingIndex(null);
    setNewToolName("");
    setNewToolUrl("");
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (isEditingTools) {
          handleToggleEditMode();
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, isEditingTools, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!cardData) return null;

  const toolUrls: Record<string, string> = {
    ChatGPT: "https://chat.openai.com",
    "GPT-4": "https://chat.openai.com",
    Claude: "https://claude.ai",
    Gemini: "https://gemini.google.com",
    "Notion AI": "https://www.notion.so/product/ai",
    Perplexity: "https://www.perplexity.ai",
    "Dovetail AI": "https://dovetailapp.com",
    Consensus: "https://consensus.app",
    Uizard: "https://uizard.io",
    Runway: "https://runwayml.com",
    "Figma AI": "https://www.figma.com",
    "Miro AI": "https://miro.com",
    "Framer AI": "https://www.framer.com",
    "Gamma AI": "https://gamma.app",
    "Otter.ai": "https://otter.ai",
    Midjourney: "https://www.midjourney.com",
    "DALL-E": "https://openai.com/dall-e",
    v0: "https://v0.dev",
    "Galileo AI": "https://www.usegalileo.ai",
    Whimsical: "https://whimsical.com",
    "Jasper AI": "https://www.jasper.ai",
    "Maze AI": "https://maze.co",
    "axe DevTools": "https://www.deque.com/axe/devtools",
    "Mixpanel AI": "https://mixpanel.com",
    "GitHub Copilot": "https://github.com/features/copilot",
    "Beautiful.ai": "https://www.beautiful.ai",
  };

  const getToolUrl = (toolName: string): string | null => {
    const trimmedName = toolName.trim();
    return toolUrls[trimmedName] || null;
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 z-40 ${
          isOpen ? "opacity-20" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`side-panel fixed top-0 right-0 h-full transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          width: "min(640px, 45vw)",
          backgroundColor: "#FFFFFF",
          borderLeft: "1px solid #111",
          boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        {/* Botão de fechar fixo */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: 0,
            border: "1px solid #111",
            backgroundColor: "#FFF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.2s ease, color 0.2s ease",
            color: "#111",
            zIndex: 60,
          }}
          className="side-panel-close"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {showConfirmation && (
          <div
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "#000",
              color: "#FFF",
              padding: "12px 32px",
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textAlign: "center",
              zIndex: 50,
            }}
          >
            Tools updated for your current session
          </div>
        )}

        <div
          className="panel-content overflow-y-auto"
          style={{
            padding: "32px",
            height: "100%",
          }}
        >
          <h2
            style={{
              fontFamily: "Neue Haas Grotesk Display, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: "32px",
              paddingRight: "56px",
            }}
          >
            {cardData.title}
          </h2>

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#666",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.aiRole}
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#111",
                fontWeight: 400,
              }}
            >
              {cardData.aiRole}
            </p>
          </div>

          <div style={{ height: 1, backgroundColor: "#E6E6E6", marginBottom: "32px" }} />

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#666",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.pdRole}
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#111",
                fontWeight: 400,
              }}
            >
              {cardData.pdRole}
            </p>
          </div>

          <div style={{ height: 1, backgroundColor: "#E6E6E6", marginBottom: "32px" }} />

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#666",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.expectedResults}
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#111",
                fontWeight: 400,
              }}
            >
              {cardData.expectedResults}
            </p>
          </div>

          <div style={{ height: 1, backgroundColor: "#E6E6E6", marginBottom: "32px" }} />

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#666",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.aiTools}
            </div>

            <div className="tools-wrapper flex flex-wrap gap-3 mb-3">
              {cardData.aiTools.split(";").map((tool, index) => {
                const toolUrl = getToolUrl(tool);
                const trimmedTool = tool.trim();

                if (toolUrl) {
                  return (
                    <a
                      key={index}
                      href={toolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-tag-link group"
                      style={{
                        backgroundColor: "#FFF",
                        padding: "8px 14px",
                        border: "1px solid #E0E0E0",
                        borderRadius: 0,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#111",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <span>{trimmedTool}</span>
                      <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  );
                }

                return (
                  <span
                    key={index}
                    className="tool-tag"
                    style={{
                      backgroundColor: "#FFF",
                      padding: "8px 14px",
                      border: "1px solid #E0E0E0",
                      borderRadius: 0,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#111",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {trimmedTool}
                  </span>
                );
              })}

              {customTools.map((tool, index) => (
                <div
                  key={`custom-${index}`}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-tag-link custom group"
                    style={{
                      backgroundColor: "#E95F9C",
                      padding: "8px 14px",
                      paddingRight: isEditingTools ? "40px" : "14px",
                      border: "2px solid #000",
                      borderRadius: 0,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#000",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                    }}
                  >
                    <span>{tool.name}</span>
                    <ExternalLink size={14} strokeWidth={2.5} />
                  </a>

                  {isEditingTools && (
                    <div
                      style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        gap: 4,
                        zIndex: 1,
                      }}
                    >
                      <button
                        onClick={() => handleEditTool(index)}
                        style={{
                          padding: 4,
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000",
                        }}
                      >
                        <Edit2 size={14} strokeWidth={2.5} />
                      </button>
                      <button
                        onClick={() => handleDeleteTool(index)}
                        style={{
                          padding: 4,
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000",
                        }}
                      >
                        <Trash2 size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleToggleEditMode}
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#000",
                backgroundColor: "transparent",
                border: "none",
                padding: "8px 0",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: isEditingTools ? 16 : 0,
              }}
            >
              {isEditingTools ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
              {isEditingTools ? t.closeEditor : t.addEditTools}
            </button>

            {isEditingTools && (
              <div
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: 16,
                  borderRadius: 0,
                  border: "1px solid #E0E0E0",
                  marginTop: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#666",
                    marginBottom: 12,
                  }}
                >
                  {editingIndex !== null ? "Edit Tool" : "Add New Tool"}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <input
                    type="text"
                    value={newToolName}
                    onChange={(e) => setNewToolName(e.target.value)}
                    placeholder="Tool Name"
                    style={{
                      padding: "10px 14px",
                      border: "1px solid #D0D0D0",
                      borderRadius: 0,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#111",
                      backgroundColor: "#FFF",
                      outline: "none",
                    }}
                  />
                  <input
                    type="url"
                    value={newToolUrl}
                    onChange={(e) => setNewToolUrl(e.target.value)}
                    placeholder="https://example.com"
                    style={{
                      padding: "10px 14px",
                      border: "1px solid #D0D0D0",
                      borderRadius: 0,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#111",
                      backgroundColor: "#FFF",
                      outline: "none",
                    }}
                  />
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={editingIndex !== null ? handleUpdateTool : handleAddTool}
                      disabled={!newToolName.trim() || !newToolUrl.trim()}
                      style={{
                        flex: 1,
                        padding: "10px 16px",
                        backgroundColor: "#E95F9C",
                        color: "#000",
                        border: "2px solid #000",
                        borderRadius: 0,
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        cursor:
                          newToolName.trim() && newToolUrl.trim() ? "pointer" : ("not-allowed" as const),
                        opacity: newToolName.trim() && newToolUrl.trim() ? 1 : 0.5,
                      }}
                    >
                      {editingIndex !== null ? "Update" : "Add Tool"}
                    </button>
                    {editingIndex !== null && (
                      <button
                        onClick={handleCancelEdit}
                        style={{
                          padding: "10px 16px",
                          backgroundColor: "#FFF",
                          color: "#111",
                          border: "1px solid #D0D0D0",
                          borderRadius: 0,
                          fontFamily: "IBM Plex Mono, monospace",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ height: 1, backgroundColor: "#E6E6E6", marginBottom: "32px" }} />

          <div style={{ marginBottom: "80px" }}>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#666",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.promptSuggestion}
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#333",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              {cardData.promptSuggestion}
            </p>
          </div>

          <div
            className="panel-footer"
            style={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid #E6E6E6",
              padding: "16px 0",
            }}
          >
            <button
              onClick={handleCopyPrompt}
              className="copy-prompt-button flex items-center gap-2 px-5 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors w-full justify-center"
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 0,
                width: "100%",
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
      </div>
    </>
  );
}
