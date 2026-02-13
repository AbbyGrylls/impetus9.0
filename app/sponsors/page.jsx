"use client";

import PastSponsors from "./pastSponsors";
import SponsorsSection from "@/components/SponsorsSection";


// Icons
const IconTrending = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-impetus-orange mb-4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-impetus-orange mb-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-impetus-orange mb-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-impetus-orange mb-4"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

export default function SponsorPage() {

  const titleSponsors = [
    {
      name: "TEGA",
      logo: "images/sponsors/Tega.png",
    },
  ];

  const coSponsors = [
    {
      name: "Mahr",
      logo: "images/sponsors/logo-mahr.jpg",
    },
  ];

  const trainingPartner = [
    {
      name: "Gems",
      logo: "images/sponsors/gems.png",
    }
  ];
  const iamSponsor = [
    {
      name: "Lalbaba",
      logo: "images/sponsors/lalbaba.png",
    }
  ];


  return (
    <main className="relative bg-black text-white font-body min-h-screen selection:bg-impetus-orange selection:text-black">

      {/* ================= GLOBAL BACKGROUND (Grain & Gradients) ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grain Texture across entire page */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black opacity-80" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 z-10">

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <div className="inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm mb-2">
            <span className="text-impetus-orange text-xs md:text-sm font-semibold tracking-wider uppercase">
              February 2026 · IIEST Shibpur
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            SPONSOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              IMPETUS <span className="text-impetus-orange">9.0</span>
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Bridge the gap between industry leaders and the next generation of engineering innovators.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="/pdf/SponsorshipBrochure.pdf"
              target="_blank"
              className="px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-white/30 transition-colors duration-300 min-w-[180px]"
            >
              Download Brochure
            </a>
            <span className="hidden md:block text-white/30 text-2xl font-thin">/</span>
            <p className="text-white/50 text-sm">
              Department of Mechanical Engineering
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>
      {/* ================= CURRENT SPONSORS ================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Current Sponsors
          </h2>

          <div className="flex flex-col items-center space-y-12">

            {/* Title Sponsor */}
            <div className="w-[260px] aspect-square bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-between p-6 text-center">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                Title Sponsor
              </p>

              <div className="flex-1 flex items-center justify-center w-full bg-white rounded-lg my-4">
                <img
                  src={titleSponsors[0].logo}
                  alt={titleSponsors[0].name}
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-white">
                {titleSponsors[0].name}
              </p>
            </div>

            {/* Co Sponsor */}
            <div className="w-[260px] aspect-square bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-between p-6 text-center">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                Co Sponsor
              </p>

              <div className="flex-1 flex items-center justify-center w-full bg-white rounded-lg my-4">
                <img
                  src={coSponsors[0].logo}
                  alt={coSponsors[0].name}
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-white">
                {coSponsors[0].name}
              </p>
            </div>

            {/* Training Partner */}
            <div className="w-[260px] aspect-square bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-between p-6 text-center">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                Training Partner
              </p>

              <div className="flex-1 flex items-center justify-center w-full bg-white rounded-lg my-4">
                <img
                  src={trainingPartner[0].logo}
                  alt={trainingPartner[0].name}
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-white">
                {trainingPartner[0].name}
              </p>
            </div>

            {/* IAM Sponsor */}
            <div className="w-[260px] aspect-square bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-between p-6 text-center">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                IAM Sponsor
              </p>

              <div className="flex-1 flex items-center justify-center w-full bg-white rounded-lg my-4">
                <img
                  src={iamSponsor[0].logo}
                  alt={iamSponsor[0].name}
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-white">
                {iamSponsor[0].name}
              </p>
            </div>

          </div>
        </div>
      </section>





      {/* ================= SPONSORSHIP TIERS ================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-roboto text-3xl md:text-4xl font-bold mb-16 text-center">Sponsorship Tiers</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

            {/* Tier 1: Industry Academia (Left) */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all order-2 lg:order-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-white/40 text-xs font-mono block mb-1">TIER II</span>
                  <h3 className="font-display text-[25px]">Co-Sponsor</h3>
                </div>
                <div className="text-2xl font-bold text-white">₹1.25L</div>
              </div>
              <p className="text-white/60 text-xs">
                High-impact visibility across major events, promotional materials, and stage announcements during the fest.
              </p>
            </div>

            {/* Tier 3: Title Sponsor (Center) - Compacted */}
            <div className="bg-neutral-900 border border-impetus-orange shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)] rounded-xl p-6 transform lg:scale-105 relative order-1 lg:order-2">
              <div className="text-center mb-10">
                <span className="text-impetus-orange text-xs font-mono block mb-1">TIER III</span>
                <h3 className="font-display text-2xl text-white">Title Sponsor</h3>
                <div className="text-2xl font-bold mt-2 text-impetus-orange">₹1.75L</div>
              </div>

              <p className="text-center text-white/50 text-[10px] uppercase tracking-widest mb-4">Exclusive Benefits</p>

              <ul className="text-white/80 text-sm space-y-2.5 mb-2">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-impetus-orange" /> Prime branding on all collaterals
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-impetus-orange" /> Keynote session opportunity
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-impetus-orange" /> Largest on-ground stall space
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-impetus-orange" /> Social media dominance
                </li>
              </ul>
            </div>

            {/* Tier 2: Co-Sponsor (Right) */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all order-3 lg:order-3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-white/40 text-xs font-mono block mb-1">TIER I</span>
                  <h3 className="font-display text-[19px]">Industry-Academia Meet</h3>
                </div>
                <div className="text-2xl font-bold text-white">₹1L</div>
              </div>
              <p className="text-white/60 text-xs">
                Ideal for companies looking to network with faculty and research scholars. Includes speaker kits and venue visibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PAST SPONSORS ================= */}
      <section className="py-20 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="font-roboto text-3xl md:text-4xl font-bold mb-2">Our Past Sponsors</h2>
              <p className="text-white/50 text-sm">Companies that trusted us in previous years</p>
            </div>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-8 mb-4"></div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-xl p-8">
            <PastSponsors />
          </div>
        </div>
      </section>

    </main>
  );
}