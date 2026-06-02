import { useRef, useState, type DragEvent, type ChangeEvent } from "react";
import { Upload, Image as ImageIcon, X, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LoadingState } from "./LoadingState";
import { ResultCard, type PredictionResult } from "./ResultCard";

const ACCEPTED = ["image/jpeg", "image/jpg", "image/png"];
const MAX_SIZE = 10 * 1024 * 1024;

export function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  function handleFile(f: File | undefined | null) {
    if (!f) return;
    if (!ACCEPTED.includes(f.type)) {
      toast.error("Invalid file type", { description: "Please upload a JPG, JPEG, or PNG image." });
      return;
    }
    if (f.size > MAX_SIZE) {
      toast.error("File too large", { description: "Maximum size is 10MB." });
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  }

  function onDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    handleFile(e.target.files?.[0]);
  }

  function reset() {
    setFile(null);
    setPreview(null);
    setResult(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function analyze() {
    if (!file) return;
    setLoading(true);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = (await res.json()) as PredictionResult;
      setResult(data);
      toast.success("Analysis complete");
    } catch (err) {
      toast.error("Analysis failed", {
        description:
          err instanceof Error
            ? `${err.message}. Ensure the API at 127.0.0.1:8000 is running.`
            : "Could not reach the prediction service.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Card className="p-10 shadow-elegant">
        <LoadingState />
      </Card>
    );
  }

  if (result) {
    return (
      <div className="space-y-6">
        {preview && (
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-2 border-border shadow-elegant">
            <img src={preview} alt="Analyzed leaf" className="w-full object-cover aspect-square" />
          </div>
        )}
        <ResultCard result={result} onReset={reset} />
      </div>
    );
  }

  return (
    <Card className="overflow-hidden shadow-elegant border-2 border-dashed border-border/60 transition-colors hover:border-primary/40">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`p-8 md:p-12 transition-all ${dragging ? "bg-primary/5 scale-[0.99]" : ""}`}
      >
        <input
          ref={inputRef}
          id="leaf-file-input"
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={onChange}
          className="sr-only"
        />

        {preview ? (
          <div className="space-y-6">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-elegant group">
              <img src={preview} alt="Leaf preview" className="w-full object-cover aspect-square" />
              <button
                onClick={reset}
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur hover:bg-background transition-colors"
                aria-label="Remove image"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-medium truncate">{file?.name}</p>
              <p className="text-xs text-muted-foreground">
                {file && (file.size / 1024).toFixed(1)} KB · Ready to analyze
              </p>
            </div>
            <Button
              onClick={analyze}
              size="lg"
              className="w-full gradient-hero text-primary-foreground border-0 shadow-glow hover:shadow-elegant transition-all hover:scale-[1.02] gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Analyze Leaf
            </Button>
          </div>
        ) : (
          <label
            htmlFor="leaf-file-input"
            className="w-full flex flex-col items-center justify-center gap-4 py-8 text-center cursor-pointer"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero shadow-glow">
              <Upload className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="space-y-1.5">
              <p className="text-lg font-semibold">Drop your leaf image here</p>
              <p className="text-sm text-muted-foreground">
                or <span className="text-primary font-medium">click to browse</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ImageIcon className="h-3.5 w-3.5" />
              JPG, JPEG, PNG · Max 10MB
            </div>
          </label>
        )}
      </div>
    </Card>
  );
}