export const images = {
  himalaya: {
    src: "/images/chef-mani-bista-himalaya.jpg",
    width: 864,
    height: 1184,
    alt: "Chef Mani Bista seated before the snow-capped Himalayan mountains near Kathmandu",
  },
  temple: {
    src: "/images/chef-mani-bista-kathmandu-temple.jpg",
    width: 1800,
    height: 1782,
    alt: "Chef Mani Bista in front of a traditional Newari temple in Kathmandu",
  },
  portrait: {
    src: "/images/chef-mani-bista-portrait.jpg",
    width: 1023,
    height: 1030,
    alt: "Portrait of Chef Mani Bista, private chef in Kathmandu",
  },
  overlook: {
    src: "/images/chef-mani-bista-kathmandu-overlook.jpg",
    width: 1800,
    height: 1348,
    alt: "Chef Mani Bista overlooking the Kathmandu Valley",
  },
  modern: {
    src: "/images/chef-mani-bista-modern-kathmandu.jpg",
    width: 1400,
    height: 1869,
    alt: "Chef Mani Bista in modern Kathmandu",
  },
  atWork: {
    src: "/images/chef-mani-bista-at-work.jpg",
    width: 1400,
    height: 1869,
    alt: "Chef Mani Bista at work in a Kathmandu café",
  },
  chapterCity: {
    src: "/images/chef-mani-bista-chapter-city.jpg",
    width: 678,
    height: 1143,
    alt: "Editorial portrait of Chef Mani Bista against city lights",
  },
  chapterMountain: {
    src: "/images/chef-mani-bista-chapter-mountain.jpg",
    width: 678,
    height: 1143,
    alt: "Editorial portrait of Chef Mani Bista at dusk in the mountains",
  },
  chapterCandlelight: {
    src: "/images/chef-mani-bista-chapter-candlelight.jpg",
    width: 678,
    height: 1143,
    alt: "Editorial portrait of Chef Mani Bista in warm candlelight",
  },
  plateOne: {
    src: "/images/chef-mani-bista-signature-plate-01.jpg",
    width: 1600,
    height: 1402,
    alt: "A signature plate by Chef Mani Bista, photographed in Kathmandu",
  },
  plateTwo: {
    src: "/images/chef-mani-bista-signature-plate-02.jpg",
    width: 1400,
    height: 930,
    alt: "A seasonal signature plate by Chef Mani Bista",
  },
  plateThree: {
    src: "/images/chef-mani-bista-signature-plate-03.jpg",
    width: 1080,
    height: 785,
    alt: "A composed signature plate by Chef Mani Bista",
  },
  plateFour: {
    src: "/images/chef-mani-bista-signature-plate-04.jpg",
    width: 800,
    height: 700,
    alt: "A signature plate by Chef Mani Bista, finished with seasonal ingredients",
  },
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
