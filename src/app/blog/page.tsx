import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | Cannabis Email Lists",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <section className="bg-white pt-[88px] md:pt-[96px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 px-5 py-12 md:px-10 md:py-16">
            <div data-hero className="max-w-[617px] text-center">
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
            <div data-hero>
              <ArrowButton href="/contact" accent="blue">
                Request Counts Now
              </ArrowButton>
            </div>

            <div data-reveal className="mt-8 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {posts.map((post) => (
                <article key={post.slug} data-reveal-child className="flex flex-col gap-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </Link>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green">
                    {post.category} · {post.date}
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
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
