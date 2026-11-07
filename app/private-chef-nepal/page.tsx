import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { LocationPage } from "@/components/location-page";

export const metadata = buildMetadata({
  title: "Private Chef in Nepal | Destination Dining by Chef Mani Bista",
  description:
    "Chef Mani Bista travels across Nepal for private dining, chef's table experiences, and destination celebrations. Kathmandu, Pokhara, Chitwan, Nagarkot, and beyond.",
  path: "/private-chef-nepal",
});

const faqs = [
  {
    question: "Do you travel outside Kathmandu?",
    answer:
      "Yes. Chef Mani cooks across Nepal by arrangement — from Pokhara and Chitwan to Nagarkot, Bandipur, and private retreats in the hills.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "At least three to four weeks for travel outside Kathmandu, and more for larger events. This allows time for the menu, travel, and logistics.",
  },
  {
    question: "Are travel and accommodation included?",
    answer:
      "Travel and accommodation are quoted separately and agreed in advance. The chef will include them in the proposal so there are no surprises.",
  },
  {
    question: "Can you cook in a remote location?",
    answer:
      "It depends on the kitchen, access, and the number of guests. Share the details of the venue and the chef will advise on what is possible.",
  },
  {
    question: "How do I book a private chef in Nepal?",
    answer:
      "Send a request through the reservation page or WhatsApp with your date, guest count, location, and any dietary needs. The chef will confirm availability and next steps personally.",
  },
];

export default function PrivateChefNepalPage() {
  return (
    <LocationPage
      path="/private-chef-nepal"
      breadcrumbName="Nepal"
      eyebrow="Nepal"
      title={
        <>
          Private dining
          <br />
          <span className="display-italic gold-text">across Nepal.</span>
        </>
      }
      description="From Kathmandu to Pokhara, Chitwan, Nagarkot, and beyond — Chef Mani Bista travels for private tables, celebrations, and destination dining."
      meta={["Destination dining", "Private celebrations", "By arrangement", "Nepal"]}
      introEyebrow="The table travels"
      introTitle={
        <>
          The table
          <br />
          <span className="display-italic gold-text">travels.</span>
        </>
      }
      introCopy={[
        "Nepal is a country of landscapes and hospitality. Chef Mani brings the same care to a rooftop dinner in Kathmandu, a family gathering in Pokhara, or a retreat in the hills.",
        "Destination dining is planned around the place, the season, and the people. Travel and logistics are arranged in advance, so the evening can unfold without friction.",
      ]}
      image={images.himalaya}
      imageCaption="The Himalaya · Nepal"
      areasTitle={
        <>
          From the valley
          <br />
          <span className="display-italic gold-text">to the hills.</span>
        </>
      }
      areas={[
        {
          name: "Kathmandu Valley",
          copy: "The home base — chef's tables, private dinners, and celebrations across the valley.",
        },
        {
          name: "Pokhara",
          copy: "Lakeside dinners, family gatherings, and private tables with a mountain view.",
        },
        {
          name: "Chitwan",
          copy: "Destination dining for retreats, lodges, and celebrations in the Terai.",
        },
        {
          name: "Nagarkot & the hills",
          copy: "Sunrise views, quiet villas, and intimate dinners above the valley.",
        },
        {
          name: "Bandipur & beyond",
          copy: "Heritage towns and hidden escapes, planned around the venue and the season.",
        },
        {
          name: "Elsewhere by arrangement",
          copy: "If the table matters, the chef will travel. Share the location and the idea.",
        },
      ]}
      experiences={[
        "Destination chef's table",
        "Private celebrations",
        "Retreat & villa dining",
        "Cooking sessions",
      ]}
      faqs={faqs}
      schemaName="Private Chef in Nepal"
      schemaDescription="Destination private chef services across Nepal by Chef Mani Bista, including chef's table dinners, private celebrations, and cooking sessions."
      areaServed={["Nepal"]}
      ctaTitle={
        <>
          A table
          <br />
          <span className="display-italic gold-text">anywhere in Nepal.</span>
        </>
      }
      ctaCopy="Tell us where you are, who is coming, and what you have in mind. The chef will confirm availability and plan the journey with you."
    />
  );
}
