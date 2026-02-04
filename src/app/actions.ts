"use server";

import { generateFlagCheckCode } from "@/ai/flows/generate-flag-check-code";

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
