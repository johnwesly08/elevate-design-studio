import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles, ArrowRight, Zap, Target, BarChart3 } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  const features = [
    { icon: Sparkles, title: "AI-Powered", description: "Generate content tailored for each platform" },
    { icon: Target, title: "Multi-Platform", description: "Twitter, LinkedIn, Instagram & Blog" },
    { icon: BarChart3, title: "Analytics", description: "Track performance and engagement" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Content Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up delay-100">
            <span className="text-foreground">Create Content</span>
            <br />
            <span className="text-gradient-vibrant">10x Faster</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-150">
            Transform your ideas into platform-optimized content with the power of AI. One prompt, multiple platforms.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link to={user ? "/create" : "/auth"}>
              <Button variant="hero" size="xl" className="gap-2 group">
                {user ? "Create Content" : "Get Started Free"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {user && (
              <Link to="/dashboard">
                <Button variant="glass" size="xl">View Dashboard</Button>
              </Link>
            )}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 animate-fade-in-up delay-300">
            {features.map((f) => (
              <div key={f.title} className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
