import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Toy Tips & Expert Advice Blog | Enfantillage Lebanon",
  description:
    "Lebanon's toy experts share buying guides, age-by-age recommendations, LEGO tips, and toy safety advice. Read the Enfantillage blog.",
  openGraph: {
    title: "Toy Tips Blog - Enfantillage Lebanon",
    description: "Expert toy advice for Lebanese families.",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "best-lego-sets-lebanon-2024",
    title: "Best LEGO Sets to Buy in Lebanon (2024 Guide)",
    excerpt:
      "From DUPLO for toddlers to Technic for teens — Lebanon's LEGO experts at Enfantillage share our top picks for every age and budget.",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "LEGO",
    emoji: "🧱",
    tags: ["LEGO", "Lebanon", "Gift Ideas", "2024"],
  },
  {
    slug: "toy-safety-guide-lebanon",
    title: "Toy Safety in Lebanon: What Every Parent Should Know",
    excerpt:
      "CE marks, age warnings, and what to look for when buying toys for babies and toddlers in Lebanon. A practical guide from 32 years of experience.",
    date: "2024-10-20",
    readTime: "5 min read",
    category: "Safety",
    emoji: "🛡️",
    tags: ["Safety", "Parents", "Babies", "Tips"],
  },
];

export default function BlogPage() {
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
          From Our Experts
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Toy Tips & Guides
        </h1>
        <p className="text-xl text-red-100 max-w-2xl mx-auto">
          32 years of toy expertise — shared with Lebanese families.
        </p>
      </section>

      {/* Posts */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-[#e8d5c4] overflow-hidden hover:shadow-lg hover:border-[#C41E3A] transition-all"
            >
              {/* Card header */}
              <div
                className="p-8 flex items-center justify-center text-6xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                {post.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#FFF0F0", color: "#C41E3A" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6b5a4e]">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-[#1a0a00] mb-3 group-hover:text-[#C41E3A] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-[#6b5a4e] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6b5a4e]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm font-semibold text-[#C41E3A] group-hover:gap-2 transition-all">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-12 px-4 text-center"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <h2 className="text-2xl font-bold text-[#1a0a00] mb-3">
          Want toy tips directly?
        </h2>
        <p className="text-[#6b5a4e] mb-6">
          WhatsApp us for personalised recommendations anytime.
        </p>
        <a
          href="https://wa.me/9613720233?text=Hi! I'd love some toy advice 🎁"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#25D366" }}
        >
          💬 Get Personalised Advice
        </a>
      </section>
    </main>
  );
}
