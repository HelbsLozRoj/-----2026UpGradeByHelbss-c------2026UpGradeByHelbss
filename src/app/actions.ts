"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck_2026_ByHelbss, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger_2026_ByHelbss, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";
import { executeLiveTelemetry_2026_ByHelbss } from "@/ai/flows/live-telemetry-flow";

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign API Layer
 */

export async function generateCode_2026_ByHelbss(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }
    
    const result = await generateFlagCheckCode({});
    if (result && result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    throw new Error("EMPTY_RESPONSE_2026");
  } catch (error: any) {
    console.error("AI_GEN_ERROR_2026:", error);
    return { error: `2026~ ByHelbss(C) Audit error: ${error.message || "Failed to generate code."}` };
  }
}

export async function performHealthCheck_2026_ByHelbss(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }

    const result = await runSystemHealthCheck_2026_ByHelbss({ systemId, workspaceSlug });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("EMPTY_AUDIT_2026");
  } catch (error: any) {
    console.error("AUDIT_ERROR_2026:", error);
    return { error: `2026~ ByHelbss(C) System audit failed: ${error.message || "Verify Helbss proprietary connections."}` };
  }
}

export async function debugSystem_2026_ByHelbss(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }

    const result = await runSmartDebugger_2026_ByHelbss({ logContent });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("DEBUG_FAILED_2026");
  } catch (error: any) {
    console.error("DEBUG_ERROR_2026:", error);
    return { error: `2026~ ByHelbss(C) Debugger engine failure: ${error.message}` };
  }
}

export async function getLiveTelemetry_2026_ByHelbss(systemId: string): Promise<{ data?: string; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL");
    }
    const result = await executeLiveTelemetry_2026_ByHelbss({ systemId });
    return { data: result };
  } catch (error: any) {
    return { error: `2026~ ByHelbss(C) Telemetry error: ${error.message}` };
  }
}

export async function executeCliCommand_2026_ByHelbss(command: string): Promise<{ output: string }> {
  // Simulating a private socket CLI response
  const timestamp = new Date().toLocaleTimeString();
  const responses: Record<string, string> = {
    "ping": `PONG: 2026~ ByHelbss(C) node active. Latency: 4ms.`,
    "status": `SYSTEM_ONLINE: WS: studio-6397789453 | SHA: f9811ea | MODE: PRIVATE_SELF_MANAGED`,
    "clear": `TERMINAL_FLUSHED`,
    "help": `AVAILABLE COMMANDS: ping, status, clear, help, sysinfo, live-grid`
  };

  const output = responses[command.toLowerCase()] || `COMMAND_NOT_FOUND: ${command}. Type 'help' for options.`;
  return { output: `[${timestamp}] 2026~ ByHelbss(C) > ${output}` };
}
