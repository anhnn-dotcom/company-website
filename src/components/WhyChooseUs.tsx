import { ShieldCheck, TrendingUp, CheckCircle2, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Security & Compliance",
      description: "Bank-grade security protocols, end-to-end encryption, and strict regulatory compliance built into every layer.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Unmatched Scalability",
      description: "Cloud-native, microservices architecture designed to handle millions of daily transactions effortlessly.",
      icon: <TrendingUp className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Proven Delivery",
      description: "100% success rate in enterprise-grade fintech implementations with transparent agile methodologies.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Deep Fintech Expertise",
      description: "Specialized domain knowledge in banking operations, payments, and financial regulations.",
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Why Financial Leaders Choose Us</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don't just write code; we build secure, scalable financial ecosystems. Our commitment to excellence and deep industry knowledge makes us the trusted partner for digital transformation.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Team member" />
                ))}
              </div>
              <p className="text-sm text-slate-400 font-medium">
                Backed by 60+ <br/> Fintech Experts
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-slate-900/50 flex items-center justify-center mb-4 border border-slate-700">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
