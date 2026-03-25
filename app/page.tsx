import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { AgeBandCards } from "@/components/age-band-cards";
import { BrandShowcase } from "@/components/brand-showcase";
import { OurStory } from "@/components/our-story";
import { GiftOccasions } from "@/components/gift-occasions";

export const metadata: Metadata = {
  title: "Enfantillage - Lebanon's Toy Store Since 1992 | LEGO, Playmobil & More",
  description:
    "Lebanon's premier toy store since 1992. Shop LEGO, Playmobil, Chicco, Mattel, Barbie & 100+ top brands. Expert toy advice for every age from 0 to 12+. Contact us on WhatsApp.",
  keywords: [
    "toy store Lebanon",
    "LEGO Lebanon",
    "Playmobil Lebanon",
    "Enfantillage",
    "Lebanon toys",
    "buy toys Lebanon",
    "children toys Beirut",
    "toy shop Lebanon",
  ],
  openGraph: {
    title: "Enfantillage - Lebanon's Toy Store Since 1992",
    description:
      "Making Lebanese childhoods magical since 1992. 100+ top toy brands, expert advice.",
    url: "https://enfantillage.com.lb",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ToyStore",
  name: "Enfantillage",
  description: "Lebanon's premier toy store since 1992",
  url: "https://enfantillage.com.lb",
  telephone: "+9613720233",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mazra'at Yashu'",
    addressCountry: "LB",
  },
  founder: [
    { "@type": "Person", name: "Elie Diab" },
    { "@type": "Person", name: "Georges Diab" },
  ],
  foundingDate: "1992",
  openingHours: "Mo-Sa 09:00-20:00",
  priceRange: "$$",
  sameAs: ["https://wa.me/9613720233"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── HERO — full-width, layered, animated ── */}
        <HeroSection />

        {/* ── TRUST BAR ── */}
        <TrustBar />

        {/* ── SHOP BY AGE — gradient cards with hover states ── */}
        <AgeBandCards />

        {/* ── BRANDS — editorial showcase with hover lift ── */}
        <BrandShowcase />

        {/* ── OUR STORY — magazine spread style ── */}
        <OurStory />

        {/* ── GIFT OCCASIONS — Eid / Birthday / Christmas ── */}
        <GiftOccasions />

        {/* ── WHATSAPP CTA ── */}
        <section className="py-20 px-4" style={{ backgroundColor: "#FFF8F0" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: "#25D366" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30" height="30">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a00] mb-4">
              Not sure what to buy?
            </h2>
            <p className="text-[#6b5a4e] text-xl mb-10 max-w-lg mx-auto leading-relaxed">
              Message us on WhatsApp. Our toy experts will find the perfect gift — just tell us the age and budget.
            </p>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
