import { Loader2, Sparkles } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 rounded-full gradient-hero blur-2xl opacity-50 animate-pulse" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full gradient-hero shadow-glow">
          <Loader2 className="h-10 w-10 text-primary-foreground animate-spin" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold flex items-center gap-2 justify-center">
          <Sparkles className="h-5 w-5 text-primary" />
          Analyzing leaf image...
        </h3>
        <p className="text-sm text-muted-foreground">Our AI is examining the leaf for diseases</p>
      </div>
      <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden">
        <div className="h-full gradient-hero rounded-full animate-[slide-in-right_2s_ease-in-out_infinite]" style={{ width: "60%" }} />
      </div>
    </div>
  );
}