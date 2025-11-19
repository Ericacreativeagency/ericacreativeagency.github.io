'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(1, { message: 'Please select a service of interest.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {

  const data = Object.fromEntries(formData.entries());
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        service: formData.get('service')?.toString() ?? '',
        message: formData.get('message')?.toString() ?? '',
      },
      issues
    };
  }
  
  try {
    // In a real app, you would send an email, save to a DB, etc.
    console.log('New contact form submission:', parsed.data);
    
    // Revalidate path to clear form fields on success
    revalidatePath('/');
    
    return { message: 'Thank you for your message! We will get back to you soon.' };

  } catch(e) {
    return { message: 'An error occurred. Please try again.' }
  }
}
