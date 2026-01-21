import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>ContentFlow AI • Intelligent Content Automation</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
            <span className="text-primary text-xs font-medium">AI-Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
