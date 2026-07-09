"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck, type SystemHealthOutput } from "@/ai/flows/system-health-check";
import { runSmartDebugger, type DebuggerOutput } from "@/ai/flows/smart-debugger-flow";

export async function generateCode(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }
    
    const result = await generateFlagCheckCode({});
    if (result && result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    throw new Error("EMPTY_RESPONSE");
  } catch (error: any) {
    console.error("AI_GEN_ERROR:", error);
    return { error: `System audit error: ${error.message || "Failed to generate code."}` };
  }
}

export async function performHealthCheck(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }

    const result = await runSystemHealthCheck({ systemId, workspaceSlug });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("EMPTY_AUDIT");
  } catch (error: any) {
    console.error("AUDIT_ERROR:", error);
    return { error: `System audit failed: ${error.message || "Verify Helbss proprietary connections."}` };
  }
}

export async function debugSystem(logContent: string): Promise<{ data?: DebuggerOutput; error?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("PROPRIETARY_CONNECTION_NULL: GEMINI_API_KEY_MISSING");
    }

    const result = await runSmartDebugger({ logContent });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("DEBUG_FAILED");
  } catch (error: any) {
    console.error("DEBUG_ERROR:", error);
    return { error: `Debugger engine failure: ${error.message}` };
  }
}
