import { Leaf } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero shadow-glow transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight">TomaAI</span>
            <span className="text-[10px] text-muted-foreground">AI Disease Detection</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#analyze" className="hover:text-foreground transition-colors">Analyze</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}