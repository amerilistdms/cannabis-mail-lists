export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "best-cannabis-email-marketing-strategies-2026",
    title: "Best Cannabis Email Marketing Strategies for 2026",
    excerpt:
      "Email marketing remains one of the highest-performing digital channels for cannabis businesses.",
    category: "Cannabis Marketing",
    date: "Jan 12, 2026",
    image: "/images/figma/card-1.png",
    body: [
      "Email marketing remains one of the highest-performing digital channels for cannabis businesses. Whether you're promoting a dispensary, CBD brand, cannabis accessories, or a B2B service, building an engaged email audience allows you to communicate directly with customers while reducing dependence on social media algorithms.",
      "Unlike paid advertising platforms that often restrict cannabis promotions, permission-based email marketing gives brands greater control over customer relationships. The key is focusing on compliant list growth, valuable content, and consistent communication.",
      "Brands that build strong customer relationships often outperform those relying solely on paid advertising. An effective email strategy can help you increase repeat purchases, announce new product launches, share educational cannabis content, promote dispensary events, and build long-term customer loyalty.",
    ],
  },
  {
    slug: "building-quality-cannabis-email-list",
    title: "Building a Quality Cannabis Email List",
    excerpt:
      "Growing a high-quality cannabis email list should always prioritize consent and relevance.",
    category: "List Building",
    date: "Jan 28, 2026",
    image: "/images/figma/card-2.png",
    body: [
      "Growing a high-quality cannabis email list should always prioritize consent and relevance. Opt-in audiences convert better, complain less, and protect your sender reputation over time.",
      "Combine on-site capture, compliant lead partners, and clear preference centers so subscribers understand what they will receive and how often.",
      "Quality beats quantity: a smaller list of verified cannabis-interested consumers typically outperforms a large unverified database.",
    ],
  },
  {
    slug: "segment-your-cannabis-audience",
    title: "Segment Your Cannabis Audience",
    excerpt:
      "Segmenting your email list allows you to deliver more personalized campaigns based on preferences and behavior.",
    category: "Audience Targeting",
    date: "Feb 9, 2026",
    image: "/images/figma/card-3.png",
    body: [
      "Segmenting your email list allows you to deliver more personalized campaigns based on preferences and behavior.",
      "Useful cannabis segments include CBD buyers, medical patients, dispensary shoppers, geographic markets, and purchase frequency.",
      "Personalized offers and content by segment improve open rates, click-through rates, and overall campaign ROI.",
    ],
  },
  {
    slug: "create-valuable-cannabis-content",
    title: "Create Valuable Cannabis Content",
    excerpt:
      "Successful cannabis email marketing is about more than promotions — education drives engagement.",
    category: "Content",
    date: "Feb 21, 2026",
    image: "/images/figma/card-4.png",
    body: [
      "Successful cannabis email marketing is about more than promotions — education drives engagement.",
      "Share product education, compliance-friendly wellness tips, event invites, and behind-the-scenes brand stories.",
      "A healthy mix of value and offers keeps subscribers engaged without fatiguing your list.",
    ],
  },
  {
    slug: "monitor-campaign-performance",
    title: "Monitor Campaign Performance",
    excerpt:
      "Track open rate, click-through rate, conversion rate, and subscriber growth to improve results.",
    category: "Analytics",
    date: "Mar 4, 2026",
    image: "/images/figma/card-5.png",
    body: [
      "Track open rate, click-through rate, conversion rate, and subscriber growth to improve results.",
      "Review unsubscribes and spam complaints carefully — they signal list quality and content fit issues early.",
      "Use testing on subject lines, send times, and offers to continuously refine your cannabis email program.",
    ],
  },
  {
    slug: "why-cannabis-email-marketing-matters",
    title: "Why Cannabis Email Marketing Matters",
    excerpt:
      "Brands that build strong customer relationships often outperform those relying solely on paid ads.",
    category: "Strategy",
    date: "Mar 18, 2026",
    image: "/images/figma/card-6.png",
    body: [
      "Brands that build strong customer relationships often outperform those relying solely on paid ads.",
      "Owned channels like email give cannabis marketers resilience when ad platforms change policies or raise costs.",
      "Pairing verified cannabis audience data with thoughtful lifecycle messaging creates a durable acquisition and retention engine.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
