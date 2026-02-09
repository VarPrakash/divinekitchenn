module.exports = [
"[project]/OneDrive/Desktop/Divine Kitchen/src/data/menu-items.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "getItemsByCategory",
    ()=>getItemsByCategory,
    "menuItems",
    ()=>menuItems,
    "popularItems",
    ()=>popularItems
]);
const menuItems = [
    // ── Appetizers ──────────────────────────────────────────────
    {
        category: "Appetizers",
        name: "Truffle Burrata",
        description: "Creamy burrata, black truffle, arugula, aged balsamic, grilled sourdough",
        price: 18,
        badge: "popular",
        image: "/images/truffle-burrata.webp"
    },
    {
        category: "Appetizers",
        name: "Wagyu Beef Tartare",
        description: "Hand-cut wagyu, quail egg, capers, cornichons, truffle aioli",
        price: 24,
        badge: "chefs-pick",
        image: "/images/wagyu-beef-tartare.webp"
    },
    {
        category: "Appetizers",
        name: "Crispy Calamari",
        description: "Lightly battered, served with marinara and lemon aioli",
        price: 16,
        badge: "",
        image: "/images/crispy-calamari.webp"
    },
    {
        category: "Appetizers",
        name: "Soup of the Day",
        description: "Chef's daily creation, served with artisan bread",
        price: 12,
        badge: "",
        image: "/images/soup-of-the-day.webp"
    },
    // ── Sushi & Sashimi ────────────────────────────────────────
    {
        category: "Sushi & Sashimi",
        name: "Chef's Omakase",
        description: "A curated selection of the freshest seasonal fish, 12 pieces",
        price: 85,
        badge: "chefs-pick",
        image: "/images/chefs-omakase.webp"
    },
    {
        category: "Sushi & Sashimi",
        name: "Dragon Roll",
        description: "Shrimp tempura, eel, avocado, spicy mayo, eel sauce",
        price: 22,
        badge: "popular",
        image: "/images/dragon-roll.webp"
    },
    {
        category: "Sushi & Sashimi",
        name: "Salmon Sashimi",
        description: "8 pieces of premium Norwegian salmon",
        price: 26,
        badge: "",
        image: "/images/salmon-sashimi.webp"
    },
    {
        category: "Sushi & Sashimi",
        name: "Spicy Tuna Roll",
        description: "Fresh tuna, spicy mayo, cucumber, sesame seeds",
        price: 18,
        badge: "",
        image: "/images/spicy-tuna-roll.webp"
    },
    {
        category: "Sushi & Sashimi",
        name: "Rainbow Roll",
        description: "California roll topped with assorted sashimi",
        price: 24,
        badge: "",
        image: "/images/rainbow-roll.webp"
    },
    // ── Prime Steaks ───────────────────────────────────────────
    {
        category: "Prime Steaks",
        name: "Prime Ribeye",
        description: "16oz aged ribeye, herb butter, roasted garlic, seasonal vegetables",
        price: 58,
        badge: "chefs-pick",
        image: "/images/prime-ribeye.webp"
    },
    {
        category: "Prime Steaks",
        name: "Filet Mignon",
        description: "8oz center-cut tenderloin, red wine reduction, truffle mash",
        price: 52,
        badge: "popular",
        image: "/images/filet-mignon.webp"
    },
    {
        category: "Prime Steaks",
        name: "NY Strip",
        description: "14oz bone-in strip, peppercorn sauce, crispy onion rings",
        price: 48,
        badge: "",
        image: "/images/ny-strip.webp"
    },
    {
        category: "Prime Steaks",
        name: "Tomahawk Ribeye",
        description: "32oz bone-in ribeye for two, roasted bone marrow, chimichurri",
        price: 95,
        badge: "",
        image: "/images/tomahawk-ribeye.webp"
    },
    // ── Burgers & Grills ──────────────────────────────────────
    {
        category: "Burgers & Grills",
        name: "The Classic Oak",
        description: "Prime beef patty, aged cheddar, lettuce, tomato, Oak & Barrel sauce",
        price: 19,
        badge: "popular",
        image: "/images/the-classic-oak.webp"
    },
    {
        category: "Burgers & Grills",
        name: "Wagyu Smash Burger",
        description: "Double wagyu patties, American cheese, caramelized onions, truffle aioli",
        price: 28,
        badge: "chefs-pick",
        image: "/images/wagyu-smash-burger.webp"
    },
    {
        category: "Burgers & Grills",
        name: "Truffle Mushroom Burger",
        description: "Beef patty, swiss cheese, sautéed mushrooms, truffle mayo, arugula",
        price: 24,
        badge: "",
        image: "/images/truffle-mushroom-burger.webp"
    },
    {
        category: "Burgers & Grills",
        name: "BBQ Bacon Burger",
        description: "Beef patty, smoked bacon, cheddar, crispy onions, house BBQ",
        price: 22,
        badge: "",
        image: "/images/bbq-bacon-burger.webp"
    },
    // ── Craft Beverages ───────────────────────────────────────
    {
        category: "Craft Beverages",
        name: "Local IPA",
        description: "Hoppy and citrus-forward, from our local craft brewery",
        price: 8,
        badge: "",
        image: "/images/local-ipa.webp"
    },
    {
        category: "Craft Beverages",
        name: "Belgian Wheat",
        description: "Light and refreshing with hints of orange and coriander",
        price: 9,
        badge: "",
        image: "/images/belgian-wheat.webp"
    },
    {
        category: "Craft Beverages",
        name: "Stout",
        description: "Rich and creamy with coffee and chocolate notes",
        price: 9,
        badge: "",
        image: "/images/stout.webp"
    },
    {
        category: "Craft Beverages",
        name: "Pilsner",
        description: "Clean and crisp, a perfect complement to any meal",
        price: 7,
        badge: "",
        image: "/images/pilsner.webp"
    },
    {
        category: "Craft Beverages",
        name: "House Cabernet",
        description: "Full-bodied with dark fruit and oak undertones",
        price: 14,
        badge: "popular",
        image: "/images/house-cabernet.webp"
    },
    {
        category: "Craft Beverages",
        name: "Napa Chardonnay",
        description: "Buttery and elegant with notes of vanilla and pear",
        price: 16,
        badge: "",
        image: "/images/napa-chardonnay.webp"
    },
    // ── Desserts ──────────────────────────────────────────────
    {
        category: "Desserts",
        name: "Chocolate Lava Cake",
        description: "Warm dark chocolate cake with molten center, vanilla ice cream",
        price: 14,
        badge: "popular",
        image: "/images/chocolate-lava-cake.webp"
    },
    {
        category: "Desserts",
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar crust",
        price: 12,
        badge: "chefs-pick",
        image: "/images/creme-brulee.webp"
    },
    {
        category: "Desserts",
        name: "New York Cheesecake",
        description: "Creamy cheesecake, graham crust, berry compote",
        price: 11,
        badge: "",
        image: "/images/new-york-cheesecake.webp"
    },
    {
        category: "Desserts",
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
        price: 13,
        badge: "",
        image: "/images/tiramisu.webp"
    }
];
const categories = [
    ...new Set(menuItems.map((item)=>item.category))
];
const popularItems = menuItems.filter((item)=>item.badge === "popular");
const getItemsByCategory = (category)=>menuItems.filter((item)=>item.category === category);
}),
"[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/src/data/menu-items.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ── Category decorative icons (SVG inline) ──────────────── */ const categoryIcons = {
    Appetizers: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8h1a4 4 0 0 1 0 8h-1"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 11,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "1",
                x2: "6",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 11,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "1",
                x2: "10",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 11,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "1",
                x2: "14",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 11,
                columnNumber: 173
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "Sushi & Sashimi": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12h8"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 16,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v8"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 16,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "Prime Steaks": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 9l-6 6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 21,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "9",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 21,
                columnNumber: 109
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "15",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 21,
                columnNumber: 159
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "Burgers & Grills": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 11h18"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 11V8a7 7 0 0 1 14 0v3"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 26,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 13h18l-1.5 6a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 13z"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 26,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "Craft Beverages": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 22V19.5C8 17 6 14 6 10V2h12v8c0 4-2 7-2 9.5V22"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 2h12"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 31,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 22h8"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 31,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    Desserts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a5 5 0 0 0-5 5c0 5 5 7 5 12 0-5 5-7 5-12a5 5 0 0 0-5-5z"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 21h14"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 36,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19v2"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 36,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function MenuItemCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex gap-5 rounded-xl border border-cream-200/60 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-saffron-200 hover:bg-white hover:shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: item.image,
                    alt: item.name,
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-110",
                    sizes: "112px"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-heading text-lg text-charcoal-800",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    item.badge === "popular" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0 rounded-full bg-saffron-100 px-2.5 py-0.5 font-body text-[10px] font-semibold tracking-wide text-saffron-600 uppercase",
                                        children: "Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    item.badge === "chefs-pick" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0 rounded-full bg-olive-500/12 px-2.5 py-0.5 font-body text-[10px] font-semibold tracking-wide text-olive-600 uppercase",
                                        children: "Chef's Pick"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-body text-sm leading-relaxed text-charcoal-400",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 border-b border-dotted border-charcoal-200"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-3 font-mono text-lg font-medium text-charcoal-700",
                                children: [
                                    "$",
                                    item.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function MenuPage() {
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flipping, setFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentCategory = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"][activePage];
    const currentItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemsByCategory"])(currentCategory);
    const goToPage = (index)=>{
        if (index === activePage || flipping) return;
        setFlipping(true);
        setTimeout(()=>{
            setActivePage(index);
            setFlipping(false);
        }, 300);
    };
    const nextPage = ()=>{
        if (activePage < __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].length - 1) goToPage(activePage + 1);
    };
    const prevPage = ()=>{
        if (activePage > 0) goToPage(activePage - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-charcoal-900 py-20 text-center lg:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1200px] px-6 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-accent text-xl font-bold text-saffron-400",
                            children: "Explore"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-2 font-display text-4xl font-black tracking-tight text-white lg:text-6xl",
                            children: "Our Menu"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-4 max-w-lg font-body text-lg text-cream-300",
                            children: "Page through our menu just like you would at the table. Each category is its own chapter."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#f8f4ef] py-16 lg:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1000px] px-4 lg:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex flex-wrap justify-center gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>goToPage(i),
                                    className: `flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium transition-all duration-200 ${i === activePage ? "bg-charcoal-800 text-cream-50 shadow-card" : "border border-charcoal-200 bg-white text-charcoal-500 hover:border-saffron-300 hover:text-saffron-600"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: i === activePage ? "text-saffron-400" : "text-charcoal-300",
                                            children: categoryIcons[cat]
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        cat
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-3 rounded-3xl bg-gradient-to-br from-cream-300/40 via-cream-200/20 to-cream-400/30 blur-sm"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative rounded-2xl border border-cream-300 bg-gradient-to-br from-[#fffcf7] to-[#fef9f0] px-6 py-10 shadow-elevated transition-opacity duration-300 sm:px-10 lg:px-14 lg:py-14 ${flipping ? "opacity-0" : "opacity-100"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 h-12 w-12 overflow-hidden rounded-bl-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-6 -right-6 h-12 w-12 rotate-45 bg-cream-200"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-10 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100 text-saffron-600",
                                                    children: categoryIcons[currentCategory]
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-display text-3xl font-bold text-charcoal-800 lg:text-4xl",
                                                    children: currentCategory
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto mt-3 flex items-center justify-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-px w-12 bg-saffron-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-1.5 rotate-45 bg-saffron-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-px w-12 bg-saffron-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: currentItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItemCard, {
                                                    item: item
                                                }, item.name, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-sm text-charcoal-300",
                                                children: [
                                                    "— ",
                                                    activePage + 1,
                                                    " of ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].length,
                                                    " —"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevPage,
                                    disabled: activePage === 0,
                                    className: `flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-semibold transition-all ${activePage === 0 ? "cursor-not-allowed text-charcoal-300" : "bg-white text-charcoal-600 shadow-soft hover:shadow-card"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "15 18 9 12 15 6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        "Previous"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden gap-2 sm:flex",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goToPage(i),
                                            className: `h-2.5 cursor-pointer rounded-full transition-all duration-200 ${i === activePage ? "w-8 bg-saffron-500" : "w-2.5 bg-charcoal-200 hover:bg-charcoal-300"}`,
                                            "aria-label": `Go to page ${i + 1}`
                                        }, i, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextPage,
                                    disabled: activePage === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].length - 1,
                                    className: `flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-semibold transition-all ${activePage === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$src$2f$data$2f$menu$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].length - 1 ? "cursor-not-allowed text-charcoal-300" : "bg-white text-charcoal-600 shadow-soft hover:shadow-card"}`,
                                    children: [
                                        "Next",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 18 15 12 9 6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Divine Kitchen/src/app/menu/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=OneDrive_Desktop_Divine%20Kitchen_src_fb76309e._.js.map