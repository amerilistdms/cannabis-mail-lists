import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
      <Header overDark />
      <section
        className="overflow-hidden pt-[88px] text-frost md:pt-[96px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(0, 112, 171) 0%, rgb(60, 107, 59) 110.71%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-col lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-[730px] flex-col gap-12 px-5 pb-16 pt-10 md:gap-[98px] md:px-10 md:pb-20 md:pt-8">
            <div className="space-y-8">
              <h1>
                <span className="block text-[40px] font-light leading-[1.1] md:text-[60px] md:leading-[65px]">
                  Let&apos;s Discuss Your
                </span>
                <span className="font-serif-accent block text-[42px] leading-[1.1] tracking-[-0.02em] md:text-[62px] md:leading-[69px]">
                  Cannabis Marketing Goals
                </span>
              </h1>
              <p className="max-w-[690px] text-lg md:text-2xl">
                Whether you&apos;re looking for cannabis consumer email lists, marijuana mailing
                lists, CBD buyer audiences, or custom audience targeting solutions, our team is here
                to help.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-lg font-bold uppercase">Schedule A Free Consultation</p>
              <div className="h-px w-full max-w-[642px] bg-frost/70" />
              <ul className="space-y-2.5 text-xl md:text-2xl">
                {topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-[41px]">
              <ArrowButton href="tel:+18000000000" variant="outline-white" accent="frost">
                Call Today
              </ArrowButton>
              <ArrowButton href="/contact" variant="outline-white" accent="frost">
                Request Free Counts
              </ArrowButton>
              <ArrowButton href="/contact" variant="outline-white" accent="frost">
                Book A Consultation
              </ArrowButton>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[520px] shrink-0 lg:block xl:max-w-[666px]">
            <div className="relative h-[600px] w-full xl:h-[860px]">
              <Image
                src="/images/figma/contact-leaf.svg"
                alt=""
                fill
                className="object-contain object-right"
                sizes="666px"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
