import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Platform {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface PlatformToggleProps {
  platforms: Platform[];
  selected: string[];
  onToggle: (platformId: string) => void;
}

export const PlatformToggle = ({ platforms, selected, onToggle }: PlatformToggleProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => {
        const isSelected = selected.includes(platform.id);
        return (
          <button
            key={platform.id}
            onClick={() => onToggle(platform.id)}
            className={cn(
              "group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              isSelected
                ? "bg-primary/15 border border-primary/50 text-primary glow-primary-sm"
                : "bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary"
            )}
          >
            <span className="text-base">{platform.icon}</span>
            <span>{platform.label}</span>
            {isSelected && (
              <Check className="w-4 h-4 ml-1 text-primary animate-scale-in" />
            )}
          </button>
        );
      })}
    </div>
  );
};
