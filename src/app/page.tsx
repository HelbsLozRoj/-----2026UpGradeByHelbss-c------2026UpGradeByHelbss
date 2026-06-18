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
      <Sidebar>
        <SidebarHeader>
          <div className="flex flex-col gap-1 px-2 pt-2">
            <div className="flex items-center gap-2">
              <Logo className="size-6 text-primary" />
              <h1 className="text-lg font-bold font-sans tracking-tighter text-primary">
                ~By~and~for~Helbss»
              </h1>
            </div>
            <span className="text-[10px] text-muted-foreground font-mono pl-8">YoSoyHelbss</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <div className="flex flex-col gap-4">
            <FlagToggle onFlagChange={refreshLocalStorage} />
            <CodeGenerator />
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden"/>
            <div>
              <h1 className="text-2xl font-semibold">Local Storage Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                A toolkit for managing developer flags and your browser's local storage.
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <StorageView items={items} onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} />
        </main>
        
        <footer className="border-t p-4 text-center text-xs text-muted-foreground">
          <p>Built with Next.js, Genkit, and shadcn/ui. &copy; 2026 YoSoyHelbss</p>
        </footer>
      </SidebarInset>
    </>
  );
}
