'use server';

/**
 * @fileOverview Generates variations of the hero section's title and subtitle using GenAI for A/B testing.
 *
 * - generateHeroSectionText - A function that generates the hero section text.
 * - HeroSectionTextInput - The input type for the generateHeroSectionText function.
 * - HeroSectionTextOutput - The return type for the generateHeroSectionText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HeroSectionTextInputSchema = z.object({
  agencyCapabilities: z
    .string()
    .describe('A description of the agency and its capabilities.'),
  valueProposition: z
    .string()
    .describe('The agency value proposition to its clients.'),
});

export type HeroSectionTextInput = z.infer<typeof HeroSectionTextInputSchema>;

const HeroSectionTextOutputSchema = z.object({
  heroTitle: z.string().describe('The generated hero title.'),
  heroSubtitle: z.string().describe('The generated hero subtitle.'),
});

export type HeroSectionTextOutput = z.infer<typeof HeroSectionTextOutputSchema>;

export async function generateHeroSectionText(
  input: HeroSectionTextInput
): Promise<HeroSectionTextOutput> {
  return heroSectionTextFlow(input);
}

const heroSectionTextPrompt = ai.definePrompt({
  name: 'heroSectionTextPrompt',
  input: {schema: HeroSectionTextInputSchema},
  output: {schema: HeroSectionTextOutputSchema},
  prompt: `You are a marketing expert tasked with creating compelling hero section text for a digital solutions company. Generate a title and subtitle that captures the agency's capabilities and value proposition.

Agency Capabilities: {{{agencyCapabilities}}}
Value Proposition: {{{valueProposition}}}

Title:
Subtitle: `,
});

const heroSectionTextFlow = ai.defineFlow(
  {
    name: 'heroSectionTextFlow',
    inputSchema: HeroSectionTextInputSchema,
    outputSchema: HeroSectionTextOutputSchema,
  },
  async input => {
    const {output} = await heroSectionTextPrompt(input);
    return output!;
  }
);
