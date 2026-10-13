import React, { useState } from 'react';
import { MAKHANA_GRADES, EXPORT_DESTINATIONS } from '../data/makhanaData';
import { Calculator, Container, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface BulkCalculatorProps {
  onPreloadQuote: (data: {
    grade: string;
    quantityMt: number;
    packagingType: string;
    destination: string;
    estimatedCost: string;
  }) => void;
}

export const BulkCalculator: React.FC<BulkCalculatorProps> = ({ onPreloadQuote }) => {
  const [selectedGradeId, setSelectedGradeId] = useState<string>('grade-5-5');
  const [volumeKg, setVolumeKg] = useState<number>(3000); // 3 MT default
  const [packagingType, setPackagingType] = useState<string>('10kg-vacuum');
  const [destinationRegion, setDestinationRegion] = useState<string>('UAE - Jebel Ali');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR' | 'AED'>('USD');

  const activeGrade = MAKHANA_GRADES.find(g => g.id === selectedGradeId) || MAKHANA_GRADES[1];

  // Benchmark base pricing in INR
  const baseRatePerKgInr = activeGrade.pricePerKgApprox;

  // Packaging premium per kg
  const packagingPremiumsInr: Record<string, number> = {
    '10kg-vacuum': 35, // 10kg heavy vacuum foil bag
    '20kg-hdpe': 15, // 20kg woven poly bag
    '100g-pouch': 110, // Retail nitrogen flushed printed pouches
    '250g-canister': 160, // Luxury composite airtight canisters
  };

  const packPremium = packagingPremiumsInr[packagingType] || 25;
  const rawSubtotalInr = volumeKg * (baseRatePerKgInr + packPremium);

  // Volume discount tiers
  let discountPct = 0;
  if (volumeKg >= 10000) {
    discountPct = 0.10; // 10% for 10MT+ (Full container load)
  } else if (volumeKg >= 5000) {
    discountPct = 0.06; // 6% for 5MT+
  } else if (volumeKg >= 2000) {
    discountPct = 0.03; // 3% for 2MT+
  }

  const discountAmountInr = rawSubtotalInr * discountPct;
  const finalTotalInr = rawSubtotalInr - discountAmountInr;

  // Container sizing: Makhana is exceptionally high volume, low density!
  // 1 CBM of makhana weighs approx 60-70 kg.
  // 20ft standard container holds ~4,500 to 5,500 kg
  // 40ft High Cube holds ~11,000 to 12,500 kg
  const estimatedCbm = Math.round(volumeKg / 65);
  let containerType = 'LCL (Less than Container Load)';
  if (volumeKg >= 10000) {
    containerType = `${Math.ceil(volumeKg / 11500)}x 40ft High-Cube (FCL)`;
  } else if (volumeKg >= 4000) {
    containerType = '1x 20ft Standard Ocean Container (FCL)';
  }

  // Currency conversions (approx exchange rates)
  const currencyRates: Record<string, { rate: number; symbol: string }> = {
    INR: { rate: 1, symbol: '₹' },
    USD: { rate: 0.0116, symbol: '$' },
    EUR: { rate: 0.0108, symbol: '€' },
    AED: { rate: 0.0426, symbol: 'AED ' },
  };

  const curr = currencyRates[currency];
  const convertedTotal = Math.round(finalTotalInr * curr.rate).toLocaleString();
  const convertedPerKg = (Math.round((finalTotalInr / volumeKg) * curr.rate * 100) / 100).toFixed(2);

  const handleProceedQuote = () => {
    onPreloadQuote({
      grade: activeGrade.name,
      quantityMt: volumeKg / 1000,
      packagingType: packagingType === '10kg-vacuum' ? '10kg Vacuum Multi-layer Foil Bags' :
                     packagingType === '20kg-hdpe' ? '20kg HDPE Woven Bags with Inner Liner' :
                     packagingType === '100g-pouch' ? '100g Nitrogen-Flushed Retail Pouches' : '250g Luxury Canisters',
      destination: destinationRegion,
      estimatedCost: `${curr.symbol}${convertedTotal} (${curr.symbol}${convertedPerKg}/kg)`,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Commercial Planning Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              B2B Bulk Pricing & Container Sizing Estimator
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Fox nuts are light and voluminous. Calculate container volumetric weight, packaging styles, export freight estimates, and volume tiers in real time.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-950 border border-stone-800 rounded-lg shrink-0">
            {(['INR', 'USD', 'EUR', 'AED'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  currency === c
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Grade Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                1. Select Desired Suta Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MAKHANA_GRADES.slice(0, 4).map((g) => {
                  const isSelected = g.id === selectedGradeId;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGradeId(g.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected 
                          ? 'bg-orange-500/10 border-orange-500 text-white' 
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className={isSelected ? 'text-orange-400' : 'text-stone-300'}>{g.suta}</span>
                        <span className="font-mono text-stone-400">~₹{g.pricePerKgApprox}/kg</span>
                      </div>
                      <div className="text-xs text-stone-400 mt-1 truncate">{g.name.replace(/^[0-9.+ ]+Suta /, '')}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Quantity Slider & Direct Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                  2. Order Quantity: <span className="text-orange-400 font-mono font-bold text-sm">{(volumeKg / 1000).toFixed(1)} MT</span> ({volumeKg.toLocaleString()} kg)
                </label>
                <div className="flex items-center gap-1.5 text-xs">
                  {[1000, 3000, 5000, 10000, 20000].map((quickKg) => (
                    <button
                      key={quickKg}
                      onClick={() => setVolumeKg(quickKg)}
                      className="px-2 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded text-stone-300 text-[11px]"
                    >
                      {quickKg >= 1000 ? `${quickKg / 1000} MT` : `${quickKg} kg`}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={volumeKg}
                onChange={(e) => setVolumeKg(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />

              <div className="flex justify-between text-[11px] text-stone-500 mt-1.5 font-mono">
                <span>0.5 MT (Sample/Trial)</span>
                <span>5.0 MT (20ft FCL)</span>
                <span>12.0 MT (40ft HC)</span>
                <span>25.0 MT (Fleet)</span>
              </div>
            </div>

            {/* Step 3: Packaging Mode */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                3. Primary Packaging Configuration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: '10kg-vacuum', title: '10kg Vacuum Multi-layer Foil Bags', tag: 'Standard Export Choice' },
                  { id: '20kg-hdpe', title: '20kg HDPE Woven Bags with Liner', tag: 'Domestic Bulk Mandi' },
                  { id: '100g-pouch', title: '100g Retail Nitrogen Pouches', tag: 'Shelf-Ready Doypack' },
                  { id: '250g-canister', title: '250g Luxury Composite Canisters', tag: 'High-End Retail' },
                ].map((pack) => {
                  const isSelected = packagingType === pack.id;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => setPackagingType(pack.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected 
                          ? 'bg-orange-500/10 border-orange-500 text-white' 
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="text-xs font-semibold text-stone-200">{pack.title}</div>
                      <div className="text-[11px] text-stone-400 mt-0.5">{pack.tag}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Destination Port / Market */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                4. Primary Delivery Destination
              </label>
              <select
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-orange-500"
              >
                <option value="India - Domestic (Delhi NCR Hub)">Domestic India - Delhi NCR Logistics Hub</option>
                <option value="India - Domestic (Mumbai JNPT)">Domestic India - Mumbai / JNPT</option>
                <option value="India - Domestic (Bengaluru / South)">Domestic India - Bengaluru Hub</option>
                <option value="USA - Port of Los Angeles">USA - West Coast (Port of Los Angeles)</option>
                <option value="USA - Port of New York / New Jersey">USA - East Coast (Port of New York / Newark)</option>
                <option value="UAE - Jebel Ali">Middle East - UAE (Jebel Ali, Dubai)</option>
                <option value="UK - London Gateway">United Kingdom - London Gateway / Felixstowe</option>
                <option value="EU - Port of Rotterdam">European Union - Rotterdam / Hamburg</option>
                <option value="Australia - Port of Melbourne">Australia - Port of Melbourne</option>
                <option value="Canada - Port of Vancouver">Canada - Port of Vancouver</option>
              </select>
            </div>

          </div>

          {/* Real-Time Live Commercial Calculation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-950 to-stone-900 border-2 border-orange-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Provisional Cost Breakdown</span>
              <span className="text-xs text-stone-400 font-mono">FOB Mundra / CIF Ready</span>
            </div>

            {/* Total Highlight */}
            <div className="space-y-1">
              <div className="text-xs text-stone-400">Estimated Total Order Value</div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white flex items-baseline gap-2">
                <span>{curr.symbol}{convertedTotal}</span>
                <span className="text-xs text-orange-400 font-normal">({curr.symbol}{convertedPerKg}/kg)</span>
              </div>
              <div className="text-[11px] text-stone-500">
                *Subject to final moisture index, sea freight index, and custom packing artwork.
              </div>
            </div>

            {/* Breakdown Items */}
            <div className="space-y-2.5 text-xs border-t border-b border-stone-800 py-4">
              <div className="flex justify-between text-stone-400">
                <span>Base Commodity Grade:</span>
                <span className="text-stone-200 font-medium">{activeGrade.suta}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Total Net Weight:</span>
                <span className="text-stone-200 font-medium font-mono">{volumeKg.toLocaleString()} kg ({(volumeKg / 1000).toFixed(1)} MT)</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Volumetric Space (CBM):</span>
                <span className="text-stone-200 font-medium font-mono">~{estimatedCbm} CBM</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Recommended Container:</span>
                <span className="text-orange-400 font-medium flex items-center gap-1">
                  <Container className="w-3.5 h-3.5" />
                  {containerType}
                </span>
              </div>
              {discountPct > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Volume Tier Incentive:</span>
                  <span>-{(discountPct * 100).toFixed(0)}% Applied</span>
                </div>
              )}
              <div className="flex justify-between text-stone-400">
                <span>Destination Routing:</span>
                <span className="text-stone-200 truncate max-w-[200px]">{destinationRegion}</span>
              </div>
            </div>

            {/* Included Vyas Agro Value Assurances */}
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex items-center gap-2 text-stone-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Certificate of Origin & Phytosanitary Certificate included</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Dual Optical Sortex guarantee (&lt;0.5% broken)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>APEDA registration & export container fumigation</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleProceedQuote}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-lg shadow-orange-950/40 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Lock Estimates & Request Proforma Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
