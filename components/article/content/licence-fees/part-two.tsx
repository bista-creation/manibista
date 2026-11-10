import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  PullQuote,
  SourceLink,
} from "../../blocks";

export function LicenceFeesPartTwo() {
  return (
    <>
      <ArticleSection
        id="municipal"
        number="06"
        title="Local business registration and municipal restaurant tax"
      >
        <p>
          Local business registration is separate from company registration at
          OCR. The{" "}
          <SourceLink href="https://lawcommission.gov.np/content/12760/12760-local-government-regu-/">
            Local Government Operation Act 2074
          </SourceLink>{" "}
          gives local governments the authority to regulate and tax local
          business activity. In practice, the municipality, sub-metropolitan
          city, rural municipality or ward may require its own registration,
          operating permit, business tax, signboard permission, and waste
          arrangement. The amount can depend on the business category, floor
          area, seating, dance or orchestra permission, signboard size, or waste
          volume.
        </p>

        <p>
          Kathmandu Metropolitan City&apos;s{" "}
          <SourceLink href="https://files.kathmandu.gov.np/uploads/medias/972eddda919c4cb9989f3dac4a76a2b4.pdf">
            Finance Act 2083
          </SourceLink>{" "}
          is effective from 2083 Shrawan 1. Section 5 and Schedule 7 cover
          business tax and renewal. Items 16 and 17 set the restaurant and bar
          figures; items 18 to 20 set the café and small-restaurant figures by
          floor area. The{" "}
          <SourceLink href="https://metronews.kathmandu.gov.np/news/detail/2007469128">
            KMC Metro News summary
          </SourceLink>{" "}
          corroborates the Act, but the Act is the primary source.
        </p>

        <DataTable
          caption="Kathmandu Metropolitan City annual restaurant business tax, 2083/84"
          head={["Category", "Annual amount (NPR)", "Basis"]}
          rows={[
            [
              "Restaurant or bar without dance or orchestra",
              "10,000",
              "Schedule 7, item 16",
            ],
            [
              "Restaurant or bar with dance or orchestra",
              "20,000",
              "Schedule 7, item 17",
            ],
            [
              "Café, fast food or small restaurant up to 400 sq ft",
              "3,000",
              "Schedule 7, item 18",
            ],
            [
              "Café, fast food or small restaurant above 400 to 1,000 sq ft",
              "5,000",
              "Schedule 7, item 19",
            ],
            [
              "Café, fast food or small restaurant above 1,000 sq ft",
              "10,000 per outlet",
              "Schedule 7, item 20",
            ],
          ]}
        />

        <p>
          The restaurant and bar entries reviewed do not vary by floor area; the
          café and small-restaurant entries do. The ward decides which category
          applies to the operation. A restaurant with a separate bar area, live
          music, a dance floor, or a large signboard may face additional local
          charges. Schedule 10 sets signboard and advertising tax. One published
          example is a 15 to 30 square foot signboard or hoarding at NPR 1,000
          per square foot per year. Schedule 14 sets waste and sanitation fees.
          One commercial example is NPR 550 per 15 litres per day, plus NPR 250
          for each additional 15 litres.
        </p>

        <Callout variant="warning" title="Annual business tax is not the initial registration fee">
          <p>
            The Kathmandu figures above are annual business tax under Schedule 7.
            They do not establish the separate fee, if any, for the initial local
            business registration or operating permit. Ask the ward for both: the
            one-time registration or permit fee and the annual business tax. The
            same distinction applies in every other municipality.
          </p>
        </Callout>

        <ArticleSubhead>What the KMC Act does not settle</ArticleSubhead>

        <p>
          The KMC Finance Act 2083 text reviewed does not clearly set a separate
          restaurant food-business licence fee. That fee is a local food-safety
          charge under the Food Act 2081, not the annual business tax in Schedule
          7. The exact current amount and issuing office require direct
          confirmation with Kathmandu Metropolitan City or the ward. Do not treat
          the NPR 3,000 to NPR 20,000 business tax as a complete food-licence
          budget.
        </p>

        <p>
          The same caution applies outside Kathmandu. A municipal finance act may
          set an annual business tax, a separate registration fee, a signboard
          tax, a waste fee, and a liquor permit fee. Those are different lines.
          Ask for the schedule by name and date, not just a total.
        </p>

        <PullQuote quote="The municipality can tax the business, license the premises, and charge for the signboard and the waste. Those are separate lines, even when one office collects them." />
      </ArticleSection>

      <ArticleSection
        id="food-licence"
        number="07"
        title="Food business licence under the Food Act 2081"
      >
        <p>
          The{" "}
          <SourceLink href="https://giwmscdnone.gov.np/media/pdf_upload/%E0%A4%96%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A4%A4%E0%A4%BE%20%E0%A4%A4%E0%A4%A5%E0%A4%BE%20%E0%A4%97%E0%A5%81%E0%A4%A3%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%B0%20%E0%A4%90%E0%A4%A8,%20%E0%A5%A8%E0%A5%A6%E0%A5%AE%E0%A5%A7_brxoic2.pdf">
            Food Hygiene and Quality Act 2081
          </SourceLink>{" "}
          governs restaurant food-business licensing. Section 9(1) requires a
          licence before operating a food business. Section 9(2)(ka) assigns
          restaurants, cafés, canteens, and party or banquet food businesses to
          the local government head or an authorised official. Section 9(4)
          requires a separate licence for each local level, and section 9(5)
          requires a decision within 30 days after inspection. Section 10 sets
          the two-year validity and the renewal rules.
        </p>

        <DataTable
          caption="Food-business licence rules under the Food Act 2081"
          head={["Requirement", "Legal provision", "Practical effect", "Status"]}
          rows={[
            [
              "Licence before operation",
              "Section 9(1)",
              "Do not prepare or serve food while the application is pending",
              "VERIFIED OFFICIAL",
            ],
            [
              "Local issuing authority",
              "Section 9(2)(ka)",
              "Restaurant, café, canteen, party and banquet licences are issued locally",
              "VERIFIED OFFICIAL",
            ],
            [
              "Separate licence for each local level",
              "Section 9(4)",
              "A second outlet in another municipality needs its own licence",
              "VERIFIED OFFICIAL",
            ],
            [
              "Decision within 30 days after inspection",
              "Section 9(5)",
              "The inspection and decision clock starts after the inspection",
              "VERIFIED OFFICIAL",
            ],
            [
              "Two-year validity",
              "Section 10",
              "Budget for renewal every two years, not every year",
              "VERIFIED OFFICIAL",
            ],
            [
              "Renew at least 35 days before expiry",
              "Section 10",
              "A late application creates a penalty risk",
              "VERIFIED OFFICIAL",
            ],
            [
              "Late renewal within six months",
              "Section 10",
              "Double the applicable fee",
              "VERIFIED OFFICIAL",
            ],
            [
              "Late renewal after six months",
              "Section 10",
              "Five times the applicable fee",
              "VERIFIED OFFICIAL",
            ],
            [
              "Fee amount",
              "Not set in the Act",
              "Prescribed through rules or the local schedule; ask the municipality",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <p>
          The Act does not set a single national food-licence fee. That is why a
          generic online figure for a &quot;restaurant food licence Nepal&quot;
          should not be treated as a budget. Ask the ward for the current
          application fee, inspection fee, renewal fee, and any food-safety or
          training charge. The{" "}
          <SourceLink href="https://dftqc.gov.np/en/">
            Department of Food Technology and Quality Control
          </SourceLink>{" "}
          is the national food-safety authority, but the restaurant licence
          itself is issued at the local level under the Act.
        </p>

        <Checklist
          items={[
            "Business registration certificate and PAN/VAT certificate.",
            "Lease deed or proof of premises, and the landlord's consent where required.",
            "Citizenship or identity documents of the proprietor or directors.",
            "Food business licence application and the current local fee receipt.",
            "Kitchen layout, water source, drainage and waste arrangements.",
            "Employee health checks or food-handler training records where required.",
            "Fire safety clearance and signboard permission where applicable.",
            "A named person responsible for food safety and hygiene records.",
            "A renewal diary entry at least 60 days before the two-year expiry.",
          ]}
        />

        <Callout variant="warning" title="A food licence is not a liquor licence">
          <p>
            The Food Act 2081 licence covers food safety and hygiene. It does not
            authorise the sale or service of alcohol. A restaurant that serves
            alcohol needs the applicable excise licence and any local liquor
            permit in addition to the food licence.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="liquor"
        number="08"
        title="Liquor licence fees under the Excise Rules"
      >
        <p>
          Alcohol has two regulatory layers. The Inland Revenue Department issues
          the excise licence under the{" "}
          <SourceLink href="https://ird.gov.np/category/exciseact/">
            Excise Duty Act 2058
          </SourceLink>{" "}
          and the{" "}
          <SourceLink href="https://ird.gov.np/category/exciserules">
            Excise Rules 2059
          </SourceLink>
          . The local authority may also require a liquor permit under the{" "}
          <SourceLink href="https://lawcommission.gov.np/content/13414/the-madira-act--2031/">
            Liquor Act 2031
          </SourceLink>{" "}
          and its local rules. Confirm both before ordering stock.
        </p>

        <p>
          The consolidated Excise Rules 2059 reviewed includes the 28th Amendment
          dated 2083/02/15. Schedule 2, pages 39 and 40, sets the licence and
          renewal fees. The new-licence and renewal columns carry the same amount
          for the categories below. Confirm with IRD that no later amendment has
          changed Schedule 2 before paying.
        </p>

        <DataTable
          caption="Excise licence and renewal fees under Schedule 2, Excise Rules 2059 (28th Amendment)"
          head={["Category", "Licence fee (NPR)", "Renewal fee (NPR)", "Basis and note"]}
          rows={[
            ["5-star hotel, restaurant or lodge", "75,000", "75,000", "Star category"],
            ["4-star hotel, restaurant or lodge", "60,000", "60,000", "Star category"],
            ["3-star hotel, restaurant or lodge", "45,000", "45,000", "Star category"],
            ["2-star hotel, restaurant or lodge", "30,000", "30,000", "Star category"],
            ["1-star hotel, restaurant or lodge", "15,000", "15,000", "Star category"],
            [
              "Tourist-standard restaurant, resort or party palace selling foreign and domestic liquor by opening a bottle",
              "11,000",
              "11,000",
              "Tourist-standard category",
            ],
            [
              "Ordinary hotel, restaurant, bar or lodge selling foreign liquor by opening a bottle",
              "6,000",
              "6,000",
              "Ordinary category; foreign liquor only",
            ],
            ["Casino", "75,000", "75,000", "Casino category"],
            ["Distiller", "45,000", "45,000", "Production"],
            ["Wholesaler", "30,000", "30,000", "Wholesale"],
            ["Retailer, foreign and domestic liquor", "15,000", "15,000", "Retail"],
            [
              "Retailer, foreign liquor only, in a metropolitan city, sub-metropolitan city or municipality",
              "11,000",
              "11,000",
              "Retail; local-level classification",
            ],
            [
              "Retailer, foreign liquor only, in another local level",
              "6,000",
              "6,000",
              "Retail; local-level classification",
            ],
            ["Departmental store", "30,000", "30,000", "Departmental store"],
            ["Importer", "60,000", "60,000", "Import"],
            ["Exporter", "6,000", "6,000", "Export"],
          ]}
        />

        <Callout variant="warning" title="Do not assume NPR 6,000 or NPR 11,000 applies to you">
          <p>
            The NPR 6,000 entry is the ordinary hotel, restaurant, bar or lodge
            category for selling foreign liquor by opening a bottle. The NPR
            11,000 entry is the tourist-standard restaurant, resort or party
            palace category for selling foreign and domestic liquor by opening a
            bottle. A star-rated hotel restaurant, a retail shop, a wholesaler and
            a sealed-bottle retailer are different categories. The old Excise
            Rules 21st Amendment figures of NPR 4,500 and NPR 8,500 are not
            current. Confirm your exact category with the IRD before paying.
          </p>
        </Callout>

        <DataTable
          caption="Liquor licence process: authority, documents, renewal and penalties"
          head={["Issue", "Current position", "Status"]}
          rows={[
            [
              "Issuing authority for excise",
              "Inland Revenue Department excise office under the Excise Duty Act 2058 and Excise Rules 2059",
              "VERIFIED OFFICIAL",
            ],
            [
              "Local liquor permit",
              "The Liquor Act 2031 and local rules may require a separate municipal permit; confirm with the local authority",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Application",
              "Application in the Schedule 1 form with proof of the Schedule 2 licence fee deposited",
              "VERIFIED OFFICIAL",
            ],
            [
              "Documents",
              "Taxpayer and business registration, premises details, identity or company documents, lease or occupancy proof, and the documents requested by the excise office",
              "VERIFIED OFFICIAL for the core application; the local list may add documents",
            ],
            [
              "Renewal",
              "Apply with the Schedule 2 renewal fee and clear outstanding excise dues; renew before expiry",
              "VERIFIED OFFICIAL",
            ],
            [
              "Opened versus sealed bottles",
              "The hotel, restaurant and bar entries are for selling liquor by opening a bottle; sealed-bottle retail is a separate retail licence category",
              "VERIFIED OFFICIAL",
            ],
            [
              "Deadline and grace period",
              "The Rules reviewed require renewal with the fee and clearance of arrears; no universal grace period should be assumed",
              "VERIFIED OFFICIAL for the renewal requirement; grace period REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Penalties",
              "The Excise Duty Act 2058 sets penalties for unlicensed production, import, sale, evasion and related offences; the amount depends on the offence",
              "VERIFIED OFFICIAL that penalties exist; exact penalty REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <p>
          A restaurant that serves beer, wine or spirits should budget the excise
          licence, the local permit if required, the stock, the storage, and the
          staff training. The licence fee is only one part of that list. The
          larger risk is opening the bar before the approval is in place, or
          buying stock under the wrong category.
        </p>

        <PullQuote quote="The liquor fee is category-specific. The same restaurant can be ordinary, tourist-standard or star-rated, and the fee changes with the category." />
      </ArticleSection>

      <ArticleSection
        id="tourism-fire"
        number="09"
        title="Tourism, star classification, music and fire safety"
      >
        <p>
          Some restaurant approvals sit outside the core food and liquor stack.
          A tourist-standard restaurant, a star-rated hotel restaurant, a venue
          with live music, or a building with a commercial kitchen may need
          additional permissions. These are not universal, and the fees are not
          set in one national restaurant schedule. Confirm the category and the
          current fee with the authority that issues it.
        </p>

        <DataTable
          caption="Adjacent approvals that are not a restaurant food licence"
          head={["Approval", "Authority", "Fee status", "What to ask"]}
          rows={[
            [
              "Tourist-standard or star classification",
              "Ministry of Culture, Tourism and Civil Aviation; Department of Tourism",
              "Confirm the current classification fee",
              "Which category applies, what documents are required, and how long the classification lasts",
            ],
            [
              "Music or entertainment permission",
              "Local authority and rights organisations",
              "Confirm the local fee and rights charges",
              "Whether live or recorded music is allowed, the permitted hours, sound limits and copyright requirements",
            ],
            [
              "Fire safety clearance",
              "Local fire authority and building permit office",
              "Site-specific; no single national fee is asserted",
              "The required design, equipment, inspection and maintenance scope",
            ],
            [
              "Building permission or occupancy clearance",
              "Local building permit office",
              "Site-specific",
              "Whether the kitchen, seating, ventilation and electrical load are covered by the existing approval",
            ],
          ]}
        />

        <p>
          The{" "}
          <SourceLink href="https://lawcommission.gov.np/content/13301/tourism-ann--2035/">
            Tourism Act 2035
          </SourceLink>{" "}
          and the applicable classification rules govern tourism-sector
          approvals. The{" "}
          <SourceLink href="https://tourism.gov.np/">
            Ministry of Culture, Tourism and Civil Aviation
          </SourceLink>{" "}
          and the{" "}
          <SourceLink href="https://tourismdepartment.gov.np/">
            Department of Tourism
          </SourceLink>{" "}
          are the starting points for the current category and fee. Do not rely
          on an old &quot;tourism licence&quot; figure without confirming the
          category and the year.
        </p>

        <Callout variant="note" title="Fire safety is a scope, not a sticker">
          <p>
            A fire-safety budget should cover the design review, extinguishers,
            detection, emergency lighting, exit signage, kitchen suppression
            where required, training and maintenance. The inspection fee is only
            one line. The cost of the required works is usually much larger, and
            it depends on the building, the kitchen and the seating layout.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="labour"
        number="10"
        title="Labour and social-security registration"
      >
        <p>
          A restaurant with employees has labour and social-security obligations.
          These are not licence fees, but they belong in the compliance budget
          because they recur every month. The{" "}
          <SourceLink href="https://lawcommission.gov.np/content/13309/labor-act-2017/">
            Labour Act 2074
          </SourceLink>{" "}
          and the{" "}
          <SourceLink href="https://ssf.gov.np/">
            Social Security Fund
          </SourceLink>{" "}
          set the framework reviewed here. The{" "}
          <SourceLink href="https://dolos.gov.np/">
            Department of Labour and Occupational Safety
          </SourceLink>{" "}
          is the labour administration starting point.
        </p>

        <DataTable
          caption="Payroll compliance costs that sit beside the licence file"
          head={["Item", "Current verified point", "Frequency", "Status"]}
          rows={[
            [
              "SSF contribution",
              "31% of basic salary: 11% employee and 20% employer",
              "Monthly",
              "VERIFIED OFFICIAL",
            ],
            [
              "Labour registration",
              "Register the establishment and maintain the required employment records",
              "At hiring and on an ongoing basis",
              "VERIFIED PROCESS; confirm the local office and document list",
            ],
            [
              "Payroll records",
              "Keep contracts, attendance, wages, overtime and contributions",
              "Ongoing",
              "VERIFIED PROCESS; the exact record format depends on the establishment",
            ],
            [
              "Festival allowance and overtime",
              "Budget the actual payroll rules, not just basic salary",
              "Periodic",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <p>
          The 31% SSF contribution is a payroll cost, not a one-time licence fee.
          It changes the monthly break-even. A restaurant that budgets gross
          salary without the employer contribution is underestimating labour
          cost. The same is true of festival allowance, overtime, meals, uniforms
          and statutory records.
        </p>

        <Checklist
          items={[
            "Register the establishment with the applicable labour office.",
            "Register eligible employees with the Social Security Fund.",
            "Keep written employment contracts and job descriptions.",
            "Maintain attendance, wage, overtime and contribution records.",
            "Separate the employee contribution from the employer contribution in payroll.",
            "Budget festival allowance and overtime before setting the salary scale.",
            "Keep payroll records for the period required by the applicable rules.",
            "Review payroll compliance before the first payday, not after the first inspection.",
          ]}
        />

        <Callout variant="legal" title="SSF is not a licence fee">
          <p>
            The Social Security Fund contribution is a recurring payroll
            obligation. It does not replace the labour registration, the food
            licence, the local business tax or the liquor licence. Put it in the
            operating budget, not the one-time licence budget.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
