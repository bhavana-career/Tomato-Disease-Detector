import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-leaf.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Tomato Disease Detection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Detect Tomato Diseases with{" "}
              <span className="text-gradient">AI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Upload a tomato leaf image and receive instant disease diagnosis, confidence
              score, and treatment recommendations — powered by deep learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="gradient-hero text-primary-foreground border-0 shadow-glow hover:shadow-elegant transition-all hover:scale-105 gap-2"
              >
                <a href="#analyze">
                  Analyze Leaf
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">See features</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Instant results
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Upto 5 diseases!
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 gradient-hero rounded-3xl blur-3xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/50">
              <img
                src={heroImg}
                alt="AI scanning a tomato leaf for diseases"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}