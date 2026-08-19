"use client";

import Image from "next/image";

const cards = [
  { title: "Postal Mailing Lists", image: "/images/figma/card-1.png" },
  { title: "Consumer Email Lists", image: "/images/figma/card-2.png" },
  { title: "Phone Numbers", image: "/images/figma/card-3.png", split: true },
  { title: "Digital Audience Targeting", image: "/images/figma/card-4.png" },
  { title: "Custom Audience Matching", image: "/images/figma/card-5.png" },
  { title: "Direct Mail Campaign Support", image: "/images/figma/card-6.png" },
  { title: "Permission Based Email Marketing", image: "/images/figma/card-7.png" },
  { title: "Audience Modeling & Profiling", image: "/images/figma/card-8.png" },
];

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Feugiat sit feugiat tempus nulla pellentesque sit imperdiet.";

function Card({
  title,
  image,
  split,
}: {
  title: string;
  image: string;
  split?: boolean;
}) {
  return (
    <article className="relative h-[340px] w-[280px] shrink-0 overflow-hidden rounded-xl md:h-[370px] md:w-[320px]">
      <Image src={image} alt={title} fill className="object-cover" sizes="320px" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e] to-transparent to-[40%]" />
      <h3 className="absolute left-5 top-5 w-[calc(100%-40px)] text-[26px] font-bold uppercase leading-tight text-frost md:text-[32px]">
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
      <div className="absolute inset-x-0 bottom-0 bg-[rgba(239,242,249,0.6)] px-4 py-2.5 backdrop-blur-[7px]">
        <p className="text-sm tracking-[0.14px] text-foreground">{lorem}</p>
      </div>
    </article>
  );
}

export function WhyChooseUs() {
  const loop = [...cards, ...cards];

  return (
    <section className="bg-frost py-16 md:py-20">
      <div className="mx-auto mb-12 flex w-full max-w-[1120px] flex-col gap-10 px-5 md:mb-[45px] md:gap-[45px] md:px-10">
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

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <h2 data-reveal-child className="text-[36px] leading-none md:text-[48px]">
            <span className="block whitespace-nowrap font-light leading-[1.2] text-glow md:leading-[65px]">
              Why Cannabis Brands
            </span>
            <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
              Choose Us?
            </span>
          </h2>
          <div data-reveal-child className="max-w-[546px] space-y-4 text-base leading-6 text-foreground">
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

      <div data-reveal-child className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-[27px] px-5 will-change-transform hover:[animation-play-state:paused]">
          {loop.map((card, i) => (
            <Card key={`${card.title}-${i}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
