'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-lg bg-card/70 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Let's Create Together</CardTitle>
            <CardDescription className="text-lg">Have a project in mind? I'd love to hear about it.</CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/contact.erica@proton.me" 
              method="POST" 
              className="space-y-6"
            >
               {/* formsubmit.co spam prevention */}
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_captcha" value="false" />
               <input type="hidden" name="_next" value="https://ericacreativeagency.co.za/thank-you" />


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Service of Interest</label>
                 <Select name="service">
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="text-center">
                <Button type="submit" size="lg">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
