import { images } from "./images";

export type ArticleSection = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
};

export const restaurantGuide = {
  slug: "how-to-open-a-successful-restaurant-in-nepal",
  path: "/blog/how-to-open-a-successful-restaurant-in-nepal",
  title:
    "How to Open a Successful Restaurant in Nepal: A Complete Step-by-Step Guide",
  description:
    "A practical, source-based guide to opening a restaurant in Nepal — from feasibility and budgets to licensing, staffing, menu costing, marketing, and the first 90 days.",
  excerpt:
    "A practical, source-based guide to opening a restaurant in Nepal — from feasibility and budgets to licensing, staffing, menu costing, marketing, and the first 90 days.",
  navLabel: "Opening a Restaurant in Nepal",
  navDescription: "The complete step-by-step guide",
  category: "Business Guide",
  published: "2026-11-10",
  updated: "2026-11-10",
  readingMinutes: 56,
  wordCount: 14000,
  author: {
    name: "Chef Mani Bista",
    role: "Private chef · Kathmandu",
    path: "/story",
    image: images.portrait,
  },
  image: images.overlook,
  keywords: [
    "how to open a restaurant in Nepal",
    "restaurant business in Nepal",
    "restaurant startup cost Nepal",
    "restaurant license Nepal",
    "food business license Nepal",
    "restaurant menu costing",
    "Kathmandu restaurant business",
    "Nepal hospitality industry",
    "restaurant SOP",
    "restaurant marketing Nepal",
    "Nepal VAT restaurant",
    "restaurant feasibility study Nepal",
  ],
} as const;

export const startupCostGuide = {
  slug: "restaurant-startup-cost-in-nepal",
  path: "/blog/restaurant-startup-cost-in-nepal",
  title:
    "Restaurant Startup Cost in Nepal: Complete Investment Breakdown (2026)",
  description:
    "Restaurant licence fees in Nepal, official tax and municipal sources, commercial kitchen equipment evidence, and five 2026 startup cost models.",
  excerpt:
    "Five detailed 2026 investment models for a café, neighbourhood restaurant, family restaurant, premium casual room, and fine-dining room — with the numbers behind each.",
  navLabel: "Restaurant Startup Cost in Nepal",
  navDescription: "Five 2026 investment models",
  category: "Investment Guide",
  published: "2026-11-10",
  updated: "2026-11-10",
  readingMinutes: 70,
  wordCount: 17500,
  author: {
    name: "Chef Mani Bista",
    role: "Private chef · Kathmandu",
    path: "/story",
    image: images.portrait,
  },
  image: images.atWork,
  keywords: [
    "restaurant licence fees in Nepal",
    "restaurant registration in Nepal",
    "restaurant food licence Nepal",
    "liquor licence fee Nepal",
    "restaurant tax rate Nepal",
    "foreign investment in Nepal restaurant",
    "commercial kitchen equipment price Nepal",
    "restaurant equipment suppliers Nepal",
    "restaurant startup cost in Nepal",
    "cost to open a restaurant in Nepal",
    "restaurant investment Nepal",
    "restaurant startup budget Nepal",
    "cafe startup cost Nepal",
    "restaurant cost Kathmandu",
    "restaurant licence cost Nepal",
    "restaurant equipment cost Nepal",
    "restaurant working capital Nepal",
    "restaurant break-even Nepal",
    "restaurant construction cost Nepal",
    "restaurant business plan Nepal 2026",
  ],
} as const;

export const articleSections: ArticleSection[] = [
  {
    id: "industry",
    number: "01",
    title: "The Nepali restaurant industry in 2026",
    shortTitle: "The industry in 2026",
  },
  {
    id: "research",
    number: "02",
    title: "Market research and feasibility",
    shortTitle: "Research and feasibility",
  },
  {
    id: "concept",
    number: "03",
    title: "Building a concept that can survive",
    shortTitle: "Concept and positioning",
  },
  {
    id: "budget",
    number: "04",
    title: "The startup budget",
    shortTitle: "The startup budget",
  },
  {
    id: "location",
    number: "05",
    title: "Choosing the right location",
    shortTitle: "Location strategy",
  },
  {
    id: "kitchen",
    number: "06",
    title: "Kitchen design, equipment, and infrastructure",
    shortTitle: "Kitchen and infrastructure",
  },
  {
    id: "legal",
    number: "07",
    title: "Registration, licensing, and compliance",
    shortTitle: "Registration and licensing",
  },
  {
    id: "menu",
    number: "08",
    title: "Menu costing and pricing",
    shortTitle: "Menu costing and pricing",
  },
  {
    id: "people",
    number: "09",
    title: "Hiring, training, and labour law",
    shortTitle: "Hiring and labour law",
  },
  {
    id: "operations",
    number: "10",
    title: "SOPs and daily operations",
    shortTitle: "SOPs and operations",
  },
  {
    id: "technology",
    number: "11",
    title: "Technology, payments, and data",
    shortTitle: "Technology and systems",
  },
  {
    id: "marketing",
    number: "12",
    title: "Marketing, launch, and filling the room",
    shortTitle: "Marketing and launch",
  },
  {
    id: "finance",
    number: "13",
    title: "Financial management and unit economics",
    shortTitle: "Financial management",
  },
  {
    id: "first-90-days",
    number: "14",
    title: "The first 90 days",
    shortTitle: "The first 90 days",
  },
  {
    id: "growth",
    number: "15",
    title: "Growth, second outlets, and exit options",
    shortTitle: "Growth and exit",
  },
  {
    id: "faq",
    number: "16",
    title: "Frequently asked questions",
    shortTitle: "FAQ",
  },
  {
    id: "sources",
    number: "17",
    title: "Sources and further reading",
    shortTitle: "Sources",
  },
];

