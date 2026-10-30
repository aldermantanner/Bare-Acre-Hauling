import { AFTER_HOURS_NOTE, HOURS_LINE } from '../lib/contact';

export function HoursNote({ tone = 'light' }: { tone?: 'light' | 'on-dark' }) {
  const heading = tone === 'on-dark' ? 'text-white' : 'text-slate-800';
  const body = tone === 'on-dark' ? 'text-slate-200' : 'text-slate-600';

  return (
    <div>
      <p className={`font-semibold ${heading}`}>Hours: {HOURS_LINE}</p>
      <p className={`mt-1 text-sm leading-relaxed ${body}`}>{AFTER_HOURS_NOTE}</p>
    </div>
  );
}
