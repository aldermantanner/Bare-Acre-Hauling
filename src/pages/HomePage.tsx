import { Link } from 'react-router-dom';
import { Star, CheckCircle, Shield, Truck, Facebook, Trash2, Home, Package, Leaf, Wrench, Building2, Archive, MapPin } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ServiceArea } from '../components/ServiceArea';
import { SocialProof } from '../components/SocialProof';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { FAQSchema } from '../components/FAQSchema';
import { ServiceSchema } from '../components/ServiceSchema';
import { ReviewSchema } from '../components/ReviewSchema';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { LocalSEOContent } from '../components/LocalSEOContent';
import { ChatWidget } from '../components/ChatWidget';
import { Photo } from '../components/Photo';
import { QuoteActions } from '../components/QuoteActions';
import { MINIMUM_PRICE_NOTE, PHONE_DISPLAY } from '../lib/contact';

const services = [
  {
    icon: Package,
    title: 'Appliance Removal',
    description: 'Old refrigerators, washers, dryers, stoves, dishwashers — we haul it all away safely and responsibly.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Trash2,
    title: 'General Trash & Junk Removal',
    description: 'Furniture, clutter, mixed household junk — one call and it\'s gone. No hauling, no stress.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Wrench,
    title: 'Debris Removal',
    description: 'Construction debris, drywall, wood scraps, remodel leftovers — we clean up after the project.',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Leaf,
    title: 'Yard Cleanup',
    description: 'Brush piles, branches, yard waste, overgrown debris — we restore your outdoor space fast.',
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Home,
    title: 'Garage Cleanouts',
    description: 'Years of accumulated garage clutter cleared out in a single visit. Drive back in by tonight.',
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Building2,
    title: 'Complete House Cleanout',
    description: 'Full-property cleanouts for estates, foreclosures, and move-outs. We handle everything floor to floor.',
    color: 'bg-slate-100',
    iconColor: 'text-slate-600',
  },
  {
    icon: Archive,
    title: 'Hoarder House Cleanouts',
    description: 'Discreet, judgment-free hoarder cleanout services. We work efficiently and respectfully.',
    color: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Truck,
    title: 'Commercial Junk Removal',
    description: 'Office furniture, equipment, renovation debris — we keep your business site clean and on schedule.',
    color: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalBusinessSchema />
      <FAQSchema />
      <ServiceSchema />
      <ReviewSchema />
      <BreadcrumbSchema />

      {/* Hero Section */}
      <section className="bg-slate-800">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[640px]">
          <div className="relative h-52 sm:h-72 lg:order-2 lg:h-auto lg:min-h-full">
            <Photo
              webp="/crew-loading.webp"
              jpg="/crew-loading.jpg"
              alt="Loading a refrigerator, mattress, and furniture onto the trailer"
              width={1280}
              height={853}
              pictureClassName="absolute inset-0"
              className="h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col justify-center py-6 pl-4 pr-20 sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <div className="mb-4 flex items-center space-x-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-yellow-400">Veteran Owned & Operated</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              We Take It<br />
              <span className="text-green-400">From Here.</span>
            </h1>
            <p className="mb-3 text-base leading-relaxed text-gray-300 sm:mb-4 sm:text-xl">
              Bare Acre Hauling is Molalla's trusted, veteran-owned junk removal company. Appliances, debris, full estate cleanouts — we haul it all so you don't have to.
            </p>
            <p className="mb-4 font-semibold text-white">{MINIMUM_PRICE_NOTE}</p>
            <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:gap-3">
              <div className="flex w-full items-start gap-2 rounded-lg bg-red-600 px-3 py-2.5 text-sm font-bold text-white shadow-lg sm:w-fit sm:px-4 sm:py-3 sm:text-base">
                <Shield className="mt-0.5 h-5 w-5 shrink-0" />
                <span>10% OFF for Veterans, First Responders & Police</span>
              </div>
              <div className="flex w-full items-start gap-2 rounded-lg bg-yellow-400 px-3 py-2.5 text-sm font-bold text-slate-900 shadow-lg sm:w-fit sm:px-4 sm:py-3 sm:text-base">
                <Star className="mt-0.5 h-5 w-5 shrink-0 fill-slate-900" />
                <span>First-time customers get 10% off.</span>
              </div>
            </div>
            <QuoteActions tone="on-dark" />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/bareacrehauling"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@bareacrehauling"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                aria-label="Visit our TikTok page"
              >
                <svg className="h-5 w-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="font-medium text-white">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <div className="font-bold text-slate-800 text-lg">Veteran Owned</div>
              <div className="text-sm text-gray-500">& Operated</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="font-bold text-slate-800 text-lg">Fully Insured</div>
              <div className="text-sm text-gray-500">Licensed & Bonded</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="font-bold text-slate-800 text-lg">Molalla Based</div>
              <div className="text-sm text-gray-500">Local junk removal</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-bold text-slate-800 text-lg">Same Day</div>
              <div className="text-sm text-gray-500">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Junk Removal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single appliance to an entire property cleanout — we handle it all. Fast scheduling, fair pricing, zero hassle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">Not sure if we haul it? Just ask — if it's not hazardous, we probably do.</p>
            <div className="flex flex-col items-center gap-4">
              <QuoteActions tone="on-light" align="center" />
              <Link
                to="/pricing"
                onClick={() => window.scrollTo(0, 0)}
                className="font-semibold text-slate-700 underline underline-offset-2 hover:text-slate-900"
              >
                See the pricing calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Real Results</span>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">See the Difference We Make</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">One visit. One crew. A completely cleared space — same day.</p>
          </div>

          {/* Photo pair */}
          <div className="mb-10 grid h-64 grid-cols-2 gap-2 overflow-hidden rounded-2xl shadow-2xl sm:h-80 sm:gap-4 md:h-[420px]">
            {/* Before */}
            <div className="relative overflow-hidden">
              <Photo
                webp="/before-real.webp"
                jpg="/before-real.jpg"
                alt="Driveway covered in junk and debris before removal"
                width={1200}
                height={900}
                pictureClassName="absolute inset-0"
                className="h-full w-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="rounded-lg bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg sm:px-4 sm:py-2 sm:text-sm sm:tracking-widest">Before</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold leading-snug text-white drop-shadow-lg sm:text-base">Driveway packed with scrap, debris, and junk</p>
              </div>
            </div>

            {/* After */}
            <div className="relative overflow-hidden">
              <Photo
                webp="/after.webp"
                jpg="/after.jpg"
                alt="Clean cleared driveway after junk removal"
                width={1050}
                height={1400}
                pictureClassName="absolute inset-0"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute top-5 right-5">
                <span className="rounded-lg bg-green-600 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg sm:px-4 sm:py-2 sm:text-sm sm:tracking-widest">After</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold leading-snug text-white drop-shadow-lg sm:text-base">Completely cleared — same day</p>
              </div>
            </div>
          </div>

          {/* Review + Tanner (nav "Reviews" link lands here) */}
          <div id="reviews" className="scroll-mt-24 flex flex-col md:flex-row items-center gap-6 bg-slate-50 rounded-2xl p-7 shadow-sm">
            <Photo
              webp="/crew-loading.webp"
              jpg="/crew-loading.jpg"
              alt="Tanner, owner of Bare Acre Hauling"
              width={1280}
              height={853}
              pictureClassName="shrink-0"
              className="h-20 w-20 rounded-full border-4 border-white object-cover object-left shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 text-base italic mb-1">"Quick, efficient service made junk removal easy. Their top-notch customer service is highly recommended!"</p>
              <p className="text-slate-500 text-sm font-semibold">— Alex M., Molalla OR</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <QuoteActions tone="on-light" align="center" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Three simple steps to a clutter-free space.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Text or Call</h3>
              <p className="text-gray-600">Text a photo to {PHONE_DISPLAY} or give us a call. You approve the price before we load.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">We Show Up</h3>
              <p className="text-gray-600">Our crew arrives on time, does a quick walkthrough, and gets straight to work. You point, we haul.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">It's Gone</h3>
              <p className="text-gray-600">We load everything, clean up the area, and haul it to proper disposal. You're left with a clean space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-slate-800 px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Reclaim Your Space?</h2>
          <p className="text-base md:text-lg opacity-90 mb-5">
            Text us a photo and get a quote in minutes. Same-day service often available.
          </p>
          <div className="flex justify-center">
            <QuoteActions tone="on-dark" align="center" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Why Bare Acre Hauling?</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-white">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
                <Star className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Veteran Owned</h3>
              <p className="text-gray-600">Military precision and integrity behind every job. We show up when we say we will.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">No Hidden Fees</h3>
              <p className="text-gray-600">Upfront, honest pricing. You approve the quote before we touch a thing.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-white">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <Truck className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">We Do All the Work</h3>
              <p className="text-gray-600">You don't lift a finger. Our crew handles all the loading, hauling, and cleanup.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Local & Trusted</h3>
              <p className="text-gray-600">Local, veteran-owned junk removal out of Molalla, serving Clackamas County.</p>
            </div>
          </div>

          {/* Action photo */}
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
            <Photo
              webp="/crew-loading.webp"
              jpg="/crew-loading.jpg"
              alt="Loading appliances and furniture onto the trailer"
              width={1280}
              height={853}
              pictureClassName="block w-full"
              className="aspect-[3/2] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Extra reviews (Alex M. is already shown in the card above) */}
      <Testimonials excludeIds={['alex-m']} />

      <ServiceArea />

      <LocalSEOContent />

      <div id="faq">
        <FAQ />
      </div>

      <ChatWidget />
    </div>
  );
}
