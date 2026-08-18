import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BlogPostPage() {
  return (
    <main className="flex-1">
      <Header overDark={false} />
      <article className="bg-white pt-[88px] md:pt-[96px]">
        <div className="mx-auto w-full max-w-[720px] px-5 py-12 md:px-10 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-green">
            Cannabis Email Marketing
          </p>
          <h1 className="mb-6 text-3xl font-medium leading-tight md:text-4xl">
            Best Cannabis Email Marketing Strategies for 2026
          </h1>
          <p className="mb-10 text-base leading-7 text-foreground/85">
            Email marketing remains one of the highest-performing digital channels for cannabis
            businesses. Whether you&apos;re promoting a dispensary, CBD brand, cannabis accessories,
            or a B2B service, building an engaged email audience allows you to communicate directly
            with customers while reducing dependence on social media algorithms.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p className="leading-7 text-foreground/85">
              Unlike paid advertising platforms that often restrict cannabis promotions,
              permission-based email marketing gives brands greater control over customer
              relationships. The key is focusing on compliant list growth, valuable content, and
              consistent communication.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold">Why Cannabis Email Marketing Matters?</h2>
            <p className="leading-7 text-foreground/85">
              The cannabis industry continues to become more competitive each year. Brands that
              build strong customer relationships often outperform those relying solely on paid
              advertising.
            </p>
            <p className="leading-7 text-foreground/85">An effective email strategy can help you:</p>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-foreground/85">
              <li>Increase repeat purchases</li>
              <li>Announce new product launches</li>
              <li>Share educational cannabis content</li>
              <li>Promote dispensary events</li>
              <li>Build long-term customer loyalty</li>
            </ul>
          </section>

          <p className="mt-12">
            <Link href="/blog" className="text-blue hover:underline">
              ← Back to blog
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
