import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const posts = [
  {
    slug: "best-cannabis-email-marketing-strategies-2026",
    title: "Best Cannabis Email Marketing Strategies for 2026",
    excerpt:
      "Email marketing remains one of the highest-performing digital channels for cannabis businesses.",
  },
  {
    slug: "building-quality-cannabis-email-list",
    title: "Building a Quality Cannabis Email List",
    excerpt:
      "Growing a high-quality cannabis email list should always prioritize consent and relevance.",
  },
  {
    slug: "segment-your-cannabis-audience",
    title: "Segment Your Cannabis Audience",
    excerpt:
      "Segmenting your email list allows you to deliver more personalized campaigns based on preferences and behavior.",
  },
  {
    slug: "create-valuable-cannabis-content",
    title: "Create Valuable Cannabis Content",
    excerpt:
      "Successful cannabis email marketing is about more than promotions — education drives engagement.",
  },
  {
    slug: "monitor-campaign-performance",
    title: "Monitor Campaign Performance",
    excerpt:
      "Track open rate, click-through rate, conversion rate, and subscriber growth to improve results.",
  },
  {
    slug: "why-cannabis-email-marketing-matters",
    title: "Why Cannabis Email Marketing Matters",
    excerpt:
      "Brands that build strong customer relationships often outperform those relying solely on paid ads.",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Header overDark={false} />
      <section className="bg-white pt-[88px] md:pt-[96px]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 px-5 py-12 md:px-10 md:py-16">
          <div className="max-w-[617px] text-center">
            <h1 className="mb-6 flex flex-wrap items-center justify-center gap-x-3 text-[40px] md:text-[48px]">
              <span className="font-light">Our</span>
              <span className="font-serif-accent text-green">Consumer</span>
              <span className="font-light">Stories</span>
            </h1>
            <p className="mx-auto max-w-[403px] text-base leading-6 text-foreground">
              Explore how our partners are deepening connections and engagement with their
              communities.
            </p>
          </div>
          <ArrowButton href="/contact" accent="blue">
            Request Counts Now
          </ArrowButton>

          <div className="mt-8 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col gap-4 border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green">
                  Cannabis Marketing
                </p>
                <h2 className="text-xl font-semibold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-green">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed text-foreground/80">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-blue hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
