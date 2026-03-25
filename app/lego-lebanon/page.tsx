import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "LEGO Lebanon - Buy LEGO Sets in Lebanon | Enfantillage",
  description:
    "Buy LEGO sets in Lebanon at Enfantillage — Lebanon's authorised LEGO retailer since 1998. LEGO City, Technic, Star Wars, Ninjago, Creator, DUPLO & more. WhatsApp for availability.",
  keywords: [
    "LEGO Lebanon",
    "buy LEGO Lebanon",
    "LEGO store Lebanon",
    "LEGO Beirut",
    "LEGO City Lebanon",
    "LEGO Technic Lebanon",
    "LEGO Star Wars Lebanon",
    "LEGO DUPLO Lebanon",
    "LEGO Ninjago Lebanon",
    "LEGO sets Lebanon",
    "LEGO authorised retailer Lebanon",
  ],
  openGraph: {
    title: "LEGO Lebanon - Enfantillage Authorised LEGO Retailer",
    description: "Lebanon's LEGO destination since 1998. All themes, all ages.",
  },
};

const legoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Enfantillage - LEGO Lebanon",
  description: "Authorised LEGO retailer in Lebanon since 1998",
  url: "https://enfantillage.com.lb/lego-lebanon",
  telephone: "+9613720233",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mazra'at Yashu'",
    addressCountry: "LB",
  },
  brand: { "@type": "Brand", name: "LEGO" },
};

const legoThemes = [
  {
    emoji: "🏙️",
    name: "LEGO City",
    ages: "5–12",
    desc: "Police stations, fire trucks, airports — build the city of your dreams.",
    popular: ["Police Station", "Fire Rescue", "City Airport", "Mining Excavator"],
  },
  {
    emoji: "⚙️",
    name: "LEGO Technic",
    ages: "8–18+",
    desc: "Advanced mechanical sets with real-world engineering functions.",
    popular: ["Bugatti Chiron", "Liebherr Crane", "John Deere Tractor", "McLaren Senna"],
  },
  {
    emoji: "⭐",
    name: "LEGO Star Wars",
    ages: "7+",
    desc: "Iconic spaceships and scenes from the entire Star Wars saga.",
    popular: ["Millennium Falcon", "AT-AT", "Death Star", "X-Wing Starfighter"],
  },
  {
    emoji: "🐉",
    name: "LEGO Ninjago",
    ages: "6–12",
    desc: "Ninja action and adventure with epic mechs and temples.",
    popular: ["Dragon Temple", "Ninja Mech Battle", "City of Stiix", "Fire Fang"],
  },
  {
    emoji: "🌱",
    name: "LEGO DUPLO",
    ages: "1.5–5",
    desc: "Giant bricks, safe for toddlers. Big creativity, no choking hazard.",
    popular: ["Classic Brick Box", "Train Set", "Animal Brick Box", "Fire Station"],
  },
  {
    emoji: "🌸",
    name: "LEGO Icons",
    ages: "18+",
    desc: "Stunning collector sets — botanical collection, architecture, and more.",
    popular: ["Flower Bouquet", "Eiffel Tower", "Orchid", "Bonsai Tree"],
  },
  {
    emoji: "🏰",
    name: "LEGO Creator",
    ages: "7–12",
    desc: "3-in-1 sets that can be built three different ways.",
    popular: ["Dragon", "Medieval Castle", "Safari Wildlife", "Exotic Parrot"],
  },
  {
    emoji: "👧",
    name: "LEGO Friends",
    ages: "6–12",
    desc: "Heartlake City adventures for imaginative builders.",
    popular: ["Beach House", "Vet Clinic", "News Van", "Baking Competition"],
  },
];

const faqs = [
  {
    q: "Is Enfantillage an authorised LEGO retailer in Lebanon?",
    a: "Yes! Enfantillage has been an authorised LEGO retailer in Lebanon since 1998 — making us one of the country's longest-standing LEGO stockists.",
  },
  {
    q: "Which LEGO sets do you carry?",
    a: "We stock all major LEGO themes: City, Technic, Star Wars, Ninjago, DUPLO, Friends, Creator, Icons, and more. WhatsApp us for current availability of specific set numbers.",
  },
  {
    q: "Do you sell LEGO sets online in Lebanon?",
    a: "Contact us via WhatsApp at +961 3 720 233 to check availability and arrange delivery or pickup in Mazra'at Yashu'.",
  },
  {
    q: "What is the price range of LEGO sets in Lebanon?",
    a: "LEGO prices in Lebanon vary by set size and theme. Small sets start around $15–25, while large collector sets can reach $150–300+. Contact us for current pricing.",
  },
  {
    q: "Do you have LEGO Technic in Lebanon?",
    a: "Yes, we carry LEGO Technic sets in Lebanon. These are popular with ages 8+ and make excellent gifts. WhatsApp us for the latest stock.",
  },
];

