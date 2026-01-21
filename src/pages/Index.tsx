import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBadge } from "@/components/HeroBadge";
import { ContentInput } from "@/components/ContentInput";
import { PlatformToggle } from "@/components/PlatformToggle";
import { GenerateButton } from "@/components/GenerateButton";
import { ExamplePrompts } from "@/components/ExamplePrompts";
import { toast } from "sonner";

const platforms = [
  { id: "twitter", label: "Twitter / X", icon: "𝕏" },
  { id: "linkedin", label: "LinkedIn", icon: "in" },
  { id: "instagram", label: "Instagram", icon: "📷" },
  { id: "blog", label: "Blog Post", icon: "✍️" },
];

const examplePrompts = [
  "Share insights about building products t...",
  "Announce our new sustainability initiati...",
  "Reflect on lessons learned from scaling ...",
  "Discuss the future of remote work and co...",
];

const Index = () => {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter", "linkedin"]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleExampleSelect = (example: string) => {
    setContent(example);
  };

  const handleGenerate = async () => {
    if (!content.trim()) {
      toast.error("Please enter your content idea first");
      return;
    }
    if (selectedPlatforms.length === 0) {
      toast.error("Please select at least one platform");
      return;
    }

    setIsGenerating(true);
    
    // Simulate generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsGenerating(false);
    toast.success("Content generated successfully!", {
      description: `Created for ${selectedPlatforms.length} platform(s)`,
    });
  };

  const isGenerateDisabled = !content.trim() || selectedPlatforms.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <HeroBadge text="AI-Powered Content Engine" />
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight animate-fade-in-up delay-100">
              What would you like to share?
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-200">
              Describe your idea or message. We'll adapt it intelligently for each platform.
            </p>
          </div>

          {/* Content Card */}
          <div className="glass rounded-2xl p-6 space-y-6 animate-fade-in-up delay-300">
            {/* Text Input */}
            <ContentInput
              value={content}
              onChange={setContent}
              placeholder="Enter your content idea, announcement, or message..."
            />

            {/* Platform Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground">
                Target Platforms
              </label>
              <PlatformToggle
                platforms={platforms}
                selected={selectedPlatforms}
                onToggle={handlePlatformToggle}
              />
            </div>

            {/* Generate Section */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                <span>Be specific about your audience and goals for better results</span>
              </div>
              <GenerateButton
                onClick={handleGenerate}
                isLoading={isGenerating}
                disabled={isGenerateDisabled}
              />
            </div>
          </div>

          {/* Example Prompts */}
          <ExamplePrompts examples={examplePrompts} onSelect={handleExampleSelect} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
