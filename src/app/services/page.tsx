import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Services | Cannabis Email Lists",
};

const services = [
  {
    title: "Cannabis Consumer Lists",
    icon: "/images/figma/svc-1.svg",
    copy: "Target consumers based on cannabis interest, marijuana usage indicators, CBD purchasing behavior, demographics, geography, and lifestyle factors.",
  },
  {
    title: "Cannabis Email Lists",
    icon: "/images/figma/svc-2.svg",
    copy: "Reach marijuana interested consumers through targeted email marketing solutions.",
  },
  {
    title: "Cannabis Mailing Lists",
    icon: "/images/figma/svc-3.svg",
    copy: "Build direct mail campaigns targeting qualified cannabis audiences nationwide.",
  },
  {
    title: "Audience Profiling",
    icon: "/images/figma/svc-4.svg",
    copy: "Identify the characteristics of your best customers and discover similar prospects.",
  },
  {
    title: "Audience Modeling",
    icon: "/images/figma/svc-5.svg",
    copy: "Expand your reach by finding consumers who closely resemble your current customer base.",
  },
  {
    title: "Data Enhancement",
    icon: "/images/figma/svc-6.svg",
    copy: "Append additional contact information and demographic insights to improve targeting.",
  },
  {
    title: "Custom Audience Development",
    icon: "/images/figma/svc-7.svg",
    copy: "Create highly specialized cannabis audiences based on your exact campaign requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <section className="bg-gradient-to-b from-blue to-green pt-20 text-frost">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 pb-16 pt-10 md:flex-row md:items-start md:justify-between md:gap-12 md:px-10 md:pb-24 md:pt-16">
            <h1 data-hero className="max-w-[565px]">
              <span className="font-serif-accent block text-[36px] leading-[1.15] tracking-[-0.02em] sm:text-[42px] sm:whitespace-nowrap md:text-[62px] md:leading-[69px]">
                Cannabis Marketing
              </span>
              <span className="block text-[34px] font-light leading-[1.15] sm:text-[40px] sm:whitespace-nowrap md:text-[60px] md:leading-[65px]">
                Data Solutions
              </span>
            </h1>
            <div data-hero className="max-w-[417px] space-y-10">
              <p className="text-base leading-6">
                Cannabis Email Lists provides targeted audience data solutions designed to help
                cannabis businesses acquire new customers, improve campaign performance, and
                maximize marketing ROI.
              </p>
              <ArrowButton href="/contact" variant="outline-white" accent="frost">
                Request a Data Consultation
              </ArrowButton>
            </div>
          </div>
          <div className="relative h-[72px] w-full md:h-[102px]">
            <Image
              src="/images/figma/list-pattern.svg"
              alt=""
              fill
              className="object-cover object-bottom opacity-80"
            />
          </div>
        </section>

        <section data-reveal className="bg-white px-5 py-16 md:px-10 md:py-[63px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[30px]">
            {services.map((item, index) => (
              <article
                key={item.title}
                data-reveal-child
                className={`flex flex-col gap-6 pb-[30px] md:flex-row md:items-center md:gap-[109px] ${
                  index < services.length - 1 ? "border-b border-dashed border-foreground/40" : ""
                }`}
              >
                <div className="grid size-20 shrink-0 place-items-center bg-green">
                  <Image
                    src={item.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
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
