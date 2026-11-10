import { Faq } from "@/components/faq";
import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  PullQuote,
  SourceLink,
  SourceList,
} from "../../blocks";
import { startupCostFaqs, viabilityRows } from "./data";

const sources = [
  {
    title: "National Hotel and Restaurant Survey 2023/24",
    publisher: "National Statistics Office, Government of Nepal",
    date: "December 2024",
    href: "https://giwmscdnone.gov.np/media/pdf_upload/Hotel%20and%20restaurant%20final%20report_vyvvh6g.pdf",
  },
  {
    title: "National Hotel and Restaurant Survey 2023/24 — microdata catalogue",
    publisher: "National Statistics Office",
    date: "2024",
    href: "https://microdata.nsonepal.gov.np/index.php/catalog/150",
  },
  {
    title: "Nepal Tourism Insights — December 2025",
    publisher: "Nepal Tourism Board",
    date: "January 2026",
    href: "https://trade.ntb.gov.np/wp-content/uploads/2026/01/Nepal-Tourism-Insights-December.pdf",
  },
  {
    title: "Renting Commercial Space in Nepal: A Practical Guide",
    publisher: "Thulo Bazaar",
    date: "2026",
    href: "https://thulobazaar.com.np/en/blog/renting-commercial-space-nepal-guide",
  },
  {
    title: "Commercial property for rent in Kathmandu",
    publisher: "MLS Nepal",
    date: "2026",
    href: "https://www.mlsnepal.com/commercial-for-rent/kathmandu",
  },
  {
    title: "Commercial construction cost in Nepal",
    publisher: "Yeti Home Construction",
    date: "2026",
    href: "https://www.yetihomeconstruction.com/commercial-construction-nepal.html",
  },
  {
    title: "Interior design cost in Nepal: 2026 room-by-room breakdown",
    publisher: "Basobaas",
    date: "2026",
    href: "https://basobaas.com/blog/interior-design-cost-nepal-2026-room-breakdown",
  },
  {
    title: "Dining chairs",
    publisher: "Rhinoland Furniture",
    date: "2026",
    href: "https://rhinolandfurniture.com/dining-chairs",
  },
  {
    title: "Commercial kitchen and bar setup packages",
    publisher: "GAI",
    date: "2026",
    href: "https://www.gai.com.np/",
  },
  {
    title: "How to Register a Company in Nepal: Complete Guide 2026",
    publisher: "CompanyDartaNepal",
    date: "2026",
    href: "https://companydartanepal.com/guides/company-registration-in-nepal",
  },
  {
    title: "How to Register a Cafe or Restaurant in Nepal: Licenses, Cost & Steps",
    publisher: "UdhamSathi",
    date: "2026",
    href: "https://udhamsathi.com/blog/cafe-restaurant-registration-nepal",
  },
  {
    title: "How to Open a Cafe in Nepal",
    publisher: "Attorney Nepal",
    date: "2026",
    href: "https://www.attorneynepal.com/publications/how-to-open-a-cafe-in-nepal",
  },
  {
    title: "Liquor licence cost in Nepal",
    publisher: "CorporateNP",
    date: "2026",
    href: "https://corporatenp.com/post/liquor-license-cost-nepal",
  },
  {
    title: "Liquor Business Registration in Nepal: Licences, Fees and Process",
    publisher: "Niti Partners",
    date: "October 2026",
    href: "https://nitipartners.com/liquor-business-registration-nepal",
  },
  {
    title: "Food Hygiene and Quality Act, 2081 (Act No. 1 of 2024)",
    publisher: "Nepal Law Commission / UNEP LEAP",
    date: "2024",
    href: "https://leap.unep.org/en/countries/np/national-legislation/food-hygiene-and-quality-act-2081-act-no-1-2024",
  },
  {
    title: "Labour Act 2074 and related notices",
    publisher: "Department of Labour, Government of Nepal",
    date: "2025",
    href: "https://dol.gov.np/site/notice/112",
  },
  {
    title: "Social Security Fund",
    publisher: "Social Security Fund, Government of Nepal",
    date: "2026",
    href: "https://ssf.gov.np/",
  },
  {
    title: "Inland Revenue Department",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://ird.gov.np/",
  },
  {
    title: "Office of the Company Registrar",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://ocr.gov.np/",
  },
  {
    title: "Nepal Law Commission",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://lawcommission.gov.np/",
  },
  {
    title: "Restaurant POS pricing",
    publisher: "BhojanX",
    date: "2026",
    href: "https://bhojanx.com/pricing",
  },
  {
    title: "Best Restaurant & Cafe Software in Nepal (2026 Ranking)",
    publisher: "UdhamSathi",
    date: "November 2026",
    href: "https://udhamsathi.com/blog/best-restaurant-cafe-software-nepal",
  },
  {
    title: "INTEX IT-405F heavy-duty POS cash drawer",
    publisher: "Standard Computer",
    date: "2026",
    href: "https://standardcomputer.com.np/product/intex-brand-cash-drawer",
  },
  {
    title: "Fire extinguishers",
    publisher: "First Aid Nepal",
    date: "2026",
    href: "https://www.firstaidnepal.com/product/category/fire-extinguishers-portable-trolley-mounted",
  },
  {
    title: "NEA tariff rates 2083/84",
    publisher: "NepaCalc",
    date: "2026",
    href: "https://nepacalc.com/electricity/nea-tariff-rates",
  },
  {
    title: "Nepal Electricity Authority",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://www.nea.org.np/",
  },
  {
    title: "No more service charge anywhere, top court says",
    publisher: "The Kathmandu Post",
    date: "January 2023",
    href: "https://kathmandupost.com/money/2023/01/27/no-more-service-charge-anywhere-top-court-says",
  },
  {
    title: "Nepal Rastra Bank",
    publisher: "Central Bank of Nepal",
    date: "2026",
    href: "https://nrb.org.np/",
  },
  {
    title: "Department of Industry",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://doind.gov.np/",
  },
  {
    title: "Investment Board Nepal",
    publisher: "Government of Nepal",
    date: "2026",
    href: "https://ibn.gov.np/",
  },
];

