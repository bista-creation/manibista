import Link from "next/link";
import {
  ArticleSection,
  ArticleSubhead,
  Callout,
  Checklist,
  DataTable,
  FinanceGrid,
} from "../blocks";

export function PartThree() {
  return (
    <>
      <ArticleSection
        id="people"
        number="09"
        title="Hiring, training, and labour law"
      >
        <p>
          A restaurant is a people business that happens to serve food. The
          kitchen can be well designed, the menu can be brilliant, and the
          location can be perfect, but the guest experience is delivered by
          people who are tired, under-trained, or unfairly paid. Labour is
          usually the second-largest cost after food, and the largest source of
          variability. Treat it as an investment with a return, not a line item
          to squeeze.
        </p>

        <ArticleSubhead>Start with the organisation, not the job advert</ArticleSubhead>

        <p>
          Before you hire, map the work. Who opens? Who closes? Who owns the
          cash? Who owns the kitchen checklist? Who handles a complaint? Who
          trains a new server? A small restaurant may have one person wearing
          several hats, but the responsibilities still need to be clear. If two
          people think they own the same task, nobody does.
        </p>

        <DataTable
          caption="A typical full-service restaurant organisation"
          head={["Role", "Core responsibility", "When to add it"]}
          rows={[
            [
              "Owner / general manager",
              "Strategy, cash, landlord, key hires, final escalation",
              "From day one",
            ],
            [
              "Head chef / kitchen manager",
              "Menu, food cost, kitchen team, safety, supplier quality",
              "Before opening",
            ],
            [
              "Sous chef / shift lead",
              "Service execution, prep, training, kitchen opening and closing",
              "When the kitchen has more than 4–5 staff",
            ],
            [
              "Commis / prep cooks",
              "Preparation, station setup, cleaning, basic cooking",
              "Before opening",
            ],
            [
              "Steward / dishwash",
              "Dishwash, kitchen cleaning, waste, basic maintenance",
              "Before opening",
            ],
            [
              "Front-of-house manager",
              "Service standards, reservations, guest recovery, rota",
              "Before opening or at first growth step",
            ],
            [
              "Servers / runners",
              "Table service, menu knowledge, allergy communication",
              "Before opening",
            ],
            [
              "Host / cashier",
              "Welcome, seating, phone, payments, reservations",
              "At 40+ seats or high volume",
            ],
            [
              "Barista / bartender",
              "Beverage production, bar stock, responsible service",
              "If beverages are a meaningful part of the offer",
            ],
            [
              "Cleaner / maintenance",
              "Deep cleaning, pest control support, repairs",
              "Before opening; can be contracted",
            ],
          ]}
        />

        <p>
          Staffing ratios are a starting point, not a rule. A full-service
          restaurant might run one server for every 12–20 seats, with additional
          runners at peak. A kitchen might need one cook for every 20–30 covers
          depending on the menu’s complexity and the amount of prep. A
          quick-service format can run much leaner. The right number is the one
          that lets you execute the standard without burning the team out.
        </p>

        <ArticleSubhead>Hire for attitude and train for skill</ArticleSubhead>

        <p>
          In a market with limited formal hospitality training, the best hires
          are often people with the right temperament, reliability, and curiosity,
          even if their CV is short. A server who listens, remembers, and takes
          responsibility is more valuable than one who has memorised a service
          sequence but cannot handle a busy Saturday. Technical skills can be
          taught. Attitude is harder.
        </p>

        <Checklist
          items={[
            "Write a clear job description with duties, hours, reporting line, and pay range.",
            "Use a short practical trial, and pay people for trial shifts.",
            "Ask situational questions: tell me about a time you handled a difficult guest.",
            "Check references, especially for cash-handling and kitchen roles.",
            "Explain the probation period, notice period, and working hours in writing.",
            "Collect identity, tax, and Social Security Fund information before payroll.",
            "Give every new hire a written contract and a copy of the house rules.",
            "Do not use unpaid “training” periods to avoid paying wages.",
          ]}
        />

        <ArticleSubhead>The legal floor</ArticleSubhead>

        <p>
          Nepal’s Labour Act 2074 applies to enterprises with one or more
          employees. The current national minimum wage is NPR 19,550 per month,
          made up of NPR 12,170 basic salary and NPR 7,380 dearness allowance. It
          took effect on 17 July 2025 and remains the rate for FY 2083/84. The
          daily equivalent is NPR 754, the full-time hourly equivalent is NPR
          101, and the part-time hourly minimum is NPR 107.
        </p>

        <DataTable
          caption="Minimum wage and employer on-costs at the statutory floor"
          head={["Item", "Amount", "Notes"]}
          rows={[
            ["Monthly minimum wage", "NPR 19,550", "NPR 12,170 basic + NPR 7,380 dearness"],
            ["Employee SSF contribution", "NPR 1,339", "11% of basic, deducted from pay"],
            ["Employer SSF contribution", "NPR 2,434", "20% of basic, paid by employer"],
            ["Monthly cost to company", "NPR 21,984", "Wage plus employer SSF"],
            ["Festival allowance", "NPR 12,170/year", "One month basic, accrued monthly"],
            ["Approximate monthly cost", "NPR 22,998", "Before meals, uniforms, insurance, training"],
          ]}
        />

        <p>
          The statutory working week is 8 hours per day and 48 hours per week.
          Overtime is paid at 1.5 times the normal rate, capped at 4 hours per
          day and 24 hours per week. Employees are entitled to weekly rest,
          public holidays, sick leave, and other statutory leave. Festival
          allowance is one month’s basic salary. Probation cannot exceed six
          months. Termination of a regular employee generally requires 30 days’
          written notice or pay in lieu, and the process must follow the Act and
          the employment contract.
        </p>

        <Callout variant="legal" title="SSF is not optional for formal employers">
          <p>
            The Social Security Fund contribution is 31% of basic salary: 11%
            from the employee and 20% from the employer. Register the business
            and the employees, deduct the employee share correctly, and remit
            both shares on time. If you are not sure whether your business is
            covered, ask the Social Security Fund or a payroll professional
            before your first pay run.
          </p>
        </Callout>

        <ArticleSubhead>Training is a system, not a speech</ArticleSubhead>

        <p>
          A new hire needs more than a tour and a menu. They need to know what
          good looks like, how to do it, and what to do when something goes
          wrong. Build a two-week onboarding plan: three days of orientation and
          food safety, five days of shadowing, three days of supervised service,
          and three days of independent work with a check-in. Test menu knowledge
          and allergy protocol before anyone serves a guest alone.
        </p>

        <DataTable
          caption="Core training modules"
          head={["Module", "What it covers", "Evidence of completion"]}
          rows={[
            [
              "Orientation",
              "Brand, story, house rules, pay, rota, reporting",
              "Signed handbook acknowledgement",
            ],
            [
              "Food safety",
              "Handwashing, temperature control, cross-contamination, cleaning",
              "Short quiz and observed practice",
            ],
            [
              "Allergens",
              "Allergen matrix, guest questions, cross-contact, escalation",
              "Scenario test and sign-off",
            ],
            [
              "Menu",
              "Ingredients, preparation, descriptions, availability",
              "Tasting and menu quiz",
            ],
            [
              "Service sequence",
              "Welcome, order, delivery, check-back, payment, farewell",
              "Observed service shift",
            ],
            [
              "POS and cash",
              "Order entry, discounts, voids, split bills, reconciliation",
              "Supervised transaction",
            ],
            [
              "Emergency",
              "Fire, gas leak, medical incident, evacuation, reporting",
              "Drill participation",
            ],
            [
              "Responsible alcohol",
              "Age verification, intoxication, refusal, licensing conditions",
              "Scenario test, if applicable",
            ],
          ]}
        />

        <ArticleSubhead>Retention is cheaper than recruitment</ArticleSubhead>

        <p>
          Every departure costs you recruitment time, training time, and service
          consistency. The cheapest retention tools are not always money. Fair
          scheduling, predictable tips, a staff meal, clean staff areas, clear
          expectations, and a manager who listens go a long way. So does a
          career path: a commis who can see a route to sous chef is more likely
          to stay than one who is treated as permanent labour.
        </p>

        <p>
          Pay fairly, pay on time, and explain the payslip. Late wages destroy
          trust faster than almost anything else. If cash is tight, talk to the
          team early and honestly; do not let payroll become a surprise. A
          restaurant that pays late will eventually lose its best people first.
        </p>

        <Callout variant="tip" title="Build a bench before you need it">
          <p>
            Keep a short list of former staff, part-time servers, and
            recommendations from your team. When someone calls in sick on a
            Friday, a bench turns a crisis into a phone call. Cross-train at
            least two people on every critical task, including cash-up and
            opening.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="operations"
        number="10"
        title="SOPs and daily operations"
      >
        <p>
          Standard operating procedures are not bureaucracy. They are the
          difference between a restaurant that depends on a particular manager’s
          memory and one that can run consistently on a busy Tuesday when that
          manager is ill. An SOP is simply a written answer to “How do we do this
          here, every time, to the same standard?”
        </p>

        <ArticleSubhead>The SOP library</ArticleSubhead>

        <p>
          You do not need a 200-page manual before opening. Start with the
          procedures that protect money, safety, and guest experience. Write
          them in plain language, with a checklist and a named owner. Review them
          after the first month and after every significant incident.
        </p>

        <DataTable
          caption="The first SOPs to write"
          head={["SOP", "Why it matters", "Owner"]}
          rows={[
            [
              "Opening and closing",
              "Security, equipment, cash, cleanliness, readiness",
              "Shift lead",
            ],
            [
              "Receiving and storage",
              "Quality, quantity, temperature, FIFO, supplier disputes",
              "Kitchen lead",
            ],
            [
              "Food preparation and cooking",
              "Consistency, yield, food safety, portion control",
              "Head chef",
            ],
            [
              "Allergen and dietary handling",
              "Guest safety, legal exposure, trust",
              "FOH and kitchen leads",
            ],
            [
              "Service sequence",
              "Welcome, order, delivery, check-back, payment, farewell",
              "FOH manager",
            ],
            [
              "Cash and payment handling",
              "Floats, voids, comps, refunds, deposits, reconciliation",
              "Owner or cashier",
            ],
            [
              "Cleaning and pest control",
              "Hygiene, inspections, prevention",
              "Steward or duty manager",
            ],
            [
              "Maintenance and equipment",
              "Preventive service, breakdown response, spare parts",
              "Manager",
            ],
            [
              "Incident and complaint handling",
              "Guest injury, illness, conflict, negative review, emergency",
              "Manager",
            ],
            [
              "Reservations and no-shows",
              "Capacity, deposits, waitlist, large parties",
              "Host",
            ],
          ]}
        />

        <ArticleSubhead>The daily rhythm</ArticleSubhead>

        <p>
          A restaurant day has a predictable rhythm: setup, pre-service
          briefing, service, reset, cash-up, and close. The best operators
          protect the briefing. Ten minutes before service to review the menu,
          the specials, the reservations, the allergens, the staffing, and the
          previous night’s issues prevents a dozen small failures later.
        </p>

        <DataTable
          caption="A daily operating cadence"
          head={["Time", "Activity", "Output"]}
          rows={[
            [
              "Before opening",
              "Walk the room, check cleanliness, equipment, washrooms, signage",
              "Opening checklist signed",
            ],
            [
              "Pre-service",
              "Briefing: menu, specials, allergens, reservations, staffing, targets",
              "Team aligned; questions answered",
            ],
            [
              "Service",
              "Expedite, check tables, manage waits, monitor quality",
              "Guest issues caught early",
            ],
            [
              "Post-service",
              "Debrief: what worked, what failed, guest feedback, stock-outs",
              "Three fixes for tomorrow",
            ],
            [
              "Close",
              "Cash-up, reconciliation, cleaning, security, equipment shutdown",
              "Closing checklist signed; deposit secured",
            ],
            [
              "Weekly",
              "Inventory, scheduling, supplier review, sales review, maintenance",
              "Purchasing plan and rota",
            ],
            [
              "Monthly",
              "Profit and loss review, stock count, training refresh, safety audit, review analysis",
              "Management actions with owners",
            ],
          ]}
        />

        <ArticleSubhead>Food safety is a daily habit</ArticleSubhead>

        <p>
          Food safety is not a certificate on the wall. It is a set of habits:
          washing hands, keeping raw and cooked food separate, checking
          temperatures, cooling food quickly, reheating thoroughly, labelling
          and dating, cleaning as you go, and keeping pests out. The details
          depend on your menu, but the principles do not.
        </p>

        <Checklist
          items={[
            "Temperature logs for chillers, freezers, and hot holding.",
            "Date labels on all prepared food; FIFO rotation.",
            "Separate boards, knives, and surfaces for raw and ready-to-eat food.",
            "Cooling and reheating procedures written and trained.",
            "Cleaning schedule with named owner and sign-off.",
            "Pest-control log and proofing checks.",
            "Staff illness reporting and exclusion policy.",
            "Water filtration and ice-machine cleaning schedule.",
            "Supplier temperature checks at receiving.",
            "Incident log for illness complaints and foreign-object reports.",
          ]}
        />

        <ArticleSubhead>Allergens deserve their own protocol</ArticleSubhead>

        <p>
          A guest with a severe allergy is trusting you with their life. The
          protocol must be simple enough to follow at peak and strict enough to
          prevent cross-contact. Keep an allergen matrix for every menu item.
          Ask the guest, confirm with the kitchen, use clean equipment, and
          deliver the plate yourself or with a clear verbal confirmation. If you
          cannot guarantee the dish is safe, say so. An honest refusal is better
          than a preventable reaction.
        </p>

        <Callout variant="warning" title="Never guess an allergen answer">
          <p>
            “I think it’s fine” is not an allergen answer. If the kitchen cannot
            confirm the ingredients and the preparation method, the answer is
            “We cannot guarantee this dish is free from that allergen.” Train
            every server to escalate rather than improvise.
          </p>
        </Callout>

        <ArticleSubhead>Cash controls and inventory</ArticleSubhead>

        <p>
          Cash is the easiest thing to lose and the hardest thing to prove. Use
          a float, count it at the start and end of every shift, and have two
          people verify the deposit. Require manager approval for voids, comps,
          discounts, and refunds. Reconcile POS sales against cash, card, and
          wallet settlements daily. If the numbers do not match, investigate the
          same day, not at the end of the month.
        </p>

        <p>
          Inventory control starts with par levels: the minimum stock you need to
          get through a service or a week without running out. Set par levels
          from sales history, shelf life, and supplier lead time. Count
          high-value items weekly and full inventory monthly. Compare what you
          bought, what you sold, and what is left. The gap is waste, theft,
          over-portioning, or a recording error. All four are manageable once
          you can see them.
        </p>

        <DataTable
          caption="A simple operating dashboard"
          head={["Metric", "Frequency", "What it tells you"]}
          rows={[
            ["Covers and average spend", "Daily", "Demand and guest value"],
            ["Food and beverage cost", "Weekly", "Margin pressure and waste"],
            ["Labour cost percentage", "Weekly", "Scheduling efficiency"],
            ["Prime cost", "Weekly", "Food plus labour as a share of revenue"],
            ["Comps, voids, discounts", "Daily", "Control failures or service recovery"],
            ["Stock variance", "Monthly", "Theft, waste, portioning, recording"],
            ["Review rating and themes", "Weekly", "Guest satisfaction and reputation"],
            ["Repeat guest rate", "Monthly", "Whether the experience is worth returning for"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="technology"
        number="11"
        title="Technology, payments, and data"
      >
        <p>
          Technology should remove friction, not add it. A restaurant needs a
          reliable way to take orders, collect payments, track stock, pay staff,
          file taxes, and understand what is selling. Everything else is
          optional until the basics are stable. The most common mistake is
          buying a suite of tools before the team can use the first one
          properly.
        </p>

        <ArticleSubhead>The POS is the operating backbone</ArticleSubhead>

        <p>
          A point-of-sale system is not a cash register with a screen. It is the
          record of what was ordered, what was served, what was paid, and what
          was discounted. Choose a system that works offline, supports the way
          your tables and kitchen are organised, and produces reports you will
          actually read. If the internet fails during dinner service, the
          restaurant still has to function.
        </p>

        <Checklist
          items={[
            "Table map, server assignment, and split bills.",
            "Kitchen order tickets or a kitchen display screen.",
            "Offline mode with automatic sync when the connection returns.",
            "Discounts, comps, voids, and refunds with permission controls.",
            "Cash, card, QR, and wallet reconciliation.",
            "Tips handling and staff reporting.",
            "Inventory or recipe-level depletion, if the menu is complex.",
            "Sales, tax, and product-mix reports.",
            "Export to accounting software or a clean CSV.",
            "Local support and a clear data-ownership policy.",
          ]}
        />

        <ArticleSubhead>Payments: convenience has a cost</ArticleSubhead>

        <p>
          Nepal’s payment landscape is increasingly digital, but cash remains
          important. Accept the methods your guests actually use: cash, cards,
          and QR or wallet payments. Each method has a fee, a settlement time,
          and a reconciliation process. A 2% payment fee on a 10% net margin is
          a 20% reduction in profit on that transaction. Know the cost before
          you advertise the convenience.
        </p>

        <p>
          Reconcile daily. Match the POS total to the card settlement, the wallet
          settlement, and the cash count. Investigate shortages immediately.
          Keep refund and chargeback records. If you add tips, decide how they
          are collected, taxed, and distributed, and put the policy in writing.
        </p>

        <ArticleSubhead>Accounting and tax systems</ArticleSubhead>

        <p>
          A restaurant generates a lot of small transactions. Without a
          bookkeeping rhythm, the VAT return becomes a monthly crisis. Use an
          accounting system that can handle sales summaries, purchase invoices,
          payroll, and VAT reports. Keep the source documents: bills, invoices,
          receipts, bank statements, and payroll records. If your turnover
          requires electronic billing or central billing monitoring, confirm the
          current rules with the IRD and your accountant.
        </p>

        <p>
          Separate business and personal money from day one. A single bank
          account for the business, a clear owner’s draw policy, and a monthly
          close will save you more time than any restaurant app. The goal is not
          to be an accountant. The goal is to know, within a few days of the
          month ending, whether you made money.
        </p>

        <ArticleSubhead>Reservations and guest data</ArticleSubhead>

        <p>
          For a full-service restaurant, reservations are a revenue-management
          tool. A simple system — phone, WhatsApp, and a booking sheet — can work
          at small scale, but it breaks when volume grows. A booking tool should
          capture the guest’s name, contact, party size, time, occasion,
          allergies, and notes. It should also let you manage a waitlist, block
          tables, and send confirmations.
        </p>

        <p>
          Use deposits or minimum spends for large parties, special occasions,
          and peak dates. State the policy clearly when the booking is made. A
          no-show policy is only useful if it is enforced consistently and
          communicated kindly. Protect guest data: collect only what you need,
          restrict access, and do not share contact lists without consent.
        </p>

        <ArticleSubhead>Marketing technology should be simple</ArticleSubhead>

        <p>
          You need a Google Business Profile, a website with your menu, hours,
          location, and reservation link, and a way to measure where bookings
          come from. Add analytics, UTM links, and a review-management routine.
          You do not need a dozen social tools before you have a consistent
          posting habit.
        </p>

        <DataTable
          caption="A sensible technology stack by stage"
          head={["Stage", "Must have", "Add when ready"]}
          rows={[
            [
              "Pre-opening",
              "POS, accounting, business bank account, reservation sheet",
              "Website and Google Business Profile",
            ],
            [
              "First 90 days",
              "Payment reconciliation, payroll, inventory spreadsheet",
              "Booking tool, review management",
            ],
            [
              "Stabilisation",
              "Recipe costing, labour scheduling, monthly reporting",
              "CRM, loyalty, delivery integration",
            ],
            [
              "Growth",
              "Multi-outlet reporting, central purchasing, stock control",
              "Business intelligence, forecasting, HR systems",
            ],
          ]}
        />

        <Callout variant="tip" title="Do not buy software you cannot operate">
          <p>
            A tool is only useful if someone owns it, updates it, and uses the
            output. Before buying, ask: Who will set it up? Who will train the
            team? Who will check the report? What decision will it change? If
            the answer is “nobody” or “none”, wait.
          </p>
        </Callout>

        <ArticleSubhead>Security and continuity</ArticleSubhead>

        <p>
          Protect the business from the boring disasters: a lost laptop, a
          shared password, a corrupted spreadsheet, a power cut during service.
          Use two-factor authentication, unique passwords, role-based access,
          and automatic backups. Keep a printed emergency contact list and a
          manual backup procedure for the POS. Test the generator and the
          internet failover before you need them.
        </p>

        <Checklist
          items={[
            "Business bank account separate from personal accounts.",
            "POS with offline mode and daily reconciliation.",
            "Accounting system with VAT-ready reports.",
            "Payroll and SSF records with restricted access.",
            "Google Business Profile verified and up to date.",
            "Website menu, hours, location, and booking link accurate.",
            "Analytics and UTM tracking on campaigns.",
            "Automatic backups for POS, accounting, and guest data.",
            "Two-factor authentication on email and financial accounts.",
            "Written data-retention and access policy.",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="marketing"
        number="12"
        title="Marketing, launch, and filling the room"
      >
        <p>
          Marketing does not start on opening night. It starts when you choose
          the concept and the location, because those decisions determine who
          you can reach and what you can promise. By the time the sign goes up,
          the most important marketing asset is already fixed: whether the
          restaurant is the right restaurant for the people nearby.
        </p>

        <ArticleSubhead>Build the assets before the opening</ArticleSubhead>

        <p>
          You need a name, a logo, a colour and type system, a menu design, a
          sign, a website, and a set of photographs that look like the actual
          restaurant. Do not use stock images of food you do not serve. Do not
          photograph a dish that the kitchen cannot reproduce on a busy night.
          The gap between the marketing image and the guest experience is where
          trust is lost.
        </p>

        <Checklist
          items={[
            "A name that is easy to say, spell, and search.",
            "A domain and social handles that match the name.",
            "A logo and visual system that work on a sign, a menu, and a phone screen.",
            "A website with menu, hours, location, contact, and reservation link.",
            "A Google Business Profile with the correct category, address, and hours.",
            "Professional photographs of the room, the team, and the food.",
            "A menu that is accurate, priced, and easy to read.",
            "A launch list of past guests, friends, suppliers, and local partners.",
          ]}
        />

        <ArticleSubhead>Google is the new front door</ArticleSubhead>

        <p>
          For many guests, the first visit happens on a phone. They search for a
          restaurant near them, look at the photos, check the rating, read a few
          reviews, and decide whether to call. Your Google Business Profile is
          often more important than your website for discovery. Claim it, verify
          it, choose the most accurate category, add hours and attributes, and
          post real photos regularly.
        </p>

        <p>
          Keep your name, address, and phone number consistent everywhere: the
          website, Google, Facebook, Instagram, delivery platforms, and print.
          Inconsistent hours or a wrong pin on the map are silent revenue leaks.
          If you move or change hours, update every listing the same day.
        </p>

        <ArticleSubhead>Social media is a habit, not a campaign</ArticleSubhead>

        <p>
          Choose one or two platforms and post consistently. In Nepal, Facebook
          and Instagram are the default for discovery and community, with
          short-form video increasingly important. Do not try to be everywhere.
          A restaurant that posts three useful, real things a week will outperform
          one that posts a polished campaign once a quarter.
        </p>

        <DataTable
          caption="Five content pillars that do not require a marketing agency"
          head={["Pillar", "What to show", "Why it works"]}
          rows={[
            [
              "People",
              "The team, their roles, their pride, their stories",
              "Guests connect with people, not logos",
            ],
            [
              "Process",
              "Preparation, sourcing, the pass, the morning setup",
              "Shows craft and builds trust in quality",
            ],
            [
              "Place",
              "The room, the light, the street, the view, the details",
              "Sells the experience before the guest arrives",
            ],
            [
              "Plate",
              "Real food, real portions, real light",
              "Sets expectations the kitchen can meet",
            ],
            [
              "Proof",
              "Guest reviews, repeat visits, events, press",
              "Reduces the risk of trying somewhere new",
            ],
          ]}
        />

        <ArticleSubhead>Launch in layers</ArticleSubhead>

        <p>
          A launch is not one party. It is a sequence. Start with a private
          friends-and-family service to test the room. Follow with a soft opening
          for real guests at a limited capacity. Then open fully, with a
          marketing push that matches your capacity. If you fill the room before
          the kitchen is ready, you create a queue, a bad first impression, and a
          review you cannot delete.
        </p>

        <DataTable
          caption="A 90-day marketing calendar"
          head={["Window", "Focus", "Key actions"]}
          rows={[
            [
              "T-8 to T-6 weeks",
              "Foundation",
              "Name, website, Google profile, photography, menu copy, launch list",
            ],
            [
              "T-4 weeks",
              "Anticipation",
              "Teaser posts, local partner outreach, press notes, reservation opening",
            ],
            [
              "T-2 weeks",
              "Test",
              "Friends-and-family service, staff training, feedback, fix list",
            ],
            [
              "Opening week",
              "Welcome",
              "Soft opening, real guests, daily debrief, review requests",
            ],
            [
              "Weeks 2–4",
              "Rhythm",
              "Consistent posting, Google photos, review responses, local partnerships",
            ],
            [
              "Weeks 5–8",
              "Optimisation",
              "Menu mix review, paid test, event programming, referral offer",
            ],
            [
              "Weeks 9–12",
              "Retention",
              "Guest database, repeat visit offer, loyalty pilot, next-quarter plan",
            ],
          ]}
        />

        <ArticleSubhead>Partnerships beat advertising at the start</ArticleSubhead>

        <p>
          The cheapest customers are the ones someone else already trusts. Hotels
          can recommend you to guests. Tour operators can build you into an
          itinerary. Offices can book lunch or team dinners. Coworking spaces,
          gyms, schools, and event planners can introduce you to groups. A
          partnership works when it is specific: a set menu, a preferred rate, a
          dedicated contact, and a clear benefit for both sides.
        </p>

        <p>
          Treat delivery platforms as a channel, not a strategy. They can fill
          gaps and introduce new guests, but they also take a commission, own the
          customer relationship, and compress your margin. If you use them,
          design a delivery menu with packaging, travel, and portion in mind.
          Track whether delivery guests ever become direct guests.
        </p>

        <ArticleSubhead>Reviews are an operating metric</ArticleSubhead>

        <p>
          Ask for reviews at the right moment: after a good meal, when the guest
          is saying goodbye, or in a follow-up message the next day. Make it
          easy with a QR code or a direct link. Respond to every review, positive
          or negative, within a day or two. Thank the guest, address the specific
          issue, and take the conversation offline if it needs a resolution.
        </p>

        <p>
          Never buy fake reviews. They are easy to detect, they damage trust, and
          they can violate platform policies. A smaller number of honest reviews
          is worth more than a large number of hollow ones. The same applies to
          influencers: disclose the invitation, do not script the review, and
          choose people whose audience actually matches your guest.
        </p>

        <ArticleSubhead>Measure what matters</ArticleSubhead>

        <p>
          Marketing metrics should connect to revenue, not vanity. Track covers,
          average spend, direct versus platform bookings, review rating, repeat
          rate, cost per acquisition, and the source of each reservation. A post
          with a thousand likes and no bookings is entertainment. A partnership
          that fills ten covers a week is marketing.
        </p>

        <FinanceGrid
          items={[
            {
              label: "Marketing budget",
              value: "3–6%",
              note: "Of projected revenue in the first year",
            },
            {
              label: "Launch window",
              value: "8–12 weeks",
              note: "Before opening, not after",
            },
            {
              label: "Review response",
              value: "Within 48h",
              note: "For every review, positive or negative",
            },
            {
              label: "Repeat guest target",
              value: "30%+",
              note: "A useful early indicator of retention",
            },
          ]}
        />

        <Callout variant="tip" title="Do not discount your way to relevance">
          <p>
            Constant discounting teaches guests to wait for the next offer and
            erodes the perceived value of the experience. Use set menus,
            off-peak programming, events, and partnerships to fill specific
            gaps. If the only reason to visit is the discount, the concept is not
            working.
          </p>
        </Callout>

        <p>
          If you are building a private-chef or small-format dining business
          rather than a traditional restaurant, the marketing model is different
          but the principle is the same: show the real experience, build trust
          through repetition, and make it easy for the right guest to book. The{" "}
          <Link href="/private-chef-kathmandu" className="article-inline-link">
            private chef service in Kathmandu
          </Link>{" "}
          is a useful example of a lower-overhead format where reputation and
          referrals carry more weight than paid reach.
        </p>
      </ArticleSection>
    </>
  );
}
