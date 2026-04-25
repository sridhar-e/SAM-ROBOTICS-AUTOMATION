'use server';
/**
 * @fileOverview This file implements a Genkit flow to suggest relevant Sam Robotics products
 * based on a customer's inquiry message.
 *
 * - suggestProducts - A function that handles the product suggestion process.
 * - AIProductSuggestorInput - The input type for the suggestProducts function.
 * - AIProductSuggestorOutput - The return type for the suggestProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define an enum for the allowed product names to guide the AI and ensure valid output.
const ProductNames = z.enum([
  'Liquid Filling Machines',
  'Capping Machines',
  'Labeling Machines',
  'Conveyor Systems',
  'Cartoning Machines',
  'Palletizing Systems',
  'Complete Turnkey Solution',
]);

const AIProductSuggestorInputSchema = z.object({
  inquiryMessage: z.string().describe('The customer\u0027s inquiry message about their machinery needs.'),
});
export type AIProductSuggestorInput = z.infer<typeof AIProductSuggestorInputSchema>;

const AIProductSuggestorOutputSchema = z.object({
  suggestedProducts: z
    .array(ProductNames)
    .describe('An array of up to 3 suggested products from Sam Robotics, based on the inquiry message.'),
});
export type AIProductSuggestorOutput = z.infer<typeof AIProductSuggestorOutputSchema>;

export async function suggestProducts(input: AIProductSuggestorInput): Promise<AIProductSuggestorOutput> {
  return aiProductSuggestorFlow(input);
}

const productSuggestorPrompt = ai.definePrompt({
  name: 'productSuggestorPrompt',
  input: {schema: AIProductSuggestorInputSchema},
  output: {schema: AIProductSuggestorOutputSchema},
  prompt: `You are an AI assistant for Sam Robotics, a machinery manufacturing company.
Your task is to suggest up to 3 relevant products from the following list based on a customer's inquiry message.
The available products are:
- Liquid Filling Machines
- Capping Machines
- Labeling Machines
- Conveyor Systems
- Cartoning Machines
- Palletizing Systems
- Complete Turnkey Solution

The customer's inquiry message is: "{{{inquiryMessage}}}"

Based on the inquiry, identify which of these products are most relevant and provide them in a JSON array format as specified by the output schema.
If no products are clearly relevant, you can return an empty array.`,
});

const aiProductSuggestorFlow = ai.defineFlow(
  {
    name: 'aiProductSuggestorFlow',
    inputSchema: AIProductSuggestorInputSchema,
    outputSchema: AIProductSuggestorOutputSchema,
  },
  async input => {
    const {output} = await productSuggestorPrompt(input);
    return output!;
  }
);
