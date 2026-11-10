import Link from "next/link";
import { Faq } from "@/components/faq";
import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  FinanceGrid,
  SourceList,
} from "../blocks";

const faqs = [
  {
    question: "How much does it cost to open a restaurant in Nepal?",
    answer:
      "There is no single number. As an illustrative planning range, a small neighbourhood restaurant might require NPR 3–8 million, a mid-market full-service restaurant NPR 10–23 million, and a premium or destination restaurant NPR 25–58 million, excluding land or building purchase. The total depends on the fit-out, equipment, deposit, key money, licensing, opening inventory, pre-opening payroll, and working capital. Get written quotes and keep a 10–15% contingency.",
  },
  {
    question: "What licences do I need to open a restaurant in Nepal?",
    answer:
      "Most restaurants need business registration, a PAN, a local ward operating permit and signboard tax, and a food business licence from the local municipality or rural municipality under the Food Safety and Quality Act 2081. If you serve alcohol, you also need a liquor licence. VAT registration applies once taxable turnover crosses the threshold, and labour and Social Security Fund registration apply when you hire staff. Confirm the exact list with your local authority.",
  },
  {
    question: "How long does it take to open a restaurant in Nepal?",
    answer:
      "A realistic timeline is often three to six months from signing the lease to opening, depending on the condition of the premises, the fit-out, utility upgrades, licensing, and hiring. A shell space with major construction can take longer. A site that is already fitted out for food service can be faster. Build the licensing and inspection time into the plan rather than assuming it happens in parallel.",
  },
  {
    question: "Can a foreigner own a restaurant in Nepal?",
    answer:
      "Foreign investment is possible in many sectors under the Foreign Investment and Technology Transfer Act, but it requires approval, compliance with the negative list and sector rules, and generally a minimum investment of NPR 20 million per investor for non-IT projects. Whether a restaurant is treated as an eligible industry or a service business depends on the classification and the current rules. Confirm the route with the Department of Industry, Nepal Rastra Bank, and a local adviser before committing capital.",
  },
  {
    question: "Do I need to register for VAT as a restaurant?",
    answer:
      "VAT registration is mandatory once taxable turnover exceeds NPR 3 million for services or mixed goods and services over the previous 12 months. The standard rate is 13%, and registration is required within 30 days of crossing the threshold. Some categories, including liquor, must register regardless of turnover. Many restaurants register voluntarily from the start to issue tax invoices to corporate clients and claim input credit.",
  },
  {
    question: "Is a 10% service charge still allowed in Nepal?",
    answer:
      "In January 2023, the Supreme Court struck down the mandatory 10% service charge under section 87(3) of the Labour Act 2074, and earlier court decisions questioned adding VAT and service charge on top of the displayed menu price. Practice and enforcement have varied. A new restaurant should not build its payroll or profit model around a mandatory service charge. Price the menu to cover your costs and take professional advice on how VAT is displayed and remitted.",
  },
  {
    question: "How many staff do I need for a restaurant?",
    answer:
      "It depends on the format, menu, and volume. A common starting point for full service is one server per 12–20 seats, with runners at peak, and one kitchen worker per 20–30 covers depending on prep intensity. A quick-service format can run leaner. Start with enough people to execute the standard safely, then use sales and service data to adjust the rota.",
  },
  {
    question: "What is a good food cost percentage?",
    answer:
      "Many full-service restaurants plan for a food cost of roughly 28–35% of food revenue, with beverages often lower. The right number depends on rent, labour, average spend, and volume. A lower percentage is not automatically better if it prices you out of the market. Track contribution margin and prime cost alongside food cost, and review the menu mix monthly.",
  },
  {
    question: "How do I choose the right location?",
    answer:
      "Evaluate the trade area, not just the rent. Check who lives and works nearby, when they are there, what they can afford, and where they eat now. Test visibility, access, parking, deliveries, power, water, drainage, ventilation, waste, and lease terms. Model the conservative revenue case at that location. If the conservative case cannot cover fixed costs, the site is not right.",
  },
  {
    question: "Why do so many restaurants fail?",
    answer:
      "There is rarely one cause. Common failures include undercapitalisation, a concept that does not fit the market, a bad lease or location, weak cost control, inconsistent food or service, and no plan for the slow season. Restaurants often fail slowly before they fail suddenly: the cash buffer runs out while the owner is still waiting for the busy season.",
  },
];

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
    title: "Nepal Tourism Statistics 2025",
    publisher: "Ministry of Culture, Tourism and Civil Aviation",
    date: "2026",
    href: "https://giwmscdnone.gov.np/media/pdf_upload/Nepal%20tourism%20statistics%202025_ibddtm6.pdf",
  },
  {
    title: "Inland Revenue Department — tax, VAT, and excise administration",
    publisher: "Government of Nepal",
    href: "https://ird.gov.np/",
  },
  {
    title: "Office of the Company Registrar",
    publisher: "Government of Nepal",
    href: "https://ocr.gov.np/",
  },
  {
    title: "Department of Food Technology and Quality Control",
    publisher: "Government of Nepal",
    href: "https://dftqc.gov.np/",
  },
  {
    title: "Minimum remuneration notice",
    publisher: "Department of Labour and Occupational Safety",
    date: "2082 BS",
    href: "https://dol.gov.np/site/notice/112",
  },
  {
    title: "Ministry of Labour, Employment and Social Security",
    publisher: "Government of Nepal",
    href: "https://moless.gov.np/",
  },
  {
    title: "Social Security Fund",
    publisher: "Government of Nepal",
    href: "https://ssf.gov.np/",
  },
  {
    title: "Nepal Law Commission — consolidated laws and Acts",
    publisher: "Government of Nepal",
    href: "https://lawcommission.gov.np/",
  },
  {
    title: "No more service charge anywhere, top court says",
    publisher: "The Kathmandu Post",
    date: "27 January 2023",
    href: "https://kathmandupost.com/money/2023/01/27/no-more-service-charge-anywhere-top-court-says",
  },
  {
    title: "Row rages over who can and cannot take service charge after landmark ruling",
    publisher: "The Kathmandu Post",
    date: "5 February 2023",
    href: "https://kathmandupost.com/money/2023/02/05/row-rages-over-who-can-and-cannot-take-service-charge",
  },
  {
    title: "Nepal Rastra Bank — foreign exchange and investment recording",
    publisher: "Nepal Rastra Bank",
    href: "https://nrb.org.np/",
  },
  {
    title: "Department of Industry — foreign investment and industry registration",
    publisher: "Government of Nepal",
    href: "https://doind.gov.np/",
  },
  {
    title: "Investment Board Nepal",
    publisher: "Government of Nepal",
    href: "https://ibn.gov.np/",
  },
  {
    title: "Kathmandu Metropolitan City",
    publisher: "Kathmandu Metropolitan City",
    href: "https://kathmandu.gov.np/",
  },
];

