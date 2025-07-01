
import { GraduationCap, Clock, Users, Award } from "lucide-react";

const CourseHero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Professional Training Course
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Adobe Photoshop 2020–21
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Master Professional Image Editing, Graphic Design & Creative Artwork
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2 text-blue-400" />
              <span className="text-sm text-gray-300">2 Months</span>
              <span className="text-xs text-gray-400">40 Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 text-green-400" />
              <span className="text-sm text-gray-300">All Levels</span>
              <span className="text-xs text-gray-400">Beginner to Pro</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-8 h-8 mb-2 text-yellow-400" />
              <span className="text-sm text-gray-300">Certified</span>
              <span className="text-xs text-gray-400">Portfolio Support</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2 text-purple-400" />
              <span className="text-sm text-gray-300">Professional</span>
              <span className="text-xs text-gray-400">Industry Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
