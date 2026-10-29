import React from 'react';
import { 
  Sparkles, 
  Sun, 
  Car, 
  Compass, 
  Droplets, 
  Home, 
  Check, 
  X as XIcon, 
  ShieldCheck, 
  Scale
} from 'lucide-react';
import { PROPERTY_DETAILS, COMPARISON_POINTS } from '../data/propertyData';

export const KeyHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Property Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-3">
            ✨ Key Property Highlights
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Every feature of this residence has been tailored for peace of mind, vastu prosperity, and expansive everyday comfort.
          </p>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Spacious 3 BHK Flat */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-amber-500/20">
              <Home className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Configuration
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              Spacious 3 BHK Flat
            </h3>
            <div className="text-sm font-semibold text-stone-200 mb-2">
              1,235 sq ft built-up area
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Generous room proportions, an expansive living hall with designer false ceiling, and an oversized Master Suite with dedicated dressing area.
            </p>
          </div>

          {/* Card 2: Attached Private Terrace (The Star Feature) */}
          <div className="bg-gradient-to-br from-stone-900 to-amber-950/30 border border-amber-500/40 rounded-2xl p-6 transition-all hover:shadow-xl group relative overflow-hidden">
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950">
              Star Feature
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-amber-500/30">
              <Sun className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Outdoor Sanctuary
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              Beautiful Private Terrace
            </h3>
            <div className="text-sm font-semibold text-amber-200 mb-2">
              102 sq ft Attached Space
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Directly connected to the living room. Equipped with weather-proof translucent skylight pergola, safety railings, decorative privacy screen, and ceramic tile flooring.
            </p>
          </div>

          {/* Card 3: Dedicated Covered Car Parking */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-sky-500/20">
              <Car className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
              The Parking Luxury
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              Dedicated Covered Car Parking
            </h3>
            <div className="text-sm font-semibold text-stone-200 mb-2">
              100 sq ft Sheltered Bay
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              A massive, stress-free asset for Central Pune. No fighting for roadside spots, no weather damage. Safe, covered, and hassle-free vehicle security.
            </p>
          </div>

          {/* Card 4: Vastu Advantage */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-emerald-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              Vastu Advantage
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              Auspicious East-Facing Entrance
            </h3>
            <div className="text-sm font-semibold text-emerald-300 mb-2">
              Highly Preferred Orientation
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Considered most sacred and beneficial in Vastu Shastra. Channels positive morning solar energy, natural illumination, and enduring family harmony.
            </p>
          </div>

          {/* Card 5: PMC Corporation Water Supply */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Water Utilities
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              PMC Corporation Water Supply
            </h3>
            <div className="text-sm font-semibold text-cyan-200 mb-2">
              Direct Municipal Pipeline
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Clean, dependable PMC municipal water supply. Eliminates costly private water tanker dependence common in outskirts and suburbs.
            </p>
          </div>

          {/* Card 6: Total Usable Area Matrix */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-purple-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
              Total Area Composite
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif-luxury">
              1,437 Sq Ft Usable Space
            </h3>
            <div className="text-sm font-semibold text-purple-200 mb-2">
              1,235 + 102 Terrace + 100 Parking
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Transparent, full-disclosure space. Clear title ownership with all documentation verified and ready for quick registration.
            </p>
          </div>

        </div>

        {/* Market Comparison Card: Why This Property is a Rarity */}
        <div className="bg-stone-900 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Scale className="w-4 h-4" />
                <span>Value Comparison Matrix</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif-luxury">
                How this Home Compares with Standard Central Pune Properties
              </h3>
            </div>
            <div className="text-xs text-stone-400 max-w-sm">
              Finding a 3 BHK in Central Pune that combines high square footage, dedicated covered car parking, and an attached terrace is almost unheard of.
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">Key Criteria</th>
                  <th className="py-3 px-4 bg-amber-500/10 text-amber-300 font-bold rounded-t-xl">
                    ⭐ This 3 BHK Resale Residence
                  </th>
                  <th className="py-3 px-4 text-stone-400">Typical Central Pune / Peth Flats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {COMPARISON_POINTS.map((pt, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-stone-200">
                      {pt.feature}
                    </td>
                    <td className="py-3.5 px-4 bg-amber-500/5 font-semibold text-white">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{pt.thisProperty}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-stone-400">
                      <div className="flex items-center gap-2">
                        <XIcon className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                        <span>{pt.marketAverage}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
