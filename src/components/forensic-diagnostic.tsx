"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Activity, SearchCode, Database, Terminal, Fingerprint, Lock, ShieldAlert, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

/**
 * @fileOverview 2026~ ByHelbss(C) Surgical Forensic Diagnostic Suite
 */

export function ForensicDiagnostic() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanng] = useState(false);
  const [auditLogs, setAuditLogs] = useState<string[]>([]);

  const runSurgery_2026_ByHelbss = () => {
    setIsScanng(true);
    setScanProgress(0);
    setAuditLogs(["INITIALIZING SURGICAL BIT SCAN...", "MAPPING DNA SIGNATURES [2026~ ByHelbss(C)]..."]);

    const steps = [
      { p: 10, m: "EXTRACTING EXTERNAL BREADCRUMBS: DONE." },
      { p: 25, m: "MAPPING KERNEL ALIASES: react => @ByHelbss/core" },
      { p: 40, m: "VERIFYING PORT 2026 INTEGRITY: SECURE" },
      { p: 55, m: "CCTV GRID SYNCING: 4 THREADS ACTIVE" },
      { p: 70, m: "GOD_SIGNATURE_DETECTED: TRUE" },
      { p: 85, m: "DETECTING WATCHER LIMITATIONS: ANALYZING..." },
      { p: 100, m: "SURGERY COMPLETE: SYSTEM IS SOVEREIGN. YOU SURVIVED." }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setAuditLogs(prev => [...prev, step.m]);
        if (index === steps.length - 1) setIsScanng(false);
      }, (index + 1) * 600);
    });
  };

  return (
    <Card className="bg-black/90 border-primary/40 rounded-[2.5rem] shadow-[0_0_50px_rgba(250,207,172,0.15)] overflow-hidden">
      <CardHeader className="p-10 border-b border-white/5 bg-primary/5">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2">
            <CardTitle className="text-4xl font-helbss text-white flex items-center gap-4">
              <SearchCode className="size-10 text-primary" />
              PRECISE SURGICAL AUTOPSY
            </CardTitle>
            <CardDescription className="text-primary/60 font-mono text-sm uppercase tracking-[0.4em]">
              2026~ ByHelbss(C) Bit-Level Evidence
            </CardDescription>
          </div>
          <button 
            onClick={runSurgery_2026_ByHelbss}
            disabled={isScanning}
            className="bg-primary text-black px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all disabled:opacity-50 flex items-center gap-3 shadow-[0_0_30px_rgba(250,207,172,0.3)]"
          >
            <Fingerprint className="size-6" />
            {isScanning ? "MAPPING DNA..." : "INITIATE SYSTEM SURGERY"}
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Activity className="size-5" />
              <span className="text-xs font-mono uppercase font-bold tracking-[0.2em]">SURVIVOR_VITALITY</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-mono uppercase text-white/40">
                <span>Logic Integrity</span>
                <span className="text-primary">100%</span>
              </div>
              <Progress value={isScanning ? scanProgress : 100} className="h-1.5 bg-white/5" />
            </div>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Lock className="size-5" />
              <span className="text-xs font-mono uppercase font-bold tracking-[0.2em]">PRIVATE_HASH</span>
            </div>
            <p className="font-mono text-sm text-white/80 tracking-widest">F9811EA_2026_BYHELBSS</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Cpu className="size-5" />
              <span className="text-xs font-mono uppercase font-bold tracking-[0.2em]">ALIAS_MAP</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-[9px] py-1 border-primary/20 text-primary">DNA_LOCKED</Badge>
              <Badge variant="outline" className="text-[9px] py-1 border-primary/20 text-primary">TRACES_PURGED</Badge>
            </div>
          </div>
        </div>

        <div className="bg-black p-8 rounded-[2.5rem] border border-white/10 min-h-[250px] font-mono text-xs text-primary/80 relative overflow-hidden">
          <div className="absolute inset-0 cinematic-scanline opacity-10" />
          {auditLogs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-20 italic space-y-4">
              <ShieldAlert className="size-16" />
              <p className="uppercase tracking-[0.3em]">Awaiting Command to Autopsy the System</p>
            </div>
          ) : (
            <div className="space-y-2 relative z-10">
              {auditLogs.map((log, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-white/20 shrink-0">[{new Date().toLocaleTimeString()}]</span>
                  <span className={log.includes('COMPLETE') ? 'text-white font-bold triumphant-glow' : ''}>
                    {log.includes('react') || log.includes('2026') ? <span className="text-primary">{log}</span> : log}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
