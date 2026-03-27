import { Mail, Phone, MapPin, Clock, ShieldCheck, User, Building, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6 leading-tight">
              Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">project</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Our team of analysts and developers will review your requirements and prepare a detailed estimation. We ensure strict confidentiality from day one.
            </p>

            <div className="space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Fast Response</h4>
                  <p className="text-slate-600">Our representative will contact you within 24 hours to schedule an initial consultation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Strict Confidentiality</h4>
                  <p className="text-slate-600">We keep full confidentiality of all clients by signing an NDA before discussing details.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-5">
                <a href="mailto:contact@jitsinnovationlabs.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">contact@jitsinnovationlabs.com</span>
                </a>
                <a href="tel:+84338355571" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">(+84) 338 355 571</span>
                </a>
                <div className="flex items-start gap-4 text-slate-600 group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium leading-relaxed pt-2">No 6 Pham Tuan Tai Street, Dich Vong Hau Ward, Cau Giay District, Ha Noi, Viet Nam</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-3xl" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="text" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="John" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="text" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Doe" />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="email" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="text" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Your Company Ltd." />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Requirements *</label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea rows={4} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 resize-none" placeholder="Tell us about your project goals, timeline, and technical requirements..."></textarea>
                </div>
              </div>
              
              <button type="button" className="w-full py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                <span>Submit Request</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
