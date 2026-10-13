export interface MakhanaGrade {
  id: string;
  name: string;
  suta: string;
  sizeMm: string;
  badge: string;
  description: string;
  popYield: string;
  moisture: string;
  color: string;
  brokenPercentage: string;
  idealFor: string[];
  exportDemand: 'Very High' | 'High' | 'Moderate';
  shelfLife: string;
  pricePerKgApprox: number; // approximate benchmark in INR
}

export interface MakhanaFlavor {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  colorTheme: string;
  accentHex: string;
  flavorProfile: string[];
  ingredients: string;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  pouchSizes: string[];
}

export interface NutritionalComparisonItem {
  name: string;
  caloriesPer100g: number;
  protein: number; // grams
  fat: number; // grams
  fiber: number; // grams
  glycemicIndex: string;
  antioxidants: string;
  sodium: string;
  verdict: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  grade: string;
  quantityMt: number;
  packagingType: string;
  inquiryType: 'Export Bulk' | 'Domestic Wholesale' | 'Private Label (OEM)' | 'Sample Kit';
  notes?: string;
}
