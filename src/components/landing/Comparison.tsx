import { CheckCircle2, XCircle } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="why-us" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            The Erica Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We operate differently because your business deserves more than a brochure.
          </p>
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border">
          <div className="grid grid-cols-2">
            <div className="bg-muted/30 p-4 md:p-6">
              <h3 className="text-lg font-semibold md:text-xl">Typical SA Agencies</h3>
            </div>
            <div className="bg-primary/10 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-primary md:text-xl">Erica</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t">
            <div className="flex items-start space-x-3 p-4 md:p-6">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <p>Delivers static, brochure-style websites.</p>
            </div>
            <div className="flex items-start space-x-3 border-l p-4 md:p-6">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="font-medium">Builds automated, integrated business systems.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t">
            <div className="flex items-start space-x-3 p-4 md:p-6">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <p>Reports on vanity metrics like clicks and impressions.</p>
            </div>
            <div className="flex items-start space-x-3 border-l p-4 md:p-6">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="font-medium">Focuses on tangible ROI: Cost Per Acquisition, Lead-to-Sale Rate.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t">
            <div className="flex items-start space-x-3 p-4 md:p-6">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <p>Charges one-off project fees leading to disjointed tools.</p>
            </div>
            <div className="flex items-start space-x-3 border-l p-4 md:p-6">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="font-medium">Offers Growth Subscriptions and Performance Retainers for continuous optimisation.</p>
            </div>
          </div>
           <div className="grid grid-cols-2 border-t">
            <div className="flex items-start space-x-3 p-4 md:p-6">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <p>Treats data privacy (POPIA) as an afterthought.</p>
            </div>
            <div className="flex items-start space-x-3 border-l p-4 md:p-6">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="font-medium">Bakes POPIA compliance into every form and integration from day one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
