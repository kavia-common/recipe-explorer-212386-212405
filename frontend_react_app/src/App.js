import React, { useMemo, useState } from "react";
import "./App.css";

import recipesData, { RECIPE_TAGS } from "./data/recipes";
import { filterRecipes } from "./utils/recipeUtils";

import TagChip from "./components/TagChip";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import SearchBar from "./components/SearchBar";

// PUBLIC_INTERFACE
function App() {
  /** Root entry for the frontend-only Recipe Explorer app. */
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeRecipe, setActiveRecipe] = useState(null);

  const filtered = useMemo(() => {
    return filterRecipes(recipesData, { query, selectedTags });
  }, [query, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      return [...prev, tag];
    });
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
  };

  const tagline = "Browse, search, and open recipes — all in a retro UI.";
  const selectedCount = selectedTags.length;

  return (
    <div className="App">
      <a className="SkipLink" href="#main">
        Skip to content
      </a>

      <header className="Header">
        <div className="HeaderInner">
          <div className="Brand" aria-label="Recipe Explorer brand">
            <div className="BrandMark" aria-hidden="true" />
            <div className="BrandTitle">
              <strong>Recipe Explorer</strong>
              <span>{tagline}</span>
            </div>
          </div>

          <SearchBar value={query} onChange={setQuery} />

          <div className="HeaderActions">
            <button type="button" className="Btn" onClick={clearFilters}>
              Reset
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="Main">
        <div className="Layout">
          <aside className="Panel" aria-label="Filters">
            <div className="PanelHeader">
              <h2>Filters</h2>
              <span className="Badge" aria-label="Selected filters count">
                {selectedCount} selected
              </span>
            </div>
            <div className="PanelBody">
              <div className="ChipRow" role="group" aria-label="Tag filters">
                {RECIPE_TAGS.map((t) => (
                  <TagChip
                    key={t}
                    label={t}
                    pressed={selectedTags.includes(t)}
                    onToggle={toggleTag}
                  />
                ))}
              </div>

              <p className="MetaText">
                Tip: search matches titles, ingredients, and tags. Combine search + tags for laser
                focus.
              </p>
            </div>
          </aside>

          <section aria-label="Recipe results">
            <div className="ResultsHeader">
              <h1>Recipe Deck</h1>
              <span className="Badge" aria-label="Results count">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="EmptyState" role="status" aria-live="polite">
                <strong>No matches.</strong> Try clearing filters or searching for “Quick” or
                “Breakfast”.
              </div>
            ) : (
              <div className="Grid">
                {filtered.map((r) => (
                  <RecipeCard key={r.id} recipe={r} onOpen={setActiveRecipe} />
                ))}
              </div>
            )}
          </section>
        </div>

        <RecipeModal recipe={activeRecipe} onClose={() => setActiveRecipe(null)} />
      </main>

      <footer className="Footer">
        <div className="FooterInner">
          <span>
            Frontend-only demo • Data is stored locally in <code>src/data/recipes.js</code>
          </span>
          <span>
            Built with React • Retro theme inspired by dashed borders + bold shadows
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
