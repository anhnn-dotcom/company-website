import { motion } from 'motion/react';
import { Building2, Landmark, Briefcase, Globe, ShieldCheck, Wallet, CreditCard, Coins } from 'lucide-react';

const logos = [
  { name: 'GlobalBank', icon: Landmark },
  { name: 'PayStream', icon: Wallet },
  { name: 'NexusFinance', icon: Globe },
  { name: 'SecureVault', icon: ShieldCheck },
  { name: 'CloudCore', icon: Building2 },
  { name: 'FinEdge', icon: Briefcase },
  { name: 'SwiftPay', icon: CreditCard },
  { name: 'CoinTrust', icon: Coins },
];

// Duplicate the array to create a seamless infinite loop
const duplicatedLogos = [...logos, ...logos];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Trusted by leading financial institutions worldwide
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedLogos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer pr-16 md:pr-24"
              >
                <Icon className="w-8 h-8 text-slate-800" />
                <span className="text-2xl font-bold text-slate-800 tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
