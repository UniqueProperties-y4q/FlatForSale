import React, { useState } from 'react';
import { 
  Building2, 
  Printer, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X, 
  Share2,
  Check,
  FileText
} from 'lucide-react';
import { PROPERTY_DETAILS } from '../data/propertyData';

interface NavbarProps {
  onOpenSchedule: () => void;
  onPrintPamphlet: () => void;
  pamphletMode: boolean;
  onTogglePamphletMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSchedule,
  onPrintPamphlet,
  pamphletMode,
  onTogglePamphletMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: PROPERTY_DETAILS.title,
          text: `Check out this premium 3 BHK flat with private terrace and covered parking in Central Pune!`,
          url: window.location.href,
        });
      } catch {
        // Share cancelled or failed, fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Video Tour', href: '#video-tour' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Layout & Space', href: '#layout' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Connectivity', href: '#connectivity' },
    { name: 'EMI Planner', href: '#emi-calculator' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30 text-stone-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#overview" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">Exclusive Resale</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h1 className="text-lg font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                Central Pune 3 BHK Flat
              </h1>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-400 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Pamphlet View Mode Toggle */}
            <button
              onClick={onTogglePamphletMode}
              title={pamphletMode ? "Switch to interactive web view" : "Switch to 2-page print flyer view"}
              className={`px-3 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                pamphletMode 
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/30' 
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{pamphletMode ? "Standard View" : "Pamphlet Mode"}</span>
            </button>

            {/* Print Pamphlet */}
            <button
              onClick={onPrintPamphlet}
              title="Print or Save as PDF Pamphlet"
              className="p-2 rounded-md bg-stone-800 text-stone-300 hover:text-white border border-stone-700 hover:border-amber-500/50 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              title="Share this property"
              className="p-2 rounded-md bg-stone-800 text-stone-300 hover:text-white border border-stone-700 hover:border-amber-500/50 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello, I am interested in the 3 BHK Flat in Central Pune (Sadashiv Peth/Subhash Nagar border) with Private Terrace & Covered Parking. Please share further details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Schedule Visit */}
            <button
              onClick={onOpenSchedule}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-amber-600/25 transition-all hover:scale-102 active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onPrintPamphlet}
              className="p-2 rounded-md bg-stone-800 text-stone-300"
              title="Print Pamphlet"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-stone-800 text-stone-300 hover:text-white border border-stone-700"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-800">
            <button
              onClick={() => {
                onTogglePamphletMode();
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border ${
                pamphletMode 
                  ? 'bg-amber-500 text-stone-950 border-amber-400' 
                  : 'bg-stone-800 text-stone-200 border-stone-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{pamphletMode ? "Exit Pamphlet" : "Pamphlet Mode"}</span>
            </button>

            <button
              onClick={() => {
                onPrintPamphlet();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 space-y-2">
            <button
              onClick={() => {
                onOpenSchedule();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Flat Inspection</span>
            </button>

            <a
              href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello, I am interested in viewing the 3 BHK Flat in Central Pune (Sadashiv Peth/Subhash Nagar border)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
