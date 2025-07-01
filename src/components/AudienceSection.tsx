
import { GraduationCap, Briefcase, Palette, Building } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Students",
      description: "School & College students looking to learn creative skills",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Freelancers",
      description: "Content creators and freelancers expanding their skillset",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Designers",
      description: "Aspiring graphic designers entering the creative industry",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Owners",
      description: "Entrepreneurs wanting to create their own branding materials",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Who Can Join?</h2>
          <p className="text-lg text-gray-300">Perfect for anyone looking to master creative design skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${audience.color} rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-white mb-4">
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
