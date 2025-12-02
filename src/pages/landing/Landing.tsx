import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import BlobBackground from '../../components/ui/BlobBackground';
import Hero from '../../components/landing/Hero';
import FeaturesGrid from '../../components/landing/FeaturesGrid';
import Steps from '../../components/landing/Steps';
import Footer from '../../components/landing/Footer';
import ArtisticBackground from '../../components/ui/ArtisticBackground';
import StarParticleBackground from '../../components/ui/StarParticleBackground';
import ParallaxBackground from '../../components/ui/ParallaxBackground'

const logoSvg = new URL('../../assets/logo.svg', import.meta.url).href;


export default function Landing() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'X (Twitter)', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="min-h-screen relative bg-yot-black text-white overflow-hidden">
      <ArtisticBackground >
        <StarParticleBackground/>
        <ParallaxBackground>
          <header className="absolute top-6 left-4 right-4 sm:left-6 sm:right-6 flex justify-between items-start gap-4 z-20">
            <a href="/" className="inline-block" aria-label="Yot.Africa home">
              <img src={logoSvg} alt="Yot.Africa logo" className="h-40 md:h-48 -my-16 -ml-8 sm:-ml-10" />
            </a>
            <nav className="flex flex-col gap-2.5 items-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className=" text-yot-red hover:text-yot-muted-grey transition-colors"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                );
              })}
            </nav>
          </header>

          <main className="relative z-10">
            <Hero />
            <FeaturesGrid />
            <Steps />
          </main>

          <Footer />
        </ParallaxBackground>
      </ArtisticBackground>
    </div>
  );
}