export default function LegoLebanonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legoJsonLd) }}
      />
      <main>
        {/* Hero */}
        <section
          className="py-16 px-4 text-center overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #E3000B 0%, #8B0000 100%)" }}
        >
          <div className="absolute inset-0 opacity-5 text-[200px] flex items-center justify-center overflow-hidden">
            🧱
          </div>
          <div className="relative max-w-3xl mx-auto">
            <Badge
              className="mb-4 text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "#FFD700", color: "#1a0a00" }}
            >
              Authorised Retailer Since 1998
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              LEGO Lebanon
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Lebanon&apos;s trusted LEGO destination since 1998. All themes, all ages, expert advice.
            </p>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a LEGO set 🧱"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              💬 Check LEGO Availability
            </a>
          </div>
        </section>

        {/* Trust signals */}
        <section
          className="py-6 px-4"
          style={{ backgroundColor: "#FFD700" }}
        >
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-[#1a0a00] font-semibold text-sm">
            <span>🏆 Authorised LEGO Retailer</span>
            <span>📅 Since 1998</span>
            <span>🇱🇧 Lebanon&apos;s LEGO Experts</span>
            <span>💬 WhatsApp Support</span>
          </div>
        </section>

        {/* LEGO Themes */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-3">
              LEGO Themes in Lebanon
            </h2>
            <p className="text-[#6b5a4e] text-lg">
              From DUPLO for toddlers to collector sets for adults — we have it all
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {legoThemes.map((theme) => (
              <div
                key={theme.name}
                className="bg-white rounded-2xl border border-[#e8d5c4] p-5 hover:shadow-lg hover:border-[#E3000B] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{theme.emoji}</span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#FFF0F0", color: "#E3000B" }}
                  >
                    Ages {theme.ages}
                  </span>
                </div>
                <h3 className="font-bold text-[#1a0a00] mb-2">{theme.name}</h3>
                <p className="text-xs text-[#6b5a4e] mb-3 leading-relaxed">{theme.desc}</p>
                <div className="space-y-1">
                  {theme.popular.map((set) => (
                    <div key={set} className="text-xs text-[#6b5a4e] flex items-center gap-1">
                      <span className="text-[#E3000B]">›</span> {set}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why buy LEGO from us */}
        <section
          className="py-16 px-4"
          style={{ backgroundColor: "#FFF8F0" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a0a00] text-center mb-10">
              Why Buy LEGO from Enfantillage?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  emoji: "✅",
                  title: "100% Authentic",
                  desc: "Every LEGO set we sell is genuine and comes with full manufacturer warranty.",
                },
                {
                  emoji: "🧠",
                  title: "Expert Advice",
                  desc: "Our staff know LEGO inside out. We'll help you pick the right set for any age and budget.",
                },
                {
                  emoji: "🚀",
                  title: "Wide Selection",
                  desc: "From starter DUPLO to complex Technic, we carry Lebanon's widest LEGO range.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-2xl border border-[#e8d5c4] text-center"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-[#1a0a00] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6b5a4e]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a0a00] text-center mb-10">
            LEGO Lebanon — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-[#e8d5c4] p-6"
              >
                <h3 className="font-bold text-[#1a0a00] mb-2">{faq.q}</h3>
                <p className="text-[#6b5a4e] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-12 px-4 text-center"
          style={{ backgroundColor: "#E3000B" }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Looking for a specific LEGO set?
          </h2>
          <p className="text-red-100 mb-6">
            WhatsApp us the set number or theme — we&apos;ll check our stock right away.
          </p>
          <a
            href="https://wa.me/9613720233?text=Hi! I'm looking for a LEGO set 🧱"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:opacity-90 transition-opacity"
          >
            💬 WhatsApp for LEGO Stock
          </a>
        </section>
      </main>
    </>
  );
}
