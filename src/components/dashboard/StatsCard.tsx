import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  iconColor?: string;
  delay?: number;
}

export const StatsCard = ({ label, value, change, icon: Icon, iconColor = "from-primary to-cyan-400", delay = 0 }: StatsCardProps) => {
  return (
    <div 
      className="card-premium p-5 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg",
          iconColor
        )}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {change && (
          <span className={cn(
            "text-xs font-semibold px-2 py-1 rounded-full",
            change.startsWith("+") 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          )}>
            {change}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
};
