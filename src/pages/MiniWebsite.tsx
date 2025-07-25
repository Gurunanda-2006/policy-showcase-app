import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Edit, Eye, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MiniWebsite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Mini Website"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Website Preview */}
        <Card className="p-6 bg-gradient-primary text-white rounded-2xl shadow-card text-center">
          <Globe className="h-12 w-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Your Mini Website</h2>
          <p className="text-sm opacity-90">Create your personalized website</p>
        </Card>

        {/* Website Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center border-2 border-primary/20 rounded-2xl">
            <Eye className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-primary">1,234</p>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </Card>
          <Card className="p-4 text-center border-2 border-primary/20 rounded-2xl">
            <Share className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-primary">56</p>
            <p className="text-sm text-muted-foreground">Shares</p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-gradient-primary text-white rounded-2xl py-4 text-lg font-semibold">
            <Edit className="h-5 w-5 mr-2" />
            Edit Website
          </Button>
          <Button variant="outline" className="w-full rounded-2xl py-4 text-lg border-2 border-primary text-primary">
            <Eye className="h-5 w-5 mr-2" />
            Preview Website
          </Button>
          <Button variant="outline" className="w-full rounded-2xl py-4 text-lg border-2 border-primary text-primary">
            <Share className="h-5 w-5 mr-2" />
            Share Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniWebsite;