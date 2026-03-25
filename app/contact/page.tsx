import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact Enfantillage - Lebanon Toy Store | WhatsApp & Phone",
  description:
    "Contact Enfantillage Lebanon's toy store. Visit us in Mazra'at Yashu', call +961 3 720 233, or WhatsApp for toy recommendations and availability.",
  openGraph: {
    title: "Contact Enfantillage Lebanon",
    description: "Get in touch — we're here to help you find the perfect toy.",
  },
};

export default function ContactPage() {
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
          We&apos;re Here to Help
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-red-100 max-w-xl mx-auto">
          Have a question? Need a toy recommendation? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a0a00]">
              Contact Information
            </h2>

            {/* WhatsApp — primary CTA */}
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl border-2 border-[#25D366] bg-[#f0fff4] hover:bg-[#dcfce7] transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1a0a00] group-hover:text-[#25D366] transition-colors">
                  WhatsApp (Fastest)
                </p>
                <p className="text-[#6b5a4e] text-sm">+961 3 720 233</p>
                <p className="text-xs text-[#25D366] mt-1">Tap to chat now →</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+9613720233"
              className="flex items-start gap-4 p-5 rounded-2xl border border-[#e8d5c4] bg-white hover:border-[#C41E3A] hover:shadow-sm transition-all group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                📞
              </div>
              <div>
                <p className="font-bold text-[#1a0a00]">Phone</p>
                <p className="text-[#6b5a4e] text-sm">+961 3 720 233</p>
                <p className="text-xs text-[#C41E3A] mt-1 group-hover:underline">Tap to call →</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#e8d5c4] bg-white">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                📍
              </div>
              <div>
                <p className="font-bold text-[#1a0a00]">Store Location</p>
                <p className="text-[#6b5a4e] text-sm">Mazra&apos;at Yashu&apos;</p>
                <p className="text-[#6b5a4e] text-sm">Lebanon</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#e8d5c4] bg-white">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                🕐
              </div>
              <div>
                <p className="font-bold text-[#1a0a00]">Opening Hours</p>
                <div className="text-sm text-[#6b5a4e] space-y-0.5 mt-1">
                  <p>Monday – Friday: 9:00 AM – 8:00 PM</p>
                  <p>Saturday: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-3xl p-8 border border-[#e8d5c4]"
            style={{ backgroundColor: "#FFF8F0" }}
          >
            <h2 className="text-2xl font-bold text-[#1a0a00] mb-6">
              Send Us a Message
            </h2>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a0a00] mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Lara Khalil"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e8d5c4] bg-white text-[#1a0a00] placeholder:text-[#b0a090] focus:outline-none focus:border-[#C41E3A] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1a0a00] mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+961 ..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e8d5c4] bg-white text-[#1a0a00] placeholder:text-[#b0a090] focus:outline-none focus:border-[#C41E3A] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a0a00] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="e.g. I'm looking for a LEGO Technic set for a 10-year-old, budget around $70..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e8d5c4] bg-white text-[#1a0a00] placeholder:text-[#b0a090] focus:outline-none focus:border-[#C41E3A] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C41E3A" }}
              >
                Send Message
              </button>
              <p className="text-xs text-[#6b5a4e] text-center">
                Or for a faster response, use{" "}
                <a
                  href="https://wa.me/9613720233"
                  className="text-[#25D366] font-medium hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
