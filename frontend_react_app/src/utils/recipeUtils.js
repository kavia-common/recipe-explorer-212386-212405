/**
 * Utilities for filtering and searching recipes.
 */

// PUBLIC_INTERFACE
export function normalizeQuery(value) {
  /** Normalize user query input for matching. */
  return (value || "").trim().toLowerCase();
}

// PUBLIC_INTERFACE
export function recipeMatchesQuery(recipe, query) {
  /** Return true if the recipe matches a text query (title, description, ingredients, tags). */
  const q = normalizeQuery(query);
  if (!q) return true;

  const haystack = [
    recipe.title,
    recipe.description,
    ...(recipe.ingredients || []),
    ...(recipe.tags || [])
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

// PUBLIC_INTERFACE
export function recipeMatchesTags(recipe, selectedTags) {
  /** Return true if recipe contains all selected tags. */
  if (!selectedTags || selectedTags.length === 0) return true;
  const tagSet = new Set(recipe.tags || []);
  return selectedTags.every((t) => tagSet.has(t));
}

// PUBLIC_INTERFACE
export function filterRecipes(recipes, { query, selectedTags }) {
  /** Filter recipes list based on query and selected tags. */
  return (recipes || []).filter(
    (r) => recipeMatchesQuery(r, query) && recipeMatchesTags(r, selectedTags)
  );
}
