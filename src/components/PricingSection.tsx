
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      duration: "1 Month",
      price: "₹2,500",
      icon: <Check className="w-6 h-6" />,
      features: [
        "Essential Photoshop tools",
        "Basic editing techniques",
        "5 practice projects",
        "Certificate of completion",
        "Email support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Advanced",
      duration: "2 Months",
      price: "₹4,500",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Complete syllabus coverage",
        "Advanced retouching techniques",
        "12+ projects & assignments",
        "Portfolio building support",
        "Priority support",
        "Annual award function participation"
      ],
      color: "from-purple-500 to-violet-500",
      popular: true
    },
    {
      name: "Fast Track",
      duration: "15 Days",
      price: "₹3,000",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Intensive training schedule",
        "Core concepts focus",
        "3 major projects",
        "Quick certification",
        "Accelerated learning path"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Fee Structure</h2>
          <p className="text-lg text-gray-600">Flexible pricing options to suit your learning needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-center opacity-90 mb-4">{plan.duration}</p>
                <div className="text-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            💡 Custom batch timing and group discounts available. Contact us for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
