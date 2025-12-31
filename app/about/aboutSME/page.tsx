'use client';

import Image from 'next/image';

export default function AboutDepartmentSME() {
  return (
    <section className="relative w-full bg-black text-white py-28 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            About the <span className="text-cyan-400">Department</span> &amp; <span className="text-amber-500">SME</span>
          </h2>

          <div className="space-y-5 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Founded on <span className="text-white font-semibold">4th March 1921</span>, the Department of Mechanical
              Engineering at <span className="font-semibold text-white">IIEST Shibpur</span> began its journey with a
              diploma program, followed by the introduction of undergraduate studies in 1930 and postgraduate programs
              in 1954. Over the decades, the department has established a strong national and international reputation
              for academic excellence, impactful research, and the consistent production of highly skilled engineers.
            </p>

            <p>
              The department is supported by its academic and cultural body, the
              <span className="font-semibold text-white"> Society of Mechanical Engineers (SME)</span>, which actively
              promotes technical learning, leadership, and professional growth among students. SME serves as a bridge
              between classroom learning and practical engineering exposure.
            </p>

            <p>
              The society hosts student chapters of globally recognized professional organizations including
              <span className="font-semibold text-white"> ASME</span>, <span className="font-semibold text-white">SAE</span>,
              <span className="font-semibold text-white"> IMechE</span>, and
              <span className="font-semibold text-white"> ISHRAE</span>, enabling students to engage with international
              engineering communities and industry experts.
            </p>

            <p>
              Through expert lectures, industrial interactions, research initiatives, and technical events, SME plays a
              pivotal role in shaping industry-ready engineers while fostering a culture of innovation, collaboration,
              and excellence within the department.
            </p>
          </div>
        </div>

        {/* Right: SME Logo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <Image
              src="/SME.png" // replace with your actual SME logo path
              alt="Society of Mechanical Engineers Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
