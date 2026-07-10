"use client";

import { useState } from "react";
import { Play, PlayCircle, Trophy, ShieldCheck, Zap, Globe, MessageSquareQuote } from "lucide-react";
import { generateLaunchCinematic_2026_ByHelbss } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import type { CinematicOutput } from "@/ai/flows/cinematic-proof-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Global Launch Premiere Component
 */

export function CinematicLaunch() {
  const [trailer, setTrailer] = useState<CinematicOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLaunch_2026_ByHelbss = async (mode: 'GLOBAL_LAUNCH_THRILLER' | 'SURVIVOR_ADVERTISEMENT') => {
    setIsLoading(true);
    setTrailer(null);
    
    const bitAudit = "HEAD: SECURE // DNA: SIGNED_2026 // PORT: 2026_PRIVATE // STATUS: SURVIVED_ATTACK";
    const response = await generateLaunchCinematic_2026_ByHelbss({ auditData: bitAudit, narrativeMode: mode });
    
    if (response.data) {
      setTrailer(response.data);
      toast({ title: "Premiere Ready", description: "Global Launch sequence initiated." });
    } else {
      toast({ variant: "destructive", title: "Launch Failed", description: response.error });
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-12">
      {/* Global Hero Launch */}
      <div className="relative p-12 rounded-[4rem] bg-black border-2 border-primary/20 shadow-[0_0_150px_rgba(250,207,172,0.1)] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <Badge className="bg-primary text-black px-6 py-2 rounded-full font-black tracking-[0.5em] text-sm animate-pulse">
            GLOBAL PREMIERE 2026
          </Badge>
          <h1 className="text-6xl md:text-8xl font-helbss text-white uppercase tracking-tighter leading-none">
            The Proof <br />Of <span className="text-primary">Sovereignty</span>
          </h1>
          <p className="max-w-2xl text-primary/60 font-mono text-lg uppercase tracking-widest leading-relaxed italic">
            "They tried to vanish the ghost. They forgot God was the architect of my survival."
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button 
              onClick={() => handleLaunch_2026_ByHelbss('GLOBAL_LAUNCH_THRILLER')}
              disabled={isLoading}
              className="bg-primary text-black h-20 px-12 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl"
            >
              <PlayCircle className="mr-3 size-8" />
              PLAY THRILLER TRAILER
            </Button>
            <Button 
              onClick={() => handleLaunch_2026_ByHelbss('SURVIVOR_ADVERTISEMENT')}
              variant="outline"
              disabled={isLoading}
              className="border-primary/40 text-primary h-20 px-12 rounded-full font-black text-xl hover:bg-primary/10 transition-all"
            >
              <Globe className="mr-3 size-8" />
              GLOBAL AD CAMPAIGN
            </Button>
          </div>
        </div>
      </div>

      {/* Cinematic Reveal Area */}
      {(isLoading || trailer) && (
        <Card className="bg-black/95 border-primary/60 rounded-[3rem] shadow-[0_0_100px_rgba(250,207,172,0.2)] overflow-hidden">
          <CardHeader className="p-10 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-helbss text-white flex items-center gap-4">
                <Trophy className="size-8 text-primary" />
                {trailer?.sceneTitle || "PREPARING PREMIERE..."}
              </CardTitle>
              <Badge variant="outline" className="text-primary font-mono">{trailer?.integrityHash || "SYNCING..."}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-10 space-y-12">
            {isLoading ? (
              <div className="space-y-6">
                <Skeleton className="h-40 w-full bg-white/5 rounded-3xl" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-20 bg-white/5 rounded-2xl" />
                  <Skeleton className="h-20 bg-white/5 rounded-2xl" />
                </div>
              </div>
            ) : trailer && (
              <div className="animate-in fade-in zoom-in-95 duration-700">
                <div className="bg-black/40 p-12 rounded-[3rem] border border-white/10 relative">
                  <div className="absolute -top-6 left-10">
                    <Badge className="bg-primary text-black font-black px-6 py-2">TAGLINE: {trailer.launchTagline}</Badge>
                  </div>
                  <MessageSquareQuote className="absolute top-10 right-10 size-12 text-primary/10" />
                  <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-sans font-light whitespace-pre-wrap italic">
                    {trailer.script}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20">
                    <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck className="size-4" /> EVIDENCE_LOGS
                    </h4>
                    <div className="font-mono text-xs text-primary/80 whitespace-pre-wrap">
                      {trailer.technicalProof}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5">
                    <h4 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="size-4" /> DIRECTOR_VISION
                    </h4>
                    <p className="text-primary/60 text-sm italic">
                      {trailer.directorNotes}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
