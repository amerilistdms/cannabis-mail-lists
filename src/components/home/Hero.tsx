"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { ArrowButton } from "@/components/ArrowButton";

function BookACall({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const pathId = `bookCallPath-${uid}`;
  const radius = 90;
  const phrases = [0, 1, 2, 3] as const;

  return (
    <Link
      href="/contact"
      aria-label="Book a call"
      className={`relative block size-[132px] shrink-0 sm:size-[156px] lg:size-[202px] ${className}`}
    >
      <svg
        viewBox="0 0 202 202"
        className="animate-spin-slow absolute inset-0 size-full"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d={`M101,101 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>

        {phrases.map((i) => (
          <text
            key={`phrase-${i}`}
            fill="#EFF2F9"
            fontSize="10.5"
            fontFamily="var(--font-jakarta), sans-serif"
            letterSpacing="1.2"
            textAnchor="middle"
          >
            <textPath href={`#${pathId}`} startOffset={`${12.5 + i * 25}%`}>
              BOOK A CALL
            </textPath>
          </text>
        ))}

        {phrases.map((i) => (
          <text
            key={`dot-${i}`}
            fill="#EFF2F9"
            fontSize="10.5"
            fontFamily="var(--font-jakarta), sans-serif"
            textAnchor="middle"
          >
            <textPath href={`#${pathId}`} startOffset={`${i * 25}%`}>
              •
            </textPath>
          </text>
        ))}
      </svg>

      <span className="pointer-events-none absolute left-1/2 top-[23%] h-[52.5%] w-[40.7%] -translate-x-1/2">
        <Image
          src="/images/figma/book-call-leaf.svg"
          alt=""
          fill
          className="object-contain"
          sizes="82px"
        />
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 text-frost">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/figma/hero-bg.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={70}
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(119.5deg, rgb(25, 28, 51) 27%, rgba(25, 28, 51, 0.8) 102%), linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
          }}
        />
      </div>

      <div className="relative flex flex-col px-5 pb-8 pt-6 md:px-10 md:pb-10 md:pt-10">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 lg:gap-[56px]">
          <div data-hero className="max-w-[809px]">
            <h1 className="flex flex-col">
              <span className="flex flex-wrap items-start gap-x-3 gap-y-1 sm:gap-x-4">
                <span className="text-[34px] font-light leading-[1.15] text-glow sm:text-[40px] md:text-[60px] md:leading-[65px]">
                  Reach
                </span>
                <span className="font-serif-accent text-[36px] leading-[1.15] tracking-[-0.02em] text-green sm:text-[42px] md:text-[62px] md:leading-[69px]">
                  Cannabis Consumers
                </span>
              </span>
              <span className="flex flex-wrap items-start gap-x-3 gap-y-1 sm:gap-x-4">
                <span className="text-[34px] font-light leading-[1.15] text-glow sm:text-[40px] md:text-[60px] md:leading-[65px]">
                  with
                </span>
                <span className="font-serif-accent text-[36px] leading-[1.15] tracking-[-0.02em] text-green sm:text-[42px] md:text-[62px] md:leading-[69px]">
                  Opt-In Email Leads.
                </span>
              </span>
            </h1>
            <p className="mt-[26px] max-w-[546px] text-lg text-frost md:text-2xl">
              Find out why top cannabis companies trust us to help them find new customers.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div data-hero className="flex w-full max-w-[565px] flex-col items-start gap-5">
              <div className="flex items-center gap-4">
                <span className="h-[75px] w-[3px] shrink-0 rounded-[30px] bg-green" aria-hidden />
                <p className="max-w-[546px] text-base leading-6 text-frost">
                  Reach verified cannabis consumers, marijuana enthusiasts, CBD buyers, dispensary
                  shoppers, cannabis investors, medical marijuana patients, and cannabis interested
                  households across the United States.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <ArrowButton href="/contact#contact-form" variant="outline-white" accent="blue">
                  Request a Free Market Analysis
                </ArrowButton>
                <BookACall className="lg:hidden" />
              </div>
            </div>

            <div data-hero className="hidden shrink-0 lg:block">
              <BookACall />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
