import React, { useEffect, useRef } from "react";

export default function RecipeModal({ recipe, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // Focus the close button when modal opens for accessibility.
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!recipe) return null;

  const onOverlayMouseDown = (e) => {
    // Close only when clicking the overlay (not inside modal content).
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="ModalOverlay" role="dialog" aria-modal="true" onMouseDown={onOverlayMouseDown}>
      <div className="Modal">
        <div className="ModalHeader">
          <div>
            <h3>{recipe.title}</h3>
            <p className="CardSubtitle" style={{ margin: "6px 0 0" }}>
              {recipe.timeMinutes} min • Serves {recipe.servings}
            </p>
          </div>
          <button ref={closeBtnRef} type="button" className="Btn BtnDanger" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="ModalBody">
          <p className="MetaText" style={{ marginTop: 0 }}>
            {recipe.description}
          </p>

          <div className="Tags" aria-label="Recipe tags">
            {recipe.tags.map((t) => (
              <span key={t} className="Tag">
                {t}
              </span>
            ))}
          </div>

          <h4 className="SectionTitle">Ingredients</h4>
          <ul className="List">
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h4 className="SectionTitle">Instructions</h4>
          <div className="Instructions">{recipe.instructions}</div>
        </div>
      </div>
    </div>
  );
}
