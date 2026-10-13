import React, { useState } from 'react';
import { NUTRITION_COMPARISON } from '../data/makhanaData';
import { ShieldCheck, Heart, Activity, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export const NutritionalMatrix: React.FC = () => {
  const [portionGrams, setPortionGrams] = useState<number>(30); // 30g standard bowl

  const multiplier = portionGrams / 100;

  return (
    <section id="nutrition" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Ayurvedic Superfood & Clinical Nutrition</span>
            <span aria-hidden="true">·</span>
            <span>Zero Cholesterol · Low Glycemic Load</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Nutritional Superiority: Why the World is Switching to Makhana
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Prized in Vedic medicine as a Rasayana (rejuvenator), Phool Makhana is an exceptionally nutrient-dense seed with an unmatched caloric-to-protein ratio. See how it outclasses legacy commercial snacks.
          </p>
        </div>

        {/* 4 Core Clinical Health Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white font-serif">Cardiovascular Health</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Rich in potassium and magnesium with virtually zero sodium and zero cholesterol, maintaining optimal coronary artery tone and balanced blood pressure.
            </p>
          </div>

          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white font-serif">Low Glycemic Management</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              With a low GI of ~48 and slow-release complex resistant starches, it prevents insulin spikes, making it an endorsed snacking option for diabetic patients.
            </p>
          </div>

          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white font-serif">Kaempferol Anti-Aging</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Contains high concentrations of Kaempferol, a natural flavonoid that fights systemic chronic inflammation, neutralizes oxidative stress, and protects collagen.
            </p>
          </div>

          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white font-serif">Sattvic Vrat & Fasting</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              100% hypoallergenic, gluten-free, and wheat-free. It is universally accepted during auspicious Hindu fasting rituals (Navratri, Shivratri) for clean, sustained energy.
            </p>
          </div>

        </div>

        {/* Head-to-Head Comparative Matrix Table */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold font-serif text-white">Comparative Snack Nutritional Audit</h3>
              <p className="text-xs text-stone-400">Standardized per 100g unseasoned benchmark basis</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <span>Portion Viewer:</span>
              {[30, 50, 100].map((g) => (
                <button
                  key={g}
                  onClick={() => setPortionGrams(g)}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                    portionGrams === g
                      ? 'bg-orange-500 text-white font-bold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {g}g
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-stone-950 text-stone-400 uppercase tracking-wider font-semibold border-b border-stone-800">
                <tr>
                  <th className="py-3.5 px-6">Food Commodity</th>
                  <th className="py-3.5 px-4 text-center">Calories</th>
                  <th className="py-3.5 px-4 text-center">Plant Protein</th>
                  <th className="py-3.5 px-4 text-center">Total Fat</th>
                  <th className="py-3.5 px-4 text-center">Dietary Fiber</th>
                  <th className="py-3.5 px-4 text-center">Glycemic Index</th>
                  <th className="py-3.5 px-6">Nutritional Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-sans">
                {NUTRITION_COMPARISON.map((item, idx) => {
                  const isVyas = idx === 0;
                  return (
                    <tr 
                      key={item.name} 
                      className={isVyas ? 'bg-emerald-950/20 font-medium' : 'hover:bg-stone-850/50'}
                    >
                      <td className="py-4 px-6 text-white font-semibold">
                        <div className="flex items-center gap-2">
                          {isVyas && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center font-mono">
                        {Math.round(item.caloriesPer100g * multiplier)} kcal
                      </td>
                      <td className="py-4 px-4 text-center font-mono text-orange-400 font-semibold">
                        {(item.protein * multiplier).toFixed(1)}g
                      </td>
                      <td className="py-4 px-4 text-center font-mono">
                        {(item.fat * multiplier).toFixed(1)}g
                      </td>
                      <td className="py-4 px-4 text-center font-mono text-emerald-400">
                        {(item.fiber * multiplier).toFixed(1)}g
                      </td>
                      <td className="py-4 px-4 text-center font-mono">
                        {item.glycemicIndex}
                      </td>
                      <td className="py-4 px-6 text-stone-400 text-[11px] leading-relaxed">
                        {item.verdict}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
