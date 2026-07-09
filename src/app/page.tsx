"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FlagToggle } from "@/components/flag-toggle";
import { StorageView } from "@/components/storage-view";
import { CodeGenerator } from "@/components/code-generator";
import { SystemHealth } from "@/components/system-health";
import { SmartDebugger } from "@/components/smart-debugger";
import { LiveMonitor } from "@/components/live-monitor";
import { Logo } from "@/components/icons";
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign Dashboard Terminal
 */

export type StorageItem = {
  key: string;
  value: string;
};

export default function Home_2026_ByHelbss() {
  const [items, setItems] = useState<StorageItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const refreshLocalStorage_2026_ByHelbss = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newItems: StorageItem[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          const value = localStorage.getItem(key) || "";
          newItems.push({ key, value });
        }
      }
      setItems(newItems);
    }
  }, []);

  useEffect(() => {
    if(isClient) {
      refreshLocalStorage_2026_ByHelbss();
      window.addEventListener('storage', refreshLocalStorage_2026_ByHelbss);
      return () => {
        window.removeEventListener('storage', refreshLocalStorage_2026_ByHelbss);
      };
    }
  }, [isClient, refreshLocalStorage_2026_ByHelbss]);
  
  const handleAddItem_2026_ByHelbss = (key: string, value: string) => {
    if (isClient) {
      localStorage.setItem(key, value);
      refreshLocalStorage_2026_ByHelbss();
    }
  };

  const handleDeleteItem_2026_ByHelbss = (key: string) => {
    if (isClient) {
      localStorage.removeItem(key);
      refreshLocalStorage_2026_ByHelbss();
    }
  };
  
  if (!isClient) {
    return null;
  }

  const systemInfo = {
    commitSha: "f9811ea",
    workspaceSlug: "studio-6397789453",
    experimentsEnabled: false,
    accessMode: "Private & Self-Managed",
    signature: "2026~ ByHelbss(C)",
    domain: "helbshelhumio.com"
  };

  return (
    <>
      <Sidebar className="border-r border-sidebar-border bg-black">
        <SidebarHeader className="pt-8 pb-6">
          <div className="flex flex-col gap-2 px-4">
            <div className="flex items-center gap-3">
              <Logo className="size-10 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight text-primary font-helbss uppercase">
                el Mayordomo
              </h1>
            </div>
            <span className="text-[9px] text-muted-foreground font-mono pl-13 uppercase tracking-[0.2em] opacity-60">
              Hybrid.OS 2026 ~By~and~for~Helbss(C)
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4 gap-8">
          <div className="flex flex-col gap-8">
            <SystemHealth systemId={systemInfo.commitSha} workspaceSlug={systemInfo.workspaceSlug} />
            <FlagToggle onFlagChange={refreshLocalStorage_2026_ByHelbss} />
            <CodeGenerator />
          </div>
          
          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="text-[8px] font-mono text-muted-foreground/40 space-y-1.5 uppercase tracking-tighter">
              <p>WS: {systemInfo.workspaceSlug}</p>
              <p>SHA: {systemInfo.commitSha}</p>
              <p>EXP: {systemInfo.experimentsEnabled ? "ENABLED" : "DISABLED"}</p>
              <p>MODE: {systemInfo.accessMode}</p>
              <p>DOMAIN: {systemInfo.domain}</p>
              <p className="text-primary/40">PROPRIETARY_SECURE_MODE: ON</p>
              <p className="text-primary/20">{systemInfo.signature}</p>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-[hsl(var(--canvas))]">
        <header className="flex items-center justify-between p-8 md:p-12 sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden text-white/80 hover:text-white"/>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight text-white font-helbss uppercase">2026 Terminal</h1>
              <p className="text-sm text-white/50 font-sans">
                Managed by Hybrid Core (C) 2026 YoSoyHelbss
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] bg-black/40 border border-white/10 text-white/50 px-4 py-2 rounded-full font-mono uppercase tracking-widest">
              SECURE_AUDIT_ACTIVE: {systemInfo.commitSha}
            </span>
          </div>
        </header>

        <main className="flex-1 px-8 pb-12 md:px-12 max-w-7xl">
          <div className="space-y-12">
            <LiveMonitor />
            <SmartDebugger />
            <StorageView items={items} onAddItem={handleAddItem_2026_ByHelbss} onDeleteItem={handleDeleteItem_2026_ByHelbss} />
          </div>
        </main>
        
        <footer className="p-12 text-center text-[9px] text-white/20 font-mono uppercase tracking-[0.3em] space-y-2">
          <p>Hybrid.OS 2026 // el Mayordomo // ~By~and~for~Helbss(C)2026</p>
          <p className="opacity-50 font-bold text-primary/30 italic">Unauthorized monitoring and manipulation restricted // 2026~ ByHelbss(C)</p>
          <p className="text-[7px] text-white/10">{systemInfo.domain}</p>
        </footer>
      </SidebarInset>
    </>
  );
}
