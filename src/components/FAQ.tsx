import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { HEAVY_MATERIAL_NOTE, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF, REPLY_TIME } from '../lib/contact';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What junk removal services do you offer?',
    answer: 'We offer a full range of junk removal services including: appliance removal, general trash and junk removal, debris removal, yard cleanup, garage cleanouts, complete house cleanouts, hoarder house cleanouts, furniture removal, and commercial junk removal. If it\'s not hazardous, we can likely haul it.'
  },
  {
    question: 'How much does junk removal cost?',
    answer: 'Jobs start at $150. You approve the price before we load. Text a photo of the junk and we will reply with a price for that job.'
  },
  {
    question: 'Do you do same-day junk removal?',
    answer: 'Yes, same-day service is often available depending on schedule. Call or text us at 503-874-3705 and we\'ll do our best to get to you quickly.'
  },
  {
    question: 'Do I need to be home during the junk removal?',
    answer: 'Not necessarily. As long as we have access to the items and a way to confirm the job scope and payment, we can handle it without you present. Just reach out and we\'ll work out the details.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Molalla and surrounding communities throughout Clackamas and Marion Counties, including Canby, Oregon City, Woodburn, Silverton, Estacada, Wilsonville, West Linn, Lake Oswego, Gladstone, Milwaukie, Sandy, Salem, and Keizer. Contact us to confirm service to your specific area.'
  },
  {
    question: 'Do you remove appliances?',
    answer: 'Yes! We remove all types of household appliances including refrigerators, washers, dryers, stoves, dishwashers, microwaves, and more. Appliance removal is one of our most requested services.'
  },
  {
    question: 'Can you help with a hoarder house cleanout?',
    answer: 'Yes. We offer full hoarder house cleanout services. We work discreetly, respectfully, and efficiently. Text a photo for a quote. You approve the price before we load.'
  },
  {
    question: 'Do you do estate and full house cleanouts?',
    answer: 'Absolutely. We specialize in complete house cleanouts for estates, foreclosures, move-outs, and property transitions. We can clear an entire home in a single visit or across multiple trips depending on volume.'
  },
  {
    question: 'What do you NOT take?',
    answer: `We cannot take hazardous materials, chemicals, liquids, paint, or asbestos. ${HEAVY_MATERIAL_NOTE}`
  },
  {
    question: 'How do I get a quote?',
    answer: `Text a photo of what you need removed to ${PHONE_DISPLAY}. ${REPLY_TIME} You can also call, or send the request form. You approve the price before we load.`
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash or card. Payment is collected when the job is done, at the price you approved before we started.'
  },
  {
    question: 'Are you veteran owned?',
    answer: 'Yes. Bare Acre Hauling is proudly veteran owned and operated. We offer 10% off for veterans, first responders, and police. Just mention it when you book.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="mb-8 text-center text-lg text-gray-600 sm:mb-12 sm:text-xl">
          Everything you need to know about our junk removal services
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-800 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help. Call, text, or send us an email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_SMS_HREF}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-900"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              Text a photo for a quote
            </a>
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-700"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="mailto:BareAcreHauling@outlook.com"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
