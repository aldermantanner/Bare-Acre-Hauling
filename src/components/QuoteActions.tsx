import { MessageSquare, Phone } from 'lucide-react';
import { JOBBER_REQUEST_URL, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

type QuoteActionsProps = {
  tone?: 'on-dark' | 'on-light';
  align?: 'start' | 'center';
  className?: string;
};

export function QuoteActions({ tone = 'on-dark', align = 'start', className = '' }: QuoteActionsProps) {
  const secondary =
    tone === 'on-dark'
      ? 'bg-white text-slate-800 hover:bg-gray-100'
      : 'bg-slate-800 text-white hover:bg-slate-700';
  const tertiary =
    tone === 'on-dark' ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const alignment = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`flex w-full max-w-md flex-col gap-3 ${alignment} ${className}`}>
      <a
        href={PHONE_SMS_HREF}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-green-900"
      >
        <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
        Text a photo for a quote
      </a>
      <a
        href={PHONE_TEL_HREF}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold shadow transition-colors ${secondary}`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={JOBBER_REQUEST_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-11 items-center justify-center text-center text-sm font-medium underline underline-offset-2 ${tertiary}`}
      >
        Or send a request form
      </a>
    </div>
  );
}
