import React from 'react';
import { 
  Building2, 
  MapPin, 
  Printer, 
  Phone, 
  Mail, 
  MessageCircle, 
  Sun, 
  Car, 
  Compass, 
  Droplets, 
  Home, 
  CheckCircle2, 
  Train, 
  ShoppingBag,
  ArrowLeft,
  QrCode
} from 'lucide-react';
import { PROPERTY_DETAILS, PROPERTY_PHOTOS, CONNECTIVITY_HIGHLIGHTS } from '../data/propertyData';

interface PamphletPrintViewProps {
  onExitPamphletMode: () => void;
  onPrint: () => void;
}

export const PamphletPrintView: React.FC<PamphletPrintViewProps> = ({
  onExitPamphletMode,
  onPrint
}) => {
  return (
    <div className="bg-stone-100 min-h-screen py-6 px-3 sm:px-6 text-stone-900 font-sans">
      
      {/* Top Controls Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 bg-stone-900 text-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 no-print shadow-xl">
        <button
          onClick={onExitPamphletMode}
          className="flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Interactive Showcase</span>
        </button>

        <div className="text-xs text-stone-300">
          📄 Ready-to-Print 2-Page Digital Property Pamphlet
        </div>

        <button
          onClick={onPrint}
          className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:bg-amber-400"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Pamphlet Page Container (Formatted for A4 / Letter) */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* ================= PAGE 1: COVER & CORE HIGHLIGHTS ================= */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-10 print-page-break print:shadow-none print:border-none print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-amber-600 pb-5 mb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
                <span>EXCLUSIVE RESALE PROPERTY PAMPHLET</span>
                <span>•</span>
                <span className="text-emerald-700">PMC WATER & EAST VASTU</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-serif-luxury mt-1">
                Luxury 3 BHK Flat in Central Pune
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 font-medium flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span>Sadashiv Peth & Subhash Nagar Border, Central Pune</span>
              </p>
            </div>

            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase font-bold text-stone-400">Total Usable Area</div>
              <div className="text-2xl font-bold font-serif-luxury text-amber-700">1,437 Sq Ft</div>
              <div className="text-[10px] text-stone-500">1235 Built-up + 102 Terrace + 100 Car Park</div>
            </div>
          </div>

          {/* Hero Photos Montage */}
          <div className="grid grid-cols-12 gap-3 mb-6">
            <div className="col-span-12 sm:col-span-8 rounded-xl overflow-hidden aspect-[16/10] bg-stone-100 border border-stone-200">
              <img
                src="/assets/aistudio/HALL_View1_df0b1bee.jpg"
                alt="Living Hall"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 sm:col-span-4 grid grid-cols-2 sm:grid-cols-1 gap-3">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                <img
                  src="/assets/aistudio/Terrace1_a3ba94fc.jpg"
                  alt="Attached Private Terrace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                <img
                  src="/assets/aistudio/MasterBedRoom_View1_e9d536cc.jpg"
                  alt="Master Bedroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Feature Pillars Banner */}
          <div className="grid grid-cols-3 gap-3 bg-stone-50 border border-stone-200 p-4 rounded-xl text-center mb-6">
            <div>
              <div className="text-xs uppercase font-bold text-stone-500">Flat Configuration</div>
              <div className="text-lg sm:text-xl font-bold text-stone-900 font-serif-luxury">3 BHK Spacious</div>
              <div className="text-[11px] text-stone-600">1,235 sq ft built-up area</div>
            </div>
            <div className="border-x border-stone-200">
              <div className="text-xs uppercase font-bold text-amber-700">Star Feature</div>
              <div className="text-lg sm:text-xl font-bold text-stone-900 font-serif-luxury">Attached Terrace</div>
              <div className="text-[11px] text-stone-600">102 sq ft covered pergola</div>
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-emerald-700">Parking Luxury</div>
              <div className="text-lg sm:text-xl font-bold text-stone-900 font-serif-luxury">Covered Car Park</div>
              <div className="text-[11px] text-stone-600">100 sq ft dedicated bay</div>
            </div>
          </div>

          {/* Key Property Highlights List */}
          <div className="space-y-3 mb-6">
            <h2 className="text-base font-bold text-stone-950 uppercase tracking-wider text-amber-800 border-b border-stone-200 pb-1">
              ✨ Key Property Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                <Compass className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-stone-900">Vastu Advantage:</strong> Highly preferred, auspicious East-Facing main entrance welcoming morning light.
                </div>
              </div>
              <div className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                <Sun className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-stone-900">The Star Feature:</strong> Beautiful attached private terrace directly accessible from living hall.
                </div>
              </div>
              <div className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                <Car className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-stone-900">The Parking Luxury:</strong> Dedicated covered car parking space (a massive, stress-free asset for central Pune).
                </div>
              </div>
              <div className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                <Droplets className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-stone-900">Water Utilities:</strong> 24x7 PMC Corporation Municipal Water supply (zero tanker dependence).
                </div>
              </div>
            </div>
          </div>

          {/* Location & Connectivity Summary */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs">
            <h3 className="font-bold text-amber-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Unrivalled Central Pune Connectivity</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700">
              <li>• <strong>Seamless Proximity:</strong> Next to Sadashiv Peth & Subhash Nagar belt.</li>
              <li>• <strong>Shopping Convenience:</strong> Just 5-min walk to Laxmi Road, Tulshibaug & Mandai.</li>
              <li>• <strong>Transit Links:</strong> Quick access to Mandai Metro Station & Swargate ST Stand.</li>
              <li>• <strong>Daily Essentials:</strong> Top schools, banks, hospitals, and temples within 3 km.</li>
            </ul>
          </div>

          {/* Page 1 Footer */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span>Direct Owner / Representative Listing • Clear Title</span>
            <span>Contact: {PROPERTY_DETAILS.contact.phone} • {PROPERTY_DETAILS.contact.email}</span>
          </div>

        </div>

        {/* ================= PAGE 2: INTERIORS, FLOORPLAN & CONTACT ================= */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-10 print:shadow-none print:border-none print:p-0">
          
          <div className="border-b-2 border-stone-900 pb-3 mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold font-serif-luxury text-stone-950">
              Interior Showcase & Room Breakdown
            </h2>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              High-Specification Finishes
            </span>
          </div>

          {/* 6 Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/Kitchen_View1_66cb25ae.jpg" alt="Kitchen" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                L-Shaped Modular Kitchen
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/MasterBedRoom_View2_71a8a5de.jpg" alt="Master Dressing" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                Master Suite Dressing Area
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/BedRoom1_View1_ca33c4fe.jpg" alt="Bedroom 1" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                Bedroom 1 with Lofts
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/BedRoom2_View1_4799d641.jpg" alt="Bedroom 2" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                Bedroom 2 / Study Room
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/Hall_View2_4574ff84.jpg" alt="Living Entertainment" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                Living Hall Entertainment
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-stone-200">
              <img src="/assets/aistudio/Entrance_dd8b391a.jpg" alt="Entrance" className="w-full h-32 object-cover" />
              <div className="p-2 bg-stone-50 text-[11px] font-semibold text-stone-800">
                East Entrance & Foyer
              </div>
            </div>
          </div>

          {/* Area Calculation Breakdown */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Comprehensive Area Specification
            </h3>
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-stone-300 text-stone-500">
                  <th className="py-1">Component</th>
                  <th className="py-1">Square Feet</th>
                  <th className="py-1">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="py-1.5 font-semibold text-stone-900">3 BHK Built-Up Flat</td>
                  <td className="py-1.5 font-mono">1,235 sq ft</td>
                  <td className="py-1.5">3 Bed + Hall + Modular Kitchen + Foyer</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-semibold text-stone-900">Attached Private Terrace</td>
                  <td className="py-1.5 font-mono text-amber-700 font-bold">+102 sq ft</td>
                  <td className="py-1.5">Pergola skylight, privacy lattice, fresh air</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-semibold text-stone-900">Dedicated Covered Car Park</td>
                  <td className="py-1.5 font-mono text-sky-700 font-bold">+100 sq ft</td>
                  <td className="py-1.5">All-weather vehicle security in Central Pune</td>
                </tr>
                <tr className="bg-stone-200/50 font-bold text-stone-950">
                  <td className="py-2">Total Usable Composite</td>
                  <td className="py-2 font-mono text-amber-800">1,437 sq ft</td>
                  <td className="py-2">Unmatched space in Sadashiv Peth vicinity</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact Box & Call to Action */}
          <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 print:border print:border-stone-800 print:text-black print:bg-stone-50">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                Direct Inquiry & Inspection
              </span>
              <h3 className="text-xl font-bold font-serif-luxury text-white print:text-stone-950 mt-1">
                Schedule Your Site Inspection Today
              </h3>
              <p className="text-xs text-stone-300 print:text-stone-600 mt-1">
                Available for private walkthroughs by prior appointment.
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PROPERTY_DETAILS.contact.phone}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PROPERTY_DETAILS.contact.email}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Available</span>
                </span>
              </div>
            </div>

            <div className="text-center bg-stone-950/80 print:bg-white p-3 rounded-xl border border-stone-800 print:border-stone-300">
              <QrCode className="w-16 h-16 text-amber-400 print:text-stone-900 mx-auto" />
              <div className="text-[10px] text-stone-400 print:text-stone-600 mt-1">
                Scan for Video Tour & Gallery
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
