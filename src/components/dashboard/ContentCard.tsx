import { Eye, Heart, Calendar, MoreHorizontal, ExternalLink, Trash2, Edit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDistanceToNow } from "date-fns";

interface ContentCardProps {
  id: string;
  platform: string;
  title: string;
  content: string;
  status: string;
  views: number;
  engagement: number;
  createdAt: string;
  onDelete?: (id: string) => void;
  delay?: number;
}

const platformConfig: Record<string, { color: string; bgColor: string; icon: string }> = {
  twitter: { color: "text-twitter", bgColor: "bg-twitter/10", icon: "𝕏" },
  linkedin: { color: "text-linkedin", bgColor: "bg-linkedin/10", icon: "in" },
  instagram: { color: "text-instagram", bgColor: "bg-instagram/10", icon: "📷" },
  blog: { color: "text-blog", bgColor: "bg-blog/10", icon: "✍️" },
};

export const ContentCard = ({ 
  id, 
  platform, 
  title, 
  content, 
  status, 
  views, 
  engagement, 
  createdAt, 
  onDelete,
  delay = 0 
}: ContentCardProps) => {
  const config = platformConfig[platform.toLowerCase()] || platformConfig.blog;
  
  return (
    <div 
      className="card-premium p-5 group hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-lg", config.bgColor)}>
            {config.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", config.bgColor, config.color)}>
                {platform}
              </span>
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                status === "published" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
              )}>
                {status}
              </span>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Calendar className="w-3 h-3" />
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </span>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-strong">
            <DropdownMenuItem className="cursor-pointer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer text-destructive focus:text-destructive"
              onClick={() => onDelete?.(id)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <h4 className="font-semibold text-foreground mb-2 line-clamp-1">
        {title}
      </h4>
      
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {content}
      </p>

      <div className="flex items-center gap-4 pt-3 border-t border-border/30">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium">{views.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">{engagement.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