export function StartupCostPartFour() {
  return (
    <>
      <ArticleSection
        id="viability"
        number="16"
        title="Break-even, sales targets, and viability"
      >
        <p>
          A startup budget tells you what the project costs. A viability model
          tells you what the project has to earn. The link between the two is
          the sales target: the monthly revenue that covers fixed costs, pays
          for variable costs, and leaves a profit that can repay the investment.
        </p>

        <Callout variant="note" title="The break-even formula">
          <p>
            Break-even sales = monthly fixed costs ÷ (1 − variable cost
            percentage). To target a 15% profit margin before tax, divide fixed
            costs by (1 − variable cost percentage − 15%). Both formulas are
            planning tools, not forecasts.
          </p>
        </Callout>

        <p>
          The table below uses the base-case fixed costs from the five models,
          an illustrative average spend per cover, and a variable cost
          assumption. It then calculates break-even sales, the sales required
          for a 15% pre-tax margin, the covers per day at that target, the turns
          per seat per day, and a simple payback. Every input can be replaced
          with your own evidence.
        </p>

        <DataTable
          caption="Illustrative break-even and payback model, base case"
          head={[
            "Model",
            "Average spend",
            "Variable cost",
            "Monthly fixed",
            "Break-even sales",
            "15% target sales",
            "Covers/day",
            "Covers/seat/day",
            "Simple payback",
          ]}
          rows={viabilityRows}
        />

        <Callout variant="warning" title="These are not market benchmarks">
          <p>
            Average spend, variable cost, and fixed cost are planning inputs. A
            restaurant with a different menu, service style, rent, or team will
            produce a different answer. The value of the table is the
            relationship between the numbers, not the numbers themselves.
          </p>
        </Callout>

        <ArticleSubhead>What the targets mean in practice</ArticleSubhead>

        <p>
          A café targeting NPR 0.66 million a month at an average spend of NPR
          450 needs about 49 covers a day. A 20-seat room can do that with 2.5
          turns a day. A fine-dining room targeting NPR 8.51 million a month at
          NPR 3,000 needs about 95 covers a day; a 90-seat room is running at
          roughly one turn a day. Those are very different operating models, and
          they require different kitchens, teams, and marketing.
        </p>

        <p>
          The covers-per-seat figure is a useful reality check. If a 40-seat
          restaurant needs four turns a day to break even, the concept may be
          underpriced, over-rented, or dependent on a demand pattern the
          neighbourhood cannot support. If a 90-seat fine-dining room needs
          fewer than one turn a day, the risk is not covers; it is average spend,
          cost control, and the ability to fill the room at the right price.
        </p>

        <ArticleSubhead>Sensitivity: the medium family restaurant</ArticleSubhead>

        <p>
          The base case for the medium family restaurant assumes NPR 2.55
          million in monthly target sales, a 34% variable cost, and NPR 1.30
          million in monthly fixed costs. That produces about NPR 4.59 million
          of annual pre-tax profit before financing and owner drawings. The
          sensitivity table shows how quickly that profit moves.
        </p>

        <DataTable
          caption="Sensitivity example — medium family restaurant base case"
          head={["Shock", "Annual impact", "Remaining annual profit", "What it means"]}
          rows={[
            [
              "Sales 10% below target",
              "−NPR 2.02m contribution",
              "≈ NPR 2.57m",
              "A 10% shortfall removes about 44% of the planned profit",
            ],
            [
              "Variable cost rises 3.4 points",
              "−NPR 1.04m",
              "≈ NPR 3.55m",
              "Food, beverage, and delivery cost control matter more than a small rent saving",
            ],
            [
              "Rent rises 10% (on NPR 0.80m/month)",
              "−NPR 0.96m",
              "≈ NPR 3.63m",
              "A rent negotiation is a profit decision, not a monthly admin task",
            ],
            [
              "Opening delayed three months",
              "≈ NPR 5.05m cash",
              "Delayed and lower",
              "Three months of fixed costs plus lost profit is a capital problem",
            ],
          ]}
        />

        <p>
          The delay scenario is the one that catches most first-time operators.
          A three-month delay does not just add three months of rent. It adds
          payroll, utilities, insurance, and the lost profit that the original
          plan assumed. The project needs a schedule contingency as well as a
          cost contingency.
        </p>

        <ArticleSubhead>Viability tests before you commit</ArticleSubhead>

        <Checklist
          items={[
            "The sales target is supported by evidence, not just a full-room assumption.",
            "The average spend is tested against a real menu, not a rounded guess.",
            "The variable cost includes food, beverage, packaging, delivery commissions, and payment fees.",
            "The fixed cost includes rent, payroll, utilities, marketing, insurance, and administration.",
            "The model survives a 20% sales shortfall for at least three months.",
            "The model survives a 10% cost overrun on the fit-out.",
            "The model survives a three-month opening delay.",
            "The payback is acceptable before tax, financing, and owner drawings.",
            "There is a plan for the first slow season, not just the opening month.",
            "The owner has a walk-away point if the evidence does not support the plan.",
          ]}
        />

        <PullQuote quote="A restaurant does not need a perfect forecast. It needs enough margin of safety to survive a wrong one." />
      </ArticleSection>

      <ArticleSection
        id="funding"
        number="17"
        title="Funding, debt, and undercapitalisation"
      >
        <p>
          Most restaurant funding conversations focus on the build. The more
          important question is how the business survives the first six months
          after the build. Long-term assets should be funded with long-term
          capital. Working capital should be funded with working capital, not
          with a short-term loan that falls due as the restaurant is still
          finding its feet.
        </p>

        <DataTable
          caption="Funding sources and trade-offs"
          head={["Source", "Best use", "Trade-off"]}
          rows={[
            [
              "Owner equity",
              "Fit-out, equipment, and opening runway",
              "Risk stays with the owner; no repayment pressure",
            ],
            [
              "Family or friends",
              "Gap funding or working capital",
              "Relationship risk; document the terms even when it feels informal",
            ],
            [
              "Bank term loan",
              "Long-term equipment or leasehold improvements",
              "Collateral, personal guarantee, processing fees, and repayment schedule",
            ],
            [
              "Supplier credit",
              "Short-term inventory",
              "Not a substitute for working capital; due dates can tighten quickly",
            ],
            [
              "Landlord contribution",
              "Fit-out or electrical upgrade",
              "Usually recovered through rent or a longer lease",
            ],
            [
              "Revenue-based or alternative finance",
              "Specific growth or working-capital need",
              "Higher cost and less flexibility; understand the repayment mechanism",
            ],
          ]}
        />

        <ArticleSubhead>Debt service coverage</ArticleSubhead>

        <p>
          Before borrowing, calculate whether the business can cover its debt
          service from cash flow. A common planning discipline is to require
          EBITDA to cover annual principal and interest at least 1.25–1.5 times.
          That is not a Nepali regulatory rule; it is a lender-style sanity
          check. If the base case only covers debt service once, there is no room
          for a slow month.
        </p>

        <Callout variant="warning" title="The undercapitalisation spiral">
          <p>
            It starts with a build that costs more than planned. The owner cuts
            the marketing budget, delays hiring, and uses supplier credit to pay
            for fit-out. The restaurant opens late, the team is undertrained, and
            the first month is slow. The owner uses VAT cash to pay payroll. The
            next tax return becomes a crisis. By the time the room finds demand,
            the business has no cash to serve it.
          </p>
        </Callout>

        <ArticleSubhead>What lenders and investors will ask</ArticleSubhead>

        <Checklist
          items={[
            "What is the total project cost, including working capital and contingency?",
            "How much equity is the owner putting in?",
            "What evidence supports the sales forecast?",
            "What is the break-even sales level and the margin of safety?",
            "What is the payback period and the debt service coverage?",
            "What security, collateral, or personal guarantee is available?",
            "What happens if the opening is delayed by three months?",
            "Who is the operator, and what is their relevant experience?",
            "What are the lease term, rent, and renewal options?",
            "What is the exit or refinancing plan?",
          ]}
        />

        <p>
          Foreign investment adds another layer: FITTA 2075, sector
          classification, the negative list, minimum investment thresholds, DOI
          or IBN approval, and NRB recording. The general non-IT minimum is NPR
          20 million per investor, but food-service guidance is sometimes stated
          at NPR 50 million. Confirm the current route before structuring the
          company or transferring funds.
        </p>

        <PullQuote quote="Fund the opening, not just the build. The build is the part the guest can see; the runway is the part that keeps it open." />
      </ArticleSection>

      <ArticleSection
        id="geography"
        number="18"
        title="Kathmandu, secondary cities, and tourism markets"
      >
        <p>
          Nepal is not one restaurant market. Kathmandu Valley has the deepest
          demand, the highest rents, the strongest labour pool, and the most
          competition. Secondary cities have lower rents and lower spend, but
          they also have fewer suppliers, smaller talent pools, and less room for
          a concept that depends on novelty. Tourism towns can be extraordinary
          in season and brutal in the off-season.
        </p>

        <DataTable
          caption="Geographic differences that change the investment case"
          head={["Market", "Demand profile", "Cost and operating reality"]}
          rows={[
            [
              "Kathmandu Valley",
              "Deepest and most diverse demand; high competition; strong delivery and corporate base",
              "Highest rent and fit-out cost; deepest labour pool; more inspections and professional services",
            ],
            [
              "Pokhara",
              "Tourism, domestic leisure, and lakeside footfall; strong seasonality",
              "Lakeside rent is high; off-lakeside is cheaper; labour is seasonal; weather affects covers",
            ],
            [
              "Chitwan / Bharatpur",
              "Domestic tourism, family dining, and local commercial demand",
              "Lower rent than Kathmandu; logistics depend on supplier routes; weekend demand can be strong",
            ],
            [
              "Butwal / Bhairahawa",
              "Trade, local commerce, and growing urban demand",
              "Lower rent; smaller fine-dining market; supplier depth is improving",
            ],
            [
              "Birgunj",
              "Cross-border trade and local commercial activity",
              "Lower rent; strong local networks; logistics and labour differ from the hills",
            ],
            [
              "Biratnagar",
              "Eastern commercial hub with a large local base",
              "Lower rent than Kathmandu; local competition; industrial and family demand",
            ],
            [
              "Dharan / Itahari",
              "Local loyalty, students, and regional travel",
              "Lower rent; limited specialist labour; a strong value proposition matters",
            ],
            [
              "Small tourism towns",
              "Seasonal visitors and a small resident base",
              "Low rent but low volume; high logistics cost; staffing is difficult; owner-operated model often necessary",
            ],
          ]}
        />

        <ArticleSubhead>Kathmandu is not one market either</ArticleSubhead>

        <DataTable
          caption="Kathmandu Valley submarkets"
          head={["Submarket", "Demand profile", "Published rent signal (NPR/sq ft/month)"]}
          rows={[
            [
              "Thamel and Durbar Marg",
              "Tourist and prime commercial footfall",
              "150–400",
            ],
            [
              "Jhamsikhel, Lazimpat, Baluwatar",
              "Residential, embassy, and professional spending",
              "80–200",
            ],
            [
              "Putalisadak and New Road",
              "Office, retail, and transit-linked lunch demand",
              "100–250",
            ],
            [
              "Kalopul, Chabahil, Boudha",
              "Dense residential and local high-street demand",
              "40–90",
            ],
            [
              "Koteshwor, Jadibuti, Imadol, Harisiddhi",
              "Outer residential growth and delivery-led demand",
              "30–70",
            ],
            [
              "Bhaktapur and outer Lalitpur",
              "Heritage tourism, local demand, and lower rents",
              "25–70",
            ],
          ]}
        />

        <ArticleSubhead>Tourism is a multiplier, not a guarantee</ArticleSubhead>

        <p>
          Nepal recorded 1,158,459 tourist arrivals in 2025 and 1,147,548 in
          2024, according to the{" "}
          <SourceLink href="https://trade.ntb.gov.np/wp-content/uploads/2026/01/Nepal-Tourism-Insights-December.pdf">
            Nepal Tourism Board&apos;s December 2025 insights
          </SourceLink>
          . That was about 96.8% of the 2019 level. The top source markets were
          India (292,438), the United States (112,316), China (95,480), the
          United Kingdom (58,684), and Bangladesh (57,545). Those numbers
          describe national arrivals, not demand for a specific restaurant in a
          specific season.
        </p>

        <p>
          A tourism-facing restaurant has to survive the calendar, not the
          average. The lease is paid for twelve months; the peak may be six. The
          team has to be recruited, trained, and retained through the slow
          season. The menu and pricing have to work for both the visitor and the
          resident. If the business only works in the peak, it is not a
          year-round restaurant; it is a seasonal event with a lease.
        </p>

        <Checklist
          items={[
            "Model revenue by month, not by annual average.",
            "Identify the low season and the cash buffer required to survive it.",
            "Confirm whether the lease, staff, and suppliers can flex with seasonality.",
            "Test whether local residents will use the room outside the tourist peak.",
            "Check the logistics cost of sourcing in a smaller market.",
            "Confirm the labour pool and housing options for staff.",
            "Do not copy Kathmandu rent, spend, or staffing assumptions into a smaller market.",
            "Visit in both peak and off-season before committing.",
          ]}
        />

        <Callout variant="tip" title="The best market is the one that can support the format">
          <p>
            A premium concept in a low-volume town is not automatically a bad
            idea, but it needs a specific demand base: tourism, a corporate
            campus, a hospital, a university, or a wealthy local catchment. Name
            that base and evidence it before you sign the lease.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="cost-control"
        number="19"
        title="The cost-control checklist"
      >
        <p>
          Cost control is not a single negotiation. It is a set of decisions
          made before the first invoice: what to build, what to buy, what to
          lease, what to phase, and what not to do at all. The goal is not the
          cheapest restaurant. It is the restaurant that can open, trade, and
          repay its capital without running out of cash.
        </p>

        <DataTable
          caption="Where to cut and where not to cut"
          head={["Cut or phase", "Protect or upgrade", "Why"]}
          rows={[
            [
              "Decorative finishes and feature joinery",
              "Ventilation, drainage, electrical capacity",
              "The invisible systems are expensive to fix after opening",
            ],
            [
              "Imported furniture and lighting",
              "Commercial-grade seating and durable floors",
              "Replacement cost and downtime are higher than the initial saving",
            ],
            [
              "A large opening menu",
              "A tight menu the kitchen can execute",
              "Fewer stations, less stock, less waste, faster service",
            ],
            [
              "A second outlet or delivery brand",
              "The first room's working capital",
              "Growth amplifies a broken unit, not a fixed one",
            ],
            [
              "Paid media before the room is ready",
              "Photography, map listing, and a booking path",
              "Demand you cannot serve damages the reputation",
            ],
            [
              "A full-time team before volume",
              "Cross-training and a flexible roster",
              "Protect service without carrying unused payroll",
            ],
          ]}
        />

        <ArticleSubhead>Procurement rules</ArticleSubhead>

        <Checklist
          items={[
            "Get three written quotations for every scope above NPR 500,000.",
            "Compare the scope, not just the total.",
            "Ask for a site visit and a named project contact.",
            "Confirm delivery, installation, commissioning, training, and warranty.",
            "Ask for spare parts and service response times.",
            "Check references from similar restaurants, not just similar equipment.",
            "Negotiate payment milestones tied to delivery and acceptance.",
            "Keep a contingency for the variation orders you have not seen yet.",
            "Document every change in writing.",
            "Do not pay the full contract before commissioning.",
          ]}
        />

        <ArticleSubhead>Value engineering without breaking the business</ArticleSubhead>

        <DataTable
          caption="Value-engineering options and their risks"
          head={["Option", "Saving", "Risk", "Verdict"]}
          rows={[
            [
              "Second-generation kitchen equipment",
              "30–50% of new price",
              "Warranty, parts, gas conversion, electrical safety, hidden wear",
              "Use only with inspection and a repair reserve",
            ],
            [
              "Phase the dining room",
              "Lower initial fit-out",
              "The room may look unfinished; seating capacity is delayed",
              "Useful if the kitchen and core services are complete",
            ],
            [
              "Reduce the opening menu",
              "Lower equipment, stock, and labour",
              "May narrow the appeal if the concept depends on breadth",
              "Usually the best early saving",
            ],
            [
              "Standard modular joinery",
              "Lower fabrication cost",
              "Less custom fit; may waste space",
              "Good for back-of-house and secondary areas",
            ],
            [
              "Defer decorative lighting",
              "Lower initial spend",
              "The room may feel unfinished at night",
              "Phase only if the base lighting is good",
            ],
            [
              "Cheaper ventilation",
              "Lower capex",
              "Heat, smoke, noise, grease, fire risk, neighbour complaints",
              "Do not cut",
            ],
          ]}
        />

        <ArticleSubhead>The 20-point cost-control checklist</ArticleSubhead>

        <Checklist
          items={[
            "A written project budget with every line owned by a named person.",
            "A 10% contingency that is not spent before opening.",
            "Three quotations for fit-out, kitchen, refrigeration, and ventilation.",
            "A lease review before signing, including reinstatement and escalation.",
            "A services survey before the design is frozen.",
            "A kitchen layout tested against the menu and peak-hour flow.",
            "A ventilation route approved by the landlord and fire adviser.",
            "A refrigeration plan with backup power for critical circuits.",
            "A fire-safety scope that includes training and maintenance.",
            "A licensing checklist with renewal dates.",
            "A payroll model that includes SSF, festival allowance, and overtime.",
            "A pre-opening training plan with paid trial shifts.",
            "A launch budget tied to measurable channels.",
            "An opening inventory plan of one to two weeks, not three months.",
            "A working-capital buffer of three to six months of fixed costs.",
            "A VAT sub-ledger that is not used for operations.",
            "A supplier credit schedule with due dates.",
            "A monthly review of food, labour, and prime cost.",
            "A sensitivity test for lower sales and higher costs.",
            "A walk-away point if the evidence does not support the investment.",
          ]}
        />

        <Callout variant="tip" title="The last 10%">
          <p>
            The last 10% of the budget is where projects get into trouble. It is
            the extra joinery, the upgraded light, the imported chair, the second
            oven, and the launch party that was not planned. If the last 10% is
            not in the contingency, it is being funded by the working capital.
          </p>
        </Callout>

        <p>
          A restaurant is a capital project, an operating business, and a
          hospitality experience at the same time. The budget has to serve all
          three. The best number is not the lowest one. It is the one that lets
          the room open properly, serve consistently, and survive the months
          before the market knows it exists.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" number="20" title="Frequently asked questions">
        <p>
          These answers use the planning models in this guide. They are not
          quotations, legal advice, or a substitute for local verification.
        </p>
        <Faq items={startupCostFaqs} />
      </ArticleSection>

      <ArticleSection
        id="sources"
        number="21"
        title="Sources and further reading"
      >
        <p>
          The sources below were used for the official fees, market signals,
          published prices, and legal references in this guide. Where a figure
          is an analytical estimate, it is labelled as such in the text.
        </p>
        <SourceList sources={sources} />
        <Callout variant="note" title="A note on dates and prices">
          <p>
            Prices, fees, and rules change. The article was published on 10
            November 2026. Before committing capital, confirm the current fee,
            tax rate, licence condition, and supplier quotation with the relevant
            authority or professional adviser.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
