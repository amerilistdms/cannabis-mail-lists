import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "List Options | Cannabis Email Lists",
};

const lists = [
  {
    title: "Cannabis Users List",
    icon: "/images/figma/list-1.svg",
    copy: "Consumers identified through marijuana related behavioral and interest indicators.",
  },
  {
    title: "Medical Marijuana Patients List",
    icon: "/images/figma/list-2.svg",
    copy: "Audience segments associated with medical marijuana interests and healthcare related cannabis categories.",
  },
  {
    title: "CBD Users List",
    icon: "/images/figma/list-3.svg",
    copy: "Consumers interested in CBD products, wellness supplements, and alternative therapies.",
  },
  {
    title: "Cannabis Investors List",
    icon: "/images/figma/list-4.svg",
    copy: "Individuals interested in cannabis stocks, investments, and industry growth opportunities.",
  },
  {
    title: "Cannabis Lifestyle Enthusiasts",
    icon: "/images/figma/list-5.svg",
    copy: "Consumers engaged with cannabis related media, events, products, and culture.",
  },
  {
    title: "Cannabis Industry Professionals",
    icon: "/images/figma/list-6.svg",
    copy: "Reach professionals working within cannabis related industries and businesses.",
  },
  {
    title: "Dispensary Customer Audiences",
    icon: "/images/figma/list-7.svg",
    copy: "Target audiences associated with dispensary shopping behavior and cannabis retail engagement.",
  },
  {
    title: "Geographic Cannabis Markets",
    icon: "/images/figma/list-8.svg",
    copy: "Target audiences within specific states, counties, cities, ZIP Codes, or dispensary trade areas.",
  },
];

export default function ListOptionsPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <div data-hero>
          <Header overDark />
        </div>
        <section className="relative overflow-hidden bg-gradient-to-b from-blue to-green pt-[88px] text-frost md:pt-[96px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 pb-20 pt-10 md:flex-row md:justify-between md:px-10 md:pb-28 md:pt-16">
            <h1 data-hero className="max-w-[565px]">
              <span className="font-serif-accent block text-[42px] leading-[1.1] tracking-[-0.02em] md:text-[62px] md:leading-[69px]">
                Cannabis Audience
              </span>
              <span className="block text-[40px] font-light leading-[1.1] md:text-[60px] md:leading-[65px]">
                Data Categories
              </span>
            </h1>
            <div data-hero className="max-w-[417px] space-y-10">
              <p className="text-base leading-6">
                Our Cannabis Audience Data Categories offer detailed audience segments based on
                demographics, purchase behavior, business type, and consumer interests, helping
                cannabis marketers build more precise and effective campaigns.
              </p>
              <ArrowButton href="/contact" variant="outline-white" accent="frost">
                Request a Data Consultation
              </ArrowButton>
            </div>
          </div>
          <div className="relative h-[80px] w-full md:h-[102px]">
            <Image
              src="/images/figma/list-pattern.svg"
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>
        </section>

        <section data-reveal className="bg-white px-5 py-16 md:px-10 md:py-[63px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[30px]">
            {lists.map((item, index) => (
              <article
                key={item.title}
                data-reveal-child
                className={`flex flex-col gap-6 pb-[30px] md:flex-row md:items-center md:gap-[109px] ${
                  index < lists.length - 1 ? "border-b border-dashed border-foreground/40" : ""
                }`}
              >
                <div className="grid size-20 shrink-0 place-items-center bg-green">
                  <Image src={item.icon} alt="" width={40} height={40} className="size-10" />
                </div>
                <h2 className="w-full text-lg font-bold md:w-[260px] md:shrink-0">{item.title}</h2>
                <p className="flex-1 text-base leading-6">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
