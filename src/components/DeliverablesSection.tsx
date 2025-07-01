
import { FileText, Award, Briefcase } from "lucide-react";

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Training Material",
      description: "Comprehensive PDF and printed study materials",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificate of Completion",
      description: "Official certification upon successful completion",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Portfolio Building Support",
      description: "Guidance in creating a professional portfolio",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Receive</h2>
          <p className="text-lg text-gray-600">Complete support package for your learning journey</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverablesSection;
