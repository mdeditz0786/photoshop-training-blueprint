
import { Phone, Mail, MapPin, User, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-300">Ready to begin your creative journey? Contact us now!</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-lg p-3 mr-4">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Trainer</p>
                    <p className="font-semibold">[Your Name]</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-lg p-3 mr-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Institute</p>
                    <p className="font-semibold">[Your Institute Name]</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-purple-500 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="font-semibold">[Mobile Number]</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-orange-500 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="font-semibold">[Your Email]</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="font-semibold">[Location]</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Additional Services</h3>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">We Also Provide:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    PDF format proposals with your branding
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Printable brochures and banners
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Custom admission forms
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Logo and contact detail integration
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Request Custom Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
