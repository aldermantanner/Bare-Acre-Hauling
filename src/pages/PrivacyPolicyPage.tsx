import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
              <Shield className="h-7 w-7 text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-slate-300 mt-1">Last updated: October 24, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Bare Acre Hauling is a veteran-owned junk removal business in Molalla, Oregon. We serve the Willamette Valley, including Canby, Silverton, and Salem/Keizer. This page says what information we collect and how we use it, in plain language. It is not legal advice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              1. Information we collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect the details you give us so we can quote and do a junk removal job:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Name, phone number, email address, and the address or ZIP code for the job, when you use a quote or contact form on this site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>What you want hauled, photos you choose to send, and any notes you add.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>The same kind of contact details when you call, text, or email us, or when you send a message through the quick-contact box (that box opens an email to us).</span>
              </li>
            </ul>
            <p className="text-gray-600">
              We do not collect driver's license numbers or insurance information. We do not ask for payment card numbers on this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              2. How we use it
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Reply to quote requests and schedule junk removal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Call, email, and text you from our business number, (503) 874-3705, about your quote or job. Your carrier's message and data rates may apply. Tell us if you want us to stop texting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Keep a record of the job so we can do the work and get paid.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              3. Jobber
            </h2>
            <p className="text-gray-600">
              We use Jobber to run the business: customer records, quotes, scheduling, invoices, and payments. When you use Book Now or pay an invoice, the details needed for that job are handled in Jobber. Jobber has its own privacy practices. We use it to do the work, not to sell your information. Payment card details, if you pay by card, are handled by Jobber. We do not store them on this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              4. We do not sell personal information
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We share it only in these cases:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span><strong className="text-slate-700">Jobber,</strong> so we can quote, schedule, invoice, and take payment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span><strong className="text-slate-700">Google Ads measurement,</strong> as described in the cookies section below.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span><strong className="text-slate-700">If the law requires it,</strong> or if we need to protect someone's safety.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              5. Cookies and ads
            </h2>
            <p className="text-gray-600 mb-4">
              This site loads Google's tag (gtag.js) for Google Ads, using conversion ID AW-17076418361. Google may set cookies or similar identifiers to tell which visits came from our ads and to measure conversions. The site code does not load a separate Google Analytics property.
            </p>
            <p className="text-gray-600">
              You can block or delete cookies in your browser. The site also stores a timestamp in your browser so the exit offer is not shown again for about a week. That timestamp stays on your device. It is not a customer account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              6. How long we keep information
            </h2>
            <p className="text-gray-600">
              We keep contact and job details for as long as we need them to quote, do the work, get paid, and keep ordinary business and tax records. Then we delete or stop using them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              7. Asking to see, correct, or delete your information
            </h2>
            <p className="text-gray-600 mb-4">
              Email <a href="mailto:bareacrehauling@outlook.com" className="text-green-600 hover:text-green-700 transition-colors">bareacrehauling@outlook.com</a> or call <a href="tel:503-874-3705" className="text-green-600 hover:text-green-700 transition-colors">(503) 874-3705</a> and tell us what you want. We will correct or delete what we still have, unless we need to keep a record for a payment, tax, or legal reason.
            </p>
            <p className="text-gray-600">
              Bare Acre Hauling is a small local business in Oregon. This page is a straightforward explanation of our practices. It is not a claim that a particular privacy statute applies to us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              8. Children
            </h2>
            <p className="text-gray-600">
              Our service is for adults booking junk removal. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              9. Changes
            </h2>
            <p className="text-gray-600">
              If we change this page, we will update the date at the top.
            </p>
          </section>

          <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              10. Contact us
            </h2>
            <p className="text-gray-600 mb-6">
              Questions about this policy, or a request to delete your information:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Bare Acre Hauling</p>
                <p className="text-gray-600">Molalla, OR</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">
                  <strong className="text-slate-700">Phone:</strong>{' '}
                  <a href="tel:503-874-3705" className="text-green-600 hover:text-green-700 transition-colors">(503) 874-3705</a>
                </p>
                <p className="text-gray-600">
                  <strong className="text-slate-700">Email:</strong>{' '}
                  <a href="mailto:bareacrehauling@outlook.com" className="text-green-600 hover:text-green-700 transition-colors">bareacrehauling@outlook.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
