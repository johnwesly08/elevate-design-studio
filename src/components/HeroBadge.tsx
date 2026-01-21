import { Sparkles } from "lucide-react";

interface HeroBadgeProps {
  text: string;
}

export const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in-up">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-primary">{text}</span>
    </div>
  );
};
