"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, UserCheck, Tag } from "lucide-react";

export default function Features({ theme }) {
  const isLight = theme === "light";

  const specs = [
    {
      icon: <ShieldCheck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "100% Authentic",
      desc: "Every JUUL device, pod, and accessory is sourced directly: no knockoffs, no mystery stock. You're getting the real thing, sealed and verified.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <Truck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Express UAE Delivery",
      desc: "For orders made before 9pm, your order can arrive today throughout Dubai and Sharjah. If outside those emirates then worry not as all other emirates receive orders 7 days a week (orders will next-day dispatch) with free delivery for any orders over AED 300.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <UserCheck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Age Verified (18+)",
      desc: "Buyers must be 18 or older. Orders placed by minors won't be handed over or refunded.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <Tag className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Best Price Guaranteed",
      desc: "Competitive pricing on all JUUL pods and devices. Orders above AED 300 ship free and below that, it's just AED 30. Minimum order is AED 85.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      isLight ? "bg-white" : "bg-[#050506]"
    }`}>
      {/* Background element (GPU Optimized) */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: isLight ? "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)" : "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isLight ? "text-blue-600" : "text-emerald-400"
          }`}>
            Why Shop With Us
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${isLight ? "text-zinc-950" : "text-white"}`}>
            Uncompromising Standards
          </h2>
          <p className={`font-light ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
            We process every single Juul vape pods order in UAE seriously - genuine merchandise, quick shipping, & live customer service, so what is that looks?
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-start min-h-[290px] ${
                isLight 
                  ? "bg-zinc-50 border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:bg-zinc-100/60" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              } ${spec.glow}`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                  isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-white/5 border-white/10"
                }`}>
                  {spec.icon}
                </div>
                <h3 className={`text-lg font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{spec.title}</h3>
                <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                  isLight ? "text-zinc-500" : "text-zinc-400"
                }`}>
                  {spec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
