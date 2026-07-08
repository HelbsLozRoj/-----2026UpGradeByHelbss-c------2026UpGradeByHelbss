'use server';

/**
 * @fileOverview A system health diagnostic agent for Hybrid.OS 2026.
 *
 * - runSystemHealthCheck - A function that performs a system diagnostic.
 * - SystemHealthInput - The input type for the health check.
 * - SystemHealthOutput - The return type for the health check.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SystemHealthInputSchema = z.object({
  systemId: z.string().describe('The unique identifier of the system being audited.'),
  workspaceSlug: z.string().describe('The workspace slug of the system.'),
});
export type SystemHealthInput = z.infer<typeof SystemHealthInputSchema>;

const SystemHealthOutputSchema = z.object({
  status: z.enum(['OPTIMAL', 'SECURE', 'DEGRADED', 'LOCKED']).describe('The current operational status of the OS.'),
  summary: z.string().describe('A brief summary of the diagnostic findings.'),
  lastCheck: z.string().describe('Timestamp of the audit.'),
  integrityHash: z.string().describe('A mock integrity hash for the system files.'),
});
export type SystemHealthOutput = z.infer<typeof SystemHealthOutputSchema>;

export async function runSystemHealthCheck(input: SystemHealthInput): Promise<SystemHealthOutput> {
  return systemHealthFlow(input);
}

const systemHealthFlow = ai.defineFlow(
  {
    name: 'systemHealthFlow',
    inputSchema: SystemHealthInputSchema,
    outputSchema: SystemHealthOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      prompt: `Perform a diagnostic audit for Hybrid.OS 2026. 
      System ID (SHA): ${input.systemId}
      Workspace: ${input.workspaceSlug}
      Confirm that the system is Private and Self-Managed by HelbsLozRoj.
      Provide a highly technical status report.`,
      output: { schema: SystemHealthOutputSchema },
    });
    return response.output!;
  }
);
