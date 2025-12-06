import EmailForm from './EmailForm';

const logoSvg = new URL('../../assets/logo.svg', import.meta.url).href;

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 text-center">
      <h1 className="tracking-wide text-5xl md:text-7xl font-bold font-poppins mb-4 drop-shadow-lg" style={{ textShadow: '0 0 8px rgba(255, 58, 58, 0.35)' }}>
        <img src={logoSvg} alt="Yot.Africa logo" className="mx-auto h-14 md:h-20 -my-0 md:-my-0" />
      </h1>
      <p className="text-xl md:text-2xl text-yot-red-glow font-poppins font-semibold mb-4">
        Your Own Ticket
      </p>
      <p className="max-w-xl mx-auto text-base md:text-lg text-white font-inter mb-8">
        The ultimate event ticketing platform for Tanzania. Fast, secure, and built for the continent. Join us.
      </p>
      <div className="flex justify-center">
        <EmailForm />
      </div>
    </section>
  );
}
 