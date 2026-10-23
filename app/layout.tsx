import type { Metadata } from "next";
import { ScrollReveal } from "./components/scroll-reveal";
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

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Leisure Vehicle & Auto Repairs",
  telephone: "+447456799745",
  description:
    "Vehicle servicing, repairs, diagnostics and inspections for cars, vans, motorhomes and campervans. Garage base in Newton Abbot, with mobile visits case dependent.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newton Abbot",
    addressRegion: "Devon",
    addressCountry: "GB",
  },
  areaServed: ["Newton Abbot", "Torbay", "Devon"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <SiteHeader />
        <ScrollReveal>{children}</ScrollReveal>
        <SiteFooter />
      </body>
    </html>
  );
}
