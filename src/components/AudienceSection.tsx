
import { GraduationCap, Briefcase, Palette, Building } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Students",
      description: "Gen-Z learners ready to master 2025's creative technologies",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Creators",
      description: "Content creators and freelancers embracing AI-enhanced workflows",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Designers",
      description: "Future-focused designers entering the AI-creative revolution",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Entrepreneurs",
      description: "Business innovators creating next-gen digital brand experiences",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-800 via-purple-800 to-indigo-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 animate-fade-in">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Who Can Join</span>
            <span className="text-white"> 2025?</span>
          </h2>
          <p className="text-lg text-gray-200 animate-fade-in delay-200">Perfect for anyone ready to master AI-powered creative design skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${300 + index * 200}ms` }}>
              <div className={`bg-gradient-to-br ${audience.color} rounded-3xl p-8 mb-4 group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl`}>
                <div className="text-white mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{audience.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceSection;
