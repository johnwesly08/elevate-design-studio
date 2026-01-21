import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GenerateButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const GenerateButton = ({ onClick, isLoading, disabled }: GenerateButtonProps) => {
  return (
    <Button
      variant="hero"
      size="lg"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "group relative overflow-hidden",
        disabled && "opacity-50 cursor-not-allowed shadow-none hover:scale-100"
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <span>Generate Content</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );
};
