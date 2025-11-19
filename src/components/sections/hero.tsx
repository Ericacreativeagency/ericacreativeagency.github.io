'use client';
import { useState, useEffect } from 'react';
import { generateHeroSectionText, HeroSectionTextOutput } from '@/ai/flows/animated-hero-section-text-generation';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Forward, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

const AnimatedHeroText = () => {
  const [heroText, setHeroText] = useState<HeroSectionTextOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroText() {
      try {
        const result = await generateHeroSectionText({
          agencyCapabilities: 'A digital solutions company specializing in innovative design and strategic marketing for tech startups and enterprise clients.',
          valueProposition: 'We transform complex business challenges into elegant and impactful digital realities that drive growth and user engagement.',
        });
        setHeroText(result);
      } catch (error) {
        console.error('Failed to generate hero text:', error);
        setHeroText({
          heroTitle: 'Igniting Brands, Crafting Experiences.',
          heroSubtitle: 'We transform ideas into impactful realities through innovative design and strategic marketing.',
        });
      } finally {
        setLoading(false);
      }
    }
    fetchHeroText();
  }, []);

  return (
    <div className="z-10 flex flex-col items-center text-center text-white">
      {loading ? (
        <>
          <Skeleton className="h-16 w-3/4 md:w-2/3 lg:w-1/2 mb-6" />
          <Skeleton className="h-8 w-2/3 md:w-1/2 lg:w-1/3" />
        </>
      ) : (
        <>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-balance animate-fade-in-up">
            {heroText?.heroTitle}
          </h1>
          <p className="max-w-xl md:max-w-2xl text-lg md:text-xl text-white/80 text-balance animate-fade-in-up [animation-delay:0.2s]">
            {heroText?.heroSubtitle}
          </p>
        </>
      )}
       <Button asChild size="lg" className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
        <a href="#contact">
          Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};


const VideoControls = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/30 backdrop-blur-sm rounded-full p-2 flex items-center gap-1 z-10">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                 <span className="sr-only">{isPaused ? 'Play' : 'Pause'}</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                <Forward className="h-5 w-5" />
                <span className="sr-only">Forward</span>
            </Button>
        </div>
    )
}

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
      )}
      <AnimatedHeroText />
      <VideoControls />
    </section>
  );
}
