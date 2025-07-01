
import { Award, BookOpen, Trophy, Users } from "lucide-react";

const AssessmentSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text mb-4 animate-fade-in">
            Assessment & Certification 2025
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in delay-200">Comprehensive evaluation with industry-standard recognition</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-500 animate-fade-in delay-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg p-3 mr-4 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Monthly AI-Enhanced Tests</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg backdrop-blur-sm">
                  <span className="text-slate-700 font-medium">Theory & AI Concepts</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">40 Marks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg backdrop-blur-sm">
                  <span className="text-slate-700 font-medium">Practical & AI Tools</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">40 Marks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg backdrop-blur-sm">
                  <span className="text-slate-700 font-medium">Creative Viva</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">20 Marks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-500 animate-fade-in delay-500">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-3 mr-4 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">2025 Certification</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center p-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-4 animate-pulse"></div>
                  AI-powered portfolio evaluation
                </li>
                <li className="flex items-center p-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-4 animate-pulse delay-300"></div>
                  Industry-recognized digital certificate
                </li>
                <li className="flex items-center p-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-4 animate-pulse delay-600"></div>
                  2025 Excellence Awards participation
                </li>
                <li className="flex items-center p-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-4 animate-pulse delay-900"></div>
                  LinkedIn skill verification badge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSection;
