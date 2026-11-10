export const costLineLabels = [
  "Rent deposit and advance",
  "Renovation and construction",
  "Interior fit-out",
  "Kitchen equipment",
  "Refrigeration",
  "Furniture",
  "Electrical and plumbing",
  "Ventilation",
  "Fire safety",
  "Registration and legal",
  "POS and technology",
  "Opening inventory",
  "Recruitment and training",
  "Pre-opening marketing",
] as const;

type Scenario = "low" | "base" | "high";

type InvestmentModel = {
  id: string;
  name: string;
  shortName: string;
  format: string;
  seats: string;
  seatCount: number;
  team: string;
  averageSpend: string;
  figures: Record<Scenario, number[]>;
  workingCapital: Record<Scenario, number>;
  monthlyFixed: Record<Scenario, number>;
  bufferMonths: Record<Scenario, number>;
  note: string;
};

export const investmentModels: InvestmentModel[] = [
  {
    id: "cafe",
    name: "Small café",
    shortName: "Café",
    format: "Compact café or bakehouse",
    seats: "12–24",
    seatCount: 20,
    team: "3–5",
    averageSpend: "NPR 350–550",
    figures: {
      low: [0.15, 0.3, 0.35, 0.3, 0.15, 0.2, 0.1, 0.08, 0.03, 0.04, 0.05, 0.08, 0.03, 0.08],
      base: [0.25, 0.6, 0.7, 0.55, 0.3, 0.4, 0.2, 0.18, 0.08, 0.08, 0.1, 0.15, 0.08, 0.15],
      high: [0.4, 1.1, 1.2, 0.9, 0.5, 0.7, 0.35, 0.35, 0.15, 0.15, 0.18, 0.3, 0.15, 0.3],
    },
    workingCapital: { low: 0.75, base: 1.4, high: 2.5 },
    monthlyFixed: { low: 0.25, base: 0.35, high: 0.5 },
    bufferMonths: { low: 3, base: 4, high: 5 },
    note: "A small footprint keeps rent and fit-out down, but a café still needs proper extraction, refrigeration, water, drainage, and a compliant wash area. The low case assumes a second-generation space and a restrained build.",
  },
  {
    id: "neighbourhood",
    name: "Small neighbourhood restaurant",
    shortName: "Neighbourhood",
    format: "All-day neighbourhood dining room",
    seats: "24–40",
    seatCount: 32,
    team: "6–10",
    averageSpend: "NPR 550–750",
    figures: {
      low: [0.25, 0.5, 0.6, 0.6, 0.3, 0.4, 0.2, 0.15, 0.05, 0.06, 0.08, 0.15, 0.08, 0.12],
      base: [0.45, 1.0, 1.2, 1.1, 0.55, 0.8, 0.4, 0.35, 0.12, 0.12, 0.15, 0.3, 0.15, 0.25],
      high: [0.6, 1.5, 1.6, 1.4, 0.7, 1.0, 0.55, 0.55, 0.2, 0.2, 0.25, 0.5, 0.25, 0.4],
    },
    workingCapital: { low: 1.35, base: 2.6, high: 4.5 },
    monthlyFixed: { low: 0.45, base: 0.65, high: 0.75 },
    bufferMonths: { low: 3, base: 4, high: 6 },
    note: "This is the most common first full-service format: a modest dining room, a compact kitchen, and a team large enough to cover service without relying on the owner for every shift.",
  },
  {
    id: "family",
    name: "Medium family restaurant",
    shortName: "Family restaurant",
    format: "Family-oriented full-service restaurant",
    seats: "40–60",
    seatCount: 50,
    team: "10–18",
    averageSpend: "NPR 750–1,000",
    figures: {
      low: [0.45, 0.9, 1.2, 1.1, 0.5, 0.8, 0.35, 0.3, 0.1, 0.1, 0.12, 0.3, 0.15, 0.25],
      base: [0.8, 1.8, 2.4, 2.0, 0.9, 1.5, 0.7, 0.65, 0.25, 0.2, 0.25, 0.6, 0.3, 0.5],
      high: [1.1, 2.5, 3.0, 2.8, 1.2, 2.0, 1.0, 1.0, 0.4, 0.35, 0.4, 0.9, 0.5, 0.8],
    },
    workingCapital: { low: 2.7, base: 5.2, high: 8.0 },
    monthlyFixed: { low: 0.9, base: 1.3, high: 1.33 },
    bufferMonths: { low: 3, base: 4, high: 6 },
    note: "A family restaurant carries more seating, more staff, and a larger back-of-house. The high case assumes a more complex kitchen, a longer build, and a six-month cash buffer.",
  },
  {
    id: "premium-casual",
    name: "Premium casual dining",
    shortName: "Premium casual",
    format: "Design-led premium casual room",
    seats: "60–90",
    seatCount: 80,
    team: "18–30",
    averageSpend: "NPR 1,200–1,600",
    figures: {
      low: [0.8, 1.8, 2.5, 2.0, 0.9, 1.5, 0.6, 0.6, 0.2, 0.15, 0.2, 0.5, 0.3, 0.5],
      base: [1.4, 3.0, 4.5, 3.5, 1.5, 2.8, 1.2, 1.2, 0.4, 0.3, 0.4, 1.0, 0.6, 1.0],
      high: [1.8, 4.0, 6.0, 4.5, 2.0, 3.5, 1.6, 1.8, 0.6, 0.5, 0.6, 1.4, 0.8, 1.5],
    },
    workingCapital: { low: 4.8, base: 9.2, high: 15.0 },
    monthlyFixed: { low: 1.6, base: 2.3, high: 2.5 },
    bufferMonths: { low: 3, base: 4, high: 6 },
    note: "Premium casual is where design, service, and kitchen complexity begin to compound. The high case is not a fine-dining budget; it is a well-finished room with a larger team and a longer launch runway.",
  },
  {
    id: "fine-dining",
    name: "Premium fine dining",
    shortName: "Fine dining",
    format: "Chef-led fine-dining room",
    seats: "60–100",
    seatCount: 90,
    team: "25–45",
    averageSpend: "NPR 2,500–3,500",
    figures: {
      low: [1.2, 2.5, 4.0, 3.5, 1.5, 2.5, 1.0, 1.0, 0.3, 0.2, 0.3, 0.8, 0.5, 1.0],
      base: [2.0, 4.5, 7.0, 6.0, 2.5, 4.5, 2.0, 2.0, 0.7, 0.4, 0.6, 1.5, 1.0, 2.0],
      high: [3.0, 6.0, 10.0, 8.0, 3.5, 6.5, 3.0, 3.5, 1.2, 0.7, 1.0, 2.5, 1.5, 3.0],
    },
    workingCapital: { low: 8.4, base: 16.0, high: 20.0 },
    monthlyFixed: { low: 2.8, base: 4.0, high: 5.0 },
    bufferMonths: { low: 3, base: 4, high: 4 },
    note: "Fine dining is a different business model, not a more expensive version of the same one. The kitchen, service ratio, glassware, linen, acoustics, and training all carry a premium, and the sales line has to support it.",
  },
];

