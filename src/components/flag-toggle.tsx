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

  const handleToggle = (checked: boolean) => {
    setIsDev(checked);
    localStorage.setItem("isDeveloper", String(checked));
    onFlagChange();
  };

  if (!isClient) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Flag className="text-primary"/>
                    <span>Developer Flag</span>
                </CardTitle>
                <CardDescription>
                    Enable or disable special developer features.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 p-4 rounded-lg bg-muted animate-pulse">
                </div>
            </CardContent>
        </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Flag className="text-primary"/>
            <span>Developer Flag</span>
        </CardTitle>
        <CardDescription>
          Enable or disable special developer features across the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
          <Label htmlFor="developer-mode" className="flex flex-col space-y-1">
            <span className="font-medium">isDeveloper Mode</span>
            <span className="font-normal text-muted-foreground">
              Currently: {isDev ? "Enabled" : "Disabled"}
            </span>
          </Label>
          <Switch 
            id="developer-mode" 
            checked={isDev} 
            onCheckedChange={handleToggle}
            aria-label="Toggle Developer Mode"
          />
        </div>
      </CardContent>
    </Card>
  );
}
