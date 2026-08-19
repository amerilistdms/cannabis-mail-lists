"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { posts } from "@/data/posts";

export function BlogIndex() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="bg-frost pt-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-12">
        <div data-hero className="mb-10 flex max-w-[720px] flex-col items-center gap-6 text-center md:mb-14 md:gap-[24px]">
          <h1 className="flex flex-wrap items-baseline justify-center gap-x-2.5 text-[40px] leading-none md:text-[60px] md:leading-[65px]">
            <span className="font-light text-foreground">Our</span>
            <span className="font-serif-accent text-[42px] leading-none tracking-[-0.02em] text-green md:text-[62px] md:leading-[69px]">
              Consumer
            </span>
            <span className="font-light text-foreground">Stories</span>
          </h1>
          <p className="max-w-[403px] text-base leading-6 text-foreground">
            Explore how our partners are deepening connections and engagement with their
            communities.
          </p>

          <label className="mt-2 flex w-full max-w-[495px] items-center justify-between gap-3 rounded-full border border-foreground py-[5px] pl-5 pr-[5px]">
            <span className="sr-only">Search Stories</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Stories"
              className="min-w-0 flex-1 bg-transparent text-sm tracking-[0.14px] text-foreground outline-none placeholder:text-foreground"
            />
            <span
              className="grid size-10 shrink-0 place-items-center rounded-full bg-blue"
              aria-hidden
            >
              <Image
                src="/images/blog/search-icon.svg"
                alt=""
                width={19}
                height={19}
                className="size-[18px]"
              />
            </span>
          </label>
        </div>

        <div
          data-reveal
          className="grid w-full grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
        >
          {filtered.map((post) => (
            <article key={post.slug} data-reveal-child className="flex flex-col gap-8">
              <Link
                href={`/blog/${post.slug}`}
                className="relative block h-[200px] w-full overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                  quality={90}
                />
              </Link>
              <div className="flex flex-col gap-4 text-left">
                <div className="flex flex-col gap-2">
                  <p className="font-serif text-base italic font-normal text-blue">
                    {post.category}
                  </p>
                  <h2 className="max-w-[291px] text-lg font-bold leading-snug text-foreground">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green">
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <p className="line-clamp-5 text-base leading-6 text-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-foreground/70">No stories match “{query}”.</p>
        )}
      </div>
    </section>
  );
}
