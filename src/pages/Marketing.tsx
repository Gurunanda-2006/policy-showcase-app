import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Users, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Marketing = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      title: "Government Scheme Awareness",
      sent: "2,450",
      opened: "1,890",
      status: "Active"
    },
    {
      title: "Policy Update Notification", 
      sent: "1,200",
      opened: "980",
      status: "Completed"
    },
    {
      title: "Health Campaign Message",
      sent: "3,100",
      opened: "2,340",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Marketing Messenger"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Stats Overview */}
        <Card className="p-6 bg-gradient-primary text-white rounded-2xl shadow-card text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Marketing Dashboard</h2>
          <p className="text-sm opacity-90">Reach your audience effectively</p>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center border-2 border-primary/20 rounded-2xl">
            <Send className="h-6 w-6 mx-auto mb-1 text-primary" />
            <p className="text-lg font-bold text-primary">6,750</p>
            <p className="text-xs text-muted-foreground">Sent</p>
          </Card>
          <Card className="p-3 text-center border-2 border-primary/20 rounded-2xl">
            <Users className="h-6 w-6 mx-auto mb-1 text-primary" />
            <p className="text-lg font-bold text-primary">5,210</p>
            <p className="text-xs text-muted-foreground">Delivered</p>
          </Card>
          <Card className="p-3 text-center border-2 border-primary/20 rounded-2xl">
            <BarChart className="h-6 w-6 mx-auto mb-1 text-primary" />
            <p className="text-lg font-bold text-primary">77%</p>
            <p className="text-xs text-muted-foreground">Open Rate</p>
          </Card>
        </div>

        {/* Campaign List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Campaigns</h3>
          
          {campaigns.map((campaign, index) => (
            <Card key={index} className="p-4 border-2 border-primary/20 rounded-2xl">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-foreground flex-1">{campaign.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Sent: {campaign.sent}</span>
                  <span>Opened: {campaign.opened}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-gradient-primary text-white rounded-2xl py-4 text-lg font-semibold">
            <Send className="h-5 w-5 mr-2" />
            Create New Campaign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;