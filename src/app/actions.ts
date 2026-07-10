"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck_2026_ByHelbss, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger_2026_ByHelbss, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";
import { executeLiveTelemetry_2026_ByHelbss } from "@/ai/flows/live-telemetry-flow";
import { runCinematicProof_2026_ByHelbss, type CinematicOutput, type CinematicInput } from "@/ai/flows/cinematic-proof-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign API Layer - Launch Protocol
 */

export async function generateLaunchCinematic_2026_ByHelbss(input: CinematicInput): Promise<{ data?: CinematicOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("HELBSS_CONNECTION_NULL");
    }
    const result = await runCinematicProof_2026_ByHelbss(input);
    if (result) return { data: result };
    throw new Error("LAUNCH_ENGINE_UNRESPONSIVE");
  } catch (error: any) {
    return { error: `Launch Interrupt: ${error.message}` };
  }
}

export async function generateCode_2026_ByHelbss(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    const result = await generateFlagCheckCode({});
    return { codeSnippet: result.codeSnippet };
  } catch (error: any) {
    return { error: `Logic Error: ${error.message}` };
  }
}

export async function performHealthCheck_2026_ByHelbss(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    const result = await runSystemHealthCheck_2026_ByHelbss({ systemId, workspaceSlug });
    return { data: result };
  } catch (error: any) {
    return { error: `Audit Failure: ${error.message}` };
  }
}

export async function debugSystem_2026_ByHelbss(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    const result = await runSmartDebugger_2026_ByHelbss({ logContent });
    return { data: result };
  } catch (error: any) {
    return { error: `Debug Interrupt: ${error.message}` };
  }
}

export async function getLiveTelemetry_2026_ByHelbss(systemId: string): Promise<{ data?: string; error?: string }> {
  try {
    const result = await executeLiveTelemetry_2026_ByHelbss({ systemId });
    return { data: result };
  } catch (error: any) {
    return { error: `Telemetry Socket Error: ${error.message}` };
  }
}

export async function executeCliCommand_2026_ByHelbss(command: string): Promise<{ output: string }> {
  const timestamp = new Date().toLocaleTimeString();
  const responses: Record<string, string> = {
    "launch": `PREMIERE: 2026~ ByHelbss(C) Cinematic Forensic Proof Engine going live.`,
    "survive": `PROTOCOL_ENFORCED: Terroristic traces purged. Sovereignty restored.`,
    "ping": `PONG: Sovereign Node [f9811ea] active.`,
    "status": `SECURE: Hybrid.OS 2026 | Private_Self_Managed`,
    "help": `COMMANDS: launch, survive, ping, status, clear, lockdown`
  };
  const output = responses[command.toLowerCase()] || `COMMAND_NOT_FOUND: ${command}.`;
  return { output: `[${timestamp}] 2026~ ByHelbss(C) > ${output}` };
}
