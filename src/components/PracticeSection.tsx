
import { Code, Briefcase, CheckCircle } from "lucide-react";

const PracticeSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Floating animation elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300/20 rounded-full animate-bounce delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text mb-4 animate-fade-in">
            Practice & Projects 2025
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in delay-200">Hands-on learning with AI-enhanced real-world applications</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">AI-Enhanced Exercises</h3>
            <p className="text-slate-600 leading-relaxed">
              Master 2025 AI tools and traditional techniques through guided practice sessions with modern workflows.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 animate-fade-in delay-500">
            <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Future-Ready Projects</h3>
            <p className="text-slate-600 leading-relaxed">
              Create stunning logos, social media content, and NFT art pieces using 2025's latest features.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 animate-fade-in delay-700">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Advanced Techniques</h3>
            <p className="text-slate-600 leading-relaxed">
              Master generative AI fills, neural filters, and professional content-aware editing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSection;
