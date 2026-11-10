import Link from "next/link";
import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  FinanceGrid,
  KeyTakeaways,
  PullQuote,
  SourceLink,
  StatGrid,
} from "../../blocks";
import {
  investmentModels,
  modelRows,
  modelSummaryRows,
  preOpening,
  totalInvestment,
} from "./data";

const costPerSeatRows = investmentModels.map((model) => [
  model.name,
  `${model.seatCount} seats`,
  `NPR ${(preOpening(model, "base") * 1_000_000 / model.seatCount).toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
  `NPR ${(totalInvestment(model, "base") * 1_000_000 / model.seatCount).toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
]);

export function StartupCostPartOne() {
  return (
    <>
      <div className="article-intro">
        <p>
          Most restaurant budgets fail in the same place. They are built from
          the rent and the equipment list, then asked to carry a business that
          has not yet been designed. The room is measured before the service
          style is decided. The kitchen is ordered before the menu is costed.
          The launch is planned before anyone asks how many covers the room must
          serve to pay for itself.
        </p>
        <p>
          This guide works the other way around. It starts with five realistic
          formats, builds a transparent investment envelope for each, and then
          explains the line items that move the number most: property, fit-out,
          kitchen equipment, compliance, staffing, technology, inventory, and
          working capital. The figures are planning models, not quotations. They
          are deliberately shown as low, base, and high cases so that a single
          optimistic number never becomes the whole plan.
        </p>
        <p>
          The companion guide,{" "}
          <Link
            href="/blog/how-to-open-a-successful-restaurant-in-nepal"
            className="article-inline-link"
          >
            How to Open a Successful Restaurant in Nepal
          </Link>
          , covers the operating sequence from feasibility to the first 90 days.
          This guide is the money layer: what the project costs, what it must
          earn, and where the budget usually breaks.
        </p>
      </div>

      <KeyTakeaways
        items={[
          "The five base-case models range from NPR 5.60 million for a small café to NPR 56.37 million for a fine-dining room. The full ranges are wider.",
          "These are analytical planning envelopes, not market averages, supplier quotations, or a promise that a restaurant can be opened for these amounts.",
          "Working capital is the most commonly omitted line. In the models it ranges from NPR 0.75 million to NPR 20.00 million.",
          "Rent, fit-out, ventilation, electrical capacity, and fire safety are contract and building decisions before they are budget lines.",
          "Compliance is a stack of registrations, licences, renewals, tax duties, and payroll obligations. It is not a one-time fee.",
          "A restaurant is viable only when its sales target, contribution margin, and payback survive a slower-than-planned opening.",
        ]}
      />

      <ArticleSection
        id="investment-reality"
        number="01"
        title="What a restaurant really costs in 2026"
      >
        <p>
          Nepal&apos;s restaurant sector is large, fragmented, and unevenly
          measured. The National Statistics Office&apos;s{" "}
          <SourceLink href="https://giwmscdnone.gov.np/media/pdf_upload/Hotel%20and%20restaurant%20final%20report_vyvvh6g.pdf">
            National Hotel and Restaurant Survey 2023/24
          </SourceLink>{" "}
          estimated 142,223 hospitality establishments, including 126,859
          restaurants, with roughly 388,000 persons engaged and 106,459 paid
          employees. It put output at about NPR 326 billion, value added at NPR
          109.27 billion, and single-sitting seating capacity at about 2.23
          million. It also estimated that around 37% of establishments were not
          registered.
        </p>

        <StatGrid
          items={[
            {
              value: "142,223",
              label: "Hospitality establishments",
              note: "NSO survey estimate, 2023/24",
            },
            {
              value: "126,859",
              label: "Restaurants",
              note: "The largest establishment category",
            },
            {
              value: "NPR 326b",
              label: "Sector output",
              note: "NSO survey estimate",
            },
            {
              value: "2.23m",
              label: "Single-sitting seats",
              note: "Capacity is not the same as demand",
            },
          ]}
        />

        <p>
          Those numbers describe a market with low barriers to entry and a very
          wide range of operating standards. They do not tell you what your
          restaurant will cost. A 20-seat café in a second-generation space and a
          90-seat fine-dining room are not the same project with different
          furniture. They have different kitchen loads, staffing ratios, licence
          requirements, rent obligations, and cash cycles.
        </p>

        <ArticleSubhead>What the number includes</ArticleSubhead>

        <DataTable
          caption="The investment boundary used in this guide"
          head={["Included in the startup budget", "Excluded from the startup budget"]}
          rows={[
            [
              "Rent deposit, advance, and key money",
              "Purchase of land or the building itself",
            ],
            [
              "Renovation, fit-out, furniture, and signage",
              "Long-term debt principal and interest",
            ],
            [
              "Kitchen, refrigeration, ventilation, fire, electrical, and plumbing works",
              "The owner's personal living costs",
            ],
            [
              "Registration, licences, legal, and accounting setup",
              "Franchise fees, unless explicitly added",
            ],
            [
              "POS, hardware, network, and opening technology",
              "A full multi-year replacement reserve",
            ],
            [
              "Opening inventory, recruitment, training, and launch marketing",
              "Costs of a second outlet or future expansion",
            ],
            [
              "A 10% contingency and a working-capital buffer",
              "Taxes on profits that have not yet been earned",
            ],
          ]}
        />

        <p>
          The boundary matters because restaurant budgets are often presented as
          one large number without saying what it buys. A &quot;NPR 10 million
          restaurant&quot; may exclude the deposit, the working capital, or the
          owner&apos;s salary. It may assume the landlord pays for the electrical
          upgrade, the building already has a grease trap, and the kitchen
          equipment arrives on time. Those assumptions are not small print. They
          are the difference between a project that opens and a project that
          opens insolvent.
        </p>

        <ArticleSubhead>The five base cases</ArticleSubhead>

        <p>
          The models below are built around a defined format, seat count, team
          size, and service style. Each one includes the same fourteen cost
          lines, a 10% contingency, and a working-capital allowance. The low and
          high cases are not statistical confidence intervals. They are
          scenarios: a restrained build in a favourable shell versus a
          well-finished room with delays, upgrades, and a longer launch runway.
        </p>

        <FinanceGrid
          items={investmentModels.map((model) => ({
            label: model.name,
            value: `NPR ${totalInvestment(model, "base").toFixed(2)}m`,
            note: `Base case · ${model.seats} seats`,
          }))}
        />

        <Callout variant="warning" title="A number is not a quotation">
          <p>
            No supplier, landlord, contractor, or licensing officer has quoted
            these figures for a specific site. They are built from published
            prices, official fees, market listings, and transparent planning
            assumptions. Use them to frame a budget and interrogate quotations,
            not to replace them.
          </p>
        </Callout>

        <PullQuote quote="The most dangerous restaurant budget is the one that is precise about the equipment and vague about the cash." />
      </ArticleSection>

      <ArticleSection
        id="method"
        number="02"
        title="How this guide was researched"
      >
        <p>
          The research combines four kinds of evidence. Each has a different
          level of reliability, and the article labels them rather than blending
          them into a false sense of certainty.
        </p>

        <DataTable
          caption="Evidence tiers used in this guide"
          head={["Evidence tier", "What it includes", "How it is used"]}
          rows={[
            [
              "Official fee or legal rule",
              "Government fee schedules, tax thresholds, labour law, food law, licensing rules",
              "Treated as the strongest evidence, but still checked for current local practice",
            ],
            [
              "Published market listing",
              "Commercial rent listings, retail furniture prices, POS subscription prices, printer and cash-drawer listings",
              "Used as a market signal or a floor, never as a sealed quotation",
            ],
            [
              "Supplier package example",
              "Published kitchen or bar setup packages from a named supplier",
              "Used to illustrate the order of magnitude for that supplier's scope",
            ],
            [
              "Analytical estimate",
              "Fit-out per seat, contingency, working capital, sales targets, and payback",
              "Used to build a coherent planning model, clearly labelled as an estimate",
            ],
          ]}
        />

        <ArticleSubhead>Confidence by cost line</ArticleSubhead>

        <DataTable
          caption="How much confidence to place in each line item"
          head={["Cost line", "Evidence base", "Confidence"]}
          rows={[
            [
              "Rent and deposit",
              "Published commercial listings and market guides; actual landlord terms vary",
              "Medium",
            ],
            [
              "Renovation and construction",
              "Published commercial construction cost guides; site conditions can change the scope",
              "Medium",
            ],
            [
              "Interior fit-out",
              "Published interior cost guides and retail furniture listings; commercial joinery is quote-based",
              "Low–medium",
            ],
            [
              "Kitchen equipment",
              "Named supplier package examples; specifications and import costs vary",
              "Medium",
            ],
            [
              "Refrigeration",
              "Retail and commercial equipment listings; cold-room and reach-in quotes vary widely",
              "Low–medium",
            ],
            [
              "Furniture",
              "Published retail listings; commercial-grade frames, fabrics, and joinery cost more",
              "Medium",
            ],
            [
              "Electrical and plumbing",
              "Site-specific load, drainage, and water conditions; no universal published rate",
              "Low",
            ],
            [
              "Ventilation",
              "Duct route, hood length, make-up air, and fire suppression are site-specific",
              "Low",
            ],
            [
              "Fire safety",
              "Published equipment prices and compliance ranges; full systems are quote-based",
              "Low–medium",
            ],
            [
              "Registration and legal",
              "Official OCR, tax, labour, and food-law sources; municipal and liquor fees vary",
              "High for national rules; medium for local totals",
            ],
            [
              "POS and technology",
              "Published software and hardware prices; renewal terms and add-ons vary",
              "High for listed prices; medium for total scope",
            ],
            [
              "Opening inventory",
              "Menu- and supplier-specific; no universal opening stock level",
              "Low",
            ],
            [
              "Recruitment and training",
              "Statutory wage and contribution rules are clear; actual payroll depends on team design",
              "Medium",
            ],
            [
              "Pre-opening marketing",
              "No reliable published benchmark for Nepal restaurant launch spend",
              "Low",
            ],
            [
              "Contingency and working capital",
              "Analytical allowances based on project risk and fixed-cost structure",
              "Analytical",
            ],
          ]}
        />

        <ArticleSubhead>What this guide does not claim</ArticleSubhead>

        <Checklist
          items={[
            "It is not a national survey of restaurant startup costs.",
            "It does not contain sealed supplier quotations or contractor estimates for a specific site.",
            "It does not claim that a particular number is typical, average, or guaranteed.",
            "It does not replace legal, tax, engineering, or architectural advice.",
            "It does not assume that a licence, lease, or building approval will be granted.",
            "It does not treat published prices as fixed; they change with suppliers, exchange rates, and season.",
          ]}
        />

        <ArticleSubhead>How to use the models</ArticleSubhead>

        <p>
          Start with the format that matches the demand you can actually
          evidence, not the format you would most like to design. Replace the
          rent with a real landlord quote. Replace the kitchen package with a
          specification and quotation. Replace the fit-out allowance with a
          contractor&apos;s scope. Then stress the model: slower opening, fewer
          covers, higher food cost, and a longer hiring period. A budget that
          only works in the base case is not a budget; it is a hope.
        </p>

        <Callout variant="tip" title="The three-quote rule">
          <p>
            Get at least three written quotations for any scope above NPR
            500,000, and compare the scope, not just the total. A cheaper
            kitchen quote may exclude installation, gas connection, electrical
            work, warranty, or spare parts. A cheaper fit-out may exclude
            making good, firestopping, or final cleaning.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="cost-drivers"
        number="03"
        title="What drives startup cost in Nepal"
      >
        <p>
          Two restaurants can rent the same size room and still spend very
          different amounts. The difference is rarely one dramatic item. It is a
          series of decisions about the building, the service model, the kitchen,
          and the amount of cash the owner is prepared to lose before the room
          finds its rhythm.
        </p>

        <DataTable
          caption="The decisions that move a Nepal restaurant budget most"
          head={["Driver", "Why it moves the budget", "Where it hides"]}
          rows={[
            [
              "Location and rent",
              "Prime frontage can cost several times more per square foot than an outer residential high street",
              "Deposit, advance, key money, escalation, service charges, and lost rent during fit-out",
            ],
            [
              "Footprint and seats",
              "More seats require more furniture, covers, kitchen output, wash capacity, and staff",
              "Seating density, circulation, accessible washrooms, and back-of-house space",
            ],
            [
              "Service style",
              "Counter service, table service, and chef-led service need different teams and different rooms",
              "Labour, POS configuration, tableware, linen, training, and service stations",
            ],
            [
              "Menu breadth",
              "Every additional station, ingredient, and preparation step adds equipment and waste",
              "Smallwares, refrigeration, prep labour, stock, and kitchen footprint",
            ],
            [
              "Kitchen type",
              "A finishing kitchen, a full production kitchen, and a display bakery are different capital projects",
              "Hoods, gas, electrical load, drainage, refrigeration, and make-up air",
            ],
            [
              "Fit-out standard",
              "Custom joinery, imported finishes, acoustic treatment, and feature lighting escalate quickly",
              "Design fees, mock-ups, specialist labour, and long lead times",
            ],
            [
              "Building condition",
              "An old shell may need structural work, waterproofing, new drainage, or a full electrical upgrade",
              "Making good, asbestos or hazardous material handling, and landlord consent",
            ],
            [
              "Compliance",
              "Food, liquor, fire, signage, labour, and tax obligations carry fees, renewals, and professional costs",
              "Consultants, drawings, inspections, training, and ongoing accounting",
            ],
            [
              "Utilities",
              "Cooking load, refrigeration, air conditioning, and water treatment can require upgrades",
              "Meter capacity, transformer, cabling, pump, tank, grease trap, and backup power",
            ],
            [
              "Staffing model",
              "A thin team saves payroll but can break service; a heavy team protects service but raises fixed cost",
              "Pre-opening payroll, training, uniforms, meals, insurance, and overtime",
            ],
            [
              "Geography and seasonality",
              "Tourism markets can fill a room in season and empty it in the monsoon or winter",
              "Working capital, marketing, flexible staffing, and lease term",
            ],
            [
              "Working capital",
              "The opening months rarely pay for themselves before the first slow week",
              "Cash buffer, supplier credit, VAT timing, and owner drawings",
            ],
          ]}
        />

        <ArticleSubhead>The cost iceberg</ArticleSubhead>

        <p>
          The visible budget is rent, furniture, equipment, and the deposit. The
          submerged budget is the electrical upgrade the landlord did not
          mention, the grease trap that has to be replaced, the fire exit that
          does not meet the building code, the three-month delay in the kitchen
          import, and the payroll that starts before the first paying guest.
        </p>

        <Callout variant="example" title="A simple test">
          <p>
            For every line in the budget, ask: who is responsible, what is the
            exact scope, when does it arrive, and what happens if it is late?
            If the answer is &quot;the contractor will handle it,&quot; the line
            is not controlled yet.
          </p>
        </Callout>

        <ArticleSubhead>Cost per seat is a useful sanity check</ArticleSubhead>

        <p>
          Cost per seat is not a benchmark. It is a way to compare two
          proposals quickly and see whether one is out of line. The table below
          uses the base case from each model, divides the pre-opening subtotal
          and the all-in investment by the planned seat count, and rounds to the
          nearest rupee.
        </p>

        <DataTable
          caption="Analytical cost per seat, base case"
          head={["Model", "Seats", "Pre-opening cost per seat", "All-in cost per seat"]}
          rows={costPerSeatRows}
        />

        <p>
          If a proposal comes in far below the range for its format, ask what
          has been excluded. If it comes in far above, ask what the extra money
          buys and whether the sales line can support it. A beautiful room with a
          cost per seat the market cannot repay is not a premium strategy. It is
          a capital allocation problem.
        </p>

        <PullQuote quote="Cheap is not a strategy when the cheap decision is the one that closes the kitchen in month four." />
      </ArticleSection>

      <ArticleSection
        id="models"
        number="04"
        title="Five investment models, from café to fine dining"
      >
        <p>
          The models are planning envelopes. They assume a leased space, a
          commercially reasonable build, a compliant kitchen, a trained opening
          team, and a launch budget. They exclude land and building purchase.
          They include a 10% contingency on pre-opening costs and a working
          capital buffer sized to the fixed-cost structure of each format.
        </p>

        <DataTable
          caption="Five 2026 Nepal restaurant investment models"
          head={[
            "Model",
            "Format",
            "Seats",
            "Team",
            "Low",
            "Base",
            "High",
          ]}
          rows={modelSummaryRows}
        />

        <DataTable
          caption="Planning assumptions behind the models"
          head={["Model", "Format", "Seats", "Team", "Average spend"]}
          rows={investmentModels.map((model) => [
            model.name,
            model.format,
            model.seats,
            model.team,
            model.averageSpend,
          ])}
        />

        <Callout variant="note" title="Read the tables in NPR million">
          <p>
            All figures are in NPR million. Low, base, and high are scenarios,
            not statistical ranges. The totals add the fourteen cost lines, a 10%
            contingency, and the working-capital allowance. Figures are rounded
            to two decimal places.
          </p>
        </Callout>

        {investmentModels.map((model) => (
          <div key={model.id}>
            <ArticleSubhead>{model.name}</ArticleSubhead>
            <p>{model.note}</p>
            <DataTable
              caption={`${model.name} — investment breakdown, NPR million`}
              head={["Cost line", "Low", "Base", "High"]}
              rows={modelRows(model)}
            />
          </div>
        ))}

        <ArticleSubhead>What every model excludes</ArticleSubhead>

        <Checklist
          items={[
            "Land or building purchase, and any mortgage or ownership costs.",
            "Long-term debt principal, interest, and bank fees.",
            "The owner's personal living costs and drawings.",
            "Franchise fees, royalties, and group marketing levies.",
            "A full replacement reserve for equipment and furniture.",
            "Future expansion, a second outlet, or a delivery-only brand.",
            "Tax on profits that have not yet been earned.",
          ]}
        />

        <Callout variant="warning" title="The base case is not a recommendation">
          <p>
            A base case is the middle of a planning range, not a target to
            defend. If your site, team, or concept is more complex than the
            model, use the high case. If it is simpler, use the low case but keep
            the contingency. The point is to choose the case that matches the
            evidence, not the case that makes the project look affordable.
          </p>
        </Callout>

        <p>
          The next six sections unpack the largest and most frequently
          underestimated lines: property, construction, interiors, kitchen,
          refrigeration and safety, and utilities. The numbers in the tables are
          only useful if the scope behind them is understood.
        </p>
      </ArticleSection>
    </>
  );
}
