import React from 'react';
import { LogoIcon } from '../icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-2">
          <LogoIcon className="h-8" />
        </div>
        <p className="text-sm">
          &copy; {currentYear} Erica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
