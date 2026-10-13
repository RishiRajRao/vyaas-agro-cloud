import React, { useState } from 'react';
import { MAKHANA_FLAVORS } from '../data/makhanaData';
import { MakhanaFlavor } from '../types';
import { Flame, Sparkles, Check, Heart, ShieldAlert, ArrowRight } from 'lucide-react';

interface FlavorsShowcaseProps {
  onOpenSampleKit: () => void;
  onOpenQuote: () => void;
}

export const FlavorsShowcase: React.FC<FlavorsShowcaseProps> = ({ onOpenSampleKit, onOpenQuote }) => {
  const [activeFlavorId, setActiveFlavorId] = useState<string>(MAKHANA_FLAVORS[0].id);

  const activeFlavor = MAKHANA_FLAVORS.find(f => f.id === activeFlavorId) || MAKHANA_FLAVORS[0];

  return (
    <section id="flavors" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Gourmet Value-Added Range</span>
              <span aria-hidden="true">·</span>
              <span>Slow Drum-Roasted (Zero Deep Fry)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Artisan Flavored Makhana for Modern Healthy Snacking
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl">
              Fox nuts roasted to golden crisp perfection in controlled-temperature hot air drums with micro-sprayed cold pressed oils and real culinary spices. 100% trans-fat free, zero palm oil, gluten-free, and rich in natural antioxidants.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end gap-3">
            <button
              onClick={onOpenSampleKit}
              className="px-4 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Request Flavor Tasting Box</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Central Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Atmospheric Food Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 group">
              <img 
                src="/src/assets/images/roasted_flavors_dish_1791895153866.jpg" 
                alt="Vyas Agro artisanal roasted makhana flavored bowls with peri peri, himalayan pink salt, turmeric pepper and herb punch"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between text-stone-200 font-medium">
                  <span>Custom OEM Seasonings for Private Labels</span>
                  <span className="text-orange-400">Custom Formulations</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-1">
                  We formulate custom spice coatings for international retail brands (Halal, Kosher, Vegan, Low-Sodium).
                </div>
              </div>
            </div>
          </div>

          {/* Right: Flavor Selector & Micro Nutrition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Flavor Tabs */}
            <div className="flex flex-wrap gap-2">
              {MAKHANA_FLAVORS.map((flavor) => {
                const isActive = flavor.id === activeFlavorId;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => setActiveFlavorId(flavor.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-orange-500 text-white shadow-md' 
                        : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800'
                    }`}
                  >
                    {flavor.name.split('&')[0]}
                  </button>
                );
              })}
            </div>

            {/* Active Flavor Dossier */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-5">
              
              <div>
                <div className="text-xs uppercase tracking-wider text-orange-400 font-medium">
                  {activeFlavor.subtitle}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mt-1">
                  {activeFlavor.name}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  {activeFlavor.tagline}
                </p>
              </div>

              {/* Flavor Profile Descriptors */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                {activeFlavor.flavorProfile.map((prof, i) => (
                  <span key={i} className="text-stone-300 bg-stone-950 px-2.5 py-1 rounded border border-stone-800">
                    {prof}
                  </span>
                ))}
              </div>

              {/* Real Nutrition Card per 30g serving */}
              <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-4">
                <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>Nutritional Facts (Per 30g Snacking Serving)</span>
                  <span className="text-emerald-400 font-mono">100% Gluten-Free</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="bg-stone-900 p-2 rounded-lg">
                    <div className="text-[10px] text-stone-500">Calories</div>
                    <div className="text-xs font-bold text-white font-mono mt-0.5">{activeFlavor.nutrition.calories}</div>
                  </div>
                  <div className="bg-stone-900 p-2 rounded-lg">
                    <div className="text-[10px] text-stone-500">Protein</div>
                    <div className="text-xs font-bold text-orange-400 font-mono mt-0.5">{activeFlavor.nutrition.protein}</div>
                  </div>
                  <div className="bg-stone-900 p-2 rounded-lg">
                    <div className="text-[10px] text-stone-500">Carbs</div>
                    <div className="text-xs font-bold text-stone-200 font-mono mt-0.5">{activeFlavor.nutrition.carbs}</div>
                  </div>
                  <div className="bg-stone-900 p-2 rounded-lg">
                    <div className="text-[10px] text-stone-500">Fat</div>
                    <div className="text-xs font-bold text-stone-200 font-mono mt-0.5">{activeFlavor.nutrition.fat}</div>
                  </div>
                  <div className="bg-stone-900 p-2 rounded-lg">
                    <div className="text-[10px] text-stone-500">Dietary Fiber</div>
                    <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">{activeFlavor.nutrition.fiber}</div>
                  </div>
                </div>
              </div>

              {/* Ingredients & Pouch Formats */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-stone-400">Clean Ingredients: </span>
                  <span className="text-stone-300">{activeFlavor.ingredients}</span>
                </div>
                <div>
                  <span className="text-stone-400">Available Packaging: </span>
                  <span className="text-stone-300 font-mono">{activeFlavor.pouchSizes.join(' · ')}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-800">
                <span className="text-xs text-stone-400">Minimum Order Quantity (OEM): 500 kg / Flavor</span>
                <button
                  onClick={onOpenQuote}
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <span>Private Label Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
