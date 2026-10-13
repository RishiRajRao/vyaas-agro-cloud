import React, { useState } from 'react';
import { MAKHANA_GRADES } from '../data/makhanaData';
import { MakhanaGrade } from '../types';
import { Ruler, ShieldCheck, Check, Sparkles, Box, ArrowRight, Layers } from 'lucide-react';

interface GradeInspectorProps {
  onSelectForQuote: (gradeName: string) => void;
  onOpenSpecSheet: () => void;
}

export const GradeInspector: React.FC<GradeInspectorProps> = ({ onSelectForQuote, onOpenSpecSheet }) => {
  const [selectedGradeId, setSelectedGradeId] = useState<string>(MAKHANA_GRADES[0].id);

  const currentGrade = MAKHANA_GRADES.find(g => g.id === selectedGradeId) || MAKHANA_GRADES[0];

  // Visual size circle scaling based on mm
  const getVisualDiameter = (id: string) => {
    switch (id) {
      case 'grade-6-plus': return 88;
      case 'grade-5-5': return 74;
      case 'grade-5': return 62;
      case 'grade-4-5': return 50;
      case 'grade-powder': return 42;
      default: return 70;
    }
  };

  return (
    <section id="grades" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <span>Precision Grading Protocol</span>
            <span aria-hidden="true">·</span>
            <span>The Indian Suta System (1 Suta = 3.175mm)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Standardized Suta Calibration & Quality Grades
          </h2>
          <p className="mt-3 text-base text-stone-400">
            Unlike unorganized mandi brokers who mix variable batches, Vyas Agro utilizes multi-deck vibratory sieves followed by high-speed dual optical color sorters to guarantee razor-sharp caliber consistency and zero burnt kernels.
          </p>
        </div>

        {/* Grade Selector Bar - Clean segmented buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-900 border border-stone-800 rounded-xl mb-8">
          {MAKHANA_GRADES.map((grade) => {
            const isSelected = grade.id === selectedGradeId;
            return (
              <button
                key={grade.id}
                onClick={() => setSelectedGradeId(grade.id)}
                className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg text-left transition-all ${
                  isSelected 
                    ? 'bg-orange-500 text-white shadow-md font-semibold' 
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/60 font-medium'
                }`}
              >
                <div className="text-xs uppercase tracking-wider opacity-90">{grade.suta}</div>
                <div className="text-sm truncate mt-0.5">{grade.name.replace(/^[0-9.+ ]+Suta /, '')}</div>
              </button>
            );
          })}
        </div>

        {/* Grade Detail Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Visual Interactive Caliber Tool */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-925 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Visual Caliber Simulation</span>
                <span className="text-xs font-mono text-orange-400">{currentGrade.sizeMm}</span>
              </div>

              {/* Graphic Caliber Visualization */}
              <div className="my-10 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  
                  {/* Caliber measurement circle */}
                  <div 
                    className="rounded-full bg-gradient-to-br from-orange-100 via-stone-100 to-orange-200 border-2 border-orange-500 shadow-2xl flex items-center justify-center transition-all duration-500 relative"
                    style={{ 
                      width: `${getVisualDiameter(currentGrade.id) * 2}px`, 
                      height: `${getVisualDiameter(currentGrade.id) * 2}px` 
                    }}
                  >
                    {/* Natural seed texture indicator */}
                    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(234,88,12,0.15))] flex items-center justify-center p-3 text-center">
                      <div className="text-stone-900">
                        <div className="text-sm font-bold font-mono">{currentGrade.sizeMm}</div>
                        <div className="text-[11px] text-stone-700">{currentGrade.suta}</div>
                      </div>
                    </div>
                  </div>

                  {/* Suta measuring caliper lines */}
                  <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[11px] font-mono text-stone-500 border-b border-dashed border-stone-700 pb-1">
                    <span>0 mm</span>
                    <span>Diameter: {currentGrade.sizeMm}</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="text-sm font-medium text-stone-200">{currentGrade.badge}</div>
                  <div className="text-xs text-stone-400 mt-1">Dual-Pass Optical Sorting · Zero Black Shells</div>
                </div>
              </div>
            </div>

            {/* Quick Suta Conversion Guide */}
            <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-medium">
                <Ruler className="w-3.5 h-3.5" />
                <span>Trade Calibration Reference</span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                1 Suta = 1/8 inch = 3.175 mm. In Indian makhana classification, 6 Suta corresponds to seeds exceeding 19mm diameter, and 6+ Suta represents rare colossal pops exceeding 22–26mm diameter.
              </p>
            </div>
          </div>

          {/* Right Detailed Laboratory Specifications */}
          <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Grade Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">{currentGrade.name}</h3>
                  <div className="text-xs text-stone-400 mt-1">Official Vyas Agro Quality Specification No. VA-MK-{currentGrade.id.toUpperCase()}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400">Benchmark Domestic Bulk</div>
                  <div className="text-lg font-bold text-orange-400 font-mono">₹{currentGrade.pricePerKgApprox}/kg approx*</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-300 leading-relaxed">
                {currentGrade.description}
              </p>

              {/* Technical Laboratory Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3.5 bg-stone-950/60 rounded-xl border border-stone-800">
                  <div className="text-xs text-stone-500">Pop Expansion</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentGrade.popYield}</div>
                </div>
                <div className="p-3.5 bg-stone-950/60 rounded-xl border border-stone-800">
                  <div className="text-xs text-stone-500">Moisture Index</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentGrade.moisture}</div>
                </div>
                <div className="p-3.5 bg-stone-950/60 rounded-xl border border-stone-800">
                  <div className="text-xs text-stone-500">Broken Kernels</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentGrade.brokenPercentage}</div>
                </div>
                <div className="p-3.5 bg-stone-950/60 rounded-xl border border-stone-800">
                  <div className="text-xs text-stone-500">Global Demand</div>
                  <div className="text-sm font-bold text-orange-400 mt-0.5">{currentGrade.exportDemand}</div>
                </div>
              </div>

              {/* Best Applications / Usages */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                  Recommended Industry Applications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentGrade.idealFor.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-300 bg-stone-950/40 px-3 py-2 rounded-lg border border-stone-800/60">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenSpecSheet}
                className="text-xs text-stone-400 hover:text-orange-400 underline underline-offset-4 transition-colors"
              >
                View Complete Certificate of Analysis (COA) Specs
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectForQuote(currentGrade.name)}
                  className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-xs rounded-lg shadow-sm flex items-center gap-2 transition-colors"
                >
                  <span>Select for Bulk Quote</span>
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
