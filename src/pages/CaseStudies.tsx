import { ArrowRight, BarChart3, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: "global-bank-core",
    client: "GlobalBank",
    title: "Modernizing Core Banking Infrastructure",
    category: "Core Banking",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    challenge: "GlobalBank was struggling with a legacy monolithic system that was expensive to maintain and slow to adapt to new market demands. They needed a scalable, cloud-native solution without disrupting ongoing operations.",
    solution: "JITS implemented a microservices-based core banking architecture, migrating 15M+ customer accounts with zero downtime. We integrated automated CI/CD pipelines and enhanced security protocols.",
    results: [
      { metric: "40%", label: "Reduction in TCO", icon: BarChart3 },
      { metric: "99.99%", label: "System Uptime", icon: ShieldCheck },
      { metric: "3x", label: "Faster Time-to-Market", icon: Clock }
    ]
  },
  {
    id: "paystream-wallet",
    client: "PayStream",
    title: "Launching a Next-Gen Digital Wallet",
    category: "Digital Wallet",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
    challenge: "PayStream wanted to capture the Gen-Z market with a feature-rich digital wallet, but lacked the internal expertise to build a secure, high-performance platform from scratch within their 6-month deadline.",
    solution: "We deployed our white-label digital wallet solution, customizing the UI/UX to match PayStream's brand. The solution included peer-to-peer payments, QR code scanning, and loyalty program integrations.",
    results: [
      { metric: "2M+", label: "Users in 6 Months", icon: BarChart3 },
      { metric: "<1s", label: "Transaction Speed", icon: Clock },
      { metric: "Zero", label: "Security Breaches", icon: ShieldCheck }
    ]
  },
  {
    id: "nexus-lending",
    client: "NexusFinance",
    title: "Automating Digital Lending Workflows",
    category: "Digital Lending",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    challenge: "Manual loan processing was causing bottlenecks, with an average approval time of 5 days. NexusFinance needed an automated system to handle high volumes of micro-loans efficiently.",
    solution: "JITS integrated an AI-driven credit scoring engine and automated the entire loan origination process. We also built a seamless customer portal for document uploads and status tracking.",
    results: [
      { metric: "85%", label: "Process Automation", icon: BarChart3 },
      { metric: "10 Mins", label: "Average Approval Time", icon: Clock },
      { metric: "30%", label: "Increase in Loan Volume", icon: BarChart3 }
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover how we've helped leading financial institutions transform their operations, launch innovative products, and achieve exceptional growth.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        {study.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-2">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">The Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-slate-200">
                    {study.results.map((result, i) => {
                      const Icon = result.icon;
                      return (
                        <div key={i}>
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-4 h-4 text-emerald-500" />
                            <span className="text-2xl font-bold text-slate-900">{result.metric}</span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{result.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Discuss a similar project
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to write your own success story?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Partner with JITS Innovation Labs to accelerate your digital transformation and stay ahead of the competition.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
