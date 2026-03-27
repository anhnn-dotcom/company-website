import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const products = [
    {
      id: 'digital-banking',
      title: 'Digital Banking',
      description: 'Deliver seamless, omnichannel banking experiences to your retail and corporate customers. Our platform is built on a modular architecture, allowing you to launch new features rapidly while maintaining bank-grade security and compliance.',
      features: ['Omnichannel Experience', 'Modular Architecture', 'Corporate & Retail Portals', 'Open Banking APIs'],
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'digital-wallet',
      title: 'Digital Wallet',
      description: 'A secure, white-label wallet solution designed for seamless P2P transfers, merchant payments, bill payments, and financial inclusion. Easily customizable to match your brand identity.',
      features: ['P2P & Merchant Payments', 'QR Code Integration', 'Bill Payments', 'White-label Customization'],
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200'
    },
    {
      id: 'digital-lending',
      title: 'Digital Lending',
      description: 'Automate your end-to-end lending process. From origination and AI-driven credit scoring to disbursement and collection, our platform reduces approval times and minimizes risk.',
      features: ['Automated Origination', 'AI Credit Scoring', 'Instant Disbursement', 'Collection Management'],
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: 'cloud-pos',
      title: 'Cloud POS',
      description: 'Empower merchants with a flexible, cloud-based Point of Sale system. Manage inventory, process multi-channel payments, and access real-time analytics from any device, anywhere.',
      features: ['Multi-channel Payments', 'Real-time Inventory', 'Cloud Sync', 'Merchant Dashboard'],
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      id: 'loyalty-wallet',
      title: 'Customer Loyalty Wallet',
      description: 'Drive customer retention and engagement with a dedicated loyalty wallet. Issue reward points, manage cashback programs, and create targeted promotional campaigns effortlessly.',
      features: ['Points & Rewards Engine', 'Cashback Management', 'Campaign Builder', 'Customer Analytics'],
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      id: 'fineract',
      title: 'Fineract Core Banking',
      description: 'Modernize your legacy infrastructure with an API-first, highly scalable core banking engine based on Apache Fineract. Designed for microfinance, credit unions, and digital banks.',
      features: ['API-First Design', 'High Scalability', 'Product Factory', 'Accounting Engine'],
      color: 'bg-slate-100 text-slate-700 border-slate-300'
    },
    {
      id: 'vending-machine',
      title: 'Smart Vending Machine',
      description: 'Integrated payment and management solutions for automated retail. Connect your vending machines to the cloud for cashless payments, inventory tracking, and remote diagnostics.',
      features: ['Cashless Payments', 'Remote Telemetry', 'Inventory Tracking', 'Dynamic Pricing'],
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive, modular, and secure fintech products designed to accelerate your digital transformation and drive business growth.
          </motion.p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Area */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl"
              >
                <img 
                  src={`https://picsum.photos/seed/${product.id}/1200/900`} 
                  alt={`${product.title} Interface`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Content Area */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-6 border ${product.color}`}>
                  {product.title}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {product.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all shadow-lg shadow-slate-900/20 group"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure which solution fits your needs?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our experts are ready to analyze your business requirements and recommend the perfect technology stack for your financial institution.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1"
          >
            Talk to an Expert
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
