import Link from "next/link";
import { images } from "@/lib/images";
import {
  ArticleFigure,
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
} from "../blocks";

export function PartOne() {
  return (
    <>
      <div className="article-intro">
        <p>
          Nepal does not lack restaurants. It lacks restaurants that survive
          their own opening. The country has more than 126,000 of them, spread
          across hill towns, highway stops, Kathmandu alleys, Pokhara
          lakefronts, and the new residential neighbourhoods where families
          queue for a table on a Friday night. The barrier to entry is low. The
          barrier to consistency, compliance, and profit is much higher.
        </p>
        <p>
          This guide is written for the person who is serious about getting it
          right: the first-time founder with savings on the line, the family
          putting a second generation into the business, the returning Nepali
          who has seen how restaurants work abroad, the hotel-management student
          who wants a real operating model rather than a slide deck, and the
          existing owner who needs to fix what is not working.
        </p>
        <p>
          It is deliberately practical. It uses official data where official
          data exists, explains the law where the law is clear, and flags the
          places where local practice, municipal fees, or tax classification
          still need to be confirmed with a professional. It does not promise
          that a restaurant will succeed. No guide can. It does try to stop you
          from losing money for avoidable reasons.
        </p>
      </div>

      <KeyTakeaways
        items={[
          "Nepal’s restaurant sector is large but fragmented: 126,859 restaurants, 2.23 million single-sitting seats, and roughly 37% of hospitality establishments operating without proper registration, according to the National Statistics Office.",
          "Tourism has recovered to 96.8% of its 2019 level, but arrivals are seasonal and concentrated in a few markets. A restaurant that depends only on visitors is a restaurant with a five-month year.",
          "The startup budget is not the fit-out budget. Deposit, key money, equipment, licences, opening inventory, pre-opening payroll, and three to six months of working capital belong in the same plan.",
          "Food cost percentage is a symptom, not a strategy. Contribution margin, covers per seat, average spend, and prime cost tell you whether the business actually works.",
          "The legal sequence matters: business registration, PAN, local ward permit, food business licence, liquor licence if applicable, and VAT once the threshold is crossed.",
          "Nepal’s minimum wage is NPR 19,550 per month, and the employer’s Social Security Fund contribution adds 20% of basic salary. Labour is not cheap when you cost it properly.",
          "A soft opening is not a marketing gimmick. It is the only chance to find the ten things that will break before paying customers find them for you.",
          "Cash is the constraint. Profit is an accounting result; cash is what pays payroll, suppliers, VAT, and rent on time.",
        ]}
      />

      <ArticleSection
        id="industry"
        number="01"
        title="The Nepali restaurant industry in 2026"
      >
        <p>
          Start with the size of the room you are entering. The National Hotel
          and Restaurant Survey 2023/24, published by the National Statistics
          Office in December 2024, is the most comprehensive official picture of
          Nepal’s accommodation and food-service sector. Its reference period is
          fiscal year 2022/23, so it describes the market as it was rebuilding
          after the pandemic, not as it is this morning. Even with that lag, the
          structural signals are useful.
        </p>

        <StatGrid
          items={[
            {
              value: "142,223",
              label: "Accommodation and food-service establishments",
              note: "NSO survey coverage, FY 2022/23",
            },
            {
              value: "126,859",
              label: "Restaurants",
              note: "The largest establishment category",
            },
            {
              value: "2.23m",
              label: "Single-sitting restaurant seats",
              note: "About half are in Bagmati Province",
            },
            {
              value: "106,459",
              label: "Paid employees",
              note: "Excludes proprietors and unpaid family workers",
            },
          ]}
        />

        <p>
          The survey counted NPR 326 billion in service output, NPR 109.27
          billion in value added, and NPR 543.25 billion in gross fixed assets
          across hotels and restaurants. Those are large numbers, but they are
          also unevenly distributed. Bagmati Province accounts for roughly half
          of the country’s restaurant seating capacity. Kathmandu Valley alone
          contains a dense mix of neighbourhood restaurants, tourist-oriented
          dining rooms, hotel outlets, cafés, bars, and informal kitchens that
          never appear in a database.
        </p>

        <p>
          The most important number for a new operator may be the least
          flattering: approximately 37% of the establishments surveyed were
          operating without proper registration. That gap tells you three
          things. First, you will compete with businesses that carry lower
          compliance costs than you do. Second, formalisation is a
          differentiator with landlords, lenders, hotel partners, corporate
          clients, and increasingly with guests. Third, the official statistics
          undercount the true level of competition, especially at the lower end
          of the market.
        </p>

        <Callout variant="warning" title="Do not use the 37% as a business plan">
          <p>
            The informal sector is not a template. A restaurant that cannot
            produce a food licence, a tax invoice, or a social-security record
            will struggle to sign a corporate contract, list on a delivery
            platform, insure its premises, or survive an inspection. The short
            term saving is real; the long term cost is usually larger.
          </p>
        </Callout>

        <ArticleSubhead>Tourism is recovering, not booming</ArticleSubhead>

        <p>
          Nepal welcomed 1,158,459 international visitors in 2025, according to
          the Nepal Tourism Board’s December 2025 insight report. That was a
          modest 0.95% increase over 2024 and 96.8% of the 2019 peak of
          1,197,191. The headline is recovery. The operating reality is
          seasonality.
        </p>

        <p>
          October 2025 was the strongest month, with 128,443 arrivals. March
          followed with 121,687. July, the monsoon trough, recorded 70,193. A
          restaurant in Thamel, Lakeside, or a trekking gateway can feel full for
          a few months and dangerously quiet for the rest. India remains the
          largest source market with 292,438 visitors in 2025, followed by the
          United States at 112,316, China at 95,480, the United Kingdom at
          58,684, and Bangladesh at 57,545. Those markets do not behave the
          same way: they have different spending patterns, length of stay,
          dietary expectations, and booking habits.
        </p>

        <StatGrid
          items={[
            {
              value: "1,158,459",
              label: "International visitor arrivals in 2025",
              note: "96.8% of the 2019 peak",
            },
            {
              value: "128,443",
              label: "Arrivals in October 2025",
              note: "The strongest month of the year",
            },
            {
              value: "70,193",
              label: "Arrivals in July 2025",
              note: "The monsoon low",
            },
            {
              value: "25.2%",
              label: "Share of arrivals from India",
              note: "The largest single source market",
            },
          ]}
        />

        <p>
          Domestic demand is the other half of the picture, and it is the half
          that most new operators underestimate. Kathmandu’s restaurant market is
          driven by families, young professionals, office lunches, birthdays,
          anniversaries, business dinners, and the growing habit of eating out
          for convenience rather than only for celebration. Domestic guests are
          more repeatable than tourists, more sensitive to value, and more
          likely to tell you the truth on a review platform.
        </p>

        <ArticleSubhead>What the data does not tell you</ArticleSubhead>

        <p>
          Official surveys are a lagging indicator. They cannot tell you whether
          the restaurant two doors down is profitable, how long the average
          guest stays, what the real rent per square foot is on a specific
          street, or whether the landlord is difficult. They also cannot capture
          the informal economy accurately. Use the national data to understand
          the shape of the sector, then do your own local research before you
          sign a lease.
        </p>

        <p>
          The sector’s structure also shapes strategy. Most establishments are
          small. Many are family-run. Barriers to entry are low, which means
          concepts are copied quickly and price competition is intense. The
          winners are rarely the ones with the most expensive fit-out. They are
          the ones with a clear position, consistent execution, tight cost
          control, and a location that matches their daypart.
        </p>

        <Checklist
          items={[
            "Do not build a restaurant for “everyone”. Choose a primary guest, occasion, and daypart.",
            "Assume competition from unregistered operators, but do not imitate their compliance shortcuts.",
            "Plan for a seasonal year, not a peak-season month.",
            "Treat domestic repeat guests as the base of the business and visitors as upside.",
            "Use official data for context, and primary fieldwork for decisions.",
          ]}
        />

        <Callout variant="note" title="Source and date">
          <p>
            Sector figures in this chapter come from the{" "}
            <SourceLink href="https://giwmscdnone.gov.np/media/pdf_upload/Hotel%20and%20restaurant%20final%20report_vyvvh6g.pdf">
              National Hotel and Restaurant Survey 2023/24
            </SourceLink>{" "}
            (National Statistics Office, December 2024). Arrival figures come
            from the{" "}
            <SourceLink href="https://trade.ntb.gov.np/wp-content/uploads/2026/01/Nepal-Tourism-Insights-December.pdf">
              Nepal Tourism Board’s December 2025 insight report
            </SourceLink>
            . The survey reference period is FY 2022/23; it is not a real-time
            estimate of the current market.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="research"
        number="02"
        title="Market research and feasibility"
      >
        <p>
          Feasibility is not a formality you complete to satisfy a lender. It is
          the process that tells you whether the business you want to build can
          exist at the price the market is willing to pay, in the location you
          can afford, with the team you can hire. If you skip it, you are not
          taking a risk. You are taking a guess with a lease attached.
        </p>

        <ArticleSubhead>Define the trade area before you study it</ArticleSubhead>

        <p>
          A restaurant’s trade area is not a circle on a map. It is the set of
          people who will realistically choose you within a given travel time,
          given their alternatives. For a neighbourhood restaurant, that may be
          a 5–10 minute walk or a short drive. For a destination restaurant, it
          may be 30–45 minutes by car, but only if the experience is strong
          enough to justify the trip. For a tourist-oriented restaurant, the
          trade area is a hotel cluster, a landmark, or a walking route.
        </p>

        <p>
          Write down the trade area in one sentence. For example: “Residents and
          office workers within a 10-minute walk of this intersection, plus
          weekend diners from the wider valley.” If you cannot write that
          sentence, you do not yet know who you are building for.
        </p>

        <ArticleSubhead>The demand questions</ArticleSubhead>

        <p>
          Demand is a function of people, occasions, purchasing power, and
          alternatives. Count the people, but do not stop there. A busy street
          can have high footfall and low conversion if the pedestrians are
          commuters who never stop, or if the surrounding businesses close at
          6pm. A quiet street can be a strong destination if it has parking,
          visibility, and a cluster of complementary businesses.
        </p>

        <Checklist
          items={[
            "How many households, offices, hotels, schools, and hospitals are within the trade area?",
            "What is the income and spending profile of the people who live and work there?",
            "When are they in the area — morning, lunch, after work, late evening, weekends?",
            "Where do they eat now, and what do they complain about?",
            "How many competitors serve the same occasion at the same price point?",
            "Is demand growing, stable, or declining? Are new residential or commercial projects coming?",
            "What happens in the monsoon, the winter, and the festival season?",
          ]}
        />

        <ArticleSubhead>The supply questions</ArticleSubhead>

        <p>
          Study competitors as an operator, not as a customer. Eat there. Time
          the service. Count the covers. Look at the check average, the menu
          size, the staffing level, the table turn, and the condition of the
          washrooms. Read the reviews and look for patterns: slow service, loud
          music, inconsistent food, poor ventilation, difficult parking. Those
          patterns are your opportunities.
        </p>

        <DataTable
          caption="A simple competitor matrix you can complete in a week"
          head={[
            "What to record",
            "Why it matters",
            "How to collect it",
          ]}
          rows={[
            [
              "Positioning",
              "Shows whether the market is crowded at your price point",
              "Menu, decor, service style, online presence",
            ],
            [
              "Price band",
              "Sets the ceiling for your average spend",
              "Published menus, bills, delivery listings",
            ],
            [
              "Capacity",
              "Estimates how much demand is already absorbed",
              "Seat count, table sizes, terrace, private rooms",
            ],
            [
              "Daypart strength",
              "Reveals gaps you can target",
              "Visit at lunch, after work, and late evening",
            ],
            [
              "Service speed",
              "Shows whether the kitchen can handle volume",
              "Time the order-to-table and table-turn",
            ],
            [
              "Review themes",
              "Identifies unmet expectations",
              "Read the last 50 reviews, not the rating alone",
            ],
            [
              "Operating pattern",
              "Shows seasonality and staffing rhythm",
              "Observe closures, queues, and staff counts",
            ],
          ]}
        />

        <ArticleSubhead>Build a demand model you can defend</ArticleSubhead>

        <p>
          A simple model is better than a complicated one you do not believe.
          Start with seats, turns, average spend, and operating days. Then test
          three scenarios: conservative, base, and optimistic. The conservative
          case is the one you should be able to survive.
        </p>

        <DataTable
          caption="Illustrative demand scenarios for a 60-seat restaurant"
          head={["Scenario", "Covers per day", "Average spend", "Annual revenue"]}
          rows={[
            ["Conservative", "45", "NPR 550", "NPR 8.91m"],
            ["Base", "75", "NPR 650", "NPR 17.55m"],
            ["Optimistic", "95", "NPR 750", "NPR 25.65m"],
          ]}
        />

        <p>
          The arithmetic is deliberately simple: covers per day × average spend
          × 360 operating days. It is not a forecast. It is a way to see which
          assumptions matter. If the conservative case cannot cover rent,
          payroll, food, utilities, and debt service, the concept is not ready.
          If it only works in the optimistic case, you are undercapitalised.
        </p>

        <Callout variant="tip" title="Use covers per seat, not just covers">
          <p>
            Divide daily covers by the number of seats. A 60-seat restaurant
            doing 75 covers is turning 1.25 times per seat per day. A 30-seat
            restaurant doing 75 covers is turning 2.5 times. The second business
            may be smaller, but it is working harder. This metric, sometimes
            called seat turnover, is a better guide to capacity and labour than
            the raw cover count.
          </p>
        </Callout>

        <ArticleSubhead>Calculate the break-even before the build</ArticleSubhead>

        <p>
          Break-even is the revenue at which the business covers its fixed costs.
          The formula is fixed costs divided by contribution margin. If food and
          other variable costs are 35% of revenue, contribution margin is 65%.
          If annual fixed costs are NPR 9 million, break-even revenue is about
          NPR 13.8 million. Divide that by operating days and average spend to
          get the break-even cover count. If that number looks unrealistic for
          the location, stop.
        </p>

        <FinanceGrid
          items={[
            {
              label: "Illustrative annual fixed costs",
              value: "NPR 9.0m",
              note: "Rent, core payroll, utilities, marketing, other overhead",
            },
            {
              label: "Variable cost ratio",
              value: "35%",
              note: "Food, packaging, payment fees, some utilities",
            },
            {
              label: "Contribution margin",
              value: "65%",
              note: "Revenue left after variable costs",
            },
            {
              label: "Break-even revenue",
              value: "NPR 13.8m",
              note: "Fixed costs ÷ contribution margin",
            },
          ]}
        />

        <ArticleSubhead>The go/no-go checklist</ArticleSubhead>

        <p>
          A feasibility study should end with a decision, not a document. Before
          you commit capital, you should be able to answer these questions
          without hedging.
        </p>

        <Checklist
          items={[
            "The trade area has enough of the right people, at the right times, with the right spending power.",
            "The competitive set has a real gap that your concept can fill, not just a gap you find interesting.",
            "The conservative revenue case covers fixed costs and leaves a cash buffer.",
            "The rent is sustainable at the conservative case, not only at the base case.",
            "The location can support the kitchen, ventilation, power, water, and waste your concept needs.",
            "You have a plan for the off-season and the slow daypart.",
            "You have access to the capital needed to open and to survive the first six months.",
            "You have a credible operator, not only an investor.",
          ]}
        />

        <Callout variant="warning" title="Footfall is not demand">
          <p>
            A hundred people walking past your door is not a hundred customers.
            Demand is footfall multiplied by relevance, visibility, affordability,
            and intent. A location with 30% fewer pedestrians but a strong
            destination draw, parking, and a complementary tenant mix can
            outperform a busier street with no stopping behaviour.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="concept"
        number="03"
        title="Building a concept that can survive"
      >
        <p>
          A concept is not a cuisine. It is a promise about who you serve, what
          occasion you serve, how it feels, and what it costs. “Nepali food” is
          not a concept. “A 40-seat neighbourhood dining room for families and
          young professionals, with a short seasonal menu, warm service, and a
          mid-market check average” is a concept. The first describes a
          category. The second describes a business.
        </p>

        <ArticleSubhead>The concept equation</ArticleSubhead>

        <p>
          Write your concept as a single paragraph with five parts: guest,
          occasion, offering, atmosphere, and price. If any part is vague, the
          operating decisions that follow will be vague too. The paragraph
          should be specific enough that a designer, a chef, and a waiter could
          all make consistent decisions from it.
        </p>

        <PullQuote
          quote="The clearer the promise, the fewer decisions you have to make twice."
          attribution="A useful test for any new restaurant concept"
        />

        <DataTable
          caption="Five concept archetypes and their operating trade-offs"
          head={["Archetype", "Strength", "Main risk"]}
          rows={[
            [
              "Neighbourhood all-day dining",
              "Repeat guests, multiple dayparts, lower dependence on tourism",
              "Broad menu, high labour, pressure to be everything to everyone",
            ],
            [
              "Destination chef-led dining",
              "Strong identity, higher check average, press and word of mouth",
              "Small addressable market, high skill dependency, low fault tolerance",
            ],
            [
              "High-volume family dining",
              "Predictable demand, large parties, strong weekend trade",
              "Thin margins, queue management, noise and service consistency",
            ],
            [
              "Quick-service lunch",
              "Fast table turns, simple operations, lower rent per cover",
              "Peak-hour bottlenecks, delivery competition, limited evening revenue",
            ],
            [
              "Bar-led small plates",
              "High margin beverages, late-night demand, social atmosphere",
              "Licensing, responsible service, inventory shrinkage, noise complaints",
            ],
          ]}
        />

        <p>
          None of these is inherently better. The question is whether the
          archetype fits the location, the capital, and the operator’s skill. A
          chef-led tasting-menu concept in a low-rent residential lane can work
          if the chef has a following and the room is small. The same concept in
          a high-rent tourist strip can fail before it builds a reputation. A
          high-volume family restaurant can be a cash machine if the kitchen is
          designed for it and a nightmare if it is not.
        </p>

        <ArticleSubhead>Menu architecture is a capital decision</ArticleSubhead>

        <p>
          Every item on the menu adds prep, storage, training, ordering, and
          waste. A menu with 60 items is not more generous than a menu with 24;
          it is usually more expensive to run. The right number depends on the
          concept, but the principle is consistent: keep the menu deep enough to
          give guests a reason to return and shallow enough that the kitchen can
          execute it consistently at peak.
        </p>

        <p>
          Group items by station and by daypart. Ask which items can be prepared
          ahead, which must be cooked to order, and which are only viable at low
          volume. A dish that takes 18 minutes to cook and has a 30% food cost
          may still be a bad menu item if it blocks the pass during the busiest
          45 minutes of the night.
        </p>

        <Checklist
          items={[
            "Every item has a clear role: signature, volume driver, margin driver, or guest comfort.",
            "The menu can be executed by the team you can actually hire.",
            "The number of ingredients is controlled; cross-utilisation is designed in.",
            "Seasonal changes are planned, not improvised.",
            "Dietary and allergen information can be provided accurately.",
            "The menu fits on one page or a tight two-page spread.",
          ]}
        />

        <ArticleSubhead>Price point is a promise, not a discount</ArticleSubhead>

        <p>
          Your price point tells guests what kind of experience to expect. If you
          position at the premium end, the room, service, glassware, pacing, and
          consistency have to support it. If you position at the value end, the
          guest expects speed, portion, and reliability more than ceremony.
          Trying to be both is the fastest way to be neither.
        </p>

        <p>
          Do not set prices by copying the restaurant next door. Their cost
          structure, rent, and volume are not yours. Set prices from your cost
          base and your positioning, then test them against the market. A
          restaurant that is 10% more expensive than its neighbours must give
          the guest a reason to pay the difference. That reason has to be visible
          before the bill arrives.
        </p>

        <ArticleSubhead>Brand is an operating system</ArticleSubhead>

        <p>
          A brand is not a logo. It is the sum of the signals a guest receives:
          the name, the sign, the lighting, the menu language, the music, the
          uniforms, the way the phone is answered, and the way a complaint is
          handled. In a market where many restaurants look similar, the
          consistency of those signals is a competitive advantage.
        </p>

        <p>
          Choose a name that is easy to say, spell, and search. Check that the
          name is available as a company registration, a domain, and a social
          handle. Check for confusingly similar existing marks. Do not name the
          restaurant after a dish unless you are prepared to own that category
          for a decade.
        </p>

        <ArticleSubhead>Test the concept before the lease</ArticleSubhead>

        <p>
          You do not need a finished dining room to test demand. A pop-up, a
          private dining series, a market stall, a collaboration with an existing
          venue, or a limited-run weekend service can tell you more about
          pricing, portion, service flow, and guest response than a month of
          spreadsheet modelling. The test does not need to be profitable. It
          needs to be honest.
        </p>

        <p>
          If you are exploring a smaller, chef-led format rather than a
          traditional restaurant, the private dining model is a useful bridge.
          It lets you test menus, pricing, and hospitality with real guests
          before committing to a full fit-out. You can see the{" "}
          <Link href="/experiences" className="article-inline-link">
            private dining experiences
          </Link>{" "}
          offered in Kathmandu as an example of how a concept can be tested
          without a permanent dining room.
        </p>

        <Callout variant="example" title="A concept test that costs less than a bad lease">
          <p>
            Run four dinners for 20 guests over two weekends. Use a temporary
            kitchen or a partner venue. Charge a real price. Collect feedback
            before the guest leaves, and follow up three days later. Track
            which items were praised, which were left unfinished, how long
            service took, and whether guests asked when they could come back.
            If the answers are weak, change the concept before you sign a
            five-year lease.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="budget"
        number="04"
        title="The startup budget"
      >
        <p>
          Most restaurant budgets fail for the same reason: they count the
          visible costs and ignore the invisible ones. The fit-out is visible.
          The deposit, the key money, the utility connections, the opening
          inventory, the training payroll, the first month of rent before you
          earn a rupee, and the working capital needed to survive a slow start
          are not. A budget that stops at the kitchen equipment is not a budget.
          It is a shopping list.
        </p>

        <Callout variant="legal" title="These are planning ranges, not quotes">
          <p>
            The ranges below are illustrative planning bands for Nepal, based on
            common cost categories and operator experience. They are not market
            quotes, and they exclude land or building purchase. Actual costs vary
            by city, street, building condition, specification, imported versus
            local equipment, and the condition of the utilities. Get three
            written quotes for every major line.
          </p>
        </Callout>

        <DataTable
          caption="Illustrative startup bands, excluding land and building purchase"
          head={["Format", "Seats", "Typical footprint", "All-in startup range"]}
          rows={[
            [
              "Small neighbourhood",
              "24–45",
              "600–1,200 sq ft",
              "NPR 3m–8m",
            ],
            [
              "Mid-market full service",
              "50–90",
              "1,500–2,500 sq ft",
              "NPR 10m–23m",
            ],
            [
              "Premium or destination",
              "80–140",
              "2,500–5,000 sq ft",
              "NPR 25m–58m",
            ],
          ]}
        />

        <p>
          The bands overlap because the fit-out specification matters more than
          the seat count. A 40-seat room with custom joinery, imported lighting,
          and a full bar can cost more than a 70-seat room with a simple,
          durable build. The numbers also exclude the cost of acquiring a
          building, which is a separate investment decision and a different kind
          of risk.
        </p>

        <ArticleSubhead>Where the money actually goes</ArticleSubhead>

        <DataTable
          caption="A typical allocation for a mid-market, full-service restaurant"
          head={["Category", "Share of startup budget", "What it includes"]}
          rows={[
            [
              "Rent deposit and key money",
              "10–20%",
              "Security deposit, advance rent, transfer premium if any",
            ],
            [
              "Fit-out and construction",
              "25–35%",
              "Civil work, flooring, ceilings, electrical, plumbing, painting, joinery",
            ],
            [
              "Kitchen and bar equipment",
              "15–25%",
              "Cooking, refrigeration, dishwash, extraction, smallwares, bar kit",
            ],
            [
              "Furniture and guest areas",
              "8–12%",
              "Tables, chairs, lighting, signage, washrooms, POS counter",
            ],
            [
              "Licences and professional fees",
              "2–5%",
              "Registration, food licence, liquor licence, legal, accounting",
            ],
            [
              "Opening inventory",
              "3–5%",
              "Food, beverage, consumables, cleaning, packaging",
            ],
            [
              "Pre-opening payroll and training",
              "4–8%",
              "Hiring, training, trial shifts, soft-opening labour",
            ],
            [
              "Marketing and launch",
              "3–6%",
              "Photography, website, signage, launch event, paid media",
            ],
            [
              "Working capital",
              "10–15%",
              "Three to six months of operating shortfall",
            ],
            [
              "Contingency",
              "10–15%",
              "The inevitable surprises",
            ],
          ]}
        />

        <p>
          Those percentages are a sanity check, not a formula. A leased shell
          with no utilities will push construction higher. A second-hand kitchen
          can reduce equipment cost but may increase maintenance and energy
          cost. A listed building with heritage restrictions can make a modest
          fit-out expensive. The point is to see the whole shape of the budget
          before you start negotiating individual line items.
        </p>

        <ArticleSubhead>A worked example</ArticleSubhead>

        <p>
          Imagine a 70-seat, mid-market restaurant in Kathmandu with a total
          startup budget of NPR 15 million. A plausible allocation might look
          like this. The numbers are illustrative, but the structure is the
          lesson: almost a third of the money is not visible to the guest.
        </p>

        <DataTable
          caption="Illustrative NPR 15m startup budget for a 70-seat restaurant"
          head={["Line", "Amount", "Note"]}
          rows={[
            ["Deposit, advance rent, key money", "NPR 2.1m", "14%"],
            ["Fit-out and construction", "NPR 4.5m", "30%"],
            ["Kitchen and bar equipment", "NPR 3.0m", "20%"],
            ["Furniture, lighting, signage", "NPR 1.35m", "9%"],
            ["Licences and professional fees", "NPR 0.45m", "3%"],
            ["Opening inventory", "NPR 0.6m", "4%"],
            ["Pre-opening payroll and training", "NPR 0.9m", "6%"],
            ["Marketing and launch", "NPR 0.6m", "4%"],
            ["Working capital", "NPR 1.5m", "10%"],
            ["Contingency", "NPR 1.5m", "10%"],
          ]}
        />

        <ArticleSubhead>The costs that surprise first-time operators</ArticleSubhead>

        <Checklist
          items={[
            "VAT on fit-out, equipment, and professional services, where applicable.",
            "Customs duty and clearing on imported equipment, plus freight and delays.",
            "Three-phase power connection, transformer, cabling, and a backup generator or inverter.",
            "Water storage, filtration, pressure pumps, and drainage upgrades.",
            "Kitchen extraction, make-up air, and noise mitigation required by the landlord or municipality.",
            "Grease trap, waste storage, and municipal collection charges.",
            "Fire extinguishers, suppression, emergency lighting, and exit signage.",
            "Signboard tax, ward permit, and any local advertising restrictions.",
            "Staff meals, uniforms, lockers, and training before the first paying guest.",
            "Accounting, payroll, and social-security setup.",
            "Insurance: property, public liability, and business interruption.",
            "The rent you pay while the kitchen is being built and the licence is pending.",
          ]}
        />

        <ArticleSubhead>Fund the business, not just the opening</ArticleSubhead>

        <p>
          A restaurant needs enough capital to open and enough capital to
          recover from a slow opening. Three to six months of operating expenses
          is a reasonable working-capital target for a new full-service
          restaurant. If the first three months are strong, the buffer becomes
          growth capital. If they are weak, it becomes survival capital. Either
          way, it is not optional.
        </p>

        <p>
          Be careful with debt. A bank loan can be a sensible way to finance
          equipment or fit-out if the repayment schedule matches the business’s
          cash generation. It becomes dangerous when it is used to cover a
          structural loss. Before borrowing, model the debt service in the
          conservative case, not the optimistic one. If the conservative case
          cannot service the debt, the loan is too large or the concept is too
          weak.
        </p>

        <FinanceGrid
          items={[
            {
              label: "Contingency",
              value: "10–15%",
              note: "Of total startup cost; do not spend it on upgrades",
            },
            {
              label: "Working capital",
              value: "3–6 months",
              note: "Of operating expenses, including payroll and rent",
            },
            {
              label: "Pre-opening runway",
              value: "8–12 weeks",
              note: "For fit-out, licensing, hiring, and training",
            },
            {
              label: "Break-even buffer",
              value: "2–3 months",
              note: "After opening, before the business finds its rhythm",
            },
          ]}
        />

        <Callout variant="tip" title="Approve the budget in two gates">
          <p>
            Gate one is the feasibility budget: the maximum you are willing to
            invest before you have a signed lease. Gate two is the build budget:
            the detailed, quoted, contingency-included number you approve after
            the site is secured. Do not let gate two quietly become 30% larger
            than gate one. That is how a manageable project becomes a distressed
            one.
          </p>
        </Callout>

        <ArticleFigure
          image={images.atWork}
          caption="A working kitchen is a system, not a list of equipment. The budget has to fund the system: power, water, ventilation, storage, workflow, and the people who run it."
          aspect="aspect-[3/2]"
        />
      </ArticleSection>
    </>
  );
}
