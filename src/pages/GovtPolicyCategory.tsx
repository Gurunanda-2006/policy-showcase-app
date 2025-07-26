import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const GovtPolicyCategory = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Women Policy", color: "bg-[hsl(var(--widget-pink))]" },
    { name: "Agri. Policy", color: "bg-[hsl(var(--widget-green))]" },
    { name: "Student Policy", color: "bg-[hsl(var(--widget-blue))]" },
    { name: "Employee Policy", color: "bg-[hsl(var(--widget-purple))]" },
    { name: "Child Policy", color: "bg-[hsl(var(--widget-orange))]" },
    { name: "Health Policy", color: "bg-[hsl(var(--widget-red))]" },
    { name: "EV Policy", color: "bg-gradient-to-r from-[hsl(var(--widget-teal))] to-[hsl(var(--widget-blue))]" },
    { name: "Education Policy", color: "bg-[hsl(var(--widget-purple))]" },
    { name: "Skill Policy", color: "bg-[hsl(var(--widget-teal))]" },
    { name: "Car Policy", color: "bg-[hsl(var(--widget-gray))]" }
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
              className={`p-4 text-center ${category.color} text-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-200 hover:scale-105 cursor-pointer`}
              onClick={() => navigate('/policy-list', { state: { category: category.name } })}
            >
              <p className="text-sm font-medium">{category.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovtPolicyCategory;