'use client';

import Image from 'next/image';

export default function AboutImpetus() {
    return(
    <section className="relative w-full bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: IMPETUS Logo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <Image
              src="/impetusLogo.png" 
              alt="IMPETUS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            About <span className="text-amber-500">IMPETUS</span>
          </h2>

          <div className="space-y-5 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              <span className="font-semibold text-white">IMPETUS</span> is the annual technical fest organized by the
              Society of Mechanical Engineers (SME) on behalf of the Department
              of Mechanical Engineering, IIEST Shibpur, with a vision to bridge
              the gap between academic learning and real-world engineering
              practice.
            </p>

            <p>
              Grounded in the belief that theoretical knowledge gains true meaning
              when combined with hands-on skills, IMPETUS serves as a dynamic
              platform where students, academicians, and industry professionals
              converge to promote innovation, creativity, and problem-solving.
            </p>

            <p>
              Through a diverse lineup of technical competitions, workshops,
              expert lectures, and interactive sessions, participants gain
              exposure to emerging technologies, industry practices, and
              real-world challenges—ensuring every attendee leaves with enhanced
              skills and inspiration.
            </p>
          </div>
        </div>

      </div>
    </section>
    );



}