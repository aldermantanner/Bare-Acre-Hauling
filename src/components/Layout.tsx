import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { LocalBusinessSchema } from './LocalBusinessSchema';
import { HoursNote } from './HoursNote';
import { JOBBER_CLIENT_LOGIN_URL, JOBBER_REQUEST_URL, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      <LocalBusinessSchema />
      <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between gap-12">
            <div className="flex items-center gap-12">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Logo className="h-10 sm:h-12 w-10 sm:w-12 object-contain flex-shrink-0" />
                <span className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap">Bare Acre Hauling</span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              <a
                href="/#services"
                onClick={(e) => {
                  if (location.pathname !== '/') return;
                  e.preventDefault();
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-200 hover:text-green-400 transition-colors font-medium whitespace-nowrap"
              >
                Services
              </a>
              <Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="text-gray-200 hover:text-green-400 transition-colors font-medium whitespace-nowrap">Pricing</Link>
              <Link to="/service-areas" onClick={() => window.scrollTo(0, 0)} className="text-gray-200 hover:text-green-400 transition-colors font-medium whitespace-nowrap">Service Areas</Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href={PHONE_TEL_HREF} className="text-white hover:text-green-400 transition-colors font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
              </a>

              <a
                href={PHONE_SMS_HREF}
                className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-green-800 px-5 py-3 font-bold text-white shadow-lg transition-all hover:bg-green-900 hover:shadow-xl"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                Text a photo
              </a>

              <div className="relative">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  onBlur={() => setTimeout(() => setResourcesOpen(false), 200)}
                  className="text-white hover:text-green-400 transition-colors p-2"
                  aria-label="Resources menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[220px] z-50">
                    <a
                      href={JOBBER_REQUEST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-3 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                    >
                      Request a quote form
                    </a>
                    <a
                      href="/#faq"
                      onClick={(e) => {
                        setResourcesOpen(false);
                        if (location.pathname !== '/') return;
                        e.preventDefault();
                        const el = document.getElementById('faq');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block px-4 py-3 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                    >
                      FAQ
                    </a>
                    <a
                      href="/#contact"
                      onClick={(e) => {
                        setResourcesOpen(false);
                        if (location.pathname !== '/') return;
                        e.preventDefault();
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block px-4 py-3 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-slate-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 border-t border-slate-700 pt-6">
              <div className="flex flex-col space-y-4">
                <a
                  href="/#services"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') return;
                    e.preventDefault();
                    const el = document.getElementById('services');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex min-h-11 items-center py-2 text-lg text-gray-200 transition-colors hover:text-green-400"
                >
                  Services
                </a>
                <Link to="/pricing" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className="flex min-h-11 items-center py-2 text-lg text-gray-200 transition-colors hover:text-green-400">Pricing</Link>
                <Link to="/service-areas" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className="flex min-h-11 items-center py-2 text-lg text-gray-200 transition-colors hover:text-green-400">Service Areas</Link>

                <div className="flex flex-col gap-3 pt-6 border-t border-slate-700 mt-4">
                  <a
                    href={PHONE_SMS_HREF}
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-green-900"
                  >
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    Text a photo for a quote
                  </a>
                  <a href={PHONE_TEL_HREF} className="bg-slate-700 text-white px-6 py-4 rounded-lg hover:bg-slate-600 transition-colors font-bold text-center text-lg shadow-lg flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={JOBBER_REQUEST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex min-h-11 items-center justify-center text-center text-sm text-slate-300 underline underline-offset-2"
                  >
                    Or send a request form
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      {isHomePage && (
        <section id="contact" className="bg-gradient-to-br from-slate-700 to-slate-800 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="mb-8 text-xl opacity-90">
              Contact Bare Acre Hauling today for fast, professional junk removal in Molalla and surrounding areas.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0 text-green-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call or Text</h3>
                  <a href={PHONE_TEL_HREF} className="hover:text-green-400 transition-colors text-xl font-semibold">{PHONE_DISPLAY}</a>
                  <a href={PHONE_SMS_HREF} className="block mt-1 text-green-300 hover:text-green-200 font-medium">Text a photo for a quote</a>
                  <div className="mt-3">
                    <HoursNote tone="on-dark" />
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-green-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <a href="mailto:BareAcreHauling@outlook.com" className="hover:text-green-400 transition-colors">BareAcreHauling@outlook.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-green-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Based in</h3>
                  <p>Molalla, OR<br />& Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-slate-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className="flex items-center justify-center space-x-2 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Logo className="h-10 w-10 object-contain" loading="lazy" />
            <span className="text-xl font-bold text-white">Bare Acre Hauling</span>
          </a>
          <p className="mb-2">Veteran Owned & Operated</p>
          <p className="mb-2 text-white">Molalla, OR</p>
          <p className="mb-4">
            <a href={PHONE_TEL_HREF} className="text-lg font-semibold text-green-400 hover:text-green-300">
              {PHONE_DISPLAY}
            </a>
          </p>
          <div className="mx-auto mb-6 max-w-md">
            <HoursNote tone="on-dark" />
          </div>

          <nav aria-label="Service areas" className="mb-6">
            <Link
              to="/service-areas"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wide text-slate-300 hover:text-white"
            >
              Service areas
            </Link>
            <p className="mt-2 text-sm text-gray-400">Molalla and the towns we cover from there</p>
          </nav>

          <p className="mb-4">
            <a
              href="mailto:BareAcreHauling@outlook.com"
              className="inline-flex min-h-11 items-center text-sm text-gray-300 underline underline-offset-2 hover:text-white"
            >
              BareAcreHauling@outlook.com
            </a>
          </p>
          <p className="mb-6">
            <a
              href={JOBBER_CLIENT_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-gray-400 underline underline-offset-2 hover:text-white"
            >
              Existing customers
            </a>
          </p>

          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/bareacrehauling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-gray-400 transition-colors hover:text-white"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-6 w-6" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@bareacrehauling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-gray-400 transition-colors hover:text-white"
              aria-label="Visit our TikTok page"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-sm">TikTok</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4 text-sm">
            <Link
              to="/privacypolicy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/termsandconditions"
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
          <p>&copy; 2025-2026 Bare Acre Hauling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
