import React, { useState } from 'react';
import { 
  Maximize, 
  Sun, 
  Car, 
  Home, 
  Compass, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Eye,
  ArrowRight
} from 'lucide-react';
import { PROPERTY_DETAILS, PROPERTY_PHOTOS } from '../data/propertyData';

interface FloorZone {
  id: string;
  name: string;
  areaEstimate: string;
  category: string;
  tagline: string;
  features: string[];
  photoId: string;
}

export const InteractiveFloorNav: React.FC<{ onSelectPhoto?: (id: string) => void }> = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>('terrace');

  const zones: FloorZone[] = [
    {
      id: 'entrance',
      name: 'East Entrance & Foyer',
      areaEstimate: '~65 sq ft',
      category: 'Entrance',
      tagline: 'Auspicious Vastu entrance facing the morning sun',
      features: [
        'Auspicious East-Facing main entrance',
        'Built-in entryway console and shoe storage bench',
        'Direct smooth transition into the main living hall'
      ],
      photoId: 'entrance'
    },
    {
      id: 'living',
      name: 'Grand Living Hall & Lounge',
      areaEstimate: '~260 sq ft',
      category: 'Living',
      tagline: 'Heart of the home with designer false ceiling and ambient cove lighting',
      features: [
        'Curved multi-tiered false ceiling with warm recessed LED spots',
        'Accommodates generous L-shaped sofa seating + TV console',
        'Direct French door walkout to the private attached terrace'
      ],
      photoId: 'hall-1'
    },
    {
      id: 'terrace',
      name: 'Attached Private Terrace (Star Feature)',
      areaEstimate: '102 sq ft',
      category: 'Outdoor / Terrace',
      tagline: 'Personal open-air sanctuary with translucent weather pergola',
      features: [
        'Directly attached to the living hall (easy entertainment)',
        'Full translucent overhead skylight canopy protection',
        'Lattice perimeter with lush privacy foliage & non-skid tiling'
      ],
      photoId: 'terrace-1'
    },
    {
      id: 'kitchen',
      name: 'Spacious Modular Kitchen',
      areaEstimate: '~140 sq ft',
      category: 'Kitchen',
      tagline: 'L-shaped black granite counter with dual-tone modular cabinetry',
      features: [
        'Extensive lime & ivory under-counter and wall cabinets',
        'Large window for cross breeze & cooking ventilation',
        'Separate utility niche for refrigerator and water purifier'
      ],
      photoId: 'kitchen-1'
    },
    {
      id: 'master',
      name: 'Grand Master Bedroom Suite',
      areaEstimate: '~280 sq ft',
      category: 'Master Bedroom',
      tagline: 'Expansive double-room scale with private lounge & dressing alcove',
      features: [
        'Rare, oversized layout with separate dressing/seating zone',
        'Full-height finished wooden wardrobes with overhead lofts',
        'Dressing unit with full-length mirror and ensuite bathroom'
      ],
      photoId: 'master-1'
    },
    {
      id: 'bedroom1',
      name: 'Bedroom 1 (Guest / Second Suite)',
      areaEstimate: '~175 sq ft',
      category: 'Bedroom',
      tagline: 'Well-lit bedroom with ceiling-height storage lofts',
      features: [
        'Built-in wooden wardrobe & top loft cabinets',
        'Curtained large window for morning light and breeze',
        'Calm lilac accent wall aesthetics'
      ],
      photoId: 'bedroom1-1'
    },
    {
      id: 'bedroom2',
      name: 'Bedroom 2 (Kids / Study / Home Office)',
      areaEstimate: '~165 sq ft',
      category: 'Bedroom',
      tagline: 'Versatile room with perimeter cabinetry and soothing light',
      features: [
        'Overhead storage cabinets framing the window',
        'Ideal for children’s study, guest room, or work-from-home studio',
        'Clean vitrified tile flooring throughout'
      ],
      photoId: 'bedroom2-1'
    },
    {
      id: 'parking',
      name: 'Dedicated Covered Car Parking',
      areaEstimate: '100 sq ft',
      category: 'Parking',
      tagline: 'A priceless, stress-free sheltered asset in Central Pune',
      features: [
        'Sheltered from direct monsoon rain and intense summer heat',
        'Massive relief in Central Pune where street parking is strictly restricted',
        'Easy vehicular ingress and egress'
      ],
      photoId: 'hall-2'
    }
  ];

  const activeZone = zones.find(z => z.id === activeZoneId) || zones[2];
  const activeZonePhoto = PROPERTY_PHOTOS.find(p => p.id === activeZone.photoId) || PROPERTY_PHOTOS[0];

  return (
    <section id="layout" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Interactive Space & Layout Navigator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
              Explore Every Dimension of the Flat
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-1">
              Click any room or asset below to inspect its area, key architectural highlights, and live photo.
            </p>
          </div>

          {/* Area Summary Pill */}
          <div className="bg-stone-950 border border-stone-800 px-5 py-3 rounded-2xl flex items-center gap-4">
            <div>
              <div className="text-xs text-stone-400">Total Usable Composite Area</div>
              <div className="text-2xl font-bold font-serif-luxury text-amber-400">
                1,437 <span className="text-sm font-normal text-stone-300">sq ft</span>
              </div>
            </div>
            <div className="h-8 w-px bg-stone-800"></div>
            <div className="text-xs text-stone-400">
              <div>1,235 Built-up</div>
              <div className="text-emerald-400">+102 Terrace</div>
              <div className="text-sky-400">+100 Parking</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Interactive Zone Selector + Active Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Zone List / Blueprint Flow */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 px-1">
              Select Room or Feature
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {zones.map((zone) => {
                const isSelected = zone.id === activeZoneId;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                        : 'bg-stone-950/70 border-stone-800/80 text-stone-300 hover:bg-stone-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isSelected 
                          ? 'bg-amber-500 text-stone-950' 
                          : 'bg-stone-800 text-stone-400 group-hover:bg-stone-700'
                      }`}>
                        {zone.id === 'terrace' ? <Sun className="w-4 h-4" /> : 
                         zone.id === 'parking' ? <Car className="w-4 h-4" /> : 
                         zone.id === 'entrance' ? <Compass className="w-4 h-4" /> : 
                         <Home className="w-4 h-4" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                            {zone.name}
                          </span>
                          {zone.id === 'terrace' && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-semibold">
                              Star Feature
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-stone-400">{zone.areaEstimate}</span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-stone-600'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Showcase Card */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-2xl space-y-6">
            
            {/* Header of Active Zone */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {activeZone.category} Specification
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-white mt-0.5">
                  {activeZone.name}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-amber-300 text-sm font-bold font-mono">
                {activeZone.areaEstimate}
              </div>
            </div>

            {/* Photo Preview */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-stone-900 border border-stone-800 group">
              <img
                src={activeZonePhoto.src}
                alt={activeZone.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 text-xs text-stone-200 bg-stone-950/80 backdrop-blur-md p-2.5 rounded-lg border border-stone-700/60">
                <span className="font-semibold text-amber-300">{activeZonePhoto.title}: </span>
                {activeZonePhoto.description}
              </div>
            </div>

            {/* Tagline & Bullet Features */}
            <div className="space-y-4">
              <p className="text-stone-300 text-sm italic border-l-2 border-amber-500 pl-3">
                "{activeZone.tagline}"
              </p>

              <div className="space-y-2.5">
                {activeZone.features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dimension Matrix comparison */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-stone-950 rounded-lg">
                <div className="text-stone-400 text-[11px]">Primary Orientation</div>
                <div className="text-emerald-400 font-bold mt-1">East / Auspicious</div>
              </div>
              <div className="p-2 bg-stone-950 rounded-lg">
                <div className="text-stone-400 text-[11px]">Flooring Finish</div>
                <div className="text-stone-200 font-bold mt-1">Vitrified & Ceramic</div>
              </div>
              <div className="p-2 bg-stone-950 rounded-lg">
                <div className="text-stone-400 text-[11px]">Water Connection</div>
                <div className="text-sky-400 font-bold mt-1">24x7 PMC Direct</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
