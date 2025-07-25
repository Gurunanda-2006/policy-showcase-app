import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const GovtPolicyCategory = () => {
  const navigate = useNavigate();

  const categories = [
    "Women Policy",
    "Agri. Policy", 
    "Student Policy",
    "Employee Policy",
    "Child Policy",
    "Health Policy",
    "EV Policy",
    "Education Policy",
    "Skill Policy",
    "Car Policy", // Added as requested
    "Women Policy",
    "Women Policy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Govt policy category" 
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 animate-fade-in">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="p-4 text-center bg-gradient-primary text-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-200 hover:scale-105 cursor-pointer"
              onClick={() => navigate('/policy-list', { state: { category } })}
            >
              <p className="text-sm font-medium">{category}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovtPolicyCategory;