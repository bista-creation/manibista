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
import { licenceFeesFaqs } from "./data";

const sources = [
  {
    title: "Food Hygiene and Quality Act, 2081",
    publisher: "Government of Nepal",
    date: "2081",
    href: "https://giwmscdnone.gov.np/media/pdf_upload/%E0%A4%96%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A4%A4%E0%A4%BE%20%E0%A4%A4%E0%A4%A5%E0%A4%BE%20%E0%A4%97%E0%A5%81%E0%A4%A3%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%B0%20%E0%A4%90%E0%A4%A8,%20%E0%A5%A8%E0%A5%A6%E0%A5%AE%E0%A5%A7_brxoic2.pdf",
  },
  {
    title: "Department of Food Technology and Quality Control",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://dftqc.gov.np/en/",
  },
  {
    title: "Excise Duty Rules, 2059 (28th Amendment)",
    publisher: "Inland Revenue Department",
    date: "2083/02/15",
    href: "https://ird.gov.np/category/exciserules",
  },
  {
    title: "Excise Duty Act, 2058",
    publisher: "Inland Revenue Department",
    date: "2058",
    href: "https://ird.gov.np/category/exciseact/",
  },
  {
    title: "Liquor Act, 2031",
    publisher: "Nepal Law Commission",
    date: "2031",
    href: "https://lawcommission.gov.np/content/13414/the-madira-act--2031/",
  },
  {
    title: "Income Tax Act, 2058 (as amended)",
    publisher: "Inland Revenue Department",
    date: "2058",
    href: "https://ird.gov.np/content/13405/income-tax-act--2058--as-amended-by/",
  },
  {
    title: "Income tax rate for entities, FY 2083/84",
    publisher: "Inland Revenue Department",
    date: "2083/84",
    href: "https://ird.gov.np/content/13608/income-tax-rate-for-the-entity-for/",
  },
  {
    title: "Value Added Tax Act, 2052 (as amended)",
    publisher: "Inland Revenue Department",
    date: "2052",
    href: "https://ird.gov.np/category/valueaddedtaxact/",
  },
  {
    title: "Value Added Tax Rules, 2053 (27th Amendment)",
    publisher: "Inland Revenue Department",
    date: "18 Poush 2082",
    href: "https://ird.gov.np/content/13412/value-added-tax-rules--2053--with-twenty-seventh/",
  },
  {
    title: "Office of the Company Registrar: revenue and fees",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://ocr.gov.np/pages/revenue",
  },
  {
    title: "Office of the Company Registrar",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://ocr.gov.np/",
  },
  {
    title: "Inland Revenue Department",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://ird.gov.np/",
  },
  {
    title: "Kathmandu Metropolitan City Finance Act, 2083 (FY 2083/84)",
    publisher: "Kathmandu Metropolitan City",
    date: "2083 Shrawan 1",
    href: "https://files.kathmandu.gov.np/uploads/medias/972eddda919c4cb9989f3dac4a76a2b4.pdf",
  },
  {
    title: "Kathmandu Metropolitan City Finance Act 2083/84 summary",
    publisher: "KMC Metro News",
    date: "2083/04/08",
    href: "https://metronews.kathmandu.gov.np/news/detail/2007469128",
  },
  {
    title: "Biratnagar Metropolitan City Finance Act, 2083/84",
    publisher: "Biratnagar Metropolitan City",
    date: "2083/84",
    href: "https://www.biratnagarmun.gov.np/sites/biratnagarmun.gov.np/files/documents/%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95%20%E0%A4%90%E0%A4%A8%20%E0%A5%A8%E0%A5%A6%E0%A5%AE%E0%A5%A9.pdf",
  },
  {
    title: "Sangurigadhi Rural Municipality: tax and fees",
    publisher: "Sangurigadhi Rural Municipality, Dhankuta",
    date: "Accessed 10 November 2026",
    href: "https://www.sangurigadhimun.gov.np/tax-and-fees",
  },
  {
    title: "Dharan Sub-Metropolitan City",
    publisher: "Dharan Sub-Metropolitan City",
    date: "Accessed 10 November 2026",
    href: "https://dharan.gov.np/ne",
  },
  {
    title: "Itahari Sub-Metropolitan City",
    publisher: "Itahari Sub-Metropolitan City",
    date: "Accessed 10 November 2026",
    href: "https://itaharimun.gov.np/ne",
  },
  {
    title: "Pokhara Metropolitan City: acts and directives",
    publisher: "Pokhara Metropolitan City",
    date: "Accessed 10 November 2026",
    href: "https://pokharamun.gov.np/act-law-directives",
  },
  {
    title: "Local Government Operation Act, 2074",
    publisher: "Nepal Law Commission",
    date: "2074",
    href: "https://lawcommission.gov.np/content/12760/12760-local-government-regu-/",
  },
  {
    title: "Labour Act, 2074",
    publisher: "Nepal Law Commission",
    date: "2074",
    href: "https://lawcommission.gov.np/content/13309/labor-act-2017/",
  },
  {
    title: "Social Security Fund",
    publisher: "Social Security Fund, Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://ssf.gov.np/",
  },
  {
    title: "Department of Labour and Occupational Safety",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://dolos.gov.np/",
  },
  {
    title: "Foreign Investment and Technology Transfer Act, 2075",
    publisher: "Nepal Law Commission",
    date: "2075",
    href: "https://lawcommission.gov.np/content/12171/12171-the-foreign-investment-and-tec/",
  },
  {
    title: "Department of Industry: foreign investment in a new industry",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://www.doind.gov.np/foreign-investment",
  },
  {
    title: "Nepal Rastra Bank: foreign investment and foreign loan bylaw",
    publisher: "Nepal Rastra Bank",
    date: "2019",
    href: "https://www.nrb.org.np/contents/uploads/2019/12/NRB-FIFL-Bylaw_English.pdf",
  },
  {
    title: "Tourism Act, 2035",
    publisher: "Nepal Law Commission",
    date: "2035",
    href: "https://lawcommission.gov.np/content/13301/tourism-ann--2035/",
  },
  {
    title: "Ministry of Culture, Tourism and Civil Aviation",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://tourism.gov.np/",
  },
  {
    title: "Department of Tourism",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://tourismdepartment.gov.np/",
  },
  {
    title: "Nepal Law Commission",
    publisher: "Government of Nepal",
    date: "Accessed 10 November 2026",
    href: "https://lawcommission.gov.np/",
  },
];

