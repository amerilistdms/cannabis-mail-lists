import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getPost, posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | Cannabis Email Lists" };
  return {
    title: `${post.title} | Cannabis Email Lists`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <article className="bg-white pt-[88px] md:pt-[96px]">
          <div className="mx-auto w-full max-w-[720px] px-5 py-12 md:px-10 md:py-16">
            <p data-hero className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-green">
              {post.category} · {post.date}
            </p>
            <h1 data-hero className="mb-8 text-3xl font-medium leading-tight md:text-4xl">
              {post.title}
            </h1>
            <div data-hero className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="720px"
                priority
              />
            </div>
            <div data-reveal className="space-y-6">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} data-reveal-child className="leading-7 text-foreground/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <p data-reveal className="mt-12">
              <Link href="/blog" className="text-blue hover:underline">
                ← Back to blog
              </Link>
            </p>
          </div>
        </article>

        <section data-reveal className="border-t border-line bg-frost py-16">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <h2 data-reveal-child className="mb-8 text-2xl font-medium md:text-3xl">
              Discover More
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} data-reveal-child className="flex flex-col gap-3">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  </Link>
                  <h3 className="text-lg font-semibold leading-snug">
                    <Link href={`/blog/${item.slug}`} className="hover:text-green">
                      {item.title}
                    </Link>
                  </h3>
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
