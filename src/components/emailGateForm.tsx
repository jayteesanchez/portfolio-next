'use client';
import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface Props {
  onSuccess: (signedUrl: string) => void;
}

export default function EmailGateForm({ onSuccess }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_RESUME_LAMBDA_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Something went wrong. Please try again.');
      }

      const { url } = await res.json();
      onSuccess(url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <p className="text-gray-300 text-sm leading-relaxed">
        Enter your email to access my resume. I&apos;ll know someone&apos;s interested!
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-violet-500/50 transition-colors duration-200">
          <MdOutlineEmail className="text-gray-400 shrink-0" />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
          />
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 text-white bg-white/10 border border-white/20 font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : null}
        {loading ? 'Loading...' : 'View Resume'}
      </button>
    </form>
  );
}
