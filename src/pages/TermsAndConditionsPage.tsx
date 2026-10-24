import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export function TermsAndConditionsPage() {
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
              <FileText className="h-7 w-7 text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
              <p className="text-slate-300 mt-1">Last updated: October 24, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Bare Acre Hauling is a veteran-owned junk removal business in Molalla, Oregon. These are plain-language terms for how a job works. They are not a lawyer-drafted contract or legal advice. By booking or using our services, you agree to them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              1. What we do
            </h2>
            <p className="text-gray-600">
              We haul away junk. That includes furniture, appliances, yard debris, garage and house cleanouts, and similar loads. We serve Molalla and the Willamette Valley, including Canby, Silverton, and Salem/Keizer. We do not rent trailers. You can book with the Book Now button, which opens Jobber, or by calling or texting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              2. Quotes and pricing
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>A quote is an estimate based on volume, weight, the type of material, and the trip to your location.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>If the load on site is different from what we quoted, the price can change.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>You approve the final price before we start the work.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Prices shown on the website are guides. The price you approve for that job is the one that applies.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              3. Scheduling, cancellations, and rescheduling
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>We schedule a time and do our best to arrive as planned. Same-day service depends on the schedule that day.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>If you need to cancel or reschedule, call or text 503-874-3705 or email BareAcreHauling@outlook.com as soon as you can.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>We may also need to reschedule because of weather, access, or our schedule. We will contact you if that happens.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              4. What we don't haul
            </h2>
            <p className="text-gray-600 mb-4">
              We do not haul hazardous materials. That includes paint, chemicals, fuel, asbestos, and similar items. We can decline any item we are not equipped or allowed to take. If we decline something, we leave it, and it is not part of the price unless we agreed otherwise.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Paint, solvents, pesticides, and other chemicals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Fuel, oil, propane, and other flammable or pressurized materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Asbestos and other materials that need special handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Anything else we decide we cannot safely or legally take</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              5. Your responsibilities
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Give us a clear, safe way to reach the items.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>You own the items, or you have permission from the owner to have them hauled away.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Point out anything that must not be removed, including things that look like junk but should stay.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              6. Property care and limits of liability
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>We use reasonable care on driveways, lawns, gates, and floors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Heavy items and soft or wet ground can still leave marks. We do not promise a perfect surface.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>We are not responsible for items you told us to take.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>We are not responsible for hidden conditions we could not see, or for items you wanted kept but did not point out.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              7. Payment
            </h2>
            <p className="text-gray-600">
              We accept cash or card only. Payment is collected when the job is done, at the price you approved before we started. Card payments and invoices may be handled through Jobber. We do not take payment card numbers on this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              8. Disposal, donation, and recycling
            </h2>
            <p className="text-gray-600">
              After you approve the price and we load the items, they are ours to handle. We may dispose of them, recycle them, or donate what is still usable. We do not bring items back once they are loaded.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">
              9. Using this website
            </h2>
            <p className="text-gray-600">
              The site is for information and for requesting service. You need to be 18 or older to book a job. We can refuse a job. We may update these terms; the date at the top of this page will change when we do.
            </p>
          </section>

          <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              10. Contact us
            </h2>
            <p className="text-gray-600 mb-6">
              Questions about these terms or a scheduled job:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Bare Acre Hauling</p>
                <p className="text-gray-600">Molalla, OR</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">
                  <strong className="text-slate-700">Phone:</strong>{' '}
                  <a href="tel:503-874-3705" className="text-green-600 hover:text-green-700 transition-colors">503-874-3705</a>
                </p>
                <p className="text-gray-600">
                  <strong className="text-slate-700">Email:</strong>{' '}
                  <a href="mailto:BareAcreHauling@outlook.com" className="text-green-600 hover:text-green-700 transition-colors">BareAcreHauling@outlook.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
