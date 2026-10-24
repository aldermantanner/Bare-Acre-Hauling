import { MapPin, Shield, Truck, CheckCircle } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <Shield className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold leading-tight">Veteran owned</div>
            <div className="text-sm opacity-90">Operated locally</div>
            <div className="text-xs opacity-75">Molalla, Oregon</div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <MapPin className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold leading-tight">Molalla</div>
            <div className="text-sm opacity-90">Our home base</div>
            <div className="text-xs opacity-75">Willamette Valley</div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <Truck className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold leading-tight">Junk removal</div>
            <div className="text-sm opacity-90">That's what we do</div>
            <div className="text-xs opacity-75">You approve the price</div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold leading-tight">Free quotes</div>
            <div className="text-sm opacity-90">Before we start</div>
            <div className="text-xs opacity-75">Call or text</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-lg mb-4 font-semibold">
            Local, veteran-owned junk removal out of Molalla
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-white/90">
            <span className="bg-white/20 px-4 py-2 rounded-full">Molalla</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Canby</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Oregon City</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Woodburn</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Salem</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Keizer</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Clackamas County</span>
          </div>
        </div>
      </div>
    </section>
  );
}