const round = (value: number) => Math.round(value * 100) / 100;

export function subtotal(model: InvestmentModel, scenario: Scenario) {
  return round(model.figures[scenario].reduce((sum, value) => sum + value, 0));
}

export function contingency(model: InvestmentModel, scenario: Scenario) {
  return round(subtotal(model, scenario) * 0.1);
}

export function preOpening(model: InvestmentModel, scenario: Scenario) {
  return round(subtotal(model, scenario) + contingency(model, scenario));
}

export function totalInvestment(model: InvestmentModel, scenario: Scenario) {
  return round(preOpening(model, scenario) + model.workingCapital[scenario]);
}

export function modelRows(model: InvestmentModel) {
  const rows: string[][] = model.figures.low.map((_, index) => [
    costLineLabels[index],
    model.figures.low[index].toFixed(2),
    model.figures.base[index].toFixed(2),
    model.figures.high[index].toFixed(2),
  ]);

  rows.push([
    "Subtotal",
    subtotal(model, "low").toFixed(2),
    subtotal(model, "base").toFixed(2),
    subtotal(model, "high").toFixed(2),
  ]);
  rows.push([
    "Contingency (10%)",
    contingency(model, "low").toFixed(2),
    contingency(model, "base").toFixed(2),
    contingency(model, "high").toFixed(2),
  ]);
  rows.push([
    "Pre-opening subtotal",
    preOpening(model, "low").toFixed(2),
    preOpening(model, "base").toFixed(2),
    preOpening(model, "high").toFixed(2),
  ]);
  rows.push([
    "Working capital",
    model.workingCapital.low.toFixed(2),
    model.workingCapital.base.toFixed(2),
    model.workingCapital.high.toFixed(2),
  ]);
  rows.push([
    "Total investment",
    totalInvestment(model, "low").toFixed(2),
    totalInvestment(model, "base").toFixed(2),
    totalInvestment(model, "high").toFixed(2),
  ]);

  return rows;
}

