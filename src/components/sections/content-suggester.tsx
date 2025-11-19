'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { generateSuggestions } from '@/app/actions';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const services = [
  'Advertising',
  'Branding',
  'Digital Marketing',
  'Content Creation',
  'Web Design & Development',
  'Strategy & Consultations',
  'E-Commerce Platforms',
];

export function ContentSuggester() {
  const [selectedService, setSelectedService] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await generateSuggestions(selectedService);
    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setLoading(false);
  };

  return (
    <section id="ai-tools" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-lg bg-card/70 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">AI Content Idea Generator</CardTitle>
            <CardDescription className="text-lg">
              Stuck for ideas? Select a service to generate content suggestions instantly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" disabled={loading || !selectedService}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Suggest Content'
                )}
              </Button>
            </form>
            <div className="mt-8">
              {error && (
                 <Alert variant="destructive">
                   <AlertTitle>Error</AlertTitle>
                   <AlertDescription>{error}</AlertDescription>
                 </Alert>
              )}
              {suggestions.length > 0 && (
                <div className="space-y-4 animate-fade-in-up">
                    <h3 className="font-headline text-xl font-semibold text-center">Here are some ideas for "{selectedService}"</h3>
                    <ul className="list-none space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start p-4 bg-secondary/50 rounded-lg backdrop-blur-sm border border-white/10">
                        <Lightbulb className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
