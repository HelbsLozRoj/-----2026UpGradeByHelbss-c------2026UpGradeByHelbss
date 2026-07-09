'use server';

/**
 * @fileOverview 2026~ ByHelbss(C) System Health Diagnostic Agent
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

const systemHealthFlow_2026_ByHelbss = ai.defineFlow(
  {
    name: 'systemHealthFlow_2026_ByHelbss',
    inputSchema: SystemHealthInputSchema,
    outputSchema: SystemHealthOutputSchema,
  },
  async (input) => {
    try {
      const response = await ai.generate({
        prompt: `Act as the 2026~ ByHelbss(C) Audit Engine.
        Perform a diagnostic audit for Hybrid.OS 2026. 
        System ID (SHA): ${input.systemId}
        Workspace: ${input.workspaceSlug}
        Confirm that the system is Private and Self-Managed by HelbsLozRoj.
        Provide a highly technical status report.`,
        output: { schema: SystemHealthOutputSchema },
      });
      
      if (!response.output) {
        throw new Error("AI_FLOW_NULL_OUTPUT_2026");
      }
      
      return response.output;
    } catch (e: any) {
      return {
        status: 'LOCKED',
        summary: `2026~ ByHelbss(C) System integrity audit interrupted: ${e.message}`,
        lastCheck: new Date().toISOString(),
        integrityHash: 'ERR_INTERRUPT_2026',
      };
    }
  }
);

export async function runSystemHealthCheck_2026_ByHelbss(input: SystemHealthInput): Promise<SystemHealthOutput> {
  return systemHealthFlow_2026_ByHelbss(input);
}