export function PartFour() {
  return (
    <>
      <ArticleSection
        id="finance"
        number="13"
        title="Financial management and unit economics"
      >
        <p>
          A restaurant can be busy and still lose money. Covers are not profit.
          Revenue is not cash. A good month is not a good business. Financial
          management is the discipline of seeing the difference between those
          statements before the bank account tells you.
        </p>

        <ArticleSubhead>The three statements you actually need</ArticleSubhead>

        <p>
          You do not need a finance team to run a restaurant, but you need three
          views of the business. The profit and loss statement tells you whether
          the operation is making money. The cash-flow statement tells you
          whether you can pay your bills. The balance sheet tells you what you
          own and what you owe. A monthly management pack with all three, plus a
          short commentary, is enough for most independent restaurants.
        </p>

        <DataTable
          caption="What each statement answers"
          head={["Statement", "Core question", "Key lines for a restaurant"]}
          rows={[
            [
              "Profit and loss",
              "Did we make a profit this period?",
              "Revenue, food cost, labour, rent, utilities, marketing, EBITDA",
            ],
            [
              "Cash flow",
              "Did cash increase or decrease, and why?",
              "Opening cash, receipts, supplier payments, payroll, VAT, loan, closing cash",
            ],
            [
              "Balance sheet",
              "What do we own and owe?",
              "Cash, inventory, equipment, deposits, payables, loans, equity",
            ],
          ]}
        />

        <ArticleSubhead>Unit economics: the numbers behind one cover</ArticleSubhead>

        <p>
          Unit economics explain whether the business works at the level of a
          single guest. Start with average spend, food cost per cover, labour cost
          per cover, and contribution per cover. Then multiply by covers. If the
          contribution per cover is too thin, no amount of marketing will fix the
          underlying model. You will just lose money faster.
        </p>

        <DataTable
          caption="Illustrative annual model for a 50-seat restaurant"
          head={["Line", "Amount", "Share of revenue"]}
          rows={[
            ["Covers per day", "75", "—"],
            ["Average net spend", "NPR 700", "—"],
            ["Operating days", "360", "—"],
            ["Revenue", "NPR 18.90m", "100%"],
            ["Food cost", "NPR 6.05m", "32%"],
            ["Labour cost", "NPR 4.54m", "24%"],
            ["Rent", "NPR 2.08m", "11%"],
            ["Utilities", "NPR 0.76m", "4%"],
            ["Marketing", "NPR 0.57m", "3%"],
            ["Other operating costs", "NPR 1.13m", "6%"],
            ["EBITDA", "NPR 3.78m", "20%"],
          ]}
        />

        <p>
          This model is illustrative, not a benchmark. It assumes 75 covers a day
          in a 50-seat room, which is 1.5 turns per seat per day, at an average
          net spend of NPR 700. Change any assumption and the result changes. If
          the average spend falls to NPR 600, revenue drops to NPR 16.2 million
          and EBITDA falls to about NPR 1.08 million at the same cost ratios. If
          food cost rises to 36%, EBITDA falls by about NPR 756,000. The model is
          a tool for seeing sensitivity, not for proving a point.
        </p>

        <FinanceGrid
          items={[
            {
              label: "Prime cost",
              value: "56%",
              note: "Food 32% + labour 24%",
            },
            {
              label: "Break-even revenue",
              value: "NPR 13.34m",
              note: "Fixed costs ÷ 68% contribution margin",
            },
            {
              label: "Break-even covers",
              value: "53/day",
              note: "At NPR 700 average spend, 360 days",
            },
            {
              label: "Simple payback",
              value: "4.0 years",
              note: "NPR 15m investment ÷ NPR 3.78m EBITDA",
            },
          ]}
        />

        <p>
          The break-even calculation uses fixed costs of NPR 9.07 million and a
          contribution margin of 68%, because food is treated as the main
          variable cost. In reality, some labour, utilities, and payment fees also
          vary with volume. The model is a simplification, but it is a useful
          one: it tells you how much revenue you need before the business starts
          contributing to profit and investment recovery.
        </p>

        <ArticleSubhead>Cash flow is the survival metric</ArticleSubhead>

        <p>
          Profit is an accounting result. Cash is what pays the supplier, the
          landlord, the staff, and the tax office. A restaurant can be profitable
          on paper and still run out of cash if it carries too much inventory,
          collects too slowly, or pays taxes and loans in the same week. Build a
          13-week cash-flow forecast and update it every week. It is the single
          most useful financial habit for a new operator.
        </p>

        <Checklist
          items={[
            "Opening cash balance for the week.",
            "Expected cash sales, card settlements, and wallet settlements.",
            "Supplier payments due, including any credit terms.",
            "Payroll, SSF, and festival allowance obligations.",
            "VAT and other tax payments.",
            "Rent, utilities, internet, and other fixed costs.",
            "Loan repayments and interest.",
            "Owner drawings, if any.",
            "Closing cash and the minimum buffer you need.",
          ]}
        />

        <ArticleSubhead>The KPIs that matter</ArticleSubhead>

        <p>
          Too many metrics create noise. A short dashboard, reviewed weekly,
          keeps the team focused on the few numbers that drive the business.
          Benchmarks are useful as a starting point, but they are not universal.
          A destination restaurant can run a higher labour cost than a
          quick-service restaurant; a bar-led concept can run a lower food cost.
          Compare your numbers to your own history and your concept, not to a
          generic industry average.
        </p>

        <DataTable
          caption="A practical restaurant KPI set"
          head={["KPI", "How to calculate it", "What to watch"]}
          rows={[
            [
              "Covers per seat per day",
              "Daily covers ÷ seats",
              "Capacity utilisation and demand",
            ],
            [
              "Average spend",
              "Net revenue ÷ covers",
              "Pricing, menu mix, beverage attachment",
            ],
            [
              "Food cost %",
              "Food cost ÷ food revenue",
              "Purchasing, waste, portioning, price changes",
            ],
            [
              "Labour cost %",
              "Total labour cost ÷ revenue",
              "Scheduling, productivity, overtime",
            ],
            [
              "Prime cost %",
              "(Food + labour) ÷ revenue",
              "The core operating efficiency",
            ],
            [
              "RevPASH",
              "Revenue ÷ (seats × operating hours)",
              "Revenue per available seat hour",
            ],
            [
              "EBITDA margin",
              "EBITDA ÷ revenue",
              "Operating profitability before financing and tax",
            ],
            [
              "Repeat guest rate",
              "Returning guests ÷ total guests",
              "Whether the experience earns a second visit",
            ],
          ]}
        />

        <ArticleSubhead>Tax and compliance in the financial model</ArticleSubhead>

        <p>
          The standard corporate income tax rate is 25%. A 30% rate applies to
          entities carrying on the business of liquor or beer, and possibly to
          other specified categories. Whether a restaurant with a bar falls into
          that classification should be confirmed with a tax adviser. VAT is 13%
          on taxable supplies, with registration thresholds of NPR 5 million for
          goods and NPR 3 million for services or mixed supplies. Advance tax
          instalments, payroll taxes, SSF, and local taxes all belong in the cash
          forecast.
        </p>

        <Callout variant="legal" title="Do not treat tax as a year-end surprise">
          <p>
            VAT, payroll tax, SSF, and advance income tax are recurring cash
            obligations, not annual afterthoughts. Set aside the amounts as you
            earn them, reconcile them monthly, and file on time. Penalties and
            interest are an avoidable cost. If you are unsure about a
            classification, ask before you file, not after.
          </p>
        </Callout>

        <ArticleSubhead>Financial red flags</ArticleSubhead>

        <Checklist
          items={[
            "Revenue is growing but cash is falling.",
            "Food cost is rising without a menu price change.",
            "Labour cost is rising faster than covers.",
            "Discounts and comps are becoming a routine part of service.",
            "Supplier payments are consistently late.",
            "VAT or payroll obligations are being funded from next week’s sales.",
            "The owner is taking cash out to cover personal expenses.",
            "Inventory is growing faster than sales.",
            "The business cannot state its break-even covers.",
          ]}
        />

        <Callout variant="tip" title="Close the month in five days">
          <p>
            A fast close is a competitive advantage. Reconcile sales, count
            inventory, record supplier bills, run payroll, and produce a
            one-page P&amp;L within five working days of month-end. The longer
            the gap, the harder it is to connect a decision to its financial
            result.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="first-90-days"
        number="14"
        title="The first 90 days"
      >
        <p>
          Opening day is not the finish line. It is the first public test of a
          system that has never run under real pressure. The first 90 days are
          for stabilising, listening, and fixing. The restaurants that survive
          are not the ones with the perfect launch. They are the ones that learn
          fastest from an imperfect one.
        </p>

        <ArticleSubhead>The pre-opening countdown</ArticleSubhead>

        <DataTable
          caption="A practical pre-opening timeline"
          head={["Window", "Focus", "Milestones"]}
          rows={[
            [
              "T-12 to T-10 weeks",
              "Design and approvals",
              "Final layout, equipment specification, lease signed, licence applications started",
            ],
            [
              "T-10 to T-8 weeks",
              "Construction",
              "Civil work, electrical, plumbing, ventilation, kitchen installation begins",
            ],
            [
              "T-8 to T-6 weeks",
              "Hiring and systems",
              "Key hires, job descriptions, POS selection, supplier agreements, menu costing",
            ],
            [
              "T-6 to T-4 weeks",
              "Training and testing",
              "Equipment commissioning, staff onboarding, recipe trials, service rehearsals",
            ],
            [
              "T-4 to T-2 weeks",
              "Compliance and marketing",
              "Food licence inspection, fire safety, signage, website, Google profile, launch list",
            ],
            [
              "T-2 weeks",
              "Soft opening",
              "Friends-and-family service, feedback, fix list, final menu",
            ],
            [
              "T-1 week",
              "Final checks",
              "Stock, rota, cash floats, reservations, emergency contacts, opening checklist",
            ],
            [
              "Opening week",
              "Launch",
              "Limited capacity, daily debrief, review requests, rapid fixes",
            ],
          ]}
        />

        <ArticleSubhead>The soft opening is research</ArticleSubhead>

        <p>
          A soft opening should not be a free party for friends. It should be a
          real service with real guests, a limited menu, and a feedback process.
          Invite people who will tell you the truth. Seat fewer tables than you
          expect to handle at full capacity. Time the service. Watch where the
          queue forms, which dishes come back unfinished, and which questions
          guests ask repeatedly. Write it down.
        </p>

        <Checklist
          items={[
            "Run at 50–70% of planned capacity.",
            "Limit the menu to the items you can execute consistently.",
            "Brief every guest that it is a soft opening and ask for honest feedback.",
            "Time order-to-table, table-turn, and payment.",
            "Record stock-outs, comps, voids, and guest complaints.",
            "Debrief with the team after every service.",
            "Fix the top three issues before the next service.",
            "Do not invite the public until the basics are stable.",
          ]}
        />

        <ArticleSubhead>The first 30, 60, and 90 days</ArticleSubhead>

        <DataTable
          caption="What to focus on in each phase"
          head={["Phase", "Primary goal", "Key actions"]}
          rows={[
            [
              "Days 1–30",
              "Stabilise",
              "Protect service standards, fix equipment and workflow issues, reconcile cash daily, listen to every guest",
            ],
            [
              "Days 31–60",
              "Refine",
              "Adjust the menu mix, tighten the rota, improve supplier terms, build review momentum, train weak spots",
            ],
            [
              "Days 61–90",
              "Optimise",
              "Review unit economics, test a second daypart or event, formalise SOPs, plan the next quarter",
            ],
          ]}
        />

        <p>
          The first month is not the time to add a new menu, a new outlet, or a
          new delivery channel. It is the time to make the existing operation
          reliable. Every new variable makes it harder to know what caused a
          problem. Stabilise first, then expand.
        </p>

        <ArticleSubhead>The crisis playbook</ArticleSubhead>

        <p>
          Something will go wrong. A supplier will fail, a refrigerator will
          break, a staff member will resign, a guest will post a damaging review,
          or an inspector will arrive. The difference between a crisis and a
          disaster is whether you have a procedure and a backup.
        </p>

        <DataTable
          caption="Common first-90-day crises and first responses"
          head={["Crisis", "First response", "Prevention"]}
          rows={[
            [
              "Cash shortfall",
              "Cut non-essential spend, delay owner drawings, negotiate supplier terms, review the 13-week forecast",
              "Working-capital buffer, weekly cash forecast, realistic opening budget",
            ],
            [
              "Key staff departure",
              "Activate the bench, redistribute shifts, protect service standards",
              "Cross-training, documented SOPs, fair pay and scheduling",
            ],
            [
              "Supplier failure",
              "Substitute within the menu specification, communicate honestly, source a backup",
              "Two approved suppliers for critical items, par levels",
            ],
            [
              "Food safety incident",
              "Stop service if necessary, isolate the product, seek medical advice, document everything, cooperate with authorities",
              "Temperature logs, allergen protocol, staff training, pest control",
            ],
            [
              "Damaging review",
              "Respond calmly, investigate, invite the guest offline, fix the root cause",
              "Consistent service, check-backs, complaint log, review routine",
            ],
            [
              "Inspection",
              "Welcome the inspector, provide records, take notes, fix issues promptly",
              "Compliance calendar, document folder, daily hygiene checks",
            ],
          ]}
        />

        <ArticleSubhead>Why new restaurants fail in the first year</ArticleSubhead>

        <p>
          The reasons are rarely dramatic. The most common pattern is a business
          that opens with too little working capital, spends more than planned on
          the fit-out, prices the menu below its cost, hires too many people too
          early, and runs out of cash before the busy season. The second most
          common pattern is a concept that is not distinct enough to earn a
          second visit. The third is an owner who is not present enough to see
          what is actually happening.
        </p>

        <Checklist
          items={[
            "The conservative revenue case is covering fixed costs.",
            "The cash buffer is at least three months of operating expenses.",
            "Food and labour costs are within 5 points of the plan.",
            "The top three guest complaints have named owners and fixes.",
            "Every critical task has a trained backup.",
            "The compliance calendar is current.",
            "The menu mix is reviewed weekly.",
            "The owner is reviewing the numbers, not just the room.",
          ]}
        />

        <Callout variant="tip" title="Write the 90-day scorecard before you open">
          <p>
            Choose five numbers you will review at the end of the first 90 days:
            covers per day, average spend, food cost, labour cost, and repeat
            guest rate. Add one qualitative measure: would a guest recommend you
            without being asked? The scorecard keeps the opening from becoming an
            endless series of urgent tasks with no sense of direction.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="growth"
        number="15"
        title="Growth, second outlets, and exit options"
      >
        <p>
          Growth is not the same as success. A second outlet can multiply a good
          business or amplify a broken one. The right time to grow is when the
          first restaurant runs without the owner in the room every night, the
          unit economics are stable, the SOPs are documented, and there is a
          manager who can carry the standard. Until then, growth is usually a
          distraction.
        </p>

        <ArticleSubhead>Earn the right to expand</ArticleSubhead>

        <Checklist
          items={[
            "At least six to twelve months of consistent EBITDA.",
            "Food, labour, and prime cost within the target range for three consecutive months.",
            "A documented SOP library and a trained management team.",
            "A lease with enough remaining term or a renewal option.",
            "A cash buffer that can fund the new outlet without starving the first.",
            "A clear answer to what the second outlet does differently, and why.",
            "A supply chain that can support both locations.",
            "A brand and operating model that guests recognise.",
          ]}
        />

        <ArticleSubhead>Second outlet economics</ArticleSubhead>

        <p>
          A second outlet is not a copy of the first. It has a different trade
          area, different competition, different staff, and possibly a different
          menu and price point. Model it as a new business, with its own
          feasibility study, startup budget, and working capital. Be honest about
          cannibalisation: if the new outlet takes 20% of the first outlet’s
          guests, the incremental revenue is smaller than the headline.
        </p>

        <DataTable
          caption="Questions to answer before signing a second lease"
          head={["Question", "Why it matters"]}
          rows={[
            [
              "Can the first outlet run without the owner for a week?",
              "Tests whether the systems and team are ready.",
            ],
            [
              "Who will manage the new outlet, and are they trained?",
              "Growth fails when management bandwidth is assumed, not planned.",
            ],
            [
              "Does the new trade area need the same concept?",
              "A copy may not fit a different guest mix.",
            ],
            [
              "Can suppliers and the kitchen support two locations?",
              "Supply chain strain shows up as inconsistency.",
            ],
            [
              "What is the payback period in the conservative case?",
              "Protects the first business from overextension.",
            ],
            [
              "What happens if the new outlet underperforms for six months?",
              "Tests the cash buffer and the exit plan.",
            ],
          ]}
        />

        <ArticleSubhead>Alternative growth paths</ArticleSubhead>

        <p>
          A second dining room is only one way to grow. Catering, private dining,
          events, cooking classes, retail products, a cloud kitchen, or a
          consulting arm can use the existing brand, kitchen, and team with less
          capital. Each has a different margin, risk, and operational demand.
          Choose the one that fits your strengths, not the one that sounds most
          impressive.
        </p>

        <DataTable
          caption="Growth formats and their trade-offs"
          head={["Format", "Capital intensity", "Main advantage", "Main risk"]}
          rows={[
            [
              "Second restaurant",
              "High",
              "Same brand, new trade area",
              "Management bandwidth and cannibalisation",
            ],
            [
              "Catering and events",
              "Low to medium",
              "Uses existing kitchen and team",
              "Lumpy demand and logistics",
            ],
            [
              "Private dining",
              "Low",
              "Higher margin per guest, controlled scale",
              "Limited capacity and chef dependency",
            ],
            [
              "Cloud kitchen",
              "Low to medium",
              "Lower rent, delivery reach",
              "Platform commissions and brand invisibility",
            ],
            [
              "Retail products",
              "Medium",
              "Extends the brand beyond the dining room",
              "Packaging, shelf life, distribution",
            ],
            [
              "Cooking classes",
              "Low",
              "Community, content, and ancillary revenue",
              "Scheduling and space constraints",
            ],
          ]}
        />

        <ArticleSubhead>Foreign investment and partnerships</ArticleSubhead>

        <p>
          If growth involves foreign capital, the Foreign Investment and
          Technology Transfer Act 2075 sets the framework. The general minimum
          foreign investment is NPR 20 million per investor for non-IT projects,
          with sector-specific exceptions and a negative list. Approval usually
          runs through the Department of Industry or the Investment Board Nepal,
          followed by company registration and Nepal Rastra Bank recording of the
          capital. Whether a restaurant qualifies as an eligible industry or a
          service business should be confirmed before structuring the deal.
        </p>

        <p>
          A local partner can bring land, licensing knowledge, staff, and
          relationships. A foreign partner can bring capital, systems, and brand
          access. The partnership agreement should cover governance, capital
          calls, profit distribution, related-party transactions, exit rights,
          and dispute resolution. Do not rely on a handshake for a multi-year
          investment.
        </p>

        <ArticleSubhead>Exit options</ArticleSubhead>

        <p>
          A restaurant owner can exit by selling the business, selling the
          lease and assets, bringing in a partner, or closing in an orderly way.
          The value of the business depends on its cash flow, lease, brand,
          equipment, and transferability. A buyer will look at the quality of the
          earnings, the concentration of revenue, the condition of the assets,
          the staff, and the legal compliance. A business that depends entirely
          on the owner is harder to sell.
        </p>

        <DataTable
          caption="What buyers examine"
          head={["Area", "What they want to see"]}
          rows={[
            ["Financials", "Three years of accounts, clean tax filings, reconciled cash"],
            ["Lease", "Remaining term, renewal option, assignment rights, rent level"],
            ["Licences", "Food licence, liquor licence, fire and health compliance"],
            ["People", "Management team, contracts, SSF records, key-person risk"],
            ["Assets", "Equipment condition, maintenance records, ownership"],
            ["Brand", "Reviews, repeat guests, social following, trademarks"],
            ["Liabilities", "Supplier payables, loans, tax dues, disputes"],
          ]}
        />

        <Callout variant="note" title="Build the business you could sell">
          <p>
            Even if you never sell, the disciplines that make a restaurant
            saleable make it easier to run: clean accounts, documented SOPs, a
            capable manager, a healthy lease, and a brand that does not depend
            on the owner’s presence every night. Those are also the conditions
            for a better life as an operator.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="faq" number="16" title="Frequently asked questions">
        <p>
          These are the questions that come up most often in conversations with
          first-time restaurant owners in Nepal. The answers are general and
          should be checked against your specific location, structure, and
          current rules.
        </p>
        <Faq items={faqs} />
      </ArticleSection>

      <ArticleSection
        id="sources"
        number="17"
        title="Sources and further reading"
      >
        <p>
          This guide prioritises official sources and primary reporting. Where
          the law or local practice is unsettled, the text says so rather than
          presenting an estimate as a fact. The sources below are the starting
          point for your own verification.
        </p>

        <SourceList sources={sources} />

        <Callout variant="note" title="A note on dates and local variation">
          <p>
            The national data in this guide is the latest available at the time
            of writing, but it is not real-time. Municipal fees, licensing
            checklists, tax classifications, and inspection practices vary by
            local government and can change. Verify the current position with
            your municipality, the Inland Revenue Department, the Department of
            Food Technology and Quality Control where relevant, the Social
            Security Fund, and a licensed professional before you commit capital.
          </p>
        </Callout>

        <p>
          If you are planning a restaurant in Kathmandu and want to talk through
          the private-dining or chef-led model as an alternative or a first step,
          you can{" "}
          <Link href="/reserve" className="article-inline-link">
            start a conversation here
          </Link>
          . For a broader view of the chef’s approach, see the{" "}
          <Link href="/story" className="article-inline-link">
            story
          </Link>{" "}
          and the{" "}
          <Link href="/experiences" className="article-inline-link">
            experiences
          </Link>
          .
        </p>
      </ArticleSection>
    </>
  );
}
