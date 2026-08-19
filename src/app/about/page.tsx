import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "About | Cannabis Email Lists",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <div data-hero>
          <Header overDark={false} />
        </div>
        <section className="bg-frost pt-[88px] md:pt-[96px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 px-5 py-12 md:gap-[75px] md:px-10 md:py-16">
            <div data-hero className="flex max-w-[795px] flex-col items-center gap-8 text-center md:gap-[51px]">
              <h1>
                <span className="font-serif-accent block text-[42px] leading-[1.1] tracking-[-0.02em] text-blue md:text-[62px] md:leading-[69px]">
                  About Cannabis
                </span>
                <span className="block text-[40px] font-light leading-[1.1] text-foreground md:text-[60px] md:leading-[65px]">
                  Email Lists
                </span>
              </h1>
              <p className="text-base leading-6 text-foreground">
                Cannabis Email Lists was created to help cannabis marketers, CBD brands,
                dispensaries, agencies, and related businesses connect with qualified prospects
                through accurate audience data and marketing intelligence.
              </p>
            </div>
            <div data-reveal className="grid w-full gap-6 md:grid-cols-2 md:gap-8">
              <div
                data-reveal-child
                className="relative aspect-square overflow-hidden md:h-[522px] md:aspect-auto"
              >
                <Image
                  src="/images/figma/about-1.png"
                  alt="Cannabis consumer lifestyle"
                  fill
                  className="object-cover"
                  sizes="523px"
                />
              </div>
              <div
                data-reveal-child
                className="relative aspect-square overflow-hidden md:h-[522px] md:aspect-auto"
              >
                <Image
                  src="/images/figma/about-2.png"
                  alt="Cannabis brand collaboration"
                  fill
                  className="object-cover"
                  sizes="523px"
                />
              </div>
            </div>
          </div>
        </section>

        <section data-reveal className="bg-white">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-5 py-16 md:gap-[50px] md:px-10 md:py-20">
            <div
              data-reveal-child
              className="flex flex-col items-center gap-10 md:flex-row md:justify-between"
            >
              <div className="w-full max-w-[523px] space-y-2">
                <p className="text-lg font-bold uppercase">Our mission is simple:</p>
                <div className="space-y-4 text-xl leading-normal md:text-2xl">
                  <p>
                    Provide marketers with reliable cannabis audience data that helps generate
                    better results from direct mail, email marketing, digital advertising, and
                    customer acquisition campaigns.
                  </p>
                  <p>
                    As a division of AmeriList, we leverage more than two decades of audience data
                    expertise to help clients identify and reach their ideal customers.
                  </p>
                </div>
              </div>
              <div className="relative h-[280px] w-full max-w-[523px] overflow-hidden md:h-[370px]">
                <Image
                  src="/images/figma/about-3.png"
                  alt="Audience data illustration"
                  fill
                  className="object-cover"
                  sizes="523px"
                />
              </div>
            </div>

            <div
              data-reveal-child
              className="flex flex-col items-center gap-10 md:flex-row md:justify-between"
            >
              <div className="relative h-[280px] w-full max-w-[523px] overflow-hidden md:h-[370px]">
                <Image
                  src="/images/figma/about-4.png"
                  alt="AmeriList heritage"
                  fill
                  className="object-cover"
                  sizes="523px"
                />
              </div>
              <div className="w-full max-w-[523px] space-y-4 text-xl leading-normal md:text-2xl">
                <p>
                  Since 2002, AmeriList has helped businesses, agencies, nonprofits, and
                  organizations nationwide improve campaign performance through data driven
                  marketing solutions.
                </p>
                <p>
                  Today, Cannabis Email Lists brings that same expertise to the rapidly growing
                  cannabis marketplace.
                </p>
              </div>
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
