
"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck, type SystemHealthOutput } from "@/ai/flows/system-health-check";

export async function generateCode(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    // Verify AI connectivity before running
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
    return { error: `System audit error: ${error.message || "Failed to generate code snippet."}` };
  }
}

export async function performHealthCheck(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    // Verify AI connectivity before running
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
