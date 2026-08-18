import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <Image
        src="/images/figma/leaf-deco-1.svg"
        alt=""
        width={330}
        height={425}
        className="pointer-events-none absolute -left-16 top-1/2 hidden w-[280px] -translate-y-1/2 rotate-[23deg] opacity-90 lg:block xl:left-0"
        aria-hidden
      />
      <Image
        src="/images/figma/leaf-deco-2.svg"
        alt=""
        width={330}
        height={425}
        className="pointer-events-none absolute -right-16 top-1/2 hidden w-[280px] -translate-y-1/2 -scale-y-100 rotate-[157deg] opacity-90 lg:block xl:right-0"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[545px] flex-col items-center gap-10 px-5 md:gap-[57px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[36px] md:text-[48px]">
            <span className="block font-light leading-[1.2] text-glow md:leading-[65px]">
              Ready to Reach More
            </span>
            <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
              Cannabis Consumers?
            </span>
          </h2>
          <p className="max-w-[513px] text-base leading-6 text-foreground">
            Get a free market analysis and discover how many cannabis consumers are available in
            your target market.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[295px]">
            <Image
              src="/images/figma/cta-photo.png"
              alt="Cannabis lifestyle"
              fill
              className="object-cover"
              sizes="545px"
            />
          </div>
          <ArrowButton href="/contact" accent="blue" className="max-w-full text-left">
            Request Counts, Pricing &amp; Audience Recommendations Today
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
