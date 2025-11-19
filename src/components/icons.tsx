import { cn } from '@/lib/utils';
import { Lightbulb } from 'lucide-react';

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <g clipPath="url(#clip0_1_1)">
      {/* Abstract 'E' Mark */}
      <path d="M4 8H28V14H4V8Z" fill="hsl(var(--primary))" />
      <path d="M4 17H22V23H4V17Z" fill="hsl(var(--accent))" />
      <path d="M4 26H28V32H4V26Z" fill="hsl(var(--primary))" />

      {/* Easter Egg: Hidden Lightbulb */}
      <g fill="hsl(var(--background))">
        <path d="M15 20 A 1 1 0 0 1 16 21 A 1 1 0 0 1 15 22 A 1 1 0 0 1 14 21 A 1 1 0 0 1 15 20" />
      </g>

      {/* Company Name */}
      <text
        x="40"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
        letterSpacing="0.05em"
      >
        ERICA
      </text>
    </g>
    <defs>
      <clipPath id="clip0_1_1">
        <rect width="180" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
