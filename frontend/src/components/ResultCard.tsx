import { CheckCircle2, Activity, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export interface PredictionResult {
  disease: string;
  confidence: number;
  cause: string;
  symptoms: string;
  treatment: string;
  prevention: string;
}

export function ResultCard({
  result,
  onReset,
}: {
  result: PredictionResult;
  onReset: () => void;
}) {
  const isHealthy = /healthy/i.test(result.disease);

  return (
    <Card className="p-8 shadow-elegant animate-fade-in border-2 border-primary/10">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Analysis Complete
          </Badge>

          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            New Scan
          </Button>
        </div>

        {/* Disease */}
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Detected Disease
          </p>

          <h2
            className={`text-4xl font-bold tracking-tight ${
              isHealthy ? "text-primary" : "text-gradient"
            }`}
          >
            {result.disease}
          </h2>
        </div>

        {/* Confidence */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Confidence
            </span>

            <span className="text-2xl font-bold text-gradient">
              {result.confidence.toFixed(1)}%
            </span>
          </div>

          <Progress value={result.confidence} className="h-2.5" />
        </div>

        {/* Disease Details */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-4">
          <h3 className="font-semibold text-primary">
            Disease Information
          </h3>

          <div>
            <p className="font-medium">Cause</p>
            <p className="text-sm text-muted-foreground">
              {result.cause}
            </p>
          </div>

          <div>
            <p className="font-medium">Symptoms</p>
            <p className="text-sm text-muted-foreground">
              {result.symptoms}
            </p>
          </div>

          <div>
            <p className="font-medium">Treatment</p>
            <p className="text-sm text-muted-foreground">
              {result.treatment}
            </p>
          </div>

          <div>
            <p className="font-medium">Prevention</p>
            <p className="text-sm text-muted-foreground">
              {result.prevention}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}