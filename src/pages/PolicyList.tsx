import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";

const PolicyList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "Govt policy";

  const policies = [
    {
      id: 1,
      english: "Ladali Bahin Yojana",
      hindi: "लाडली बहीण योजना"
    },
    {
      id: 2,
      english: "Rajkiy Dotth Yojana", 
      hindi: "राजकीय दूत योजना"
    },
    {
      id: 3,
      english: "Ladali Bahin Yojana",
      hindi: "लाडली बहीण योजना"
    },
    {
      id: 4,
      english: "Ladali Bahin Yojana",
      hindi: "लाडली बहीण योजना"
    },
    {
      id: 5,
      english: "Ladali Bahin Yojana",
      hindi: "लाडली बहीण योजना"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title={category}
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-4 animate-fade-in">
        {policies.map((policy) => (
          <Card 
            key={policy.id}
            className="p-6 bg-gradient-primary text-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            onClick={() => navigate('/policy-details', { state: { policy } })}
          >
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">{policy.english}</h3>
              <p className="text-sm opacity-90">{policy.hindi}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PolicyList;