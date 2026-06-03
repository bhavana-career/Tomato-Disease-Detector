import { Shield, Bug, AlertTriangle, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const diseases = [
  {
    icon: Shield,
    title: "Healthy",
    desc: "Healthy tomato leaves with no disease detected.",
  },
  {
    icon: Bug,
    title: "Early Blight",
    desc: "A fungal disease causing brown spots and leaf damage.",
  },
  {
    icon: AlertTriangle,
    title: "Late Blight",
    desc: "A rapidly spreading disease that can destroy tomato crops.",
  },
  {
    icon: Leaf,
    title: "Leaf Mold",
    desc: "Common in humid environments, affecting leaf health.",
  },
];

export function FutureFeatures() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-14 space-y-3">
          <Badge variant="secondary" className="gap-1.5 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI Detection
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Supported Diseases
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            TomaAI can currently identify the most common tomato leaf diseases
            and provide treatment recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {diseases.map((disease) => (
            <Card
              key={disease.title}
              className="p-6 hover:shadow-elegant transition-all hover-scale group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <disease.icon className="h-5 w-5" />
              </div>

              <h3 className="font-semibold mb-1.5">
                {disease.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {disease.desc}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}