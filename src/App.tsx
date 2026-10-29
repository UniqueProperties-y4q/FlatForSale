import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar, 
  Printer, 
  Share2, 
  Sun, 
  Car, 
  Droplets, 
  ShieldCheck, 
  Check, 
  FileText,
  Compass,
  ArrowUp
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoPlayerSection } from './components/VideoPlayerSection';
import { KeyHighlights } from './components/KeyHighlights';
import { PhotoGallery } from './components/PhotoGallery';
import { InteractiveFloorNav } from './components/InteractiveFloorNav';
import { ConnectivitySection } from './components/ConnectivitySection';
import { EmiCalculator } from './components/EmiCalculator';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { PamphletPrintView } from './components/PamphletPrintView';
import { PROPERTY_DETAILS } from './data/propertyData';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [pamphletMode, setPamphletMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePrintPamphlet = () => {
    // If not in pamphlet mode, we can either switch or print directly
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: PROPERTY_DETAILS.title,
          text: `Check out this premium 3 BHK flat with private terrace and covered parking in Central Pune!`,
          url: window.location.href,
        });
      } catch {
        copyShareLink();
      }
    } else {
      copyShareLink();
    }
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If Pamphlet Mode is active, show the 2-page print flyer view
  if (pamphletMode) {
    return (
      <div className="min-h-screen bg-stone-950 font-sans selection:bg-amber-500 selection:text-stone-950">
        <PamphletPrintView 
          onExitPamphletMode={() => setPamphletMode(false)}
          onPrint={handlePrintPamphlet}
        />
        <ScheduleVisitModal 
          isOpen={scheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. Sticky Navigation */}
      <Navbar 
        onOpenSchedule={() => setScheduleModalOpen(true)}
        onPrintPamphlet={handlePrintPamphlet}
        pamphletMode={pamphletMode}
        onTogglePamphletMode={() => setPamphletMode(!pamphletMode)}
      />

      <main>
        {/* 2. Hero Presentation */}
        <HeroSection 
          onOpenSchedule={() => setScheduleModalOpen(true)}
          onOpenVideo={() => scrollToSection('video-tour')}
          onOpenGallery={() => scrollToSection('gallery')}
        />

        {/* 3. Property Highlights & Market Comparison */}
        <KeyHighlights />

        {/* 4. Interactive Video Walkthrough (Social Media reel with room timestamps) */}
        <VideoPlayerSection />

        {/* 5. Photographic Gallery with Lightbox (16 High-Res Photos) */}
        <PhotoGallery />

        {/* 6. Layout, Floor Details & Room-by-Room Navigator */}
        <InteractiveFloorNav />

        {/* 7. Unrivalled Central Pune Connectivity */}
        <ConnectivitySection />

        {/* 8. Loan & EMI Financial Planner */}
        <EmiCalculator onOpenSchedule={() => setScheduleModalOpen(true)} />
      </main>

      {/* 9. Comprehensive Property Footer */}
      <footer className="bg-stone-900 border-t border-amber-900/30 text-stone-300 pt-16 pb-24 lg:pb-16 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            
            {/* Column 1: Property Identity */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-500/20">
                  <Building2 className="w-5 h-5 text-stone-950" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-400">Exclusive Resale</span>
                  <h3 className="text-base font-bold text-white leading-tight">3 BHK Residential Flat</h3>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                A rare blend of generous residential space, private open-air terrace, and dedicated covered car parking located right on the doorstep of Sadashiv Peth & Subhash Nagar in Central Pune.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-stone-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sadashiv Peth / Subhash Nagar Border, Central Pune</span>
              </div>
            </div>

            {/* Column 2: Area Summary */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Area Breakup
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Built-Up Area:</span>
                  <span className="font-semibold text-white">1,235 sq ft</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Attached Terrace:</span>
                  <span className="font-semibold text-amber-300">102 sq ft</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Covered Car Parking:</span>
                  <span className="font-semibold text-white">100 sq ft</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-stone-400">Composite Space:</span>
                  <span className="font-bold text-amber-400">1,437 sq ft total</span>
                </li>
              </ul>
              <div className="p-2.5 rounded-lg bg-stone-800/60 border border-stone-700/60 text-[11px] text-stone-300 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>100% Auspicious East-Facing Main Entrance</span>
              </div>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Interactive Sections
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <button onClick={() => scrollToSection('overview')} className="hover:text-amber-300 transition-colors">
                    Overview & Key Specs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('highlights')} className="hover:text-amber-300 transition-colors">
                    6 Star Highlights & Comparison
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('video-tour')} className="hover:text-amber-300 transition-colors">
                    Walkthrough Video & Timeline
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-300 transition-colors">
                    16-Photo Interior Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('layout')} className="hover:text-amber-300 transition-colors">
                    Room Dimension Breakdown
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('connectivity')} className="hover:text-amber-300 transition-colors">
                    Central Pune Landmark Proximity
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('emi-calculator')} className="hover:text-amber-300 transition-colors">
                    Home Loan & EMI Estimator
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Seller & Visit Connect */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Owner Direct Contact
              </h4>
              <p className="text-xs text-stone-400">
                Direct inquiry welcomed. Genuine home buyers and genuine investors can schedule private inspection.
              </p>
              
              <div className="space-y-2">
                <a 
                  href={`mailto:${PROPERTY_DETAILS.contact.email}?subject=Inquiry regarding 3 BHK Flat in Central Pune`}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700/80 transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{PROPERTY_DETAILS.contact.email}</span>
                </a>

                <a 
                  href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hello, I am interested in viewing the 3 BHK Flat in Central Pune (Sadashiv Peth/Subhash Nagar border)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-950/70 text-emerald-300 hover:bg-emerald-900/80 border border-emerald-800/50 transition-colors text-xs font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {PROPERTY_DETAILS.contact.phone}</span>
                </a>
              </div>

              <div className="pt-1 flex gap-2">
                <button
                  onClick={() => setScheduleModalOpen(true)}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-transform active:scale-98"
                >
                  Schedule Visit
                </button>
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700"
                  title="Share property details"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {new Date().getFullYear()} Central Pune Premium 3 BHK Resale Property.</span>
              <span className="hidden md:inline">•</span>
              <span className="text-stone-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Clear Title & PMC Water Approved
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPamphletMode(true)}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View 2-Page Print Pamphlet</span>
              </button>
              <span>•</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-stone-300 flex items-center gap-1"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
        </div>
      </footer>

      {/* 10. Sticky Bottom Action Bar for Mobile Devices */}
      <div className="fixed bottom-0 inset-x-0 bg-stone-900/95 backdrop-blur-md border-t border-amber-900/40 p-3 sm:hidden z-30 flex items-center justify-between gap-3 shadow-2xl no-print">
        <a
          href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(
            "Hello, I am interested in viewing the 3 BHK Flat in Central Pune (Sadashiv Peth/Subhash Nagar border)."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setScheduleModalOpen(true)}
          className="flex-1 py-3 px-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>

        <button
          onClick={() => setPamphletMode(true)}
          className="p-3 rounded-xl bg-stone-800 text-stone-200 border border-stone-700"
          title="Print Pamphlet"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>

      {/* 11. Schedule Private Visit Modal */}
      <ScheduleVisitModal 
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

    </div>
  );
}
