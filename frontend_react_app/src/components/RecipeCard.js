import React from "react";

export default function RecipeCard({ recipe, onOpen }) {
  return (
    <article className="Card">
      <div className="CardTop">
        <div>
          <h3 className="CardTitle">{recipe.title}</h3>
          <p className="CardSubtitle">
            {recipe.timeMinutes} min • Serves {recipe.servings}
          </p>
        </div>
        <span className="Badge" aria-label="Recipe ID">
          #{recipe.id.replaceAll("-", " ")}
        </span>
      </div>

      <div className="Tags" aria-label="Recipe tags">
        {recipe.tags.map((t) => (
          <span key={t} className="Tag">
            {t}
          </span>
        ))}
      </div>

      <div className="CardActions">
        <button type="button" className="Btn BtnPrimary" onClick={() => onOpen(recipe)}>
          View recipe
        </button>
      </div>
    </article>
  );
}