export const modelSummaryRows = investmentModels.map((model) => [
  model.name,
  model.format,
  model.seats,
  model.team,
  `NPR ${totalInvestment(model, "low").toFixed(2)}m`,
  `NPR ${totalInvestment(model, "base").toFixed(2)}m`,
  `NPR ${totalInvestment(model, "high").toFixed(2)}m`,
]);

export const workingCapitalRows = investmentModels.map((model) => [
  model.name,
  `NPR ${model.monthlyFixed.low.toFixed(2)}m / ${model.monthlyFixed.base.toFixed(2)}m / ${model.monthlyFixed.high.toFixed(2)}m`,
  `${model.bufferMonths.low} / ${model.bufferMonths.base} / ${model.bufferMonths.high}`,
  `NPR ${model.workingCapital.low.toFixed(2)}m / ${model.workingCapital.base.toFixed(2)}m / ${model.workingCapital.high.toFixed(2)}m`,
]);

export const operatingAssumptions = [
  {
    model: "Small café",
    spend: 450,
    variable: 32,
    fixed: 0.35,
    seats: 20,
  },
  {
    model: "Small neighbourhood restaurant",
    spend: 650,
    variable: 33,
    fixed: 0.65,
    seats: 32,
  },
  {
    model: "Medium family restaurant",
    spend: 850,
    variable: 34,
    fixed: 1.3,
    seats: 50,
  },
  {
    model: "Premium casual dining",
    spend: 1400,
    variable: 35,
    fixed: 2.3,
    seats: 80,
  },
  {
    model: "Premium fine dining",
    spend: 3000,
    variable: 38,
    fixed: 4.0,
    seats: 90,
  },
];

export function breakEven(model: (typeof operatingAssumptions)[number]) {
  return model.fixed / (1 - model.variable / 100);
}

export function targetSales(model: (typeof operatingAssumptions)[number]) {
  return model.fixed / (1 - model.variable / 100 - 0.15);
}

export function coversPerDay(model: (typeof operatingAssumptions)[number]) {
  return (targetSales(model) * 1_000_000) / model.spend / 30;
}

export function coversPerSeat(model: (typeof operatingAssumptions)[number]) {
  return coversPerDay(model) / model.seats;
}

export function simplePayback(modelName: string) {
  const model = investmentModels.find((item) => item.name === modelName);
  const assumption = operatingAssumptions.find((item) => item.model === modelName);
  if (!model || !assumption) return 0;
  const annualProfit = targetSales(assumption) * 12 * 0.15;
  return totalInvestment(model, "base") / annualProfit;
}

export const viabilityRows = operatingAssumptions.map((model) => [
  model.model,
  `NPR ${model.spend.toLocaleString("en-US")}`,
  `${model.variable}%`,
  `NPR ${model.fixed.toFixed(2)}m`,
  `NPR ${breakEven(model).toFixed(2)}m`,
  `NPR ${targetSales(model).toFixed(2)}m`,
  `${Math.round(coversPerDay(model))}`,
  `${coversPerSeat(model).toFixed(1)}`,
  `${simplePayback(model.model).toFixed(1)} yrs`,
]);

export const modelOperatingRows = investmentModels.map((model) => [
  model.name,
  model.format,
  model.seats,
  model.team,
  model.averageSpend,
  model.note,
]);

