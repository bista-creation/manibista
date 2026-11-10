import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  PullQuote,
  SourceLink,
} from "../../blocks";
import { investmentModels, preOpening } from "./data";

const interiorShareRows = investmentModels.map((model) => {
  const interior = model.figures.base[2] + model.figures.base[5];
  return [
    model.name,
    `NPR ${interior.toFixed(2)}m`,
    `NPR ${preOpening(model, "base").toFixed(2)}m`,
    `${((interior / preOpening(model, "base")) * 100).toFixed(1)}%`,
  ];
});

const kitchenShareRows = investmentModels.map((model) => {
  const kitchen = model.figures.base[3] + model.figures.base[4];
  return [
    model.name,
    `NPR ${kitchen.toFixed(2)}m`,
    `NPR ${preOpening(model, "base").toFixed(2)}m`,
    `${((kitchen / preOpening(model, "base")) * 100).toFixed(1)}%`,
  ];
});

const utilityShareRows = investmentModels.map((model) => {
  const utilities =
    model.figures.base[6] + model.figures.base[7] + model.figures.base[8];
  return [
    model.name,
    `NPR ${model.figures.base[6].toFixed(2)}m`,
    `NPR ${model.figures.base[7].toFixed(2)}m`,
    `NPR ${model.figures.base[8].toFixed(2)}m`,
    `NPR ${utilities.toFixed(2)}m`,
    `${((utilities / preOpening(model, "base")) * 100).toFixed(1)}%`,
  ];
});

