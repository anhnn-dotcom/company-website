import { Landmark, ShoppingCart, Users, Briefcase, HeartPulse, GraduationCap } from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: "Retail Banking", icon: <Landmark className="w-6 h-6" /> },
    { name: "Microfinance", icon: <Users className="w-6 h-6" /> },
    { name: "E-Commerce", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Enterprise", icon: <Briefcase className="w-6 h-6" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Industries We Empower</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Knowledge and experience in industry-specific technology empowers us to build secure software of any complexity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                {industry.icon}
              </div>
              <span className="font-medium text-slate-700 group-hover:text-slate-900 text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
