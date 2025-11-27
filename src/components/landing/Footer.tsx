import { ShieldCheck, Handshake, CreditCard, Zap } from 'lucide-react';

const trustSignals = [
  { icon: <ShieldCheck className="h-5 w-5" />, text: 'POPIA Compliant' },
  { icon: <Handshake className="h-5 w-5" />, text: 'Google Partner' },
  { icon: <CreditCard className="h-5 w-5" />, text: 'PayFast Integrated' },
  { icon: <Zap className="h-5 w-5" />, text: 'Ozow Ready' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
              {signal.icon}
              <span>{signal.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Erica. All rights reserved.</p>
          <p>Integrated Automation for South African Businesses.</p>
        </div>
      </div>
    </footer>
  );
}
