import React, { useState } from 'react';
import { MAKHANA_GRADES, MAKHANA_FLAVORS } from '../data/makhanaData';
import { Package, Check, Sparkles, Truck, CheckCircle2, Copy } from 'lucide-react';

export const SampleKitBuilder: React.FC = () => {
  const [selectedGrades, setSelectedGrades] = useState<string[]>(['grade-6-plus', 'grade-5-5']);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(['himalayan-salt', 'peri-peri']);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('India');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const toggleGrade = (id: string) => {
    if (selectedGrades.includes(id)) {
      if (selectedGrades.length > 1) {
        setSelectedGrades(selectedGrades.filter(g => g !== id));
      }
    } else {
      if (selectedGrades.length < 3) {
        setSelectedGrades([...selectedGrades, id]);
      }
    }
  };

  const toggleFlavor = (id: string) => {
    if (selectedFlavors.includes(id)) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== id));
    } else {
      if (selectedFlavors.length < 2) {
        setSelectedFlavors([...selectedFlavors, id]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `VA-SMP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(generatedId);
    setIsSubmitted(true);
  };

  return (
    <section id="sample-kit" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Package className="w-4 h-4 text-orange-400" />
            <span>Commercial Quality Evaluation</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide DHL / FedEx Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Build Your Custom B2B Evaluation Sample Box
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            We understand international procurement protocols. Evaluate our crispness, moisture retention, and zero-defect optical sorting firsthand before issuing commercial purchase contracts.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold font-serif text-white">Sample Box Requisition Confirmed!</h3>
            
            <p className="text-sm text-stone-300 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{name}</span> ({company}). Your custom sample kit containing {selectedGrades.length} raw grades and {selectedFlavors.length} roasted flavors has been queued for dispatch.
            </p>

            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl inline-flex flex-col items-center gap-1.5">
              <span className="text-xs text-stone-400">Sample Tracking Docket ID:</span>
              <span className="text-lg font-mono font-bold text-orange-400 tracking-wider">{trackingId}</span>
              <span className="text-[11px] text-emerald-400">Our export desk will contact {phone || email} within 4 business hours.</span>
            </div>

            <div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-stone-400 hover:text-white underline underline-offset-4"
              >
                Configure another sample request
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Box Customizer Selection */}
            <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-7">
              
              {/* Select Raw Grades */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                    1. Select Raw Suta Grades (Up to 3)
                  </span>
                  <span className="text-xs font-mono text-orange-400">{selectedGrades.length}/3 Selected</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {MAKHANA_GRADES.map((g) => {
                    const isSelected = selectedGrades.includes(g.id);
                    return (
                      <button
                        type="button"
                        key={g.id}
                        onClick={() => toggleGrade(g.id)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-orange-500/10 border-orange-500 text-white'
                            : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className={isSelected ? 'text-orange-400' : 'text-stone-300'}>{g.suta}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-orange-400" />}
                        </div>
                        <div className="text-[11px] text-stone-400 mt-1 truncate">{g.name.replace(/^[0-9.+ ]+Suta /, '')}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Roasted Flavors */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                    2. Select Gourmet Roasted Flavors (Up to 2)
                  </span>
                  <span className="text-xs font-mono text-orange-400">{selectedFlavors.length}/2 Selected</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {MAKHANA_FLAVORS.map((f) => {
                    const isSelected = selectedFlavors.includes(f.id);
                    return (
                      <button
                        type="button"
                        key={f.id}
                        onClick={() => toggleFlavor(f.id)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-orange-500/10 border-orange-500 text-white'
                            : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className={isSelected ? 'text-orange-400' : 'text-stone-300'}>{f.name.split('&')[0]}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-orange-400" />}
                        </div>
                        <div className="text-[11px] text-stone-400 mt-1">{f.subtitle}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sample Box Contents Preview */}
              <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-xl space-y-2">
                <div className="text-xs font-medium text-stone-400 flex items-center justify-between">
                  <span>Selected Sample Contents:</span>
                  <span className="text-emerald-400">Total {selectedGrades.length + selectedFlavors.length} Sample Packs</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {selectedGrades.map(gid => {
                    const gr = MAKHANA_GRADES.find(g => g.id === gid);
                    return gr ? (
                      <span key={gid} className="bg-stone-800 text-stone-200 px-2.5 py-1 rounded border border-stone-700">
                        100g {gr.suta}
                      </span>
                    ) : null;
                  })}
                  {selectedFlavors.map(fid => {
                    const fl = MAKHANA_FLAVORS.find(f => f.id === fid);
                    return fl ? (
                      <span key={fid} className="bg-stone-800 text-orange-300 px-2.5 py-1 rounded border border-orange-500/30">
                        35g {fl.name.split('&')[0]}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>

            </div>

            {/* Delivery Requisition Form */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Courier Dispatch Details</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-5">
                Ship Sample Box to Your Office
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Company / Importer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Apex Global Trading LLC / Organic Market Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Contact Officer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rahul Sharma / David Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000 / +91 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Country of Delivery *</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    >
                      <option value="India">India (Domestic Mandi/FMCG)</option>
                      <option value="USA">United States</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany / EU</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other Global Port</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">Courier Shipping Address *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Full street address, city, state/province, postal/ZIP code..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Sample Box (Free for Verified Buyers)</span>
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    Complimentary for qualified distributors, FMCG brands & export importers.
                  </p>
                </div>
              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
