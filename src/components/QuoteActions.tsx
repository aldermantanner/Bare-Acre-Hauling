import type { ReactNode } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { JOBBER_REQUEST_URL, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

type QuoteActionsProps = {
  tone?: 'on-dark' | 'on-light';
  align?: 'start' | 'center';
  className?: string;
  /** Which action gets the large button. The rest of the site stays text-first. */
  primary?: 'text' | 'call';
  /** Rendered directly under the primary button, or under both when equalActions is set. */
  afterPrimary?: ReactNode;
  /**
   * Text and call at the same size and weight. Ignores `primary`.
   * Used by the ads landing page so neither action looks optional.
   */
  equalActions?: boolean;
  /** The Jobber request link. Turn off when the pair is repeated down a page. */
  showRequestForm?: boolean;
};

export function QuoteActions({
  tone = 'on-dark',
  align = 'start',
  className = '',
  primary = 'text',
  afterPrimary,
  equalActions = false,
  showRequestForm = true,
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
  const equalTextClass =
    'inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-2 py-3 text-center text-sm font-bold leading-tight text-white shadow-md transition-colors hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:px-3 sm:text-base';
  const equalCallClass =
    tone === 'on-dark'
      ? 'inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-2 py-3 text-center text-sm font-bold leading-tight text-slate-900 shadow-md transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3 sm:text-base'
      : 'inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-2 py-3 text-center text-sm font-bold leading-tight text-white shadow-md transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 sm:px-3 sm:text-base';

  const textAction = (actionClassName: string, label: ReactNode = 'Text a photo for a quote') => (
    <a href={PHONE_SMS_HREF} className={actionClassName}>
      <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );

  const callAction = (
    actionClassName: string,
    iconClass: string,
    label: ReactNode = <>Call {PHONE_DISPLAY}</>,
  ) => (
    <a href={PHONE_TEL_HREF} className={actionClassName}>
      <Phone className={iconClass} aria-hidden="true" />
      {label}
    </a>
  );

  const requestForm = showRequestForm ? (
    <a
      href={JOBBER_REQUEST_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center text-center text-sm font-medium underline underline-offset-2 ${tertiary}`}
    >
      Or send a request form
    </a>
  ) : null;

  if (equalActions) {
    const textLabel = (
      <span className="text-center leading-tight">
        Text a photo
        <span className="mt-0.5 block text-xs font-semibold sm:text-sm">for a quote</span>
      </span>
    );
    const callLabel = (
      <span className="text-center leading-tight">
        Call
        <span className="mt-0.5 block text-xs font-semibold sm:text-sm">{PHONE_DISPLAY}</span>
      </span>
    );

    return (
      <div className={`flex w-full max-w-xl flex-col gap-3 ${alignment} ${className}`}>
        <div className="grid grid-cols-2 gap-3">
          {textAction(equalTextClass, textLabel)}
          {callAction(equalCallClass, 'h-5 w-5 shrink-0', callLabel)}
        </div>
        {afterPrimary}
        {requestForm}
      </div>
    );
  }

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
      {requestForm}
    </div>
  );
}
