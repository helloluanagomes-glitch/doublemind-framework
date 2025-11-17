import { X, ExternalLink, Download } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export type InfoPanelType = "about" | "download" | "partner" | null;

interface InfoPanelProps {
  isOpen: boolean;
  onClose: () => void;
  type: InfoPanelType;
}

export function InfoPanel({ isOpen, onClose, type }: InfoPanelProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

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

  const handleDownload = (pdfType: string) => {
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
              DoubleMind is a living framework created by <strong>Luana Gomes</strong>, a Product
              Designer exploring how AI can make design work smarter.
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
                style={{
                  color: "#111",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
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
                style={{
                  color: "#111",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
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
              <div
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: 0,
                  padding: "20px",
                  backgroundColor: "#FFF",
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
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    backgroundColor: "#111",
                    color: "#FFF",
                    border: "none",
                    borderRadius: 0,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
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

              <div
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: 0,
                  padding: "20px",
                  backgroundColor: "#FFF",
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
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    backgroundColor: "#111",
                    color: "#FFF",
                    border: "none",
                    borderRadius: 0,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
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
                marginBottom: 0,
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
     <div
  className="fixed inset-0 bg-black transition-opacity duration-200"
  style={{
    opacity: isOpen ? 0.1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
    zIndex: 999,
  }}
  onClick={onClose}
/>


     <div
  className={`info-panel fixed top-0 right-0 h-full transition-all duration-200 ease-out ${
    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`}
  style={{
    width: "min(520px, 100vw)",
    backgroundColor: "#FDFCFB",
    borderLeft: "1px solid #111",
    boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1000,
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
          className="info-panel-close"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div
          className="info-panel-header"
          style={{
            padding: "24px 24px 0 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "Neue Haas Grotesk Display, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: "16px",
              paddingRight: "56px",
              textTransform: "uppercase",
            }}
          >
            {getPanelTitle()}
          </h2>
        </div>

        <div
  className="info-panel-content overflow-y-auto"
  style={{
    padding: "24px",
    height: "calc(100% - 89px)",
  }}
>
  {renderContent()}

  <button
    type="button"
    onClick={onClose}
    style={{
      marginTop: 24,
      padding: "8px 12px",
      border: "1px solid #111",
      backgroundColor: "#FFF",
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
    }}
  >
    Close panel
  </button>
</div>
