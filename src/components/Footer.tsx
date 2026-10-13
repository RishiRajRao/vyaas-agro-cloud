import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSpecSheet: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpecSheet, onOpenQuote }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs">
      
      {/* Upper Footer: Brand & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Dossier */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-emerald-700 flex items-center justify-center text-stone-950 font-bold text-lg">
                VA
              </div>
              <div>
                <span className="text-xl font-bold font-serif text-white tracking-tight">VYAS AGRO</span>
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold ml-2">FOODS</span>
                <p className="text-[11px] text-stone-400">Direct Processors & Global Exporters of Mithila Phool Makhana</p>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Rooted in the historical wetlands of Mithila, Bihar, Vyas Agro bridges thousands of indigenous aquatic harvesters with the global superfood market. Precision-graded, 100% natural, and certified for international export.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-stone-400">
              <div><strong className="text-stone-300">APEDA RCMC No:</strong> APEDA/DEL/2022/AGRO-88219</div>
              <div><strong className="text-stone-300">FSSAI Central License:</strong> 10422000000341</div>
              <div><strong className="text-stone-300">US FDA Registration:</strong> 19842103982</div>
              <div><strong className="text-stone-300">IEC Code:</strong> 0518092311</div>
            </div>
          </div>

          {/* Suta Product Calibration */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Suta Caliber Grades</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#grades" className="hover:text-orange-400 transition-colors">6+ Suta King Jumbo (22-26mm)</a></li>
              <li><a href="#grades" className="hover:text-orange-400 transition-colors">5.5 Suta Super Jumbo (18-21mm)</a></li>
              <li><a href="#grades" className="hover:text-orange-400 transition-colors">5.0 Suta Classic Grade A</a></li>
              <li><a href="#grades" className="hover:text-orange-400 transition-colors">4.5 Suta Commercial Medium</a></li>
              <li><a href="#grades" className="hover:text-orange-400 transition-colors">Pure Makhana Atta (Flour)</a></li>
              <li><a href="#flavors" className="hover:text-orange-400 transition-colors">Roasted & Spiced Makhana</a></li>
            </ul>
          </div>

          {/* Quick Operations & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Commercial Tools</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#calculator" className="hover:text-orange-400 transition-colors">B2B Container Sizer</a></li>
              <li><a href="#sample-kit" className="hover:text-orange-400 transition-colors">Request Sample Evaluation Box</a></li>
              <li><button onClick={onOpenSpecSheet} className="hover:text-orange-400 text-left transition-colors">Download Spec Sheet & COA</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-orange-400 text-left transition-colors">Generate Proforma Invoice</button></li>
              <li><a href="#infrastructure" className="hover:text-orange-400 transition-colors">Private Labeling (OEM)</a></li>
              <li><a href="#nutrition" className="hover:text-orange-400 transition-colors">Nutritional Comparison Matrix</a></li>
            </ul>
          </div>

          {/* Direct Mill & Export Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Mill & Export Contact</h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>Bela Industrial Area, Darbhanga, Bihar - 846005</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="tel:+919871044219" className="hover:text-white">+91 98710 44219</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="mailto:exports@vyasagro.com" className="hover:text-white">exports@vyasagro.com</a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg text-center"
                >
                  Wholesale Trade Inquiry
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-stone-800 bg-stone-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Vyas Agro Foods Limited. All Rights Reserved. Mithila Phool Makhana Exporter.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Mithila Makhana GI Tag 696</span>
            <span aria-hidden="true">·</span>
            <span>APEDA & FDA Registered</span>
            <span aria-hidden="true">·</span>
            <span>Non-GMO Certified</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
