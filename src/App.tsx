/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GradeInspector } from './components/GradeInspector';
import { BulkCalculator } from './components/BulkCalculator';
import { FlavorsShowcase } from './components/FlavorsShowcase';
import { FarmToFork } from './components/FarmToFork';
import { NutritionalMatrix } from './components/NutritionalMatrix';
import { InfrastructureExport } from './components/InfrastructureExport';
import { SampleKitBuilder } from './components/SampleKitBuilder';
import { TestimonialsCertifications } from './components/TestimonialsCertifications';
import { ContactInquiry } from './components/ContactInquiry';
import { Footer } from './components/Footer';
import { SpecSheetModal } from './components/SpecSheetModal';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);
  const [preloadedQuote, setPreloadedQuote] = useState<{
    grade?: string;
    quantityMt?: number;
    packagingType?: string;
    destination?: string;
    estimatedCost?: string;
  } | undefined>(undefined);

  const [activeGradeForInquiry, setActiveGradeForInquiry] = useState<string>('5.5 Suta Super Jumbo Grade');

  const handleOpenQuote = (gradeName?: string) => {
    if (gradeName) {
      setPreloadedQuote({
        grade: gradeName,
        quantityMt: 3,
        packagingType: '10kg Vacuum Multi-layer Foil Bags',
        destination: 'UAE - Jebel Ali',
      });
      setActiveGradeForInquiry(gradeName);
    }
    setIsQuoteOpen(true);
  };

  const handleCalculatorPreload = (data: {
    grade: string;
    quantityMt: number;
    packagingType: string;
    destination: string;
    estimatedCost: string;
  }) => {
    setPreloadedQuote(data);
    setActiveGradeForInquiry(data.grade);
    setIsQuoteOpen(true);
  };

  const handleScrollToSampleKit = () => {
    const el = document.getElementById('sample-kit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Primary Navigation */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          onOpenSampleKit={handleScrollToSampleKit} 
        />

        {/* Suta Calibration & Grade Visual Inspector */}
        <GradeInspector 
          onSelectForQuote={handleOpenQuote}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />

        {/* Commercial Freight & Container Calculator */}
        <BulkCalculator 
          onPreloadQuote={handleCalculatorPreload} 
        />

        {/* Artisan Roasted Flavors */}
        <FlavorsShowcase 
          onOpenSampleKit={handleScrollToSampleKit}
          onOpenQuote={() => handleOpenQuote('Roasted Flavored Assorted')}
        />

        {/* Sacred Mithila Origin & Wetland Processing */}
        <FarmToFork />

        {/* Clinical Superfood Nutritional Matrix */}
        <NutritionalMatrix />

        {/* Processing Infrastructure & Export Logistics */}
        <InfrastructureExport 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* Interactive Sample Evaluation Box Builder */}
        <SampleKitBuilder />

        {/* Accreditations, Testimonials & Trade FAQs */}
        <TestimonialsCertifications />

        {/* Direct Commercial Contacts & Wholesale Form */}
        <ContactInquiry 
          initialGrade={activeGradeForInquiry} 
        />
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer 
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Modals */}
      <SpecSheetModal 
        isOpen={isSpecSheetOpen} 
        onClose={() => setIsSpecSheetOpen(false)} 
      />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)}
        preloadedData={preloadedQuote}
      />
    </div>
  );
}
