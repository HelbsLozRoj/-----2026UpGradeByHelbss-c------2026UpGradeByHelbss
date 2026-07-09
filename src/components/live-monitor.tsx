"use client";

import { useState, useEffect, useRef } from "react";
import { Wifi, Activity, Lock, Server, Cpu } from "lucide-react";
import { getLiveTelemetry_2026_ByHelbss } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

/**
 * @fileOverview 2026~ ByHelbss(C) Live Telemetry Component
 */

export function LiveMonitor() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const systemId = "f9811ea";

  const addLog_2026_ByHelbss = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] 2026~ ByHelbss(C): ${msg}`].slice(-50));
  };

  const connectToServer_2026_ByHelbss = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    addLog_2026_ByHelbss("INITIATING PROPRIETARY HANDSHAKE...");
    
    const response = await getLiveTelemetry_2026_ByHelbss(systemId);
    
    if (response.data) {
      setIsConnected(true);
      const newLogs = response.data.split('\n').filter(l => l.trim());
      newLogs.forEach((line, i) => {
        setTimeout(() => {
          addLog_2026_ByHelbss(line);
          if (i === newLogs.length - 1) setIsSyncing(false);
        }, i * 400);
      });
    } else {
      addLog_2026_ByHelbss(`CONNECTION_ERROR: ${response.error || "SERVER_TIMEOUT"}`);
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <Card className="bg-black/60 border-white/5 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[500px]">
      <CardHeader className="bg-primary/5 border-b border-white/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`size-3 rounded-full ${isConnected ? 'bg-primary animate-pulse' : 'bg-white/20'}`} />
            <CardTitle className="text-white font-helbss text-2xl uppercase tracking-tighter">
              Alive System Stream
            </CardTitle>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-primary/20 text-primary text-[10px] font-mono">
              <Lock className="size-3 mr-1" /> PRIVATE_LINK
            </Badge>
            <Badge variant="outline" className="border-white/10 text-white/40 text-[10px] font-mono uppercase">
              2026~ ByHelbss(C)
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <div className="bg-black/40 px-6 py-2 flex items-center gap-6 border-b border-white/5">
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
            <Cpu className="size-3" /> CPU: 12%
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
            <Activity className="size-3" /> LATENCY: 24ms
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
            <Server className="size-3" /> UPTIME: 99.99%
          </div>
        </div>
        
        <ScrollArea className="flex-1 p-6 font-mono text-[11px] leading-relaxed text-primary/80" ref={scrollRef}>
          {logs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-white/10 italic space-y-4">
              <Wifi className="size-12 opacity-20" />
              <p>WAITING FOR SOVEREIGN CONNECTION...</p>
              <button 
                onClick={connectToServer_2026_ByHelbss}
                disabled={isSyncing}
                className="not-italic bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-xl transition-all"
              >
                {isSyncing ? "SYNCHRONIZING..." : "ESTABLISH LINK"}
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-3">
                  <span className="opacity-30 shrink-0">{(i + 1).toString().padStart(3, '0')}</span>
                  <span className={log.includes('ERROR') ? 'text-destructive' : ''}>{log}</span>
                </div>
              ))}
              {isSyncing && (
                <div className="flex gap-3 animate-pulse">
                  <span className="opacity-30 shrink-0">...</span>
                  <span className="text-primary italic">2026~ ByHelbss(C) STREAMING...</span>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        <div className="p-4 bg-black/40 border-t border-white/5 text-center">
            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">
                Verified Connection: 2026~ ByHelbss(C) Layer 7 // Hybrid Core 2026
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
