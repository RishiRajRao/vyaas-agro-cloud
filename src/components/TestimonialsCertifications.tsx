import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/makhanaData';
import { Award, ShieldCheck, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';

export const TestimonialsCertifications: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      quote: "Vyas Agro has supplied our US healthy snack chain with 5.5 Suta and 6 Suta makhana for over two years. Their moisture consistency is strictly sub-8%, and we have recorded zero pest or mould incidents across 18 sea containers.",
      author: "Marcus Vance",
      title: "VP of Supply Chain",
      company: "Aura Superfoods LLC (New Jersey, USA)",
      rating: 5,
    },
    {
      quote: "Finding true 6+ Suta King size without unpopped hard seed kernels is notoriously difficult in the open mandi. Vyas Agro’s dual optical color sorting delivers unmatched round white pops for our luxury corporate gifting hampers in Dubai.",
      author: "Tariq Al-Mansoor",
      title: "Managing Director",
      company: "Al-Zahra Gourmet Trading (Dubai, UAE)",
      rating: 5,
    },
    {
      quote: "We partnered with Vyas Agro for private label peri-peri and pink salt makhana pouches. Their turnaround on rotogravure packaging and food laboratory COA test reports was flawless. A gold standard Bihar processor.",
      author: "Pooja Singhania",
      title: "Founder & CEO",
      company: "PureBite Snacking Pvt Ltd (Mumbai, India)",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ) for export and domestic orders?",
      a: "For domestic wholesale, our standard minimum order quantity is 500 kg. For international sea freight, we recommend at least 1x 20ft Full Container Load (approx. 4.5 to 5.5 Metric Tons of voluminous makhana), though LCL pallets can be arranged for sample and trial runs."
    },
    {
      q: "How does Vyas Agro guarantee zero burnt speckles and unpopped husks?",
      a: "We deploy high-precision Sortex optical color sorters with dual HD cameras and pneumatic air ejectors. Every popped kernel is photographed from multiple angles in flight, ejecting any kernel with black seed coat fragments or scorching with 99.8% precision."
    },
    {
      q: "What certifications are provided with export shipments?",
      a: "Every export container is accompanied by a Certificate of Analysis (COA) specifying moisture, ash, and microbiological limits, Phytosanitary Certificate issued by Indian Plant Quarantine authorities, Certificate of Origin (COO), APEDA documentation, and US FDA prior-notice compliance."
    },
    {
      q: "Do you offer private labeling (OEM) and customized flavored makhana?",
      a: "Yes. We offer complete contract manufacturing including cylinder engraved roll pouches (Doypacks), nitrogen gas flushing (<1% residual oxygen for 12 months crisp shelf life), and proprietary seasoning blending (such as Peri Peri, Truffle, Himalayan Salt, Cream & Onion, or Sweet Jaggery)."
    },
    {
      q: "What are your standard export payment terms and lead times?",
      a: "Standard export payment terms are 30% advance via T/T and 70% against clean bill of lading (B/L) copy, or Irrevocable Confirmed Letter of Credit (L/C) at sight. Dispatch from our Bihar facility to Mundra/JNPT port takes 4–6 days."
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>International Compliance & Global Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Accreditations, Certifications & Trade Proof
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Backed by international food safety protocols and statutory export recognitions, ensuring smooth customs clearance across North American, European, and Middle Eastern ports of entry.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.code} className="bg-stone-950/80 border border-stone-800 rounded-xl p-4 space-y-2 hover:border-orange-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-sm text-orange-400">{cert.code}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="font-semibold text-xs text-white">{cert.name}</div>
              <p className="text-[11px] text-stone-400 leading-normal">{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-6">
            Institutional Buyer Testimonials
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-stone-950/70 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-800 text-xs">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-stone-400 text-[11px]">{t.title} · {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold font-serif text-white">Frequently Asked Trade & Export Questions</h3>
            <p className="text-xs text-stone-400 mt-1">Everything you need to know about purchasing bulk makhana from Vyas Agro</p>
          </div>

          <div className="divide-y divide-stone-800">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-stone-200 hover:text-orange-400 gap-4"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-orange-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs text-stone-400 leading-relaxed pr-6">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
