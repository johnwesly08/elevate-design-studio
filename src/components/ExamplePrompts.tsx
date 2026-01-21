interface ExamplePromptsProps {
  examples: string[];
  onSelect: (example: string) => void;
}

export const ExamplePrompts = ({ examples, onSelect }: ExamplePromptsProps) => {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <p className="text-sm text-muted-foreground text-center">Try an example:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelect(example)}
            className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-200 max-w-xs truncate"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};
