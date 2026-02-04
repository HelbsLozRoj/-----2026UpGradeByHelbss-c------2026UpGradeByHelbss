"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FlagToggle } from "@/components/flag-toggle";
import { StorageView } from "@/components/storage-view";
import { CodeGenerator } from "@/components/code-generator";
import { Logo } from "@/components/icons";

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
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center gap-4 mb-2">
           <Logo className="size-10 text-primary" />
           <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-primary">
            LocalFlag
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A toolkit for managing developer flags and viewing your browser's local storage.
        </p>
      </header>
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <FlagToggle onFlagChange={refreshLocalStorage} />
          </div>
          <div className="lg:col-span-2">
            <CodeGenerator />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
             <StorageView items={items} onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} />
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>Built with Next.js, Genkit, and shadcn/ui.</p>
      </footer>
    </div>
  );
}
