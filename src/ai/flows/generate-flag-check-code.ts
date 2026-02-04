'use server';

/**
 * @fileOverview Generates a JavaScript code snippet to check the 'isDeveloper' flag in local storage.
 *
 * - generateFlagCheckCode - A function that generates the JavaScript snippet.
 * - GenerateFlagCheckCodeInput - The input type for the generateFlagCheckCode function (currently empty).
 * - GenerateFlagCheckCodeOutput - The return type for the generateFlagCheckCode function, containing the code snippet.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFlagCheckCodeInputSchema = z.object({});
export type GenerateFlagCheckCodeInput = z.infer<typeof GenerateFlagCheckCodeInputSchema>;

const GenerateFlagCheckCodeOutputSchema = z.object({
  codeSnippet: z.string().describe('A JavaScript code snippet that checks the status of the isDeveloper flag in local storage.'),
});
export type GenerateFlagCheckCodeOutput = z.infer<typeof GenerateFlagCheckCodeOutputSchema>;

export async function generateFlagCheckCode(input: GenerateFlagCheckCodeInput): Promise<GenerateFlagCheckCodeOutput> {
  return generateFlagCheckCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFlagCheckCodePrompt',
  input: {schema: GenerateFlagCheckCodeInputSchema},
  output: {schema: GenerateFlagCheckCodeOutputSchema},
  prompt: `You are a helpful AI assistant that generates JavaScript code snippets.

  A developer wants to check if the \"isDeveloper\" flag is set in local storage. Generate a JavaScript code snippet that checks for the \"isDeveloper\" flag in local storage and returns a boolean value indicating whether it is set to \"true\".
  The code snippet should be self-contained and ready to be integrated into an application.
  Do not include any explanation, comments or other extraneous text in the code snippet.
  The code snippet should use the following format:
  
  const isDeveloper = localStorage.getItem('isDeveloper') === 'true';
  
  return isDeveloper;
  `,
});

const generateFlagCheckCodeFlow = ai.defineFlow(
  {
    name: 'generateFlagCheckCodeFlow',
    inputSchema: GenerateFlagCheckCodeInputSchema,
    outputSchema: GenerateFlagCheckCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
