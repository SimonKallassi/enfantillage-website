"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type AgeFilter = "all" | "0-12m" | "1-3y" | "3-6y" | "6-12y" | "12plus";
type BudgetFilter = "all" | "under30" | "30-60" | "60-100" | "over100";

interface GiftIdea {
  name: string;
  age: AgeFilter;
  budget: BudgetFilter;
  price: string;
  brand: string;
  desc: string;
  emoji: string;
  tags: string[];
}

const gifts: GiftIdea[] = [
  {
    name: "LEGO DUPLO Classic Brick Box",
    age: "1-3y",
    budget: "under30",
    price: "$20–25",
    brand: "LEGO DUPLO",
    desc: "The ultimate first LEGO set. 65 giant bricks, safe for toddlers.",
    emoji: "🧱",
    tags: ["Best Seller", "Safe for Toddlers"],
  },
  {
    name: "Chicco Baby Senses Gym",
    age: "0-12m",
    budget: "30-60",
    price: "$35–45",
    brand: "Chicco",
    desc: "Soft play mat with hanging sensory toys, lights, and music.",
    emoji: "🍼",
    tags: ["Newborn Favourite"],
  },
  {
    name: "Playmobil City Life Hospital",
    age: "3-6y",
    budget: "60-100",
    price: "$65–80",
    brand: "Playmobil",
    desc: "A complete hospital playset — perfect for imaginative play.",
    emoji: "🏥",
    tags: ["Role Play", "Educational"],
  },
  {
    name: "LEGO Creator Dragon",
    age: "6-12y",
    budget: "30-60",
    price: "$35–45",
    brand: "LEGO Creator",
    desc: "3-in-1 set: build a dragon, fish, or fantasy bird. Ages 6+.",
    emoji: "🐉",
    tags: ["3-in-1", "Popular"],
  },
  {
    name: "LEGO Technic Bugatti Chiron",
    age: "12plus",
    budget: "over100",
    price: "$200–280",
    brand: "LEGO Technic",
    desc: "Iconic 3,599-piece supercar replica. For serious builders.",
    emoji: "🏎️",
    tags: ["Collector", "Advanced"],
  },
  {
    name: "Barbie Dreamhouse",
    age: "3-6y",
    budget: "over100",
    price: "$120–150",
    brand: "Barbie",
    desc: "3-story dollhouse with pool, slide, and elevator. Timeless classic.",
    emoji: "🏠",
    tags: ["Classic", "Best Gift"],
  },
  {
    name: "Fisher-Price Laugh & Learn Puppy",
    age: "0-12m",
    budget: "under30",
    price: "$25–30",
    brand: "Fisher-Price",
    desc: "Interactive plush puppy with 75+ songs and sounds for babies.",
    emoji: "🐶",
    tags: ["Interactive", "Under 1 Year"],
  },
  {
    name: "LEGO City Police Station",
    age: "6-12y",
    budget: "60-100",
    price: "$70–90",
    brand: "LEGO City",
    desc: "668-piece police headquarters with vehicles and minifigures.",
    emoji: "👮",
    tags: ["Large Set", "Popular"],
  },
  {
    name: "Melissa & Doug Wooden Puzzle Set",
    age: "1-3y",
    budget: "under30",
    price: "$18–25",
    brand: "Melissa & Doug",
    desc: "6 chunky wooden puzzles covering vehicles, animals, and more.",
    emoji: "🧩",
    tags: ["Educational", "Wooden"],
  },
  {
    name: "LEGO Botanical Flower Bouquet",
    age: "12plus",
    budget: "60-100",
    price: "$60–75",
    brand: "LEGO Icons",
    desc: "756-piece flower bouquet that never wilts. Perfect for adults.",
    emoji: "💐",
    tags: ["Adults", "Home Decor"],
  },
  {
    name: "Little Tikes Cozy Coupe",
    age: "1-3y",
    budget: "60-100",
    price: "$70–85",
    brand: "Little Tikes",
    desc: "The iconic red & yellow ride-on car. A childhood staple since 1979.",
    emoji: "🚗",
    tags: ["Iconic", "Outdoor"],
  },
  {
    name: "LEGO Ninjago Fire Dragon",
    age: "6-12y",
    budget: "30-60",
    price: "$40–55",
    brand: "LEGO Ninjago",
    desc: "Epic dragon build with Ninja minifigures. Ages 7+.",
    emoji: "🔥",
    tags: ["Action", "Popular"],
  },
];

