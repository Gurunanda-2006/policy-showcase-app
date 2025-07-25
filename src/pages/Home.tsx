import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Flag, 
  User, 
  MessageSquare, 
  FileText, 
  Globe,
  Send
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: DollarSign, label: "Earn Money", color: "text-green-600", path: "/earn-money" },
    { icon: Flag, label: "Daily Banner", color: "text-blue-600", path: "/daily-banner" },
    { icon: User, label: "Mini website", color: "text-purple-600", path: "/mini-website" },
    { icon: MessageSquare, label: "Marketing Messenger", color: "text-orange-600", path: "/marketing" },
    { icon: FileText, label: "Govt policy", color: "text-primary", path: "/govt-policy" },
    { icon: Globe, label: "Political Update", color: "text-red-600", path: "/political-update", badge: "Working on this Widget" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader title="Home Page" />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Slider Image Section */}
        <Card className="bg-gradient-primary text-white rounded-2xl shadow-card overflow-hidden">
          <div className="h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4 animate-[slide-in-right_3s_ease-in-out_infinite]">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xs font-medium">Policy 1</span>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xs font-medium">Policy 2</span>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xs font-medium">Policy 3</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-4">
              <span className="text-white text-sm font-medium">Featured Policies</span>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-4 text-center hover:shadow-elevated transition-all duration-200 hover:scale-105 cursor-pointer border-2 border-primary/20 rounded-2xl relative"
              onClick={() => navigate(feature.path)}
            >
              {feature.badge && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Working
                </div>
              )}
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-foreground">{feature.label}</p>
            </Card>
          ))}
        </div>

        {/* Status Cards */}
        <div className="space-y-3">
          <Card className="p-4 bg-white rounded-2xl border-2 border-primary/20">
            <div className="flex justify-between items-center">
              <span className="text-primary font-medium">Remaining Days</span>
              <span className="text-primary font-bold text-lg">365</span>
            </div>
          </Card>
          
          <Card className="p-4 bg-white rounded-2xl border-2 border-primary/20">
            <div className="flex justify-between items-center">
              <span className="text-primary font-medium">Referral Count</span>
              <span className="text-primary font-bold text-lg">20</span>
            </div>
          </Card>
        </div>

        {/* Send Button */}
        <div className="flex justify-end pt-4">
          <Button 
            size="lg" 
            className="bg-gradient-primary rounded-full w-12 h-12 p-0 shadow-elevated"
          >
            <Send className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;