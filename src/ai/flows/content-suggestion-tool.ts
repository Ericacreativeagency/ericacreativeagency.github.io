'use server';

/**
 * @fileOverview A content suggestion tool that provides marketing content ideas based on selected services.
 *
 * - suggestContent - A function that suggests content ideas.
 * - ContentSuggestionInput - The input type for the suggestContent function.
 * - ContentSuggestionOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentSuggestionInputSchema = z.object({
  service: z
    .string()
    .describe('The service for which content suggestions are needed.'),
});
export type ContentSuggestionInput = z.infer<typeof ContentSuggestionInputSchema>;

const ContentSuggestionOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of content suggestions for the selected service.'),
});
export type ContentSuggestionOutput = z.infer<typeof ContentSuggestionOutputSchema>;

export async function suggestContent(input: ContentSuggestionInput): Promise<ContentSuggestionOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentSuggestionPrompt',
  input: {schema: ContentSuggestionInputSchema},
  output: {schema: ContentSuggestionOutputSchema},
  prompt: `You are a marketing expert. Generate 3 content suggestions (blog topics, social media posts) for the following service: {{{service}}}. Return the content suggestion in JSON format.`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: ContentSuggestionInputSchema,
    outputSchema: ContentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
