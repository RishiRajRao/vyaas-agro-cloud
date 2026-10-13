import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ContactInquiryProps {
  initialGrade?: string;
}

export const ContactInquiry: React.FC<ContactInquiryProps> = ({ initialGrade }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    inquiryType: 'Export Bulk (FCL/LCL)',
    gradeInterest: initialGrade || '5.5 Suta Super Jumbo Grade',
    estimatedVolume: '1 - 5 Metric Tons',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `VA-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(ref);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vyas Agro Export Desk, I would like to inquire about wholesale Phool Makhana supply for ${formData.company || 'my firm'}. Please share your latest export price list.`
    );
    window.open(`https://wa.me/919871044219?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Direct Commercial Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Connect with Vyas Agro Export & Institutional Desk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Whether you are an overseas importer, a supermarket category buyer, or seeking institutional wholesale supply in India, our trade specialists respond within 4 business hours with certified COA documentation and proforma price schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Commercial Contacts & Facilities */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Card */}
            <div className="bg-gradient-to-br from-emerald-950/60 to-stone-900 border border-emerald-500/40 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Instant Trade Chat</span>
                <span className="text-[11px] text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded-full font-mono">24/7 Desk</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-white">Chat Directly via WhatsApp</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Need quick container freight quotes, FOB rates, or live video inspection of the current sorting lot? Message our export manager directly.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Commercial Chat</span>
              </button>
            </div>

            {/* Direct Physical Offices */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 space-y-5 text-xs">
              
              <div className="space-y-1">
                <div className="text-stone-400 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Processing Plant & Cold Storage Facility</span>
                </div>
                <div className="text-white font-semibold">Vyas Agro Processing Park</div>
                <div className="text-stone-400">Plot 14-18, Agro Food Processing Cluster, Bela Industrial Area, Darbhanga, Bihar - 846005, India</div>
              </div>

              <div className="space-y-1 pt-3 border-t border-stone-800">
                <div className="text-stone-400 font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-orange-400" />
                  <span>Corporate & International Export Headquarters</span>
                </div>
                <div className="text-white font-semibold">Vyas Agro Foods Limited</div>
                <div className="text-stone-400">Tower B, 7th Floor, DLF Cyber City, Sector 24, Gurugram, Delhi NCR - 122002, India</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800">
                <div>
                  <div className="text-stone-500 font-medium">Export Hotline</div>
                  <a href="tel:+919871044219" className="text-white font-mono hover:text-orange-400 block mt-0.5">
                    +91 98710 44219
                  </a>
                </div>
                <div>
                  <div className="text-stone-500 font-medium">Plant Direct</div>
                  <a href="tel:+916200291845" className="text-white font-mono hover:text-orange-400 block mt-0.5">
                    +91 62002 91845
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800">
                <div className="text-stone-500 font-medium">Official Email Desk</div>
                <a href="mailto:exports@vyasagro.com" className="text-orange-400 font-medium hover:underline block mt-0.5">
                  exports@vyasagro.com / info@vyasagro.com
                </a>
              </div>

            </div>

          </div>

          {/* Right: Comprehensive Commercial Quotation & Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Inquiry Successfully Registered!</h3>
                <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span> from <span className="text-white font-semibold">{formData.company}</span>. Your formal request for <span className="text-orange-400">{formData.gradeInterest}</span> ({formData.estimatedVolume}) has been forwarded to our head exporter.
                </p>
                <div className="p-3 bg-stone-950 border border-stone-800 rounded-xl inline-block">
                  <span className="text-xs text-stone-400">Formal Reference: </span>
                  <span className="text-xs font-mono font-bold text-orange-400">{inquiryRef}</span>
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-stone-400 hover:text-white underline underline-offset-4"
                  >
                    Submit an additional commercial inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="border-b border-stone-800 pb-3 mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Commercial Purchase Requisition</span>
                  <span className="text-[11px] text-stone-400">Response Guaranteed &lt; 4 Hours</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar / John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Horizon Imports LLC / Organic Mandi"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="purchasing@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210 / +1 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Inquiry Nature</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    >
                      <option value="Export Bulk (FCL/LCL)">Export Bulk (FCL/LCL)</option>
                      <option value="Domestic Mandi Wholesale">Domestic Mandi Wholesale</option>
                      <option value="Private Label OEM (Pouches)">Private Label OEM (Pouches)</option>
                      <option value="Distributor / C&F Dealership">Distributor / C&F Dealership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Target Grade</label>
                    <select
                      value={formData.gradeInterest}
                      onChange={(e) => setFormData({ ...formData, gradeInterest: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    >
                      <option value="6+ Suta King Jumbo">6+ Suta King Jumbo (22-26mm)</option>
                      <option value="5.5 Suta Super Jumbo">5.5 Suta Super Jumbo (18-21mm)</option>
                      <option value="5.0 Suta Classic Grade">5.0 Suta Classic Grade (15-17mm)</option>
                      <option value="4.5 Suta Commercial">4.5 Suta Commercial</option>
                      <option value="Flavored Roasted Assorted">Flavored Roasted Assorted</option>
                      <option value="Pure Makhana Atta/Flour">Pure Makhana Atta/Flour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Estimated Volume</label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2.5 text-stone-200 focus:outline-none focus:border-orange-500"
                    >
                      <option value="500 kg - 1 MT (Trial)">500 kg - 1 MT (Trial)</option>
                      <option value="1 - 5 Metric Tons">1 - 5 Metric Tons</option>
                      <option value="1x 20ft FCL (~5 MT)">1x 20ft FCL (~5 MT)</option>
                      <option value="1x 40ft HC (~12 MT)">1x 40ft HC (~12 MT)</option>
                      <option value="Annual Contract (50+ MT)">Annual Contract (50+ MT)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">Detailed Specifications or Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about desired packaging (e.g. 10kg vacuum or branded doy-pouches), destination port, CIF/FOB preference, or private labeling requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Purchase Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