const ageOptions: { value: AgeFilter; label: string; emoji: string }[] = [
  { value: "all", label: "All Ages", emoji: "👧" },
  { value: "0-12m", label: "0–12 Months", emoji: "🍼" },
  { value: "1-3y", label: "1–3 Years", emoji: "🧸" },
  { value: "3-6y", label: "3–6 Years", emoji: "🎨" },
  { value: "6-12y", label: "6–12 Years", emoji: "🚀" },
  { value: "12plus", label: "12+ Years", emoji: "🎮" },
];

const budgetOptions: { value: BudgetFilter; label: string }[] = [
  { value: "all", label: "Any Budget" },
  { value: "under30", label: "Under $30" },
  { value: "30-60", label: "$30–60" },
  { value: "60-100", label: "$60–100" },
  { value: "over100", label: "$100+" },
];

export default function GiftGuidePage() {
  const [ageFilter, setAgeFilter] = useState<AgeFilter>("all");
  const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>("all");

  const filtered = gifts.filter((g) => {
    const ageMatch = ageFilter === "all" || g.age === ageFilter;
    const budgetMatch = budgetFilter === "all" || g.budget === budgetFilter;
    return ageMatch && budgetMatch;
  });

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
          Expert Picks
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          🎁 Gift Guide
        </h1>
        <p className="text-xl text-red-100 max-w-2xl mx-auto">
          Filter by age and budget to find the perfect toy gift — curated by Lebanon&apos;s toy experts.
        </p>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-[#e8d5c4] sticky top-16 z-30">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Age filter */}
          <div>
            <p className="text-xs font-semibold text-[#6b5a4e] uppercase tracking-wider mb-2">
              Filter by Age
            </p>
            <div className="flex flex-wrap gap-2">
              {ageOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAgeFilter(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    ageFilter === opt.value
                      ? "text-white shadow-sm"
                      : "bg-[#FFF8F0] text-[#6b5a4e] hover:bg-[#f5e6d3]"
                  }`}
                  style={
                    ageFilter === opt.value
                      ? { backgroundColor: "#C41E3A" }
                      : {}
                  }
                >
                  {opt.emoji} {opt.label}
                </button>
              ))}
            </div>
          </div>
          {/* Budget filter */}
          <div>
            <p className="text-xs font-semibold text-[#6b5a4e] uppercase tracking-wider mb-2">
              Filter by Budget
            </p>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setBudgetFilter(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    budgetFilter === opt.value
                      ? "text-white shadow-sm"
                      : "bg-[#FFF8F0] text-[#6b5a4e] hover:bg-[#f5e6d3]"
                  }`}
                  style={
                    budgetFilter === opt.value
                      ? { backgroundColor: "#D4A017", color: "#1a0a00" }
                      : {}
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <p className="text-sm text-[#6b5a4e] mb-6">
          Showing <strong>{filtered.length}</strong> gift idea{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">😔</div>
            <h3 className="text-xl font-bold text-[#1a0a00] mb-2">No results found</h3>
            <p className="text-[#6b5a4e] mb-4">Try different filters, or ask us directly!</p>
            <a
              href="https://wa.me/9613720233?text=Hi! I need a gift recommendation 🎁"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              💬 Ask on WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((gift) => (
              <div
                key={gift.name}
                className="bg-white rounded-2xl border border-[#e8d5c4] p-5 hover:shadow-lg hover:border-[#C41E3A] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{gift.emoji}</span>
                  <div className="text-right">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#D4A017" }}
                    >
                      {gift.price}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-[#1a0a00] mb-1">{gift.name}</h3>
                <p className="text-xs text-[#C41E3A] font-medium mb-2">{gift.brand}</p>
                <p className="text-sm text-[#6b5a4e] mb-3 leading-relaxed">{gift.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {gift.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#FFF8F0] text-[#6b5a4e] border border-[#e8d5c4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="py-12 px-4 text-center"
        style={{ backgroundColor: "#1a0a00" }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Can&apos;t decide? We&apos;ll pick for you.
        </h2>
        <p className="text-[#a08070] mb-6">
          Tell us: age, interests, and budget — our experts will recommend the perfect gift.
        </p>
        <a
          href="https://wa.me/9613720233?text=Hi! I need a personalised gift recommendation 🎁"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#25D366" }}
        >
          💬 Get a Personalised Recommendation
        </a>
      </section>
    </main>
  );
}
