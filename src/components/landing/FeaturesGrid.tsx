import { Zap, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Buy tickets in seconds',
    icon: Zap,
    description: 'Lightning-fast checkout experience'
  },
  {
    title: 'Pay locally & internationally',
    icon: CreditCard,
    description: 'M-Pesa, Stripe, cards & more'
  },
  {
    title: 'Organizer dashboard & analytics',
    icon: BarChart3,
    description: 'Real-time insights and control'
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-yot-dark-grey/60 backdrop-blur p-6 rounded-lg text-center border border-yot-mid-grey hover:border-yot-red-glow/70 transition-colors"
            >
              <div className="inline-block p-3 bg-yot-red/15 rounded-lg mb-4">
                <Icon className="w-8 h-8 text-yot-red-glow" />
              </div>
              <h3 className="font-semibold font-poppins text-yot-light-grey mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white font-inter">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
