export const PHONE_DISPLAY = '503-874-3705';
export const PHONE_TEL_HREF = 'tel:503-874-3705';

export const SMS_QUOTE_BODY = "Hi, I'd like a junk removal quote. Here's a photo:";
export const PHONE_SMS_HREF = `sms:503-874-3705?body=${encodeURIComponent(SMS_QUOTE_BODY)}`;

export const JOBBER_REQUEST_URL =
  'https://clienthub.getjobber.com/hubs/935796ca-8da1-401b-a3dd-604659dcbf70/public/requests/2258657/new';

export const JOBBER_CLIENT_LOGIN_URL =
  'https://clienthub.getjobber.com/client_hubs/935796ca-8da1-401b-a3dd-604659dcbf70/login/new?source=share_login';

export const MINIMUM_PRICE_NOTE = 'Jobs start at $150. You approve the price before we load.';

export const REPLY_TIME = 'We usually reply within a few hours during business hours.';

export const HEAVY_MATERIAL_NOTE =
  'Concrete, dirt, brick, and other heavy materials get a custom quote by text. You approve the price before we load.';

export const BALLPARK_NOTE = 'Ballpark only. Text a photo for a real price.';

export const HOURS_LINE = '7:00 AM to 8:00 PM, every day';
export const AFTER_HOURS_NOTE = 'Urgent after-hours pickup available by phone at a higher rate.';
export const QUOTE_REQUESTS_ANYTIME = 'You can send a quote request online anytime.';

export const BUSINESS_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;
