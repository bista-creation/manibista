import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  PullQuote,
  SourceLink,
} from "../../blocks";
import { investmentModels, workingCapitalRows } from "./data";

const registrationRows = investmentModels.map((model) => [
  model.name,
  `NPR ${model.figures.low[9].toFixed(2)}m`,
  `NPR ${model.figures.base[9].toFixed(2)}m`,
  `NPR ${model.figures.high[9].toFixed(2)}m`,
]);

export function StartupCostPartThree() {
  return (
    <>
      <ArticleSection
        id="compliance"
        number="11"
        title="Registration, licensing, and compliance"
      >
        <p>
          Compliance is a stack, not a single licence. A restaurant may need a
          business registration, a PAN, VAT registration, a local ward or
          municipal operating permit, a food business licence, a signboard
          permit, fire-safety clearance, labour and social-security registration,
          and — if alcohol is served — a liquor licence and excise registration.
          Each has its own authority, fee, renewal, and inspection regime.
        </p>

        <DataTable
          caption="The restaurant compliance stack in Nepal"
          head={["Approval or registration", "Authority", "When it is needed", "Planning note"]}
          rows={[
            [
              "Business registration",
              "Office of the Company Registrar for a private company; district administration for a sole proprietorship or partnership",
              "Before the bank account, leases, and most licences",
              "Private company minimum paid-up capital is NPR 100,000; OCR fees follow capital slabs",
            ],
            [
              "PAN",
              "Inland Revenue Department",
              "After business registration, before invoicing",
              "PAN registration itself is free; keep the certificate and taxpayer details current",
            ],
            [
              "VAT registration",
              "Inland Revenue Department",
              "When turnover crosses the threshold, or voluntarily",
              "The services/mixed threshold is NPR 3 million over a rolling 12 months; goods is NPR 5 million",
            ],
            [
              "Ward or municipal operating permit",
              "Local municipality or ward",
              "Before opening",
              "Fees and document lists vary by local level; budget NPR 5,000–25,000 as a planning range",
            ],
            [
              "Food business licence",
              "Local level under the Food Hygiene and Quality Act, 2081 (2024)",
              "Before handling or serving food",
              "Licences are valid for two years; renewal is due at least 35 days before expiry",
            ],
            [
              "Liquor licence and excise registration",
              "Municipality and Inland Revenue Department",
              "Before selling or serving alcohol",
              "Liquor Act 2031, Excise Duty Act 2058, and Local Government Operation Act 2074 apply; fees vary by category",
            ],
            [
              "Fire safety clearance",
              "Local fire authority or municipality",
              "Before opening and on renewal or inspection",
              "Published planning ranges for restaurant/bar compliance are NPR 10,000–30,000; full systems cost more",
            ],
            [
              "Signboard permit",
              "Municipality or ward",
              "Before installing external signage",
              "Rules on size, illumination, and placement vary by local level",
            ],
            [
              "Labour and social-security registration",
              "Department of Labour and Social Security Fund",
              "Before payroll",
              "SSF contribution is 31% of basic salary: 11% employee and 20% employer",
            ],
            [
              "Tourism licence or star classification",
              "Nepal Tourism Board / Ministry of Tourism",
              "Only for tourist-standard or star-rated establishments",
              "An ordinary restaurant does not automatically need a tourism licence; confirm the intended positioning",
            ],
            [
              "Music or entertainment permission",
              "Local authority and rights organisations",
              "If live or recorded music is part of the offer",
              "Licensing, royalty, and noise rules apply; confirm before programming",
            ],
          ]}
        />

        <ArticleSubhead>Business registration and tax</ArticleSubhead>

        <p>
          A private company is registered at the Office of the Company Registrar.
          The{" "}
          <SourceLink href="https://companydartanepal.com/guides/company-registration-in-nepal">
            published OCR fee schedule
          </SourceLink>{" "}
          for private companies is NPR 1,000 up to NPR 100,000 authorised
          capital, NPR 4,500 from NPR 100,001–500,000, NPR 9,500 from NPR
          500,001–2,500,000, NPR 16,000 from NPR 2,500,001–10,000,000, and NPR
          19,000 from NPR 10,000,001–20,000,000. A sole proprietorship or
          partnership is registered through the district administration and may
          be simpler for a very small café, but it does not separate personal and
          business liability in the same way.
        </p>

        <p>
          VAT is 13%. The threshold for services or mixed supplies is NPR 3
          million over a rolling 12 months; for goods it is NPR 5 million.
          Registration is required within 30 days of crossing the threshold, and
          monthly returns are generally due by the 25th of the following Nepali
          month. Confirm the current rules with the IRD or a tax practitioner
          before you build the cash-flow model.
        </p>

        <Callout variant="legal" title="Corporate tax is not always 25%">
          <p>
            The standard corporate tax rate is 25%, but specified sectors —
            including liquor and beer — can face 30%. A restaurant with a bar may
            be classified differently from a restaurant without one. Confirm the
            classification with a tax adviser before modelling profit after tax.
          </p>
        </Callout>

        <ArticleSubhead>Food licensing</ArticleSubhead>

        <p>
          The Food Hygiene and Quality Act, 2081 (Act No. 1 of 2024) replaced
          the earlier food law. Restaurants, hotels, and caterers are licensed by
          the local level. The licence is valid for two years, renewal is due at
          least 35 days before expiry, and late renewal within six months is
          charged at double the fee. The practical document list varies by
          municipality, so ask the ward office for its current checklist rather
          than relying on a generic online list.
        </p>

        <Checklist
          items={[
            "Business registration certificate and PAN/VAT certificate.",
            "Lease deed or proof of premises, and the landlord's consent where required.",
            "Citizenship or identity documents of the proprietor or directors.",
            "Food business licence application and the current local fee receipt.",
            "Kitchen layout, water source, drainage, and waste arrangements.",
            "Employee health checks or food-handler training records where required.",
            "Fire safety clearance and signboard permission where applicable.",
            "A named person responsible for food safety and hygiene records.",
          ]}
        />

        <ArticleSubhead>Liquor licensing</ArticleSubhead>

        <p>
          Alcohol adds a separate regulatory layer. The Liquor Act 2031, the
          Excise Duty Act 2058, and the Local Government Operation Act 2074
          shape licensing, excise, and local control. A published ordinary
          hotel/restaurant/bar/lodge category fee is around NPR 6,000, but the
          total cost of a compliant bar — including excise registration,
          inspections, legal work, and local conditions — is commonly reported in
          the NPR 50,000–200,000 range. Treat both figures as leads to verify
          with the municipality and IRD.
        </p>

        <Callout variant="warning" title="Do not sell alcohol while the licence is pending">
          <p>
            A liquor licence is not a formality to fix after opening. Selling
            alcohol without the correct licence and excise registration can lead
            to fines, closure, stock seizure, and personal liability. Confirm the
            category, the permitted hours, and the conditions before you order
            stock or print a beverage list.
          </p>
        </Callout>

        <ArticleSubhead>The compliance line in the models</ArticleSubhead>

        <p>
          The models carry a registration and legal line that ranges from NPR
          40,000 for a small café to NPR 700,000 for a fine-dining room. That
          line is deliberately wider than the official fees because it includes
          legal drafting, accounting setup, drawings, inspections, and the
          possibility of professional support. It does not include annual
          accounting, tax filing, or licence renewals.
        </p>

        <DataTable
          caption="Registration and legal allowance in each model, NPR million"
          head={["Model", "Low", "Base", "High"]}
          rows={registrationRows}
        />

        <ArticleSubhead>Service charge is not guaranteed revenue</ArticleSubhead>

        <p>
          In 2023, Nepal&apos;s Supreme Court struck down the mandatory 10%
          service charge that had been collected under the Labour Act. The
          practical market has not become uniform since. Some establishments
          still add a service charge; others have removed it or replaced it with
          a clearly disclosed charge. Do not build a business model that depends
          on a service charge as if it were a statutory entitlement. Treat it as
          a pricing and labour decision that must be disclosed, accounted for,
          and reviewed with a lawyer.
        </p>

        <ArticleSubhead>Foreign investment</ArticleSubhead>

        <p>
          Foreign investment is governed by the Foreign Investment and Technology
          Transfer Act, 2075. The general minimum for non-IT projects is NPR 20
          million per investor, but sector-specific guidance for food service is
          sometimes stated at NPR 50 million. Approval and recording involve the
          Department of Industry, the Investment Board where applicable, and
          Nepal Rastra Bank. The negative list and sector classification matter.
          Confirm the current threshold and approval route with DOI, IBN, and NRB
          before structuring an investment.
        </p>

        <PullQuote quote="A licence is permission to operate. It is not proof that the operation is safe, profitable, or well run." />
      </ArticleSection>

      <ArticleSection
        id="technology"
        number="12"
        title="POS, payments, and technology"
      >
        <p>
          Restaurant software is cheap compared with rent and payroll. Bad
          workflow is expensive. A POS that cannot split a bill, route a kitchen
          order, apply a discount correctly, or produce a VAT-compliant invoice
          creates daily friction that no subscription price can justify.
        </p>

        <DataTable
          caption="Published POS and hardware prices in Nepal, 2026"
          head={["Item", "Published price", "What to verify"]}
          rows={[
            [
              "BhojanX Starter, yearly",
              "NPR 8,000 promotional offer",
              "Standard renewal price, user limits, branch limits, and add-ons",
            ],
            [
              "BhojanX Premium, yearly",
              "NPR 15,000 promotional offer",
              "Inventory, reporting, support, and renewal terms",
            ],
            [
              "TableSathi Basic, yearly",
              "NPR 14,999",
              "Orders, kitchen printing, billing, staff, and reports",
            ],
            [
              "TableSathi Standard, yearly",
              "NPR 22,999",
              "Inventory and additional modules",
            ],
            [
              "Thermal receipt printer",
              "NPR 9,500–14,400; TableSathi supplies one at NPR 12,000",
              "Interface, paper width, warranty, and spare parts",
            ],
            [
              "Cash drawer",
              "Around NPR 11,500",
              "RJ11 compatibility, lock, and build quality",
            ],
            [
              "Tablet or terminal",
              "NPR 20,000–50,000",
              "Processor, battery, ruggedness, and replacement cost",
            ],
          ]}
        />

        <p>
          The{" "}
          <SourceLink href="https://bhojanx.com/pricing">
            BhojanX pricing page
          </SourceLink>{" "}
          states that the promotional annual prices are for eligible new
          subscriptions and that renewal follows the standard price in effect at
          renewal.{" "}
          <SourceLink href="https://udhamsathi.com/blog/best-restaurant-cafe-software-nepal">
            UdhamSathi&apos;s 2026 software comparison
          </SourceLink>{" "}
          lists TableSathi&apos;s annual plans and printer price. These are
          published prices, not a negotiated quote for your configuration.
        </p>

        <ArticleSubhead>What the POS must do before you choose it</ArticleSubhead>

        <Checklist
          items={[
            "Create a VAT-compliant invoice with the correct business details and sequential numbering.",
            "Route orders to the kitchen and bar, with course or seat timing where needed.",
            "Split, merge, transfer, and discount bills without breaking the audit trail.",
            "Handle cash, card, wallet, QR, and delivery orders in one reconciliation.",
            "Track stock by recipe or ingredient, with waste and transfer adjustments.",
            "Export sales, tax, payment, and inventory data without a manual rebuild.",
            "Work offline or degrade gracefully when the internet fails.",
            "Support the number of users, terminals, and branches you expect in 24 months.",
            "Provide role-based permissions and an audit log.",
            "State who owns the data and what happens if you leave.",
          ]}
        />

        <ArticleSubhead>Payments and reconciliation</ArticleSubhead>

        <p>
          Every payment method has a cost and a control risk. Card and wallet
          payments carry merchant discount rates and settlement timing. Cash
          carries theft, counting, and banking risk. Delivery platforms carry
          commissions, menu control, and chargeback risk. The POS should make the
          day&apos;s takings reconcilable to the bank, not just printable.
        </p>

        <DataTable
          caption="Payment controls"
          head={["Method", "What to reconcile", "Control question"]}
          rows={[
            [
              "Cash",
              "Opening float, sales, payouts, bank deposit",
              "Who counts, who verifies, and who can void a bill?",
            ],
            [
              "Card",
              "Terminal batch, settlement, refunds, chargebacks",
              "Are tips and service charges handled correctly?",
            ],
            [
              "Wallet or QR",
              "Provider statement, fees, settlement timing",
              "Is the QR code fixed to the business, not a personal account?",
            ],
            [
              "Delivery platform",
              "Order value, commission, promotions, refunds",
              "Who controls the menu, pricing, and availability?",
            ],
            [
              "Credit account",
              "Customer limit, invoice, due date, collection",
              "Is credit approved by a manager, not a server?",
            ],
          ]}
        />

        <Callout variant="tip" title="Own the data">
          <p>
            Before signing a POS contract, ask for a sample export of sales,
            customers, and inventory data. Confirm that you can take it with you.
            A system that locks your history inside a subscription is a business
            risk, not just a software choice.
          </p>
        </Callout>

        <ArticleSubhead>Network, security, and backup</ArticleSubhead>

        <p>
          A restaurant runs on a small technology estate: POS terminals,
          printers, routers, Wi-Fi, CCTV, payment terminals, maybe a reservation
          system and a delivery tablet. Label the devices, separate the guest
          Wi-Fi from the POS network, change default passwords, restrict admin
          access, and keep an offline backup of the menu and tax settings. The
          goal is not enterprise IT. It is a service that keeps running when the
          internet does not.
        </p>
      </ArticleSection>

      <ArticleSection
        id="inventory-working-capital"
        number="13"
        title="Opening inventory and working capital"
      >
        <p>
          Opening inventory is not working capital. Opening inventory is the
          stock on the shelf when the doors open. Working capital is the cash
          that keeps the business alive while the stock turns, the suppliers are
          paid, the guests pay, and the first slow week arrives. Confusing the
          two is one of the most common reasons a restaurant opens and then
          immediately runs out of money.
        </p>

        <Callout variant="note" title="A working-capital formula">
          <p>
            Working capital = monthly cash fixed costs × buffer months + one-off
            launch costs not yet paid + VAT and tax timing gap + receivables −
            supplier credit. The buffer months should reflect how long it takes
            to reach a stable sales level, not how long the owner hopes it will
            take.
          </p>
        </Callout>

        <p>
          The models use a fixed-cost buffer of three to six months. A café with
          low fixed costs can carry a shorter buffer; a fine-dining room with a
          large team and a long launch runway needs more. The table shows the
          monthly fixed-cost assumption, the buffer months, and the resulting
          working-capital allowance.
        </p>

        <DataTable
          caption="Working-capital allowance by model (low / base / high)"
          head={["Model", "Monthly fixed cost", "Buffer months", "Working capital"]}
          rows={workingCapitalRows}
        />

        <ArticleSubhead>The cash conversion cycle</ArticleSubhead>

        <p>
          A restaurant buys ingredients, pays staff, pays rent, sells a meal, and
          collects the money. The gap between paying and collecting is the cash
          conversion cycle. It gets longer when suppliers demand cash, delivery
          platforms settle weekly, corporate customers pay on credit, and VAT is
          collected before it is remitted.
        </p>

        <DataTable
          caption="Where opening cash gets absorbed"
          head={["Stage", "Cash effect", "What to control"]}
          rows={[
            [
              "Supplier deposits and first orders",
              "Cash out before the first sale",
              "Negotiate credit, avoid over-ordering, and stage deliveries",
            ],
            [
              "Opening inventory",
              "Cash converted into stock",
              "Buy one to two weeks of stock, not three months",
            ],
            [
              "Pre-opening payroll",
              "Cash out before revenue",
              "Hire in phases and train against a live service plan",
            ],
            [
              "Rent and utilities",
              "Fixed cash out every month",
              "Start the lease when the fit-out is ready, not when you sign",
            ],
            [
              "VAT collected",
              "Cash held temporarily, not profit",
              "Separate VAT cash and remit on time",
            ],
            [
              "Receivables",
              "Cash delayed",
              "Set credit limits, deposits, and collection ownership",
            ],
            [
              "Supplier credit",
              "Cash deferred",
              "Track due dates and do not use credit as working capital",
            ],
          ]}
        />

        <ArticleSubhead>Opening inventory: how much is enough?</ArticleSubhead>

        <p>
          There is no universal opening stock level. It depends on the menu,
          shelf life, supplier lead time, storage capacity, and how quickly the
          kitchen can restock. A sensible starting point is one to two weeks of
          expected stock for perishables and a tightly controlled buffer for dry
          goods and beverages. Over-ordering feels safe; it ties up cash and
          creates waste.
        </p>

        <Checklist
          items={[
            "Build a par level for every high-value ingredient and beverage.",
            "Confirm supplier lead times, minimum order quantities, and delivery days.",
            "Set a receiving checklist for quantity, quality, temperature, and invoice matching.",
            "Use first-in, first-out storage and label every container.",
            "Record waste daily, not at the end of the month.",
            "Run a stock count weekly for high-value items and monthly for the full store.",
            "Separate guest-facing stock from staff or training stock.",
            "Do not use VAT cash to fund inventory.",
          ]}
        />

        <ArticleSubhead>Undercapitalisation is a design flaw</ArticleSubhead>

        <p>
          A restaurant does not usually fail on opening night. It fails when the
          owner has spent the last rupee on the fit-out, the first month is
          slower than planned, the supplier wants cash, and payroll is due. The
          warning signs are predictable: no owner salary in the budget, no
          contingency, no working capital, optimistic sales, delayed opening,
          and a lease that starts before the room is ready.
        </p>

        <Checklist
          items={[
            "The budget has no line for the owner's salary or drawings.",
            "Contingency has already been spent before opening.",
            "Working capital is less than three months of fixed costs.",
            "The opening date assumes every contractor, supplier, and licence arrives on time.",
            "Sales are forecast at full capacity from month one.",
            "The lease starts before the fit-out is complete.",
            "VAT collected is being used to pay suppliers.",
            "There is no plan for a 20% sales shortfall.",
          ]}
        />

        <Callout variant="warning" title="The VAT timing trap">
          <p>
            VAT collected on sales is not your money. If the business uses it to
            fund payroll or inventory, the next return becomes a crisis. Keep
            VAT in a separate ledger or bank sub-account and remit it on time.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="staffing"
        number="14"
        title="Recruitment, training, and payroll"
      >
        <p>
          The first payroll is a pre-opening cost. A team that starts on opening
          day has not been trained, has not practiced the menu, and has not
          learned how the room works. The result is a service that looks
          understaffed even when the roster is full. Hire in phases, train
          against the real service flow, and budget the wages before the first
          guest arrives.
        </p>

        <DataTable
          caption="Indicative staffing and payroll planning ranges"
          head={["Model", "Seats", "Team", "Monthly payroll planning range", "Pre-opening payroll"]}
          rows={[
            ["Small café", "12–24", "3–5", "NPR 0.10–0.18m", "4–6 weeks"],
            ["Small neighbourhood", "24–40", "6–10", "NPR 0.18–0.32m", "6–8 weeks"],
            ["Medium family", "40–60", "10–18", "NPR 0.35–0.60m", "6–8 weeks"],
            ["Premium casual", "60–90", "18–30", "NPR 0.65–1.10m", "8–10 weeks"],
            ["Fine dining", "60–100", "25–45", "NPR 1.10–2.00m", "8–12 weeks"],
          ]}
        />

        <p>
          Those payroll ranges are planning estimates, not salary quotations.
          Actual payroll depends on the roles, experience, shift pattern, service
          style, and whether the owner works in the business. A fine-dining room
          with a large kitchen brigade and a high service ratio will sit at the
          top of its range or above it.
        </p>

        <ArticleSubhead>The statutory floor</ArticleSubhead>

        <p>
          Nepal&apos;s minimum wage is NPR 19,550 per month, made up of NPR
          12,170 basic and NPR 7,380 dearness allowance, effective 17 July 2025.
          The daily rate is NPR 754, the hourly rate is NPR 101, and the
          part-time hourly rate is NPR 107. The Social Security Fund contribution
          is 31% of basic salary: 11% employee and 20% employer.
        </p>

        <p>
          The Labour Act 2074 sets an eight-hour day and 48-hour week, overtime
          at 1.5 times the normal rate, with maxima of four hours per day and 24
          hours per week. It provides for a one-month basic festival allowance,
          a probation period of up to six months, and 30 days&apos; notice. These
          are legal minimums, not a complete payroll model. Confirm the current
          rules and your obligations with the{" "}
          <SourceLink href="https://dol.gov.np/site/notice/112">
            Department of Labour
          </SourceLink>{" "}
          and the{" "}
          <SourceLink href="https://ssf.gov.np/">
            Social Security Fund
          </SourceLink>
          .
        </p>

        <DataTable
          caption="Fully loaded employment cost"
          head={["Cost element", "How it is calculated", "Why it matters"]}
          rows={[
            [
              "Gross salary",
              "Basic + dearness + role allowance",
              "The number most candidates quote",
            ],
            [
              "SSF employer contribution",
              "20% of basic salary",
              "A real payroll cost, not a deduction from the employee only",
            ],
            [
              "Festival allowance",
              "One month of basic salary",
              "Budget annually, not as a surprise",
            ],
            [
              "Overtime",
              "1.5× normal rate within legal limits",
              "Understaffing shows up here first",
            ],
            [
              "Meals, uniforms, and training",
              "Per person per month",
              "Part of the real cost of a trained team",
            ],
            [
              "Recruitment and onboarding",
              "Advertising, interviews, trial shifts, documents",
              "A recurring cost if turnover is high",
            ],
          ]}
        />

        <ArticleSubhead>Hiring timeline</ArticleSubhead>

        <DataTable
          caption="A practical pre-opening hiring sequence"
          head={["When", "What to do", "Why"]}
          rows={[
            [
              "10–12 weeks before opening",
              "Finalise the org chart, job descriptions, and salary bands",
              "Prevents hiring by improvisation",
            ],
            [
              "8 weeks before",
              "Recruit the manager, head chef, and key leads",
              "They help build the systems and train the team",
            ],
            [
              "6 weeks before",
              "Recruit the core kitchen and service team",
              "Enough time for documents, uniforms, and basic training",
            ],
            [
              "4 weeks before",
              "Start paid training, menu familiarisation, and trial shifts",
              "Service practice before paying guests",
            ],
            [
              "2 weeks before",
              "Run full mock services and invite feedback",
              "Find the bottlenecks while the room is forgiving",
            ],
            [
              "Opening week",
              "Stagger start dates and keep a trainer on the floor",
              "Protect the standard during the first rush",
            ],
          ]}
        />

        <Callout variant="tip" title="Train the opening, not just the menu">
          <p>
            A new team needs to know how to open the room, set the stations,
            handle a complaint, close the till, and hand over to the next shift.
            Menu knowledge is only one part of readiness. Build a written opening
            and closing checklist before training begins.
          </p>
        </Callout>

        <p>
          Labour cost is usually targeted at roughly 25–35% of sales in a
          full-service restaurant, but that is a planning range, not a law. A
          high-service fine-dining room may run higher. A counter-service café
          may run lower. The number has to be tested against the average spend,
          covers, and service style in the model.
        </p>
      </ArticleSection>

      <ArticleSection
        id="marketing"
        number="15"
        title="Pre-opening marketing and launch"
      >
        <p>
          A soft opening is a stress test, not a party. Its purpose is to find
          the failures — the slow ticket, the confusing menu, the bad sightline,
          the payment that does not reconcile — while the audience is small and
          forgiving. Marketing before that point should build recognition, not
          manufacture a crowd the room cannot serve.
        </p>

        <DataTable
          caption="A twelve-week pre-opening marketing sequence"
          head={["When", "Priority", "What good looks like"]}
          rows={[
            [
              "12 weeks before",
              "Brand, name, and visual direction",
              "A clear identity that can carry signage, menus, and social",
            ],
            [
              "10 weeks before",
              "Website, map listing, and reservation path",
              "A guest can find the address, hours, and booking route",
            ],
            [
              "8 weeks before",
              "Photography and menu design",
              "Images that look like the real room and the real food",
            ],
            [
              "6 weeks before",
              "Neighbourhood and supplier partnerships",
              "Local businesses, hotels, and suppliers know the opening date",
            ],
            [
              "4 weeks before",
              "Soft-opening invitations",
              "A controlled list of guests, not an open-all-hours crowd",
            ],
            [
              "2 weeks before",
              "Trial services and feedback",
              "Specific fixes, not generic compliments",
            ],
            [
              "Opening week",
              "Public launch and community follow-up",
              "A full room the team can serve, not a viral queue it cannot",
            ],
            [
              "First 90 days",
              "Retention and reputation",
              "Repeat visits, reviews, and direct bookings",
            ],
          ]}
        />

        <ArticleSubhead>Where the launch budget goes</ArticleSubhead>

        <DataTable
          caption="Indicative launch budget allocation"
          head={["Category", "Share of launch budget", "What it buys"]}
          rows={[
            ["Brand, photography, and menu design", "15–20%", "The assets every other channel uses"],
            ["Digital and local search", "25–30%", "Map listing, website, social, and paid local reach"],
            ["Soft opening and guest feedback", "15–20%", "A controlled test with real service pressure"],
            ["Signage and wayfinding", "10–15%", "A room that can be found from the street"],
            ["Partnerships and PR", "10–15%", "Local credibility beyond paid media"],
            ["Contingency", "10%", "The thing you did not plan for"],
          ]}
        />

        <p>
          In the five models, pre-opening marketing ranges from NPR 80,000 for a
          small café to NPR 3.0 million for a fine-dining room. That is a
          deliberate range, not a benchmark. A restaurant in a tourist area may
          need more visibility; a neighbourhood room with strong local
          relationships may need less paid reach and more community work.
        </p>

        <ArticleSubhead>Measure the right things</ArticleSubhead>

        <DataTable
          caption="Launch metrics that actually help"
          head={["Metric", "What it tells you", "What to do with it"]}
          rows={[
            [
              "Cost per reservation",
              "Whether paid reach is converting into covers",
              "Cut channels that fill seats with the wrong spend",
            ],
            [
              "Cost per cover",
              "Total marketing spend divided by covers",
              "Compare with contribution per cover, not revenue alone",
            ],
            [
              "Repeat rate",
              "Whether the room is earning a second visit",
              "Fix service and menu issues before buying more reach",
            ],
            [
              "Direct booking share",
              "How much demand you own rather than rent",
              "Build the list and the direct booking path",
            ],
            [
              "Review sentiment",
              "What guests notice without being asked",
              "Fix recurring themes, not one-off comments",
            ],
            [
              "No-show rate",
              "Whether reservations are reliable",
              "Use deposits or reminders where appropriate",
            ],
          ]}
        />

        <Checklist
          items={[
            "Claim and complete the Google Business Profile with the correct address, hours, and photos.",
            "Put the menu, prices, and booking link on a fast mobile website.",
            "Make the phone, WhatsApp, and map directions easy to find.",
            "Brief the team on the opening story and the guest experience.",
            "Invite a controlled soft-opening list and ask specific questions.",
            "Collect reviews from real guests, never buy them.",
            "Track every channel and every reservation source.",
            "Keep a launch contingency; openings rarely run exactly to plan.",
          ]}
        />

        <Callout variant="warning" title="Do not buy an audience you cannot serve">
          <p>
            A queue outside the door is not a marketing success if the kitchen
            cannot produce, the tables are not ready, and the team is
            overwhelmed. The first month builds the reputation that the next
            twelve months live on. Protect it.
          </p>
        </Callout>

        <PullQuote quote="Marketing can fill a room. Only the operation can bring the room back." />
      </ArticleSection>
    </>
  );
}
