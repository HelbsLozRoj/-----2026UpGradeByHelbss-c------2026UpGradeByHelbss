"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FlagToggle } from "@/components/flag-toggle";
import { StorageView } from "@/components/storage-view";
import { CodeGenerator } from "@/components/code-generator";
import { Logo } from "@/components/icons";
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export type StorageItem = {
  key: string;
  value: string;
};

export default function Home() {
  const [items, setItems] = useState<StorageItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const refreshLocalStorage = useCallback(() => {
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
      refreshLocalStorage();
      window.addEventListener('storage', refreshLocalStorage);
      return () => {
        window.removeEventListener('storage', refreshLocalStorage);
      };
    }
  }, [isClient, refreshLocalStorage]);
  
  const handleAddItem = (key: string, value: string) => {
    if (isClient) {
      localStorage.setItem(key, value);
      refreshLocalStorage();
    }
  };

  const handleDeleteItem = (key: string) => {
    if (isClient) {
      localStorage.removeItem(key);
      refreshLocalStorage();
    }
  };
  
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Sidebar className="border-r border-sidebar-border/50">
        <SidebarHeader>
          <div className="flex flex-col gap-1 px-3 pt-4">
            <div className="flex items-center gap-2">
              <Logo className="size-8 text-primary" />
              <h1 className="text-xl font-bold font-sans tracking-tight text-primary">
                Hybrid.OS 2026
              </h1>
            </div>
            <span className="text-[10px] text-muted-foreground font-mono pl-10 uppercase tracking-widest opacity-70">
              ~By~and~for~Helbss(C)2026
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <div className="flex flex-col gap-6">
            <FlagToggle onFlagChange={refreshLocalStorage} />
            <CodeGenerator />
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-[hsl(var(--canvas))] shadow-inner">
        <header className="flex items-center justify-between border-b border-white/10 p-4 md:p-6 sticky top-0 bg-[hsl(var(--canvas))/80] backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden text-white/80 hover:text-white"/>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">System Terminal</h1>
              <p className="text-sm text-white/60">
                Managed by Hybrid Core (C) 2026 HelbsLozRoj
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <StorageView items={items} onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} />
          </div>
        </main>
        
        <footer className="border-t border-white/10 p-6 text-center text-[10px] text-white/40 font-mono uppercase tracking-widest">
          <p>Hybrid.OS // Build: 2026.06.18 // ~By~and~for~Helbss(C)2026</p>
        </footer>
      </SidebarInset>
    </>
  );
}