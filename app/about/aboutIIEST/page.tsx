import Image from "next/image";

export default function IIESTShibpur() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            IIEST Shibpur
          </h1>
          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Indian Institute of Engineering Science and Technology
          </p>
        </div>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 1856, the Indian Institute of Engineering Science and
              Technology, Shibpur, stands as the second-oldest engineering
              college in India. Evolving from the Engineering College, the
              institute attained Deemed University status in 1992, became a
              full-fledged university in 2004, and was later renamed Bengal
              Engineering and Science University.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Recognised as an Institute of National Importance by the
              Government of India, the institute proudly bears the title
              IIEST Shibpur.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="/clock-tower.jpg"
              alt="IIEST Shibpur Clock Tower"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-slate-800 md:order-1">
            <Image
              src="/iiest-aerial.jpg"
              alt="Aerial View of IIEST Shibpur"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              National Importance & Global Impact
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ranked among the top 12 premier NITs in the country as per
              NIRF Engineering 2025, IIEST Shibpur boasts a strong global
              alumni network and has made significant contributions in
              research, engineering, culture, art, and politics.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              With a legacy spanning over a century, the institute continues
              to stand as a beacon of excellence in education, innovation,
              and holistic development, nurturing future leaders and
              innovators.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}