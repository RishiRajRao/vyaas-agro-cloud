import React from 'react';
import { X, Printer, ShieldCheck, CheckCircle2, FileText, Download } from 'lucide-react';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl text-stone-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800 bg-stone-950/60 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-white">Technical Product Specification & COA</h3>
              <p className="text-xs text-stone-400">Official Document Ref: VA/TDS/MK-2026/REV-04 · Export Compliance</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-stone-300 hover:text-white bg-stone-800 rounded-lg border border-stone-700 text-xs flex items-center gap-1.5"
              title="Print Specification"
            >
              <Printer className="w-4 h-4 text-orange-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-300">
          
          {/* Header Summary Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div>
              <span className="text-stone-500 block">Botanical Classification</span>
              <span className="font-semibold text-white">Euryale ferox Salisb.</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Family: Nymphaeaceae</span>
            </div>
            <div>
              <span className="text-stone-500 block">Common Trade Names</span>
              <span className="font-semibold text-white">Phool Makhana, Fox Nut, Lotus Seed</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">HS Code: 1904.10 / 0802.90</span>
            </div>
            <div>
              <span className="text-stone-500 block">Geographical Indication</span>
              <span className="font-semibold text-orange-400">GI Tag No. 696 (Mithila Makhana)</span>
              <span className="text-[11px] text-emerald-400 block mt-0.5">Government of India Approved</span>
            </div>
          </div>

          {/* Physical & Caliber Quality Standards */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-stone-800">
              1. Physical Parameters & Sizing Caliber
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Color & Appearance:</span>
                <span className="text-white block font-medium mt-0.5">Snow white to bright creamy ivory round fluffy pops; negligible brown seed-attachment points.</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Texture & Mouthfeel:</span>
                <span className="text-white block font-medium mt-0.5">Crisp, airy, cellular honeycomb structure; zero gumminess or chewy core.</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Moisture Content:</span>
                <span className="text-orange-400 block font-mono font-medium mt-0.5">≤ 7.5% - 8.0% w/w (Vacuum Sealed Lot)</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Broken / Fractured Kernels:</span>
                <span className="text-emerald-400 block font-mono font-medium mt-0.5">&lt; 0.5% in 6+ Suta; &lt; 1.0% in 5.5 Suta</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Black Husks & Hard Seeds (Kanka):</span>
                <span className="text-emerald-400 block font-mono font-medium mt-0.5">&lt; 0.1% (Sortex Optical Ejected)</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
                <span className="text-stone-400">Foreign Organic / Inorganic Matter:</span>
                <span className="text-white block font-mono font-medium mt-0.5">Absent (Nil tolerance)</span>
              </div>
            </div>
          </div>

          {/* Chemical & Microbiological Safety */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-stone-800">
              2. Chemical & Microbiological Limits (US FDA & EU Compliant)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-stone-950 border border-stone-800 rounded-lg">
                <thead className="bg-stone-900 text-stone-400 text-[11px] uppercase border-b border-stone-800">
                  <tr>
                    <th className="p-2.5">Analysis Test</th>
                    <th className="p-2.5">Test Method</th>
                    <th className="p-2.5">Guaranteed Specification Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 text-[11px]">
                  <tr>
                    <td className="p-2.5 text-white">Total Ash</td>
                    <td className="p-2.5 text-stone-400">AOAC 923.03</td>
                    <td className="p-2.5 font-mono text-stone-200">≤ 0.50%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Acid Insoluble Ash</td>
                    <td className="p-2.5 text-stone-400">AOAC 941.12</td>
                    <td className="p-2.5 font-mono text-stone-200">≤ 0.05%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Aflatoxins (B1, B2, G1, G2)</td>
                    <td className="p-2.5 text-stone-400">HPLC-FLD</td>
                    <td className="p-2.5 font-mono text-emerald-400">&lt; 2.0 ppb (Total &lt; 4.0 ppb)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Pesticide Residue (Multi-Screen)</td>
                    <td className="p-2.5 text-stone-400">LC-MS/MS & GC-MS/MS</td>
                    <td className="p-2.5 font-mono text-emerald-400">Below Detectable Limit (BDL)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Total Plate Count (TPC)</td>
                    <td className="p-2.5 text-stone-400">ISO 4833</td>
                    <td className="p-2.5 font-mono text-stone-200">&lt; 10,000 CFU/g</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Yeast & Mould</td>
                    <td className="p-2.5 text-stone-400">ISO 21527</td>
                    <td className="p-2.5 font-mono text-stone-200">&lt; 100 CFU/g</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-white">Salmonella spp. & E. Coli</td>
                    <td className="p-2.5 text-stone-400">ISO 6579 / ISO 16649</td>
                    <td className="p-2.5 font-mono text-emerald-400">Absent in 25g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Storage & Handling */}
          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              3. Storage, Handling & Shelf Life
            </h4>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Store in a cool, dry, well-ventilated warehouse away from direct sunlight and ambient humidity below 60%. Recommended storage temperature: 18°C–24°C. Under intact vacuum barrier bags, shelf life is 12 Months from packing date. Once opened, store in airtight nitrogen-flushed containers to prevent moisture uptake.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/60 rounded-b-2xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-stone-500">
            Certified by Vyas Agro Quality Assurance Laboratory, Darbhanga Facility.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg text-xs"
          >
            Close Specification Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
