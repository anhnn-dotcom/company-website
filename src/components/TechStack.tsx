export default function TechStack() {
  const categories = [
    {
      name: "Backend & Core",
      techs: ["Java", "Node.js", "NestJS", "Go", "Spring Boot"]
    },
    {
      name: "Frontend & Mobile",
      techs: ["React", "Angular", "Vue", "React Native", "Flutter"]
    },
    {
      name: "Infrastructure & DB",
      techs: ["AWS", "Kubernetes", "Docker", "PostgreSQL", "MongoDB", "Oracle"]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Enterprise Technology Stack</h2>
          <p className="text-lg text-slate-600">
            We utilize cutting-edge, scalable technologies to deliver robust financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 border-b border-slate-100 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
