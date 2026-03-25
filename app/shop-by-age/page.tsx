import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Shop Toys by Age - Lebanon Toy Store | Enfantillage",
  description:
    "Find the perfect toy for every age. Shop toys for babies 0-12 months, toddlers 1-3 years, preschoolers 3-6, kids 6-12, and teens 12+. Expert recommendations at Enfantillage Lebanon.",
  keywords: [
    "toys by age Lebanon",
    "baby toys Lebanon",
    "toddler toys Lebanon",
    "kids toys Lebanon",
    "LEGO Lebanon",
    "toy gift ideas Lebanon",
  ],
};

const ageBands = [
  {
    id: "0-12m",
    emoji: "🍼",
    label: "0 – 12 Months",
    tagline: "Sensory wonder begins",
    color: "#FF9BB5",
    bgColor: "#FFF0F5",
    description:
      "Babies learn through touch, sound, and sight. The best toys for this age stimulate the senses and help develop motor skills. Look for bright colours, gentle sounds, and safe textures.",
    picks: [
      "Soft rattles and squeaky toys",
      "High-contrast mobiles",
      "Sensory mats & play gyms",
      "Bath toys",
      "Teethers & chewing rings",
      "Musical light-up toys",
    ],
    brands: ["Chicco", "Fisher-Price", "Playgro", "Lamaze"],
    tip: "Always check for CE safety marks. Avoid small parts for under-12 months.",
  },
  {
    id: "1-3y",
    emoji: "🧸",
    label: "1 – 3 Years",
    tagline: "Curious explorers",
    color: "#FF6B35",
    bgColor: "#FFF5F0",
    description:
      "Toddlers are walking, talking, and discovering everything. This is the age for soft toys, push-and-pull toys, simple puzzles, and anything that lets them pretend and explore.",
    picks: [
      "Stacking & sorting sets",
      "Simple wooden puzzles",
      "Push & pull toys",
      "Soft plush animals",
      "Shape sorters",
      "First building blocks",
    ],
    brands: ["LEGO DUPLO", "Chicco", "Fisher-Price", "Melissa & Doug"],
    tip: "LEGO DUPLO is perfect from 18 months — big bricks, big creativity, zero choking risk.",
  },
  {
    id: "3-6y",
    emoji: "🎨",
    label: "3 – 6 Years",
    tagline: "Imagination takes flight",
    color: "#8B5CF6",
    bgColor: "#F5F0FF",
    description:
      "Preschoolers are bursting with creativity and love role-play. LEGO Classic, Playmobil, art sets, and imaginative playsets are ideal. This age loves \"pretend\" — kitchens, tools, dolls.",
    picks: [
      "LEGO Classic & Creator sets",
      "Playmobil playsets",
      "Art & craft kits",
      "Play kitchen & tools",
      "Barbie & doll sets",
      "Tricycles & ride-ons",
    ],
    brands: ["LEGO", "Playmobil", "Barbie", "Mattel", "Little Tikes"],
    tip: "At this age, sets with a story or role (doctor, chef, builder) spark hours of imaginative play.",
  },
  {
    id: "6-12y",
    emoji: "🚀",
    label: "6 – 12 Years",
    tagline: "Challenge accepted",
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    description:
      "School-age kids crave challenge, achievement, and social play. Advanced LEGO sets, science kits, strategy board games, and collectibles are hits. Motor skills are strong — complexity is welcome.",
    picks: [
      "LEGO Technic & Star Wars",
      "Science experiment kits",
      "Strategy board games",
      "Remote control cars",
      "Art & hobby sets",
      "Coding & robotics toys",
    ],
    brands: ["LEGO", "Playmobil", "Mattel Games", "Ravensburger"],
    tip: "LEGO sets with 200+ pieces are perfect. Age 8+ is the sweet spot for Technic and Ninjago.",
  },
  {
    id: "12plus",
    emoji: "🎮",
    label: "12+ Years",
    tagline: "Collector level",
    color: "#10B981",
    bgColor: "#F0FFF8",
    description:
      "Teens and older kids love collector items, tech toys, complex models, and hobby kits. Think LEGO Architecture, collector Barbies, advanced science kits, and premium board games.",
    picks: [
      "LEGO Architecture & Icons",
      "Collector Barbie sets",
      "Advanced Technic sets",
      "STEM robotics kits",
      "Premium board games",
      "Hobby model kits",
    ],
    brands: ["LEGO", "Barbie Signature", "Ravensburger", "Thames & Kosmos"],
    tip: "LEGO 18+ sets (e.g. Botanical Collection, Creator Expert) make incredible gifts for teens and adults.",
  },
];

export default function ShopByAgePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)" }}
      >
        <Badge
          className="mb-4 text-xs font-semibold tracking-widest uppercase"
          style={{ backgroundColor: "#D4A017", color: "#1a0a00" }}
        >
          Expert Recommendations
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Shop by Age
        </h1>
        <p className="text-xl text-red-100 max-w-2xl mx-auto">
          Every child is different — but age is a great starting point. Find toys that match your child&apos;s stage of development.
        </p>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {ageBands.map((band) => (
            <a
              key={band.id}
              href={`#${band.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors"
            >
              <span>{band.emoji}</span>
              <span>{band.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Age band sections */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {ageBands.map((band, index) => (
          <section
            key={band.id}
            id={band.id}
            className="scroll-mt-20"
          >
            <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              {/* Info card */}
              <div
                className={`rounded-3xl p-8 ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                style={{ backgroundColor: band.bgColor, border: `2px solid ${band.color}20` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{band.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1a0a00]">
                      {band.label}
                    </h2>
                    <p className="text-sm font-medium" style={{ color: band.color }}>
                      {band.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-[#6b5a4e] leading-relaxed mb-4">
                  {band.description}
                </p>
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ backgroundColor: `${band.color}15` }}
                >
                  <span className="font-semibold" style={{ color: band.color }}>
                    💡 Expert tip:
                  </span>{" "}
                  <span className="text-[#6b5a4e]">{band.tip}</span>
                </div>
              </div>

              {/* Picks + Brands */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="bg-white rounded-2xl border border-[#e8d5c4] p-6">
                  <h3 className="font-bold text-[#1a0a00] mb-4 flex items-center gap-2">
                    <span style={{ color: band.color }}>★</span>
                    Top Picks
                  </h3>
                  <ul className="space-y-2">
                    {band.picks.map((pick) => (
                      <li key={pick} className="flex items-start gap-2 text-sm text-[#6b5a4e]">
                        <span className="mt-0.5" style={{ color: band.color }}>✓</span>
                        {pick}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-[#e8d5c4] p-6">
                  <h3 className="font-bold text-[#1a0a00] mb-3 text-sm">
                    Featured Brands
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {band.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${band.color}15`, color: band.color }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section
        className="py-12 px-4 text-center"
        style={{ backgroundColor: "#1a0a00" }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Still not sure? We&apos;ll help you choose.
        </h2>
        <p className="text-[#a08070] mb-6">
          Message our toy experts on WhatsApp with the child&apos;s age and budget.
        </p>
        <a
          href="https://wa.me/9613720233?text=Hi! I need help choosing a toy 🎁"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          💬 Ask on WhatsApp
        </a>
      </section>
    </main>
  );
}
