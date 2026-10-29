import React from 'react';
import { 
  Compass, 
  Car, 
  Sun, 
  Droplets, 
  Play, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { PROPERTY_DETAILS } from '../data/propertyData';

interface HeroSectionProps {
  onOpenSchedule: () => void;
  onOpenVideo: () => void;
  onOpenGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSchedule,
  onOpenVideo,
  onOpenGallery
}) => {
  return (
    <section id="overview" className="relative bg-stone-950 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-stone-800">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges / Tagline */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Verified Resale Property
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            100% Auspicious East Entrance
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-stone-800/80 text-stone-300 border border-stone-700">
            <MapPin className="w-3 h-3 text-red-400" />
            Central Pune Border
          </span>
        </div>

        {/* Main Grid: Headline + Key Stat Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                Elite Central Pune Residential Showcase
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-serif-luxury">
                Premium <span className="text-amber-400 underline decoration-amber-500/40 decoration-wavy underline-offset-8">3 BHK</span> Residence with Private Terrace & Covered Parking
              </h1>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed pt-2">
                Situated right next to the historic <strong className="text-white">Sadashiv Peth & Subhash Nagar</strong> belt. Experience the rare luxury of a grand 1,235 sq ft built-up layout, an attached 102 sq ft open-air terrace, and a stress-free dedicated covered car parking space right in the heart of Pune.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-stone-900/90 border border-stone-800 p-4 rounded-xl hover:border-amber-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury">
                  1,235 <span className="text-xs font-normal text-stone-400">sq ft</span>
                </div>
                <div className="text-xs font-medium text-stone-300 mt-1">Built-Up Area</div>
                <div className="text-[11px] text-stone-500">Spacious 3 Bedroom configuration</div>
              </div>

              <div className="bg-stone-900/90 border border-stone-800 p-4 rounded-xl hover:border-amber-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-serif-luxury">
                  +102 <span className="text-xs font-normal text-stone-400">sq ft</span>
                </div>
                <div className="text-xs font-medium text-stone-300 mt-1">Attached Terrace</div>
                <div className="text-[11px] text-stone-500">Private open-air personal haven</div>
              </div>

              <div className="bg-stone-900/90 border border-stone-800 p-4 rounded-xl hover:border-amber-500/40 transition-colors col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-sky-400 font-serif-luxury">
                  +100 <span className="text-xs font-normal text-stone-400">sq ft</span>
                </div>
                <div className="text-xs font-medium text-stone-300 mt-1">Covered Car Parking</div>
                <div className="text-[11px] text-stone-500">Zero parking hassle in Central Pune</div>
              </div>
            </div>

            {/* Key Advantages Chips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 rounded-lg text-stone-200 border border-stone-800">
                <Droplets className="w-3.5 h-3.5 text-sky-400" />
                PMC Municipal 24x7 Water
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 rounded-lg text-stone-200 border border-stone-800">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Abundant Sunlight & Air
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 rounded-lg text-stone-200 border border-stone-800">
                <Car className="w-3.5 h-3.5 text-emerald-400" />
                Dedicated Covered Bay
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 rounded-lg text-stone-200 border border-stone-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                5 Mins to Laxmi Rd & Mandai
              </span>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenSchedule}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm tracking-wide flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-102 active:scale-98"
              >
                <span>Schedule a Private Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-5 py-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-800 text-stone-100 border border-stone-700 hover:border-amber-400 text-sm font-semibold flex items-center gap-2.5 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Video Walkthrough</span>
              </button>

              <button
                onClick={onOpenGallery}
                className="px-4 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span>All 16 Photos</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Living Room + Terrace Inset) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-900/40 shadow-2xl group">
              <img
                src="/assets/aistudio/HALL_View1_df0b1bee.jpg"
                alt="Living Hall with false ceiling and terrace view"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3 max-w-[70%]">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Living Hall View</div>
                  <div className="text-sm font-bold text-white">Spacious Living with Designer False Ceiling</div>
                  <div className="text-[11px] text-stone-400">Direct French door access to the attached terrace</div>
                </div>

                <button
                  onClick={onOpenVideo}
                  className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                  title="Play Walkthrough"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Inset Card: The Star Feature (Terrace) */}
            <div 
              onClick={onOpenGallery}
              className="hidden sm:flex absolute -bottom-6 -left-6 bg-stone-900/95 border border-amber-500/40 rounded-xl p-2.5 shadow-2xl items-center gap-3 cursor-pointer hover:border-amber-400 transition-all hover:scale-103"
            >
              <img 
                src="/assets/aistudio/Terrace1_a3ba94fc.jpg" 
                alt="Private Attached Terrace" 
                className="w-16 h-16 rounded-lg object-cover border border-stone-700"
              />
              <div className="pr-3">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                  <Sun className="w-3 h-3" />
                  <span>STAR HIGHLIGHT</span>
                </div>
                <div className="text-xs font-bold text-white">102 Sq Ft Private Terrace</div>
                <div className="text-[10px] text-stone-400">With Covered Pergola & Tiling</div>
              </div>
            </div>

            {/* Floating Top Inset: East Facing */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-stone-900/95 border border-emerald-500/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
              <div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">Vastu Harmony</div>
                <div className="text-xs font-bold text-emerald-300">East-Facing Entrance</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
