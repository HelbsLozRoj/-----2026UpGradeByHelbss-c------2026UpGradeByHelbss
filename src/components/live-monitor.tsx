"use client";

import { useState, useEffect, useRef } from "react";
import { Wifi, Activity, Lock, Server, Cpu, Camera, Eye, Zap } from "lucide-react";
import { getLiveTelemetry_2026_ByHelbss } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

/**
 * @fileOverview 2026~ ByHelbss(C) Live CCTV Telemetry Component
 */

export function LiveMonitor() {
  const [logs, setLogs] = useState<string[]>([]);
  const [gridData, setGridData] = useState<string[][]>([[], [], [], []]);
  const [isConnected, setIsConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const systemId = "f9811ea";

  const addLog_2026_ByHelbss = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] 2026~ ByHelbss(C): ${msg}`].slice(-50));
  };

  const connectToCctv_2026_ByHelbss = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    addLog_2026_ByHelbss("ESTABLISHING SOVEREIGN CCTV GRID LINK...");
    
    const response = await getLiveTelemetry_2026_ByHelbss(systemId);
    
    if (response.data) {
      setIsConnected(true);
      const newLogs = response.data.split('\n').filter(l => l.trim());
      
      newLogs.forEach((line, i) => {
        setTimeout(() => {
          addLog_2026_ByHelbss(line);
          // Distribute to CCTV grid
          setGridData(prev => {
            const next = [...prev];
            const channel = i % 4;
            next[channel] = [...next[channel], `CAM_${channel+1}: ${line}`].slice(-10);
            return next;
          });
          if (i === newLogs.length - 1) setIsSyncing(false);
        }, i * 300);
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
    <div className="space-y-6">
      {/* Main CCTV Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((cam) => (
          <Card key={cam} className="bg-black/80 border-primary/20 rounded-2xl overflow-hidden h-48 group">
            <div className="bg-primary/10 px-3 py-1.5 flex justify-between items-center border-b border-white/5">
              <span className="text-[8px] font-mono text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                <Camera className="size-2" /> CAM_0{cam + 1}
              </span>
              <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <CardContent className="p-3 font-mono text-[9px] text-primary/50 overflow-hidden">
              {gridData[cam].length === 0 ? (
                <div className="h-full flex items-center justify-center opacity-10 italic">
                  NO_SIGNAL_2026
                </div>
              ) : (
                <div className="space-y-1">
                  {gridData[cam].map((line, idx) => (
                    <p key={idx} className="truncate">{line}</p>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Primary Terminal Stream */}
      <Card className="bg-black/60 border-white/5 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[400px]">
        <CardHeader className="bg-primary/5 border-b border-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`size-3 rounded-full ${isConnected ? 'bg-primary animate-pulse' : 'bg-white/20'}`} />
              <CardTitle className="text-white font-helbss text-2xl uppercase tracking-tighter flex items-center gap-3">
                <Zap className="size-5 text-primary" />
                Live Socket Debugger
              </CardTitle>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-primary/20 text-primary text-[10px] font-mono">
                <Lock className="size-3 mr-1" /> PRIVATE_SECURE_LINK
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
              <Cpu className="size-3" /> THREADS: 4
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
              <Activity className="size-3" /> SOCKET_FREQ: 2.4GHz
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
              <Server className="size-3" /> DOMAIN: helbshelhumio.com
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-6 font-mono text-[11px] leading-relaxed text-primary/80" ref={scrollRef}>
            {logs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-white/10 italic space-y-4">
                <Eye className="size-12 opacity-20" />
                <p>WAITING FOR SOVEREIGN CCTV HANDSHAKE...</p>
                <button 
                  onClick={connectToCctv_2026_ByHelbss}
                  disabled={isSyncing}
                  className="not-italic bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-10 py-3 rounded-2xl font-bold transition-all"
                >
                  {isSyncing ? "INITIALIZING SOCKETS..." : "INITIATE LIVE MONITOR"}
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
                    <span className="text-primary italic font-bold">2026~ ByHelbss(C) STREAMING_SOCKET_DATA...</span>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          <div className="p-4 bg-black/40 border-t border-white/5 text-center">
              <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">
                  Verified Domain: https://helbshelhumio.com // 2026~ ByHelbss(C)
              </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
