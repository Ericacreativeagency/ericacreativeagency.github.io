import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
            A Little About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-muted-foreground text-balance">
            I'm passionate about helping businesses thrive in the digital age. I combine creativity with strategic thinking to deliver exceptional results. My expertise covers advertising, branding, digital marketing, content creation, web design, and e-commerce. I believe in building strong partnerships with my clients, understanding their unique needs, and crafting tailored solutions that drive growth and success.
          </p>
        </div>
      </div>
    </section>
  );
}
