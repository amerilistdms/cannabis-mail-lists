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
          <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-5 py-12 md:px-10 md:py-16">
            <div data-hero className="mb-10 flex max-w-[617px] flex-col items-center gap-6 text-center md:mb-14">
              <h1 className="flex flex-wrap items-baseline justify-center gap-x-3 text-[40px] leading-none md:text-[48px]">
                <span className="font-light">Our</span>
                <span className="font-serif-accent text-green">Consumer</span>
                <span className="font-light">Stories</span>
              </h1>
              <p className="max-w-[403px] text-base leading-6 text-foreground">
                Explore how our partners are deepening connections and engagement with their
                communities.
              </p>
              <ArrowButton href="/contact" accent="blue">
                Request Counts Now
              </ArrowButton>
            </div>

            <div data-reveal className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-reveal-child
                  className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-frost md:p-6">
                    <p className="text-xs tracking-[0.14em] uppercase opacity-90">{post.date}</p>
                    <h2 className="text-xl font-semibold leading-snug md:text-2xl">{post.title}</h2>
                    <p className="line-clamp-2 text-sm leading-relaxed text-frost/85">{post.excerpt}</p>
                  </div>
                </Link>
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
