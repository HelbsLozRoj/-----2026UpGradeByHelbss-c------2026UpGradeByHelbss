"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck_2026_ByHelbss, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger_2026_ByHelbss, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";
import { executeLiveTelemetry_2026_ByHelbss } from "@/ai/flows/live-telemetry-flow";
import { runCinematicProof_2026_ByHelbss, type CinematicOutput } from "@/ai/flows/cinematic-proof-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign API Layer
 */

export async function generateCode_2026_ByHelbss(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("HELBSS_CONNECTION_NULL: KEY_MISSING");
    }
    
    const result = await generateFlagCheckCode({});
    if (result && result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    throw new Error("EMPTY_GENERATION_2026");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Logic Error: ${error.message}` };
  }
}

export async function performHealthCheck_2026_ByHelbss(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("HELBSS_CONNECTION_NULL");
    }

    const result = await runSystemHealthCheck_2026_ByHelbss({ systemId, workspaceSlug });
    if (result) {
      return { data: result };
    }
    throw new Error("AUDIT_UNRESPONSIVE_2026");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Audit Failure: ${error.message}` };
  }
}

export async function debugSystem_2026_ByHelbss(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    const result = await runSmartDebugger_2026_ByHelbss({ logContent });
    if (result) {
      return { data: result };
    }
    throw new Error("DEBUGGER_UNRESPONSIVE_2026");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Debug Interrupt: ${error.message}` };
  }
}

export async function getLiveTelemetry_2026_ByHelbss(systemId: string): Promise<{ data?: string; error?: string }> {
  try {
    const result = await executeLiveTelemetry_2026_ByHelbss({ systemId });
    return { data: result };
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Telemetry Socket Error: ${error.message}` };
  }
}

export async function generateCinematicProof_2026_ByHelbss(auditData: string): Promise<{ data?: CinematicOutput; error?: string }> {
  try {
    const result = await runCinematicProof_2026_ByHelbss({ auditData });
    if (result) {
      return { data: result };
    }
    throw new Error("CINEMATIC_ENGINE_UNRESPONSIVE_2026");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Oscar Failure: ${error.message}` };
  }
}

export async function executeCliCommand_2026_ByHelbss(command: string): Promise<{ output: string }> {
  const timestamp = new Date().toLocaleTimeString();
  const responses: Record<string, string> = {
    "ping": `PONG: Sovereign Node [f9811ea] active.`,
    "status": `SECURE: Hybrid.OS 2026 | Private_Self_Managed`,
    "clear": `TERMINAL_FLUSHED`,
    "lockdown": `PROTOCOL_ENFORCED: No third-party tracks detected.`,
    "help": `COMMANDS: ping, status, clear, lockdown, help, sysinfo, surgery`
  };

  const output = responses[command.toLowerCase()] || `COMMAND_NOT_FOUND: ${command}.`;
  return { output: `[${timestamp}] 2026~ ByHelbss(C) > ${output}` };
}
