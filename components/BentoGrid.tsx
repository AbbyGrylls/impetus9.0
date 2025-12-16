import React from 'react';
import { ArrowUpRight, Calendar, Users, BookOpen, Clock } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-blue-500">Legacy</span> & The <span className="text-green-500">Future</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Explore the ecosystem behind Impetus 9.0. Built on history, driven by innovation.
            </p>
          </div>
          {/* Optional: Total Prize Pool Badge */}
          <div className="hidden md:block text-right">
             <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Total Prize Pool</div>
             <div className="text-3xl font-mono font-bold text-green-400">₹3,00,000+</div>
          </div>
        </div>

        {/* --- THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          
          {/* BOX 1: IIEST SHIBPUR (Tall Vertical - Left) */}
          <div className="md:col-span-1 md:row-span-3 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
            {/* IMAGE: Clocktower */}
            <img 
                src="/clocktower.jpg" 
                alt="IIEST Clocktower"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-60"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative z-10 mt-auto">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-900/50 backdrop-blur-md flex items-center justify-center border border-blue-500/30">
                 <Clock className="w-6 h-6 text-blue-200" />
              </div>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs font-bold mb-2 border border-blue-500/20">
                EST. 1856
              </span>
              <h3 className="text-2xl font-bold mt-2 leading-tight">IIEST<br/>Shibpur</h3>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                The 2nd oldest engineering college in India. A 170-year legacy of excellence.
              </p>
            </div>
          </div>

          {/* BOX 2: IMPETUS 9.0 (Wide Hero - Top Right) */}
          <div className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-3xl border border-zinc-800 p-8 flex flex-col justify-end">
             {/* VIDEO BACKGROUND */}
             <video 
                autoPlay loop muted playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
             >
                <source src="/aftermovie-clip.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

             <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                   <h3 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                     IMPETUS 9.0
                   </h3>
                   <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg">
                     The Annual Tech Fest of Mechanical Engineering.
                     <br/><span className="text-green-400 font-bold">Gear Up. Rev Up. Rise Up.</span>
                   </p>
                </div>
                <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-green-600 hover:border-green-500 transition-all group">
                    <span>Watch Teaser</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
             </div>
          </div>

          {/* BOX 3: SME (Square - Bottom Center-Left) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6">
             {/* IMAGE: Group Photo */}
             <img 
                src="/group-photo.jpg" 
                alt="SME Team"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-70"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
             
             <div className="relative z-10 h-full flex flex-col justify-end">
                <Users className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">SME</h3>
                <p className="text-xs text-gray-400 leading-snug">
                   Society of Mechanical Engineers.<br/>The driving force behind the machine.
                </p>
             </div>
          </div>

          {/* BOX 4: IAM (Square - Bottom Center-Right) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
             {/* IMAGE: IAM Photo (Magazine or Event) */}
             <img 
                src="/iam-photo.jpg" 
                alt="I Am Mechan"
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-30 group-hover:opacity-50 transition-opacity"
             />
             
             <div className="relative z-10 h-full flex flex-col justify-end">
                <BookOpen className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">IAM</h3>
                <p className="text-xs text-gray-400 leading-snug">
                   "I Am Mechan"<br/>The voice and identity of our department.
                </p>
             </div>
          </div>

          {/* BOX 5: SCHEDULE (Square - Bottom Right) */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between group hover:border-green-500/30 transition-colors">
             <div className="flex items-center justify-between">
                <div className="p-2 bg-zinc-900 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-xs font-mono text-green-500 border border-green-500/20 px-2 py-1 rounded">
                    FEB 2026
                </span>
             </div>
             
             <div className="space-y-3 mt-4">
                <div className="flex justify-between text-sm text-gray-300 border-b border-white/5 pb-1">
                    <span>Day 1</span>
                    <span className="text-gray-500">Inauguration</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300 border-b border-white/5 pb-1">
                    <span>Day 2</span>
                    <span className="text-gray-500">Qualifiers</span>
                </div>
                <div className="flex justify-between text-sm text-white font-bold">
                    <span>Day 3</span>
                    <span className="text-green-400">Finals</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}