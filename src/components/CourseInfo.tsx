
import { Clock, Calendar, MapPin, Phone, Users, Award, CheckCircle, IndianRupee } from "lucide-react";

const CourseInfo = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            🎨 Adobe Photoshop Course – Offline Training
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 animate-fade-in delay-200">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Siddhi Vinayak Tally Academy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">New Batches: 10 July 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">Offline (Practical + Theory)</span>
            </div>
          </div>
        </div>

        {/* Batches */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Batch 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Morning Batch</h3>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">✅</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span><strong>Timing:</strong> 11:00 AM – 12:30 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span><strong>Days:</strong> Monday to Friday</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span><strong>Level:</strong> Beginners</span>
              </div>
              <div className="flex items-center gap-3">
                <IndianRupee className="w-5 h-5 text-yellow-400" />
                <span><strong>Fees:</strong> ₹5,000 (Duration: 2 Months)</span>
              </div>
            </div>
          </div>

          {/* Batch 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Afternoon Batch</h3>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">✅</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span><strong>Timing:</strong> 3:00 PM – 4:30 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span><strong>Days:</strong> Monday to Friday</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span><strong>Level:</strong> Beginners</span>
              </div>
              <div className="flex items-center gap-3">
                <IndianRupee className="w-5 h-5 text-yellow-400" />
                <span><strong>Fees:</strong> ₹5,000 (Duration: 2 Months)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in delay-700">
            📚 Course Content Includes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Photoshop Tools & Interface",
              "Layers, Selection & Masking", 
              "Poster / Banner / ID Card Design",
              "Background Removal & Image Retouching",
              "Passport Size Photo Editing",
              "Project-Based Practice + Certificate"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${800 + index * 100}ms` }}>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate & Contact */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 max-w-2xl mx-auto mb-8 animate-fade-in delay-1000">
            <Award className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">🎓 Certificate: On Course Completion</h3>
            <p className="text-white/90 font-semibold">📌 Limited Seats – Book Early!</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in delay-1200">
            <div className="flex items-center gap-3 bg-green-500 rounded-full px-8 py-4 hover:bg-green-600 transition-colors">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">📞 Contact / WhatsApp: 99999 88888</span>
            </div>
            <div className="flex items-center gap-3 bg-blue-500 rounded-full px-8 py-4 hover:bg-blue-600 transition-colors">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">📍 Visit Our Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
