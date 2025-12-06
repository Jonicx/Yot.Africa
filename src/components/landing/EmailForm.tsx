import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (value: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    console.log('Landing signup:', email);
    setSuccess(true);
    setEmail('');

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="johndoe@email.com"
        className="w-full sm:flex-1 sm:min-w-0 rounded-lg px-4 py-3 bg-yot-dark-grey placeholder-yot-muted-grey focus:outline-none focus:ring-2 focus:ring-yot-red-glow border border-yot-mid-grey text-yot-light-grey"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-yot-red text-white px-6 py-3 rounded-md font-semibold font-poppins transition-all w-full sm:w-auto whitespace-nowrap hover:bg-yot-red-glow hover:shadow-neonLg"
        style={{ boxShadow: '0 0 12px rgba(255, 58, 58, 0.45)' }}
      >
        Notify Me
      </button>
      {error && <div className="text-red-400 text-sm w-full text-center sm:text-left mt-2">{error}</div>}
      {success && <div className="text-yot-red-glow text-sm w-full text-center mt-2">Thanks, we'll notify you!</div>}
    </form>
  );
}
