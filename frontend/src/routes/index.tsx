import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UploadCard } from "@/components/UploadCard";
import { FutureFeatures } from "@/components/FutureFeatures";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TomaAI — AI Tomato Disease Detection" },
      { name: "description", content: "Upload a tomato leaf image and get instant AI disease diagnosis, confidence score, and treatment advice." },
      { property: "og:title", content: "TomaAI — AI Tomato Disease Detection" },
      { property: "og:description", content: "Upload a tomato leaf image and get instant AI disease diagnosis." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <section id="analyze" className="py-20 md:py-28 border-t border-border/40">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Upload your leaf image
              </h2>
              <p className="text-muted-foreground">
                Drag and drop or click to upload. Our AI will analyze it in seconds.
              </p>
            </div>
            <UploadCard />
          </div>
        </section>
        <FutureFeatures />
      </main>
      <footer id="about" className="border-t border-border/40 py-10">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">TomaAI</span>
            <span>— AI-Powered Tomato Disease Detection</span>
          </div>
          <p>© {new Date().getFullYear()} TomaAI. Cultivated with care.</p>
        </div>
      </footer>
    </div>
  );
}
