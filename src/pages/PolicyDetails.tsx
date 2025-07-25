import { MobileHeader } from "@/components/MobileHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const PolicyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const policy = location.state?.policy || { hindi: "लाडली बहीण योजना", english: "Ladali Bahin Yojana" };

  const eligibilityPoints = [
    "१. महाराष्ट्र राज्याचे रहिवासी असणे आवश्यक.",
    "२. राज्यातील विवाहित, विधवा, घटस्फोटीत, परित्यक्ता आणि निराधार महिला तसेच कुटुंबातील केवळ एक अविवाहित महिला.",
    "३. किमान वयाची २१ वर्ष पूर्ण व कमाल वयाची ६५ वर्ष पूर्ण होईपर्यंत.",
    "४. लाभार्थीचे स्वतःचे आधार लिंक असलेले बँक खाते असावे.",
    "५. लाभार्थी कुटुंबाचे वार्षिक उत्पन्न रु. २.५० लाखापेक्षा जास्त नसावे."
  ];

  const notEligiblePoints = [
    "१. ज्यांचा कुटुंबाचे एकत्रित वार्षिक उत्पन्न रु. २.५० लाख रुपयापेक्षा अधिक आहे.",
    "२. ज्यांचा कुटुंबातील सदस्य आयकरदाता आहे.",
    "३. ज्यांचा कुटुंबातील सदस्य नियमित / कंत्राट कर्मचारी म्हणून सरकारी विभाग / उपक्रम/मंडळ / भारत सरकार किंवा राज्य सरकारच्या स्थानिक संस्थेमध्ये कार्यरत आहेत किंवा सेवानिवृत्तीनंतर निवृत्तीवेतन घेत आहेत.",
    "४. सदर लाभार्थी महिला शासनाच्या इतर विभागांग मार्फत राबविण्यात येणाऱ्या आर्थिक योजनेद्वारे दरमहा रु. १५००/- किंवा त्यापेक्षा जास्त रकमेचा लाभ घेत असेल.",
    "५. ज्यांचा कुटुंबातील सदस्य विद्यमान किंवा माजी खासदार / आमदार आहे.",
    "६. ज्यांचा कुटुंबातील सदस्य भारत सरकार किंवा राज्य सरकारच्या बोर्ड/कॉर्पोरेशन / उपक्रमाचे अध्यक्ष/उपाध्यक्ष/ संचालक/सदस्य आहेत.",
    "७. ज्यांच्याकडे चारचाकी वाहन (ट्रॅक्टर वगळून) त्यांच्या कुटुंबातील सदस्याच्या नावावर नोंदणीकृत आहे."
  ];

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title={policy.hindi}
        showBack 
        onBack={() => navigate(-1)}
      />
      
      <div className="p-4 space-y-6 animate-fade-in">
        {/* Policy Title */}
        <Card className="p-4 bg-gradient-primary text-white rounded-2xl shadow-card">
          <h2 className="text-lg font-semibold text-center">{policy.hindi}</h2>
        </Card>

        {/* Policy Description */}
        <div className="space-y-4">
          <p className="text-sm text-foreground leading-relaxed">
            राज्यातील महिलांच्या आर्थिक स्वातंत्र्यासाठी, त्यांच्या आरोग्य आणि पोषणामध्ये सुधारणा करणे आणि कुटुंबातील त्यांची निर्णयिक भूमिका मजबूत करण्यासाठी महाराष्ट्र राज्याची "मुख्यमंत्री माझी लाडकी बहीण" योजना सुरू करण्यास महाराष्ट्र शासनाने २८ जून २०२४ रोजी मान्यता दिली. या योजनेमार्फत महाराष्ट्र राज्यातील २१ ते ६५ वयोगटातील पात्र महिलांना दर महिना रु. १,५००/- असा आर्थिक लाभ DBT द्वारे देण्यात येणार आहे.
          </p>

          {/* Eligibility Section */}
          <Card className="p-4 bg-gradient-primary text-white rounded-2xl shadow-card">
            <h3 className="text-lg font-semibold text-center mb-4">Eligibility</h3>
          </Card>

          <div className="space-y-2">
            {eligibilityPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm font-medium">•</span>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Not Eligible Section */}
          <Card className="p-4 bg-gradient-primary text-white rounded-2xl shadow-card">
            <h3 className="text-lg font-semibold text-center">Not Eligible</h3>
          </Card>

          <div className="space-y-2">
            {notEligiblePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm font-medium">•</span>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Apply Now Button */}
          <Button 
            className="w-full bg-gradient-primary text-white rounded-2xl py-6 text-lg font-semibold shadow-elevated hover:shadow-card transition-all duration-200"
            onClick={() => navigate('/eligibility-form', { state: { policy } })}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;