export const siteConfig = {
  name: "Cannabis Email Lists",
  shortName: "Cannabis Email Lists",
  tagline: "Audience data & marketing lists for cannabis brands",
  description:
    "Reach verified cannabis consumers with opt-in email leads, mailing lists, and audience targeting from AmeriList. Free market analysis and counts available.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.cannabisemaillists.com").replace(
    /\/$/,
    ""
  ),
  ogImage: "/og-default.jpg",
  locale: "en_US",
  twitterHandle: "@AmeriList",
  email: "info@amerilist.com",
  phone: "+18004572899",
  phoneDisplay: "1-800-457-2899",
  parentBrand: "AmeriList",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