export const startupCostFaqs = [
  {
    question: "How much does it cost to open a restaurant in Nepal in 2026?",
    answer:
      "There is no single market price. This guide's five planning models range from NPR 2.88–9.90 million for a small café, NPR 5.24–15.17 million for a small neighbourhood restaurant, NPR 9.98–27.75 million for a medium family restaurant, NPR 18.61–48.66 million for premium casual dining, and NPR 30.73–78.74 million for fine dining. The base cases are NPR 5.60m, NPR 10.23m, NPR 19.34m, NPR 34.28m, and NPR 56.37m. These are analytical envelopes, not quotations or averages.",
  },
  {
    question: "Is NPR 5 million enough to open a restaurant in Nepal?",
    answer:
      "It can be enough for a small café or a very restrained neighbourhood restaurant in a favourable second-generation space, but only if the rent, fit-out, kitchen, compliance, and working-capital lines all fit inside the budget. In this guide, NPR 5 million sits below the base case for a small neighbourhood restaurant and inside the low-to-base range for a café. The honest answer depends on the site and the scope, not the headline number.",
  },
  {
    question: "What is the biggest cost of opening a restaurant in Nepal?",
    answer:
      "It varies by format, but rent and deposit, renovation and fit-out, and kitchen equipment usually dominate the pre-opening budget. Working capital can be the largest single line in a full-service restaurant because it has to carry several months of fixed costs before sales stabilise. In the fine-dining model, working capital alone is NPR 8.40–20.00 million.",
  },
  {
    question: "How much working capital should a restaurant have?",
    answer:
      "A common planning starting point is three to six months of cash fixed costs, plus the timing gap for VAT, supplier payments, and receivables. A café with low fixed costs may need three to four months; a fine-dining room with a large team may need four to six. The right number depends on the launch plan and the evidence for the sales ramp, not a generic percentage.",
  },
  {
    question: "How much does a restaurant licence cost in Nepal?",
    answer:
      "Official fees and local charges vary. Business registration at OCR follows capital slabs; PAN is free; VAT registration depends on turnover; the ward or municipal permit is often NPR 5,000–25,000; the food licence is a local-level fee valid for two years; fire safety is commonly budgeted at NPR 10,000–30,000; and a liquor licence plus excise registration can push total bar compliance into the NPR 50,000–200,000 range. Verify every figure with the relevant authority for your site.",
  },
  {
    question: "How much does restaurant equipment cost in Nepal?",
    answer:
      "Published supplier packages are a useful starting point but not a market average. GAI has advertised a compact kitchen setup at NPR 515,555, a café kitchen setup at NPR 1,000,000, and a bar setup at NPR 1,120,111. Installation, utilities, ventilation, refrigeration, and compliance can add substantially. Get a written scope and at least three quotations for your actual menu.",
  },
  {
    question: "Is it cheaper to open a café or a restaurant?",
    answer:
      "A café is usually cheaper because it needs fewer seats, a smaller kitchen, and a smaller team. In this guide, the café base case is NPR 5.60 million versus NPR 10.23 million for a small neighbourhood restaurant and NPR 19.34 million for a medium family restaurant. But a café with a full production kitchen and a large dining room can cost more than a simple restaurant.",
  },
  {
    question: "How long does it take to open a restaurant in Nepal?",
    answer:
      "A simple café in a second-generation space can open in a few months; a full-service restaurant with structural work, a new kitchen, and licensing can take much longer. The critical path is usually the lease, building approvals, electrical upgrade, ventilation route, kitchen lead time, and licensing. Build a realistic schedule with contingency, and do not start rent before the fit-out is ready.",
  },
  {
    question: "What is the break-even sales target for a restaurant in Nepal?",
    answer:
      "Break-even sales = monthly fixed costs ÷ (1 − variable cost percentage). In the guide's base cases, the monthly break-even sales are about NPR 0.51m for a café, NPR 0.97m for a small neighbourhood restaurant, NPR 1.97m for a medium family restaurant, NPR 3.54m for premium casual, and NPR 6.45m for fine dining. These are planning scenarios, not benchmarks for a specific site.",
  },
  {
    question: "Can a foreigner open a restaurant in Nepal?",
    answer:
      "Foreign investment is possible but regulated. The Foreign Investment and Technology Transfer Act, 2075 applies, with minimum investment thresholds, sector classification, negative-list restrictions, and approval or recording through the Department of Industry, the Investment Board where applicable, and Nepal Rastra Bank. The general non-IT minimum is NPR 20 million per investor, but food-service guidance is sometimes stated at NPR 50 million. Confirm the current route with DOI, IBN, and NRB before investing.",
  },
];
