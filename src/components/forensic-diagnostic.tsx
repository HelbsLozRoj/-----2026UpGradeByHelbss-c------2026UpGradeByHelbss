"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Activity, SearchCode, Database, Terminal, Fingerprint, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

/**
 * @fileOverview 2026~ ByHelbss(C) Forensic Diagnostic Sector
 * 
 * Surgical bit-level inspection of the Hybrid.OS 2026 integrity.
 */

export function ForensicDiagnostic() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanng] = useState(false);
  const [auditLogs, setAuditLogs] = useState<string[]>([]);

  const runSurgery_2026_ByHelbss = () => {
    setIsScanng(true);
    setScanProgress(0);
    setAuditLogs(["INITIALIZING SURGICAL BIT SCAN...", "MAPPING DNA SIGNATURES..."]);

    const steps = [
      { p: 20, m: "SCANNING HEAD: Metadata integrity verified [SHA: f9811ea]" },
      { p: 40, m: "SCANNING CORE: Logic Aliases (React/Next) confirmed private" },
      { p: 60, m: "SCANNING PORTS: Protocol 2026 active // No leakage" },
      { p: 80, m: "SCANNING PERIPHERALS: CCTV Grid syncing..." },
      { p: 100, m: "SURGERY COMPLETE: SYSTEM IS SOVEREIGN." }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setAuditLogs(prev => [...prev, step.m]);
        if (index === steps.length - 1) setIsScanng(false);
      }, (index + 1) * 800);
    });
  };

  return (
    <Card className="bg-black/90 border-primary/40 rounded-[2.5rem] shadow-[0_0_50px_rgba(250,207,172,0.1)] overflow-hidden">
      <CardHeader className="p-8 border-b border-white/5 bg-primary/5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-3xl font-helbss text-white flex items-center gap-3">
              <SearchCode className="size-8 text-primary" />
              SYSTEM SURGERY REPORT
            </CardTitle>
            <CardDescription className="text-primary/60 font-mono text-xs uppercase tracking-[0.2em]">
              2026~ ByHelbss(C) Surgical Forensic Engine
            </CardDescription>
          </div>
          <button 
            onClick={runSurgery_2026_ByHelbss}
            disabled={isScanning}
            className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary/80 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <Fingerprint className="size-4" />
            {isScanning ? "PERFORMING AUTOPSY..." : "INITIATE SURGERY"}
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Activity className="size-4" />
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest">Sector Vitality</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[9px] font-mono uppercase text-white/40">
                <span>Kernel Health</span>
                <span>OPTIMAL</span>
              </div>
              <Progress value={isScanning ? scanProgress : 100} className="h-1 bg-white/5" />
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Lock className="size-4" />
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest">Sovereignty Hash</span>
            </div>
            <p className="font-mono text-xs text-white/80">F9811EA_2026_PRIVATE</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Database className="size-4" />
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest">Alias Integrity</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-[8px] border-primary/20 text-primary">REACT_MAP_OK</Badge>
              <Badge variant="outline" className="text-[8px] border-primary/20 text-primary">NEXT_MAP_OK</Badge>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-[2rem] border border-white/10 min-h-[150px] font-mono text-[10px] text-primary/80 space-y-1">
          {auditLogs.length === 0 ? (
            <div className="h-full flex items-center justify-center opacity-20 italic">
              AWAITING SCAN COMMAND...
            </div>
          ) : (
            auditLogs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                <span className={log.includes('COMPLETE') ? 'text-white font-bold' : ''}>{log}</span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
