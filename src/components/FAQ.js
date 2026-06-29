"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ theme }) {
  const isLight = theme === "light";
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is JUUL?",
      a: "JUUL is a compact e-cigarette (a pod system) that uses pre-filled pods with nicotine salt. There are no buttons—just insert a pod and inhale. It’s popular with adult smokers looking for a cleaner tobacco alternative without the mess of refilling."
    },
    {
      q: "What’s in the JUUL 1 starter kit?",
      a: (
        <div className="space-y-2">
          <p>A typical JUUL starter kit UAE includes:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>JUUL 1 device</li>
            <li>Magnetic USB charger</li>
            <li>Quick start guide</li>
          </ul>
          <p className="text-[11px] opacity-80 mt-1">(Kit contents can vary by batch, but we’ll show exactly what’s included on the product page.)</p>
        </div>
      )
    },
    {
      q: "Which pods work with the JUUL 1 device?",
      a: (
        <div className="space-y-1.5">
          <p>JUUL 1 works with JUUL 1 pods (not JUUL 2 pods).</p>
          <p>For JUUL 1, you’ll usually see 3% (30mg) and 5% (50mg) nicotine strengths, with core flavors like Menthol and Virginia Tobacco in 4‑pod packs.</p>
        </div>
      )
    },
    {
      q: "Are JUUL pods refillable?",
      a: "Standard JUUL pods are meant to be used as-is (closed pods). Some people try DIY refills, but it can cause leaks and inconsistent flavor delivery. If you want a clean experience, it’s better to use proper replacement pods from an authentic source."
    },
    {
      q: "How long does a JUUL pod last?",
      a: "It depends on your draw length and how often you vape, but most users get roughly 200 puffs per pod (give or take). If you’re a light user, one pod can last a full day. If you chain-vape, expect less."
    },
    {
      q: "How do I spot fake JUUL products in the UAE?",
      a: (
        <div className="space-y-2">
          <p>Simple rule: if the packaging looks off, the taste feels weird, or the seal isn’t right—don’t risk it.</p>
          <p>Our Juul vape pods Shop in UAE sells authentic stock only: factory-sealed boxes, verified batches, and consistent pod performance. If you ever want help checking your product, send us photos and we’ll guide you.</p>
        </div>
      )
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 border-b transition-colors duration-500 ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      <div className="max-w-3xl mx-auto px-6 text-left">
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center">
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isLight ? "text-zinc-400" : "text-zinc-500"
          }`}>
            Got Questions?
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isLight ? "text-zinc-950" : "text-white"
          }`}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? isLight
                      ? "bg-zinc-50 border-zinc-300"
                      : "bg-white/[0.02] border-white/20"
                    : isLight
                    ? "bg-white border-zinc-200 hover:border-zinc-300"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
                >
                  <span className={`text-sm sm:text-base font-bold ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full border ${
                    isLight ? "border-zinc-200" : "border-white/10"
                  }`}>
                    {isOpen ? (
                      <Minus className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-350"}`} />
                    ) : (
                      <Plus className={`w-3.5 h-3.5 ${isLight ? "text-zinc-750" : "text-white"}`} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 text-xs sm:text-sm font-light leading-relaxed ${
                        isLight ? "text-zinc-500 border-t border-zinc-200 pt-4" : "text-zinc-400 border-t border-white/5 pt-4"
                      }`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
