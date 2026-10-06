import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";

const audiences = [
  {
    title: "Cannabis Users",
    icon: "/images/figma/aud-1.png",
    href: "/list-options#cannabis-users-list",
    copy: "Consumers identified as marijuana users through various lifestyle, survey, and behavioral indicators.",
  },
  {
    title: "CBD Buyers",
    icon: "/images/figma/aud-2.png",
    href: "/list-options#cbd-users-list",
    copy: "Reach consumers who purchase CBD products and wellness related alternatives.",
  },
  {
    title: "Medical Marijuana Patients",
    icon: "/images/figma/aud-3.png",
    href: "/list-options#medical-marijuana-patients-list",
    copy: "Target individuals associated with medical marijuana interest categories and healthcare related cannabis usage.",
  },
  {
    title: "Cannabis Investors",
    icon: "/images/figma/aud-4.png",
    href: "/list-options#cannabis-investors-list",
    copy: "Identify consumers interested in cannabis related investment opportunities.",
  },
  {
    title: "Cannabis Enthusiasts",
    icon: "/images/figma/aud-5.png",
    href: "/list-options#cannabis-lifestyle-enthusiasts",
    copy: "Reach highly engaged consumers with demonstrated interest in cannabis culture, products, and related content.",
  },
  {
    title: "Dispensary Shoppers",
    icon: "/images/figma/aud-6.png",
    href: "/list-options#dispensary-customer-audiences",
    copy: "Audience segments built around retail cannabis purchasing behavior and dispensary engagement indicators.",
  },
];

export function Audiences() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2
          data-reveal-child
          className="mb-12 px-5 text-[32px] sm:text-[36px] md:mb-[107px] md:px-10 md:text-[48px]"
        >
          <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
            Cannabis Audiences
          </span>
          <span className="block font-light capitalize leading-[1.2] text-glow md:leading-[65px]">
            We Can Help You Reach
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              data-reveal-child
              className="flex flex-col gap-10 border-[0.2px] border-foreground p-8 md:p-10"
            >
              <div className="relative size-8 overflow-hidden">
                <Image
                  src={item.icon}
                  alt={`${item.title} audience icon`}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  <Link href={item.href} className="hover:text-green">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-base leading-6">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal-child
          className="mt-10 flex flex-wrap items-center justify-center gap-4 px-5 md:mt-14 md:px-10"
        >
          <ArrowButton href="/list-options" accent="blue">
            Explore List Options
          </ArrowButton>
          <ArrowButton href="/contact#contact-form" accent="green">
            Request Free Counts
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
