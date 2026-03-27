import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your financial services? Contact our team of experts today.
          </motion.p>
        </div>
      </section>
      <Contact />
    </main>
  );
}
