import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DailyBanner = () => {
  const navigate = useNavigate();

  const banners = [
    {
      id: 1,
      title: "Government Scheme Update",
      date: "Today",
      views: "1,234",
      image: "https://via.placeholder.com/300x150/9333ea/ffffff?text=Govt+Scheme"
    },
    {
      id: 2,
      title: "Health Awareness Campaign",
      date: "Yesterday", 
      views: "856",
      image: "https://via.placeholder.com/300x150/7c3aed/ffffff?text=Health+Campaign"
    },
    {
      id: 3,
      title: "Education Policy News",
      date: "2 days ago",
      views: "692",
      image: "https://via.placeholder.com/300x150/8b5cf6/ffffff?text=Education+News"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Daily Banner"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Header Stats */}
        <Card className="p-4 bg-gradient-primary text-white rounded-2xl shadow-card">
          <div className="text-center space-y-2">
            <Calendar className="h-8 w-8 mx-auto" />
            <h2 className="text-lg font-semibold">Daily Updates</h2>
            <p className="text-sm opacity-90">Stay updated with latest news</p>
          </div>
        </Card>

        {/* Banner List */}
        <div className="space-y-4">
          {banners.map((banner) => (
            <Card key={banner.id} className="p-4 border-2 border-primary/20 rounded-2xl hover:shadow-card transition-all duration-200">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{banner.title}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{banner.date}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{banner.views}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-gradient-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download Banner
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyBanner;