"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Flame, Compass } from "lucide-react";

export default function AuthorisedDealer({ theme }) {
  const isLight = theme === "light";

  return (
    <section className={`py-24 transition-colors duration-500 border-t border-b relative overflow-hidden ${
      isLight ? "bg-[#FCFCFC] border-zinc-200 text-zinc-950" : "bg-[#09090A] border-white/5 text-white"
    }`}>
      {/* Background radial glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] pointer-events-none rounded-full ${
        isLight ? "bg-amber-500/[0.015]" : "bg-amber-500/[0.02]"
      }`} />

      {/* CSS Animation for Rotating Dashed Rings */}
      <style>{`
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ring-clockwise {
          animation: rotateClockwise 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Row */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b ${
          isLight ? "border-zinc-200" : "border-white/10"
        }`}>
          <div className="space-y-3 max-w-2xl text-left">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-[0.25em] ${
              isLight ? "bg-amber-50 border-amber-200 text-amber-600" : "bg-amber-500/10 border-amber-500/30 text-amber-400"
            }`}>
              <Award className="w-3.5 h-3.5" />
              Official Verification
            </span>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-none ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              Official & Authorised <br />
              <span className={isLight ? "text-amber-600" : "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"}>
                JUUL Partner UAE
              </span>
            </h2>
            <p className={`text-xs sm:text-sm ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              We strictly enforce quality controls, import compliance, and anti-counterfeiting measures. Learn more about our direct import protocols and official status.
            </p>
          </div>

          {/* Gold Shield Badge on Right */}
          <div className="flex items-center justify-center relative w-[180px] h-[180px] flex-shrink-0 mx-auto md:mx-0">
            <div className={`absolute w-[210px] h-[210px] rounded-full border border-dashed ring-clockwise pointer-events-none ${
              isLight ? "border-amber-500/25" : "border-amber-500/10"
            }`} />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-[130px] h-[154px] flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-10"
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 118" fill="none">
                <defs>
                  <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1C2333" />
                    <stop offset="100%" stopColor="#0B0F19" />
                  </linearGradient>
                  <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
                <path d="M50 3 L92 18 V55 C92 78.5 74 97.5 50 112 C26 97.5 8 78.5 8 55 V18 L50 3 Z" fill="url(#shieldBg)" stroke="url(#goldBorder)" strokeWidth="2.5" />
                <path d="M50 9 L86 22 V53 C86 73 71 89.5 50 102 C29 89.5 14 73 14 53 V22 L50 9 Z" stroke="url(#goldBorder)" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 3" />
              </svg>
              <div className="relative z-10 flex flex-col items-center text-center p-2">
                <Award className="w-6 h-6 text-amber-400 mb-1" />
                <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-amber-400">OFFICIAL</span>
                <span className="text-[9.5px] font-black uppercase tracking-[0.1em] text-white">JUUL</span>
                <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-amber-400">GUARANTEE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-Column Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-left">
          
          {/* Column 1: Sourcing Integrity */}
          <div className={`space-y-4 border-l pl-6 ${
            isLight ? "border-amber-500/25" : "border-amber-500/10"
          }`}>
            <h3 className={`text-xs font-black uppercase tracking-wider flex items-center gap-2 ${
              isLight ? "text-amber-600" : "text-amber-400"
            }`}>
              <ShieldCheck className="w-4 h-4" />
              1. Sourcing Integrity & Compliance
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${
              isLight ? "text-zinc-500" : "text-zinc-400"
            }`}>
              When it comes to electronic nicotine delivery systems, quality and safety are of paramount importance. As a trusted premium supplier in the region, we are committed to providing only 100% authentic, factory-sealed JUUL devices and accessories. We have built an uncompromising supply network that sources products directly from official, authorized distribution hubs in the United States and the United Kingdom. This direct channel bypasses third-party middle-agents, ensuring that every product arrives in its original factory packaging. In an industry where counterfeits and clones are unfortunately common, our structured supply chain provides peace of mind for adult consumers who value consistency, purity, and safety. Every batch we import undergoes double-layer authentication checks. When shipments arrive at our warehouse facilities, batch numbers, holographic stamps, and security seals are systematically logged and checked against manufacturer databases. Furthermore, we utilize climate-controlled logistics from departure to delivery, protecting sensitive e-liquids from leaking or degrading due to extreme temperatures.
            </p>
          </div>

          {/* Column 2: JUUL 1 */}
          <div className={`space-y-4 border-l pl-6 ${
            isLight ? "border-amber-500/25" : "border-amber-500/10"
          }`}>
            <h3 className={`text-xs font-black uppercase tracking-wider flex items-center gap-2 ${
              isLight ? "text-amber-600" : "text-amber-400"
            }`}>
              <Compass className="w-4 h-4" />
              2. JUUL 1 Classic (US Import)
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${
              isLight ? "text-zinc-500" : "text-zinc-400"
            }`}>
              Our JUUL 1 collection caters directly to adult smokers seeking traditional nicotine salt formulations under American manufacturing standards. Sourced from authorized US distributors, these classic devices and pods are celebrated for their simple click-and-play fitment, satisfying throat hit, and robust flavor delivery. JUUL 1 pods feature strengths of 3.0% and 5.0% nicotine by weight, utilizing a proprietary formulation designed to mimic the sensory experience of a traditional cigarette. We guarantee that all imported JUUL 1 starter kits, basic kits, and classic pod flavor packs (such as Virginia Tobacco and Cool Mint) are authentic imports in original packaging. We maintain strict stock control to ensure you receive fresh batches with optimal e-liquid quality, preventing the oxidation and leakage common in counterfeit alternatives. Since its global introduction, the JUUL 1 platform has remained the gold standard for simple, reliable, and portable nicotine delivery.
            </p>
          </div>

          {/* Column 3: JUUL 2 */}
          <div className={`space-y-4 border-l pl-6 ${
            isLight ? "border-amber-500/25" : "border-amber-500/10"
          }`}>
            <h3 className={`text-xs font-black uppercase tracking-wider flex items-center gap-2 ${
              isLight ? "text-amber-600" : "text-amber-400"
            }`}>
              <Flame className="w-4 h-4" />
              3. JUUL 2 Smart (UK Import)
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${
              isLight ? "text-zinc-500" : "text-zinc-400"
            }`}>
              The next-generation JUUL 2 system represents a significant leap forward in smart vaping technology, imported exclusively from certified channels in the United Kingdom. Designed to comply fully with the strict European Tobacco Products Directive (TPD) regulations, JUUL 2 pods feature a maximum nicotine strength of 20mg/ml (typically formatted as 18mg/ml or 1.8% nicotine by volume). These pods undergo rigorous testing overseen by the Medicines and Healthcare products Regulatory Agency (MHRA) to guarantee ingredient purity and compliance. The JUUL 2 device introduces intelligent features, including smart temperature control that prevents dry hits, bluetooth pairing with the official JUUL companion app, and secure child-lock features. Each pod is equipped with an integrated security chip that verifies authenticity instantly when connected to the device, preventing usage of counterfeit or clone pods.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
