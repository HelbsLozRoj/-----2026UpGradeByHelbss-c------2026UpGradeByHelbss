"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";
import { executeCliCommand_2026_ByHelbss } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * @fileOverview 2026~ ByHelbss(C) Proprietary CLI Component
 */

export function ProprietaryCli() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "2026~ ByHelbss(C) Kernel initialized.",
    "Type 'help' for available sovereign commands."
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCommand_2026_ByHelbss = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const currentInput = input;
    setInput("");
    setHistory(prev => [...prev, `> ${currentInput}`]);

    if (currentInput.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const { output } = await executeCliCommand_2026_ByHelbss(currentInput);
    setHistory(prev => [...prev, output]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Card className="bg-black/90 border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[300px]">
      <CardHeader className="bg-primary/10 border-b border-white/5 py-3 px-6">
        <CardTitle className="text-primary font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
          <TerminalIcon className="size-3" />
          Sovereign CLI // 2026~ ByHelbss(C)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-6 font-mono text-[10px] text-primary/70" ref={scrollRef}>
          <div className="space-y-1">
            {history.map((line, i) => (
              <p key={i} className={line.startsWith('>') ? 'text-white' : ''}>{line}</p>
            ))}
          </div>
        </ScrollArea>
        <form onSubmit={handleCommand_2026_ByHelbss} className="p-4 bg-black flex items-center gap-3 border-t border-white/5">
          <ChevronRight className="size-4 text-primary animate-pulse" />
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-primary font-mono text-xs flex-1 uppercase"
            placeholder="AWAITING COMMAND..."
            autoFocus
          />
        </form>
      </CardContent>
    </Card>
  );
}
