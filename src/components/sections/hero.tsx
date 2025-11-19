'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

// A subtle, pre-encoded chime sound that represents innovation.
const INNOVATION_SOUND_DATA_URI = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';


const HeroText = () => {
  return (
    <div className="z-10 flex flex-col items-center text-center text-white">
        <>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-balance animate-fade-in-up">
            Hi, I'm Erica.
            <br />
            Let's build something beautiful.
          </h1>
          <p className="max-w-xl md:max-w-2xl text-lg md:text-xl text-white/80 text-balance animate-fade-in-up [animation-delay:0.2s]">
            I transform ideas into impactful realities through innovative design and strategic marketing.
          </p>
        </>
       <Button asChild size="lg" className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
        <a href="#contact">
          Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

const AudioControls = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

     const togglePlay = () => {
      if (!audioRef.current) return;

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // This is a trick to get around browser autoplay restrictions
        // The user's first click "unlocks" the audio context
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    };
    
    useEffect(() => {
      if (audioRef.current) {
        const handleAudioEnd = () => setIsPlaying(false);
        audioRef.current.addEventListener('ended', handleAudioEnd);
        return () => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          audioRef.current?.removeEventListener('ended', handleAudioEnd);
        };
      }
    }, []);


    return (
        <>
            <audio ref={audioRef} src={INNOVATION_SOUND_DATA_URI} className="sr-only" muted={isMuted} />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/30 backdrop-blur-sm rounded-full p-2 flex items-center gap-1 z-10">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 rounded-full" 
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause sound' : 'Play innovation sound'}
                >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 rounded-full" 
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
            </div>
        </>
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
      <HeroText />
      <AudioControls />
    </section>
  );
}
