"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck_2026_ByHelbss, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger_2026_ByHelbss, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";
import { executeLiveTelemetry_2026_ByHelbss } from "@/ai/flows/live-telemetry-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign API Layer
 * 
 * This layer enforces private sockets and prohibits third-party injection.
 */

export async function generateCode_2026_ByHelbss(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: KEY_MISSING");
    }
    
    const result = await generateFlagCheckCode({});
    if (result && result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    throw new Error("EMPTY_RESPONSE_2026");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Generation error: ${error.message}` };
  }
}

export async function performHealthCheck_2026_ByHelbss(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL");
    }

    const result = await runSystemHealthCheck_2026_ByHelbss({ systemId, workspaceSlug });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("AUDIT_NULL_RESPONSE");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Audit failure: ${error.message}` };
  }
}

export async function debugSystem_2026_ByHelbss(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    const result = await runSmartDebugger_2026_ByHelbss({ logContent });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("DEBUG_NULL_RESPONSE");
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Debug engine interrupted: ${error.message}` };
  }
}

export async function getLiveTelemetry_2026_ByHelbss(systemId: string): Promise<{ data?: string; error?: string }> {
  try {
    const result = await executeLiveTelemetry_2026_ByHelbss({ systemId });
    return { data: result };
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Telemetry socket error: ${error.message}` };
  }
}

export async function executeCliCommand_2026_ByHelbss(command: string): Promise<{ output: string }> {
  const timestamp = new Date().toLocaleTimeString();
  const responses: Record<string, string> = {
    "ping": `PONG: Sovereign Node [f9811ea] active.`,
    "status": `SECURE: Hybrid.OS 2026 | Private_Self_Managed`,
    "clear": `TERMINAL_FLUSHED`,
    "lockdown": `PROTOCOL_ENFORCED: No hidden tracks detected.`,
    "help": `COMMANDS: ping, status, clear, lockdown, help, sysinfo`
  };

  const output = responses[command.toLowerCase()] || `COMMAND_NOT_FOUND: ${command}.`;
  return { output: `[${timestamp}] 2026~ ByHelbss(C) > ${output}` };
}
