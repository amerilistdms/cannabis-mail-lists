import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { slugify } from "@/lib/site";

const listOptions = [
  { label: "Cannabis Users", href: `/list-options#${slugify("Cannabis Users List")}` },
  { label: "CBD Users", href: `/list-options#${slugify("CBD Users List")}` },
  {
    label: "Medical MJ Patients",
    href: `/list-options#${slugify("Medical Marijuana Patients List")}`,
  },
  { label: "Cannabis Investors", href: `/list-options#${slugify("Cannabis Investors List")}` },
  {
    label: "Dispensary Shoppers",
    href: `/list-options#${slugify("Dispensary Customer Audiences")}`,
  },
  {
    label: "Industry Professionals",
    href: `/list-options#${slugify("Cannabis Industry Professionals")}`,
  },
];

const services = [
  { label: "Cannabis Consumer", href: `/services#${slugify("Cannabis Consumer Lists")}` },
  { label: "Cannabis Email Lists", href: `/services#${slugify("Cannabis Email Lists")}` },
  { label: "Cannabis Mailing Lists", href: `/services#${slugify("Cannabis Mailing Lists")}` },
  { label: "Audience Profiling", href: `/services#${slugify("Audience Profiling")}` },
  { label: "Audience Modeling", href: `/services#${slugify("Audience Modeling")}` },
  { label: "Data Enhancement", href: `/services#${slugify("Data Enhancement")}` },
  {
    label: "Custom Audiences",
    href: `/services#${slugify("Custom Audience Development")}`,
  },
];

const company = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/list-options", label: "List Options" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-navy text-frost">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-5 py-12 md:px-10 md:pt-[50px] md:pb-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="flex flex-wrap gap-10 md:gap-20">
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">List Options</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {listOptions.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:opacity-80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Services</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:opacity-80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Company</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:opacity-80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full max-w-[393px]">
              <p className="mb-2.5 text-2xl">Cannabis Email Lists</p>
              <p className="mb-8 text-sm leading-5 tracking-[0.14px] text-glow">
                Reach verified cannabis consumers with targeted audience data for email, direct
                mail, digital advertising and customer acquisition.
              </p>
              <div className="flex flex-wrap gap-5">
                <ArrowButton href="/contact#contact-form" variant="outline-white" accent="green">
                  Request Free Counts
                </ArrowButton>
                <ArrowButton href="/contact" variant="outline-white" accent="green">
                  Book a Call
                </ArrowButton>
              </div>
            </div>
          </div>

          <p className="text-center text-[18px] leading-snug text-frost sm:text-[26px] md:text-[33px] md:leading-tight">
            A division of AmeriList. Audience data &amp; marketing solutions since 2002
          </p>
        </div>
      </div>

      <div className="bg-green text-frost">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-5 text-sm tracking-[0.14px] sm:flex-row sm:items-center sm:justify-between md:px-10">
          <div className="flex flex-wrap gap-8">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
          <p>© 2026 Cannabis Email Lists. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
