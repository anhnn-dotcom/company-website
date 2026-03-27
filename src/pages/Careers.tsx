import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const perks = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Health & Wellness",
      description: "Comprehensive premium health insurance for you and your family, plus wellness programs."
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      title: "Modern Equipment",
      description: "High-end MacBooks, external monitors, and ergonomic workspace setups for all engineers."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-500" />,
      title: "Flexible Working",
      description: "Hybrid work models and flexible hours to help you maintain a healthy work-life balance."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Continuous Learning",
      description: "Annual learning budgets, sponsored certifications (AWS, K8s), and internal tech talks."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: "Global Impact",
      description: "Work on enterprise-grade fintech products that process millions of transactions worldwide."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      title: "Career Growth",
      description: "Clear progression paths, regular performance reviews, and opportunities to lead teams."
    }
  ];

  const jobs = [
    {
      title: "Senior Java Backend Engineer",
      department: "Engineering",
      location: "Hanoi, Vietnam (Hybrid)",
      type: "Full-time",
      description: "Join our core banking team to design and implement highly scalable, secure microservices using Java, Spring Boot, and Kubernetes."
    },
    {
      title: "Frontend Developer (React)",
      department: "Engineering",
      location: "Hanoi, Vietnam (Hybrid)",
      type: "Full-time",
      description: "Build modern, responsive, and accessible digital banking interfaces using React, TypeScript, and Tailwind CSS."
    },
    {
      title: "Fintech Product Manager",
      department: "Product",
      location: "Remote / Hanoi",
      type: "Full-time",
      description: "Drive the product vision for our Digital Wallet solution. Work closely with engineering, sales, and clients to deliver market-leading features."
    },
    {
      title: "DevOps & Cloud Engineer",
      department: "Infrastructure",
      location: "Hanoi, Vietnam",
      type: "Full-time",
      description: "Manage and scale our AWS infrastructure, automate CI/CD pipelines, and ensure 99.99% uptime for our financial systems."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6"
          >
            Careers at JITS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Build the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Finance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Join a team of passionate engineers, designers, and fintech experts dedicated to transforming how the world banks and pays.
          </motion.p>
        </div>
      </section>

      {/* Culture Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[21/9] rounded-3xl overflow-hidden relative shadow-xl"
          >
            <img 
              src="https://picsum.photos/seed/teamwork/1920/800" 
              alt="JITS Team Culture and Collaboration" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Collaborative Environment</h3>
              <p className="text-slate-200 max-w-2xl">We foster a culture of open communication, continuous learning, and mutual respect.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Why Join JITS?</h2>
            <p className="text-lg text-slate-600">
              We invest in our people. Enjoy a comprehensive benefits package designed to support your health, wealth, and career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Open Positions</h2>
              <p className="text-lg text-slate-600">
                Find your next role and help us build the next generation of financial technology.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
                        {job.department}
                      </span>
                      <span className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" /> {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-slate-600 mb-4 max-w-3xl">
                      {job.description}
                    </p>
                    <div className="flex items-center text-sm text-slate-500 font-medium">
                      <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                      {job.location}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-50 hover:bg-blue-600 text-slate-900 hover:text-white font-medium transition-all group-hover:shadow-md"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Don't see a perfect fit?</h2>
          <p className="text-lg text-slate-400 mb-10">
            We are always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1"
          >
            Send Open Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
