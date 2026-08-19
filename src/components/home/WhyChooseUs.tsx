"use client";

import Image from "next/image";

const cards = [
  {
    title: "Postal Mailing Lists",
    image: "/images/figma/card-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Consumer Email Lists",
    image: "/images/figma/card-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Phone Numbers",
    image: "/images/figma/card-3.png",
    split: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Digital Audience Targeting",
    image: "/images/figma/card-4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Custom Audience Matching",
    image: "/images/figma/card-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Direct Mail Campaign Support",
    image: "/images/figma/card-6.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Permission Based Email Marketing",
    image: "/images/figma/card-7.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Audience Modeling & Profiling",
    image: "/images/figma/card-8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

function Card({
  title,
  image,
  description,
  split,
}: {
  title: string;
  image: string;
  description: string;
  split?: boolean;
}) {
  return (
    <article className="group relative h-[360px] w-[290px] shrink-0 overflow-hidden rounded-2xl md:h-[400px] md:w-[330px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="330px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/85 via-[#1e1e1e]/20 to-transparent to-[52%]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />

      <h3 className="absolute left-5 top-5 w-[calc(100%-2.5rem)] text-[24px] font-bold uppercase leading-[1.1] text-frost md:text-[30px]">
        {split ? (
          <>
            Phone
            <br />
            Numbers
          </>
        ) : (
          title
        )}
      </h3>

      <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(239,242,249,0.82)] px-4 py-3 backdrop-blur-[10px] md:inset-x-4 md:bottom-4">
        <p className="text-sm leading-5 tracking-[0.14px] text-foreground">{description}</p>
      </div>
    </article>
  );
}

export function WhyChooseUs() {
  const loop = [...cards, ...cards];

  return (
    <section className="overflow-hidden bg-frost py-16 md:py-20">
      <div className="mx-auto mb-12 flex w-full max-w-[1120px] flex-col gap-10 px-5 md:mb-14 md:gap-[45px] md:px-10">
        <div data-reveal-child className="flex items-center gap-3">
          <Image
            src="/images/figma/leaf-stroke.svg"
            alt=""
            width={30}
            height={39}
            className="h-[39px] w-auto"
          />
          <p className="max-w-[294px] text-sm uppercase text-foreground">
            Cannabis marketing starts with reaching the right audience.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <h2
            data-reveal-child
            className="shrink-0 text-[32px] leading-none sm:text-[36px] md:text-[48px] lg:max-w-[492px]"
          >
            <span className="block font-light leading-[1.2] text-glow sm:whitespace-nowrap md:leading-[65px]">
              Why Cannabis Brands
            </span>
            <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
              Choose Us?
            </span>
          </h2>
          <div data-reveal-child className="w-full max-w-[546px] space-y-4 text-base leading-6 text-foreground lg:shrink-0 lg:pt-1">
            <p>
              At Cannabis Email Lists, we help cannabis companies, CBD brands, dispensaries,
              ancillary service providers, and cannabis focused marketers identify and connect with
              qualified prospects through highly targeted audience data solutions.
            </p>
            <p>
              Our database includes millions of consumers identified through a variety of
              demographic, behavioral, purchase interest, lifestyle, and response based indicators
              that help marketers target likely cannabis users and marijuana interested consumers.
            </p>
          </div>
        </div>
      </div>

      <div data-reveal-child className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-frost via-frost/80 to-transparent md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-frost via-frost/80 to-transparent md:w-24"
          aria-hidden
        />

        <div className="animate-marquee flex w-max gap-5 py-1 pl-5 will-change-transform hover:[animation-play-state:paused] md:gap-6 md:pl-10">
          {loop.map((card, i) => (
            <Card key={`${card.title}-${i}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
