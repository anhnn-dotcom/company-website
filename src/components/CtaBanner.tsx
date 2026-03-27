import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to build your next digital banking solution?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Partner with our fintech experts to accelerate your digital transformation journey securely and efficiently.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-xl shadow-black/10">
          Schedule a Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
