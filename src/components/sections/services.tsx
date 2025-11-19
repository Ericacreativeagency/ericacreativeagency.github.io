import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, Palette, LineChart, FileText, Code, BrainCircuit, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: 'Advertising',
    description: 'Targeted campaigns that capture attention and drive conversions across all digital channels.',
  },
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: 'Branding',
    description: 'Crafting unique brand identities that resonate with your audience and stand out from the competition.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: 'Digital Marketing',
    description: 'Comprehensive strategies including SEO, SEM, and social media to boost your online presence.',
  },
  {
    icon: <FileText className="h-8 w-8 text-accent" />,
    title: 'Content Creation',
    description: 'Engaging written and visual content that tells your story and connects with your customers.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Web Design & Development',
    description: 'Building beautiful, responsive, and high-performance websites that provide a seamless user experience.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Strategy & Consultations',
    description: 'Expert guidance to navigate the digital landscape and achieve your business objectives.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'E-Commerce Platforms',
    description: 'Developing robust online stores that drive sales and provide a great shopping experience for your users.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete suite of digital solutions to elevate your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
