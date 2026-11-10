import Link from "next/link";
import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  KeyTakeaways,
  PullQuote,
  SourceLink,
} from "../../blocks";

export function LicenceFeesPartOne() {
  return (
    <>
      <div className="article-intro">
        <p>
          The phrase &quot;restaurant licence fees in Nepal&quot; suggests one
          number, paid once, to one office. The reality is a sequence. A
          restaurant may need a company registration, a PAN, a VAT registration,
          a local business registration or operating permit, an annual municipal
          business tax, a food-business licence, a liquor excise licence, a local
          liquor permit, labour and social-security registration, fire clearance,
          and a tourism or star-classification approval. Each has its own
          authority, legal basis, fee schedule, inspection, and renewal date.
        </p>
        <p>
          This guide separates the figures that are fixed in an official schedule
          from the figures that are set locally and must be confirmed. It uses
          the current Nepali fiscal year, 2083/84, and a research date of 10
          November 2026. Where a current fee could not be retrieved, the guide
          says so. It does not replace a missing schedule with a plausible number.
        </p>
        <p>
          The companion guides cover the wider project.{" "}
          <Link
            href="/blog/restaurant-startup-cost-in-nepal"
            className="article-inline-link"
          >
            Restaurant Startup Cost in Nepal
          </Link>{" "}
          builds the investment envelope, and{" "}
          <Link
            href="/blog/how-to-open-a-successful-restaurant-in-nepal"
            className="article-inline-link"
          >
            How to Open a Successful Restaurant in Nepal
          </Link>{" "}
          covers the operating sequence. This article is the licence file: what
          to pay, to whom, on what legal basis, and what to ask before paying.
        </p>
      </div>

      <KeyTakeaways
        items={[
          "There is no single national restaurant licence fee in Nepal. The cost is a stack of federal, provincial and local charges.",
          "Some figures are fixed in official schedules: OCR company registration slabs, Kathmandu's annual restaurant business tax, excise licence fees, the 13% VAT rate and the VAT registration threshold.",
          "The food-business licence is issued at the local level. The Food Act 2081 sets the process and validity, but not one national fee.",
          "A liquor licence is separate from a food licence. The Excise Rules 2059, 28th Amendment, set NPR 6,000 for the ordinary restaurant/bar opened-bottle category and NPR 11,000 for the tourist-standard foreign-and-domestic category.",
          "Annual business tax is not the same as an initial registration fee. Budget both where the municipality charges both.",
          "Many municipal websites and fee schedules were unreachable from the research environment. Those gaps are marked REQUIRES DIRECT CONFIRMATION.",
        ]}
      />

      <ArticleSection
        id="short-answer"
        number="01"
        title="The short answer: what restaurant licences cost in Nepal"
      >
        <p>
          A restaurant in Nepal does not buy one licence. It assembles a
          compliance stack. The first layer is the legal entity: a private
          company at the Office of the Company Registrar, or a sole
          proprietorship or partnership registered through the applicable local
          route. The second is tax registration: PAN, and VAT if turnover crosses
          the threshold. The third is local: business registration or an
          operating permit, annual business tax, signboard permission, and waste
          arrangements. The fourth is food: a food-business licence issued by the
          local government. The fifth is alcohol, if the restaurant serves it:
          an excise licence from the Inland Revenue Department and any local
          liquor permit. Labour, social security, fire safety, tourism
          classification, and music permissions sit around those core approvals.
        </p>

        <DataTable
          caption="The restaurant licensing stack in Nepal"
          head={[
            "Layer",
            "Typical approval",
            "Who sets the fee",
            "What this guide can confirm",
          ]}
          rows={[
            [
              "Legal entity",
              "Private company, sole proprietorship or partnership",
              "Office of the Company Registrar or the applicable registration office",
              "OCR private-company slabs are verified; other structures require confirmation",
            ],
            [
              "Tax registration",
              "PAN and VAT",
              "Inland Revenue Department",
              "VAT rate and threshold are verified; no separate PAN or VAT registration fee was stated in the pages reviewed",
            ],
            [
              "Local business",
              "Business registration, operating permit, annual business tax",
              "Municipality, sub-metropolitan city, rural municipality or ward",
              "Kathmandu's 2083 business tax is verified; other local schedules require direct confirmation",
            ],
            [
              "Food",
              "Food-business licence",
              "Local government head or authorised official",
              "Process, validity and late-renewal multipliers are verified; the fee is local",
            ],
            [
              "Liquor",
              "Excise licence and any local liquor permit",
              "Inland Revenue Department; local authority for the local permit",
              "Excise Schedule 2 fees are verified; local permit fees require confirmation",
            ],
            [
              "Labour and social security",
              "Labour registration and SSF contributions",
              "Department of Labour and Occupational Safety; Social Security Fund",
              "The 31% SSF contribution rate is verified; this is payroll cost, not a licence fee",
            ],
            [
              "Fire and building",
              "Fire safety clearance and building permission",
              "Local fire authority and building permit office",
              "Site-specific; no single national fee is asserted",
            ],
            [
              "Tourism and star classification",
              "Tourist-standard or star classification where applicable",
              "Ministry of Culture, Tourism and Civil Aviation; Department of Tourism",
              "Confirm the applicable category and current fee",
            ],
            [
              "Music and entertainment",
              "Local permission and rights clearance where applicable",
              "Local authority and rights organisations",
              "Confirm before installing sound equipment or programming music",
            ],
          ]}
        />

        <p>
          The order matters. A lease signed in a personal name, a kitchen built
          before the food licence inspection, or liquor stock ordered before the
          excise licence is issued can turn a manageable fee into a delay. The
          cost of the delay can be larger than the fee itself: rent, payroll,
          utilities, and lost opening revenue continue while the approval is
          pending.
        </p>

        <Callout variant="warning" title="The number you see online is usually incomplete">
          <p>
            A single figure for a &quot;restaurant licence&quot; often includes
            one local charge and excludes the food licence, the liquor excise
            licence, the annual business tax, professional fees, and renewal
            costs. It may also be from an older fiscal year. Ask for the legal
            basis and the date of the schedule before treating any number as a
            budget.
          </p>
        </Callout>

        <PullQuote quote="A restaurant does not have one licence fee. It has a licensing sequence, and every step has its own clock." />
      </ArticleSection>

      <ArticleSection
        id="what-counts"
        number="02"
        title="What counts as a licence fee"
      >
        <p>
          Not every payment made during licensing is a government licence fee.
          Some are taxes, some are deposits, some are professional service fees,
          and some are site-specific construction or inspection costs. Mixing
          them together makes the total look either cheaper or more expensive
          than it is. The table below separates the categories.
        </p>

        <DataTable
          caption="Government fee, tax, deposit, or professional service?"
          head={["Payment", "What it is", "How to treat it in the budget"]}
          rows={[
            [
              "OCR company registration fee",
              "A government registration fee based on authorised capital",
              "One-time at incorporation; confirm any current exemption notice",
            ],
            [
              "PAN registration",
              "Taxpayer identification",
              "No separate fee was stated in the IRD page reviewed; confirm at the tax office",
            ],
            [
              "VAT registration",
              "Registration for taxable supplies",
              "No separate registration fee was stated in the provisions reviewed; VAT itself is a 13% tax on taxable supplies",
            ],
            [
              "Local business registration or operating permit",
              "Local permission to operate",
              "One-time or periodic depending on the local level; obtain the current schedule",
            ],
            [
              "Municipal business tax",
              "An annual local tax on the business category",
              "Recurring; it does not replace the initial registration or food licence",
            ],
            [
              "Food-business licence",
              "Local food-safety licence",
              "Initial fee plus renewal every two years; amount set locally",
            ],
            [
              "Excise licence",
              "Federal licence to deal in excisable goods, including liquor",
              "Initial fee plus renewal; category-specific",
            ],
            [
              "Local liquor permit",
              "Any separate municipal permission for liquor",
              "Confirm with the local authority; do not assume the excise licence covers it",
            ],
            [
              "SSF contribution",
              "Payroll contribution",
              "31% of basic salary: 11% employee and 20% employer",
            ],
            [
              "Fire safety and building clearance",
              "Site-specific inspection, design and construction cost",
              "Obtain a written scope and fee from the local authority",
            ],
            [
              "Tourism or star classification",
              "Sector classification where applicable",
              "Confirm the category and fee with the Ministry or Department of Tourism",
            ],
            [
              "Agent or consultant fee",
              "Professional service",
              "Separate from the government fee; ask for a written scope and receipt",
            ],
          ]}
        />

        <ArticleSubhead>Ask for the legal basis and the receipt</ArticleSubhead>

        <p>
          A legitimate payment should be traceable to a published schedule, a
          finance act, a rule, or a written demand from the authority. The
          receipt should show the office, the category, the period, and the
          amount. If an agent quotes a total without separating the government
          fee from the service fee, ask for the breakdown in writing. If the
          payment is made into a personal account, stop and verify the official
          payment route with the office.
        </p>

        <Checklist
          items={[
            "Which authority is issuing the approval?",
            "Which law, rule, finance act or schedule sets the fee?",
            "Is this a one-time registration fee, an annual tax, a renewal fee or a deposit?",
            "Which category applies to the premises and the service style?",
            "Is the fee different for a café, a restaurant, a bar, a tourist-standard establishment or a star hotel?",
            "Is there a separate inspection, signboard, waste or local liquor charge?",
            "What is the renewal date, and what is the late-renewal penalty?",
            "Will the receipt be issued in the name of the business?",
          ]}
        />

        <Callout variant="tip" title="Keep the government fee and the service fee apart">
          <p>
            A consultant can save time on documents and follow-up. That does not
            make the consultant&apos;s fee a government fee. Put both in the
            budget, but do not let one receipt stand for the other. A clear
            separation also makes it easier to compare quotes from different
            agents.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="method"
        number="03"
        title="How this guide was verified"
      >
        <p>
          The research was completed on 10 November 2026 for the Nepali fiscal
          year 2083/84. It prioritised primary sources: Acts, Rules, finance acts,
          official fee schedules, and departmental pages. Secondary summaries
          were used only as leads or corroboration. Each figure in the article is
          labelled by the level of evidence available.
        </p>

        <DataTable
          caption="Evidence labels used in this guide"
          head={["Label", "Meaning", "Example"]}
          rows={[
            [
              "VERIFIED OFFICIAL",
              "The figure or rule appears in an official Act, Rule, schedule or departmental page reviewed for this guide",
              "Kathmandu restaurant business tax; Excise Schedule 2 fees; Food Act validity rules",
            ],
            [
              "VERIFIED PROCESS; FEE LOCAL",
              "The legal process is verified, but the amount is set by a local schedule that was not retrieved",
              "Food-business licence fee under the Food Act 2081",
            ],
            [
              "REQUIRES DIRECT CONFIRMATION",
              "A current official amount or local schedule was not available, or the category depends on facts that only the authority can decide",
              "Biratnagar, Dharan, Itahari, Pokhara and Sangurigadhi schedules; KMC's separate food-licence fee",
            ],
            [
              "NOT ASSERTED",
              "The guide does not provide a figure because no adequate source was found",
              "A single national restaurant licence fee; a universal fire-safety fee; a universal tourism classification fee",
            ],
          ]}
        />

        <p>
          Several limitations affected the audit. The Finance Act 2083 PDF is
          scanned, so direct local text extraction was not possible; the VAT
          threshold was therefore resolved from the VAT Rules instead. The
          official websites for Biratnagar, Dharan, Itahari, Pokhara and
          Sangurigadhi were unreachable from the research environment. The
          current Food Rules fee schedule was not located. The OCR page displays
          an exemption notice whose current scope and date were not resolved.
          These gaps are disclosed rather than filled.
        </p>

        <Callout variant="note" title="Last research update">
          <p>
            Last research update: 10 November 2026. The current Nepali fiscal
            year is 2083/84. Government fees, local schedules and tax rules can
            change during the year. Confirm the current amount with the relevant
            office before paying.
          </p>
        </Callout>

        <p>
          The guide also distinguishes a legal obligation from a commercial
          recommendation. A food licence is a legal requirement. A consultant, a
          premium fit-out, or a particular software package is a business choice.
          The two should not be blended into a single &quot;compliance
          package&quot; without a written breakdown.
        </p>
      </ArticleSection>

      <ArticleSection
        id="company-pan"
        number="04"
        title="Company registration and PAN"
      >
        <p>
          Many restaurants with more than one owner, or with plans to raise
          outside capital, are set up as private companies. The{" "}
          <SourceLink href="https://ocr.gov.np/pages/revenue">
            Office of the Company Registrar revenue page
          </SourceLink>{" "}
          publishes private-company registration fees by authorised capital. The
          fee is not a restaurant licence, but it is usually the first
          government payment in the sequence.
        </p>

        <DataTable
          caption="OCR published private-company registration fees"
          head={["Authorised capital", "Published OCR fee"]}
          rows={[
            ["Up to NPR 100,000", "NPR 1,000"],
            ["NPR 100,001 to NPR 500,000", "NPR 4,500"],
            ["NPR 500,001 to NPR 2,500,000", "NPR 9,500"],
            ["NPR 2,500,001 to NPR 10,000,000", "NPR 16,000"],
            [
              "Above NPR 10,000,000",
              "NPR 30 per NPR 100,000 above NPR 10,000,000; confirm the calculation with OCR",
            ],
          ]}
        />

        <p>
          The OCR page also displays a notice about exemption of company taxes,
          fees, duties and penalties. The current scope and date of that notice
          were not resolved in this audit. Confirm the payable amount at the OCR
          counter or through the current notice before filing. The fee is based
          on authorised capital, not on the amount of cash already paid into the
          bank.
        </p>

        <ArticleSubhead>Private company, sole proprietorship or partnership?</ArticleSubhead>

        <p>
          A private company is a separate legal person. It can own the lease,
          employ the team, hold the licences and raise equity. A sole
          proprietorship is simpler in structure and may be cheaper to register,
          but the owner and the business are not separate in law. A partnership
          sits between the two. The registration office, document list and fee depend
          on the structure and the local registration route. Confirm the current
          process before signing a lease in the business name.
        </p>

        <Checklist
          items={[
            "Choose the legal structure before signing the lease or opening a bank account.",
            "Reserve the company name and confirm the authorised capital.",
            "Prepare the memorandum and articles of association, identity documents and registered address.",
            "File the company registration and obtain the certificate.",
            "Register for PAN in the name of the business.",
            "Open the business bank account and keep the registration receipt.",
            "Confirm whether the local level requires a separate business registration or operating permit.",
            "Keep the company documents, tax certificates and local receipts in one licence file.",
          ]}
        />

        <p>
          PAN is a separate registration from company incorporation. It
          identifies the taxpayer and is required before invoicing, banking and
          most licence applications. The{" "}
          <SourceLink href="https://ird.gov.np/">
            Inland Revenue Department
          </SourceLink>{" "}
          service page reviewed did not state a separate PAN registration fee.
          That is not a guarantee that no charge applies. Confirm the current fee
          and document list at the tax office.
        </p>

        <Callout variant="legal" title="Company registration is not a restaurant licence">
          <p>
            A certificate of incorporation proves that the company exists. It
            does not authorise food handling, liquor sales, or operation from a
            particular premises. Those approvals come later, from different
            authorities. Do not open the kitchen or order liquor on the strength
            of the company certificate alone.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="vat-tax"
        number="05"
        title="VAT registration and tax status"
      >
        <p>
          VAT is a tax registration, not a licence to operate. The{" "}
          <SourceLink href="https://ird.gov.np/category/valueaddedtaxact/">
            VAT Act 2052
          </SourceLink>{" "}
          sets a single standard rate of 13% in section 7(1). The registration
          threshold is in the{" "}
          <SourceLink href="https://ird.gov.np/content/13412/value-added-tax-rules--2053--with-twenty-seventh/">
            VAT Rules 2053, 27th Amendment
          </SourceLink>
          , Rule 7. The threshold is NPR 5 million for goods, transport equipment
          or transport services, and NPR 3 million for mixed goods and services
          or a service business. An application is due within 30 days of crossing
          the threshold.
        </p>

        <DataTable
          caption="Tax registrations and what they do"
          head={["Registration or tax", "What it does", "Current verified point"]}
          rows={[
            [
              "PAN",
              "Identifies the taxpayer",
              "Required for tax and most licence applications; no separate fee was stated in the IRD page reviewed",
            ],
            [
              "VAT registration",
              "Authorises taxable supplies and VAT invoices",
              "Threshold NPR 5 million for goods/transport and NPR 3 million for services/mixed; apply within 30 days",
            ],
            [
              "VAT",
              "Tax on taxable supplies",
              "13% standard rate under section 7(1) of the VAT Act 2052",
            ],
            [
              "Income tax",
              "Annual tax on profit",
              "25% general entity rate; 30% for listed activities including liquor and beer transactions",
            ],
          ]}
        />

        <p>
          The{" "}
          <SourceLink href="https://ird.gov.np/content/13405/income-tax-act--2058--as-amended-by/">
            Income Tax Act 2058
          </SourceLink>{" "}
          sets the general entity rate at 25% in Schedule 1(2)(1). Schedule
          1(2)(2) sets 30% for listed activities, including entities conducting
          transactions in liquor and beer. The{" "}
          <SourceLink href="https://ird.gov.np/content/13608/income-tax-rate-for-the-entity-for/">
            IRD FY 2083/84 entity-rate table
          </SourceLink>{" "}
          confirms both rates. A food-led restaurant with a bar sits between the
          two categories. No restaurant-specific threshold or IRD circular was
          located. Treat the 30% question as requiring written IRD or
          tax-professional confirmation and model both rates.
        </p>

        <Callout variant="warning" title="VAT is not a licence fee, and PAN is not VAT">
          <p>
            A restaurant can have a PAN without being VAT-registered. A
            VAT-registered restaurant still needs a local food licence, a local
            business registration and, if it serves alcohol, a liquor licence.
            Holding one registration does not satisfy the others. Build the
            compliance calendar around all of them.
          </p>
        </Callout>

        <p>
          VAT cash is not operating cash. The 13% collected on taxable sales is
          a liability, even when it sits in the bank account. A restaurant that
          uses VAT collections to fund payroll or inventory is borrowing from a
          tax obligation that will fall due. Keep VAT in a separate sub-ledger
          and reconcile it before every return.
        </p>
      </ArticleSection>
    </>
  );
}
