import { images } from "@/lib/images";
import {
  ArticleFigure,
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  FinanceGrid,
} from "../blocks";

export function PartTwo() {
  return (
    <>
      <ArticleSection
        id="location"
        number="05"
        title="Choosing the right location"
      >
        <p>
          Rent is the largest fixed cost in most restaurants, and location is
          the largest driver of revenue. The two are not the same decision. A
          cheap site with no visibility can be more expensive than an expensive
          site that fills the room. A premium site with the wrong frontage,
          access, or utility capacity can destroy a good concept. The job is not
          to find the lowest rent. It is to find the best ratio of revenue
          potential to total occupancy cost.
        </p>

        <ArticleSubhead>Evaluate the site as an operating system</ArticleSubhead>

        <p>
          Most location checklists stop at footfall and rent. Those are only the
          first two lines. A restaurant needs deliveries, gas, water, drainage,
          power, ventilation, waste removal, staff access, and a landlord who
          will fix the roof. It also needs a legal use for the premises. A site
          that looks perfect at 7pm on a Friday can be unusable at 7am on a
          Monday when the delivery truck cannot park.
        </p>

        <DataTable
          caption="Site evaluation criteria"
          head={["Criterion", "What to check", "Why it matters"]}
          rows={[
            [
              "Visibility and frontage",
              "Can a passing driver or pedestrian see the entrance and sign?",
              "Visibility lowers marketing cost and raises walk-in conversion.",
            ],
            [
              "Access and parking",
              "Can guests arrive, drop off, and park without stress?",
              "Poor access suppresses repeat visits, especially for families.",
            ],
            [
              "Footfall and behaviour",
              "Who passes, when, and do they stop?",
              "Pedestrian volume is not demand unless people have a reason to stop.",
            ],
            [
              "Co-tenants",
              "What businesses are next door and upstairs?",
              "Complementary tenants help; noisy or incompatible ones hurt.",
            ],
            [
              "Utility capacity",
              "Power load, water pressure, drainage, gas, internet.",
              "Upgrades can be expensive and may require landlord consent.",
            ],
            [
              "Ventilation and noise",
              "Can extraction be routed without complaint?",
              "Kitchen exhaust and late-night noise are common dispute points.",
            ],
            [
              "Delivery and waste",
              "Can suppliers deliver and can waste be stored and collected?",
              "Back-of-house access is as important as the front door.",
            ],
            [
              "Legal use and structure",
              "Is the building approved for food service? Any heritage or zoning limits?",
              "A fit-out cannot fix an illegal use or an unsafe structure.",
            ],
            [
              "Lease terms",
              "Duration, escalation, deposit, exit, assignment, repairs.",
              "The lease is a long-term operating cost and a risk allocation.",
            ],
          ]}
        />

        <ArticleSubhead>Do the fieldwork yourself</ArticleSubhead>

        <p>
          Visit the site at different times and on different days. Count people
          for 15 minutes at lunch, after work, and late evening. Note how many
          are walking toward the site, how many are passing through, and how many
          stop at neighbouring businesses. Sit in a nearby café and watch where
          people go. Talk to the shopkeepers. They know the street’s rhythm
          better than any broker.
        </p>

        <Checklist
          items={[
            "Count footfall at three dayparts on a weekday and a weekend.",
            "Check parking, drop-off, and pedestrian crossings at peak hours.",
            "Visit in the rain; check drainage, leaks, and access.",
            "Ask the landlord for the building’s approved use and structural drawings.",
            "Test the water pressure and check for storage tanks and pumps.",
            "Ask the electricity authority about the available load and upgrade cost.",
            "Inspect the drainage route and the grease-trap options.",
            "Check mobile signal and internet availability.",
            "Talk to neighbouring businesses about the landlord and the street.",
            "Read the lease with a lawyer before you pay a deposit.",
          ]}
        />

        <ArticleSubhead>The lease is a business partnership</ArticleSubhead>

        <p>
          In Nepal, restaurant leases are often short, informal, and based on
          trust. That works until it does not. A lease should state who is
          responsible for structural repairs, what happens if the building is
          sold, how the rent escalates, whether the tenant can assign the lease,
          and how much notice is required to exit. It should also address the
          fit-out: who owns it, whether it must be removed, and whether the
          landlord contributes to it.
        </p>

        <DataTable
          caption="Lease terms to negotiate before signing"
          head={["Term", "What good looks like", "Why it matters"]}
          rows={[
            [
              "Duration",
              "3–5 years with a renewal option",
              "Gives you time to recover the fit-out investment.",
            ],
            [
              "Rent escalation",
              "Fixed annual increase, clearly stated",
              "Prevents surprise jumps that break the financial model.",
            ],
            [
              "Deposit",
              "3–6 months, with clear refund conditions",
              "Protects cash flow and avoids disputes at exit.",
            ],
            [
              "Key money",
              "Documented, receipted, and proportionate",
              "A large undocumented premium is sunk capital with no protection.",
            ],
            [
              "Fit-out consent",
              "Written approval for structural and utility works",
              "Prevents the landlord from stopping construction halfway.",
            ],
            [
              "Repairs",
              "Clear split between structural and cosmetic",
              "Avoids paying for the building’s deferred maintenance.",
            ],
            [
              "Assignment and subletting",
              "Allowed with consent, not unreasonably withheld",
              "Preserves an exit route if the business changes.",
            ],
            [
              "Termination",
              "Defined notice, cure periods, and compensation",
              "Protects you if the landlord sells or redevelops.",
            ],
            [
              "Registration",
              "Lease registered where required; rent tax handled",
              "Strengthens enforceability and tax compliance.",
            ],
          ]}
        />

        <Callout variant="warning" title="Key money is not rent">
          <p>
            Key money, sometimes called a transfer premium, is a one-time payment
            to secure a lease or take over a premises. It is common in some
            Kathmandu commercial areas. Treat it as sunk capital: it usually
            does not come back, and it cannot be depreciated like equipment.
            Document it, receipt it, and include it in the startup budget before
            you fall in love with the site.
          </p>
        </Callout>

        <ArticleSubhead>Kathmandu, Pokhara, and beyond</ArticleSubhead>

        <p>
          Kathmandu Valley offers the deepest market, the highest rents, the
          strongest competition, and the most complex regulatory environment.
          Pokhara is more tourism-dependent and more seasonal, with a different
          guest mix and a growing domestic market. Other cities — Biratnagar,
          Birgunj, Butwal, Bhairahawa, Nepalgunj, Dharan, Hetauda — have lower
          rents and less competition, but also smaller pools of experienced
          staff and suppliers. A concept that works in Kathmandu may need a
          different menu, price point, and service model elsewhere.
        </p>

        <p>
          If you are opening outside the valley, visit during both the peak and
          the off-season. Check whether the supplier network can deliver the
          ingredients your menu requires, and whether the local labour market
          can staff the kitchen. The cost advantage of a smaller city can
          disappear if you have to import staff or ingredients.
        </p>

        <Callout variant="tip" title="Score the site, do not fall in love with it">
          <p>
            Give each criterion a weight and a score, then compare sites on the
            same page. Visibility and access might carry more weight for a
            walk-in concept; utility capacity and lease terms might carry more
            for a destination restaurant. The score does not make the decision
            for you, but it exposes the trade-offs you are making.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="kitchen"
        number="06"
        title="Kitchen design, equipment, and infrastructure"
      >
        <p>
          A kitchen is a factory with a very short shelf life for mistakes. The
          layout determines how fast food moves, how often staff cross paths,
          how easy it is to keep clean, and whether the team can execute the menu
          at peak. Most kitchen problems are not caused by bad cooks. They are
          caused by a room that was designed for how it looks rather than how it
          works.
        </p>

        <ArticleSubhead>Design the flow before the equipment list</ArticleSubhead>

        <p>
          Start with the journey of a delivery: receiving, inspection, storage,
          preparation, cooking, plating, service, dishwash, and waste. The flow
          should move in one direction where possible, with clean and dirty
          zones separated. Raw and cooked items should not share the same
          surface without cleaning and sanitising between uses. Staff should not
          have to walk through the cooking line to reach the wash-up area.
        </p>

        <DataTable
          caption="A simple back-of-house flow"
          head={["Zone", "Main activity", "Design priority"]}
          rows={[
            [
              "Receiving",
              "Delivery, inspection, weighing",
              "Access, light, scales, temperature check",
            ],
            [
              "Dry storage",
              "Ambient goods, packaging, chemicals",
              "Cool, dry, ventilated, pest-proof, labelled",
            ],
            [
              "Cold storage",
              "Chilled and frozen goods",
              "Temperature control, shelving, airflow, monitoring",
            ],
            [
              "Preparation",
              "Washing, cutting, portioning",
              "Separate raw and ready-to-eat areas, easy cleaning",
            ],
            [
              "Cooking line",
              "Hot production and finishing",
              "Equipment sequencing, ventilation, safe aisles",
            ],
            [
              "Pass",
              "Plating and pickup",
              "Heat lamps, service flow, ticket visibility",
            ],
            [
              "Dishwash",
              "Cleaning and storage",
              "Separation from food, hot water, drainage, ventilation",
            ],
            [
              "Waste",
              "Segregation and collection",
              "Sealed, away from food, accessible for collection",
            ],
          ]}
        />

        <p>
          As a rule of thumb, back-of-house areas consume 30–40% of a
          restaurant’s total floor area, but the ratio depends on the menu,
          volume, and whether there is a bar. A high-volume kitchen with a large
          prep list needs more space than a small tasting-menu kitchen with a
          narrow ingredient set. Do not squeeze the kitchen to add seats. The
          seats will not be worth much if the kitchen cannot serve them.
        </p>

        <ArticleSubhead>Equipment: buy for the menu, not for the catalogue</ArticleSubhead>

        <p>
          Every piece of equipment should earn its place by increasing
          throughput, consistency, safety, or quality. A combi oven can replace
          several smaller appliances and improve consistency, but it needs power,
          water, drainage, and trained staff. A large refrigeration suite can
          protect food safety, but it also consumes energy and requires
          maintenance. The right question is not “What should a restaurant
          have?” but “What does this menu require at this volume?”
        </p>

        <DataTable
          caption="Equipment planning by station"
          head={["Station", "Core equipment", "Planning notes"]}
          rows={[
            [
              "Cold storage",
              "Walk-in or reach-in chillers, freezers, ice machine",
              "Calculate volume from par levels, not guesswork; monitor temperatures.",
            ],
            [
              "Preparation",
              "Prep tables, sinks, cutting boards, scales, vacuum sealer",
              "Separate raw and ready-to-eat surfaces; allow room for trays.",
            ],
            [
              "Hot line",
              "Ranges, ovens, fryers, steamers, holding equipment",
              "Sequence by workflow; check power, gas, and extraction loads.",
            ],
            [
              "Pass",
              "Heat lamps, plating surfaces, ticket rail or screen",
              "Keep the pass close to the dining room but out of the traffic path.",
            ],
            [
              "Dishwash",
              "Dish machine, pre-rinse, sinks, shelving",
              "Hot water, drainage, and ventilation are non-negotiable.",
            ],
            [
              "Bar",
              "Ice, glasswash, refrigeration, speed rail, POS",
              "Separate from food prep; plan for bottle storage and waste.",
            ],
            [
              "Storage",
              "Shelving, bins, lockers, chemical cabinet",
              "Everything labelled; chemicals never stored with food.",
            ],
          ]}
        />

        <p>
          Imported equipment can be excellent, but it comes with customs,
          freight, voltage, spare-part, and service-network risks. Local
          fabrication can be cost-effective for tables, shelving, and some
          cooking equipment, but quality varies. Buy used equipment only after
          inspecting it under power, checking the service history, and confirming
          that parts are available. A cheap used refrigerator that fails in
          August is not cheap.
        </p>

        <ArticleSubhead>The utilities decide what is possible</ArticleSubhead>

        <Checklist
          items={[
            "Electrical load calculated for all equipment at peak, plus 20% headroom.",
            "Three-phase power where required, with a licensed electrician and proper earthing.",
            "Backup generator or inverter sized for refrigeration, lighting, POS, and essential equipment.",
            "Water storage sized for a full service day, with filtration and a pressure pump.",
            "Hot water capacity for dishwash, handwash, and cleaning.",
            "Drainage sized for the dish machine and sinks, with a grease trap.",
            "LPG storage, piping, regulators, and leak detection installed to code.",
            "Kitchen extraction hood, make-up air, and a route that does not create a nuisance.",
            "Fire extinguishers, fire blanket, suppression, emergency lighting, and clear exits.",
            "Pest-proofing: door sweeps, screens, sealed penetrations, and a pest-control contract.",
            "Waste segregation and a collection arrangement that matches your volume.",
            "Network cabling, Wi-Fi, POS, CCTV, and a secure equipment room.",
          ]}
        />

        <Callout variant="warning" title="Do not open before the utilities are tested">
          <p>
            Run the kitchen at full load for at least a day before service. Turn
            on every burner, oven, fryer, refrigerator, dish machine, exhaust
            fan, and air conditioner at the same time. Check the breaker panel,
            water pressure, drainage, gas smell, and ventilation. The problems
            you find in a test are cheap. The same problems found during a full
            dinner service are expensive.
          </p>
        </Callout>

        <ArticleSubhead>Fire, safety, and inspection readiness</ArticleSubhead>

        <p>
          Fire safety is not a box to tick after the fit-out. It is part of the
          design. Keep exits clear. Separate gas cylinders from heat sources.
          Install extinguishers in the kitchen and bar. Train every employee on
          how to use them and where the shut-off valves are. Keep a first-aid
          kit, an emergency contact list, and an incident log. If the
          municipality or fire service requires an inspection, prepare the
          documents and the physical site before the inspector arrives.
        </p>

        <p>
          Food-safety inspectors will look at the same things a good operator
          should already be checking: clean surfaces, separated raw and cooked
          food, temperature control, pest proofing, staff hygiene, water quality,
          waste storage, and records. A kitchen that is designed for cleaning is
          easier to keep clean. That is why washable surfaces, coved corners,
          adequate lighting, and accessible drainage matter.
        </p>

        <ArticleSubhead>Common kitchen mistakes</ArticleSubhead>

        <Checklist
          items={[
            "Designing the dining room first and fitting the kitchen into the leftover space.",
            "Buying equipment before calculating the menu, volume, and utility load.",
            "Forgetting the dishwash area, waste storage, and staff changing space.",
            "Underestimating refrigeration and dry storage for peak purchasing.",
            "Routing extraction into a neighbouring window or courtyard.",
            "Ignoring noise from exhaust fans, music, and late-night deliveries.",
            "Leaving no space for staff to work safely during peak.",
            "Skipping preventive maintenance until something breaks.",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="legal"
        number="07"
        title="Registration, licensing, and compliance"
      >
        <p>
          Nepal’s regulatory system for restaurants is layered: company
          registration at the national level, tax registration with the Inland
          Revenue Department, local permits from the ward or municipality, a
          food business licence under the Food Safety and Quality Act 2081, and
          additional approvals if you serve alcohol, play music, or operate in a
          tourist-classified property. The layers are manageable if you sequence
          them correctly. They become expensive if you open first and ask
          questions later.
        </p>

        <Callout variant="legal" title="This is a map, not legal advice">
          <p>
            Fees, forms, inspection practices, and local requirements change.
            The sequence below reflects the current national framework and
            common local practice, but you must confirm the specifics with your
            municipality, the Inland Revenue Department, the Department of Food
            Technology and Quality Control where relevant, and a licensed
            professional before you commit capital.
          </p>
        </Callout>

        <ArticleSubhead>The registration sequence</ArticleSubhead>

        <DataTable
          caption="A practical sequence for a new restaurant"
          head={["Step", "Authority", "What you get", "Typical timing"]}
          rows={[
            [
              "1. Choose the legal structure",
              "Professional advice",
              "Sole proprietorship, partnership, or private limited company",
              "Before registration",
            ],
            [
              "2. Register the business",
              "Office of the Company Registrar or local authority",
              "Company or firm registration certificate",
              "Days to weeks",
            ],
            [
              "3. Register for PAN",
              "Inland Revenue Department",
              "Permanent Account Number",
              "Days",
            ],
            [
              "4. Register for VAT if required",
              "Inland Revenue Department",
              "VAT certificate and invoice authorization",
              "After threshold or voluntary",
            ],
            [
              "5. Obtain the ward operating permit",
              "Ward or municipality",
              "Local business permit and signboard tax",
              "Days to weeks",
            ],
            [
              "6. Obtain the food business licence",
              "Local level (municipality or rural municipality)",
              "Food business licence, valid two years",
              "Up to 30 days after complete application",
            ],
            [
              "7. Obtain a liquor licence if applicable",
              "Municipality and/or Inland Revenue Office",
              "On-premises liquor licence",
              "Weeks; annual renewal",
            ],
            [
              "8. Complete fire, health, and labour registrations",
              "Local fire service, health office, Social Security Fund",
              "Clearances and employer registration",
              "As required",
            ],
            [
              "9. Register employees and payroll systems",
              "Social Security Fund, IRD",
              "SSF registration and payroll compliance",
              "Before first payroll",
            ],
          ]}
        />

        <ArticleSubhead>Choosing a legal structure</ArticleSubhead>

        <p>
          A sole proprietorship is simple and inexpensive, but the owner is
          personally liable for the business’s debts and obligations. A
          partnership spreads capital and responsibility but requires a clear
          agreement on decision-making, profit sharing, and exit. A private
          limited company is a separate legal entity, which supports liability
          protection, outside investment, and a more formal governance
          structure, but it comes with more compliance and accounting work.
        </p>

        <DataTable
          caption="Common business structures"
          head={["Structure", "Best for", "Main trade-off"]}
          rows={[
            [
              "Sole proprietorship",
              "Very small, owner-operated businesses",
              "Simple, but unlimited personal liability",
            ],
            [
              "Partnership",
              "Two or more owner-operators",
              "Shared capital and skills, but needs a strong agreement",
            ],
            [
              "Private limited company",
              "Growth, investment, multiple shareholders",
              "Limited liability, but higher compliance and reporting",
            ],
          ]}
        />

        <p>
          For a private limited company, the Companies Act 2063 requires a
          minimum paid-up capital of NPR 100,000. Registration fees at the Office
          of the Company Registrar scale with authorized capital, so the fee for
          a company with NPR 10 million in authorized capital is higher than for
          a company at the minimum. Confirm the current fee schedule and the
          documents required before filing.
        </p>

        <ArticleSubhead>PAN, VAT, and invoicing</ArticleSubhead>

        <p>
          PAN registration is the base tax identity for the business. VAT
          registration becomes mandatory when taxable turnover crosses the
          threshold: NPR 5 million for goods, and NPR 3 million for services or
          mixed goods and services, measured over the previous 12 months. A
          restaurant is a service business, so the NPR 3 million threshold is the
          relevant one for most operators. Registration is required within 30
          days of crossing the threshold.
        </p>

        <p>
          The standard VAT rate is 13%. VAT-registered businesses must issue
          compliant invoices, keep records, and file returns. Filing is
          generally monthly, with the return and payment due by the 25th of the
          following Nepali month, though some smaller taxpayers may be allowed a
          longer filing cycle. Confirm your filing frequency with the IRD. Some
          categories, including liquor, are required to register regardless of
          turnover, so do not assume the threshold is the only trigger.
        </p>

        <FinanceGrid
          items={[
            {
              label: "VAT rate",
              value: "13%",
              note: "Standard rate on taxable supplies",
            },
            {
              label: "Services threshold",
              value: "NPR 3m",
              note: "Rolling 12-month taxable turnover",
            },
            {
              label: "Goods threshold",
              value: "NPR 5m",
              note: "For goods-only businesses",
            },
            {
              label: "Registration deadline",
              value: "30 days",
              note: "After crossing the applicable threshold",
            },
          ]}
        />

        <p>
          A practical warning: many restaurants register for VAT voluntarily
          from day one because corporate clients, delivery platforms, and hotel
          partners expect tax invoices. Voluntary registration also allows input
          credit on purchases, but it adds monthly compliance and requires
          disciplined record-keeping. Model both scenarios before deciding.
        </p>

        <ArticleSubhead>The food business licence</ArticleSubhead>

        <p>
          The Food Safety and Quality Act 2081, enacted in 2024, replaced the
          older Food Act 2023. Under section 9, hotels, restaurants, catering
          services, food courts, and similar local food-service businesses are
          licensed by the relevant local level: the municipality or rural
          municipality, through the chief or a designated officer. The
          Department of Food Technology and Quality Control handles imports,
          exports, and other covered food businesses, not ordinary restaurants.
        </p>

        <p>
          The licence is valid for two years from the date of issue. Renewal
          should be filed at least 35 days before expiry. Late renewal is
          possible within six months, but at double the prescribed fee. The
          authority is required to decide on a complete application within 30
          days, and it may inspect the premises or require laboratory tests. The
          Act sets the framework, but the fee itself is prescribed locally, so
          two municipalities can charge different amounts.
        </p>

        <Checklist
          items={[
            "Business registration certificate and PAN.",
            "Proof of premises: lease agreement, ownership document, or rent receipt.",
            "Premises layout and food-handling areas.",
            "Water source and quality information.",
            "List of food categories and processes.",
            "Waste management arrangement.",
            "Staff health checks or food-handler certificates as required locally.",
            "Pest-control and cleaning arrangements.",
            "Application fee and any local forms.",
          ]}
        />

        <Callout variant="warning" title="Do not call it an annual licence">
          <p>
            Several older guides still describe the food licence as annual.
            Under the Food Safety and Quality Act 2081, the normal validity is
            two years, with renewal at least 35 days before expiry. Build the
            two-year renewal date into your compliance calendar and assign
            someone to own it.
          </p>
        </Callout>

        <ArticleSubhead>Liquor licensing</ArticleSubhead>

        <p>
          If you serve alcohol, you need a separate liquor licence. The Liquor
          Act 2031, the Excise Duty Act 2058, and the Local Government Operation
          Act 2074 shape the framework. In practice, retail, bar, restaurant, and
          hotel licences are issued through the local municipality or the
          relevant Inland Revenue Office, depending on the activity and local
          arrangements. The licence is generally renewed annually, and the
          conditions cover hours, age verification, signage, storage, and
          responsible service.
        </p>

        <p>
          Fees vary by establishment category, location, and local bylaw. A
          published schedule lists around NPR 6,000 for an ordinary hotel,
          restaurant, bar, or lodge in a stated category, but the total cost of
          compliance is higher once inspections, excise requirements, and
          professional fees are included. Do not budget from a single number
          you found online. Confirm the current fee and document list with your
          municipality and the Inland Revenue Office.
        </p>

        <Callout variant="legal" title="Liquor changes the business">
          <p>
            Alcohol affects your licence, insurance, staffing, security, cash
            controls, inventory shrinkage, and tax position. It can also affect
            your corporate tax rate: the standard rate is 25%, while a 30% rate
            applies to entities carrying on the business of liquor or beer under
            the Income Tax Act. Whether a restaurant with a bar falls into that
            classification depends on the facts and current practice. Confirm
            your position with a tax adviser before modelling the business.
          </p>
        </Callout>

        <ArticleSubhead>Tourism licences and star classification</ArticleSubhead>

        <p>
          An ordinary restaurant does not need a tourism licence or a star
          rating to operate. Those apply to tourist-standard hotels, resorts,
          and other classified accommodation. If you plan to describe your
          property as “tourist standard” or “star rated”, you need to go through
          the relevant classification process with the Department of Tourism.
          Do not use those terms loosely in marketing; they are regulated
          claims, not adjectives.
        </p>

        <ArticleSubhead>Local permits, rent tax, and signage</ArticleSubhead>

        <p>
          The ward or municipality will typically require an operating permit and
          a signboard tax. The amount varies by local government and premises
          size. If you rent, the rent itself may be subject to a 10% withholding
          tax, and the lease may need to be registered. Keep the receipts. These
          are the records that protect you during a tax inspection or a dispute
          with a landlord.
        </p>

        <p>
          Other approvals may apply depending on the premises and the activity:
          fire safety, health and sanitation, environmental conditions, music or
          public-performance licensing, and landlord consent for structural
          works. The list is not infinite, but it is longer than most first-time
          operators expect. Ask the municipality for a complete checklist in
          writing before you start the fit-out.
        </p>

        <ArticleSubhead>Employer registration and insurance</ArticleSubhead>

        <p>
          Once you hire, you become an employer under the Labour Act 2074. That
          means written contracts, minimum wage compliance, working-hour limits,
          overtime, leave, festival allowance, and Social Security Fund
          registration. The SSF contribution is 31% of basic salary: 11% from the
          employee and 20% from the employer. Budget the employer share from the
          beginning; it is not an optional extra.
        </p>

        <p>
          Insurance is not always legally mandatory, but it is operationally
          essential. Property insurance covers fire, theft, and damage. Public
          liability covers injury to guests. Business-interruption cover can
          replace income during a forced closure. Workers’ compensation or
          employer liability may be required or prudent depending on the policy
          and the law. Compare policies carefully; the cheapest premium is often
          the one with the most exclusions.
        </p>

        <DataTable
          caption="A basic compliance calendar"
          head={["Frequency", "Task", "Owner"]}
          rows={[
            ["Monthly", "VAT return and payment, payroll, SSF contribution", "Accounts / admin"],
            ["Monthly", "Sales tax, purchase records, cash reconciliation", "Accounts"],
            ["Quarterly", "Management accounts, stock count, supplier review", "Owner / manager"],
            ["Annually", "Income tax return, advance tax, local taxes", "Accounts"],
            ["Annually", "Liquor licence renewal, if applicable", "Manager"],
            ["Every 2 years", "Food business licence renewal (35 days before expiry)", "Manager"],
            ["As required", "Fire inspection, health inspection, labour records", "Manager"],
          ]}
        />

        <p>
          The best compliance system is boring: a shared calendar, a named owner
          for each task, a folder for every certificate, and a monthly check
          before the deadline. The worst is a drawer full of expired paper that
          nobody opens until an inspector arrives.
        </p>
      </ArticleSection>

      <ArticleSection
        id="menu"
        number="08"
        title="Menu costing and pricing"
      >
        <p>
          Menu costing is where a restaurant’s ambition meets its arithmetic.
          You can have a beautiful concept, a perfect location, and a talented
          kitchen, but if the menu is priced from intuition, the business will
          leak money on every plate. The goal is not to maximise the food cost
          percentage. It is to maximise contribution margin while giving the
          guest a reason to return.
        </p>

        <ArticleSubhead>Cost the recipe, not the invoice</ArticleSubhead>

        <p>
          A supplier invoice tells you what you paid for a case. A recipe cost
          tells you what it costs to put one portion on a plate. The difference
          is yield: trim, peel, bone, cooking loss, and waste. If you buy a
          protein at NPR 800 per kilogram and lose 25% to trim and cooking, the
          usable cost is NPR 1,067 per kilogram, not NPR 800. Costing from the
          invoice without yield is one of the most common reasons a menu looks
          profitable on paper and loses money in practice.
        </p>

        <DataTable
          caption="Illustrative plate cost for a generic main course"
          head={["Component", "Quantity", "Unit cost", "Cost"]}
          rows={[
            ["Protein", "180 g usable", "NPR 1,050/kg", "NPR 189"],
            ["Starch", "120 g", "NPR 180/kg", "NPR 22"],
            ["Vegetable", "100 g", "NPR 240/kg", "NPR 24"],
            ["Sauce and garnish", "1 portion", "NPR 35/portion", "NPR 35"],
            ["Cooking oil and seasoning", "1 portion", "NPR 12/portion", "NPR 12"],
            ["Wastage allowance", "5%", "—", "NPR 14"],
            ["Total plate cost", "", "", "NPR 296"],
          ]}
        />

        <p>
          The plate cost is not the full cost of the dish. Add packaging if it
          is delivered, payment fees if it is paid by card, and a share of
          kitchen labour and energy. For menu pricing, many operators use a
          food-cost percentage that covers ingredients and a small wastage
          allowance, then recover labour and overhead through the gross margin.
          That is acceptable if the percentage is set from the actual P&amp;L,
          not from an industry slogan.
        </p>

        <ArticleSubhead>Price from the margin you need</ArticleSubhead>

        <p>
          If a plate costs NPR 296 and you target a 30% food cost, the indicated
          menu price is NPR 987. If you target 35%, the price is NPR 846. The
          difference is not just price; it is the amount of contribution each
          cover generates. A lower food-cost percentage is not automatically
          better if it prices the restaurant out of its market. A higher
          food-cost percentage can be better if it drives volume and total
          contribution.
        </p>

        <FinanceGrid
          items={[
            {
              label: "Plate cost",
              value: "NPR 296",
              note: "Illustrative, including wastage",
            },
            {
              label: "Target food cost",
              value: "30%",
              note: "A common full-service planning range",
            },
            {
              label: "Indicated price",
              value: "NPR 987",
              note: "Plate cost ÷ 0.30",
            },
            {
              label: "Contribution per cover",
              value: "NPR 691",
              note: "Before labour, rent, and overhead",
            },
          ]}
        />

        <p>
          The target food cost itself should come from the business model. If
          rent and labour are high, you need a lower food cost percentage or a
          higher average spend. If the concept is value-driven, you may accept a
          higher food cost and make up for it with volume and a simpler service
          model. The number is a management target, not a moral rule.
        </p>

        <ArticleSubhead>VAT, service charge, and the guest-facing price</ArticleSubhead>

        <p>
          Nepal’s treatment of VAT and service charge on restaurant bills has
          been contested. In 2022, the Kathmandu District Court ruled that
          restaurants could not add VAT and service charge on top of the menu
          price in a way that exceeded the displayed price. In January 2023, the
          Supreme Court struck down the mandatory 10% service charge under
          section 87(3) of the Labour Act 2074, holding that employers could not
          require guests to pay a charge beyond the menu price. The practical
          position is still debated, and enforcement has varied.
        </p>

        <p>
          For a new restaurant, the safe planning assumption is that the
          guest-facing menu price should be the number the guest can defend, and
          that the business model should not depend on a mandatory service
          charge to pay wages. If you want to operate a service-inclusive model,
          state it clearly, price accordingly, and take professional advice on
          how VAT is displayed and remitted. Do not build a payroll plan around
          a charge that a court has already found problematic.
        </p>

        <Callout variant="legal" title="Model the net, not the sticker">
          <p>
            If the menu price is NPR 1,000 and VAT is included, the net revenue
            is not NPR 1,000. It is NPR 1,000 divided by 1.13, or about NPR 885,
            before any other deductions. If VAT is added on top, the guest pays
            more than the menu price, which is exactly the practice the courts
            have scrutinised. Build your unit economics on the net amount the
            business actually keeps.
          </p>
        </Callout>

        <ArticleSubhead>Menu engineering: margin meets popularity</ArticleSubhead>

        <p>
          Once the menu is live, track two things for every item: contribution
          margin and sales mix. Plot them against the menu average. The result is
          a simple four-box view that tells you what to protect, reprice,
          redesign, or remove.
        </p>

        <DataTable
          caption="A menu engineering framework"
          head={["Quadrant", "What it means", "Action"]}
          rows={[
            [
              "High margin, high popularity",
              "The stars: guests love them and they make money",
              "Protect quality, keep visible, train the team to recommend them",
            ],
            [
              "High margin, low popularity",
              "Puzzles: profitable but not selling",
              "Rename, reposition, improve the description, or bundle",
            ],
            [
              "Low margin, high popularity",
              "Plowhorses: popular but thin",
              "Reprice carefully, adjust portion or recipe, use as a traffic driver",
            ],
            [
              "Low margin, low popularity",
              "Dogs: neither loved nor profitable",
              "Remove, unless it serves a strategic guest need",
            ],
          ]}
        />

        <p>
          Menu engineering is not a licence to remove every dish a guest loves.
          Some items exist to bring families in, to signal generosity, or to
          serve a dietary need. The point is to know which items are carrying
          the business and which are quietly subsidised by the rest of the menu.
        </p>

        <ArticleSubhead>Beverage costing is different</ArticleSubhead>

        <p>
          Beverages usually carry a lower cost percentage than food, but they
          also carry higher shrinkage, glassware breakage, ice, garnish, and
          service labour. A cocktail’s cost is not just the spirit; it is the
          modifier, the citrus, the syrup, the ice, the garnish, and the spill.
          Measure pours, count bottles, and reconcile sales against depletion.
          If you cannot explain the variance, you do not have beverage control.
        </p>

        <Checklist
          items={[
            "Every recipe has a written yield and portion size.",
            "Supplier prices are updated at least monthly.",
            "Waste is recorded, not estimated.",
            "Menu prices are tested against the target food cost and the market.",
            "VAT is modelled as a net revenue deduction, not ignored.",
            "Beverage pours are measured and reconciled.",
            "Menu mix is reviewed monthly, not once a year.",
            "Allergen and dietary information is accurate and accessible.",
          ]}
        />

        <ArticleFigure
          image={images.plateTwo}
          caption="A menu is a financial document as much as a creative one. Every plate carries a cost, a price, a margin, and a promise."
          aspect="aspect-[3/2]"
        />

        <Callout variant="tip" title="Do not copy the competitor’s price">
          <p>
            The restaurant next door may have a lower rent, a different labour
            model, or a landlord who is also a supplier. Copying its prices
            imports its economics without importing its advantages. Price from
            your own cost base, then test the result against the market and the
            guest’s perception of value.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
