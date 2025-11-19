'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Forward, ArrowRight, Disc3 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { textToSpeech } from '@/ai/flows/text-to-speech';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

const StaticHeroText = () => {
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

const introText = "Hi, I'm Erica. Let's build something beautiful. I transform ideas into impactful realities through innovative design and strategic marketing.";

const VideoControls = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayIntro = async () => {
        if (!audioRef.current) return;

        if (isAudioPlaying) {
            audioRef.current.pause();
            setIsAudioPlaying(false);
            return;
        }

        // If audio is already loaded, just play it.
        if (audioDataUri) {
            audioRef.current.play();
            setIsAudioPlaying(true);
            return;
        }

        // This is the key change: play a silent sound on the user's click
        // to satisfy browser autoplay policies.
        audioRef.current.play().then(async () => {
             // Now that playback is initiated, we can fetch the real audio.
            setIsAudioLoading(true);
            try {
                const result = await textToSpeech(introText);
                setAudioDataUri(result.media);
            } catch (error) {
                console.error("Error generating speech:", error);
                // If AI fails, pause the silent audio
                audioRef.current?.pause();
            } finally {
                setIsAudioLoading(false);
            }
        }).catch(error => {
            console.error("Audio playback failed:", error);
        });
    };
    
    useEffect(() => {
        // When the real audio data comes in, swap the source and keep playing.
        if (audioDataUri && audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            audioRef.current.src = audioDataUri;
            // The load might pause it, so we ensure it continues
            audioRef.current.play();
            setIsAudioPlaying(true);
        }
    }, [audioDataUri]);

    useEffect(() => {
      if (audioRef.current) {
        const handleAudioEnd = () => setIsAudioPlaying(false);
        audioRef.current.addEventListener('ended', handleAudioEnd);
        return () => {
          audioRef.current?.removeEventListener('ended', handleAudioEnd);
        };
      }
    }, []);


    return (
        <>
            {/* Start with a silent audio source to satisfy autoplay policies */}
            <audio ref={audioRef} src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" className="sr-only" muted={isMuted} />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/30 backdrop-blur-sm rounded-full p-2 flex items-center gap-1 z-10">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 rounded-full" 
                    onClick={handlePlayIntro}
                    disabled={isAudioLoading}
                >
                    {isAudioPlaying ? (
                       <Pause className="h-5 w-5" />
                    ) : (
                       <Disc3 className={cn("h-5 w-5", isAudioLoading && "animate-spin")} />
                    )}
                    <span className="sr-only">Play Intro</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                </Button>
                 {/* This button doesn't control our audio, so I am removing its functionality for now */}
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                    <Play className="h-5 w-5" />
                     <span className="sr-only">Play</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                    <Forward className="h-5 w-5" />
                    <span className="sr-only">Forward</span>
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
      <StaticHeroText />
      <VideoControls />
    </section>
  );
}
