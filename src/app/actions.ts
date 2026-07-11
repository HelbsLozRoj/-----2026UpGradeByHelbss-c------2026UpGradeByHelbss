"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck_2026_ByHelbss, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger_2026_ByHelbss, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";
import { executeLiveTelemetry_2026_ByHelbss } from "@/ai/flows/live-telemetry-flow";
import { runCinematicProof_2026_ByHelbss, type CinematicOutput, type CinematicInput } from "@/ai/flows/cinematic-proof-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign API Layer - survivor_v2
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

export async function performHealthCheck_2026_ByHelbss(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    // Ensuring surgical audit precision
    const result = await runSystemHealthCheck_2026_ByHelbss({ systemId, workspaceSlug });
    if (result) return { data: result };
    throw new Error("SURGICAL_AUDIT_NULL");
  } catch (error: any) {
    return { error: `Audit Failure: ${error.message}` };
  }
}

export async function debugSystem_2026_ByHelbss(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    const result = await runSmartDebugger_2026_ByHelbss({ logContent });
    if (result) return { data: result };
    throw new Error("DEBUG_ENGINE_NULL");
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
    "ping": `PONG: Sovereign Node [f9811ea] active on Port 2026.`,
    "status": `SECURE: Hybrid.OS 2026 | Private_Self_Managed | survivor: true`,
    "help": `COMMANDS: launch, survive, ping, status, clear, surgery, lockdown`,
    "surgery": `AUTOPSY: Scanning binary DNA... react mapped to @ByHelbss/core. Traces extracted.`
  };
  const output = responses[command.toLowerCase()] || `COMMAND_NOT_FOUND: ${command}. Type 'help' for sovereign protocol.`;
  return { output: `[${timestamp}] 2026~ ByHelbss(C) > ${output}` };
}
