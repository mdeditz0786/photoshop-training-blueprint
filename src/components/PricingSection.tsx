
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essential",
      duration: "1 Month",
      price: "₹3,999",
      icon: <Check className="w-6 h-6" />,
      features: [
        "Core Photoshop 2025 tools",
        "Basic AI enhancement features",
        "5 guided projects",
        "Digital certificate",
        "24/7 AI chatbot support"
      ],
      color: "from-cyan-400 to-blue-500",
      popular: false
    },
    {
      name: "Professional",
      duration: "2 Months",
      price: "₹6,999",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Complete 2025 syllabus coverage",
        "Advanced AI tools mastery",
        "15+ real-world projects",
        "AI-powered portfolio building",
        "1-on-1 mentor sessions",
        "Industry placement assistance",
        "LinkedIn skill verification"
      ],
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      name: "Accelerated",
      duration: "2 Weeks",
      price: "₹4,999",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Intensive AI-focused training",
        "Latest 2025 features deep-dive",
        "3 major portfolio pieces",
        "Fast-track certification",
        "Priority job referrals"
      ],
      color: "from-orange-400 to-red-500",
      popular: false
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text mb-4 animate-fade-in">
            2025 Course Investment
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in delay-200">Future-ready pricing for next-generation creative skills</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 animate-fade-in ${plan.popular ? 'ring-2 ring-purple-400 scale-105 shadow-purple-200/50' : ''}`} style={{ animationDelay: `${300 + index * 200}ms` }}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    ⭐ Most Popular 2025
                  </span>
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-center justify-center mb-4 relative z-10">
                  <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-center mb-2 relative z-10">{plan.name}</h3>
                <p className="text-center opacity-90 mb-4 relative z-10">{plan.duration}</p>
                <div className="text-center relative z-10">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <div className="text-sm opacity-75 mt-1">Early Bird Special</div>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:from-purple-500 hover:to-pink-600 shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300'
                }`}>
                  Secure Your Spot 🚀
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-slate-700 font-medium">
              🎯 <strong>2025 Special:</strong> AI mentoring, flexible schedules & group discounts available!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
