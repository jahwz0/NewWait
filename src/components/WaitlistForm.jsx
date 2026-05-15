'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!role) return setMessage('Please select a role.');
    if (!privacyConsent) return setMessage('You must agree to the privacy policy.');

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/.netlify/functions/add-to-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, privacy_consent: privacyConsent }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage("You're on the list. We'll be in touch.");
        setEmail('');
        setRole('');
        setPrivacyConsent(false);
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:border-white"
        />

        <div className="flex gap-4">
          {['client', 'stylist'].map((r) => (
              <label key={r} className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="accent-white"
                />
                <span className="text-white capitalize">{r}</span>
              </label>
          ))}
        </div>

        <label className="flex items-start gap-2 cursor-pointer text-sm text-zinc-400">
          <input
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-0.5 accent-white"
          />
          I agree to the{' '}
          <a href="/privacy" className="underline text-white">
            privacy policy
          </a>
        </label>

        <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
        </button>

        {message && (
            <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
        )}
      </form>
  );
}