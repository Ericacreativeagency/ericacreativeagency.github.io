import { cn } from '@/lib/utils';

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn(className)}
    width="140"
    height="40"
    viewBox="0 0 140 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_303_193)">
      <path
        d="M28.6 11.2C28.6 10.5373 28.0627 10 27.4 10C26.7373 10 26.2 10.5373 26.2 11.2V14.8C26.2 15.4627 26.7373 16 27.4 16C28.0627 16 28.6 15.4627 28.6 14.8V11.2Z"
        fill="#B48E54"
      />
      <path
        d="M27.4 6C23.9667 6 21.25 8.71667 21.25 12.15V14.75C21.25 15.4404 21.8096 16 22.5 16C23.1904 16 23.75 15.4404 23.75 14.75V12.15C23.75 10.1583 25.4083 8.5 27.4 8.5C29.3917 8.5 31.05 10.1583 31.05 12.15V14.75C31.05 15.4404 31.6096 16 32.3 16C32.9904 16 33.55 15.4404 33.55 14.75V12.15C33.55 8.71667 30.8333 6 27.4 6Z"
        fill="#B48E54"
      />
      <text
        fill="#2978C8"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Space Grotesk"
        fontSize="12"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        <tspan x="0" y="29.5">
          ERICA CREATIVE AGENCY
        </tspan>
      </text>
    </g>
    <defs>
      <clipPath id="clip0_303_193">
        <rect width="140" height="32" fill="white" transform="translate(0 4)" />
      </clipPath>
    </defs>
  </svg>
);
