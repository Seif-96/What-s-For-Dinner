// left-side
var recipeRating = document.getElementById("recipeRating");
var recipeReviews = document.getElementById("recipeReviews");
var recipeImg = document.getElementById("recipeImg");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servings = document.getElementById("servings");
// right-side
// text top
var recipeLevel = document.getElementById("recipeLevel");
var recipeCategory = document.getElementById("recipeCategory");
var recipeTitle = document.getElementById("recipeTitle");
var recipeDesc = document.getElementById("recipeDesc");
// Warning
var warning = document.getElementById("warning");
// tab 1 ==> Ingredients
var ing1text = document.getElementById("ing1text");
var ing2text = document.getElementById("ing2text");
var ing3text = document.getElementById("ing3text");
var ing4text = document.getElementById("ing4text");
var ing5text = document.getElementById("ing5text");
var ing6text = document.getElementById("ing6text");
var ing7text = document.getElementById("ing7text");
var ing8text = document.getElementById("ing8text");
var ing9text = document.getElementById("ing9text");
// tab 1 ==> delete lines 8 9
var li8OfTab = document.getElementById("li8OfTab");
var li9OfTab = document.getElementById("li9OfTab");
// tab 2 ==> Instructions
var instr1text = document.getElementById("instr1text");
var instr3text = document.getElementById("instr3text");
var instr2text = document.getElementById("instr2text");
var instr4text = document.getElementById("instr4text");
var instr5text = document.getElementById("instr5text");
var instr6text = document.getElementById("instr6text");
// tab 3 ==> Nutrition
var calories = document.getElementById("calories");
var protein = document.getElementById("protein");
var carbs = document.getElementById("carbs");
var fat = document.getElementById("fat");
var fiber = document.getElementById("fiber");
var sodium = document.getElementById("sodium");
// tab 4 ==> Chef Tips
var tip1Text = document.getElementById("tip1Text");
var tip2Text = document.getElementById("tip2Text");
var tip3Text = document.getElementById("tip3Text");
var tip4Text = document.getElementById("tip4Text");
var tip5Text = document.getElementById("tip5Text");
var tipText = document.getElementById("tipText");
// button
var button = document.getElementById("button");

