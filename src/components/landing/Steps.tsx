import { Search, CreditCard, Ticket } from 'lucide-react';

const steps = [
  { label: 'Browse events', icon: Search },
  { label: 'Pay instantly', icon: CreditCard },
  { label: 'Get your ticket', icon: Ticket }
];

export default function Steps() {
  return (
    <section className="py-16 px-4 bg-yot-dark-grey/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold font-poppins text-center text-yot-red mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-16 w-16 mx-auto bg-yot-red/15 border-2 border-yot-red-glow rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-yot-red-glow" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-yot-red-glow to-transparent" />
                  )}
                </div>
                <p className="text-center font-inter text-yot-light-grey font-medium">
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
