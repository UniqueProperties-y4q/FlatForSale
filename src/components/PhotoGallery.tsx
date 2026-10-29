import React, { useState, useEffect, useCallback } from 'react';
import { 
  PROPERTY_PHOTOS, 
  PropertyPhoto 
} from '../data/propertyData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Layers, 
  Sparkles,
  Download
} from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Photos', count: PROPERTY_PHOTOS.length },
    { key: 'hall', label: 'Living Hall', count: PROPERTY_PHOTOS.filter(p => p.category === 'hall').length },
    { key: 'terrace', label: 'Private Terrace', count: PROPERTY_PHOTOS.filter(p => p.category === 'terrace').length },
    { key: 'kitchen', label: 'Modular Kitchen', count: PROPERTY_PHOTOS.filter(p => p.category === 'kitchen').length },
    { key: 'master', label: 'Master Suite', count: PROPERTY_PHOTOS.filter(p => p.category === 'master').length },
    { key: 'bedroom1', label: 'Bedroom 1', count: PROPERTY_PHOTOS.filter(p => p.category === 'bedroom1').length },
    { key: 'bedroom2', label: 'Bedroom 2', count: PROPERTY_PHOTOS.filter(p => p.category === 'bedroom2').length },
    { key: 'entrance', label: 'Entrance & Foyer', count: PROPERTY_PHOTOS.filter(p => p.category === 'entrance').length },
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? PROPERTY_PHOTOS 
    : PROPERTY_PHOTOS.filter(p => p.category === activeFilter);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : PROPERTY_PHOTOS.length - 1));
  }, [activePhotoIndex]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < PROPERTY_PHOTOS.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  const activePhoto = activePhotoIndex !== null ? PROPERTY_PHOTOS[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            Complete Photographic Inspection
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-3">
            Real Photographs & Interior Showcase
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            High-definition photos covering every corner of this 3 BHK flat. True-to-life presentation of finishes, cabinets, false ceilings, and the private terrace.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-stone-800 text-stone-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const globalIndex = PROPERTY_PHOTOS.findIndex(p => p.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(globalIndex)}
                className="group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-900/90 backdrop-blur-md text-amber-300 border border-stone-700">
                    {photo.categoryLabel}
                  </span>

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="flex items-center gap-1 text-amber-400/90">
                      <Sparkles className="w-3 h-3" />
                      Click to Enlarge
                    </span>
                    <span className="capitalize">{photo.aspect}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-stone-800" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 font-bold text-xs uppercase">
                {activePhoto.categoryLabel}
              </span>
              <span className="text-sm font-semibold text-stone-200 hidden sm:inline">
                {activePhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-400 font-mono">
                {activePhotoIndex! + 1} of {PROPERTY_PHOTOS.length}
              </span>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev/Next Controls */}
          <div 
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 hover:border-amber-400 shadow-xl transition-all"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-all duration-300"
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 hover:border-amber-400 shadow-xl transition-all"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div className="space-y-3 max-w-4xl mx-auto w-full" onClick={e => e.stopPropagation()}>
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl text-center">
              <h4 className="text-sm sm:text-base font-bold text-amber-300">{activePhoto.title}</h4>
              <p className="text-xs text-stone-300 mt-1 max-w-2xl mx-auto">{activePhoto.description}</p>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 px-2 scrollbar-none justify-center">
              {PROPERTY_PHOTOS.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === activePhotoIndex 
                      ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/30' 
                      : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={thumb.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