export function StartupCostPartTwo() {
  return (
    <>
      <ArticleSection
        id="property"
        number="05"
        title="Property, rent, and deposits"
      >
        <p>
          Rent is not a single monthly payment. It is a contract that decides
          how much cash leaves the business before a single guest arrives, how
          long the business has to recover its fit-out, and who pays when the
          building turns out to need more work than the landlord disclosed. In
          Nepal, the gap between a good lease and a bad one can be larger than
          the gap between two kitchen quotations.
        </p>

        <p>
          Published commercial listings show how wide the market is. A 2026
          guide from{" "}
          <SourceLink href="https://thulobazaar.com.np/en/blog/renting-commercial-space-nepal-guide">
            Thulo Bazaar
          </SourceLink>{" "}
          describes prime Kathmandu retail at roughly NPR 150–400 per square
          foot per month, secondary commercial streets at NPR 100–250, and
          outer residential high streets at NPR 30–70.{" "}
          <SourceLink href="https://www.mlsnepal.com/commercial-for-rent/kathmandu">
            MLS Nepal
          </SourceLink>{" "}
          carries current listings across those bands. These are listing
          signals, not valuations of a specific room.
        </p>

        <DataTable
          caption="Published rent signals, 2026 (NPR per sq ft per month)"
          head={["Market", "Planning range", "What the range reflects"]}
          rows={[
            [
              "Kathmandu prime retail — Thamel, Durbar Marg",
              "150–400",
              "Tourist footfall, frontage, and premium address",
            ],
            [
              "Kathmandu commercial — Putalisadak, New Road",
              "100–250",
              "Office and retail demand, transit access, and visibility",
            ],
            [
              "Kathmandu residential high street — Jhamsikhel, Lazimpat, Baluwatar",
              "80–200",
              "Neighbourhood spending, embassies, and professional households",
            ],
            [
              "Kathmandu outer — Imadol, Harisiddhi, Koteshwor, Jadibuti",
              "30–70",
              "Lower rent, growing residential demand, and less tourist footfall",
            ],
            [
              "Pokhara Lakeside",
              "80–180",
              "Tourism seasonality and lakefront access",
            ],
            [
              "Pokhara off-lakeside",
              "25–70",
              "Local demand and lower visitor footfall",
            ],
            [
              "Biratnagar Main Road",
              "50–120",
              "Regional commerce and frontage",
            ],
            [
              "Birgunj, Butwal, Bharatpur",
              "30–100",
              "Secondary-city demand and building quality",
            ],
            [
              "Smaller tourism towns",
              "15–60",
              "Low base rent, but low volume and high seasonality",
            ],
          ]}
        />

        <Callout variant="warning" title="The rent line is bigger than the rent">
          <p>
            Budget for the deposit, advance rent, key money, brokerage, legal
            review, stamp duty or registration where applicable, service
            charges, signage fees, and the rent that runs during fit-out. A
            three-month deposit on a NPR 150,000 monthly rent is NPR 450,000
            before the first chair is bought.
          </p>
        </Callout>

        <ArticleSubhead>What a lease should answer</ArticleSubhead>

        <Checklist
          items={[
            "The exact rent, escalation, and review dates for the full term.",
            "The deposit, advance, key money, and whether any of it is refundable.",
            "The rent-free fit-out period and the date rent starts.",
            "Who pays for structural repairs, waterproofing, electrical upgrades, and drainage.",
            "Whether the landlord permits the intended use, signage, outdoor seating, and operating hours.",
            "The building's approved use, occupancy, and any restrictions that affect a restaurant.",
            "The available electrical load, water supply, drainage route, and gas storage position.",
            "The right to install a kitchen exhaust and where the duct can discharge.",
            "The reinstatement obligation at the end of the lease.",
            "The assignment, subletting, renewal, and early-exit terms.",
            "The dispute-resolution process and the governing jurisdiction.",
            "The landlord's ownership evidence and authority to lease the property.",
          ]}
        />

        <p>
          A lease is also a financing instrument. If the fit-out has a five-year
          life and the lease has a two-year term with no renewal option, the
          business is taking five years of risk for two years of security. That
          mismatch should either change the lease or change the budget.
        </p>

        <Callout variant="tip" title="Negotiate the opening, not just the rent">
          <p>
            A longer rent-free fit-out period, a cap on escalation, a landlord
            contribution to electrical capacity, or a right to install ventilation
            can be worth more than a small discount on the monthly rent. Put
            every promise in the lease, including the ones made in conversation.
          </p>
        </Callout>

        <PullQuote quote="A good lease does not make a restaurant profitable. A bad lease can make it impossible." />
      </ArticleSection>

      <ArticleSection
        id="construction"
        number="06"
        title="Renovation, construction, and building works"
      >
        <p>
          The building is the part of the budget most likely to surprise a
          first-time operator. A room that looks ready may need a new floor
          drain, a grease trap, a three-phase supply, a fire-rated corridor, or a
          structural opening for the exhaust. None of those are visible in a
          property listing.
        </p>

        <p>
          Published commercial construction guides put standard office or retail
          work at roughly NPR 3,000–4,500 per square foot, mid-range hospitality
          work at NPR 4,000–6,000, and premium commercial work at NPR 5,500–9,500
          or more.{" "}
          <SourceLink href="https://www.yetihomeconstruction.com/commercial-construction-nepal.html">
            Yeti Home Construction
          </SourceLink>{" "}
          also notes that interior fit-out typically adds 30–50% on top of the
          base construction cost. A restaurant usually sits at the higher end
          because of drainage, ventilation, gas, refrigeration, and wash-down
          surfaces.
        </p>

        <DataTable
          caption="Construction scope checklist"
          head={["Work package", "What to verify", "Budget treatment"]}
          rows={[
            [
              "Demolition and making good",
              "Load-bearing walls, existing services, debris removal, landlord approval",
              "Measured scope; avoid a lump-sum allowance",
            ],
            [
              "Structure and openings",
              "Beam loads, lintels, stair access, roof penetrations, seismic considerations",
              "Engineer's scope; not a finish allowance",
            ],
            [
              "Floors and drainage",
              "Fall to drain, grease trap, wash-down finish, waterproofing, threshold details",
              "Wet-area specialist; test before closing up",
            ],
            [
              "Walls and ceilings",
              "Moisture resistance, acoustic separation, fire rating, access panels",
              "Square-foot rate plus specialist work",
            ],
            [
              "Washrooms",
              "Accessible provision, ventilation, water pressure, drainage, finishes",
              "Often underestimated in older buildings",
            ],
            [
              "Electrical infrastructure",
              "Connected load, phase, meter, panel, earthing, cable routes, backup",
              "Licensed electrician and NEA approval",
            ],
            [
              "Plumbing and water",
              "Supply size, pressure, storage, filtration, hot water, waste route",
              "Pressure test before handover",
            ],
            [
              "Ventilation and exhaust",
              "Hood length, duct route, make-up air, discharge, fire dampers, noise",
              "Specialist design; landlord consent",
            ],
            [
              "Fire safety",
              "Exit width, travel distance, alarms, extinguishers, emergency lighting, signage",
              "Compliance scope, not a decorative add-on",
            ],
            [
              "External works",
              "Signage, facade, outdoor seating, drainage, access, parking",
              "Municipal approval and landlord consent",
            ],
          ]}
        />

        <ArticleSubhead>Tenant works versus landlord works</ArticleSubhead>

        <p>
          Before signing, list every item and mark who pays. The most common
          disputes are about electrical capacity, water pressure, structural
          repairs, waterproofing, grease-trap replacement, and who restores the
          premises at the end. If the lease says &quot;as is,&quot; the budget
          must carry the risk.
        </p>

        <Checklist
          items={[
            "Obtain a building-use or occupancy document and confirm restaurant use is permitted.",
            "Confirm the landlord's ownership and authority to lease the premises.",
            "Commission an electrical load assessment before designing the kitchen.",
            "Inspect the drainage route and confirm a grease trap can be installed and serviced.",
            "Confirm water pressure, storage capacity, and the quality of the supply.",
            "Check the exhaust route and whether the landlord or neighbours can object.",
            "Confirm fire exits, travel distances, and the building's fire strategy.",
            "Get written landlord consent for structural work, signage, and outdoor seating.",
            "Agree the reinstatement scope before the fit-out begins.",
            "Keep a dated photo and video record of the condition at handover.",
          ]}
        />

        <Callout variant="legal" title="Do not sign before the services survey">
          <p>
            A rent negotiation can be undone by a building that cannot support
            the kitchen. Ask for a services survey before signing, or make the
            lease conditional on obtaining the necessary electrical, water,
            drainage, ventilation, and fire approvals within a defined period.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="interiors"
        number="07"
        title="Interiors, furniture, and the guest experience"
      >
        <p>
          The dining room is a cost center that sells. It has to look right, feel
          comfortable, absorb sound, survive cleaning, and still leave enough
          capital for the kitchen and the working-capital buffer. The most
          expensive interior is not the one with the best materials. It is the
          one that has to be redone because the seating plan, lighting, or
          acoustics did not work.
        </p>

        <DataTable
          caption="Interior cost drivers"
          head={["Element", "What drives cost", "What to decide early"]}
          rows={[
            [
              "Seating plan",
              "Seat count, circulation, accessible routes, service stations",
              "How many covers the room must serve, and at what turn rate",
            ],
            [
              "Joinery and millwork",
              "Custom counters, banquettes, screens, shelving, and built-in storage",
              "Standard modules versus bespoke fabrication",
            ],
            [
              "Floor and wall finishes",
              "Durability, slip resistance, cleaning, repair, and replacement",
              "Commercial-grade specification, not residential",
            ],
            [
              "Lighting",
              "Layer count, dimming, colour temperature, emergency lighting",
              "A lighting designer or a clear reflected-ceiling plan",
            ],
            [
              "Acoustics",
              "Hard surfaces, ceiling treatment, background noise, conversation",
              "Whether the room will be loud at full occupancy",
            ],
            [
              "Washrooms",
              "Fixtures, ventilation, accessibility, finishes, signage",
              "Compliance and customer perception",
            ],
            [
              "Signage and facade",
              "Fabrication, illumination, permission, installation",
              "Municipal signboard rules and landlord consent",
            ],
            [
              "Outdoor seating",
              "Furniture, weather protection, heating, drainage, permits",
              "Whether the additional covers are actually usable year-round",
            ],
          ]}
        />

        <p>
          In the five models, interior fit-out and furniture together represent
          roughly a quarter to three-tenths of pre-opening cost. That is a
          planning observation, not a rule. A design-led room can easily exceed
          it; a restrained neighbourhood room can sit below it.
        </p>

        <DataTable
          caption="Interior and furniture share of pre-opening cost, base case"
          head={["Model", "Interior + furniture", "Pre-opening subtotal", "Share"]}
          rows={interiorShareRows}
        />

        <ArticleSubhead>Furniture: retail price is not commercial specification</ArticleSubhead>

        <p>
          Published retail listings are useful for order of magnitude, but they
          are not commercial furniture quotations.{" "}
          <SourceLink href="https://rhinolandfurniture.com/dining-chairs">
            Rhinoland Furniture
          </SourceLink>{" "}
          lists dining chairs from roughly NPR 10,500 to NPR 16,500, while other
          Nepal listings show chairs from around NPR 4,114 and small dining
          tables around NPR 17,800. Commercial frames, contract fabrics, higher
          seat counts, and delivery to a restaurant can change the number.
        </p>

        <p>
          A chair that costs NPR 4,000 and fails after eight months is not
          cheaper than a chair that costs NPR 12,000 and lasts four years. The
          same logic applies to tables, banquettes, and outdoor furniture. Buy
          for the cleaning regime, the turnover, and the replacement budget, not
          just the opening photograph.
        </p>

        <Callout variant="tip" title="Spend where the guest touches the room">
          <p>
            Comfortable seating, good lighting, a clean washroom, and a room
            that is not painfully loud usually matter more than a feature wall.
            Those are also the items that are hardest to fix after opening.
          </p>
        </Callout>

        <ArticleSubhead>Where not to cut</ArticleSubhead>

        <Checklist
          items={[
            "Commercial-grade flooring and wall finishes in wet and high-traffic areas.",
            "A seating plan that meets accessible circulation and fire egress requirements.",
            "Lighting with the right colour temperature, dimming, and emergency backup.",
            "Acoustic treatment that keeps conversation possible at full occupancy.",
            "A washroom specification that can be cleaned and maintained.",
            "Signage that is permitted, visible, and safe to install.",
            "Spare fabric, tile, and paint for repairs.",
          ]}
        />

        <p>
          Design fees are a separate line. Depending on the scope, an interior
          designer or architect may charge a percentage of fit-out cost, a fixed
          fee, or a per-square-foot fee. Get the deliverable list in writing:
          concept, layouts, elevations, lighting, furniture schedule, tender
          drawings, site visits, and handover.
        </p>
      </ArticleSection>

      <ArticleSection
        id="kitchen"
        number="08"
        title="Real Commercial Kitchen Equipment Prices in Nepal"
      >
        <p>
          Commercial kitchen equipment is the largest movable line in most
          restaurant budgets, and the least transparent. A published package
          price is not a quotation for your site. A quotation for another site is
          not a current price. A supplier&apos;s catalogue range is not an
          installed cost. This section separates those categories so the budget
          is built on evidence rather than a single attractive number.
        </p>

        <Callout variant="note" title="How to read equipment prices">
          <p>
            Four kinds of evidence appear below: a supplier&apos;s published
            catalogue or package price; a historical quotation; an analytical
            planning estimate; and a current written quotation for a defined
            scope. Only the last one can be treated as a price for your
            restaurant. Where no current written quotation exists, the figure is
            marked <strong>QUOTE REQUIRED</strong>.
          </p>
        </Callout>

        <DataTable
          caption="Evidence hierarchy for commercial kitchen equipment price Nepal"
          head={["Evidence type", "What it proves", "What it does not prove", "Status"]}
          rows={[
            [
              "Published catalogue or package price",
              "The supplier has publicly offered that package at that price",
              "That the package fits your menu, site, utilities, or compliance conditions",
              "VERIFIED PRIMARY DOCUMENT",
            ],
            [
              "Historical quotation",
              "A price was offered for a defined scope on a stated date",
              "That the same scope, specification, tax, or price is available today",
              "HISTORICAL REFERENCE",
            ],
            [
              "Analytical planning estimate",
              "A budget allowance consistent with this guide's assumptions",
              "That any supplier will deliver the scope at that amount",
              "ESTIMATED",
            ],
            [
              "Current written quotation",
              "A supplier has priced your defined scope, quantity, site, and terms",
              "That the supplier will perform, or that the scope is complete",
              "VERIFIED SUPPLIER QUOTATION",
            ],
          ]}
        />

        <ArticleSubhead>Verified supplier evidence: published package prices</ArticleSubhead>

        <p>
          <SourceLink href="https://www.gai.com.np/">GAI</SourceLink> publishes
          commercial kitchen, bakery, refrigeration, and bar packages. Three
          published examples are the Commercial Burger Kitchen Setup Package at
          NPR 515,555, the Complete Cafe Kitchen Equipment Setup at NPR 1,000,000,
          and the Professional Bar Setup &amp; Equipment Package at NPR 1,120,111.
          These are the supplier&apos;s published package examples.
          They are not quotations for your site, and they are not market
          averages.
        </p>

        <DataTable
          caption="GAI published kitchen and bar package examples, accessed 10 November 2026"
          head={["Published package", "Published price", "What it illustrates", "Status", "Confidence"]}
          rows={[
            [
              "Commercial Burger Kitchen Setup Package",
              "NPR 515,555",
              "A compact burger kitchen package can absorb a meaningful share of a small café budget",
              "VERIFIED PRIMARY DOCUMENT",
              "Medium",
            ],
            [
              "Complete Cafe Kitchen Equipment Setup",
              "NPR 1,000,000",
              "A fuller café kitchen moves the equipment line toward the base case",
              "VERIFIED PRIMARY DOCUMENT",
              "Medium",
            ],
            [
              "Professional Bar Setup & Equipment Package",
              "NPR 1,120,111",
              "Beverage service adds equipment, storage, and front-of-house cost",
              "VERIFIED PRIMARY DOCUMENT",
              "Medium",
            ],
          ]}
        />

        <Callout variant="warning" title="A package is not an installed kitchen">
          <p>
            Confirm what the package includes: delivery, installation, gas
            connection, electrical connection, water, drainage, commissioning,
            training, warranty, spare parts, and after-sales support. Ask for a
            site visit and a written scope. A low package price with exclusions
            can be more expensive than a higher installed quote.
          </p>
        </Callout>

        <ArticleSubhead>Historical quotation check: the Mandabya figure</ArticleSubhead>

        <p>
          A quotation dated 2082-05-05 BS for NPR 1,485,650 attributed to
          Mandabya Steels Industries has been mentioned in some discussions of
          this guide. The original document was not found in the article archive,
          the supplier&apos;s public website, or the public sources reviewed for
          this audit. No supplier was contacted. The figure is therefore not used
          in any budget, total, or recommendation. It is recorded only as an
          unverified historical reference.
        </p>

        <DataTable
          caption="Alleged Mandabya quotation: document check"
          head={["Item", "Claimed detail", "What was found", "Status", "Confidence"]}
          rows={[
            [
              "Quotation date",
              "2082-05-05 BS",
              "No original quotation, bill of quantities, or signed document located",
              "UNVERIFIED",
              "Low",
            ],
            [
              "Supplier",
              "Mandabya Steels Industries",
              "The public Mandabya site reviewed lists hospitality supplies and commercial kitchen equipment; it does not publish this quotation",
              "UNVERIFIED",
              "Low",
            ],
            [
              "Total",
              "NPR 1,485,650",
              "No item schedule, tax invoice, freight, installation, or VAT treatment located",
              "UNVERIFIED",
              "Low",
            ],
            [
              "Use in this guide",
              "None",
              "Excluded from every calculation and supplier comparison",
              "UNVERIFIED",
              "High",
            ],
          ]}
        />

        <Callout variant="note" title="If you have the original document">
          <p>
            Check the supplier&apos;s PAN/VAT details, quotation number, date and
            validity, item quantities, steel grade and thickness, dimensions,
            gas and electrical specifications, installation scope, freight,
            taxes, payment terms, warranty, and authorized signature. A lump-sum
            total without a bill of quantities cannot be compared with another
            supplier&apos;s quote.
          </p>
        </Callout>

        <ArticleSubhead>Commercial kitchen equipment price Nepal: what public sources can and cannot establish</ArticleSubhead>

        <p>
          Most equipment categories do not have a reliable public item price in
          Nepal. Fabrication is often priced by dimensions, steel grade, and
          thickness. Refrigeration depends on capacity, temperature, refrigerant,
          and warranty. Exhaust and HVAC depend on the site. The honest answer for
          these categories is a written quotation, not a national average.
        </p>

        <DataTable
          caption="Equipment categories and price evidence, November 2026"
          head={["Category", "What the quotation must define", "Price evidence", "Status"]}
          rows={[
            [
              "Gas range and cooking line",
              "Burner count, gas type and pressure, body and steel grade, legs, installation",
              "No current published item price located",
              "QUOTE REQUIRED",
            ],
            [
              "Stainless fabrication: tables, sinks, racks, shelves",
              "SS grade, thickness or gauge, dimensions, welds, finish, undershelf, legs",
              "Fabricator-specific; no current public item price located",
              "QUOTE REQUIRED",
            ],
            [
              "Commercial refrigeration: reach-in, cold room, freezer",
              "Capacity, temperature, refrigerant, doors, voltage, remote or plug-in, warranty",
              "No current public item price located",
              "QUOTE REQUIRED",
            ],
            [
              "Exhaust hood, duct, fan, and make-up air",
              "Hood length, filters, duct route, fan duty, fire dampers, noise, discharge point",
              "Site-specific; no public installed price located",
              "QUOTE REQUIRED",
            ],
            [
              "Bakery equipment: mixer, oven, proofer, sheeter",
              "Batch capacity, power or gas, controls, installation, warranty",
              "No current public item price located",
              "QUOTE REQUIRED",
            ],
            [
              "Dishwash and glasswash",
              "Racks per hour, water supply, drainage, booster, chemicals",
              "No current public item price located",
              "QUOTE REQUIRED",
            ],
            [
              "Bar equipment: ice, glasswash, back bar, taps",
              "Ice output, storage, refrigeration, drainage, gas, glass capacity",
              "GAI bar package is a published example only; item prices not verified",
              "VERIFIED PRIMARY DOCUMENT / QUOTE REQUIRED",
            ],
            [
              "Furniture: tables, chairs, banquettes",
              "Dimensions, material, upholstery, fire retardancy, delivery",
              "No current public item price located",
              "QUOTE REQUIRED",
            ],
            [
              "POS, CCTV, and networking",
              "Licences, terminals, cameras, cabling, installation, support",
              "Published POS prices appear in section 12; CCTV and networking are not verified",
              "ESTIMATED / QUOTE REQUIRED",
            ],
            [
              "HVAC",
              "Heat load, fresh air, ducting, condensers, controls, electrical",
              "Site-specific; no public installed price located",
              "QUOTE REQUIRED",
            ],
            [
              "Fire extinguishers",
              "Class, size, mounting, servicing",
              "Published retail range NPR 1,000-5,500; wet-chemical NPR 6,500-16,500",
              "VERIFIED PRIMARY DOCUMENT",
            ],
          ]}
        />

        <ArticleSubhead>Planning estimates are not supplier prices</ArticleSubhead>

        <p>
          The five investment models in this guide carry kitchen and refrigeration
          allowances. They are analytical estimates built for scenario planning,
          not quotations. The table below shows the share of pre-opening cost in
          the base case. It is a budgeting check, not a market average, and it
          should be replaced by written quotations before a lease is signed.
        </p>

        <DataTable
          caption="Kitchen and refrigeration share of pre-opening cost, base case"
          head={["Model", "Kitchen + refrigeration", "Pre-opening subtotal", "Share"]}
          rows={kitchenShareRows}
        />

        <ArticleSubhead>Restaurant equipment suppliers Nepal: city-by-city directory</ArticleSubhead>

        <p>
          The directory below identifies suppliers and specialists with a public
          listing or catalogue. It is not an endorsement, a ranking, or evidence
          that the supplier has current stock, the required certification, or
          capacity for your project. No supplier was contacted for this article.
          Some listings are on social platforms that block automated access;
          search the business name directly if a link does not open. Confirm the
          legal name, PAN/VAT registration, showroom or workshop, service
          coverage, and written quotation directly.
        </p>

        <DataTable
          caption="Commercial kitchen equipment and hospitality suppliers by city"
          head={["City", "Supplier or specialist", "Categories", "Evidence status"]}
          rows={[
            [
              "Kathmandu Valley",
              "GAI, Kathmandu",
              "Commercial kitchen, bakery, refrigeration, exhaust, bar",
              "Published catalogue; VERIFIED PRIMARY DOCUMENT",
            ],
            [
              "Kathmandu Valley",
              "The Dimension Pvt. Ltd., Kathmandu",
              "Fabrication and import of commercial kitchen equipment",
              "Published website; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Kathmandu Valley",
              "Kitchen Craft Nepal, Kathmandu",
              "Commercial kitchen equipment, stainless fabrication",
              "Published website; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Kathmandu Valley",
              "Quality Kitchen Equipment, Gairidhara, Kathmandu",
              "Heavy-gauge stainless tables, cooking ranges, fabrication",
              "Published website; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Kathmandu Valley",
              "Semco Pvt. Ltd., Kathmandu and Itahari",
              "Commercial and imported kitchen equipment, stainless furniture, laundry",
              "Published catalogue; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Kathmandu Valley",
              "Mandabya, Kathmandu, Pokhara, and Butwal",
              "Hospitality supplies, commercial kitchen, bar and bakery equipment",
              "Published website; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Biratnagar",
              "Shree Balaji Machinery Udyog & Traders, Biratnagar",
              "Food-processing and commercial kitchen machinery",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Biratnagar",
              "Bhagwati Machinery Suppliers, Biratnagar and Dharan coverage",
              "Food-processing and steam equipment",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Biratnagar",
              "Local stainless fabricators and refrigeration workshops",
              "Custom fabrication, refrigeration repair, installation",
              "QUOTE REQUIRED",
            ],
            [
              "Itahari",
              "Nirmala Steel Fabrication & Training Center, Itahari, Sunsari",
              "Gas ranges, ovens, stainless fabrication, installation, training",
              "Published website; VERIFIED PRIMARY DOCUMENT",
            ],
            [
              "Itahari",
              "Itahari Kitchen Store, Itahari",
              "Hotelware, restaurant, café, and bar supplies",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Itahari",
              "Semco Itahari branch",
              "Commercial kitchen, stainless furniture, laundry",
              "Published catalogue; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Dharan",
              "Local hotelware and machinery listings",
              "Kitchenware, food-processing machinery, general hotel supplies",
              "No specialist with a verified catalogue found; QUOTE REQUIRED",
            ],
            [
              "Pokhara",
              "Pokhara Kitchen Equipment Udhyog, Pokhara",
              "Commercial kitchen equipment manufacturing",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara",
              "Manali Kitchen, Pokhara",
              "Commercial kitchen equipment and appliances",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara",
              "P & P Kitchen Suppliers Pvt. Ltd., Pokhara",
              "Hotel, resort, restaurant, and bar equipment",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara",
              "Aarohana Enterprises, Pokhara",
              "Food and hospitality industry supplies",
              "Published listing; REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara",
              "Mandabya Pokhara outlet",
              "Hospitality supplies, kitchen, bar, and bakery equipment",
              "Published website; REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <ArticleSubhead>Reusable RFQ for restaurant equipment suppliers Nepal</ArticleSubhead>

        <p>
          Send the same RFQ to at least three suppliers and require a
          line-by-line response. A lump-sum quote cannot be compared. State that
          the quotation must remain valid for at least 30 days and that the
          supplier must disclose every exclusion.
        </p>

        <Checklist
          items={[
            "Project location, delivery address, floor level, lift access, and delivery window.",
            "Kitchen dimensions, layout drawing, seating, and expected covers per service.",
            "Menu or station list, equipment schedule, and quantities.",
            "Stainless steel grade, thickness or gauge, dimensions, finish, and welding standard.",
            "Gas type and pressure, burner rating, electrical voltage, phase, frequency, and load per item.",
            "Water supply, drainage, hood and exhaust, make-up air, and fire-safety requirements.",
            "Installation, commissioning, operator training, and site cleanup.",
            "Warranty period, spare-parts list, service response time, and local service partner.",
            "Delivery lead time, unloading, and responsibility for damage in transit.",
            "VAT or fiscal invoice, freight, customs, and any other taxes or charges.",
            "Payment terms, retention, milestone schedule, and price validity.",
            "Reference installations, authorized signatory, and company registration details.",
          ]}
        />

        <DataTable
          caption="RFQ schedule: information every quotation should contain"
          head={["RFQ section", "Information to provide", "Why it matters"]}
          rows={[
            [
              "Project brief",
              "Location, format, seating, covers, service style, opening date",
              "Prevents a package designed for a different operation",
            ],
            [
              "Equipment schedule",
              "Item, quantity, dimensions, capacity, and station",
              "Creates a like-for-like comparison",
            ],
            [
              "Materials",
              "SS grade, thickness, finish, insulation, and food-contact suitability",
              "Two quotes can look identical while using different steel",
            ],
            [
              "Utilities",
              "Gas type and pressure, electrical load, water, drainage, exhaust",
              "Installation cost and feasibility depend on these inputs",
            ],
            [
              "Scope",
              "Supply only, delivery, installation, commissioning, training, and cleanup",
              "The lowest supply price may exclude the most work",
            ],
            [
              "Commercial terms",
              "VAT, freight, payment, retention, validity, and price escalation",
              "Protects the budget between quotation and order",
            ],
            [
              "After-sales",
              "Warranty, spare parts, response time, and service coverage",
              "Equipment downtime is a revenue cost",
            ],
            [
              "Evidence",
              "Company registration, PAN/VAT, references, and authorized signature",
              "Confirms who is legally responsible for the offer",
            ],
          ]}
        />

        <ArticleSubhead>How to compare equipment quotations</ArticleSubhead>

        <DataTable
          caption="Quotation comparison checklist"
          head={["Comparison point", "Question to ask", "Red flag"]}
          rows={[
            [
              "Scope",
              "Is every item, installation, and commissioning task included?",
              "A lump sum with no bill of quantities",
            ],
            [
              "Steel",
              "What grade and thickness are used for food-contact and structural parts?",
              "Unspecified stainless steel or mixed grades",
            ],
            [
              "Utilities",
              "Who connects gas, electrical, water, drainage, and exhaust?",
              "The quote stops at the equipment leg",
            ],
            [
              "VAT",
              "Is VAT included, and will a fiscal invoice be issued?",
              "Cash price with no tax invoice",
            ],
            [
              "Warranty",
              "What is covered, for how long, and who performs the repair?",
              "Warranty depends on a third party with no local presence",
            ],
            [
              "Spare parts",
              "Which parts are stocked locally, and at what price?",
              "No spare-parts list or service contact",
            ],
            [
              "Lead time",
              "What is the delivery and installation date, and what is the penalty for delay?",
              "An opening date that depends on an unconfirmed shipment",
            ],
            [
              "Price validity",
              "How long is the quote valid, and what can change the price?",
              "A verbal price or a quote with no expiry",
            ],
          ]}
        />

        <Callout variant="tip" title="The cheapest quote is not the lowest cost">
          <p>
            Compare the installed, commissioned, warranted, tax-compliant cost.
            A quote that is NPR 100,000 cheaper but excludes installation,
            commissioning, a grease hood, or a local warranty can cost more over
            the first year of operation.
          </p>
        </Callout>

        <PullQuote quote="The most expensive kitchen is the one you have to rebuild because it was designed for a menu you no longer serve." />
      </ArticleSection>

      <ArticleSection
        id="refrigeration-ventilation-fire"
        number="09"
        title="Refrigeration, ventilation, and fire safety"
      >
        <p>
          These three systems are invisible when they work and catastrophic when
          they do not. They are also the systems most likely to be
          value-engineered during a budget review, because a cheaper quote can
          look identical on a one-page comparison. It is not identical. It has
          less redundancy, thinner ducting, a smaller condenser, or a fire system
          that does not cover the cooking line.
        </p>

        <ArticleSubhead>Refrigeration</ArticleSubhead>

        <DataTable
          caption="Refrigeration design questions"
          head={["Asset", "What it protects", "Planning question"]}
          rows={[
            [
              "Cold room",
              "Bulk fresh stock and prep",
              "Is there a serviceable location with drainage and emergency release?",
            ],
            [
              "Reach-in refrigerators",
              "Line-level prep and service",
              "How many doors are needed at peak, and where do they open?",
            ],
            [
              "Freezers",
              "Longer-hold stock and backup",
              "Is there enough dedicated capacity for the menu's frozen items?",
            ],
            [
              "Display refrigeration",
              "Guest-facing retail or buffet",
              "Does the display add sales enough to justify the energy and service cost?",
            ],
            [
              "Ice and beverage equipment",
              "Service and bar",
              "Is there a separate ice machine, or is ice bought in?",
            ],
            [
              "Temperature monitoring",
              "Food safety and stock loss",
              "Are temperatures logged, alarmed, and reviewed?",
            ],
          ]}
        />

        <p>
          Refrigeration is also a power-reliability decision. A cold room that
          warms during a six-hour outage can destroy more stock than the
          generator would have cost. Decide which circuits need backup, how long
          the backup must run, and who checks temperatures when power returns.
        </p>

        <ArticleSubhead>Ventilation</ArticleSubhead>

        <p>
          A commercial kitchen exhaust is not a large domestic chimney. It is a
          system: hood, grease filters, duct, fan, make-up air, fire dampers,
          discharge point, noise control, and cleaning access. The duct route can
          decide whether the kitchen is possible at all, especially in a leased
          building or a dense residential area.
        </p>

        <Checklist
          items={[
            "Calculate hood length from the cooking equipment, not the room width.",
            "Confirm the duct route and discharge point with the landlord and neighbours.",
            "Provide enough make-up air; a powerful exhaust without make-up air starves the kitchen.",
            "Specify grease filters, access panels, and a cleaning schedule.",
            "Check fire damper and firestop requirements where the duct crosses compartments.",
            "Plan for noise from the fan and vibration isolation.",
            "Confirm the system can be cleaned without dismantling the ceiling.",
            "Get the ventilation design reviewed with the fire strategy.",
          ]}
        />

        <ArticleSubhead>Fire safety</ArticleSubhead>

        <p>
          Fire safety is not a certificate on the wall. It is a set of design,
          equipment, training, and maintenance decisions. Published retail prices
          for portable extinguishers in Nepal range from roughly NPR 1,000 to NPR
          5,500 for common dry-powder and foam units, with clean-agent and
          wet-chemical units higher.{" "}
          <SourceLink href="https://www.firstaidnepal.com/product/category/fire-extinguishers-portable-trolley-mounted">
            First Aid Nepal
          </SourceLink>{" "}
          lists wet-chemical extinguishers in the NPR 6,500–16,500 range. Those
          are equipment prices, not a full fire-safety system.
        </p>

        <DataTable
          caption="Fire safety scope"
          head={["Element", "Why it matters", "Ongoing obligation"]}
          rows={[
            [
              "Extinguishers",
              "First response to small fires",
              "Placement, inspection, refill, and staff training",
            ],
            [
              "Cooking-line suppression",
              "Covers oil and grease fires at the source",
              "Professional inspection and maintenance",
            ],
            [
              "Alarm and detection",
              "Early warning for staff and guests",
              "Testing, battery replacement, and records",
            ],
            [
              "Emergency lighting and exit signs",
              "Safe evacuation during a power failure",
              "Monthly checks and replacement",
            ],
            [
              "Exit routes",
              "Clear, unlocked, and unobstructed egress",
              "Daily housekeeping and staff briefing",
            ],
            [
              "Staff training",
              "Correct response under pressure",
              "Induction, refresher, and drill records",
            ],
          ]}
        />

        <Callout variant="warning" title="Do not value-engineer these three systems">
          <p>
            A cheaper refrigerator, a shorter hood, or a smaller fire system can
            look like a saving on the quotation. It becomes a stock loss, a
            closure, or an insurance dispute later. If the budget cannot carry
            these systems properly, the project is not ready to open.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="utilities"
        number="10"
        title="Electrical, plumbing, water, and gas"
      >
        <p>
          Utilities are where a restaurant stops being a design project and
          becomes an engineering project. The kitchen may need more power than
          the building was designed to supply. The water pressure may not reach
          the upper floor. The drainage may not carry the wash load. The gas
          storage may not meet the fire separation requirement. Each of these is
          a capital cost, not a monthly bill.
        </p>

        <ArticleSubhead>Electrical</ArticleSubhead>

        <p>
          Start with a load assessment from a licensed electrician. List every
          motor, heater, refrigerator, air conditioner, pump, and lighting
          circuit, then add diversity and future capacity. Confirm the supply
          phase, meter size, panel capacity, earthing, and cable routes. If the
          building needs a new connection or transformer, that work can take
          longer than the interior fit-out.
        </p>

        <DataTable
          caption="Electrical scope"
          head={["Item", "What to confirm", "Budget note"]}
          rows={[
            [
              "Supply and meter",
              "Phase, sanctioned load, meter type, NEA approval",
              "May require a new connection or upgrade",
            ],
            [
              "Distribution panel",
              "Circuit separation, surge protection, labelling",
              "Do not reuse an undersized panel",
            ],
            [
              "Kitchen circuits",
              "Dedicated circuits for heavy equipment, isolation, earth leakage",
              "Site-specific; get a load schedule",
            ],
            [
              "Lighting and sockets",
              "Guest lighting, service lighting, emergency lighting, cleaning sockets",
              "Lighting design and electrical design must coordinate",
            ],
            [
              "Backup power",
              "UPS, inverter, generator, or a combination",
              "Decide which circuits must stay live",
            ],
            [
              "Cabling and containment",
              "Fire-rated routes, separation from water, access for maintenance",
              "Often hidden in the fit-out quote",
            ],
          ]}
        />

        <ArticleSubhead>Plumbing and water</ArticleSubhead>

        <p>
          Water is a production input, a cleaning input, and a guest expectation.
          Confirm the source, pressure, storage, filtration, and quality. A
          restaurant may need a storage tank, a booster pump, a water softener,
          a carbon filter, or a reverse-osmosis system depending on the supply
          and the equipment. Hot water demand is highest during wash-up, not
          during service.
        </p>

        <Checklist
          items={[
            "Confirm the water source and whether it is municipal, tanker, well, or mixed.",
            "Test water quality before specifying filtration or treatment.",
            "Size storage for the busiest service day, not the average day.",
            "Confirm pressure at the highest and furthest outlet.",
            "Separate potable water from cleaning and waste routes.",
            "Install a grease trap sized for the kitchen and a serviceable access point.",
            "Check floor falls, drain capacity, and backflow prevention.",
            "Provide hot water capacity for dishwash, pot wash, and hand-wash.",
            "Label all shut-off valves and keep a plumbing schematic.",
          ]}
        />

        <ArticleSubhead>Gas</ArticleSubhead>

        <p>
          LPG is common in Nepali kitchens, but commercial gas storage,
          manifolding, leak detection, and ventilation are not the same as a
          domestic cylinder under a counter. Confirm the cylinder location, fire
          separation, restraint, pipe route, regulator, and emergency shut-off.
          Get the gas installation inspected and keep the certificate.
        </p>

        <ArticleSubhead>Tariffs and monthly utilities</ArticleSubhead>

        <p>
          Do not model commercial electricity from a domestic bill. NEA&apos;s
          2083/84 tariff schedule is reported to range from about NPR 3 to NPR 11
          per unit depending on consumption and meter type, with demand or
          service charges on top.{" "}
          <SourceLink href="https://nepacalc.com/electricity/nea-tariff-rates">
            NepaCalc
          </SourceLink>{" "}
          summarises the published schedule. Confirm the applicable commercial
          category, demand charge, and meter type with NEA before modelling the
          monthly bill.
        </p>

        <p>
          In the five models, electrical, plumbing, ventilation, and fire
          together are roughly 11% of pre-opening cost. That is a useful planning
          share, but it is not a substitute for a services survey. A building
          that needs a new connection, pump, tank, or grease-trap replacement can
          move the number sharply.
        </p>

        <DataTable
          caption="Electrical, plumbing, ventilation, and fire share, base case"
          head={[
            "Model",
            "Electrical + plumbing",
            "Ventilation",
            "Fire",
            "Combined",
            "Share",
          ]}
          rows={utilityShareRows}
        />

        <Callout variant="tip" title="Power backup is part of the opening budget">
          <p>
            Decide which systems must survive an outage: refrigeration,
            emergency lighting, POS, network, and selected kitchen equipment.
            A generator that cannot carry the cold room is not a backup plan. A
            UPS that keeps the till alive but lets the kitchen go dark is only
            half a plan.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
