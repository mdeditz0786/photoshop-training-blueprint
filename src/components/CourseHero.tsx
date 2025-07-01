
import { GraduationCap, Clock, Users, Award } from "lucide-react";

const CourseHero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg animate-pulse">
              🚀 2025 Professional Training Course
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in delay-200">
            Adobe Photoshop 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in delay-400">
            Master Next-Gen Image Editing, AI-Powered Design & Creative Innovation
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in delay-600">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 mb-2 text-cyan-400" />
              <span className="text-sm text-gray-200 font-semibold">2 Months</span>
              <span className="text-xs text-gray-300">40 Hours</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 mb-2 text-emerald-400" />
              <span className="text-sm text-gray-200 font-semibold">All Levels</span>
              <span className="text-xs text-gray-300">Beginner to Pro</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <GraduationCap className="w-8 h-8 mb-2 text-yellow-400" />
              <span className="text-sm text-gray-200 font-semibold">Certified</span>
              <span className="text-xs text-gray-300">Portfolio Support</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 mb-2 text-purple-400" />
              <span className="text-sm text-gray-200 font-semibold">AI-Enhanced</span>
              <span className="text-xs text-gray-300">2025 Features</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
