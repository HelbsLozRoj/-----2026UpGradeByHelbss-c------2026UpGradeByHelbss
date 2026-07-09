"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Flag } from "lucide-react";

type FlagToggleProps = {
  onFlagChange: () => void;
};

export function FlagToggle({ onFlagChange }: FlagToggleProps) {
  const [isDev, setIsDev] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedValue = localStorage.getItem("isDeveloper") === "true";
    setIsDev(storedValue);
  }, []);

  const handleToggle_2026_ByHelbss = (checked: boolean) => {
    setIsDev(checked);
    localStorage.setItem("isDeveloper", String(checked));
    onFlagChange();
  };

  if (!isClient) return null;

  return (
    <Card className="bg-black/40 border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-white font-helbss text-xl">
            <Flag className="size-5 text-primary" />
            <span>Developer Flag</span>
        </CardTitle>
        <CardDescription className="text-white/40 text-[10px] uppercase tracking-wider">
          2026~ ByHelbss(C) Control
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/5">
          <Label htmlFor="developer-mode" className="flex flex-col gap-1">
            <span className="text-white font-medium text-sm">isDeveloper Mode</span>
            <span className="text-[10px] text-white/40 uppercase tracking-wider">
              Currently: {isDev ? "Enabled" : "Disabled"}
            </span>
          </Label>
          <Switch 
            id="developer-mode" 
            checked={isDev} 
            onCheckedChange={handleToggle_2026_ByHelbss}
            className="data-[state=checked]:bg-primary"
          />
        </div>
      </CardContent>
    </Card>
  );
}
