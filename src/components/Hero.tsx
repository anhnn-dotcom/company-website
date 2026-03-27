import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Enterprise-Grade Fintech Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Next-Generation <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Digital Banking
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering financial institutions with scalable core banking, secure digital wallets, and cloud-native infrastructure to accelerate digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all shadow-lg shadow-emerald-500/25 group">
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/solutions" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium transition-all">
                View Solutions
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Fast Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 mt-16 lg:mt-0 hidden md:block"
          >
            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700/50 p-2 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Banking Dashboard" 
                className="rounded-xl border border-slate-700/50 opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              
              {/* Floating elements to make it look like a dashboard mockup */}
              <div className="absolute -left-6 top-1/4 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-emerald-400 -rotate-45" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Total Volume</p>
                    <p className="text-lg font-bold text-white">$2.4M</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
