import { Textarea } from "@/components/ui/textarea";

interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const ContentInput = ({ value, onChange, placeholder }: ContentInputProps) => {
  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
      
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="relative w-full min-h-[160px] px-5 py-4 rounded-2xl bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/60 resize-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
      />
    </div>
  );
};
