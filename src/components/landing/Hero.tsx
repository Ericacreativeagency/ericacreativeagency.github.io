import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
       {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
      <div className="absolute inset-0 bg-background/50"></div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Stop Leaking Revenue. Start Automating Growth.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Tired of disjointed digital tools and manual processes slowing your growth? We build self-scaling systems that connect your marketing, sales, and reporting into one automated engine.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#scorecard">Grade Your Automation Score</Link>
        </Button>
      </div>
    </section>
  );
}
