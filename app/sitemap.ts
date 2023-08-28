import { drizzleDb } from "@lib/drizzle";
import { MetadataRoute } from "next";

// todo - update site map
// reference: https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await drizzleDb.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
