"use client";

import { useState } from "react";
import { Terminal, ShieldAlert, Cpu, CheckCircle2, ChevronRight } from "lucide-react";
import { debugSystem } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import type { DebuggerOutput } from "@/ai/flows/smart-debugger-flow";

export function SmartDebugger() {
  const [log, setLog] = useState("");
  const [result, setResult] = useState<DebuggerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDebug = async () => {
    if (!log.trim()) {
      toast({ variant: "destructive", title: "Input Required", description: "System log content is missing." });
      return;
    }
    setIsLoading(true);
    setResult(null);
    const response = await debugSystem(log);
    if (response.data) {
      setResult(response.data);
      toast({ title: "Diagnostic Ready", description: "Smart 2026 Engine analysis complete." });
    } else {
      toast({ variant: "destructive", title: "Diagnostic Failed", description: response.error || "Engine timeout." });
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-12">
      <Card className="bg-black/60 border-white/5 rounded-[2rem] shadow-2xl p-6">
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-3 text-white font-helbss text-3xl">
            <Cpu className="size-8 text-primary" />
            2026 Smart Debugger Engine
          </CardTitle>
          <CardDescription className="text-white/40">
            Proprietary log analysis for Hybrid.OS 2026 ~By~and~for~Helbss(C)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <Textarea
              placeholder="PASTE SYSTEM LOGS / ERROR TRACES HERE..."
              className="relative bg-black border-white/10 text-primary font-mono min-h-[200px] rounded-2xl focus:border-primary/50 resize-none p-6"
              value={log}
              onChange={(e) => setLog(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleDebug} 
            disabled={isLoading}
            className="bg-primary text-black hover:bg-primary/90 h-16 px-12 rounded-2xl font-bold text-lg w-full md:w-auto"
          >
            {isLoading ? "ANALYZING SYSTEM..." : "RUN SMART DIAGNOSTIC"}
            <ChevronRight className="ml-2 size-5" />
          </Button>
        </CardContent>
      </Card>

      {(isLoading || result) && (
        <Card className="bg-black/80 border-primary/20 rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="bg-primary/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">ENGINE_OUTPUT_STREAM</span>
            <div className="flex gap-2">
                <div className="size-2 rounded-full bg-primary/20 animate-pulse"></div>
                <div className="size-2 rounded-full bg-primary/40 animate-pulse delay-75"></div>
                <div className="size-2 rounded-full bg-primary/60 animate-pulse delay-150"></div>
            </div>
          </div>
          <CardContent className="p-8">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4 bg-white/5" />
                <Skeleton className="h-4 w-1/2 bg-white/5" />
                <Skeleton className="h-20 w-full bg-white/5" />
              </div>
            ) : result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">Diagnostic Status</h4>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-6 text-primary" />
                      <span className="text-2xl text-white font-helbss">{result.status}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">Technical Analysis</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{result.analysis}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] text-primary uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                        <ShieldAlert className="size-3" /> Security Impact
                    </h4>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        result.securityImpact === 'STABLE' ? 'border-primary/50 text-primary' : 'border-destructive/50 text-destructive'
                    }`}>
                        {result.securityImpact}
                    </span>
                    <p className="mt-6 text-[11px] text-white/40 font-mono">HASH: {result.integrityHash}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">Proprietary Fix</h4>
                    <div className="bg-black p-4 rounded-xl border border-white/5 font-mono text-xs text-primary/80">
                      {result.proprietaryFix}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
