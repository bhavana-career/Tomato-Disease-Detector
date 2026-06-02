import { History, Cloud, LayoutDashboard, Chrome } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: History, title: "Analysis History", desc: "Track every scan with timestamps and trends." },
  { icon: Chrome, title: "Google Sign-In", desc: "One-click secure access to your account." },
  { icon: Cloud, title: "Cloud Backup", desc: "Sync your data across all your devices." },
  { icon: LayoutDashboard, title: "Farm Dashboard", desc: "Visualize crop health across your fields." },
];

export function FutureFeatures() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-14 space-y-3">
          <Badge variant="secondary" className="gap-1.5 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Roadmap
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Coming Soon</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're building the complete platform for modern crop intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <Card
              key={f.title}
              className="p-6 hover:shadow-elegant transition-all hover-scale group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3">
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Soon</Badge>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:gradient-hero group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}