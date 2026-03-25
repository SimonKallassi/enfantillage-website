import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Story - Enfantillage Lebanon Since 1992",
  description:
    "Founded by brothers Elie and Georges Diab in 1992 in Mazra'at Yashu', Enfantillage has been Lebanon's trusted toy store for over 32 years. Learn our story.",
  openGraph: {
    title: "Our Story - Enfantillage Lebanon Since 1992",
    description: "32 years of making Lebanese childhoods magical.",
  },
};

const timeline = [
  {
    year: "1992",
    title: "The Beginning",
    desc: "Brothers Elie and Georges Diab open Enfantillage in Mazra'at Yashu', Lebanon. Their dream: bring the world's best toys to Lebanese families.",
  },
  {
    year: "1998",
    title: "First Major Expansion",
    desc: "Enfantillage becomes an authorised LEGO retailer — one of the first in Lebanon. The store doubles in size.",
  },
  {
    year: "2006",
    title: "Surviving & Thriving",
    desc: "Through Lebanon's challenging periods, Enfantillage keeps its doors open. The community's trust becomes our strongest foundation.",
  },
  {
    year: "2012",
    title: "100+ Brands Milestone",
    desc: "We reach over 100 toy brands including Playmobil, Chicco, Mattel, Barbie, and Little Tikes. Lebanon's most complete toy destination.",
  },
  {
    year: "2020",
    title: "Adapting to Change",
    desc: "During the pandemic and Lebanon's economic crisis, we pivot to WhatsApp ordering and home delivery. Families count on us more than ever.",
  },
  {
    year: "2024",
    title: "32 Years Strong",
    desc: "We're now serving the children of our original customers. Three generations of Lebanese families, one toy store.",
  },
];

const values = [
  {
    emoji: "❤️",
    title: "Family First",
    desc: "We're a family business serving families. Every decision we make considers the joy of your children.",
  },
  {
    emoji: "🌟",
    title: "Quality Always",
    desc: "We only carry toys that meet our strict standards for safety, durability, and developmental value.",
  },
  {
    emoji: "🎓",
    title: "Expert Advice",
    desc: "Our staff aren't just sellers — they're toy experts who genuinely love what they do.",
  },
  {
    emoji: "🇱🇧",
    title: "Lebanese Roots",
    desc: "We're Lebanese, through and through. We've weathered every storm this country has faced, together.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🧸</div>
          <div className="absolute bottom-10 right-10 text-9xl">🎁</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <Badge
            className="mb-4 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "#D4A017", color: "#1a0a00" }}
          >
            Est. 1992
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            32 years of making Lebanese childhoods magical — one toy at a time.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a0a00] mb-6">
              Two Brothers,{" "}
              <span style={{ color: "#C41E3A" }}>One Dream</span>
            </h2>
            <p className="text-[#6b5a4e] text-lg leading-relaxed mb-4">
              In 1992, <strong>Elie and Georges Diab</strong> had a simple but powerful vision: give Lebanese children access to the same world-class toys that kids around the globe enjoyed.
            </p>
            <p className="text-[#6b5a4e] leading-relaxed mb-4">
              They opened Enfantillage (French for &quot;childishness&quot; or the pure joy of childhood) in <strong>Mazra&apos;at Yashu&apos;, Lebanon</strong> — and the community fell in love.
            </p>
            <p className="text-[#6b5a4e] leading-relaxed">
              What started as a modest toy shop became Lebanon&apos;s most trusted destination for quality children&apos;s toys. Today, we carry 100+ brands and have served hundreds of thousands of Lebanese families.
            </p>
          </div>
          <div
            className="rounded-3xl p-8 text-center"
            style={{ backgroundColor: "#FFF8F0", border: "2px solid #e8d5c4" }}
          >
            <div className="text-6xl mb-4">👨‍👨‍👦</div>
            <blockquote className="text-[#6b5a4e] italic text-lg leading-relaxed">
              &quot;We didn&apos;t open a toy store. We opened a place where Lebanese childhoods could be magical.&quot;
            </blockquote>
            <p className="mt-4 font-semibold text-[#C41E3A]">
              — Elie &amp; Georges Diab, Founders
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: "#C41E3A" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { stat: "1992", label: "Year Founded" },
            { stat: "32+", label: "Years in Business" },
            { stat: "100+", label: "Toy Brands" },
            { stat: "3", label: "Generations Served" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-[#D4A017] mb-1">
                {item.stat}
              </div>
              <div className="text-red-100 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a0a00] text-center mb-12">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e8d5c4] -translate-x-1/2" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#C41E3A] bg-white -translate-x-1/2 mt-1.5 z-10"
                  style={{ backgroundColor: "#C41E3A" }}
                />
                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 p-5 rounded-2xl border border-[#e8d5c4] bg-white shadow-sm ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#D4A017" }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#1a0a00] mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6b5a4e] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a0a00] text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-[#e8d5c4] text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="font-bold text-[#1a0a00] mb-2">{value.title}</h3>
                <p className="text-sm text-[#6b5a4e] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
