import type { ReactNode } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { JOBBER_REQUEST_URL, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

type QuoteActionsProps = {
  tone?: 'on-dark' | 'on-light';
  align?: 'start' | 'center';
  className?: string;
  /** Which action gets the large button. The rest of the site stays text-first. */
  primary?: 'text' | 'call';
  /** Rendered directly under the primary button. */
  afterPrimary?: ReactNode;
};

export function QuoteActions({
  tone = 'on-dark',
  align = 'start',
  className = '',
  primary = 'text',
  afterPrimary,
}: QuoteActionsProps) {
  const secondary =
    tone === 'on-dark'
      ? 'bg-white text-slate-800 hover:bg-gray-100'
      : 'bg-slate-800 text-white hover:bg-slate-700';
  const demoted =
    tone === 'on-dark'
      ? 'border border-white/50 bg-transparent text-white hover:bg-white/10'
      : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50';
  const tertiary =
    tone === 'on-dark' ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const alignment = align === 'center' ? 'mx-auto' : '';
  const primaryClass =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-green-900';
  const callPrimaryClass =
    'inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-green-800 px-6 py-5 text-xl font-bold text-white shadow-lg transition-colors hover:bg-green-900';
  const secondaryClass = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold shadow transition-colors ${secondary}`;
  const demotedClass = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-colors ${demoted}`;

  const textAction = (className: string) => (
    <a href={PHONE_SMS_HREF} className={className}>
      <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
      Text a photo for a quote
    </a>
  );

  const callAction = (className: string, iconClass: string) => (
    <a href={PHONE_TEL_HREF} className={className}>
      <Phone className={iconClass} aria-hidden="true" />
      Call {PHONE_DISPLAY}
    </a>
  );

  return (
    <div className={`flex w-full max-w-md flex-col gap-3 ${alignment} ${className}`}>
      {primary === 'call' ? (
        <>
          {callAction(callPrimaryClass, 'h-6 w-6 shrink-0')}
          {afterPrimary}
          {textAction(demotedClass)}
        </>
      ) : (
        <>
          {textAction(primaryClass)}
          {afterPrimary}
          {callAction(secondaryClass, 'h-5 w-5 shrink-0')}
        </>
      )}
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
