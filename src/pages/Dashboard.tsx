import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ContentCard } from "@/components/dashboard/ContentCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Navigate, Link } from "react-router-dom";
import { FileText, TrendingUp, Zap, BarChart3, Plus, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Content {
  id: string;
  title: string;
  original_prompt: string;
  platform: string;
  generated_content: string;
  status: string;
  views: number;
  engagement: number;
  created_at: string;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [contents, setContents] = useState<Content[]>([]);
  const [loadingContent, setLoadingContent] = useState(true);

  useEffect(() => {
    if (user) {
      fetchContent();
    }
  }, [user]);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      toast.error("Failed to load content");
    } else {
      setContents(data || []);
    }
    setLoadingContent(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("content").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
    } else {
      toast.success("Content deleted");
      setContents((prev) => prev.filter((c) => c.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const stats = [
    { label: "Total Content", value: contents.length, change: "+12%", icon: FileText, iconColor: "from-primary to-cyan-400" },
    { label: "Engagement Rate", value: "8.4%", change: "+2.3%", icon: TrendingUp, iconColor: "from-purple-500 to-pink-500" },
    { label: "Active Platforms", value: "4", change: "100%", icon: Zap, iconColor: "from-orange-500 to-red-500" },
    { label: "Avg. Performance", value: "94%", change: "+5.1%", icon: BarChart3, iconColor: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Welcome */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 animate-fade-in-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back! 👋</h1>
            <p className="text-muted-foreground mt-1">Ready to create amazing content today?</p>
          </div>
          <Link to="/create">
            <Button variant="hero" size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Create Content
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <StatsCard key={stat.label} {...stat} delay={i * 75} />
          ))}
        </div>

        {/* Recent Content */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Recent Content</h2>
          {loadingContent ? (
            <div className="flex justify-center py-12">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : contents.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No content yet</h3>
              <p className="text-muted-foreground mb-6">Create your first AI-powered content</p>
              <Link to="/create">
                <Button variant="hero">Get Started</Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {contents.map((content, i) => (
                <ContentCard
                  key={content.id}
                  id={content.id}
                  platform={content.platform}
                  title={content.title}
                  content={content.generated_content}
                  status={content.status}
                  views={content.views}
                  engagement={content.engagement}
                  createdAt={content.created_at}
                  onDelete={handleDelete}
                  delay={i * 75}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
