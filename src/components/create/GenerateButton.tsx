import { ArrowRight, Loader2, Sparkles } from "lucide-react";
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
        "group relative overflow-hidden min-w-[180px]",
        disabled && "opacity-50 cursor-not-allowed shadow-none hover:scale-100"
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Sparkles className="w-5 h-5" />
          <span>Generate Content</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );
};
