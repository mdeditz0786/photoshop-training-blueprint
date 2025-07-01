
import { FileText, Award, Briefcase } from "lucide-react";

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "2025 Training Materials",
      description: "AI-enhanced study guides and interactive digital resources",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Digital Certification",
      description: "Blockchain-verified certificate with LinkedIn integration",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "AI Portfolio Builder",
      description: "Automated portfolio creation with industry templates",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-500 rounded-full animate-bounce delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text mb-4 animate-fade-in">
            What You'll Receive in 2025
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in delay-200">Complete AI-powered support package for your creative journey</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 animate-fade-in" style={{ animationDelay: `${300 + index * 200}ms` }}>
              <div className={`bg-gradient-to-br ${item.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverablesSection;
