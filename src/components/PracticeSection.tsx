
import { Code, Briefcase, CheckCircle } from "lucide-react";

const PracticeSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Practice & Projects</h2>
          <p className="text-lg text-gray-600">Hands-on learning with real-world applications</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Hands-on Exercises</h3>
            <p className="text-gray-600 leading-relaxed">
              Practical tool exercises to master each Photoshop feature through guided practice sessions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mini Projects</h3>
            <p className="text-gray-600 leading-relaxed">
              Create professional logos, posters, and digital art pieces to build your portfolio.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Practice Tasks</h3>
            <p className="text-gray-600 leading-relaxed">
              Text manipulation, photo retouching, and professional cut-out techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSection;
