"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";
import { runSystemHealthCheck, type SystemHealthOutput } from "@/ai/flows/system-health-check";

export async function generateCode(): Promise<{ codeSnippet?: string; error?: string }> {
  try {
    const result = await generateFlagCheckCode({});
    if (result.codeSnippet) {
      return { codeSnippet: result.codeSnippet };
    }
    return { error: "Failed to generate code snippet." };
  } catch (error) {
    console.error(error);
    return { error: "An unexpected error occurred." };
  }
}

export async function performHealthCheck(systemId: string, workspaceSlug: string): Promise<{ data?: SystemHealthOutput; error?: string }> {
  try {
    const result = await runSystemHealthCheck({ systemId, workspaceSlug });
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "System audit failed. Verify Helbss proprietary connections." };
  }
}
