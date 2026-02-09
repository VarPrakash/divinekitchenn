export type Badge = "popular" | "chefs-pick" | "";

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  badge: Badge;
  image: string;
}

export const menuItems: MenuItem[] = [
  // ── Appetizers ──────────────────────────────────────────────
  {
    category: "Appetizers",
    name: "Truffle Burrata",
    description: "Creamy burrata, black truffle, arugula, aged balsamic, grilled sourdough",
    price: 18,
    badge: "popular",
    image: "/images/truffle-burrata.webp",
  },
  {
    category: "Appetizers",
    name: "Wagyu Beef Tartare",
    description: "Hand-cut wagyu, quail egg, capers, cornichons, truffle aioli",
    price: 24,
    badge: "chefs-pick",
    image: "/images/wagyu-beef-tartare.webp",
  },
  {
    category: "Appetizers",
    name: "Crispy Calamari",
    description: "Lightly battered, served with marinara and lemon aioli",
    price: 16,
    badge: "",
    image: "/images/crispy-calamari.webp",
  },
  {
    category: "Appetizers",
    name: "Soup of the Day",
    description: "Chef's daily creation, served with artisan bread",
    price: 12,
    badge: "",
    image: "/images/soup-of-the-day.webp",
  },

  // ── Sushi & Sashimi ────────────────────────────────────────
  {
    category: "Sushi & Sashimi",
    name: "Chef's Omakase",
    description: "A curated selection of the freshest seasonal fish, 12 pieces",
    price: 85,
    badge: "chefs-pick",
    image: "/images/chefs-omakase.webp",
  },
  {
    category: "Sushi & Sashimi",
    name: "Dragon Roll",
    description: "Shrimp tempura, eel, avocado, spicy mayo, eel sauce",
    price: 22,
    badge: "popular",
    image: "/images/dragon-roll.webp",
  },
  {
    category: "Sushi & Sashimi",
    name: "Salmon Sashimi",
    description: "8 pieces of premium Norwegian salmon",
    price: 26,
    badge: "",
    image: "/images/salmon-sashimi.webp",
  },
  {
    category: "Sushi & Sashimi",
    name: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, sesame seeds",
    price: 18,
    badge: "",
    image: "/images/spicy-tuna-roll.webp",
  },
  {
    category: "Sushi & Sashimi",
    name: "Rainbow Roll",
    description: "California roll topped with assorted sashimi",
    price: 24,
    badge: "",
    image: "/images/rainbow-roll.webp",
  },

  // ── Prime Steaks ───────────────────────────────────────────
  {
    category: "Prime Steaks",
    name: "Prime Ribeye",
    description: "16oz aged ribeye, herb butter, roasted garlic, seasonal vegetables",
    price: 58,
    badge: "chefs-pick",
    image: "/images/prime-ribeye.webp",
  },
  {
    category: "Prime Steaks",
    name: "Filet Mignon",
    description: "8oz center-cut tenderloin, red wine reduction, truffle mash",
    price: 52,
    badge: "popular",
    image: "/images/filet-mignon.webp",
  },
  {
    category: "Prime Steaks",
    name: "NY Strip",
    description: "14oz bone-in strip, peppercorn sauce, crispy onion rings",
    price: 48,
    badge: "",
    image: "/images/ny-strip.webp",
  },
  {
    category: "Prime Steaks",
    name: "Tomahawk Ribeye",
    description: "32oz bone-in ribeye for two, roasted bone marrow, chimichurri",
    price: 95,
    badge: "",
    image: "/images/tomahawk-ribeye.webp",
  },

  // ── Burgers & Grills ──────────────────────────────────────
  {
    category: "Burgers & Grills",
    name: "The Classic Oak",
    description: "Prime beef patty, aged cheddar, lettuce, tomato, Oak & Barrel sauce",
    price: 19,
    badge: "popular",
    image: "/images/the-classic-oak.webp",
  },
  {
    category: "Burgers & Grills",
    name: "Wagyu Smash Burger",
    description: "Double wagyu patties, American cheese, caramelized onions, truffle aioli",
    price: 28,
    badge: "chefs-pick",
    image: "/images/wagyu-smash-burger.webp",
  },
  {
    category: "Burgers & Grills",
    name: "Truffle Mushroom Burger",
    description: "Beef patty, swiss cheese, sautéed mushrooms, truffle mayo, arugula",
    price: 24,
    badge: "",
    image: "/images/truffle-mushroom-burger.webp",
  },
  {
    category: "Burgers & Grills",
    name: "BBQ Bacon Burger",
    description: "Beef patty, smoked bacon, cheddar, crispy onions, house BBQ",
    price: 22,
    badge: "",
    image: "/images/bbq-bacon-burger.webp",
  },

  // ── Craft Beverages ───────────────────────────────────────
  {
    category: "Craft Beverages",
    name: "Local IPA",
    description: "Hoppy and citrus-forward, from our local craft brewery",
    price: 8,
    badge: "",
    image: "/images/local-ipa.webp",
  },
  {
    category: "Craft Beverages",
    name: "Belgian Wheat",
    description: "Light and refreshing with hints of orange and coriander",
    price: 9,
    badge: "",
    image: "/images/belgian-wheat.webp",
  },
  {
    category: "Craft Beverages",
    name: "Stout",
    description: "Rich and creamy with coffee and chocolate notes",
    price: 9,
    badge: "",
    image: "/images/stout.webp",
  },
  {
    category: "Craft Beverages",
    name: "Pilsner",
    description: "Clean and crisp, a perfect complement to any meal",
    price: 7,
    badge: "",
    image: "/images/pilsner.webp",
  },
  {
    category: "Craft Beverages",
    name: "House Cabernet",
    description: "Full-bodied with dark fruit and oak undertones",
    price: 14,
    badge: "popular",
    image: "/images/house-cabernet.webp",
  },
  {
    category: "Craft Beverages",
    name: "Napa Chardonnay",
    description: "Buttery and elegant with notes of vanilla and pear",
    price: 16,
    badge: "",
    image: "/images/napa-chardonnay.webp",
  },

  // ── Desserts ──────────────────────────────────────────────
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate cake with molten center, vanilla ice cream",
    price: 14,
    badge: "popular",
    image: "/images/chocolate-lava-cake.webp",
  },
  {
    category: "Desserts",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 12,
    badge: "chefs-pick",
    image: "/images/creme-brulee.webp",
  },
  {
    category: "Desserts",
    name: "New York Cheesecake",
    description: "Creamy cheesecake, graham crust, berry compote",
    price: 11,
    badge: "",
    image: "/images/new-york-cheesecake.webp",
  },
  {
    category: "Desserts",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
    price: 13,
    badge: "",
    image: "/images/tiramisu.webp",
  },
];

export const categories = [...new Set(menuItems.map((item) => item.category))];

export const popularItems = menuItems.filter((item) => item.badge === "popular");

export const getItemsByCategory = (category: string) =>
  menuItems.filter((item) => item.category === category);
