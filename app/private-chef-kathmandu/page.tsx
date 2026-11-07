import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { LocationPage } from "@/components/location-page";

export const metadata = buildMetadata({
  title: "Private Chef in Kathmandu | Chef Mani Bista",
  description:
    "Book Chef Mani Bista, a private chef in Kathmandu, for in-home dining, chef's table experiences, and cooking sessions. Seasonal menus designed around your table.",
  path: "/private-chef-kathmandu",
});

const faqs = [
  {
    question: "Do you cook in my home?",
    answer:
      "Yes. Chef Mani brings the ingredients, equipment, and service to your home, villa, or private venue. The kitchen is set up on site, and the evening is designed to feel effortless for you.",
  },
  {
    question: "Which areas of Kathmandu do you cover?",
    answer:
      "Kathmandu city, Patan and Lalitpur, Bhaktapur, Boudha, Budhanilkantha, and nearby areas. Travel outside the valley can be arranged.",
  },
  {
    question: "How many guests can you serve?",
    answer:
      "From an intimate table of four to a private celebration of up to forty guests, depending on the format and the venue.",
  },
  {
    question: "Can you handle dietary needs and allergies?",
    answer:
      "Yes. Vegetarian, vegan, gluten-free, and allergy-aware menus are available with advance notice. Please share any requirements when you enquire.",
  },
  {
    question: "How do I book a private chef in Kathmandu?",
    answer:
      "Send a request through the reservation page or WhatsApp with your date, guest count, location, and any dietary needs. The chef will confirm availability personally.",
  },
];

export default function PrivateChefKathmanduPage() {
  return (
    <LocationPage
      path="/private-chef-kathmandu"
      breadcrumbName="Kathmandu"
      eyebrow="Kathmandu"
      title={
        <>
          A private chef
          <br />
          <span className="display-italic gold-text">in Kathmandu.</span>
        </>
      }
      description="Chef Mani Bista brings the restaurant to your home, villa, or private venue — with a menu designed around the season, your guests, and the occasion."
      meta={["In-home dining", "Chef's table", "Cooking sessions", "Kathmandu Valley"]}
      introEyebrow="The city"
      introTitle={
        <>
          Dinner, without
          <br />
          <span className="display-italic gold-text">the restaurant.</span>
        </>
      }
      introCopy={[
        "Kathmandu is a city of courtyards, rooftops, and long conversations over food. Chef Mani cooks in that spirit: intimate, generous, and rooted in the ingredients of Nepal.",
        "From a chef's table in Patan to a family celebration in Budhanilkantha, every evening is designed around the people in the room.",
      ]}
      image={images.overlook}
      imageCaption="Kathmandu Valley · Nepal"
      areasTitle={
        <>
          Across
          <br />
          <span className="display-italic gold-text">the valley.</span>
        </>
      }
      areas={[
        {
          name: "Patan & Lalitpur",
          copy: "Courtyard dinners, rooftop tables, and intimate celebrations in the city's historic heart.",
        },
        {
          name: "Bhaktapur",
          copy: "Private dining in the old city, with its brick lanes, temples, and slower rhythm.",
        },
        {
          name: "Boudha & Budhanilkantha",
          copy: "Quiet residential evenings and family gatherings in the northern valley.",
        },
        {
          name: "Kathmandu city",
          copy: "In-home chef's tables, celebrations, and cooking sessions across the capital.",
        },
        {
          name: "Beyond the valley",
          copy: "Destination dining in the hills and nearby escapes, arranged in advance.",
        },
      ]}
      experiences={[
        "The chef's table",
        "Private dining & celebrations",
        "Cooking sessions",
        "Menu design & dietary planning",
      ]}
      faqs={faqs}
      schemaName="Private Chef in Kathmandu"
      schemaDescription="Private chef services in Kathmandu, Nepal, including chef's table dinners, private dining, and cooking sessions by Chef Mani Bista."
      areaServed={["Kathmandu", "Nepal"]}
      ctaTitle={
        <>
          Your table
          <br />
          <span className="display-italic gold-text">in Kathmandu.</span>
        </>
      }
      ctaCopy="Tell us the date, the guests, and the occasion. The chef will confirm availability and design a menu around your evening."
    />
  );
}
