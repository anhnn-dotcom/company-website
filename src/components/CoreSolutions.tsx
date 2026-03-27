import { Building2, Wallet, CloudCog, Network } from 'lucide-react';

export default function CoreSolutions() {
  const solutions = [
    {
      title: "Digital Banking Platform",
      description: "Omnichannel banking experiences with modular architecture for retail and corporate banking.",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Core Banking Integration",
      description: "Seamless modernization and API-first integration with legacy core banking systems.",
      icon: <Network className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Payment & Wallet Solutions",
      description: "Secure, scalable digital wallets and payment gateways for instant transactions.",
      icon: <Wallet className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Cloud & DevOps",
      description: "Bank-grade cloud infrastructure, automated CI/CD, and high-availability deployments.",
      icon: <CloudCog className="w-6 h-6 text-indigo-500" />,
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Core Fintech Solutions</h2>
          <p className="text-lg text-slate-600">
            Comprehensive technology solutions engineered for modern financial institutions to accelerate growth and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
