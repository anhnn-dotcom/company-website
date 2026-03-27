export default function TrustIndicators() {
  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "30+", label: "Enterprise Projects" },
    { value: "5+", label: "Countries Served" },
    { value: "60+", label: "Fintech Experts" },
  ];

  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{metric.value}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
