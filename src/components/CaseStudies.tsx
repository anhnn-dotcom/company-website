import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      client: "Leading Microfinance Institution",
      title: "Digital Lending Transformation",
      metrics: [
        { icon: <Clock className="w-4 h-4" />, value: "-70%", label: "Processing Time" },
        { icon: <TrendingUp className="w-4 h-4" />, value: "3x", label: "Loan Volume" }
      ],
      description: "Implemented an end-to-end digital lending platform with automated KYC and AI-driven credit scoring, drastically reducing approval times.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop"
    },
    {
      client: "Regional Commercial Bank",
      title: "Core Banking Migration",
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "2M+", label: "Users Migrated" },
        { icon: <Clock className="w-4 h-4" />, value: "Zero", label: "Downtime" }
      ],
      description: "Successfully migrated legacy systems to a modern, cloud-native core banking architecture without disrupting daily operations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Proven Success Stories</h2>
            <p className="text-lg text-slate-600">
              Discover how we've helped financial institutions achieve operational excellence and scale their digital offerings.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((study, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">{study.client}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                <p className="text-slate-600 mb-8">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-100">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="flex items-center gap-1 text-emerald-600 mb-1">
                        {metric.icon}
                        <span className="text-xl font-bold">{metric.value}</span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                  Read full case study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
