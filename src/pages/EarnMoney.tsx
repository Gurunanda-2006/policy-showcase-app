import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EarnMoney = () => {
  const navigate = useNavigate();

  const earningMethods = [
    {
      icon: Gift,
      title: "Daily Check-in",
      description: "Earn ₹5 daily by checking in",
      amount: "₹5/day",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Refer Friends",
      description: "Get ₹50 for each successful referral",
      amount: "₹50/referral",
      color: "text-blue-600"
    },
    {
      icon: Star,
      title: "Complete Tasks",
      description: "Earn by completing daily tasks",
      amount: "₹10-100",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Earn Money"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Balance Card */}
        <Card className="p-6 bg-gradient-primary text-white rounded-2xl shadow-card text-center">
          <DollarSign className="h-12 w-12 mx-auto mb-3" />
          <h2 className="text-2xl font-bold">₹2,450</h2>
          <p className="text-sm opacity-90">Total Earnings</p>
        </Card>

        {/* Earning Methods */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Earning Methods</h3>
          
          {earningMethods.map((method, index) => (
            <Card key={index} className="p-4 border-2 border-primary/20 rounded-2xl hover:shadow-card transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{method.title}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{method.amount}</p>
                  <Button size="sm" className="mt-1 bg-gradient-primary">
                    Start
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Withdraw Button */}
        <Button className="w-full bg-gradient-primary text-white rounded-2xl py-6 text-lg font-semibold shadow-elevated">
          Withdraw Earnings
        </Button>
      </div>
    </div>
  );
};

export default EarnMoney;