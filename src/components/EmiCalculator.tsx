import React, { useState, useId } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Calendar, 
  Percent, 
  PieChart, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface EmiCalculatorProps {
  onOpenSchedule: () => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onOpenSchedule }) => {
  const propertyPriceId = useId();
  const downPaymentId = useId();
  const tenureId = useId();
  const interestRateId = useId();

  // State in INR (1.65 Crore default indicative)
  const [propertyPrice, setPropertyPrice] = useState<number>(16500000); // 1.65 Cr
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  // Monthly interest rate
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = loanAmount > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const formatRupees = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const principalRatio = totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 50;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;

  return (
    <section id="emi-calculator" className="py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Financial Planning & EMI Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-3">
            Plan Your Purchase & Monthly Investment
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Customize down payment, loan tenure, and bank interest rate to calculate your exact monthly EMI and total financial outlay.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Controls Column (Sliders) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Property Estimated Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor={propertyPriceId} className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <IndianRupee className="w-4 h-4 text-amber-400" />
                  Estimated Property Value
                </label>
                <span className="font-bold font-mono text-amber-400 text-base">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                id={propertyPriceId}
                aria-label="Estimated Property Value"
                type="range"
                min={11000000}
                max={25000000}
                step={500000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>₹1.10 Cr</span>
                <span>₹1.80 Cr</span>
                <span>₹2.50 Cr</span>
              </div>
            </div>

            {/* Down Payment % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor={downPaymentId} className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-emerald-400" />
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-bold font-mono text-emerald-400 text-base">
                  {formatCurrency(downPaymentAmount)}
                </span>
              </div>
              <input
                id={downPaymentId}
                aria-label="Down Payment Percentage"
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor={tenureId} className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  Loan Duration
                </label>
                <span className="font-bold font-mono text-sky-400 text-base">
                  {tenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <input
                id={tenureId}
                aria-label="Loan Duration in Years"
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor={interestRateId} className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-amber-400" />
                  Expected Bank Interest Rate
                </label>
                <span className="font-bold font-mono text-amber-300 text-base">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                id={interestRateId}
                aria-label="Expected Bank Interest Rate"
                type="range"
                min={7.5}
                max={11.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>7.5%</span>
                <span>8.5% (Typical Repo-linked)</span>
                <span>11.0%</span>
              </div>
            </div>

            {/* Clear Title Notice */}
            <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 text-xs text-stone-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Clear title & PMC sanctioned property — eligible for fast pre-approved loans from all leading banks (SBI, HDFC, ICICI, etc.).</span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8 space-y-6">
            
            <div className="text-center pb-4 border-b border-stone-800">
              <span className="text-xs uppercase font-semibold tracking-widest text-stone-400">
                Estimated Monthly EMI
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-luxury mt-1">
                {formatRupees(Math.round(emi))}
              </div>
              <span className="text-[11px] text-stone-500">per month for {tenureYears} years</span>
            </div>

            {/* Breakdown stats */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-stone-300">
                <span>Loan Principal Amount:</span>
                <span className="font-bold text-white font-mono">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Down Payment Required:</span>
                <span className="font-bold text-emerald-400 font-mono">{formatCurrency(downPaymentAmount)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Total Interest Payable:</span>
                <span className="font-bold text-amber-300 font-mono">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-800 text-stone-200 font-semibold">
                <span>Total Amount (P + I):</span>
                <span className="font-bold text-white font-mono">{formatCurrency(totalPayment)}</span>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Principal ({principalRatio.toFixed(0)}%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Interest ({interestRatio.toFixed(0)}%)
                </span>
              </div>
              <div className="h-2.5 w-full bg-stone-800 rounded-full overflow-hidden flex">
                <div style={{ width: `${principalRatio}%` }} className="bg-emerald-500 h-full"></div>
                <div style={{ width: `${interestRatio}%` }} className="bg-amber-500 h-full"></div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenSchedule}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-102"
            >
              Discuss Price & Bank Financing
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
