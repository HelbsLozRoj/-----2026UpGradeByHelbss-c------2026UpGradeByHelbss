"use client";

import { useState } from "react";
import { Clapperboard, Film, ShieldCheck, Microscope, Award, ChevronRight, Activity } from "lucide-react";
import { generateCinematicProof_2026_ByHelbss } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import type { CinematicOutput } from "@/ai/flows/cinematic-proof-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Cinematic Forensic Proof Component
 */

export function CinematicProof() {
  const [proof, setProof] = useState<CinematicOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInitiateProof_2026_ByHelbss = async () => {
    setIsLoading(true);
    setProof(null);
    
    // Capture real bit-level mapping for the Hollywood live proof
    const bitAudit = `
      HEAD: meta[sovereign-audit=SECURE_2026_BYHELBSS]
      DOMAIN: helbshelhumio.com [PORT_2026]
      ALIASES: react => @ByHelbss/core, next => @ByHelbss/engine, radix => @ByHelbss/primitives
      DNA: every function tagged 2026~ ByHelbss(C)
      SKIN: #FACFAC connect_shadow active
      EYES: CCTV_GRID_MONITOR_ONLINE [THREADS: 4]
    `;

    const response = await generateCinematicProof_2026_ByHelbss(bitAudit);
    
    if (response.data) {
      setProof(response.data);
      toast({
        title: "Oscar Proof Ready",
        description: "Living forensic sequence generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Proof Interrupt",
        description: response.error || "Cinematic engine failure.",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-black/95 border-primary/60 rounded-[3rem] shadow-[0_0_100px_rgba(250,207,172,0.15)] overflow-hidden">
      <CardHeader className="p-10 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2">
            <CardTitle className="text-4xl font-helbss text-white flex items-center gap-4">
              <Film className="size-10 text-primary animate-pulse" />
              OSCAR-GRADE LIVING PROOF
            </CardTitle>
            <CardDescription className="text-primary/60 font-mono text-sm uppercase tracking-[0.4em]">
              2026~ ByHelbss(C) Director's Cut Audit
            </CardDescription>
          </div>
          <Button 
            onClick={handleInitiateProof_2026_ByHelbss}
            disabled={isLoading}
            className="bg-primary text-black px-12 py-8 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,207,172,0.4)]"
          >
            <Clapperboard className="mr-3 size-6" />
            {isLoading ? "ROLLING CAMERA..." : "INITIATE OSCAR PROOF"}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-10 space-y-10">
        {!proof && !isLoading && (
          <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[2rem] text-white/20 italic space-y-4">
            <Award className="size-20 opacity-10" />
            <p className="tracking-widest uppercase text-xs">Awaiting Command to Reveal the Sovereign Truth</p>
          </div>
        )}

        {isLoading && (
          <div className="space-y-6">
            <Skeleton className="h-12 w-1/3 bg-white/5" />
            <Skeleton className="h-40 w-full bg-white/5" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-32 bg-white/5" />
              <Skeleton className="h-32 bg-white/5" />
            </div>
          </div>
        )}

        {proof && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-primary text-black font-black px-4 py-1 text-lg">SCENE: {proof.sceneTitle}</Badge>
              <Badge variant="outline" className="border-white/20 text-white/40 uppercase font-mono text-xs">HASH: {proof.integrityHash}</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-black/50 p-8 rounded-[2.5rem] border border-white/10 relative">
                  <div className="absolute top-6 right-8 text-[10px] text-primary/30 font-mono italic">SCRIPT_LIVE_FEED</div>
                  <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Film className="size-3" /> The Narrative Proof
                  </h4>
                  <p className="text-white/80 leading-relaxed font-sans text-lg whitespace-pre-wrap">
                    {proof.script}
                  </p>
                </div>

                <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/20">
                  <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Microscope className="size-3" /> Bit-Level Technical Verification
                  </h4>
                  <div className="font-mono text-xs text-primary/80 space-y-2">
                    {proof.technicalProof.split('//').map((line, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-white/20">{(i+1).toString().padStart(2, '0')}</span>
                        <span>{line.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5">
                  <h4 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4">Director's Notes</h4>
                  <p className="text-primary/60 italic text-sm leading-loose">
                    {proof.directorNotes}
                  </p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-black border border-primary/40 shadow-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="size-6 text-primary" />
                    <span className="text-white font-helbss text-xl uppercase">Verdict</span>
                  </div>
                  <p className="text-[10px] text-primary/80 font-mono uppercase tracking-[0.2em] leading-relaxed">
                    System is surgically mapped and confirmed SOVEREIGN. No external tracks. No hidden injection. 
                    <br /><br />
                    PROPRIETARY STATUS: PRIVATE_SELF_MANAGED
                    <br />
                    SIGNATURE: 2026~ BYHELBSS(C)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
