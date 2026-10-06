import { siteConfig } from "@/lib/site";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "LLM-Policy: /llms.txt",
    `Host: ${siteConfig.url}`,
    `Sitemap: ${siteConfig.url}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
