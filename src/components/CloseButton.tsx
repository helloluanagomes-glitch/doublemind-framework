import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close panel"
      className="close-button info-panel-close flex-shrink-0"
      style={{
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
      }}
    >
      <X size={18} strokeWidth={2} />
    </button>
  );
}
