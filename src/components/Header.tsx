import { Sparkles, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center glow-primary-sm">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-cyan-400 opacity-20 blur-md -z-10" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">ContentFlow</span>
              <span className="text-sm font-medium text-muted-foreground">AI</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <HelpCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="ml-2 border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary">
              Upgrade
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
