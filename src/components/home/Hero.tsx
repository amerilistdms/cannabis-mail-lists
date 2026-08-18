"use client";

import Image from "next/image";
import Link from "next/link";

/** Closed circular text: 4 repeats + textLength forces full ring (no gap). */
function BookACall() {
  const label = "BOOK A CALL • BOOK A CALL • BOOK A CALL • BOOK A CALL • ";
  // circumference ≈ 2πr with r=78
  const circumference = 2 * Math.PI * 78;

  return (
    <Link
      href="/contact"
      aria-label="Book a call"
      className="relative mx-auto grid size-[180px] place-items-center md:mx-0 md:size-[202px]"
    >
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 size-full" aria-hidden>
        <defs>
          <path
            id="bookCallPath"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>
        <text fill="#EFF2F9" fontSize="10.5" fontFamily="var(--font-jakarta), sans-serif" letterSpacing="1.5">
          <textPath href="#bookCallPath" textLength={circumference} lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </svg>
      <span className="relative size-[82px]">
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
    <section className="relative w-full overflow-hidden pt-[72px] text-frost md:pt-[80px]">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/figma/hero-bg.png"
          alt=""
          fill
          priority
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

      <div className="relative flex flex-col gap-[48px] px-5 pb-10 pt-6 md:gap-[75px] md:px-10 md:pb-10 md:pt-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 md:gap-14">
          <div className="max-w-[809px]">
            <h1 className="flex flex-col">
              <span className="flex flex-wrap items-start gap-x-4">
                <span className="text-[40px] font-light leading-[1.1] text-glow md:text-[60px] md:leading-[65px]">
                  Reach
                </span>
                <span className="font-serif-accent text-[42px] leading-[1.1] tracking-[-0.02em] text-green md:text-[62px] md:leading-[69px]">
                  Cannabis Consumers
                </span>
              </span>
              <span className="flex flex-wrap items-start gap-x-4">
                <span className="text-[40px] font-light leading-[1.1] text-glow md:text-[60px] md:leading-[65px]">
                  with
                </span>
                <span className="font-serif-accent text-[42px] leading-[1.1] tracking-[-0.02em] text-green md:text-[62px] md:leading-[69px]">
                  Opt-In Email Leads.
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-[546px] text-lg text-frost md:text-2xl">
              Find out why top cannabis companies trust us to help them find new customers.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="flex max-w-[562px] items-center gap-4">
              <span className="h-[75px] w-[3px] shrink-0 rounded-[30px] bg-green" aria-hidden />
              <p className="text-base leading-6 text-frost">
                Reach verified cannabis consumers, marijuana enthusiasts, CBD buyers, dispensary
                shoppers, cannabis investors, medical marijuana patients, and cannabis interested
                households across the United States.
              </p>
            </div>
            <BookACall />
          </div>
        </div>
      </div>
    </section>
  );
}
