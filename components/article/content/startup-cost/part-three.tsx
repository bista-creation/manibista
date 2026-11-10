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
        title="Government Licences, Tax and Regulatory Costs for Restaurants in Nepal"
      >
        <p>
          Restaurant licence fees in Nepal are not one fee. They are a stack of
          federal, provincial, and local charges, each with a different authority,
          legal basis, renewal cycle, and inspection regime. This section was last
          reviewed on 10 November 2026. It separates the figures that are fixed in
          an official schedule from those that must be confirmed with the
          municipality, the Inland Revenue Department, or a tax professional.
        </p>

        <Callout variant="note" title="Last research update">
          <p>
            Last research update: 10 November 2026. The current Nepali fiscal year
            is 2083/84. Government fees, tax rates, and local schedules can change
            during the year.
          </p>
        </Callout>

        <ArticleSubhead>Restaurant registration in Nepal: six different registrations</ArticleSubhead>

        <p>
          The most common mistake in restaurant budgeting is to treat company
          registration, local business registration, food-business licensing,
          PAN, VAT, and liquor licensing as one process. They are separate. Each
          can be refused, delayed, inspected, or renewed on its own timetable.
        </p>

        <DataTable
          caption="The restaurant compliance stack in Nepal"
          head={["Approval or registration", "Authority", "Legal basis", "When it is needed", "Fee evidence"]}
          rows={[
            [
              "Company registration",
              "Office of the Company Registrar for a private company; district administration or local registration office for a sole proprietorship or partnership",
              "Companies Act 2063; OCR procedures",
              "Before the bank account, leases, and most licences",
              "OCR published capital slabs; confirm the current exemption notice",
            ],
            [
              "PAN",
              "Inland Revenue Department",
              "Income Tax Act 2058; IRD taxpayer registration",
              "After business registration, before invoicing",
              "No PAN registration fee is stated in the IRD service page reviewed; confirm at the tax office",
            ],
            [
              "VAT registration",
              "Inland Revenue Department",
              "VAT Act 2052; VAT Rules 2053",
              "Before taxable transactions or within 30 days of crossing the threshold",
              "No separate VAT registration fee is stated in the provisions reviewed",
            ],
            [
              "Local business registration or operating permit",
              "Municipality or ward",
              "Local Government Operation Act 2074; municipal finance act",
              "Before opening",
              "Varies by local level; obtain the current schedule",
            ],
            [
              "Food business licence",
              "Local government head or authorised official",
              "Food Hygiene and Quality Act 2081, section 9",
              "Before handling, preparing, or serving food",
              "Local schedule; the Act does not set a federal fee",
            ],
            [
              "Liquor licence and excise registration",
              "Inland Revenue Department; local authority for any local liquor permit",
              "Excise Duty Act 2058; Excise Rules 2059; Liquor Act 2031",
              "Before selling or serving alcohol",
              "Excise Schedule 2 sets category fees; local permit fee requires confirmation",
            ],
            [
              "Labour and social-security registration",
              "Department of Labour; Social Security Fund",
              "Labour Act 2074; Social Security Fund Act 2074",
              "Before payroll",
              "SSF contribution is 31% of basic salary: 11% employee and 20% employer",
            ],
            [
              "Fire safety and building clearance",
              "Local fire authority; building permit office",
              "Building code and local bylaws",
              "Before opening, occupancy, or renovation",
              "Site-specific; no single national fee",
            ],
            [
              "Tourism licence or star classification",
              "Ministry of Tourism; Nepal Tourism Board",
              "Tourism Act 2039 and classification rules",
              "Only for tourist-standard or star-rated establishments",
              "Confirm the applicable category and fee",
            ],
            [
              "Music or entertainment permission",
              "Local authority and rights organisations",
              "Local rules; copyright and noise requirements",
              "If live or recorded music is part of the offer",
              "Confirm before programming or installing sound equipment",
            ],
          ]}
        />

        <ArticleSubhead>Company registration and PAN/VAT</ArticleSubhead>

        <p>
          A private company is registered at the Office of the Company Registrar.
          The{" "}
          <SourceLink href="https://ocr.gov.np/pages/revenue">OCR revenue page</SourceLink>{" "}
          publishes the following private-company registration fees by authorised
          capital. The page also displays a notice about exemption of company
          taxes, fees, duties, and penalties. The current scope and date of that
          notice were not resolved in this audit, so confirm the payable amount
          before filing.
        </p>

        <DataTable
          caption="OCR published private-company registration fees"
          head={["Authorised capital", "Published OCR fee"]}
          rows={[
            ["Up to NPR 100,000", "NPR 1,000"],
            ["NPR 100,001 to NPR 500,000", "NPR 4,500"],
            ["NPR 500,001 to NPR 2,500,000", "NPR 9,500"],
            ["NPR 2,500,001 to NPR 10,000,000", "NPR 16,000"],
            ["Above NPR 10,000,000", "NPR 30 per NPR 100,000 above NPR 10,000,000; confirm the calculation with OCR"],
          ]}
        />

        <p>
          A sole proprietorship or partnership may be simpler for a very small
          café, but it does not separate personal and business liability in the
          same way as a company. The registration office and document list depend
          on the structure. Confirm the current route before signing a lease in
          the business name.
        </p>

        <p>
          VAT is a separate registration from PAN. The{" "}
          <SourceLink href="https://ird.gov.np/category/valueaddedtaxact/">
            VAT Act 2052
          </SourceLink>{" "}
          sets a single standard rate of 13% in section 7(1). The registration
          threshold is prescribed in the{" "}
          <SourceLink href="https://ird.gov.np/content/13412/value-added-tax-rules--2053--with-twenty-seventh/">
            VAT Rules 2053 (27th Amendment)
          </SourceLink>
          , Rule 7: NPR 5 million for goods, transport equipment, or transport
          services, and NPR 3 million for mixed goods and services or a service
          business. An application is due within 30 days of crossing the
          threshold. The VAT Act itself does not contain the threshold.
        </p>

        <Callout variant="legal" title="PAN is not VAT, and VAT is not income tax">
          <p>
            A PAN identifies the taxpayer. VAT registration authorises taxable
            supplies and VAT invoices. Income tax is an annual tax on profit.
            Holding one does not satisfy the others. Build the compliance calendar
            around all three, plus the local business licence and food licence.
          </p>
        </Callout>

        <ArticleSubhead>Municipal business registration and restaurant classification</ArticleSubhead>

        <p>
          Local business registration is separate from OCR company registration.
          The municipality or ward may require its own registration, operating
          permit, classification, signboard permission, and waste arrangement.
          The fee can depend on the category, floor area, seating, dance or
          orchestra permission, signboard size, or waste volume. Do not apply one
          city&apos;s schedule to another city.
        </p>

        <DataTable
          caption="Municipal restaurant licensing and business tax: what is confirmed as of 10 November 2026"
          head={["Local level", "Current annual business tax or renewal", "Food-business licence fee", "Other local charges", "Status"]}
          rows={[
            [
              "Kathmandu Metropolitan City",
              "Restaurant/bar without dance or orchestra NPR 10,000; with dance or orchestra NPR 20,000. Café, fast food, or small restaurant up to 400 sq ft NPR 3,000; above 400 to 1,000 sq ft NPR 5,000; above 1,000 sq ft NPR 10,000 per outlet",
              "Not separately set in the Finance Act 2083 text reviewed; confirm with KMC or the ward",
              "Signboard tax under Schedule 10; commercial waste under Schedule 14; fire and building clearance",
              "VERIFIED OFFICIAL for business tax; food fee REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Biratnagar Metropolitan City",
              "Finance Act 2083/84 is published, but the restaurant, food, signboard, and waste schedules were not retrievable from this environment",
              "Confirm with Biratnagar Metropolitan City",
              "Confirm the current schedules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Dharan Sub-Metropolitan City",
              "The official site references a 2083/84 rate schedule, but the Act was not retrievable",
              "Confirm with Dharan Sub-Metropolitan City",
              "Confirm the current schedules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Itahari Sub-Metropolitan City",
              "A 2083 notice references the Economic Act 2083, section 20, but the Act was not retrievable",
              "Confirm with Itahari Sub-Metropolitan City",
              "Confirm the current schedules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Pokhara Metropolitan City",
              "The official act page lists the 2082 economic act and the 2083 land-use classification; no 2083/84 economic act was located",
              "Confirm with Pokhara Metropolitan City",
              "Confirm the current schedules",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Sangurigadhi Rural Municipality (Bhedetar, Dhankuta)",
              "The latest economic act posted on the official tax and fees page is 2079; the 2083/84 schedule was not published online",
              "Confirm with Sangurigadhi Rural Municipality",
              "Confirm the current schedules",
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

        <p>
          Kathmandu&apos;s{" "}
          <SourceLink href="https://files.kathmandu.gov.np/uploads/medias/972eddda919c4cb9989f3dac4a76a2b4.pdf">
            Finance Act 2083
          </SourceLink>{" "}
          is effective from 2083 Shrawan 1. Section 5 and Schedule 7 cover
          business tax and renewal. Items 16 and 17 set the restaurant and bar
          figures; items 18 to 20 set the café and small-restaurant figures by
          floor area. The restaurant and bar entries reviewed do not vary by floor
          area; the café and small-restaurant entries do. The ward decides which
          category applies to your operation.
        </p>

        <p>
          Schedule 10 sets signboard and advertising tax. One published example is
          a 15 to 30 square foot signboard or hoarding at NPR 1,000 per square
          foot per year. Schedule 14 sets waste and sanitation fees. One commercial
          example is NPR 550 per 15 litres per day, plus NPR 250 for each
          additional 15 litres. These are examples from the Act, not a quote for
          your premises; the measurement category and collection method must be
          confirmed with the ward.
        </p>

        <ArticleSubhead>Restaurant food licence Nepal: the Food Act 2081</ArticleSubhead>

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
          requires a decision within 30 days after inspection.
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
              "Restaurant, café, canteen, party, and banquet licences are issued locally",
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
          training charge. The document list below is a practical starting point;
          the local checklist controls.
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

        <Callout variant="warning" title="A food licence is not a liquor licence">
          <p>
            The Food Act 2081 licence covers food safety and hygiene. It does not
            authorise the sale or service of alcohol. A restaurant that serves
            alcohol needs the applicable excise licence and any local liquor
            permit in addition to the food licence.
          </p>
        </Callout>

        <ArticleSubhead>Liquor licence fee Nepal: excise categories and renewals</ArticleSubhead>

        <p>
          Alcohol has two regulatory layers. The Inland Revenue Department issues
          the excise licence under the Excise Duty Act 2058 and the Excise Rules
          2059. The local authority may also require a liquor permit under the{" "}
          <SourceLink href="https://lawcommission.gov.np/content/13414/the-madira-act--2031/">
            Liquor Act 2031
          </SourceLink>{" "}
          and its local rules. Confirm both before ordering stock.
        </p>

        <p>
          The current consolidated{" "}
          <SourceLink href="https://ird.gov.np/category/exciserules">
            Excise Rules 2059
          </SourceLink>{" "}
          includes the 28th Amendment dated 2083/02/15. Schedule 2, pages 39 and
          40, sets the licence and renewal fees. The new-licence and renewal
          columns carry the same amount in the schedule for the categories below.
          Confirm with IRD that no later amendment has changed Schedule 2 before
          paying.
        </p>

        <DataTable
          caption="Excise licence and renewal fees under Schedule 2, Excise Rules 2059 (28th Amendment)"
          head={["Category", "Licence fee (NPR)", "Renewal fee (NPR)", "Basis and note"]}
          rows={[
            ["5-star hotel, restaurant, or lodge", "75,000", "75,000", "Star category"],
            ["4-star hotel, restaurant, or lodge", "60,000", "60,000", "Star category"],
            ["3-star hotel, restaurant, or lodge", "45,000", "45,000", "Star category"],
            ["2-star hotel, restaurant, or lodge", "30,000", "30,000", "Star category"],
            ["1-star hotel, restaurant, or lodge", "15,000", "15,000", "Star category"],
            [
              "Tourist-standard restaurant, resort, or party palace selling foreign and domestic liquor by opening a bottle",
              "11,000",
              "11,000",
              "Tourist-standard category",
            ],
            [
              "Ordinary hotel, restaurant, bar, or lodge selling foreign liquor by opening a bottle",
              "6,000",
              "6,000",
              "Ordinary category; foreign liquor only",
            ],
            ["Casino", "75,000", "75,000", "Casino category"],
            ["Distiller", "45,000", "45,000", "Production"],
            ["Wholesaler", "30,000", "30,000", "Wholesale"],
            ["Retailer, foreign and domestic liquor", "15,000", "15,000", "Retail"],
            [
              "Retailer, foreign liquor only, in a metropolitan city, sub-metropolitan city, or municipality",
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
            The NPR 6,000 entry is the ordinary hotel, restaurant, bar, or lodge
            category for selling foreign liquor by opening a bottle. The NPR
            11,000 entry is the tourist-standard restaurant, resort, or party
            palace category for selling foreign and domestic liquor by opening a
            bottle. A star-rated hotel restaurant, a retail shop, a wholesaler,
            and a sealed-bottle retailer are different categories. The old Excise
            Rules 21st Amendment figures of NPR 4,500 and NPR 8,500 are not
            current. Confirm your exact category with the IRD before paying.
          </p>
        </Callout>

        <DataTable
          caption="Liquor licence process: authority, documents, renewal, and penalties"
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
              "VERIFIED OFFICIAL for the core application; local list may add documents",
            ],
            [
              "Renewal",
              "Apply with the Schedule 2 renewal fee and clear outstanding excise dues; renew before expiry",
              "VERIFIED OFFICIAL",
            ],
            [
              "Opened versus sealed bottles",
              "The hotel, restaurant, and bar entries are for selling liquor by opening a bottle; sealed-bottle retail is a separate retail licence category",
              "VERIFIED OFFICIAL",
            ],
            [
              "Deadline and grace period",
              "The Rules reviewed require renewal with the fee and clearance of arrears; no universal grace period should be assumed",
              "VERIFIED OFFICIAL for the renewal requirement; grace period REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Penalties",
              "The Excise Duty Act 2058 sets penalties for unlicensed production, import, sale, evasion, and related offences; the amount depends on the offence",
              "VERIFIED OFFICIAL that penalties exist; exact penalty REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <ArticleSubhead>Restaurant tax rate Nepal: the 25% and 30% question</ArticleSubhead>

        <p>
          The Income Tax Act 2058, Schedule 1(2)(1), sets the general entity rate
          at 25%. Schedule 1(2)(2) sets 30% for a listed group that includes
          entities conducting transactions in liquor and beer. The{" "}
          <SourceLink href="https://ird.gov.np/content/13608/income-tax-rate-for-the-entity-for/">
            IRD entity rate publication for FY 2083/84
          </SourceLink>{" "}
          confirms the same 25% and 30% table. The legal text is drafted by entity
          and activity, not by restaurant department or revenue percentage.
        </p>

        <DataTable
          caption="Corporate tax conclusions for three restaurant patterns"
          head={["Business pattern", "Likely rate", "Legal basis", "Status and confidence"]}
          rows={[
            [
              "Ordinary restaurant without liquor or beer",
              "25%",
              "Income Tax Act 2058, Schedule 1(2)(1); IRD FY 2083/84 entity rate table",
              "VERIFIED OFFICIAL; High",
            ],
            [
              "Restaurant serving alcohol as part of food service",
              "30% may apply if the entity is conducting liquor or beer transactions; the text does not provide a restaurant-specific threshold",
              "Income Tax Act 2058, Schedule 1(2)(2); no restaurant-specific IRD circular located",
              "REQUIRES IRD/TAX PROFESSIONAL CONFIRMATION; Low to Medium",
            ],
            [
              "Business primarily trading in liquor or beer",
              "30%",
              "Income Tax Act 2058, Schedule 1(2)(2); IRD FY 2083/84 entity rate table",
              "VERIFIED OFFICIAL; High",
            ],
          ]}
        />

        <p>
          The practical question is not whether the bar has a separate till. The
          schedule applies to an entity conducting transactions in liquor and
          beer. Principal activity, registration, revenue mix, and accounting
          separation may all be relevant evidence in an assessment, but the text
          reviewed does not provide an accounting-separation exemption. Separate
          legal entities may be assessed separately, but intercompany
          arrangements can attract transfer-pricing and anti-avoidance scrutiny;
          that is a structuring question for a tax professional. No published
          court decision directly on this restaurant-with-a-bar classification
          was located in this audit; that is not a statement that none exists.
        </p>

        <Callout variant="legal" title="REQUIRES IRD/TAX PROFESSIONAL CONFIRMATION">
          <p>
            A restaurant with a bar should not assume it will pay 25% or 30%
            without written advice. Ask the tax adviser to review the entity&apos;s
            actual activity, liquor and beer turnover, registration, accounting
            separation, and the current IRD position. Model both rates until the
            position is confirmed in writing.
          </p>
        </Callout>

        <ArticleSubhead>Labour, fire, building, and tourism compliance</ArticleSubhead>

        <DataTable
          caption="Recurring and site-specific compliance costs"
          head={["Area", "Authority and basis", "What to budget", "Status"]}
          rows={[
            [
              "Labour and social security",
              "Department of Labour; Social Security Fund; Labour Act 2074 and SSF Act 2074",
              "31% of basic salary: 11% employee and 20% employer, plus payroll administration",
              "VERIFIED OFFICIAL",
            ],
            [
              "Fire safety",
              "Local fire authority and building code",
              "Extinguishers, alarms, emergency lighting, signage, inspection, training, and maintenance; site-specific",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Building and occupancy",
              "Local building permit office and building code",
              "Permit, drawings, structural and fire review, occupancy clearance; site-specific",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Tourism licence or star classification",
              "Ministry of Tourism and Nepal Tourism Board",
              "Only if the business is tourist-standard or star-rated; classification and inspection costs",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Music and entertainment",
              "Local authority and rights organisations",
              "Permit, royalty, noise control, and sound-system compliance",
              "REQUIRES DIRECT CONFIRMATION",
            ],
          ]}
        />

        <p>
          Do not budget a single national fire-safety fee. The requirement depends
          on the building, the kitchen, the seating, the escape routes, and the
          local authority. A restaurant in a leased building may also need the
          landlord&apos;s consent and a building permit before altering the
          kitchen, exhaust, or electrical system.
        </p>

        <ArticleSubhead>Foreign investment in Nepal restaurant: the current threshold</ArticleSubhead>

        <p>
          Foreign investment is governed by the{" "}
          <SourceLink href="https://lawcommission.gov.np/content/12171/12171-the-foreign-investment-and-tec/">
            Foreign Investment and Technology Transfer Act 2075
          </SourceLink>{" "}
          and the Industrial Enterprises Act 2020. The{" "}
          <SourceLink href="https://www.doind.gov.np/foreign-investment">
            Department of Industry
          </SourceLink>{" "}
          is the sole agency for administering FITTA. The DOI&apos;s current FAQ
          states that a foreign investor must invest at least NPR 20 million in
          the project, with no upper cap. It does not state NPR 50 million for a
          restaurant.
        </p>

        <DataTable
          caption="Foreign investment in a Nepali restaurant: current position"
          head={["Issue", "Current position", "Status"]}
          rows={[
            [
              "Governing law",
              "FITTA 2075 and the Industrial Enterprises Act 2020; DOI administers FITTA",
              "VERIFIED OFFICIAL",
            ],
            [
              "Minimum investment",
              "At least NPR 20 million in the project; no upper cap stated by DOI",
              "VERIFIED OFFICIAL",
            ],
            [
              "Restaurant eligibility",
              "Restaurant operation is not expressly listed in the DOI negative list reviewed, but local catering services are prohibited; the boundary is not defined in the FAQ",
              "REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Negative list",
              "Cottage industries, personal services, arms, explosives, radiation, real estate, film, security printing, banknotes, most retail, internal courier, atomic energy, poultry, fisheries, beekeeping, specified consultancy, beauty parlours, rented food-grain processing, local catering, and rural tourism",
              "VERIFIED OFFICIAL for the list; restaurant boundary REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Approval route",
              "FDI approval application, company incorporation, tax registration, and industry registration; IBN where its jurisdiction applies; NRB for foreign exchange",
              "VERIFIED OFFICIAL for the DOI sequence; IBN and NRB specifics REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "Application documents",
              "Project report, joint venture agreement if more than one investor, local and foreign identity or incorporation documents, company profile, financial credibility certificate, and authority letter where applicable",
              "VERIFIED OFFICIAL",
            ],
            [
              "Refundable deposit",
              "NPR 20,000 after foreign investment approval, returned after the industry operates",
              "VERIFIED OFFICIAL",
            ],
            [
              "Fund inflow",
              "Convertible foreign currency through a proper banking channel to the company name; in-kind machinery needs prior DOI approval",
              "VERIFIED OFFICIAL",
            ],
            [
              "Joint venture",
              "A JVA is required where more than one investor participates; local and foreign documents must be provided",
              "VERIFIED OFFICIAL",
            ],
            [
              "Repatriation",
              "Dividends, sale proceeds, and expatriate earnings are subject to FITTA and NRB approval; DOI states expatriates may take back 75% of salary, allowances, and emoluments",
              "VERIFIED OFFICIAL for the 75% statement; process REQUIRES DIRECT CONFIRMATION",
            ],
            [
              "NPR 50 million food-service claim",
              "Not supported by the current DOI FAQ reviewed; do not use it as the general restaurant threshold",
              "UNVERIFIED",
            ],
          ]}
        />

        <Callout variant="warning" title="Local catering is on the negative list">
          <p>
            The DOI negative list prohibits foreign investment in local catering
            services. A restaurant is not the same thing as a caterer, but the
            boundary is not defined in the FAQ. If the project includes
            off-premise catering, event catering, or a cloud kitchen, describe
            the activity precisely to DOI and obtain written confirmation before
            applying.
          </p>
        </Callout>

        <ArticleSubhead>One-time, annual, and municipality-dependent costs</ArticleSubhead>

        <DataTable
          caption="How restaurant regulatory costs behave"
          head={["Cost", "One-time or recurring", "Basis", "What changes"]}
          rows={[
            ["Company registration", "One-time", "OCR capital slab", "Authorised capital and current exemption notice"],
            ["Legal and accounting setup", "One-time", "Professional scope", "Structure, contracts, tax registration, drawings"],
            ["Local business registration or operating permit", "One-time, then renewal", "Municipal finance act", "Category, floor area, seating, ward"],
            ["Food business licence", "Every two years", "Food Act 2081 and local schedule", "Local fee, inspection, documents"],
            ["PAN and VAT registration", "One-time", "IRD", "Threshold and voluntary registration"],
            ["Liquor and excise licence", "Annual", "Excise Schedule 2 and local permit", "Star category, ordinary or tourist-standard, retail or wholesale"],
            ["Signboard tax", "Annual", "Municipal schedule", "Size, illumination, placement"],
            ["Waste and sanitation", "Recurring", "Municipal schedule", "Volume, collection frequency, category"],
            ["Labour and SSF", "Monthly", "31% of basic salary", "Headcount and payroll"],
            ["Fire safety and building", "One-time and recurring", "Site-specific", "Building, kitchen, seating, inspection cycle"],
            ["Foreign investment approval", "One-time", "FITTA and DOI", "Project size, joint venture, sector"],
          ]}
        />

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
          A 2023 Kathmandu Post report said Nepal&apos;s Supreme Court struck
          down the mandatory 10% service charge that had been collected under
          the Labour Act. The original judgment was not reviewed in this audit,
          and the practical market has not become uniform since. Some
          establishments still add a service charge; others have removed it or
          replaced it with a clearly disclosed charge. Treat the legal position
          as <strong>REQUIRES DIRECT CONFIRMATION</strong> and review it with
          counsel. Do not build a business model that depends on a service charge
          as if it were a statutory entitlement.
        </p>

        <ArticleSubhead>Evidence register for the figures in this guide</ArticleSubhead>

        <p>
          The register below records the key regulatory and supplier figures used
          in this article, the source and location, the research date, and the
          confidence level. Full URLs are in section 21. A figure marked
          REQUIRES DIRECT CONFIRMATION is not a budget number; it is an issue to
          resolve before committing capital.
        </p>

        <DataTable
          caption="Central evidence register, last reviewed 10 November 2026"
          head={["Claim", "Figure or unit", "Source and location", "Date or access", "Status", "Confidence"]}
          rows={[
            [
              "OCR private-company registration fee",
              "NPR 1,000 up to NPR 100,000 authorised capital; higher slabs apply",
              "Office of the Company Registrar, revenue page",
              "Accessed 10 Nov 2026",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "VAT standard rate",
              "13%",
              "VAT Act 2052, section 7(1)",
              "Current consolidation reviewed 10 Nov 2026",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "VAT registration threshold",
              "NPR 5 million goods or transport; NPR 3 million services or mixed supplies",
              "VAT Rules 2053 (27th Amendment), Rule 7",
              "Published 18 Poush 2082",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Food-business licence and renewal",
              "Two-year licence; renew at least 35 days before expiry; double fee within six months; five times after six months",
              "Food Hygiene and Quality Act 2081, sections 9 and 10",
              "Act of 2024; reviewed 10 Nov 2026",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Food-business licence fee amount",
              "Not set in the Act",
              "Food Act 2081; local schedule required",
              "Reviewed 10 Nov 2026",
              "REQUIRES DIRECT CONFIRMATION",
              "High that the Act is silent; amount Low",
            ],
            [
              "KMC restaurant or bar annual business tax",
              "NPR 10,000 without dance or orchestra; NPR 20,000 with",
              "Kathmandu Metropolitan City Finance Act 2083, Schedule 7, items 16-17",
              "Effective 2083 Shrawan 1",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "KMC café or small restaurant annual business tax",
              "NPR 3,000 up to 400 sq ft; NPR 5,000 above 400 to 1,000 sq ft; NPR 10,000 above 1,000 sq ft",
              "KMC Finance Act 2083, Schedule 7, items 18-20",
              "Effective 2083 Shrawan 1",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "KMC restaurant food-business licence fee",
              "Not separately set in the Finance Act text reviewed",
              "KMC Finance Act 2083; KMC ward office required",
              "Reviewed 10 Nov 2026",
              "REQUIRES DIRECT CONFIRMATION",
              "Medium",
            ],
            [
              "Excise fee, ordinary restaurant or bar",
              "NPR 6,000 licence and NPR 6,000 renewal for foreign liquor by opening a bottle",
              "Excise Rules 2059 (28th Amendment), Schedule 2, pages 39-40",
              "Amendment dated 2083/02/15",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Excise fee, tourist-standard restaurant, resort, or party palace",
              "NPR 11,000 licence and NPR 11,000 renewal for foreign and domestic liquor by opening a bottle",
              "Excise Rules 2059 (28th Amendment), Schedule 2, pages 39-40",
              "Amendment dated 2083/02/15",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Excise new licence versus renewal",
              "Same amount in the Schedule 2 columns for the categories reviewed",
              "Excise Rules 2059 (28th Amendment), Schedule 2",
              "Amendment dated 2083/02/15",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Corporate tax, general entity",
              "25%",
              "Income Tax Act 2058, Schedule 1(2)(1); IRD FY 2083/84 entity rate table",
              "FY 2083/84",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Corporate tax, liquor and beer transactions",
              "30%",
              "Income Tax Act 2058, Schedule 1(2)(2); IRD FY 2083/84 entity rate table",
              "FY 2083/84",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Restaurant with a bar: which corporate rate",
              "No restaurant-specific threshold or circular located; the Act is entity and activity based",
              "Income Tax Act 2058, Schedule 1(2)(2); IRD publications reviewed",
              "Reviewed 10 Nov 2026",
              "REQUIRES IRD/TAX PROFESSIONAL CONFIRMATION",
              "Low to Medium",
            ],
            [
              "FDI minimum",
              "NPR 20 million per project; no upper cap",
              "Department of Industry, foreign investment FAQ",
              "Accessed 10 Nov 2026",
              "VERIFIED OFFICIAL",
              "High",
            ],
            [
              "Restaurant versus local catering under FDI",
              "Restaurant not expressly listed; local catering services prohibited; boundary undefined",
              "Department of Industry, negative list",
              "Accessed 10 Nov 2026",
              "REQUIRES DIRECT CONFIRMATION",
              "Medium",
            ],
            [
              "GAI Commercial Burger Kitchen Setup Package",
              "NPR 515,555 published package price",
              "GAI public website, deals page",
              "Accessed 10 Nov 2026",
              "VERIFIED PRIMARY DOCUMENT",
              "Medium",
            ],
            [
              "Alleged Mandabya quotation",
              "NPR 1,485,650 dated 2082-05-05 BS",
              "Original document not located; no supplier contact",
              "Checked 10 Nov 2026",
              "UNVERIFIED",
              "Low",
            ],
            [
              "Current written supplier quotations",
              "None obtained",
              "No supplier was contacted for this article",
              "10 Nov 2026",
              "UNVERIFIED; QUOTE REQUIRED",
              "High that no quote was obtained",
            ],
            [
              "Other municipal 2083/84 schedules",
              "Biratnagar, Dharan, Itahari, Pokhara, and Sangurigadhi exact current fees not retrieved",
              "Official municipal sites; access limitations noted",
              "10 Nov 2026",
              "REQUIRES DIRECT CONFIRMATION",
              "Low",
            ],
            [
              "Social Security Fund contribution",
              "31% of basic salary: 11% employee and 20% employer",
              "Social Security Fund official presentation",
              "Reviewed 10 Nov 2026",
              "VERIFIED OFFICIAL",
              "High",
            ],
          ]}
        />

        <Callout variant="note" title="Verification note">
          <p>
            Government fees, licensing requirements, tax rates and supplier prices
            may change. Figures in this guide are dated and linked to their
            sources. Restaurant owners should verify current requirements with the
            relevant municipality, Inland Revenue Office, Department of Food
            Technology and Quality Control and qualified professional advisers
            before investing.
          </p>
        </Callout>

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
