import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export default function SecurityBanner() {
  const certifications = [
    { name: "ISO 27001 Certified", icon: ShieldCheck },
    { name: "PCI-DSS Compliant", icon: Lock },
    { name: "SOC 2 Type II", icon: CheckCircle2 },
  ];

  return (
    <div className="bg-slate-900 py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-slate-300">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Enterprise Grade Security
          </span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium text-sm md:text-base">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
