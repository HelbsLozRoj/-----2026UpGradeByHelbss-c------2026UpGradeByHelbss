"use client";

import { useState } from "react";
import { ShieldCheck, Activity, AlertCircle, RefreshCw } from "lucide-react";
import { performHealthCheck } from "@/app/actions";
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
import type { SystemHealthOutput } from "@/ai/flows/system-health-check";

type SystemHealthProps = {
  systemId: string;
  workspaceSlug: string;
};

export function SystemHealth({ systemId, workspaceSlug }: SystemHealthProps) {
  const [healthData, setHealthData] = useState<SystemHealthOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAudit = async () => {
    setIsLoading(true);
    const result = await performHealthCheck(systemId, workspaceSlug);
    if (result.data) {
      setHealthData(result.data);
      toast({
        title: "Audit Complete",
        description: "Hybrid.OS 2026 integrity verified.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Audit Failed",
        description: result.error || "System unreachable.",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-black/40 border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-white font-helbss text-xl">
          <ShieldCheck className="size-5 text-primary" />
          <span>System Integrity</span>
        </CardTitle>
        <CardDescription className="text-white/40 text-xs">
          Verify Hybrid.OS 2026 self-managed status.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleAudit} 
          disabled={isLoading}
          className="w-full bg-primary text-black hover:bg-primary/90 rounded-xl font-bold"
        >
          {isLoading ? (
            <RefreshCw className="mr-2 size-4 animate-spin" />
          ) : (
            <Activity className="mr-2 size-4" />
          )}
          {isLoading ? "Auditing..." : "Run System Test"}
        </Button>

        {isLoading && (
          <div className="space-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-2/3 bg-white/5" />
          </div>
        )}

        {healthData && (
          <div className="p-4 rounded-xl bg-black border border-white/5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/40 uppercase font-mono">Status</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                healthData.status === 'OPTIMAL' || healthData.status === 'SECURE' 
                ? 'bg-primary/20 text-primary' 
                : 'bg-destructive/20 text-destructive'
              }`}>
                {healthData.status}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] text-white/80 leading-relaxed font-sans">
                {healthData.summary}
              </p>
              <div className="pt-2 border-t border-white/5 flex flex-col gap-1">
                <span className="text-[9px] text-white/30 font-mono uppercase">HASH: {healthData.integrityHash}</span>
                <span className="text-[9px] text-white/30 font-mono uppercase">CHECK: {healthData.lastCheck}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
