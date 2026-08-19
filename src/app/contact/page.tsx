import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Contact | Cannabis Email Lists",
};

const topics = [
  "Your target audience",
  "Geographic markets",
  "Marketing channels",
  "Available audience counts",
  "Pricing options",
  "Campaign recommendations",
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <section
          className="relative min-h-[100svh] overflow-hidden pt-20 text-frost"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(0, 112, 171) 0%, rgb(60, 107, 59) 110.71%)",
          }}
        >
          <div
            data-hero
            className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[55%] max-w-[720px] md:block lg:right-[-4%] xl:right-0"
            aria-hidden
          >
            <Image
              src="/images/figma/contact-leaf.svg"
              alt=""
              fill
              className="object-contain object-right opacity-90"
              sizes="720px"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1200px] flex-col justify-between gap-12 px-5 pb-16 pt-10 md:gap-16 md:px-10 md:pb-20 md:pt-8">
            <div data-hero className="max-w-[730px] space-y-8">
              <h1>
                <span className="block text-[32px] font-light leading-[1.15] sm:text-[48px] sm:whitespace-nowrap md:text-[60px] md:leading-[65px]">
                  Let&apos;s Discuss Your
                </span>
                <span className="font-serif-accent block text-[34px] leading-[1.15] tracking-[-0.02em] sm:text-[52px] sm:whitespace-nowrap md:text-[62px] md:leading-[69px]">
                  Cannabis Marketing Goals
                </span>
              </h1>
              <p className="max-w-[690px] text-lg md:text-2xl">
                Whether you&apos;re looking for cannabis consumer email lists, marijuana mailing
                lists, CBD buyer audiences, or custom audience targeting solutions, our team is here
                to help.
              </p>
            </div>

            <div data-hero className="max-w-[642px] space-y-5">
              <p className="text-lg font-bold uppercase">Schedule A Free Consultation</p>
              <div className="h-px w-full bg-frost/70" />
              <ul className="space-y-2.5 text-xl md:text-2xl">
                {topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div data-hero className="flex flex-col gap-4 sm:flex-row sm:flex-wrap md:gap-8">
              <ArrowButton
                href="mailto:info@amerilist.com?subject=Cannabis%20Email%20Lists%20-%20Call%20Request"
                variant="outline-white"
                accent="blue"
              >
                Call Today
              </ArrowButton>
              <ArrowButton
                href="mailto:info@amerilist.com?subject=Request%20Free%20Counts"
                variant="outline-white"
                accent="blue"
              >
                Request Free Counts
              </ArrowButton>
              <ArrowButton
                href="mailto:info@amerilist.com?subject=Book%20A%20Consultation"
                variant="outline-white"
                accent="blue"
              >
                Book A Consultation
              </ArrowButton>
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
