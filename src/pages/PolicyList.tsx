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
      english: "National Education Policy",
      hindi: "राष्ट्रीय शिक्षा नीति"
    },
    {
      id: 2,
      english: "Ayushman Bharat Health Scheme", 
      hindi: "आयुष्मान भारत स्वास्थ्य योजना"
    },
    {
      id: 3,
      english: "PM Kisan Welfare Scheme",
      hindi: "पीएम किसान कल्याण योजना"
    },
    {
      id: 4,
      english: "Smart Cities Infrastructure Mission",
      hindi: "स्मार्ट सिटी इन्फ्रास्ट्रक्चर मिशन"
    },
    {
      id: 5,
      english: "Digital India Sovereignty Initiative",
      hindi: "डिजिटल इंडिया संप्रभुता पहल"
    },
    {
      id: 6,
      english: "Social Inclusion Development Program",
      hindi: "सामाजिक समावेश विकास कार्यक्रम"
    },
    {
      id: 7,
      english: "National Security Enhancement Plan",
      hindi: "राष्ट्रीय सुरक्षा संवर्धन योजना"
    },
    {
      id: 8,
      english: "GST Taxation Reform Policy",
      hindi: "जीएसटी कराधान सुधार नीति"
    },
    {
      id: 9,
      english: "Citizenship Amendment Framework",
      hindi: "नागरिकता संशोधन ढांचा"
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