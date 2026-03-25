import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best LEGO Sets to Buy in Lebanon (2024 Guide) | Enfantillage",
  description:
    "Lebanon's LEGO experts share the best LEGO sets for every age and budget in 2024. From DUPLO for toddlers to Technic for teens — buy LEGO in Lebanon at Enfantillage.",
  keywords: [
    "best LEGO sets Lebanon 2024",
    "LEGO Lebanon",
    "buy LEGO Lebanon",
    "LEGO gift ideas Lebanon",
    "LEGO Technic Lebanon",
    "LEGO DUPLO Lebanon",
  ],
  openGraph: {
    title: "Best LEGO Sets in Lebanon 2024 - Enfantillage",
    description: "Top LEGO picks for every age, from Lebanon's LEGO experts since 1998.",
  },
};

const picks = [
  {
    age: "1–3 years",
    name: "LEGO DUPLO Classic Brick Box",
    pieces: "65",
    price: "$20–25",
    why: "Safe, durable, and perfect for tiny hands. The DUPLO Classic Brick Box is the ultimate starter set. Big bricks mean zero choking risk, and the open-ended play means kids can build anything they imagine.",
    emoji: "🧸",
  },
  {
    age: "4–7 years",
    name: "LEGO Creator 3-in-1 Dragon",
    pieces: "149",
    price: "$35–45",
    why: "Three builds in one box — a dragon, a fish, or a fantasy bird. Creator sets are incredible value and keep kids building for hours. This one is a consistent bestseller at Enfantillage.",
    emoji: "🐉",
  },
  {
    age: "7–10 years",
    name: "LEGO City Police Station",
    pieces: "668",
    price: "$70–90",
    why: "A complete police station with cars, motorcycles, and minifigures. At this age, kids love roleplay combined with building. The City theme is our most popular category year after year.",
    emoji: "👮",
  },
  {
    age: "10–14 years",
    name: "LEGO Technic Pullback Racer",
    pieces: "200+",
    price: "$40–55",
    why: "A great entry into Technic — gears, axles, and a working pullback motor. Once kids discover Technic, they're hooked. This is perfect for the transition from LEGO System to real engineering concepts.",
    emoji: "⚙️",
  },
  {
    age: "14+ / Adults",
    name: "LEGO Icons Flower Bouquet",
    pieces: "756",
    price: "$60–75",
    why: "Flowers that never wilt. This set has become one of our top gifts for teens and adults alike. It's meditative to build and beautiful to display. A perfect gift for mothers, sisters, or teachers.",
    emoji: "💐",
  },
];

export default function LegoSetsPost() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #E3000B 0%, #8B0000 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "#FFD700", color: "#1a0a00" }}
            >
              LEGO
            </Badge>
            <span className="text-red-200 text-sm">7 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Best LEGO Sets to Buy in Lebanon (2024 Guide)
          </h1>
          <p className="text-red-100 text-lg">
            From DUPLO for toddlers to Technic for teens — Lebanon&apos;s LEGO experts share our top picks for every age and budget.
          </p>
          <div className="flex items-center gap-3 mt-6 text-red-200 text-sm">
            <span>By Enfantillage Expert Team</span>
            <span>·</span>
            <span>November 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 px-4 max-w-3xl mx-auto prose-enfantillage">
        <div className="space-y-8">
          <p className="text-lg text-[#6b5a4e] leading-relaxed">
            We&apos;ve been selling LEGO in Lebanon since 1998 — which means we&apos;ve seen a lot of sets come and go. Every year, parents ask us: <em>&quot;What&apos;s the best LEGO set for my child?&quot;</em> The answer depends on age and budget, so here&apos;s our definitive 2024 guide.
          </p>

          <div
            className="p-5 rounded-2xl text-sm"
            style={{ backgroundColor: "#FFF0F0", border: "1px solid #E3000B30" }}
          >
            <p className="font-bold text-[#E3000B] mb-1">⚡ Quick note on LEGO in Lebanon</p>
            <p className="text-[#6b5a4e]">
              LEGO prices in Lebanon vary depending on the USD rate. All prices below are approximate USD equivalents. WhatsApp us at <a href="https://wa.me/9613720233" className="text-[#25D366] font-medium">+961 3 720 233</a> for current prices and stock.
            </p>
          </div>

          {picks.map((pick, i) => (
            <div
              key={pick.name}
              className="rounded-2xl border border-[#e8d5c4] overflow-hidden"
            >
              <div
                className="p-4 flex items-center gap-3"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                <span className="text-3xl">{pick.emoji}</span>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: "#C41E3A" }}
                  >
                    #{i + 1} · {pick.age}
                  </span>
                  <h2 className="text-xl font-bold text-[#1a0a00]">{pick.name}</h2>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex gap-4 mb-3 text-sm">
                  <span className="text-[#6b5a4e]">📦 {pick.pieces} pieces</span>
                  <span className="font-bold" style={{ color: "#D4A017" }}>
                    💰 ~{pick.price}
                  </span>
                </div>
                <p className="text-[#6b5a4e] leading-relaxed">{pick.why}</p>
              </div>
            </div>
          ))}

          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#1a0a00" }}
          >
            <h3 className="text-white font-bold text-xl mb-2">
              Looking for a specific LEGO set?
            </h3>
            <p className="text-[#a08070] text-sm mb-4">
              WhatsApp us the set number or theme and we&apos;ll check availability immediately.
            </p>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a LEGO set 🧱"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              💬 WhatsApp for LEGO Stock
            </a>
          </div>
        </div>
      </article>

      {/* Back to blog */}
      <div className="py-6 px-4 max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#C41E3A] font-semibold hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
