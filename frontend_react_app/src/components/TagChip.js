import React from "react";

/**
 * Toggleable tag chip.
 */
export default function TagChip({ label, pressed, onToggle }) {
  return (
    <button
      type="button"
      className="Chip"
      aria-pressed={pressed}
      onClick={() => onToggle(label)}
    >
      {label}
    </button>
  );
}
