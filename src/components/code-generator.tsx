"use client";

import { useState } from "react";
import { Copy, Sparkles, Terminal } from "lucide-react";
import { generateCode } from "@/app/actions";
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

export function CodeGenerator() {
  const [code, setCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setCode(null);
    const result = await generateCode();
    if (result.codeSnippet) {
      setCode(result.codeSnippet);
    } else {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.error || "Could not generate code snippet.",
      });
    }
    setIsLoading(false);
  };

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The code snippet is ready to be pasted.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          <span>AI Code Generator</span>
        </CardTitle>
        <CardDescription>
          Generate a JavaScript snippet to check the 'isDeveloper' flag.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button onClick={handleGenerate} disabled={isLoading}>
          <Sparkles className="mr-2 h-4 w-4" />
          {isLoading ? "Generating..." : "Generate Snippet"}
        </Button>
        {isLoading && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        )}
        {code && (
          <div className="relative rounded-md bg-background/50 p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-7 w-7"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy code</span>
            </Button>
            <pre className="text-sm text-primary overflow-x-auto">
              <code className="font-code flex items-start">
                <Terminal className="mr-3 mt-0.5 h-4 w-4 shrink-0" />
                {code}
              </code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