var items = [
  // 1 Thai Green Curry
  {
    // left-side
    recipeRating: "4.7",
    recipeReviews: "(312 reviews)",
    img: "images/IMG-20251129-WA0030.jpg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Asian",
    recipeTitle: "Thai Green Curry",
    recipeDesc: "Vibrant and aromatic curry with vegetables and coconut milk",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "2 tablespoons green curry past",
    ing2text: "400ml coconut mil",
    ing3text: "300g chicken breast, sliced",
    ing4text: "1 red bell pepper, sliced",
    ing5text: "100g green beans",
    ing6text: "1 eggplant, cubed",
    ing7text: "2 tablespoons fish sauce",
    ing8text: "1 tablespoon palm sugar",
    ing9text: "Fresh Thai basil leaves",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
    instr2text:
      "Add half the coconut milk and stir to combine with the curry paste.",
    instr3text:
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
    instr4text:
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
    instr5text:
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
    instr6text: "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    //tab 3 ==> Nutrition
    calories: "420 kcal",
    protein: "26g",
    carbs: "22g",
    fat: "26g",
    fiber: "5g",
    sodium: "890mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Adjust spice level by using more or less curry paste",
    tip2Text: "Add vegetables in stages based on cooking time needed",
    tip3Text: "Fresh Thai basil is essential for authentic flavor",
    tip4Text: "Use full-fat coconut milk for richest, creamiest sauce",
    tipTextVisible: false,
  },
  // 2 Classic Beef Burger ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.6",
    recipeReviews: "(421 reviews)",
    img: "images/IMG-20251129-WA0025.jpg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "American",
    recipeTitle: "Classic Beef Burger",
    recipeDesc: "Juicy homemade burger with all the fixings",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "500g ground beef (80/20)",
    ing2text: "4 burger buns",
    ing3text: "4 slices cheddar cheese",
    ing4text: "Lettuce leaves",
    ing5text: "Tomato slices",
    ing6text: "Red onion, sliced",
    ing7text: "Pickles",
    ing8text: "Burger sauce or condiments",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    instr2text: "Season patties generously with salt and pepper on both sides.",
    instr3text:
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    instr4text:
      "Add cheese slices in the last minute of cooking and cover to melt.",
    instr5text: "Toast burger buns lightly on the grill or in a pan.",
    instr6text:
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    //tab 3 ==> Nutrition
    calories: "650 kcal",
    protein: "38g",
    carbs: "42g",
    fat: "35g",
    fiber: "2g",
    sodium: "920mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Don't press down on burgers while cooking - keeps them juicy",
    tip2Text: "Make indent in center to prevent burger from puffing up",
    tip3Text: "Let patties rest for 2-3 minutes before serving",
    tip4Text: "Toast buns for better texture and flavor",
    tipTextVisible: false,
  },
  // 3 Chicken Tikka Masala
  {
    // left-side
    recipeRating: "4.7",
    recipeReviews: "(389 reviews)",
    img: "images/IMG-20251129-WA0035.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Asian",
    recipeTitle: "Chicken Tikka Masala",
    recipeDesc: "Rich and creamy Indian curry with tender chicken pieces",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "600g chicken breast, cubed",
    ing2text: "1 cup plain yogurt",
    ing3text: "2 tablespoons tikka masala paste",
    ing4text: "400ml coconut cream",
    ing5text: "1 onion, diced",
    ing6text: "4 cloves garlic, minced",
    ing7text: "2 tablespoons ginger, grated",
    ing8text: "400g canned tomatoes",
    ing9text: "Fresh cilantro for garnish",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    instr2text:
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    instr3text:
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    instr4text:
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
    instr5text:
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    instr6text:
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    //tab 3 ==> Nutrition
    calories: "450 kcal",
    protein: "38g",
    carbs: "24g",
    fat: "22g",
    fiber: "4g",
    sodium: "760mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Marinate chicken overnight for deeper flavor",
    tip2Text: "Use full-fat coconut cream for richest sauce",
    tip3Text: "Adjust spice level by varying the tikka paste amount",
    tip4Text: "Serve with naan bread and basmati rice",
    tipTextVisible: false,
  },
  // 4 Teriyaki Chicken Bowl  ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.7",
    recipeReviews: "(367 reviews)",
    img: "images/IMG-20251129-WA0037.jpg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Asian",
    recipeTitle: "Teriyaki Chicken Bowl",
    recipeDesc: "Sweet and savory chicken over rice with vegetables",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "400g chicken thighs, sliced",
    ing2text: "1/2 cup teriyaki sauce",
    ing3text: "2 cups cooked rice",
    ing4text: "1 broccoli head, florets",
    ing5text: "1 carrot, julienned",
    ing6text: "Sesame seeds",
    ing7text: "Green onions, sliced",
    ing8text: "1 tablespoon sesame oil",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    instr2text:
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    instr3text: "Meanwhile, steam broccoli and carrots until tender-crisp.",
    instr4text: "Divide rice between bowls.",
    instr5text: "Top with teriyaki chicken and steamed vegetables.",
    instr6text: "Garnish with sesame seeds and green onions. Serve hot.",
    //tab 3 ==> Nutrition
    calories: "540 kcal",
    protein: "42g",
    carbs: "58g",
    fat: "14g",
    fiber: "4g",
    sodium: "1240mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use chicken thighs for juicier meat",
    tip2Text: "Make homemade teriyaki sauce for better flavor control",
    tip3Text: "Add edamame for extra protein",
    tip4Text: "Meal prep by cooking rice and chicken ahead",
    tipTextVisible: false,
  },
  // 5 Shrimp Scampi
  {
    // left-side
    recipeRating: "4.8",
    recipeReviews: "(356 reviews)",
    img: "images/IMG-20251129-WA0021.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Seafood",
    recipeTitle: "Shrimp Scampi",
    recipeDesc: "Garlicky shrimp in white wine butter sauce",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "400g large shrimp, peeled",
    ing2text: "300g linguine pasta",
    ing3text: "6 cloves garlic, minced",
    ing4text: "1/2 cup white wine",
    ing5text: "4 tablespoons butter",
    ing6text: "2 tablespoons olive oil",
    ing7text: "Fresh parsley, chopped",
    ing8text: "Lemon juice and zest",
    ing9text: "Red pepper flakes",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
    instr2text:
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    instr3text:
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    instr4text:
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    instr5text:
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    instr6text: "Garnish with parsley, lemon zest, and serve immediately.",
    //tab 3 ==> Nutrition
    calories: "520 kcal",
    protein: "36g",
    carbs: "54g",
    fat: "18g",
    fiber: "3g",
    sodium: "620mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Don't overcook shrimp - they cook very quickly",
    tip2Text: "Use good quality white wine for best flavor",
    tip3Text: "Toss pasta in sauce for maximum flavor absorption",
    tip4Text: "Add extra lemon for bright, fresh taste",
    tipTextVisible: false,
  },
  // 6 Margherita Pizza  ==> warning ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.9",
    recipeReviews: "(512 reviews)",
    img: "images/IMG-20251129-WA0020.jpg",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Intermediate",
    recipeCategory: "Italian",
    recipeTitle: "Margherita Pizza",
    recipeDesc: "Classic Italian pizza with fresh mozzarella and basil",
    // warning
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "300g pizza dough",
    ing2text: "200g crushed tomatoes",
    ing3text: "250g fresh mozzarella",
    ing4text: "Fresh basil leaves",
    ing5text: "2 tablespoons olive oil",
    ing6text: "2 cloves garlic, minced",
    ing7text: "Salt and pepper to taste",
    ing8textVisible: true,
    ing9textVisible: false,
    ing8text: "Parmesan cheese for topping",
    //tab 2 ==> Instructions
    instr1text: "Let pizza dough come to room temperature and rest for 1 hour.",
    instr2text: "Preheat oven to maximum temperature (usually 250°C/480°F).",
    instr3text:
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    instr4text: "Roll out dough on a floured surface to desired thickness.",
    instr5text:
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    instr6text:
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    //tab 3 ==> Nutrition
    calories: "580 kcal",
    protein: "24g",
    carbs: "68g",
    fat: "22g",
    fiber: "4g",
    sodium: "920mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use a pizza stone for crispier crust",
    tip2Text: "Don't overload with toppings - less is more",
    tip3Text: "Add basil after baking to keep it fresh",
    tip4Text: "Let dough rest properly for best texture",
    tipTextVisible: false,
  },
  // 7 Vegetable Curry  ==> warning
  {
    // left-side
    recipeRating: "4.6",
    recipeReviews: "(289 reviews)",
    img: "images/IMG-20251129-WA0026.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Asian",
    recipeTitle: "Vegetable Curry",
    recipeDesc: "Hearty vegetarian curry with coconut milk",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "2 potatoes, cubed",
    ing2text: "1 cauliflower, florets",
    ing3text: "2 carrots, sliced",
    ing4text: "1 can chickpeas",
    ing5text: "400ml coconut milk",
    ing6text: "3 tablespoons curry powder",
    ing7text: "1 onion, diced",
    ing8text: "3 cloves garlic, minced",
    ing9text: "Fresh spinach",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
    instr2text: "Add potatoes and carrots, cook for 5 minutes.",
    instr3text: "Pour in coconut milk and 1 cup water. Bring to simmer.",
    instr4text:
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    instr5text: "Stir in fresh spinach and cook until wilted.",
    instr6text: "Serve hot over basmati rice or with naan bread.",
    //tab 3 ==> Nutrition
    calories: "380 kcal",
    protein: "14g",
    carbs: "48g",
    fat: "16g",
    fiber: "12g",
    sodium: "480mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Add vegetables in order of cooking time needed",
    tip2Text: "Adjust curry powder amount to taste",
    tip3Text: "Use full-fat coconut milk for creamier curry",
    tip4Text: "Add protein like tofu or paneer if desired",
    tipTextVisible: false,
  },
  // 8 Lasagna  ==> warning
  {
    // left-side
    recipeRating: "4.9",
    recipeReviews: "(478 reviews)",
    img: "images/IMG-20251129-WA0028.jpg",
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Italian",
    recipeTitle: "Lasagna Bolognese",
    recipeDesc: "Layered Italian pasta with rich meat sauce and béchamel",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "12 lasagna sheets",
    ing2text: "500g ground beef",
    ing3text: "400g canned tomatoes",
    ing4text: "1 onion, diced",
    ing5text: "2 carrots, diced",
    ing6text: "500ml béchamel sauce",
    ing7text: "200g mozzarella, grated",
    ing8text: "100g parmesan cheese",
    ing9text: "Fresh basil",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    instr2text:
      "Cook lasagna sheets according to package directions. Drain and set aside.",
    instr3text: "Preheat oven to 180°C (350°F).",
    instr4text:
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    instr5text:
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    instr6text:
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    //tab 3 ==> Nutrition
    calories: "680 kcal",
    protein: "42g",
    carbs: "58g",
    fat: "28g",
    fiber: "6g",
    sodium: "920mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Make bolognese sauce a day ahead for better flavor",
    tip2Text: "Don't skip the resting time after baking",
    tip3Text: "Use fresh pasta sheets for best texture",
    tip4Text: "Freeze leftovers in individual portions",
    tipTextVisible: false,
  },
  // 9 Caprese Sandwich
  {
    // left-side
    recipeRating: "4.5",
    recipeReviews: "(189 reviews)",
    img: "images/IMG-20251129-WA0034.jpg",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Italian",
    recipeTitle: "Caprese Sandwich",
    recipeDesc: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "1 ciabatta bread",
    ing2text: "200g fresh mozzarella, sliced",
    ing3text: "2 large tomatoes, sliced",
    ing4text: "Fresh basil leaves",
    ing5text: "3 tablespoons pesto",
    ing6text: "2 tablespoons balsamic glaze",
    ing7text: "Olive oil",
    ing8text: "Salt and pepper",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text: "Slice ciabatta bread in half horizontally.",
    instr2text: "Toast bread lightly until just crispy.",
    instr3text: "Spread pesto on both sides of bread.",
    instr4text:
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
    instr5text:
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
    instr6text: "Close sandwich, cut in half, and serve immediately.",
    //tab 3 ==> Nutrition
    calories: "480 kcal",
    protein: "22g",
    carbs: "48g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use ripe, in-season tomatoes for best flavor",
    tip2Text: "Buffalo mozzarella is traditional but harder to slice",
    tip3Text: "Toast bread lightly - not too crispy",
    tip4Text: "Add prosciutto or salami for a heartier sandwich",
    tipTextVisible: false,
  },
  // 10 French Onion Soup  ==> warning ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.7",
    recipeReviews: "(267 reviews)",
    img: "images/IMG-20251129-WA0031.jpg",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Mediterranean",
    recipeTitle: "French Onion Soup",
    recipeDesc: "Rich beef broth with caramelized onions and melted cheese",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "4 large onions, thinly sliced",
    ing2text: "4 tablespoons butter",
    ing3text: "1 liter beef broth",
    ing4text: "1/2 cup white wine",
    ing5text: "2 bay leaves",
    ing6text: "Fresh thyme",
    ing7text: "Baguette slices",
    ing8text: "200g Gruyère cheese, grated",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
    instr2text: "Add white wine and deglaze the pot, scraping up brown bits.",
    instr3text:
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
    instr4text: "Meanwhile, toast baguette slices until golden.",
    instr5text:
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
    instr6text:
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    //tab 3 ==> Nutrition
    calories: "380 kcal",
    protein: "18g",
    carbs: "36g",
    fat: "18g",
    fiber: "4g",
    sodium: "980mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Patience is key - don't rush the onion caramelization",
    tip2Text: "Use good quality beef broth for best flavor",
    tip3Text: "Gruyère can be substituted with Swiss cheese",
    tip4Text: "Watch carefully when broiling to avoid burning",
    tipTextVisible: false,
  },
  // 11 Creamy Spaghetti Carbonara  ==>  add tip5Text  ==>  remove ing8text & ing9text
  {
    // left-side
    recipeRating: "4.8",
    recipeReviews: "(234 reviews)",
    img: "images/IMG-20251129-WA0033.jpg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Italian",
    recipeTitle: "Creamy Spaghetti Carbonara",
    recipeDesc: "Vibrant and aromatic curry with vegetables and coconut milk",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "400g spaghetti pasta",
    ing2text: "200g pancetta or guanciale, diced",
    ing3text: "4 large eggs",
    ing4text: "100g Pecorino Romano cheese, grated",
    ing5text: "50g Parmesan cheese, grated",
    ing6text: "Freshly ground black pepper",
    ing7text: "Salt for pasta water",
    ing8textVisible: false,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    instr2text:
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
    instr3text:
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
    instr4text:
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    instr5text:
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
    instr6text:
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    //tab 3 ==> Nutrition
    calories: "520 kcal",
    protein: "28g",
    carbs: "62g",
    fat: "18g",
    fiber: "3g",
    sodium: "680mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use room temperature eggs for a smoother sauce consistency",
    tip2Text:
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
    tip3Text:
      "Reserve extra pasta water - it's the secret to perfect creaminess",
    tip4Text: "Freshly grated cheese makes all the difference in flavor",
    tip5Text: "Never add cream - authentic carbonara is made with eggs only",
    tipTextVisible: true,
  },
  // 12 Chicken Stir-Fry
  {
    // left-side
    recipeRating: "4.5",
    recipeReviews: "(324 reviews)",
    img: "images/IMG-20251129-WA0024.jpg",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Asian",
    recipeTitle: "Chicken Stir-Fry",
    recipeDesc: "Quick and healthy stir-fry with colorful vegetables",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "500g chicken breast, sliced",
    ing2text: "2 bell peppers, sliced",
    ing3text: "1 broccoli head, florets",
    ing4text: "2 carrots, julienned",
    ing5text: "3 tablespoons soy sauce",
    ing6text: "2 tablespoons oyster sauce",
    ing7text: "1 tablespoon sesame oil",
    ing8text: "2 cloves garlic, minced",
    ing9text: "Fresh ginger, grated",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    instr2text:
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    instr3text:
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    instr4text:
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    instr5text:
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    instr6text: "Serve immediately over steamed rice or noodles.",
    //tab 3 ==> Nutrition
    calories: "320 kcal",
    protein: "34g",
    carbs: "18g",
    fat: "12g",
    fiber: "5g",
    sodium: "840mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Cut all ingredients before starting to cook",
    tip2Text: "Keep heat high for authentic stir-fry texture",
    tip3Text: "Don't overcrowd the wok or vegetables will steam",
    tip4Text: "Add cashews or peanuts for extra crunch",
    tipTextVisible: false,
  },
  // 13 Greek Moussaka  ==> warning
  {
    // left-side
    recipeRating: "4.8",
    recipeReviews: "(234 reviews)",
    img: "images/IMG-20251129-WA0032.jpg",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Mediterranean",
    recipeTitle: "Greek Moussaka",
    recipeDesc: "Traditional layered eggplant casserole with lamb",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "3 large eggplants, sliced",
    ing2text: "500g ground lamb",
    ing3text: "400g canned tomatoes",
    ing4text: "1 onion, diced",
    ing5text: "3 cloves garlic, minced",
    ing6text: "500ml béchamel sauce",
    ing7text: "100g parmesan cheese",
    ing8text: "Cinnamon and oregano",
    ing9text: "Olive oil",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    instr2text:
      "Brush eggplant slices with olive oil, grill or bake until softened.",
    instr3text:
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    instr4text: "Preheat oven to 180°C (350°F).",
    instr5text:
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    instr6text:
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    //tab 3 ==> Nutrition
    calories: "580 kcal",
    protein: "36g",
    carbs: "32g",
    fat: "32g",
    fiber: "8g",
    sodium: "820mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Salt eggplant to remove bitterness",
    tip2Text: "Don't skip the resting time - it helps set the layers",
    tip3Text: "Use ground beef if lamb is unavailable",
    tip4Text: "Make ahead and reheat for easier serving",
    tipTextVisible: false,
  },
  // 14 Pad Thai
  {
    // left-side
    recipeRating: "4.8",
    recipeReviews: "(445 reviews)",
    img: "images/imgi_2_photo-2.jpeg",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Intermediat",
    recipeCategory: "Asian",
    recipeTitle: "Pad Thai",
    recipeDesc: "Popular Thai stir-fried noodles with shrimp and peanuts",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "200g rice noodles",
    ing2text: "200g shrimp, peeled",
    ing3text: "2 eggs",
    ing4text: "3 tablespoons tamarind paste",
    ing5text: "2 tablespoons fish sauce",
    ing6text: "1 tablespoon palm sugar",
    ing7text: "Bean sprouts",
    ing8text: "Crushed peanuts",
    ing9text: "Lime wedges and cilantro",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    instr2text:
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    instr3text: "Heat wok over high heat. Scramble eggs and set aside.",
    instr4text:
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    instr5text:
      "Add scrambled eggs and bean sprouts. Toss everything together.",
    instr6text: "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    //tab 3 ==> Nutrition
    calories: "540 kcal",
    protein: "32g",
    carbs: "62g",
    fat: "16g",
    fiber: "4g",
    sodium: "1120mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Don't oversoak noodles or they'll be mushy",
    tip2Text: "Cook on high heat for authentic wok flavor",
    tip3Text: "Balance sweet, sour, and salty flavors",
    tip4Text: "Prepare all ingredients before starting to cook",
    tipTextVisible: false,
  },
  // 15 Mediterranean Quinoa Bowl  ==> warning ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.5",
    recipeReviews: "(156 reviews)",
    img: "images/IMG-20251129-WA0036.jpg",
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Mediterranean",
    recipeTitle: "Mediterranean Quinoa Bowl",
    recipeDesc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "1 cup quinoa",
    ing2text: "Cherry tomatoes, halved",
    ing3text: "Cucumber, diced",
    ing4text: "Red onion, sliced",
    ing5text: "Kalamata olives",
    ing6text: "Feta cheese, crumbled",
    ing7text: "Fresh parsley",
    ing8text: "Tahini dressing",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    instr2text: "While quinoa cooks, prepare all vegetables and set aside.",
    instr3text:
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    instr4text: "Fluff cooked quinoa with a fork and let cool slightly.",
    instr5text:
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    instr6text:
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    //tab 3 ==> Nutrition
    calories: "480 kcal",
    protein: "18",
    carbs: "58",
    fat: "20g",
    fiber: "10g",
    sodium: "540mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Rinse quinoa well to remove bitter coating",
    tip2Text: "Let quinoa cool before adding fresh ingredients",
    tip3Text: "Make extra tahini dressing - it keeps well in the fridge",
    tip4Text: "Add grilled chicken or chickpeas for extra protein",
    tipTextVisible: false,
  },
  // 16 Honey Garlic Salmon  ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.9",
    recipeReviews: "(187 reviews)",
    img: "images/IMG-20251129-WA0027.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Seafood",
    recipeTitle: "Honey Garlic Salmon",
    recipeDesc: "Pan-seared salmon with a sweet and savory glaze",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "2 salmon fillets (6oz each)",
    ing2text: "3 tablespoons honey",
    ing3text: "2 tablespoons soy sauce",
    ing4text: "4 cloves garlic, minced",
    ing5text: "1 tablespoon olive oil",
    ing6text: "1 teaspoon fresh ginger, grated",
    ing7text: "Sesame seeds for garnish",
    ing8text: "Green onions, sliced",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    instr2text:
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    instr3text: "Heat olive oil in a large skillet over medium-high heat.",
    instr4text:
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    instr5text:
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    instr6text:
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    //tab 3 ==> Nutrition
    calories: "380 kcal",
    protein: "35g",
    carbs: "28g",
    fat: "14g",
    fiber: "0g",
    sodium: "720mg",
    //tab 4 ==> Chef Tips
    tip1Text:
      "Don't overcook salmon - it should be slightly pink in the center",
    tip2Text: "Use wild-caught salmon for best flavor and nutrition",
    tip3Text: "Let the sauce caramelize slightly for deeper flavor",
    tip4Text: "Pair with steamed broccoli or asparagus for a complete meal",
    tipTextVisible: false,
  },
  // 17 Beef Tacos
  {
    // left-side
    recipeRating: "4.6",
    recipeReviews: "(278 reviews)",
    img: "images/IMG-20251129-WA0023.jpg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "American",
    recipeTitle: "Beef Tacos",
    recipeDesc: "Flavorful Mexican tacos with seasoned ground beef",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "500g ground beef",
    ing2text: "8 taco shells",
    ing3text: "1 onion, diced",
    ing4text: "2 tablespoons taco seasoning",
    ing5text: "Shredded lettuce",
    ing6text: "Diced tomatoes",
    ing7text: "Shredded cheddar cheese",
    ing8text: "Sour cream",
    ing9text: "Salsa",
    ing8textVisible: true,
    ing9textVisible: true,
    //tab 2 ==> Instructions
    instr1text:
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
    instr2text: "Add diced onion and cook until softened, about 5 minutes.",
    instr3text:
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
    instr4text: "Warm taco shells according to package directions.",
    instr5text: "Fill each shell with seasoned beef.",
    instr6text:
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    //tab 3 ==> Nutrition
    calories: "420 kcal",
    protein: "26g",
    carbs: "32g",
    fat: "20g",
    fiber: "4g",
    sodium: "780mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Drain excess fat from beef for healthier tacos",
    tip2Text: "Warm shells in oven for better texture",
    tip3Text: "Prepare all toppings before cooking beef",
    tip4Text: "Use ground turkey for a lighter option",
    tipTextVisible: false,
  },
  // 18 BBQ Pulled Pork  ==> warning  ==>  remove ing9text
  {
    // left-side
    recipeRating: "4.7",
    recipeReviews: "(412 reviews)",
    img: "images/imgi_2-BBQ-Pulled-Pork.jpeg",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "American",
    recipeTitle: "BBQ Pulled Pork",
    recipeDesc: "Slow-cooked tender pork in smoky barbecue sauce",
    warningVisible: true,
    // tab 1 ==> Ingredients
    ing1text: "1kg pork shoulder",
    ing2text: "1 cup BBQ sauce",
    ing3text: "1/2 cup apple cider vinegar",
    ing4text: "2 tablespoons brown sugar",
    ing5text: "1 tablespoon paprika",
    ing6text: "1 tablespoon garlic powder",
    ing7text: "Burger buns",
    ing8text: "Coleslaw for serving",
    ing8textVisible: true,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
    instr2text:
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
    instr3text:
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
    instr4text: "Remove pork and shred with two forks. Discard excess fat.",
    instr5text: "Return shredded pork to slow cooker, mix with BBQ sauce.",
    instr6text: "Serve on toasted buns with coleslaw on top.",
    //tab 3 ==> Nutrition
    calories: "620 kcal",
    protein: "48g",
    carbs: "52g",
    fat: "22g",
    fiber: "3g",
    sodium: "1180mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use pork shoulder for best results - it stays moist",
    tip2Text: "Let pork rest before shredding for juicier meat",
    tip3Text: "Make your own BBQ sauce for better flavor",
    tip4Text: "Leftovers freeze well for up to 3 months",
    tipTextVisible: false,
  },
  // 19 Caesar Salad  ==> remove ing8text & ing9text
  {
    // left-side
    recipeRating: "4.4",
    recipeReviews: "(198 reviews)",
    img: "images/IMG-20251129-WA0029.jpg",
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",
    // right-side
    //text top
    recipeLevel: "Easy",
    recipeCategory: "Mediterranean",
    recipeTitle: "Caesar Salad",
    recipeDesc: "Classic salad with crispy romaine and creamy dressing",
    warningVisible: false,
    // tab 1 ==> Ingredients
    ing1text: "1 large romaine lettuce",
    ing2text: "1/2 cup Caesar dressing",
    ing3text: "1/2 cup parmesan cheese, shaved",
    ing4text: "1 cup croutons",
    ing5text: "2 anchovy fillets (optional)",
    ing6text: "Lemon wedges",
    ing7text: "Black pepper",
    ing8textVisible: false,
    ing9textVisible: false,
    //tab 2 ==> Instructions
    instr1text:
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    instr2text: "Place lettuce in a large salad bowl.",
    instr3text: "Add Caesar dressing and toss until evenly coated.",
    instr4text: "Add croutons and half the parmesan cheese. Toss gently.",
    instr5text: "Top with remaining parmesan shavings and anchovies if using.",
    instr6text: "Serve immediately with lemon wedges and fresh black pepper.",
    //tab 3 ==> Nutrition
    calories: "320 kcal",
    protein: "12g",
    carbs: "18g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",
    //tab 4 ==> Chef Tips
    tip1Text: "Use cold, crisp lettuce for best texture",
    tip2Text: "Make homemade croutons for better flavor",
    tip3Text: "Add grilled chicken for a complete meal",
    tip4Text: "Don't dress salad until ready to serve",
    tipTextVisible: false,
  },
];
// function changeContent
function changeContent() {
  var randomIndex = Math.floor(Math.random() * items.length);
  var recipe = items[randomIndex];
  // --- Left Side ---
  recipeRating.innerHTML = recipe.recipeRating;
  recipeReviews.innerHTML = recipe.recipeReviews;
  recipeImg.src = recipe.img;
  prepTime.innerHTML = recipe.prepTime;
  cookTime.innerHTML = recipe.cookTime;
  servings.innerHTML = recipe.servings;
  // --- Right Side - Top ---
  recipeLevel.innerHTML = recipe.recipeLevel;
  recipeCategory.innerHTML = recipe.recipeCategory;
  recipeTitle.innerHTML = recipe.recipeTitle;
  recipeDesc.innerHTML = recipe.recipeDesc;
  // --- Warning ---
  if (recipe.warningVisible) {
    warning.classList.remove("d-none");
  } else {
    warning.classList.add("d-none");
  }
  // tipText
  if (recipe.tipTextVisible) {
    tipText.classList.remove("d-none");
  } else {
    tipText.classList.add("d-none");
  }
  // --- Ingredients (1-9) ---
  ing1text.innerHTML = recipe.ing1text;
  ing2text.innerHTML = recipe.ing2text;
  ing3text.innerHTML = recipe.ing3text;
  ing4text.innerHTML = recipe.ing4text;
  ing5text.innerHTML = recipe.ing5text;
  ing6text.innerHTML = recipe.ing6text;
  ing7text.innerHTML = recipe.ing7text;
  // ing8
  if (recipe.ing8textVisible !== false) {
    ing8text.parentElement.classList.remove("d-none");
    ing8text.innerHTML = recipe.ing8text;
  } else {
    ing8text.parentElement.classList.add("d-none");
  }
  // ing9
  if (recipe.ing9textVisible === true) {
    ing9text.parentElement.classList.remove("d-none");
    ing9text.innerHTML = recipe.ing9text;
  } else {
    ing9text.parentElement.classList.add("d-none");
  }
  // --- Instructions ---
  instr1text.innerHTML = recipe.instr1text;
  instr2text.innerHTML = recipe.instr2text;
  instr3text.innerHTML = recipe.instr3text;
  instr4text.innerHTML = recipe.instr4text;
  instr5text.innerHTML = recipe.instr5text;
  instr6text.innerHTML = recipe.instr6text;
  // --- Nutrition ---
  calories.innerHTML = recipe.calories;
  protein.innerHTML = recipe.protein;
  carbs.innerHTML = recipe.carbs;
  fat.innerHTML = recipe.fat;
  fiber.innerHTML = recipe.fiber;
  sodium.innerHTML = recipe.sodium;
  // --- Chef Tips ---
  tip1Text.innerHTML = recipe.tip1Text;
  tip2Text.innerHTML = recipe.tip2Text;
  tip3Text.innerHTML = recipe.tip3Text;
  tip4Text.innerHTML = recipe.tip4Text;
  // tip5Text
  if (recipe.tip5Text) {
    tip5Text.innerHTML = recipe.tip5Text;
    tipText.classList.remove("d-none");
  } else {
    tipText.classList.add("d-none");
  }
}
button.addEventListener("click", function () {
  changeContent();
  scroll({ top: 100, behavior: "smooth" });
});
window.onload = changeContent;
