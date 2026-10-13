import React, { useState } from 'react';
import { Phone, Mail, Globe, Menu, X, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSpecSheet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenSpecSheet }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      {/* Top Trade Info Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/60 px-4 py-1.5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              GI-Certified Mithila Makhana Processor
            </span>
            <span className="hidden sm:inline text-stone-600" aria-hidden="true">|</span>
            <span className="hidden sm:inline text-stone-300">APEDA · US FDA · FSSAI Central Registered</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="mailto:exports@vyasagro.com" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>exports@vyasagro.com</span>
            </a>
            <span className="text-stone-700" aria-hidden="true">|</span>
            <a 
              href="tel:+919871044219" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 98710 44219</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-orange-400 via-orange-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-orange-950/40 text-stone-950 font-bold text-xl tracking-tighter">
              VA
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">VYAS AGRO</span>
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">FOODS</span>
              </div>
              <p className="text-[11px] text-stone-400 font-light tracking-wide">
                Mithila Phool Makhana · Direct Processor & Exporter
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#grades" className="hover:text-orange-400 transition-colors">Suta Grades</a>
            <a href="#flavors" className="hover:text-orange-400 transition-colors">Roasted Flavors</a>
            <a href="#calculator" className="hover:text-orange-400 transition-colors">Bulk Estimator</a>
            <a href="#origin" className="hover:text-orange-400 transition-colors">Mithila Origin</a>
            <a href="#nutrition" className="hover:text-orange-400 transition-colors">Superfood Nutrition</a>
            <a href="#infrastructure" className="hover:text-orange-400 transition-colors">Processing Facility</a>
            <a href="#certifications" className="hover:text-orange-400 transition-colors">Certifications</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenSpecSheet}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg border border-stone-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Spec Sheet</span>
            </button>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-400 rounded-lg shadow-sm transition-all"
            >
              <span>Wholesale Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-orange-500 rounded-md"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-stone-200">
            <a 
              href="#grades" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Suta Grades & Sizing
            </a>
            <a 
              href="#flavors" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Roasted Flavors
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Bulk Order Calculator
            </a>
            <a 
              href="#origin" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Mithila Origin & Harvest
            </a>
            <a 
              href="#nutrition" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Nutritional Matrix
            </a>
            <a 
              href="#infrastructure" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Facility & Private Labeling
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-400"
            >
              Export Certifications
            </a>
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecSheet();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-stone-200 bg-stone-900 border border-stone-700 rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              Download Technical Spec Sheet
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-orange-500 rounded-lg"
            >
              Request Bulk Proforma / Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
