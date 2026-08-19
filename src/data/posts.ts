export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "best-cannabis-email-marketing-strategies-2026",
    category: "Cannabis Email Marketing",
    title: "Best Cannabis Email Marketing Strategies for 2026",
    image: "/images/blog/post-1.png",
    excerpt:
      "Email marketing remains one of the highest-performing digital channels for cannabis businesses. Whether you're promoting a dispensary, CBD brand, cannabis accessories, or a B2B service, building an engaged email audience allows you to communicate directly with customers while reducing dependence on social media algorithms.",
    content: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Unlike paid advertising platforms that often restrict cannabis promotions, permission-based email marketing gives brands greater control over customer relationships. The key is focusing on compliant list growth, valuable content, and consistent communication.",
      },
      {
        type: "heading",
        text: "Why Cannabis Email Marketing Matters?",
      },
      {
        type: "paragraph",
        text: "The cannabis industry continues to become more competitive each year. Brands that build strong customer relationships often outperform those relying solely on paid advertising.",
      },
      {
        type: "lead",
        text: "An effective email strategy can help you:",
      },
      {
        type: "list",
        items: [
          "Increase repeat purchases",
          "Announce new product launches",
          "Share educational cannabis content",
          "Promote dispensary events",
          "Build long-term customer loyalty",
        ],
      },
      {
        type: "heading",
        text: "Building a Quality Cannabis Email List",
      },
      {
        type: "paragraph",
        text: "Growing a high-quality cannabis email list should always prioritize consent and relevance. Rather than purchasing unverified contacts, businesses benefit from attracting subscribers who have actively expressed interest in their products or services.",
      },
      {
        type: "lead",
        text: "Common list-building methods include:",
      },
      {
        type: "list",
        items: [
          "Website newsletter signups",
          "Educational downloads",
          "Loyalty program registrations",
          "Event registrations",
          "In-store QR code signups",
        ],
      },
      {
        type: "callout",
        text: "Quality subscribers generally produce stronger engagement than larger but less relevant audiences.",
      },
      {
        type: "image",
        src: "/images/blog/article-mid.png",
        alt: "Hands typing on a laptop with data overlays",
      },
      {
        type: "heading",
        text: "Segment Your Audience",
      },
      {
        type: "paragraph",
        text: "Not every subscriber has the same interests.",
      },
      {
        type: "paragraph",
        text: "Segmenting your email list allows you to deliver more personalized campaigns based on customer preferences, purchasing behavior, or geographic location.",
      },
      {
        type: "lead",
        text: "Examples include:",
      },
      {
        type: "list",
        items: [
          "New subscribers",
          "Returning customers",
          "Medical cannabis consumers",
          "Recreational consumers",
          "CBD buyers",
        ],
      },
      {
        type: "heading",
        text: "Create Valuable Content",
      },
      {
        type: "paragraph",
        text: "Successful cannabis email marketing is about more than promotions.",
      },
      {
        type: "lead",
        text: "Include content such as:",
      },
      {
        type: "list",
        items: [
          "Product education",
          "Industry news",
          "Usage guides",
          "Staff recommendations",
          "Educational blog articles",
          "Community events",
        ],
      },
      {
        type: "callout",
        text: "Providing useful information encourages subscribers to stay engaged over time.",
      },
      {
        type: "image",
        src: "/images/blog/article-idea.png",
        alt: "Data, analysis, and idea neon graphic",
      },
      {
        type: "heading",
        text: "Monitor Campaign Performance",
      },
      {
        type: "lead",
        text: "Track key performance indicators such as:",
      },
      {
        type: "list",
        items: [
          "Open rate",
          "Click-through rate",
          "Conversion rate",
          "Unsubscribe rate",
          "Subscriber growth",
        ],
      },
      {
        type: "callout",
        text: "Regular analysis helps improve future campaigns and better understand audience interests.",
      },
    ],
  },
  {
    slug: "what-is-a-cannabis-consumer-database",
    category: "Cannabis Consumer Data",
    title: "What Is a Cannabis Consumer Database?",
    image: "/images/blog/post-2.png",
    excerpt:
      "Learn how cannabis consumer databases help brands identify qualified audiences, improve targeting, and create more effective marketing campaigns.",
    content: [
      {
        type: "paragraph",
        text: "Learn how cannabis consumer databases help brands identify qualified audiences, improve targeting, and create more effective marketing campaigns.",
      },
      {
        type: "paragraph",
        text: "A cannabis consumer database organizes verified contact and demographic attributes so marketers can segment by intent, location, and purchase behavior instead of guessing who might respond.",
      },
    ],
  },
  {
    slug: "how-cannabis-mailing-lists-help-grow-your-business",
    category: "Cannabis Mailing Lists",
    title: "How Cannabis Mailing Lists Help Grow Your Business?",
    image: "/images/blog/post-3.png",
    excerpt:
      "Discover how targeted cannabis mailing lists can support customer acquisition, increase campaign reach, and improve marketing performance.",
    content: [
      {
        type: "paragraph",
        text: "Discover how targeted cannabis mailing lists can support customer acquisition, increase campaign reach, and improve marketing performance.",
      },
      {
        type: "paragraph",
        text: "Postal and email lists built for cannabis audiences help brands reach verified consumers across channels while keeping acquisition costs predictable.",
      },
    ],
  },
  {
    slug: "using-cbd-buyer-lists-to-reach-the-right-audience",
    category: "CBD Marketing",
    title: "Using CBD Buyer Lists to Reach the Right Audience",
    image: "/images/blog/post-4.png",
    excerpt:
      "Explore how CBD buyer lists can help businesses connect with interested consumers and build more relevant, data-driven marketing campaigns.",
    content: [
      {
        type: "paragraph",
        text: "Explore how CBD buyer lists can help businesses connect with interested consumers and build more relevant, data-driven marketing campaigns.",
      },
      {
        type: "paragraph",
        text: "CBD buyer lists surface people already interested in wellness and hemp products, making outreach more relevant and more likely to convert.",
      },
    ],
  },
  {
    slug: "5-ways-to-improve-cannabis-customer-acquisition",
    category: "Cannabis Customer Acquisition",
    title: "5 Ways to Improve Cannabis Customer Acquisition",
    image: "/images/blog/post-5.png",
    excerpt:
      "From audience targeting to email marketing, learn practical strategies for attracting new customers and growing your cannabis business.",
    content: [
      {
        type: "paragraph",
        text: "From audience targeting to email marketing, learn practical strategies for attracting new customers and growing your cannabis business.",
      },
      {
        type: "paragraph",
        text: "Combine accurate list data, clear offers, multi-channel follow-up, and measured creative tests to improve acquisition without wasting spend.",
      },
    ],
  },
  {
    slug: "why-cannabis-marketing-data-matters",
    category: "Marketing Data",
    title: "Why Cannabis Marketing Data Matters?",
    image: "/images/blog/post-6.png",
    excerpt:
      "Understand how accurate cannabis marketing data helps businesses personalize campaigns, improve audience segmentation, and maximize marketing ROI.",
    content: [
      {
        type: "paragraph",
        text: "Understand how accurate cannabis marketing data helps businesses personalize campaigns, improve audience segmentation, and maximize marketing ROI.",
      },
      {
        type: "paragraph",
        text: "Clean, compliant cannabis marketing data is the foundation for segmentation, personalization, and measurable return on every campaign dollar.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
