import { Textarea } from "@/components/ui/textarea";

interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const ContentInput = ({ value, onChange, placeholder }: ContentInputProps) => {
  const charCount = value.length;
  
  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-transparent to-cyan-400/40 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-cyan-400/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
      
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="relative w-full min-h-[180px] px-5 py-4 rounded-2xl bg-secondary/40 border-2 border-border/50 text-foreground placeholder:text-muted-foreground/50 resize-none focus:ring-0 focus:border-primary/50 transition-all duration-300 text-base leading-relaxed"
      />
      
      {/* Character count */}
      <div className="absolute bottom-3 right-4 text-xs text-muted-foreground/60">
        {charCount} characters
      </div>
    </div>
  );
};
