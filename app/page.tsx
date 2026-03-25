import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
  sameAs: [
    "https://wa.me/9613720233",
  ],
};

const ageBands = [
  { emoji: "🍼", label: "0–12 months", desc: "Sensory toys & mobiles", href: "/shop-by-age#0-12m" },
  { emoji: "🧸", label: "1–3 years", desc: "Soft toys & building blocks", href: "/shop-by-age#1-3y" },
  { emoji: "🎨", label: "3–6 years", desc: "Creative & role-play", href: "/shop-by-age#3-6y" },
  { emoji: "🚀", label: "6–12 years", desc: "LEGO, science & strategy", href: "/shop-by-age#6-12y" },
  { emoji: "🎮", label: "12+ years", desc: "Tech, hobby & collector", href: "/shop-by-age#12plus" },
];

const brands = [
  { name: "LEGO", color: "#E3000B", href: "/lego-lebanon" },
  { name: "Playmobil", color: "#E8192C", href: "/shop-by-age" },
  { name: "Chicco", color: "#0066CC", href: "/shop-by-age" },
  { name: "Mattel", color: "#E82C2A", href: "/shop-by-age" },
  { name: "Barbie", color: "#E0218A", href: "/shop-by-age" },
  { name: "Little Tikes", color: "#F7941D", href: "/shop-by-age" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #C41E3A 0%, #8B0000 50%, #4a0000 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 bg-[#D4A017] -translate-x-1/3 translate-y-1/3" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="text-center">
              <Badge
                className="mb-4 text-xs font-semibold tracking-widest uppercase"
                style={{ backgroundColor: "#D4A017", color: "#1a0a00" }}
              >
                Lebanon&apos;s Original Toy Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Making Lebanese
                <br />
                <span style={{ color: "#D4A017" }}>Childhoods Magical</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-2xl mx-auto">
                Lebanon&apos;s original toy experts since 1992. Trusted by generations of families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop-by-age"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-[#1a0a00] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#D4A017" }}
                >
                  Shop by Age 🎁
                </Link>
                <a
                  href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white border-2 border-white/50 hover:bg-white/10 transition-colors"
                >
                  💬 Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section
          style={{ backgroundColor: "#D4A017" }}
          className="py-4"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#1a0a00] font-semibold text-sm md:text-base">
              <span>⭐ 32 Years of Excellence</span>
              <span className="hidden sm:block text-[#8B5e00]">·</span>
              <span>🏷️ 100+ Top Brands</span>
              <span className="hidden sm:block text-[#8B5e00]">·</span>
              <span>🧸 772+ Toy Options</span>
              <span className="hidden sm:block text-[#8B5e00]">·</span>
              <span>👨‍👩‍👧 Family Owned</span>
            </div>
          </div>
        </section>

        {/* ── SHOP BY AGE ── */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-3">
              Shop by Age
            </h2>
            <p className="text-[#6b5a4e] text-lg">
              Find the perfect toy for every stage of childhood
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ageBands.map((band) => (
              <Link
                key={band.label}
                href={band.href}
                className="group flex flex-col items-center p-6 rounded-2xl border-2 border-[#e8d5c4] bg-white hover:border-[#C41E3A] hover:shadow-lg transition-all duration-200"
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {band.emoji}
                </span>
                <span className="font-bold text-[#1a0a00] text-sm text-center mb-1">
                  {band.label}
                </span>
                <span className="text-xs text-[#6b5a4e] text-center">
                  {band.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section
          className="py-16 px-4"
          style={{ backgroundColor: "#FFF8F0" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-3">
                Top Brands We Carry
              </h2>
              <p className="text-[#6b5a4e] text-lg">
                Authorised retailer for Lebanon&apos;s most-loved toy brands
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {brands.map((brand) => (
                <Link
                  key={brand.name}
                  href={brand.href}
                  className="flex items-center justify-center p-6 bg-white rounded-2xl border border-[#e8d5c4] hover:shadow-md hover:border-[#C41E3A] transition-all font-bold text-lg"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-4 text-xs font-semibold tracking-widest uppercase"
                style={{ backgroundColor: "#FFF8F0", color: "#C41E3A", border: "1px solid #C41E3A" }}
              >
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-6">
                32 Years of Joy,
                <br />
                <span style={{ color: "#C41E3A" }}>One Family&apos;s Mission</span>
              </h2>
              <p className="text-[#6b5a4e] text-lg leading-relaxed mb-4">
                In 1992, brothers <strong>Elie and Georges Diab</strong> opened Enfantillage in Mazra&apos;at Yashu&apos;, Lebanon — with a simple belief: every Lebanese child deserves access to the world&apos;s best toys.
              </p>
              <p className="text-[#6b5a4e] leading-relaxed mb-6">
                Three decades later, we&apos;re still here. Same family, same passion — now serving the children of our original customers. Through wars, recessions, and a global pandemic, Enfantillage has never closed its doors.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-[#C41E3A] hover:gap-3 transition-all"
              >
                Read the full story →
              </Link>
            </div>
            <div
              className="rounded-3xl p-10 flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: "#FFF8F0", border: "2px solid #e8d5c4" }}
            >
              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { stat: "1992", label: "Founded" },
                  { stat: "32+", label: "Years in business" },
                  { stat: "100+", label: "Toy brands" },
                  { stat: "2", label: "Founding brothers" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div
                      className="text-4xl font-extrabold mb-1"
                      style={{ color: "#C41E3A" }}
                    >
                      {item.stat}
                    </div>
                    <div className="text-sm text-[#6b5a4e]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHATSAPP CTA ── */}
        <section
          className="py-16 px-4"
          style={{ backgroundColor: "#1a0a00" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure what to buy?
            </h2>
            <p className="text-[#a08070] text-lg mb-8">
              Message us on WhatsApp! Our toy experts will help you find the perfect gift — just tell us the age and budget.
            </p>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl text-white transition-opacity hover:opacity-90"
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
