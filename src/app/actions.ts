
"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck, type SystemHealthOutput } from "@/ai/flows/system-health-check";

export async function generateCode(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    const result = await generateFlagCheckCode({});
    if (result && result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    throw new Error("EMPTY_RESPONSE");
  } catch (error: any) {
    console.error("AI_GEN_ERROR:", error);
    return { error: "Failed to generate code snippet. Verify Hybrid connection." };
  }
}

export async function performHealthCheck(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    const result = await runSystemHealthCheck({ systemId, workspaceSlug });
    if (result && result.status) {
      return { data: result };
    }
    throw new Error("EMPTY_AUDIT");
  } catch (error: any) {
    console.error("AUDIT_ERROR:", error);
    return { error: "System audit failed. Verify Helbss proprietary connections." };
  }
}
