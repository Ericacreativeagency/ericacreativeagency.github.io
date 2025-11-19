import { cn } from '@/lib/utils';

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn(className)}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" className="fill-primary" />
    <path
      d="M11 11L16 16M16 16L21 21M16 16L21 11M16 16L11 21"
      className="stroke-primary-foreground"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
