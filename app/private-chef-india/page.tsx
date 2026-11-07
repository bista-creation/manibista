import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { LocationPage } from "@/components/location-page";

export const metadata = buildMetadata({
  title: "Nepali Private Chef in India | Chef Mani Bista",
  description:
    "Chef Mani Bista travels to India for private dining, celebrations, and destination experiences. Nepali soul and global technique for private tables in Delhi, Mumbai, Bengaluru, Goa, and beyond.",
  path: "/private-chef-india",
});

const faqs = [
  {
    question: "Do you travel to India for private events?",
    answer:
      "Yes. Chef Mani travels to India by arrangement for private dinners, celebrations, and destination experiences. Travel and accommodation are quoted separately.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "Delhi NCR, Mumbai, Bengaluru, Goa, and other cities by arrangement. Share the venue and the occasion, and the chef will confirm what is possible.",
  },
  {
    question: "Do you need a local kitchen team?",
    answer:
      "For larger events, local support can be arranged. The chef will advise based on the venue, the guest count, and the format of the evening.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "At least four to six weeks for travel to India, and more for larger events or multi-day trips. This allows time for the menu, travel, and logistics.",
  },
  {
    question: "How do I book a private chef in India?",
    answer:
      "Send a request through the reservation page or WhatsApp with your date, guest count, city, and any dietary needs. The chef will confirm availability and next steps personally.",
  },
];

export default function PrivateChefIndiaPage() {
  return (
    <LocationPage
      path="/private-chef-india"
      breadcrumbName="India"
      eyebrow="India"
      title={
        <>
          A Nepali chef
          <br />
          <span className="display-italic gold-text">for private tables in India.</span>
        </>
      }
      description="Chef Mani Bista travels to India for private dining, celebrations, and destination experiences — bringing Nepali soul and global technique to your table."
      meta={["Destination dining", "Private events", "By arrangement", "India"]}
      introEyebrow="Across the border"
      introTitle={
        <>
          Across the border,
          <br />
          <span className="display-italic gold-text">around the table.</span>
        </>
      }
      introCopy={[
        "Chef Mani's cooking moves easily between Nepal and India — two places with deep culinary conversations. For private events, he brings a menu that respects the local market while staying unmistakably his.",
        "From Delhi to Mumbai, Bengaluru to Goa, each trip is planned around the occasion, the venue, and the people. The result is a table that feels personal, not imported.",
      ]}
      image={images.plateOne}
      imageCaption="A signature plate · Chef Mani Bista"
      areasTitle={
        <>
          Cities
          <br />
          <span className="display-italic gold-text">by arrangement.</span>
        </>
      }
      areas={[
        {
          name: "Delhi NCR",
          copy: "Private dinners, celebrations, and chef's table experiences in the capital region.",
        },
        {
          name: "Mumbai",
          copy: "Intimate tables and larger gatherings, planned around the venue and the season.",
        },
        {
          name: "Bengaluru",
          copy: "Private dining for homes, villas, and special occasions in the garden city.",
        },
        {
          name: "Goa",
          copy: "Destination dinners, villa celebrations, and long-table evenings by the coast.",
        },
        {
          name: "Other cities",
          copy: "If the occasion calls for it, the table can travel. Share the city and the idea.",
        },
        {
          name: "Destination events",
          copy: "Multi-day trips, retreats, and celebrations planned with local partners.",
        },
      ]}
      experiences={[
        "Private dinners",
        "Celebrations & weddings",
        "Destination chef's table",
        "Cooking sessions",
      ]}
      faqs={faqs}
      schemaName="Nepali Private Chef in India"
      schemaDescription="Chef Mani Bista travels to India for private dining, chef's table experiences, celebrations, and cooking sessions by arrangement."
      areaServed={["India"]}
      ctaTitle={
        <>
          Bring the table
          <br />
          <span className="display-italic gold-text">to India.</span>
        </>
      }
      ctaCopy="Tell us the city, the date, and the occasion. The chef will confirm availability and plan the journey with you."
    />
  );
}
