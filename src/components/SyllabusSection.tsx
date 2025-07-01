
import { 
  Monitor, 
  MousePointer, 
  Paintbrush, 
  Type, 
  Layers, 
  Image, 
  Camera, 
  Filter,
  Menu,
  FolderOpen,
  Wrench,
  BookOpen
} from "lucide-react";

const SyllabusSection = () => {
  const modules = [
    {
      id: 1,
      title: "Introduction to Photoshop",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        "What is Photoshop?",
        "Uses in Graphic Design, Photography, Web Design",
        "Supported formats & file extensions",
        "Photoshop version history overview"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Getting Started",
      icon: <Monitor className="w-6 h-6" />,
      topics: [
        "Workspace layout",
        "Creating & managing documents",
        "Navigation and zoom tools"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Photoshop Toolbox",
      icon: <MousePointer className="w-6 h-6" />,
      topics: [
        "Selection Tools: Move, Marquee, Lasso, Magic Wand",
        "Crop, Eyedropper, and Quick Selection Tool"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 4,
      title: "Retouching & Editing Tools",
      icon: <Wrench className="w-6 h-6" />,
      topics: [
        "Spot Healing, Clone Stamp, Eraser",
        "Paint Bucket, Gradient, Blur, Dodge, Burn"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Painting & Drawing",
      icon: <Paintbrush className="w-6 h-6" />,
      topics: [
        "Brush Tool, Custom Brushes",
        "Color Replacement, Mixer Brush"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "Text & Typography",
      icon: <Type className="w-6 h-6" />,
      topics: [
        "Horizontal/Vertical Text",
        "Text Effects and Styling"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 7,
      title: "Layers and Masks",
      icon: <Layers className="w-6 h-6" />,
      topics: [
        "Creating, Grouping, Merging Layers",
        "Layer Styles, Adjustment Layers, Clipping Masks"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 8,
      title: "Designing Graphics",
      icon: <Image className="w-6 h-6" />,
      topics: [
        "Poster, Social Media Creatives, Cut-outs",
        "Custom Shape Tool usage"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Image Retouching",
      icon: <Camera className="w-6 h-6" />,
      topics: [
        "Content-Aware Fill",
        "Red-eye and blemish removal"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 10,
      title: "Filters and Effects",
      icon: <Filter className="w-6 h-6" />,
      topics: [
        "Filter Gallery, Liquify, Vanishing Point",
        "Stylize Filters"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 11,
      title: "Menus & Advanced Options",
      icon: <Menu className="w-6 h-6" />,
      topics: [
        "File Export, Preferences, Image & Layer Menus"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      id: 12,
      title: "Adobe Bridge (Optional)",
      icon: <FolderOpen className="w-6 h-6" />,
      topics: [
        "Organizing & batch-editing photos"
      ],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Syllabus</h2>
          <p className="text-lg text-gray-600">Comprehensive 12-module curriculum covering all aspects of Adobe Photoshop</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className={`bg-gradient-to-r ${module.color} p-4`}>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-lg p-2 mr-3">
                    {module.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium opacity-90">Module {module.id}</span>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusSection;
