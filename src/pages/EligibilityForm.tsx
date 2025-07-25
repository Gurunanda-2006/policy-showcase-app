import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EligibilityForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const policy = location.state?.policy || { hindi: "लाडली बहीण योजना" };

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    hscMark: "",
    graduationMark: "",
    postGradMark: "",
    otherCourse: "",
    familyMembers: "",
    ownHouse: "",
    land: "",
    fourWheeler: "",
    twoWheeler: ""
  });

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "Your application has been submitted successfully.",
    });
    navigate('/');
  };

  const DocumentUpload = ({ label }: { label: string }) => (
    <div className="relative">
      <Input 
        placeholder={label}
        className="pr-20 rounded-2xl border-2 border-primary/20"
        readOnly
      />
      <Button 
        size="sm" 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-primary text-white rounded-lg px-2 py-1 text-xs h-8"
      >
        <Upload className="h-3 w-3 mr-1" />
        Upload
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Policy Eligibility Details"
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Candidate Info Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary text-center">Candidate Info</h2>
          
          <div className="space-y-4">
            <Input 
              placeholder="Full Name as per Aadhar card"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="rounded-2xl border-2 border-primary/20"
            />
            
            <div className="grid grid-cols-2 gap-3">
              <Input 
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="rounded-2xl border-2 border-primary/20"
              />
              <Select>
                <SelectTrigger className="rounded-2xl border-2 border-primary/20">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Input 
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="rounded-2xl border-2 border-primary/20"
              />
              <Input 
                placeholder="Email ID"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="rounded-2xl border-2 border-primary/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <DocumentUpload label="Aadhar card" />
              <DocumentUpload label="Pan Card" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <DocumentUpload label="Voter Id" />
              <DocumentUpload label="Driving Lic." />
            </div>

            <Input 
              placeholder="Address as per aadhar"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="rounded-2xl border-2 border-primary/20"
            />
          </div>
        </div>

        {/* Education Info Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary text-center">Education Info</h2>
          
          <div className="space-y-3">
            <DocumentUpload label="HSC Mark" />
            <DocumentUpload label="Graduation Mark" />
            <DocumentUpload label="Post Graduation Mark" />
            <DocumentUpload label="other Course / Skill" />
          </div>
        </div>

        {/* Family Details Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary text-center">Family Details</h2>
          
          <div className="space-y-3">
            <DocumentUpload label="Family Members as per ration card" />
            
            <div className="grid grid-cols-2 gap-3">
              <Select>
                <SelectTrigger className="rounded-2xl border-2 border-primary/20">
                  <SelectValue placeholder="Own House" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="rounded-2xl border-2 border-primary/20">
                  <SelectValue placeholder="Land" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Select>
                <SelectTrigger className="rounded-2xl border-2 border-primary/20">
                  <SelectValue placeholder="Four Wheeler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="rounded-2xl border-2 border-primary/20">
                  <SelectValue placeholder="Two Wheeler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          className="w-full bg-gradient-primary text-white rounded-2xl py-6 text-lg font-semibold shadow-elevated hover:shadow-card transition-all duration-200"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EligibilityForm;