import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBadge } from "@/components/create/HeroBadge";
import { ContentInput } from "@/components/create/ContentInput";
import { PlatformToggle } from "@/components/create/PlatformToggle";
import { GenerateButton } from "@/components/create/GenerateButton";
import { ExamplePrompts } from "@/components/create/ExamplePrompts";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lightbulb } from "lucide-react";

const platforms = [
  { id: "twitter", label: "Twitter / X", icon: "𝕏" },
  { id: "linkedin", label: "LinkedIn", icon: "💼" },
  { id: "instagram", label: "Instagram", icon: "📷" },
  { id: "blog", label: "Blog Post", icon: "✍️" },
];

const examples = [
  "Share insights about building products that users love",
  "Announce our new sustainability initiative",
  "Reflect on lessons learned from scaling a startup",
  "Discuss the future of remote work",
];

const Create = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter", "linkedin"]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleToggle = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    if (!content.trim() || selectedPlatforms.length === 0) {
      toast.error("Please enter content and select platforms");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation - replace with actual AI call
    await new Promise((r) => setTimeout(r, 2000));

    for (const platform of selectedPlatforms) {
      const generated = `🚀 ${content}\n\nThis is AI-generated content optimized for ${platform}. Your message has been crafted to resonate with your audience.\n\n#ContentFlow #AI`;

      const { error } = await supabase.from("content").insert({
        user_id: user!.id,
        title: content.slice(0, 50),
        original_prompt: content,
        platform,
        generated_content: generated,
        status: "draft",
      });

      if (error) {
        toast.error(`Failed to save ${platform} content`);
      }
    }

    setIsGenerating(false);
    toast.success("Content generated!", { description: `Created for ${selectedPlatforms.length} platform(s)` });
    navigate("/dashboard");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <HeroBadge text="AI-Powered Content Engine" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight animate-fade-in-up delay-100">
              What would you like to share?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-150">
              Describe your idea. We'll adapt it intelligently for each platform.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up delay-200">
            <ContentInput value={content} onChange={setContent} placeholder="Enter your content idea, announcement, or message..." />
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground">Target Platforms</label>
              <PlatformToggle platforms={platforms} selected={selectedPlatforms} onToggle={handleToggle} />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>Be specific about your audience for better results</span>
              </div>
              <GenerateButton onClick={handleGenerate} isLoading={isGenerating} disabled={!content.trim() || selectedPlatforms.length === 0} />
            </div>
          </div>

          <ExamplePrompts examples={examples} onSelect={setContent} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
