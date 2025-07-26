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
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=160&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=160&fit=crop&crop=center"
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Semi-fast: 2.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

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
          <div 
            className="h-40 relative cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0">
              <img 
                src={images[currentImageIndex]}
                alt="Featured Content" 
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="absolute bottom-3 left-4 z-10">
              <span className="text-white text-sm font-medium drop-shadow-lg">Featured Content</span>
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