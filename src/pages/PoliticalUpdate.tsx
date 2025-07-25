import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Clock, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticalUpdate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Political Update"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Working Widget Notice */}
        <Card className="p-6 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl shadow-card text-center">
          <AlertCircle className="h-12 w-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Widget Under Development</h2>
          <p className="text-sm opacity-90">This feature is currently being worked on</p>
        </Card>

        {/* Coming Soon Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Coming Soon Features</h3>
          
          <Card className="p-4 border-2 border-primary/20 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Real-time Updates</h4>
                <p className="text-sm text-muted-foreground">Live political news and updates</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-primary/20 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Trending Topics</h4>
                <p className="text-sm text-muted-foreground">Most discussed political topics</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-primary/20 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Breaking News</h4>
                <p className="text-sm text-muted-foreground">Instant notifications for important updates</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Notify Button */}
        <Button className="w-full bg-gradient-primary text-white rounded-2xl py-4 text-lg font-semibold">
          Notify When Ready
        </Button>
      </div>
    </div>
  );
};

export default PoliticalUpdate;