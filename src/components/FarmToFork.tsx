import React, { useState } from 'react';
import { HARVEST_STEPS } from '../data/makhanaData';
import { Waves, Sparkles, Sun, CheckCircle, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export const FarmToFork: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = HARVEST_STEPS[activeStepIndex];

  return (
    <section id="origin" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Waves className="w-4 h-4 text-emerald-400" />
            <span>Sacred Provenance · Mithila Wetlands</span>
            <span aria-hidden="true">·</span>
            <span>Government GI-Tag Protected</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            From Sacred Himalayan Waters to Pristine Popped Superfood
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Over 85% of the world’s makhana originates in the floodplains of Mithila, Bihar. Vyas Agro works hand-in-hand with multi-generational aquatic harvesting families, merging indigenous wetland stewardship with modern food-safety technology.
          </p>
        </div>

        {/* Imagery & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Atmospheric Wetland Pond Photo & Direct Sourcing Stat */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-950 group">
              <img 
                src="/src/assets/images/makhana_pond_mithila_1791895153580.jpg" 
                alt="Pristine natural wetland pond in Mithila Bihar with lotus lilies and morning mist"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Darbhanga & Madhubani Aquatic Basins, Bihar</span>
                </div>
                <div className="text-stone-300">
                  Natural perennial water bodies fed by pristine glacial rivers, rich in organic silt and zero industrial runoff.
                </div>
              </div>
            </div>

            {/* Farmer Welfare & ESG Impact Card */}
            <div className="bg-emerald-950/40 border border-emerald-900/60 rounded-2xl p-6 text-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Empowering 3,500+ Aquatic Farming Families</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Vyas Agro provides advance working capital, protective underwater gear, and guaranteed fair farmgate minimum procurement prices, eliminating manipulative middlemen and reviving indigenous wetlands.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-stone-400 border-t border-emerald-900/40">
                <div>
                  <span className="text-white font-bold block text-sm font-mono">100% Direct</span>
                  <span>Farmgate Traceability</span>
                </div>
                <div>
                  <span className="text-white font-bold block text-sm font-mono">Zero Chemicals</span>
                  <span>Natural Sun & Water Cure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Step-by-Step Production Process */}
          <div className="lg:col-span-7 bg-stone-950/80 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-6 pb-3 border-b border-stone-800 flex items-center justify-between">
                <span>The 5-Stage Processing Chain</span>
                <span className="text-orange-400 font-mono">Stage {activeStep.step} of 05</span>
              </div>

              {/* Step Navigation Pill/Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-stone-900">
                {HARVEST_STEPS.map((step, idx) => {
                  const isActive = idx === activeStepIndex;
                  return (
                    <button
                      key={step.step}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                        isActive 
                          ? 'bg-orange-500 text-white shadow-md' 
                          : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
                      }`}
                    >
                      {step.step}. {step.title.split(' ')[1]}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-orange-400 font-mono">
                  <span>STEP {activeStep.step}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-400">{activeStep.location}</span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-white">
                  {activeStep.title}
                </h3>

                <p className="text-xs font-medium text-emerald-400">
                  {activeStep.subtitle}
                </p>

                <p className="text-sm text-stone-300 leading-relaxed pt-1">
                  {activeStep.detail}
                </p>
              </div>
            </div>

            {/* Quality Checkpoint Assurance */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified in accordance with FSSAI & Codex Alimentarius guidelines</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : HARVEST_STEPS.length - 1))}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 rounded border border-stone-800"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < HARVEST_STEPS.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 rounded border border-stone-800"
                >
                  Next Step
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
