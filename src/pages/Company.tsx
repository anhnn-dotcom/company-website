import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Company() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Uncompromising Security",
      description: "In fintech, trust is everything. We build systems with bank-grade security and compliance at their core, never as an afterthought."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Relentless Innovation",
      description: "We continuously explore emerging technologies to provide our clients with future-proof solutions that keep them ahead of the curve."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Client-Centric Partnership",
      description: "Your success is our success. We work as an extension of your team, ensuring our solutions perfectly align with your business goals."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: "Global Standards",
      description: "Delivering world-class software engineering practices, ensuring high availability, scalability, and performance across borders."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6"
          >
            About JITS Innovation Labs
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Engineering the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Financial Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are a reputable technology partner maximizing business development through enterprise-grade digital banking and fintech solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Target className="w-12 h-12 text-blue-600 mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                To empower financial institutions and enterprises with secure, scalable, and innovative technology solutions that accelerate digital transformation and foster financial inclusion globally.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Eye className="w-12 h-12 text-cyan-600 mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                To be the world's most trusted fintech engineering partner, recognized for delivering robust core banking and digital payment ecosystems that shape the modern financial landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office / Team Placeholder */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Global Presence, Local Expertise</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Headquartered in Hanoi, Vietnam, our team of 60+ fintech experts serves clients across 5+ countries. We combine deep local market understanding with global software engineering standards to deliver solutions that scale across borders.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-2">60+</p>
                  <p className="text-slate-400">Fintech Experts</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">30+</p>
                  <p className="text-slate-400">Enterprise Projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-3xl bg-slate-800 border-2 border-slate-700 overflow-hidden relative shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/office/1200/900" 
                alt="JITS Global Office and Team" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              The principles that guide our engineering, our partnerships, and our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to partner with us?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join the leading financial institutions that trust JITS Innovation Labs to build their digital future.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1"
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
