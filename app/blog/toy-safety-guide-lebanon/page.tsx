import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Toy Safety in Lebanon: What Every Parent Should Know | Enfantillage",
  description:
    "CE marks, age warnings, and what to look for when buying toys for babies and toddlers in Lebanon. A practical toy safety guide from Enfantillage's 32 years of experience.",
  keywords: [
    "toy safety Lebanon",
    "safe toys Lebanon",
    "CE mark toys Lebanon",
    "baby toys safe Lebanon",
    "toddler toys safe Lebanon",
  ],
  openGraph: {
    title: "Toy Safety Guide for Lebanese Parents - Enfantillage",
    description: "32 years of experience — practical toy safety advice for Lebanon.",
  },
};

const safetyTips = [
  {
    icon: "🏷️",
    title: "Check for CE Marks",
    desc: "CE (Conformité Européenne) marking means a toy meets European safety standards — the global benchmark. Always check for this on the packaging. At Enfantillage, every toy we sell carries appropriate safety certifications.",
  },
  {
    icon: "📏",
    title: "Respect Age Recommendations",
    desc: "Age recommendations aren't just about cognitive complexity — they're about physical safety. \"Not suitable for under 3\" means small parts that can be swallowed. Never ignore these warnings.",
  },
  {
    icon: "🔍",
    title: "Check for Small Parts",
    desc: "For children under 3, anything that can fit through a toilet roll tube is a choking hazard. LEGO DUPLO, Chicco, and Melissa & Doug are specifically designed with large pieces for this age.",
  },
  {
    icon: "🧲",
    title: "Watch Out for Magnets",
    desc: "Strong magnets in toys can be dangerous if swallowed. Check that all magnetic toys are securely enclosed. If swallowed, two magnets can connect through intestinal walls — a medical emergency.",
  },
  {
    icon: "🔋",
    title: "Secure Battery Compartments",
    desc: "Button batteries are a major hazard for young children. Ensure battery compartments require a screwdriver to open. This is standard on all quality toys at our store.",
  },
  {
    icon: "🎨",
    title: "Non-Toxic Materials",
    desc: "For children who mouth toys, ensure they're made from food-grade silicone or non-toxic plastics. All Chicco and Fisher-Price products in our range use BPA-free, non-toxic materials.",
  },
];

export default function ToySafetyPost() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "#D4A017", color: "#1a0a00" }}
            >
              Safety
            </Badge>
            <span className="text-red-200 text-sm">5 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Toy Safety in Lebanon: What Every Parent Should Know
          </h1>
          <p className="text-red-100 text-lg">
            CE marks, age warnings, and what to look for when buying toys for babies and toddlers. Practical advice from 32 years of experience.
          </p>
          <div className="flex items-center gap-3 mt-6 text-red-200 text-sm">
            <span>By Enfantillage Expert Team</span>
            <span>·</span>
            <span>October 20, 2024</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 px-4 max-w-3xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-[#6b5a4e] leading-relaxed">
            In 32 years of selling toys in Lebanon, the question we get asked most by new parents isn&apos;t &quot;what&apos;s popular?&quot; — it&apos;s &quot;is it safe?&quot; That instinct is exactly right. Here&apos;s everything you need to know.
          </p>

          <h2 className="text-2xl font-bold text-[#1a0a00]">
            The 6 Essential Safety Checks
          </h2>

          <div className="space-y-4">
            {safetyTips.map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 p-5 rounded-2xl bg-white border border-[#e8d5c4]"
              >
                <span className="text-3xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-[#1a0a00] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[#6b5a4e] leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "#FFF8F0", border: "1px solid #e8d5c4" }}
          >
            <h3 className="font-bold text-[#1a0a00] text-xl mb-3">
              🛡️ The Enfantillage Guarantee
            </h3>
            <p className="text-[#6b5a4e] leading-relaxed">
              Every toy at Enfantillage is hand-selected by our team. We only carry brands we trust — LEGO, Chicco, Playmobil, Fisher-Price, Mattel, and others who meet or exceed international safety standards. We&apos;ve never carried counterfeit goods. Your child&apos;s safety is our first priority.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a0a00]">
            Age-by-Age Quick Guide
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#C41E3A" }}>
                  <th className="text-left p-3 text-white font-semibold rounded-tl-xl">Age</th>
                  <th className="text-left p-3 text-white font-semibold">Key Risks</th>
                  <th className="text-left p-3 text-white font-semibold rounded-tr-xl">Safe Brands</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: "0–12 months", risks: "Swallowing, suffocation", brands: "Chicco, Fisher-Price, Lamaze" },
                  { age: "1–3 years", risks: "Choking, magnets", brands: "DUPLO, Melissa & Doug" },
                  { age: "3–6 years", risks: "Sharp edges", brands: "LEGO (5+), Playmobil (3+)" },
                  { age: "6–12 years", risks: "Projectiles, pinch points", brands: "LEGO City/Technic, Mattel" },
                ].map((row, i) => (
                  <tr
                    key={row.age}
                    className="border-b border-[#e8d5c4]"
                    style={{ backgroundColor: i % 2 === 0 ? "#FFF8F0" : "white" }}
                  >
                    <td className="p-3 font-medium text-[#1a0a00]">{row.age}</td>
                    <td className="p-3 text-[#6b5a4e]">{row.risks}</td>
                    <td className="p-3 text-[#6b5a4e]">{row.brands}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#1a0a00" }}
          >
            <h3 className="text-white font-bold text-xl mb-2">
              Have a safety question about a specific toy?
            </h3>
            <p className="text-[#a08070] text-sm mb-4">
              Our team can advise on any toy&apos;s safety certifications. Just ask.
            </p>
            <a
              href="https://wa.me/9613720233?text=Hi! I have a question about toy safety 🛡️"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              💬 Ask About Toy Safety
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
