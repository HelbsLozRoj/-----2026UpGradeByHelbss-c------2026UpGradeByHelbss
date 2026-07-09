"use client";

import { useState } from "react";
import { Copy, Sparkles, Terminal } from "lucide-react";
import { generateCode_2026_ByHelbss } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

/**
 * @fileOverview 2026~ ByHelbss(C) Code Generator Component
 */

export function CodeGenerator() {
  const [code, setCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate_2026_ByHelbss = async () => {
    setIsLoading(true);
    setCode(null);
    const result = await generateCode_2026_ByHelbss();
    if (result.codeSnippet) {
      setCode(result.codeSnippet);
    } else {
      toast({
        variant: "destructive",
        title: "2026~ ByHelbss(C) Generation Failed",
        description: result.error || "An unexpected error occurred.",
      });
    }
    setIsLoading(false);
  };

  const handleCopy_2026_ByHelbss = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "2026~ ByHelbss(C) Copied",
        description: "The proprietary code is ready.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="bg-black/40 border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-white font-helbss text-xl">
          <Sparkles className="size-5 text-primary" />
          <span>AI Code Generator</span>
        </CardTitle>
        <CardDescription className="text-white/40 text-[10px] uppercase tracking-wider">
          2026~ ByHelbss(C) Snippets
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleGenerate_2026_ByHelbss} 
          disabled={isLoading}
          className="w-full bg-primary text-black hover:bg-primary/90 rounded-xl font-bold"
        >
          <Sparkles className="mr-2 size-4" />
          {isLoading ? "Generating..." : "Generate Snippet"}
        </Button>

        {isLoading && (
          <div className="space-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-2/3 bg-white/5" />
          </div>
        )}

        {code && (
          <div className="relative rounded-xl bg-black border border-white/5 p-5">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3 size-8 text-white/50 hover:text-white hover:bg-white/5"
              onClick={handleCopy_2026_ByHelbss}
            >
              <Copy className="size-4" />
            </Button>
            <pre className="text-xs text-primary/80 overflow-x-auto">
              <code className="font-mono flex items-start gap-3">
                <Terminal className="size-4 shrink-0 mt-0.5" />
                {code}
              </code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
