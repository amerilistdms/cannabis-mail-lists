"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

const GAP = 24;

function Card({
  title,
  image,
  description,
  split,
  active,
}: {
  title: string;
  image: string;
  description: string;
  split?: boolean;
  active: boolean;
}) {
  return (
    <article
      data-card
      className={`group relative h-[360px] w-[min(78vw,300px)] shrink-0 snap-start overflow-hidden rounded-xl transition-[transform,opacity] duration-500 ease-out md:h-[400px] md:w-[340px] ${
        active ? "scale-100 opacity-100" : "scale-[0.96] opacity-70"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="340px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/90 via-[#1e1e1e]/25 to-transparent to-[55%]" />
      <h3 className="absolute left-5 top-5 w-[calc(100%-40px)] text-[24px] font-bold uppercase leading-tight text-frost md:text-[30px]">
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
      <div className="absolute inset-x-0 bottom-0 bg-[rgba(239,242,249,0.72)] px-4 py-3 backdrop-blur-[8px]">
        <p className="text-sm leading-5 tracking-[0.14px] text-foreground">{description}</p>
      </div>
    </article>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous solutions" : "Next solutions"}
      className="grid size-11 place-items-center rounded-full border border-foreground bg-transparent transition enabled:hover:bg-foreground enabled:hover:text-frost disabled:cursor-not-allowed disabled:opacity-30"
    >
      <Image
        src="/images/figma/arrow-dark.svg"
        alt=""
        width={14}
        height={14}
        className={`size-3.5 ${direction === "prev" ? "rotate-[225deg]" : "rotate-45"}`}
      />
    </button>
  );
}

export function WhyChooseUs() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const step = card.offsetWidth + GAP;
    const maxScroll = Math.max(1, el.scrollWidth - el.clientWidth);
    const nextIndex = Math.min(cards.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));

    setIndex(nextIndex);
    setProgress(el.scrollLeft / maxScroll);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
  };

  return (
    <section className="bg-frost py-16 md:py-20">
      <div className="mx-auto mb-10 flex w-full max-w-[1120px] flex-col gap-10 px-5 md:mb-12 md:gap-[45px] md:px-10">
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
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-frost to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-frost to-transparent md:w-16"
          aria-hidden
        />

        <div
          ref={scrollerRef}
          className="carousel-track flex gap-6 overflow-x-auto scroll-smooth px-5 pb-2 pt-1 md:gap-6 md:px-[max(2.5rem,calc(50vw-560px+2.5rem))]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.map((card, i) => (
            <Card key={card.title} {...card} active={i === index} />
          ))}
          <div className="w-2 shrink-0 snap-end md:w-4" aria-hidden />
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1120px] flex-col gap-5 px-5 md:mt-10 md:px-10">
          <div className="h-px w-full overflow-hidden bg-foreground/15">
            <div
              className="h-full bg-green transition-[width] duration-300 ease-out"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm tracking-[0.14px] text-foreground tabular-nums">
              <span className="font-bold">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-foreground/35">/</span>
              <span className="text-foreground/55">{String(cards.length).padStart(2, "0")}</span>
            </p>

            <div className="flex items-center gap-3">
              <NavButton direction="prev" disabled={!canPrev} onClick={() => scrollByDir(-1)} />
              <NavButton direction="next" disabled={!canNext} onClick={() => scrollByDir(1)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
