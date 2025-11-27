import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Target, ShoppingCart } from 'lucide-react';

const solutions = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Your Business Engine',
    description: 'We build more than websites; we build your central Business Engine. A high-performance platform engineered for lead capture, process automation, and scalable growth, with POPIA compliance baked-in.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Automated Lead Nurturing',
    description: 'Stop paying for clicks. Start investing in customers. Our automated lead nurturing programmes guide prospects from first contact to loyal client, turning your ad spend into predictable revenue.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'Frictionless Local Sales',
    description: 'Sell effortlessly across South Africa. We build e-commerce systems with integrated PayFast and Ozow gateways, offering your customers a seamless, secure checkout experience that builds trust.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            From Disjointed Tools to Integrated Outcomes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't sell services. We deliver systems that produce results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {solution.icon}
                </div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