export const startupCostSections: ArticleSection[] = [
  {
    id: "investment-reality",
    number: "01",
    title: "What a restaurant really costs in 2026",
    shortTitle: "The investment reality",
  },
  {
    id: "method",
    number: "02",
    title: "How this guide was researched",
    shortTitle: "Research method",
  },
  {
    id: "cost-drivers",
    number: "03",
    title: "What drives startup cost in Nepal",
    shortTitle: "Cost drivers",
  },
  {
    id: "models",
    number: "04",
    title: "Five investment models, from café to fine dining",
    shortTitle: "Five investment models",
  },
  {
    id: "property",
    number: "05",
    title: "Property, rent, and deposits",
    shortTitle: "Property and rent",
  },
  {
    id: "construction",
    number: "06",
    title: "Renovation, construction, and building works",
    shortTitle: "Construction and renovation",
  },
  {
    id: "interiors",
    number: "07",
    title: "Interiors, furniture, and the guest experience",
    shortTitle: "Interiors and furniture",
  },
  {
    id: "kitchen",
    number: "08",
    title: "Real Commercial Kitchen Equipment Prices in Nepal",
    shortTitle: "Kitchen equipment prices",
  },
  {
    id: "refrigeration-ventilation-fire",
    number: "09",
    title: "Refrigeration, ventilation, and fire safety",
    shortTitle: "Refrigeration and safety",
  },
  {
    id: "utilities",
    number: "10",
    title: "Electrical, plumbing, water, and gas",
    shortTitle: "Utilities and services",
  },
  {
    id: "compliance",
    number: "11",
    title: "Government Licences, Tax and Regulatory Costs for Restaurants in Nepal",
    shortTitle: "Licences, tax and regulation",
  },
  {
    id: "technology",
    number: "12",
    title: "POS, payments, and technology",
    shortTitle: "POS and technology",
  },
  {
    id: "inventory-working-capital",
    number: "13",
    title: "Opening inventory and working capital",
    shortTitle: "Inventory and working capital",
  },
  {
    id: "staffing",
    number: "14",
    title: "Recruitment, training, and payroll",
    shortTitle: "Staffing and payroll",
  },
  {
    id: "marketing",
    number: "15",
    title: "Pre-opening marketing and launch",
    shortTitle: "Pre-opening marketing",
  },
  {
    id: "viability",
    number: "16",
    title: "Break-even, sales targets, and viability",
    shortTitle: "Break-even and viability",
  },
  {
    id: "funding",
    number: "17",
    title: "Funding, debt, and undercapitalisation",
    shortTitle: "Funding and risk",
  },
  {
    id: "geography",
    number: "18",
    title: "Kathmandu, secondary cities, and tourism markets",
    shortTitle: "Geographic differences",
  },
  {
    id: "cost-control",
    number: "19",
    title: "The cost-control checklist",
    shortTitle: "Cost-control checklist",
  },
  {
    id: "faq",
    number: "20",
    title: "Frequently asked questions",
    shortTitle: "FAQ",
  },
  {
    id: "sources",
    number: "21",
    title: "Sources and further reading",
    shortTitle: "Sources",
  },
];

export const publishedArticles = [
  startupCostGuide,
  restaurantGuide,
] as const;

export const businessNavigation = [
  {
    label: "All Guides",
    href: "/blog",
    description: "The Journal index",
  },
  ...publishedArticles.map((article) => ({
    label: article.navLabel,
    href: article.path,
    description: article.navDescription,
  })),
];

export const upcomingArticles = [
  {
    title: "The restaurant menu costing workbook",
    description:
      "A fill-in template for recipe yields, plate costs, contribution margins, and menu engineering.",
    category: "Toolkit",
  },
  {
    title: "The Nepal food licensing checklist",
    description:
      "A practical document list for local-level food licensing, renewal, and inspection readiness.",
    category: "Compliance",
  },
  {
    title: "The Kathmandu location scorecard",
    description:
      "How to compare rent, footfall, access, utilities, and lease risk before you sign.",
    category: "Real estate",
  },
  {
    title: "Hiring and training the first team",
    description:
      "Job descriptions, trial shifts, onboarding, and the first two weeks of service training.",
    category: "People",
  },
];
