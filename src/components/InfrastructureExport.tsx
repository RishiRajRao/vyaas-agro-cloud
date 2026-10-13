import React from 'react';
import { PACKAGING_OPTIONS, EXPORT_DESTINATIONS } from '../data/makhanaData';
import { Factory, ShieldCheck, Box, Globe, PackageCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface InfrastructureExportProps {
  onOpenQuote: () => void;
}

export const InfrastructureExport: React.FC<InfrastructureExportProps> = ({ onOpenQuote }) => {
  return (
    <section id="infrastructure" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Factory className="w-4 h-4 text-emerald-400" />
            <span>Processing Infrastructure & Global Export Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Engineered for International Standards, Scaled for Bulk Demand
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Our Darbhanga processing facility is designed with cleanroom air conditioning, HEPA filtration, multi-stage magnetic separators, optical color sorters, and high-speed vacuum packaging machinery to meet the rigorous standards of global supermarket audits.
          </p>
        </div>

        {/* Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Packaging & Facility Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-950 group">
              <img 
                src="/src/assets/images/vyas_packaging_export_1791895154333.jpg" 
                alt="Vyas Agro food grade packaging and export cartons in cleanroom processing facility"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 text-xs">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>Hygienic Cleanroom Packing Zone</span>
                  <span className="text-emerald-400">ISO 22000 Certified</span>
                </div>
                <div className="text-stone-300 text-[11px] mt-1">
                  Hairnet, glove, and shoe-cover mandatory sanitized line with zero human hand contact during final vacuum sealing.
                </div>
              </div>
            </div>
          </div>

          {/* Technical OEM & Packaging Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider text-xs">
                <PackageCheck className="w-4 h-4" />
                <span>Turnkey Private Labeling (OEM / ODM)</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">
                Launch Your Brand’s Makhana Line in 21 Days
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Whether you need retail-ready nitro-flushed stand-up pouches, cardboard display boxes for Costco/Walmart, or bulk master sacks for overseas repackers, Vyas Agro manages end-to-end printing, packaging, and custom seasoning.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Rotogravure Printing</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nitrogen Gas Flushing (&lt;1% O2)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Batch QR Code Traceability</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Spice Blends R&D</span>
                </div>
              </div>
            </div>

            {/* Packaging Format Matrix */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Industrial & Retail Packing Specs
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGING_OPTIONS.map((pack) => (
                  <div key={pack.type} className="bg-stone-950/50 border border-stone-800/80 p-3.5 rounded-xl text-xs space-y-1">
                    <div className="font-semibold text-white">{pack.type}</div>
                    <div className="text-orange-400 font-mono text-[11px]">{pack.capacity}</div>
                    <div className="text-stone-400 text-[11px]">{pack.highlight}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Global Export Shipping Lanes */}
        <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Active Export Shipping Corridors</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white mt-1">Direct FCL & LCL Ocean Sea-Freight</h3>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-xs rounded-lg transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Book Container Allocation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {EXPORT_DESTINATIONS.map((dest) => (
              <div key={dest.country} className="p-4 bg-stone-900/60 rounded-xl border border-stone-800/70 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">{dest.country}</span>
                  <span className="text-[11px] font-mono text-orange-400 bg-stone-800 px-1.5 py-0.5 rounded">{dest.code}</span>
                </div>
                <div className="text-xs text-stone-400">{dest.ports}</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 pt-1">
                  <span>Transit: {dest.leadTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
