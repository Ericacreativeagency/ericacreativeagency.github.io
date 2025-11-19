'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const services = [
  'Advertising',
  'Branding',
  'Digital Marketing',
  'Content Creation',
  'Web Design & Development',
  'Strategy & Consultations',
  'E-Commerce Platforms',
  'Other',
];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<ContactFormState, FormData>(submitContactForm, {
    message: '',
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: 'Oops! Something went wrong.',
          description: state.message,
          variant: 'destructive',
        });
        // You could also set form errors here based on state.issues
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-lg bg-card/70 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Let's Build Something Great</CardTitle>
            <CardDescription className="text-lg">Have a project in mind? We'd love to hear about it.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {state.issues && (
                    <div className="text-destructive text-sm">
                      <ul>
                        {state.issues.map((issue) => (
                          <li key={issue}>- {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                <div className="text-center">
                  <Button type="submit" size="lg">Send Message</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
