import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Send,
  Building2,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { PROPERTY_DETAILS } from '../data/propertyData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to schedule a private visit to inspect the 3 BHK Flat in Central Pune (Sadashiv Peth/Subhash Nagar border).\n\n` +
      `Name: ${name || 'Prospective Buyer'}\n` +
      `Phone: ${phone || 'Provided via WhatsApp'}\n` +
      `Email: ${email || 'Not specified'}\n` +
      `Preferred Date: ${date || 'Earliest available weekend'}\n` +
      `Preferred Slot: ${slot}\n` +
      `Notes: ${notes || 'Interested in inspecting the private terrace and covered parking space.'}`;

    const url = `https://wa.me/${PROPERTY_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Site Visit Request: 3 BHK Central Pune Flat - ${name}`;
    const body = `Hi,\n\nI am interested in scheduling a personal visit to view the 3 BHK Flat in Central Pune (Sadashiv Peth / Subhash Nagar border).\n\n` +
      `Name: ${name}\n` +
      `Contact Number: ${phone}\n` +
      `Email: ${email}\n` +
      `Preferred Date: ${date}\n` +
      `Time Window: ${slot}\n` +
      `Specific Inquiries: ${notes}\n\n` +
      `Looking forward to hearing from you.`;

    const mailtoUrl = `mailto:${PROPERTY_DETAILS.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-stone-900 border border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-stone-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <Calendar className="w-4 h-4" />
                <span>Private Inspection</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-luxury text-white">
                Schedule a Private Flat Visit
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm mt-1">
                Experience the 1,235 sq ft layout, 102 sq ft attached terrace, and dedicated covered car parking in person.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Time Window
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Questions or Particular Interests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inquiring about final price discussion, loan eligibility, or parking space..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email to Owner ({PROPERTY_DETAILS.contact.email})</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero brokerage directly connecting genuine buyers and owners</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold font-serif-luxury text-white">
              Visit Request Initiated!
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name || 'Sir/Madam'}</strong>. Your visit inquiry for the 3 BHK Flat in Central Pune has been queued. The representative will connect with you promptly.
            </p>

            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs text-stone-400 space-y-1">
              <div>Representative Email: <strong className="text-amber-400">{PROPERTY_DETAILS.contact.email}</strong></div>
              <div>Direct Phone: <strong className="text-stone-200">{PROPERTY_DETAILS.contact.phone}</strong></div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
            >
              Back to Property Brochure
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
