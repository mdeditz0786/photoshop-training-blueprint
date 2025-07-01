
const ObjectiveSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-cyan-100/20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text mb-8 animate-fade-in">
            2025 Course Objective
          </h2>
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 hover:shadow-3xl transition-all duration-500 animate-scale-in">
            <p className="text-lg text-slate-700 leading-relaxed">
              To equip students with <span className="font-bold text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text">cutting-edge AI-powered skills</span> in 
              image editing, graphic design, photo retouching, and creative artwork using Adobe Photoshop 2025. This course is designed to help 
              learners become <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">industry leaders</span> for professional 
              and freelance opportunities in the modern digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveSection;
