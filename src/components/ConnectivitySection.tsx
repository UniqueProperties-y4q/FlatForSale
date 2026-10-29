import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  ShoppingBag, 
  Landmark, 
  Store, 
  Bus, 
  GraduationCap, 
  Activity, 
  Navigation,
  Clock,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { CONNECTIVITY_HIGHLIGHTS } from '../data/propertyData';

export const ConnectivitySection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Landmarks' },
    { key: 'walkable', label: '🚶 5-Min Walk' },
    { key: 'transit', label: '🚇 Metro & Transit' },
    { key: 'shopping', label: '🛍️ Shopping & Markets' },
    { key: 'heritage', label: '🏛️ Sadashiv Peth Heritage' },
    { key: 'education', label: '🎓 Schools & Colleges' },
    { key: 'healthcare', label: '🏥 Healthcare' },
  ];

  const filteredItems = CONNECTIVITY_HIGHLIGHTS.filter(item => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'walkable') return item.walkingTime && item.walkingTime.includes('5 mins');
    return item.category === filterCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'transit': return <Train className="w-5 h-5 text-sky-400" />;
      case 'shopping': return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'heritage': return <Landmark className="w-5 h-5 text-emerald-400" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'healthcare': return <Activity className="w-5 h-5 text-rose-400" />;
      default: return <MapPin className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="connectivity" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Unrivalled Central Connectivity
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-3">
            At the Cultural & Commercial Heart of Pune
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Bordering Sadashiv Peth & Subhash Nagar. Experience the sheer luxury of walking to world-famous markets, metro stations, and timeless Pune institutions.
          </p>
        </div>

        {/* 4 Macro Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-colors">
            <div className="text-amber-400 font-bold text-lg font-serif-luxury flex items-center gap-2">
              <Landmark className="w-5 h-5" />
              <span>Sadashiv Peth</span>
            </div>
            <div className="text-xs font-semibold text-stone-200 mt-1">Seamless Proximity</div>
            <p className="text-xs text-stone-400 mt-1">
              Situated right next to the vibrant Subhash Nagar and Sadashiv Peth residential corridor.
            </p>
          </div>

          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-colors">
            <div className="text-amber-400 font-bold text-lg font-serif-luxury flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>5-Min Walk</span>
            </div>
            <div className="text-xs font-semibold text-stone-200 mt-1">Shopping Convenience</div>
            <p className="text-xs text-stone-400 mt-1">
              Stroll casually to Laxmi Road, Tulshibaug, and Mahatma Phule Mandai market.
            </p>
          </div>

          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-colors">
            <div className="text-amber-400 font-bold text-lg font-serif-luxury flex items-center gap-2">
              <Train className="w-5 h-5" />
              <span>Mandai Metro</span>
            </div>
            <div className="text-xs font-semibold text-stone-200 mt-1">Transit Links</div>
            <p className="text-xs text-stone-400 mt-1">
              Quick access to Pune Metro underground line, Swargate ST Stand, and arterial Bajirao/Tilak roads.
            </p>
          </div>

          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-colors">
            <div className="text-amber-400 font-bold text-lg font-serif-luxury flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span>&lt; 3 KM Radius</span>
            </div>
            <div className="text-xs font-semibold text-stone-200 mt-1">Daily Essentials</div>
            <p className="text-xs text-stone-400 mt-1">
              Top schools, national banks, renowned hospitals, and cultural landmarks all within 3 km.
            </p>
          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = filterCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setFilterCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-950 rounded-2xl border border-stone-800 p-5 hover:border-amber-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-stone-900 text-amber-300 border border-stone-800">
                    {item.distance}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 font-serif-luxury">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
                {item.walkingTime && (
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {item.walkingTime}
                  </span>
                )}
                {item.drivingTime && (
                  <span className="flex items-center gap-1 text-stone-400">
                    <Navigation className="w-3.5 h-3.5" />
                    {item.drivingTime} drive
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pune Central Map Schematic Card */}
        <div className="mt-12 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
              Strategic Location Advantage
            </span>
            <h3 className="text-2xl font-bold font-serif-luxury text-white">
              Why Central Pune / Sadashiv Peth Commands Unmatched Prestige
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Living here means never being stuck in highway traffic to buy groceries or attend family festivities. Generations of Pune families value the peace, cultural prestige, safe walkable neighborhoods, and immediate access to Pune’s finest schools and medical care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://www.google.com/maps/search/Sadashiv+Peth+Subhash+Nagar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 text-xs font-semibold flex items-center gap-2 transition-all hover:scale-102"
            >
              <span>View Location on Google Maps</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>

            <div className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium text-center">
              📍 Border of Sadashiv Peth & Subhash Nagar
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
