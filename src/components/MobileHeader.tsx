import { Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  onMenu?: () => void;
}

export const MobileHeader = ({ title, showBack = false, onBack, onMenu }: MobileHeaderProps) => {
  return (
    <div className="bg-white border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {showBack ? (
          <Button variant="ghost" size="sm" onClick={onBack} className="p-1">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" size="sm" onClick={onMenu} className="p-1">
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <div className="w-8" /> {/* Spacer for centering */}
    </div>
  );
};