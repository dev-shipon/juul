"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Flame, Lock, Compass } from "lucide-react";

export default function AuthorisedDealer({ theme }) {
  const isLight = theme === "light";

  return (
    <section className={`py-28 transition-colors duration-500 border-b relative overflow-hidden ${
      isLight ? "bg-[#F9FAFB] border-zinc-200" : "bg-[#07090E] border-white/5"
    }`}>
      {/* CSS Animation for Rotating Dashed Rings */}
      <style>{`
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .ring-clockwise {
          animation: rotateClockwise 25s linear infinite;
        }
        .ring-counter {
          animation: rotateCounterClockwise 18s linear infinite;
        }
      `}</style>

      {/* Futuristic Background Grids & Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-amber-500/[0.02] dark:bg-amber-500/[0.012] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Split Layout (Title Left, Shield Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          
          {/* Top Left: Heading & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 space-y-4 text-left"
          >
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-[0.25em] ${
              isLight ? "bg-amber-50 border-amber-200 text-amber-600" : "bg-amber-950/20 border-amber-500/20 text-amber-400"
            }`}>
              <Award className="w-3.5 h-3.5" />
              Official Verification
            </span>
            
            <h2 className={`text-4xl sm:text-6xl font-black tracking-tight leading-none ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              Official & Authorised <br />
              <span className={isLight ? "text-amber-600" : "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"}>JUUL Partner UAE</span>
            </h2>
            <p className={`text-sm max-w-2xl leading-relaxed ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              Every product in this Juul vape pods Shop in UAE is sourced through verified channels with sealed packaging, batch-checked, and genuine. No grey-market stock, no refurbished equipment, nothing in question, if it's not real it's not coming through us.
            </p>
          </motion.div>

          {/* Top Right: Gold Shield Badge Centered Wrapper */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end min-h-[280px]">
            
            {/* Outer motion wrapper that floats the whole assembly together to prevent rings from drifting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.6 }
              }}
              className="relative w-[280px] h-[280px] flex items-center justify-center lg:justify-end"
            >
              {/* Concentric Rotating Gold Dashed Rings in background */}
              <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dashed border-amber-500/20 ring-clockwise pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-auto lg:translate-x-0 lg:right-[15px]" />
              <div className="absolute w-[210px] h-[210px] rounded-full border border-dashed border-amber-500/10 ring-counter pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-auto lg:translate-x-0 lg:right-[30px]" />
              
              {/* Premium Gold Shield Badge */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0.5 }}
                className="relative w-[150px] h-[176px] sm:w-[170px] sm:h-[200px] flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] z-10 cursor-pointer mr-0 lg:mr-[50px]"
              >
                {/* SVG Shield Path with Gold Gradient and Dark Slate Fill */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 118" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  {/* Outer gold border path */}
                  <path 
                    d="M50 3 L92 18 V55 C92 78.5 74 97.5 50 112 C26 97.5 8 78.5 8 55 V18 L50 3 Z" 
                    fill="url(#shieldBg)" 
                    stroke="url(#goldBorder)" 
                    strokeWidth="2.5"
                  />
                  {/* Inner gold accent dashed path */}
                  <path 
                    d="M50 9 L86 22 V53 C86 73 71 89.5 50 102 C29 89.5 14 73 14 53 V22 L50 9 Z" 
                    stroke="url(#goldBorder)" 
                    strokeWidth="0.8" 
                    strokeOpacity="0.5" 
                    strokeDasharray="3 3"
                  />
                </svg>

                {/* Shield Content */}
                <div className="relative z-10 flex flex-col items-center text-center p-3">
                  <Award className="w-8 h-8 text-amber-400 mb-1.5 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)] animate-pulse" />
                  
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.22em] text-amber-400 leading-none">
                    OFFICIAL
                  </span>
                  <span className="text-[10px] sm:text-[11.5px] font-black uppercase tracking-[0.12em] text-white mt-1 leading-none">
                    JUUL
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.22em] text-amber-400 mt-1 leading-none">
                    GUARANTEE
                  </span>
                  
                  <div className="w-7 h-px bg-amber-500/35 my-1.5" />
                  
                  <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-widest text-zinc-400 uppercase">
                    ESTD 2021
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className={`w-full h-px mb-16 ${
          isLight ? "bg-zinc-200" : "bg-white/10"
        }`} />

        {/* Bottom Section: Cards Presentation Container (Full Width Stack) */}
        <div className="w-full flex flex-col gap-6 text-left">
          
          {/* Top Single Full-Width Card (Sourcing Integrity) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -6 }}
            className={`p-6 sm:p-8 rounded-[24px] border transition-all duration-300 group cursor-default ${
              isLight 
                ? "bg-white border-zinc-200/80 shadow-md hover:shadow-lg hover:border-amber-500/20" 
                : "bg-[#0C0F16] border-white/5 hover:border-amber-500/10 shadow-2xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.02)]"
            }`}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                isLight 
                  ? "bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500" 
                  : "bg-white/[0.02] border-white/5 text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500"
              }`}>
                <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[360deg]" />
              </div>
              <div>
                <h3 className={`text-sm font-black tracking-tight transition-colors duration-300 ${
                  isLight ? "text-zinc-950 group-hover:text-amber-600" : "text-white group-hover:text-amber-400"
                }`}>
                  JUUL And Why Authenticity Matters
                </h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5">Verified Import Protocols</p>
              </div>
            </div>
            <p className={`text-xs leading-relaxed font-light ${
              isLight ? "text-zinc-500" : "text-zinc-400"
            }`}>
              Here's the short version: JUUL is a sleek e-cigarette that’s pre-filled with pods and powered by nicotine salt to help you find your sweet spot. No big clouds, no complicated settings — just a simple draw-activated pod system designed as a cigarette alternative for adult smokers and ex smokers. The UAE market is full of clones and counterfeit pods. They look close enough on the outside, but inside? Sub-standard coils, untested e-liquid, and chemical ingredients that nobody's verified. That's a real problem not just for flavor delivery, but for your safety. We source every JUUL device, pod, and accessory directly from authorised distribution channels in the US and UK. No third-party middlemen, no grey-market inventory. All of our product arrive to our door in factory-sealed original packaging. Upon arrival at our facility, it is subjected to a second layer of rigorous inspection. A meticulous, step-by-step verification process involving batch numbers, unique holographic seals, and security stickers that is cross-referenced against manufacturer data is employed. Items that cannot be authenticated do not make it into our customer hands. Nicotine salt eliquid are very fragile product that must be handled with the upmost care and is highly temperamental. Heat, sunlight, and pressure changes during shipping can mess with flavor quality and cause leaking. Our logistics network uses climate-controlled transit from point of origin to your door — so the chemical balance and flavor integrity stay exactly where they should be. Authentic JUUL products have micro-engravings, unique batch serial cards, and precise connection pins that communicate with the device. We always encourage customers to check for official duty stamps and batch numbers on every purchase. We've been running this JUUL vape UAE store since 2021. We have thousands of customers in Dubai and across UAE who consider us the ultimate place to shop JUUL pods, because of our 100% guaranteed verified and authentic pods with proper packaging. If you would like to buy JUUL pod online UAE, don’t doubt whether the product inside is actual or not, right on the perfect spot.
            </p>
          </motion.div>

          {/* Bottom 2 Columns Grid (JUUL 1 and JUUL 2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* JUUL 1 Classic Series Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 sm:p-8 rounded-[24px] border transition-all duration-300 group cursor-default ${
                isLight 
                  ? "bg-white border-zinc-200/80 shadow-md hover:shadow-lg hover:border-amber-500/20" 
                  : "bg-[#0C0F16] border-white/5 hover:border-amber-500/10 shadow-2xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.02)]"
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  isLight 
                    ? "bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500" 
                    : "bg-white/[0.02] border-white/5 text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500"
                }`}>
                  <Compass className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <div>
                  <h3 className={`text-sm font-black tracking-tight transition-colors duration-300 ${
                    isLight ? "text-zinc-950 group-hover:text-amber-600" : "text-white group-hover:text-amber-400"
                  }`}>
                    JUUL 1 Classic Series (US Import)
                  </h3>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5">3.0% / 5.0% Nicotine Salts</p>
                </div>
              </div>
              <p className={`text-xs leading-relaxed font-light ${
                isLight ? "text-zinc-500" : "text-zinc-400"
              }`}>
                JUUL 1is the starter, and still, the ultimate in choice for smokers and ex-smokers seeking out a cigarette alternative that does exactly what they want it to. It's a dead-simple pod system. Click in a pod, draw, done. No buttons, no wattage settings. Just pop the pod and inhale. Thanks to the combination of nicotine salts, delivers a soft throat hit and dense flavor, which closely mimics real cigarettes, but without ignition. Available in 3% and 5% pod packs (30mg and 50mg). There’s even Virginia Tobacco flavored e-liquid if you really want 4 pod pac. You can also grab the JUUL starter kit UAE if you're setting up from scratch device, charger, and pods in one box. Every JUUL 1 device, pod pack, and accessory we carry is an authentic US import sourced through authorised distributors and shipped in original sealed packaging. We keep tight stock control so you're always getting fresh batches with proper e-liquid quality. No oxidation, no leaking, no mystery contents. If you want to Purchase JUUL Pods in UAE such as, the Menthol 3% and 5%, Virginia Tobacco 3% or 5%, rest assured we have it in our supply and ready for delivery in and out of the UAE. JUUL 1, a simply device at the beginning and always has and always will be the choice for portable nicotine devices, rest assured that we keep them filled, legit and always up to the task.
              </p>
            </motion.div>

            {/* JUUL 2 Smart Series Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className={`p-6 sm:p-8 rounded-[24px] border transition-all duration-300 group cursor-default ${
                isLight 
                  ? "bg-white border-zinc-200/80 shadow-md hover:shadow-lg hover:border-amber-500/20" 
                  : "bg-[#0C0F16] border-white/5 hover:border-amber-500/10 shadow-2xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.02)]"
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  isLight 
                    ? "bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500" 
                    : "bg-white/[0.02] border-white/5 text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500"
                }`}>
                  <Flame className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className={`text-sm font-black tracking-tight transition-colors duration-300 ${
                    isLight ? "text-zinc-950 group-hover:text-amber-600" : "text-white group-hover:text-amber-400"
                  }`}>
                    JUUL 2 Smart Series (UK Import)
                  </h3>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5">1.8% Nicotine (TPD Compliant)</p>
                </div>
              </div>
              <p className={`text-xs leading-relaxed font-light ${
                isLight ? "text-zinc-500" : "text-zinc-400"
              }`}>
                So it’s not surprising that JUUL 2 is how JUUL Labs will be refining everything the first JUUL 2.2 had in its previous iterations to have it come to you direct from EU importers licensed in the EU and also verified by a team of scientists appointed by the MHRA for the ingredient mix. What makes the JUUL 2 stand out? Brains, not only intelligence built into the JUUL 2 device but also into the pods themselves. The new JUUL 2 pod security chip instantly recognises authenticated JUUL 2 pods, disabling any third-party alternatives and the device’s smart temperature control helps prevent dry hits. Also featuring smart Bluetooth connectivity to the dedicated JUUL companion app and a secure child-lock system, the JUUL 2 offers an enhanced experience. The flavor lineup is way bigger too you've got Virginia Tobacco, Autumn Tobacco, Blackcurrant Tobacco, Summer Menthol, Ruby Menthol, Crisp Menthol, Polar Menthol, Arctic Breeze, Apple, Mango, Lychee, Watermelon, Peach, and Tropical Medley all at 18mg. Better vapor production, longer battery life, more flavors, and built-in anti-counterfeit tech. If you want a premium pod system vape that's a genuine step up from basic e-cigarettes, this is the one. Every JUUL 2 device, pod, and accessory in our Juul vape pods Shop in UAE is a direct UK import sealed, batch-verified, and authentic from Juul Labs. Whether you want to buy Juul 2 pods Virginia Tobacco 18mg in Dubai, grab a Summer Menthol pack, or try something fruity like Mango or Watermelon it's all stocked and ready for fast delivery across the UAE.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
