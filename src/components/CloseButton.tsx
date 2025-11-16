import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Close panel"
      // classes usadas pelo CSS e pelos efeitos de foco
      className="info-panel-close close-button flex-shrink-0"
      style={{
        width: 32,
        height: 32,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999,
        border: "1px solid #111",
        backgroundColor: "transparent",
        color: "#111",
        cursor: "pointer",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      <X size={18} strokeWidth={2} />
    </button>
  );
}