export function LicenceFeesPartThree() {
  return (
    <>
      <ArticleSection
        id="foreign-investment"
        number="11"
        title="Foreign investment and restaurant licensing"
      >
        <p>
          Foreign investment adds a separate approval layer before the restaurant
          licences. The{" "}
          <SourceLink href="https://lawcommission.gov.np/content/12171/12171-the-foreign-investment-and-tec/">
            Foreign Investment and Technology Transfer Act 2075
          </SourceLink>{" "}
          governs the route. Depending on the size and sector, the approval may
          come from the Department of Industry or the Investment Board Nepal,
          followed by Nepal Rastra Bank recording for foreign exchange and
          investment.
        </p>

        <DataTable
          caption="FDI approval and the restaurant licence sequence"
          head={["Step", "Authority", "What it does", "Status"]}
          rows={[
            [
              "Foreign investment approval",
              "Department of Industry or Investment Board Nepal, depending on the project",
              "Approves the foreign investment and the project structure",
              "VERIFIED PROCESS; the applicable route depends on the project",
            ],
            [
              "Company incorporation",
              "Office of the Company Registrar",
              "Creates the Nepali company that will hold the investment and licences",
              "VERIFIED OFFICIAL for the registration fee slabs",
            ],
            [
              "Foreign exchange and investment recording",
              "Nepal Rastra Bank",
              "Records the foreign capital inflow and the investment",
              "VERIFIED PROCESS",
            ],
            [
              "Tax registrations",
              "Inland Revenue Department",
              "PAN and VAT registration as applicable",
              "VERIFIED PROCESS",
            ],
            [
              "Local, food and liquor licences",
              "Municipality or ward; Inland Revenue Department for excise",
              "Authorises the premises, food business and alcohol sales",
              "VERIFIED PROCESS; local fees require confirmation",
            ],
          ]}
        />

        <p>
          The{" "}
          <SourceLink href="https://www.doind.gov.np/foreign-investment">
            Department of Industry&apos;s foreign-investment page
          </SourceLink>{" "}
          states a minimum of NPR 20 million per project with no upper cap, and a
          refundable NPR 20,000 deposit. It also states that expatriates may take
          back 75% of their salary, allowances and emoluments. Local catering is
          on the negative list. Restaurant operation is not expressly listed, so
          the boundary between a permitted restaurant and prohibited local
          catering requires confirmation with the Department of Industry.
        </p>

        <Callout variant="warning" title="Do not transfer foreign capital before the route is confirmed">
          <p>
            The approval route, the minimum investment, the sector classification
            and the foreign-exchange recording all affect whether the capital can
            be brought in, used and repatriated. Confirm the route with the
            Department of Industry and Nepal Rastra Bank before incorporating the
            company, signing the lease or transferring funds.
          </p>
        </Callout>

        <p>
          A foreign-investment approval is not a restaurant licence. It does not
          replace the food licence, the local business registration or the
          excise licence. It sits before them and shapes the company structure
          that will apply for them.
        </p>
      </ArticleSection>

      <ArticleSection
        id="cost-types"
        number="12"
        title="One-time, annual and renewal costs"
      >
        <p>
          The licence budget should separate one-time costs from recurring
          costs. A one-time fee that is not renewed is a different planning
          problem from an annual tax that recurs every year. The table below
          groups the main items by frequency and evidence level.
        </p>

        <DataTable
          caption="One-time, recurring and renewal costs in the restaurant licence file"
          head={["Cost", "Frequency", "Current evidence", "Status"]}
          rows={[
            [
              "OCR company registration",
              "One-time at incorporation",
              "NPR 1,000 to NPR 16,000 by authorised capital up to NPR 10 million; NPR 30 per NPR 100,000 above",
              "VERIFIED OFFICIAL; confirm the exemption notice",
            ],
            [
              "Local business registration or operating permit",
              "One-time or periodic, depending on the local level",
              "Set by the municipal finance act or local rules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Municipal business tax",
              "Annual",
              "KMC restaurant/bar NPR 10,000 or NPR 20,000; café/small restaurant NPR 3,000 to NPR 10,000",
              "VERIFIED OFFICIAL for KMC; other local levels require confirmation",
            ],
            [
              "Food-business licence",
              "Initial, then every two years",
              "Food Act 2081 sets the process and validity; the fee is local",
              "VERIFIED PROCESS; FEE REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Excise liquor licence",
              "Initial, then renewal",
              "NPR 6,000 ordinary restaurant/bar opened-bottle; NPR 11,000 tourist-standard foreign-and-domestic; star hotels NPR 15,000 to NPR 75,000",
              "VERIFIED OFFICIAL; confirm the category and any later amendment",
            ],
            [
              "Local liquor permit",
              "Initial, then renewal where required",
              "Set by the local authority under the Liquor Act 2031 and local rules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Signboard tax",
              "Annual or periodic",
              "KMC Schedule 10 example: NPR 1,000 per sq ft per year for 15 to 30 sq ft",
              "VERIFIED OFFICIAL example; confirm the measurement and category",
            ],
            [
              "Waste and sanitation fee",
              "Periodic",
              "KMC Schedule 14 example: NPR 550 per 15 litres/day plus NPR 250 per additional 15 litres",
              "VERIFIED OFFICIAL example; confirm the volume and collection method",
            ],
            [
              "SSF contribution",
              "Monthly",
              "31% of basic salary: 11% employee and 20% employer",
              "VERIFIED OFFICIAL",
            ],
            [
              "Fire safety and building clearance",
              "Initial, then inspection and maintenance",
              "Site-specific",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Tourism or star classification",
              "Initial, then renewal where applicable",
              "Category-specific",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Music or entertainment permission",
              "Initial, then renewal where applicable",
              "Local fee plus any rights charges",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <ArticleSubhead>Documented official components only</ArticleSubhead>

        <p>
          The table below adds only the official components that are currently
          verified for a Kathmandu restaurant. It is deliberately not a total
          project budget. It assumes a private company with authorised capital up
          to NPR 100,000, so the OCR fee is NPR 1,000, and that the ward applies
          the restaurant or café category shown. The OCR fee is one-time; the KMC
          business tax and excise licence are annual or renewal-cycle costs. The
          subtotal is an arithmetic check, not a first-year cash requirement. It
          excludes the food licence, the local liquor permit, the initial local
          registration or operating permit, professional fees, fire safety,
          signboard, waste, tourism classification, music, VAT, income tax and
          payroll.
        </p>

        <DataTable
          caption="Documented official components for a Kathmandu restaurant: a subtotal, not a total"
          head={["Scenario", "OCR", "KMC annual business tax", "Excise", "Documented subtotal"]}
          rows={[
            [
              "Small café up to 400 sq ft, no liquor",
              "NPR 1,000",
              "NPR 3,000",
              "Not applicable",
              "NPR 4,000",
            ],
            [
              "Restaurant or bar without dance, ordinary foreign-liquor opened-bottle category",
              "NPR 1,000",
              "NPR 10,000",
              "NPR 6,000",
              "NPR 17,000",
            ],
            [
              "Restaurant or bar with dance, ordinary foreign-liquor opened-bottle category",
              "NPR 1,000",
              "NPR 20,000",
              "NPR 6,000",
              "NPR 27,000",
            ],
            [
              "Tourist-standard restaurant without dance, foreign and domestic liquor opened-bottle category",
              "NPR 1,000",
              "NPR 10,000",
              "NPR 11,000",
              "NPR 22,000",
            ],
            [
              "Tourist-standard restaurant with dance, foreign and domestic liquor opened-bottle category",
              "NPR 1,000",
              "NPR 20,000",
              "NPR 11,000",
              "NPR 32,000",
            ],
          ]}
        />

        <Callout variant="warning" title="This subtotal is not a licence budget">
          <p>
            The food licence alone can change the total, and its current
            Kathmandu fee was not confirmed in the Act reviewed. The local liquor
            permit, initial local registration, professional fees, fire safety,
            signboard, waste, tourism classification, music, VAT, income tax and
            payroll are all outside the subtotal. Use the table to check the
            arithmetic of a quote, not to replace the quote.
          </p>
        </Callout>

        <p>
          The useful question is not &quot;what is the total?&quot; but
          &quot;which lines are in this total, and which are missing?&quot; A
          quote that includes the OCR fee and the annual business tax but omits
          the food licence is not necessarily dishonest. It may simply be
          incomplete. Ask for the exclusions in writing.
        </p>

        <PullQuote quote="A licence budget is complete only when it shows the one-time fees, the annual taxes, the renewals and the professional services separately." />
      </ArticleSection>

      <ArticleSection
        id="cities"
        number="13"
        title="City-by-city verification: six local levels"
      >
        <p>
          Restaurant licensing is local. The same restaurant format can face
          different fees in Kathmandu, Biratnagar, Dharan, Itahari, Pokhara and
          Sangurigadhi. The table below records what was confirmed for each local
          level and what still needs a direct answer.
        </p>

        <DataTable
          caption="Municipal restaurant licensing status as of 10 November 2026"
          head={["Local level", "What is confirmed", "What to ask", "Status"]}
          rows={[
            [
              "Kathmandu Metropolitan City",
              "Finance Act 2083 sets annual restaurant/bar business tax at NPR 10,000 without dance or orchestra and NPR 20,000 with; café/small restaurant NPR 3,000 to NPR 10,000 by floor area",
              "Separate food-business licence fee and issuing office; initial local registration or operating permit; signboard and waste category",
              "VERIFIED OFFICIAL for business tax; food fee REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Biratnagar Metropolitan City",
              "Finance Act 2083/84 is published, but the restaurant, food, signboard and waste schedules were not retrievable from this environment",
              "Current business tax category, food licence fee, renewal and local liquor permit",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Dharan Sub-Metropolitan City",
              "The official site references a 2083/84 rate schedule, but the Act was not retrievable",
              "Current restaurant category, food licence fee and local permit",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Itahari Sub-Metropolitan City",
              "A 2083 notice references the Economic Act 2083, section 20, but the Act was not retrievable",
              "Current business tax, food licence fee and local liquor permit",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara Metropolitan City",
              "The official act page lists the 2082 economic act and the 2083 land-use classification; no 2083/84 economic act was located",
              "Current 2083/84 economic act, restaurant category and food licence fee",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Sangurigadhi Rural Municipality (Bhedetar, Dhankuta)",
              "The latest economic act posted on the official tax and fees page is 2079; the 2083/84 schedule was not published online",
              "Current 2083/84 business tax, food licence fee and local liquor permit",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <Callout variant="warning" title="Bhedetar is in Dhankuta, not Sunsari">
          <p>
            Sangurigadhi Rural Municipality is in Dhankuta district. Bhedetar is
            inside Sangurigadhi, not Sunsari. A restaurant at Bhedetar must use
            Sangurigadhi&apos;s local schedule, even though it is close to Dharan
            and Itahari.
          </p>
        </Callout>

        <ArticleSubhead>What to ask each office</ArticleSubhead>

        <Checklist
          items={[
            "Which category applies: café, small restaurant, restaurant, bar, restaurant with dance or orchestra, tourist-standard, or star-rated?",
            "Is the amount an initial registration fee, an annual business tax, a renewal fee, or a separate inspection fee?",
            "What is the current food-business licence fee, and which office issues it?",
            "Is there a separate local liquor permit fee?",
            "How is the signboard tax measured, and what is the annual amount?",
            "How is the waste fee measured, and how often is it collected?",
            "What is the renewal date, and what is the late-renewal penalty?",
            "Can you provide the current schedule or finance act, with the fiscal year and section number?",
            "What is the official payment account, and what receipt will be issued?",
            "Which documents must be submitted with the application?",
          ]}
        />

        <p>
          Ask for the answer in writing, or write down the name, office, date and
          reference number of the person who gave it. A verbal figure from a
          ward office is a useful lead, not a source. The same applies to a
          consultant&apos;s quotation: it should identify the government fee and
          the service fee separately.
        </p>
      </ArticleSection>

      <ArticleSection
        id="mistakes"
        number="14"
        title="Common overcharging and compliance mistakes"
      >
        <p>
          Most licensing problems are not caused by a single large fee. They come
          from applying the wrong schedule, paying the wrong person, missing a
          renewal, or assuming one approval covers another. The table below lists
          the recurring mistakes and the check that prevents them.
        </p>

        <DataTable
          caption="Licensing mistakes and the check that prevents them"
          head={["Mistake", "Why it costs", "What to do"]}
          rows={[
            [
              "Applying one city's schedule to another",
              "The fee, category and renewal rule may be different",
              "Ask the local office for its current finance act or schedule",
            ],
            [
              "Treating annual business tax as the initial registration fee",
              "The initial permit and the annual tax are separate lines",
              "Ask for both the registration or permit fee and the annual tax",
            ],
            [
              "Paying a government fee into a personal account",
              "The payment may not be recorded against the application",
              "Use the official account and obtain an official receipt",
            ],
            [
              "Assuming the food licence covers liquor",
              "Alcohol requires a separate excise licence and possibly a local permit",
              "Check the excise category before ordering stock",
            ],
            [
              "Assuming NPR 6,000 or NPR 11,000 applies to every restaurant",
              "The fee depends on the category and the type of liquor service",
              "Confirm the exact Schedule 2 entry with the IRD",
            ],
            [
              "Missing the food-licence renewal date",
              "Late renewal is double the fee within six months and five times after six months",
              "Diary the renewal at least 60 days before the two-year expiry",
            ],
            [
              "Using an old fiscal-year schedule",
              "The municipal finance act may change each year",
              "Check the fiscal year printed on the schedule",
            ],
            [
              "Using the wrong local level",
              "Bhedetar, for example, is in Sangurigadhi, Dhankuta, not Dharan or Sunsari",
              "Confirm the ward and local level from the premises address",
            ],
            [
              "Not separating the agent fee from the government fee",
              "The total cannot be checked or compared",
              "Ask for a written breakdown and a receipt for each component",
            ],
            [
              "Not keeping proof of filing and payment",
              "A renewal or inspection dispute becomes hard to resolve",
              "Keep the application, receipt, certificate and inspection report in one file",
            ],
          ]}
        />

        <ArticleSubhead>Before you pay</ArticleSubhead>

        <Checklist
          items={[
            "I have the current schedule or finance act, with the fiscal year and section number.",
            "I know whether the amount is one-time, annual, a renewal or a deposit.",
            "I know which category applies to the premises and service style.",
            "The government fee and the agent's service fee are quoted separately.",
            "The payment is going to the official account, not a personal account.",
            "The receipt will be issued in the business name.",
            "The renewal date and late-renewal penalty are written down.",
            "The application is filed with the correct local level and ward.",
          ]}
        />

        <Callout variant="tip" title="A receipt is evidence, not a favour">
          <p>
            Ask for a receipt every time. The receipt should identify the office,
            the fee category, the period and the amount. If the office cannot
            issue a receipt, ask for the written demand or the legal basis. A
            payment without a record is difficult to defend in a renewal,
            inspection or tax review.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="renewal-calendar"
        number="15"
        title="Renewal calendar and document file"
      >
        <p>
          A licence file is a living record. The certificate on the wall is only
          the visible part. The renewal date, the inspection report, the fee
          receipt and the supporting documents are what keep the restaurant
          operating. Build the calendar before opening, not after the first
          notice.
        </p>

        <DataTable
          caption="Renewal calendar for the restaurant licence file"
          head={["Approval", "Cycle", "Action", "Status"]}
          rows={[
            [
              "Company registration",
              "Ongoing corporate compliance",
              "Maintain the company records and file the required returns; confirm the current OCR requirements",
              "VERIFIED PROCESS; specific filing fees require confirmation",
            ],
            [
              "PAN",
              "Ongoing tax compliance",
              "Keep the certificate and business details current; file the required income-tax returns",
              "VERIFIED PROCESS",
            ],
            [
              "VAT",
              "Ongoing returns",
              "File returns and pay the 13% tax on taxable supplies",
              "VERIFIED OFFICIAL for the rate; filing details require confirmation",
            ],
            [
              "Local business tax",
              "Annual, subject to the local finance act",
              "Pay the current category amount and keep the receipt",
              "VERIFIED OFFICIAL for KMC; other local levels require confirmation",
            ],
            [
              "Food-business licence",
              "Two years",
              "Renew at least 35 days before expiry",
              "VERIFIED OFFICIAL",
            ],
            [
              "Excise liquor licence",
              "Renewal before expiry",
              "Pay the renewal fee and clear outstanding excise dues",
              "VERIFIED OFFICIAL for the fee and renewal requirement; confirm the term",
            ],
            [
              "Local liquor permit",
              "As set by the local authority",
              "Confirm the renewal date and fee",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "SSF contributions",
              "Monthly",
              "Deposit the employee and employer contributions",
              "VERIFIED OFFICIAL",
            ],
            [
              "Fire safety",
              "Inspection and maintenance cycle",
              "Keep the inspection report, maintenance records and training log",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Tourism or star classification",
              "As set by the classification rules",
              "Confirm the renewal date and current fee",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <ArticleSubhead>The licence file</ArticleSubhead>

        <Checklist
          items={[
            "Company registration certificate, memorandum and articles.",
            "PAN certificate and VAT registration certificate where applicable.",
            "Local business registration or operating permit and annual tax receipts.",
            "Food-business licence, inspection report and renewal receipt.",
            "Excise licence, local liquor permit where applicable, and renewal receipts.",
            "Lease deed, building permission, fire clearance and occupancy documents.",
            "Signboard permission and waste collection agreement or receipts.",
            "Tourism or star classification certificate where applicable.",
            "Employee contracts, payroll records and SSF contribution records.",
            "A renewal diary with the responsible person and the date of each filing.",
          ]}
        />

        <Callout variant="note" title="A licence is a file, not a certificate">
          <p>
            The certificate proves the approval exists. The file proves the
            application, the fee, the inspection, the renewal and the current
            status. Keep both. When an inspector or a bank asks for proof, the
            file is what answers the question.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="faq" number="16" title="Frequently asked questions">
        <p>
          These answers use the official sources in this guide. They are not
          legal advice or a substitute for a current local schedule. Where a fee
          is set locally, the answer says so.
        </p>
        <Faq items={licenceFeesFaqs} />
      </ArticleSection>

      <ArticleSection
        id="sources"
        number="17"
        title="Sources and further reading"
      >
        <p>
          The sources below were used for the official fees, legal provisions,
          municipal schedules and tax rules in this guide. Primary legal and
          departmental sources are listed alongside the municipal pages. Where a
          current municipal schedule could not be retrieved, the article says so
          rather than substituting another city&apos;s figure.
        </p>
        <SourceList sources={sources} />
        <Callout variant="note" title="A note on dates and fees">
          <p>
            Government fees, licensing requirements and tax rates may change.
            Figures in this guide are dated and linked to their sources.
            Restaurant owners should verify current requirements with the
            relevant municipality, Inland Revenue Office, Department of Food
            Technology and Quality Control and qualified professional advisers
            before investing.
          </p>
        </Callout>
        <p>
          This guide was published on 10 November 2026 and last researched on 10
          November 2026. Some official municipal sites were unreachable from the
          research environment; those gaps are marked REQUIRES DIRECT
          CONFIRMATION rather than filled with an estimate. No fee, penalty or
          local charge in this article should be treated as a quotation for a
          specific premises.
        </p>
      </ArticleSection>
    </>
  );
}
