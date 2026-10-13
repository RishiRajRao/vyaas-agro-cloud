import React from 'react';
import { ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2, ChevronRight, Truck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenSampleKit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenSampleKit }) => {
  return (
    <section className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-100 overflow-hidden pt-10 pb-20 border-b border-stone-800">
      {/* Subtle organic watermark backdrop pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-orange-400">
              <span>Mithila GI Heritage</span>
              <span aria-hidden="true">·</span>
              <span>Direct Wetland Processing</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Export Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.12]">
              India’s Crown Jewel <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500">
                Phool Makhana
              </span>, <br />
              Precision-Graded for the World.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              Vyas Agro is a premier agro-processor and global exporter of authentic Mithila Fox Nuts (Gorgon Nut). Sourced directly from pristine wetland waterbeds in Bihar, processed in automated cleanrooms, and sorted into handpicked 6+ Suta King and 5.5 Suta Export grades with zero chemical bleaching.
            </p>

            {/* Trust Points / Credibility Marks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>6+ Suta Handpicked King</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-8% Moisture Locked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Bleach or Additives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>US FDA & APEDA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optical Sortex Grading</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OEM Private Label Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg shadow-lg shadow-orange-950/30 flex items-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Container / Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenSampleKit}
                className="px-5 py-3.5 bg-stone-800/90 hover:bg-stone-700/90 text-stone-100 font-medium rounded-lg border border-stone-700 flex items-center gap-2 text-sm transition-colors"
              >
                <span>Order B2B Buyer Sample Kit</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Editorial Quantitative Footing */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">12,000+</div>
                <div className="text-xs text-stone-400 mt-0.5">MT Annual Sourcing Capacity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-orange-400">99.5%</div>
                <div className="text-xs text-stone-400 mt-0.5">Optical Sortex Purity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-emerald-400">28+</div>
                <div className="text-xs text-stone-400 mt-0.5">Export Destinations Worldwide</div>
              </div>
            </div>

          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-700/70 shadow-2xl bg-stone-900 group">
              <img 
                src="/src/assets/images/vyas_makhana_hero_1791895153153.jpg" 
                alt="Vyas Agro handpicked King Jumbo Phool Makhana popping out of ceramic bowl onto rustic burlap"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 aspect-[4/3] sm:aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />

              {/* In-Image Micro Spec Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-stone-800">
                  <span className="font-semibold text-white">Batch #VA-MITHILA-2026</span>
                  <span className="text-orange-400 font-mono">6+ Suta Jumbo (24.2mm)</span>
                </div>
                <div className="flex items-center justify-between pt-1.5 text-stone-400">
                  <span>Moisture: 7.2% · Optical Sort: Dual Cam</span>
                  <span className="text-emerald-400 font-medium">Export Grade Verified</span>
                </div>
              </div>
            </div>

            {/* Floating Quality Stamp */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-stone-950/95 border border-orange-500/40 rounded-xl p-3.5 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-semibold text-white">Direct-From-Mithila</div>
                <div className="text-stone-400">Zero Middlemen Markups</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
