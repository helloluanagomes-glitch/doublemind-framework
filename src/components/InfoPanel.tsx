import { X, ExternalLink, Download } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export type InfoPanelType =
  | "about"
  | "download"
  | "partner"
  | null;

interface InfoPanelProps {
  isOpen: boolean;
  onClose: () => void;
  type: InfoPanelType;
}

export function InfoPanel({
  isOpen,
  onClose,
  type,
}: InfoPanelProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when panel is open
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

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const closeButton = document.querySelector(
        ".info-panel-close",
      ) as HTMLElement;
      if (closeButton) {
        setTimeout(() => closeButton.focus(), 100);
      }
    }
  }, [isOpen]);

  const handleDownload = (pdfType: string) => {
    // Placeholder for download functionality
    const downloadPath = `/downloads/doublemind-${pdfType}.pdf`;
    console.log(`Downloading ${pdfType} PDF: ${downloadPath}`);
    alert(`Download feature for ${pdfType} PDF coming soon!`);
  };

  const getPanelTitle = () => {
    switch (type) {
      case "about":
        return t.about;
      case "download":
        return t.download;
      case "partner":
        return t.partnerWithUs;
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "about":
        return (
          <div>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#111",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              DoubleMind is a living framework created by{" "}
              <strong>Luana Gomes</strong>, a Product Designer
              exploring how AI can make design work smarter.
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#111",
                fontWeight: 400,
                marginBottom: "32px",
              }}
            >
              Visit her{" "}
              <a
                href="https://luanagomes-portfolio.squarespace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-panel-link"
                style={{
                  color: "#111",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                portfolio
                <ExternalLink size={14} strokeWidth={2} />
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/luanacgomes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Luana Gomes on LinkedIn"
                className="info-panel-link"
                style={{
                  color: "#111",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                LinkedIn
                <ExternalLink size={14} strokeWidth={2} />
              </a>{" "}
              to learn more about her work.
            </p>

            {/* Footer Copyright */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "1px solid #E6E6E6",
                marginTop: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "13px",
                  color: "#666",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                Developed by Luana Gomes · © 2025 DoubleMind
              </p>
            </div>
          </div>
        );

      case "download":
        return (
          <div>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 400,
                marginBottom: "32px",
              }}
            >
              {t.downloadPanelIntro}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Empty PDF Option */}
              <div
                className="download-option"
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "0px",
                  padding: "20px",
                  backgroundColor: "#FFF",
                  transition: "all 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: "8px",
                  }}
                >
                  {t.emptyPdfLabel}
                </h3>
                <p
                  style={{
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "#666",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  {t.emptyPdfDescription}
                </p>
                <button
                  onClick={() => handleDownload("empty")}
                  className="download-btn"
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    backgroundColor: "#111",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "0px",
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Download size={16} strokeWidth={2} />
                  <span>{t.emptyPdfLabel}</span>
                </button>
              </div>

              {/* Complete PDF Option */}
              <div
                className="download-option"
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "0px",
                  padding: "20px",
                  backgroundColor: "#FFF",
                  transition: "all 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: "8px",
                  }}
                >
                  {t.completePdfLabel}
                </h3>
                <p
                  style={{
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "#666",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  {t.completePdfDescription}
                </p>
                <button
                  onClick={() => handleDownload("complete")}
                  className="download-btn"
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    backgroundColor: "#111",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "0px",
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Download size={16} strokeWidth={2} />
                  <span>{t.completePdfLabel}</span>
                </button>
              </div>
            </div>
          </div>
        );

      case "partner":
        return (
          <div>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              {t.partnerTitle}
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              {t.partnerParagraph1}
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 400,
                marginBottom: "8px",
              }}
            >
              {t.partnerParagraph2}
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              <a
                href={`mailto:${t.partnerEmail}`}
                style={{
                  color: "#111",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {t.partnerEmail}
              </a>
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#111",
                fontWeight: 400,
                marginBottom: "0",
              }}
            >
              {t.partnerParagraph3}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!type) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 z-40 ${
          isOpen
            ? "opacity-10"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`info-panel fixed top-0 right-0 h-full transition-all duration-200 ease-out z-50 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{
          width: "min(520px, 100vw)",
          backgroundColor: "#FDFCFB",
          borderLeft: "1px solid #111",
          boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Panel Header - Fixed */}
        <div
          className="info-panel-header"
          style={{
            padding: "24px",
            borderBottom: "1px solid #E0E0E0",
            position: "sticky",
            top: 0,
            backgroundColor: "#FDFCFB",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <h2
              className="uppercase tracking-tight flex-1"
              style={{
                fontFamily:
                  "Neue Haas Grotesk Display, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#111",
              }}
            >
              {getPanelTitle()}
            </h2>

            {/* CLOSE BUTTON BEM EXPLÍCITO */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close panel"
              style={{
                width: 40,
                height: 40,
                borderRadius: 0,
                border: "1px solid #111",
                backgroundColor: "#FFFFFF",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#111",
              }}
            >
              <X size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>


        {/* Panel Content - Scrollable */}
        <div
          className="info-panel-content overflow-y-auto"
          style={{
            padding: "24px",
            height: "calc(100% - 89px)",
          }}
        >
          {renderContent()}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .info-panel-close:hover {
          background-color: #000 !important;
          color: #FFF !important;
        }

        .info-panel-link:hover {
          color: #FF5FBF !important;
        }

        .download-btn:hover,
        .partner-submit-btn:hover {
          background-color: #FF5FBF !important;
        }

        @media (max-width: 768px) {
          .info-panel {
            width: 100vw !important;
            height: 100vh !important;
            border-left: none !important;
            transition: transform 240ms ease-out, opacity 240ms ease-out !important;
          }
          
          .info-panel.translate-x-full {
            transform: translateY(100%) !important;
          }
          
          .info-panel.translate-x-0 {
            transform: translateY(0) !important;
          }

          .info-panel-header {
            padding: 16px !important;
          }

          .info-panel-header h2 {
            font-size: 16px !important;
          }

          .info-panel-content {
            padding: 16px !important;
            height: calc(100vh - 73px) !important;
          }

          .download-btn,
          .partner-submit-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}
