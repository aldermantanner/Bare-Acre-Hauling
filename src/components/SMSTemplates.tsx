import { MessageSquare } from 'lucide-react';
import { Booking } from '../lib/supabase';

interface SMSTemplatesProps {
  booking: Booking;
  isOpen: boolean;
  onClose: () => void;
}

export function SMSTemplates({ booking, isOpen, onClose }: SMSTemplatesProps) {
  if (!isOpen) return null;

  const getSmsTemplate = (status: string) => {
    const firstName = booking.customer_name.split(' ')[0];

    switch (status) {
      case 'pickup_reminder':
        return `Hi ${firstName}, reminder: Bare Acre Hauling is scheduled for your junk removal tomorrow. Questions? Call or text 503-874-3705.`;
      case 'return_reminder':
        return `Hi ${firstName}, Bare Acre Hauling here. Please confirm we can reach the items for your junk removal. Call or text 503-874-3705.`;
      case 'overdue':
        return `${firstName}, we still need to confirm your junk removal with Bare Acre Hauling. Call or text 503-874-3705.`;
      case 'active':
        return `${firstName}, Bare Acre Hauling is on the way for your junk removal. Questions? Call or text 503-874-3705.`;
      case 'completed':
        return `Thank you ${firstName}! Your junk removal with Bare Acre Hauling is complete. Questions? Call or text 503-874-3705.`;
      default:
        return `Hi ${firstName}, this is Bare Acre Hauling regarding your junk removal. Call or text 503-874-3705 if you have questions.`;
    }
  };

  const openSmsApp = (phone: string, message: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    window.open(`sms:${cleanPhone}?body=${encodedMessage}`, '_blank');
  };

  return (
    <div className="ml-6 p-3 bg-blue-50 rounded-lg border-2 border-blue-200 space-y-2">
      <p className="text-xs font-bold text-blue-900 mb-2">Quick Text Templates:</p>
      <button
        onClick={() => openSmsApp(booking.customer_phone, getSmsTemplate('pickup_reminder'))}
        className="w-full text-left px-3 py-2 bg-white hover:bg-blue-100 rounded border border-blue-200 text-xs transition-colors"
      >
        <span className="font-semibold">Pickup Reminder</span> - Reminder about tomorrow's pickup
      </button>
      <button
        onClick={() => openSmsApp(booking.customer_phone, getSmsTemplate('return_reminder'))}
        className="w-full text-left px-3 py-2 bg-white hover:bg-blue-100 rounded border border-blue-200 text-xs transition-colors"
      >
        <span className="font-semibold">Access Check</span> - Ask the customer to confirm we can reach the items
      </button>
      <button
        onClick={() => openSmsApp(booking.customer_phone, getSmsTemplate('overdue'))}
        className="w-full text-left px-3 py-2 bg-white hover:bg-red-100 rounded border border-red-200 text-xs transition-colors"
      >
        <span className="font-semibold text-red-700">Needs Confirmation</span> - Ask the customer to confirm the job
      </button>
      <button
        onClick={() => openSmsApp(booking.customer_phone, getSmsTemplate('default'))}
        className="w-full text-left px-3 py-2 bg-white hover:bg-blue-100 rounded border border-blue-200 text-xs transition-colors"
      >
        <span className="font-semibold">Custom Message</span> - Blank message to customer
      </button>
    </div>
  );
}
