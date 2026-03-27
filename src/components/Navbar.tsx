import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle background transparency
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-white/50 backdrop-blur-sm border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <span className="font-bold text-xl text-slate-900 tracking-tight">JITS Innovation</span>
              </Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/solutions" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Solutions</Link>
              <Link to="/case-studies" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Case Studies</Link>
              <Link to="/company" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Company</Link>
              <Link to="/careers" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Careers</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 font-medium text-sm">Sign In</Link>
            <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm shadow-emerald-500/20">
              Contact Sales
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/solutions" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">Solutions</Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">Case Studies</Link>
            <Link to="/company" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">Company</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">Careers</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-emerald-600 hover:bg-slate-50 rounded-md">Contact Sales</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
