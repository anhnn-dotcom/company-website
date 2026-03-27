import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "JITS Innovation Labs transformed our core banking infrastructure. Their cloud-native approach reduced our operational costs by 40% while significantly improving system resilience.",
    author: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "GlobalBank",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The digital wallet solution provided by JITS allowed us to launch our new consumer app in record time. The integration was seamless, and the security features are top-notch.",
    author: "Michael Chen",
    role: "Head of Digital Products",
    company: "PayStream",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Their expertise in DevOps and system integration helped us modernize our legacy systems without any downtime. A truly reliable and forward-thinking partner.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "NexusFinance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600">
            Hear from the organizations that have partnered with us to accelerate their digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-200" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
