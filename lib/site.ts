const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteConfig = {
  name: "Chef Mani Bista",
  shortName: "Mani Bista",
  url: configuredUrl || "https://manibista.vercel.app",
  description:
    "The culinary world of Chef Mani Bista — a Kathmandu-based private chef blending Nepali soul with global technique. Private dining, chef's table experiences, and cooking sessions across Nepal and India.",
  email: "chefbista@gmail.com",
  phone: "+9779851150987",
  phoneDisplay: "+977 9851150987",
  whatsapp: "https://wa.me/9779851150987",
  whatsappMessage:
    "Hello Chef Mani, I'd like to ask about a private dining experience.",
  address: {
    locality: "Kathmandu",
    region: "Bagmati",
    postalCode: "44600",
    country: "NP",
    countryName: "Nepal",
  },
  serviceAreas: ["Kathmandu", "Nepal", "India"],
  socials: {
    facebook: "https://www.facebook.com/chefbista.mani",
    instagram: "https://www.instagram.com/manibista/",
    linkedin: "https://np.linkedin.com/in/mani-bista",
    wordpress: "https://chefbista.wordpress.com/",
  },
} as const;

export const navigation = [
  { label: "Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Experiences", href: "/experiences" },
  { label: "Reserve", href: "/reserve" },
] as const;

export const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "The Story", href: "/story" },
      { label: "The Menu", href: "/menu" },
      { label: "Experiences", href: "/experiences" },
      { label: "Reserve", href: "/reserve" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Private Chef in Kathmandu", href: "/private-chef-kathmandu" },
      { label: "Private Chef in Nepal", href: "/private-chef-nepal" },
      { label: "Private Chef in India", href: "/private-chef-india" },
    ],
  },
] as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`;
}
