import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <label style={{ display: "block" }}>
      <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
        Search recipes
      </span>
      <input
        className="Input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search recipes, ingredients, tags…"
        aria-label="Search recipes"
      />
    </label>
  );
}
