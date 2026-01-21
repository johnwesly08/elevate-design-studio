import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Platform {
  id: string;
  label: string;
  icon: string;
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
              "group relative flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
              isSelected
                ? "bg-primary/15 border-2 border-primary/50 text-primary glow-primary-sm scale-[1.02]"
                : "bg-secondary/50 border-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <span className="text-lg">{platform.icon}</span>
            <span>{platform.label}</span>
            {isSelected && (
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
