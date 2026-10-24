import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Leisure Vehicle & Auto Repairs | Newton Abbot & Torbay",
    template: "%s | Leisure Vehicle & Auto Repairs",
  },
  description:
    "Experienced vehicle servicing, repairs, diagnostics and pre-purchase inspections for cars, vans and motorhomes in Newton Abbot, Torbay and surrounding areas.",
  applicationName: "Leisure Vehicle & Auto Repairs",
  category: "Automotive",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.lvar.co.uk/#organization",
      name: "Leisure Vehicle & Auto Repairs",
      url: "https://www.lvar.co.uk/",
      logo: "https://www.lvar.co.uk/media/header.be89f38bd296.webp",
      telephone: "+447456799745",
      sameAs: ["https://www.facebook.com/leisurevehiclesandautorepairs"],
    },
    {
      "@type": "AutoRepair",
      "@id": "https://www.lvar.co.uk/#localbusiness",
      name: "Leisure Vehicle & Auto Repairs",
      url: "https://www.lvar.co.uk/",
      parentOrganization: { "@id": "https://www.lvar.co.uk/#organization" },
      telephone: "+447456799745",
      description:
        "Independent vehicle servicing, repairs, diagnostics, pre-purchase inspections and motorhome habitation checks. Garage base in Newton Abbot, with mobile visits where suitable.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1 School Road Business Park",
        addressLocality: "Newton Abbot",
        addressRegion: "Devon",
        postalCode: "TQ12 2JU",
        addressCountry: "GB",
      },
      areaServed: ["Newton Abbot", "Torbay", "Devon"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vehicle services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-purchase inspections" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car and van servicing and repairs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motorhome habitation checks" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lvar.co.uk/#website",
      url: "https://www.lvar.co.uk/",
      name: "Leisure Vehicle & Auto Repairs",
      publisher: { "@id": "https://www.lvar.co.uk/#organization" },
      inLanguage: "en-GB",
    },
  ],
};

const safeStructuredData = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStructuredData }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
