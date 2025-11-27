"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  crm: z.string().min(1, { message: 'Please select an option.' }),
  invoicing: z.string().min(1, { message: 'Please select an option.' }),
  leadHandling: z.string().min(1, { message: 'Please select an option.' }),
});

type ScorecardResult = {
  score: number;
  recommendation: string;
  title: string;
};

export default function Scorecard() {
  const [result, setResult] = useState<ScorecardResult | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      crm: '',
      invoicing: '',
      leadHandling: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let score = 0;
    // Scoring logic
    const scores = {
      crm: { 'crm': 30, 'spreadsheet': 20, 'email': 10, 'none': 0 },
      invoicing: { 'automated': 30, 'ecommerce': 20, 'manual': 10, 'none': 0 },
      leadHandling: { 'crm-auto': 40, 'spreadsheet': 20, 'manual-email': 10, 'nothing': 0 },
    };

    score += scores.crm[values.crm as keyof typeof scores.crm] || 0;
    score += scores.invoicing[values.invoicing as keyof typeof scores.invoicing] || 0;
    score += scores.leadHandling[values.leadHandling as keyof typeof scores.leadHandling] || 0;
    
    let recommendation = '';
    let title = '';
    if (score < 40) {
      title = "Starting Strong";
      recommendation = "You're at the beginning of your automation journey. There are significant opportunities to improve efficiency and capture lost revenue by implementing foundational systems.";
    } else if (score < 80) {
      title = "Gaining Momentum";
      recommendation = "You have some systems in place, but they may not be fully integrated. Connecting your tools is the next crucial step to unlock exponential growth and efficiency.";
    } else {
      title = "Automation Leader";
      recommendation = "You're well on your way! Fine-tuning your systems and exploring advanced automation can solidify your market position and create a formidable competitive advantage.";
    }

    setResult({ score, recommendation, title });
  }

  return (
    <section id="scorecard" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">The Erica Automation Scorecard</CardTitle>
            <CardDescription className="text-lg">
              Answer 3 questions to get your digital maturity score in 60 seconds.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="text-center p-6">
                <p className="text-muted-foreground mb-2">Your Automation Score is</p>
                <p className="text-6xl font-bold text-primary mb-4">{result.score}/100</p>
                <Progress value={result.score} className="w-full mb-6" />
                <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
                <p className="text-muted-foreground">{result.recommendation}</p>
                 <p className="mt-6 text-sm">
                    This is a high-level estimate. A full consultation will reveal the precise opportunities for your business.
                 </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="crm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>1. How do you currently manage customer relationships?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="crm">A dedicated CRM (e.g., HubSpot, Salesforce)</SelectItem>
                            <SelectItem value="spreadsheet">Spreadsheets</SelectItem>
                            <SelectItem value="email">My Email Inbox</SelectItem>
                            <SelectItem value="none">Pen & Paper / Ad-hoc</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="invoicing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>2. How do you handle invoicing and payments?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="automated">Automated System (e.g., Xero, Sage)</SelectItem>
                            <SelectItem value="ecommerce">Through an E-commerce Platform</SelectItem>
                            <SelectItem value="manual">Manual Invoicing (Word/Excel)</SelectItem>
                            <SelectItem value="none">We don't have a formal system</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leadHandling"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>3. When a new lead comes from your website, what happens?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="crm-auto">Automatically enters our CRM & triggers a sequence</SelectItem>
                            <SelectItem value="spreadsheet">Manually added to a spreadsheet</SelectItem>
                            <SelectItem value="manual-email">I get an email and follow up manually</SelectItem>
                            <SelectItem value="nothing">Nothing, I hope they call me</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <CardFooter className="flex justify-center p-0 pt-4">
                     <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">See My Score</Button>
                   </CardFooter>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
