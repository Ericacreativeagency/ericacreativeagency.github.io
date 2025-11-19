import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-muted-foreground text-balance">
            At Erica, we're passionate about helping businesses thrive in the digital age. We combine creativity with strategic thinking to deliver exceptional results. Our team of experts specializes in advertising, branding, digital marketing, content creation, web design and development, strategy and consultations, and e-commerce platforms. We believe in building strong partnerships with our clients, understanding their unique needs, and crafting tailored solutions that drive growth and success.
          </p>
        </div>
      </div>
    </section>
  );
}
