interface ExamplePromptsProps {
  examples: string[];
  onSelect: (example: string) => void;
}

export const ExamplePrompts = ({ examples, onSelect }: ExamplePromptsProps) => {
  return (
    <div className="space-y-4 animate-fade-in-up delay-300">
      <p className="text-sm text-muted-foreground text-center">Try an example:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelect(example)}
            className="px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/40 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border/60 transition-all duration-200 max-w-[280px] truncate hover:scale-[1.02]"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};
