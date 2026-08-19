import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";

export function Accuracy() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 overflow-hidden md:flex-row md:gap-12">
        <div className="relative aspect-square w-full max-w-[600px] shrink-0 md:w-[50%]">
          <Image
            src="/images/figma/accuracy.png"
            alt="Why accuracy matters illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        <div className="flex w-full max-w-[513px] flex-col items-start justify-between gap-10 px-5 pb-16 md:min-h-[513px] md:px-0 md:py-10 md:pr-10">
          <div>
            <h2 className="mb-4 flex flex-wrap items-start gap-x-2 text-[36px] md:text-[48px]">
              <span className="font-light leading-[1.2] text-glow md:leading-[65px]">Why</span>
              <span className="font-serif-accent leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
                Accuracy
              </span>
              <span className="font-light leading-[1.2] text-glow md:leading-[65px]">Matters?</span>
            </h2>
            <div className="space-y-4 text-base leading-6 text-foreground">
              <p>
                Many cannabis marketers waste valuable budget targeting broad audiences that have
                little interest in cannabis related products.
              </p>
              <p>
                Our goal is to help advertisers improve response rates by focusing on consumers most
                likely to engage with cannabis, CBD, wellness, alternative health, and lifestyle
                related offers.
              </p>
              <p>
                As a division of AmeriList, a leading provider of audience data and marketing
                solutions since 2002, Cannabis Email Lists combines specialized cannabis audience
                expertise with decades of direct marketing experience.
              </p>
            </div>
          </div>
          <ArrowButton href="/contact" accent="blue">
            Connect with Us
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
