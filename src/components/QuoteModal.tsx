import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Box, ArrowRight } from 'lucide-react';
import { MAKHANA_GRADES } from '../data/makhanaData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preloadedData?: {
    grade?: string;
    quantityMt?: number;
    packagingType?: string;
    destination?: string;
    estimatedCost?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preloadedData }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'United States',
    grade: preloadedData?.grade || '5.5 Suta Super Jumbo Grade',
    quantity: preloadedData?.quantityMt ? `${preloadedData.quantityMt} MT` : '3 Metric Tons',
    packaging: preloadedData?.packagingType || '10kg Vacuum Multi-layer Foil Bags',
    destination: preloadedData?.destination || 'UAE - Jebel Ali',
    remarks: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  useEffect(() => {
    if (preloadedData) {
      setFormData(prev => ({
        ...prev,
        grade: preloadedData.grade || prev.grade,
        quantity: preloadedData.quantityMt ? `${preloadedData.quantityMt} MT` : prev.quantity,
        packaging: preloadedData.packagingType || prev.packaging,
        destination: preloadedData.destination || prev.destination,
      }));
    }
  }, [preloadedData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `VA-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteId(id);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl text-stone-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800 bg-stone-950/60 rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold font-serif text-white">Commercial Wholesale Proforma Requisition</h3>
            <p className="text-xs text-stone-400 mt-0.5">Direct Mill Supply from Vyas Agro Darbhanga Processing Works</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-serif text-white">Quotation Request Logged!</h4>
              <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span> ({formData.company}). Your formal Request for Quotation (RFQ) has been routed to our commercial export desk.
              </p>
              <div className="p-3.5 bg-stone-950 border border-stone-800 rounded-xl inline-block text-xs">
                <span className="text-stone-400">Formal RFQ Reference ID: </span>
                <span className="font-mono font-bold text-orange-400">{quoteId}</span>
              </div>
              <p className="text-[11px] text-stone-400">
                You will receive a formal CIF/FOB proforma invoice breakdown with lot inspection photos via email within 4 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg text-xs"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {preloadedData?.estimatedCost && (
                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-stone-300">Calculator Estimate Attached:</span>
                  <span className="text-orange-400 font-mono font-bold">{preloadedData.estimatedCost}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Contact Officer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Anita Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Company / Importer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pacific Food Imports LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="orders@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555-0192 / +91 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Target Suta Grade</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  >
                    {MAKHANA_GRADES.map(g => (
                      <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                    <option value="Roasted Flavored Assorted">Roasted Flavored Assorted</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Order Volume / Sizing</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Metric Tons / 1x 20ft FCL"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Packaging Requirement</label>
                  <select
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  >
                    <option value="10kg Vacuum Multi-layer Foil Bags">10kg Vacuum Multi-layer Foil Bags</option>
                    <option value="20kg HDPE Woven Bags with Liner">20kg HDPE Woven Bags with Liner</option>
                    <option value="100g Stand-up Nitrogen Pouches">100g Stand-up Nitrogen Pouches (OEM)</option>
                    <option value="250g Luxury Composite Canisters">250g Luxury Composite Canisters</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Destination Port / Delivery City</label>
                  <input
                    type="text"
                    placeholder="e.g. Port of Los Angeles, Jebel Ali, Delhi NCR"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Additional Logistics & Terms (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Incoterms preference (FOB Mundra / CIF / EXW), private brand printing, or inspection requests..."
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-stone-200 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quotation Request (Instant Mill Desk Alert)</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
