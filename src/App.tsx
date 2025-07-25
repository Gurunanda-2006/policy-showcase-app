import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GovtPolicyCategory from "./pages/GovtPolicyCategory";
import PolicyList from "./pages/PolicyList";
import PolicyDetails from "./pages/PolicyDetails";
import EligibilityForm from "./pages/EligibilityForm";
import EarnMoney from "./pages/EarnMoney";
import DailyBanner from "./pages/DailyBanner";
import MiniWebsite from "./pages/MiniWebsite";
import Marketing from "./pages/Marketing";
import PoliticalUpdate from "./pages/PoliticalUpdate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/govt-policy" element={<GovtPolicyCategory />} />
          <Route path="/policy-list" element={<PolicyList />} />
          <Route path="/policy-details" element={<PolicyDetails />} />
          <Route path="/eligibility-form" element={<EligibilityForm />} />
          <Route path="/earn-money" element={<EarnMoney />} />
          <Route path="/daily-banner" element={<DailyBanner />} />
          <Route path="/mini-website" element={<MiniWebsite />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/political-update" element={<PoliticalUpdate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
