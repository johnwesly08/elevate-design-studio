import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>ContentFlow AI • Intelligent Content Automation</span>
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
            <span className="text-primary text-xs font-medium">AI-Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
