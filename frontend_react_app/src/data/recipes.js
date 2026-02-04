/**
 * In-memory recipe dataset for the frontend-only recipe explorer.
 * No backend/API calls are used.
 */

export const RECIPE_TAGS = [
  "Quick",
  "Vegetarian",
  "Vegan",
  "Comfort",
  "Dessert",
  "Breakfast",
  "Spicy",
  "Budget",
  "Gluten-Free"
];

const recipes = [
  {
    id: "retro-tomato-toast",
    title: "Retro Tomato Toast",
    description: "A crunchy, zesty toast that tastes like a Saturday morning cartoon.",
    timeMinutes: 10,
    servings: 1,
    tags: ["Quick", "Vegetarian", "Budget", "Breakfast"],
    ingredients: [
      "2 slices bread",
      "1 ripe tomato, sliced",
      "1 tbsp olive oil",
      "Salt + pepper",
      "Optional: basil, chili flakes"
    ],
    instructions:
      "1) Toast the bread until golden.\n2) Rub warm toast lightly with tomato (or layer slices).\n3) Drizzle olive oil, season, and add basil/chili if desired.\n4) Serve immediately while crisp."
  },
  {
    id: "neon-noodle-salad",
    title: "Neon Noodle Salad",
    description: "Cold noodles with a bright, tangy dressing and crunchy veggies.",
    timeMinutes: 20,
    servings: 2,
    tags: ["Quick", "Vegan", "Vegetarian", "Budget"],
    ingredients: [
      "150g rice noodles",
      "1 cup shredded carrots",
      "1 cup sliced cucumber",
      "2 tbsp soy sauce",
      "1 tbsp lime juice",
      "1 tsp sesame oil",
      "1 tsp sugar",
      "Optional: sesame seeds"
    ],
    instructions:
      "1) Cook noodles per package, rinse cold.\n2) Whisk soy, lime, sesame oil, and sugar.\n3) Toss noodles with veggies and dressing.\n4) Top with sesame seeds."
  },
  {
    id: "cosmic-chili",
    title: "Cosmic Bean Chili",
    description: "Big flavor, big bowl. A cozy, spicy classic with pantry staples.",
    timeMinutes: 35,
    servings: 4,
    tags: ["Vegan", "Comfort", "Spicy", "Budget", "Gluten-Free"],
    ingredients: [
      "1 tbsp oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 can black beans, drained",
      "1 can kidney beans, drained",
      "1 can diced tomatoes",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "Salt"
    ],
    instructions:
      "1) Sauté onion in oil 4–5 min; add garlic 30 sec.\n2) Add beans, tomatoes, spices, salt.\n3) Simmer 20 min; adjust seasoning.\n4) Serve with rice, chips, or toasted bread."
  },
  {
    id: "pixel-pancakes",
    title: "Pixel Pancakes",
    description: "Fluffy pancakes with a crisp edge—perfect for stacking high.",
    timeMinutes: 25,
    servings: 2,
    tags: ["Breakfast", "Vegetarian", "Dessert", "Comfort"],
    ingredients: [
      "1 cup flour",
      "1 tbsp sugar",
      "2 tsp baking powder",
      "1 cup milk",
      "1 egg",
      "2 tbsp melted butter (or oil)",
      "Pinch of salt"
    ],
    instructions:
      "1) Mix dry ingredients.\n2) Whisk milk, egg, butter; combine gently with dry.\n3) Cook on medium skillet until bubbles form, flip.\n4) Serve with syrup or fruit."
  },
  {
    id: "tape-deck-tacos",
    title: "Tape Deck Tacos",
    description: "Fast skillet tacos with smoky beans and crunchy toppings.",
    timeMinutes: 18,
    servings: 3,
    tags: ["Quick", "Vegetarian", "Spicy", "Budget"],
    ingredients: [
      "8 small tortillas",
      "1 can pinto beans, drained",
      "1 tsp smoked paprika",
      "1/2 tsp cumin",
      "Salt",
      "Toppings: lettuce, salsa, lime"
    ],
    instructions:
      "1) Warm tortillas.\n2) Mash beans lightly in skillet with spices + salt.\n3) Fill tortillas and add toppings.\n4) Finish with lime."
  },
  {
    id: "glitter-greek-salad",
    title: "Glitter Greek Salad",
    description: "Crisp, salty, bright—no cooking required.",
    timeMinutes: 12,
    servings: 2,
    tags: ["Quick", "Vegetarian", "Gluten-Free", "Budget"],
    ingredients: [
      "2 cups chopped cucumber",
      "1 cup cherry tomatoes",
      "1/4 red onion, thinly sliced",
      "1/3 cup feta",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Oregano, salt, pepper"
    ],
    instructions:
      "1) Combine veggies in a bowl.\n2) Whisk oil + lemon + oregano.\n3) Toss with dressing; add feta.\n4) Chill 5 min if you like it extra crisp."
  },
  {
    id: "cassette-cookie-dough-bites",
    title: "Cassette Cookie Dough Bites",
    description: "No-bake bites for sweet nostalgia (use heat-treated flour).",
    timeMinutes: 15,
    servings: 12,
    tags: ["Dessert", "Vegetarian", "Quick", "Budget"],
    ingredients: [
      "1 cup heat-treated flour",
      "1/2 cup peanut butter (or butter)",
      "1/3 cup brown sugar",
      "2–3 tbsp milk",
      "1/3 cup chocolate chips",
      "Pinch of salt"
    ],
    instructions:
      "1) Mix flour, sugar, salt.\n2) Add peanut butter and milk until dough forms.\n3) Fold in chips.\n4) Roll into bites; chill 10 minutes."
  },
  {
    id: "arcade-avocado-pasta",
    title: "Arcade Avocado Pasta",
    description: "Creamy, green, and surprisingly filling—blended sauce magic.",
    timeMinutes: 20,
    servings: 2,
    tags: ["Vegetarian", "Quick", "Comfort"],
    ingredients: [
      "200g pasta",
      "1 ripe avocado",
      "1 clove garlic",
      "2 tbsp lemon juice",
      "2 tbsp olive oil",
      "Salt + pepper",
      "Optional: parmesan"
    ],
    instructions:
      "1) Cook pasta; reserve 1/4 cup water.\n2) Blend avocado, garlic, lemon, oil, salt.\n3) Toss sauce with pasta; loosen with reserved water.\n4) Top with pepper and parmesan."
  },
  {
    id: "synthwave-smoothie",
    title: "Synthwave Smoothie",
    description: "A bright berry smoothie with tropical vibes.",
    timeMinutes: 6,
    servings: 1,
    tags: ["Quick", "Vegan", "Vegetarian", "Breakfast", "Gluten-Free"],
    ingredients: [
      "1 cup frozen berries",
      "1 banana",
      "1 cup oat milk",
      "1 tsp honey or maple (optional)",
      "Ice (optional)"
    ],
    instructions:
      "1) Add everything to blender.\n2) Blend until smooth.\n3) Taste and adjust sweetness.\n4) Drink immediately."
  }
];

export default recipes;
