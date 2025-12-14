export default function Hero() {
  return (
    <div>
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* <!-- Impetus watermark --> */}
        <div class="absolute inset-0 bg-[url('/impetus.png')] bg-center bg-no-repeat bg-contain opacity-[0.04]"></div>

        {/* <!-- Abstract tech overlay --> */}
        <div class="absolute inset-0 bg-[url('/impetus-logo.png')] bg-cover opacity-10"></div>

        {/* <!-- Glow animation --> */}
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        {/* <!-- Content --> */}
        <div class="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-6">
          <div>
            <h1 class="text-5xl font-bold mb-4">SPONSOR IMPETUS 9.0</h1>
            <h2 class="font-bold">Partner with Innovation & Shape the Future of Engineering</h2>
            <p class="text-lg opacity-75 mb-6">
              Annual Technical Fest of Mechanical Engineering
              <br />
              IIEST Shibpur | 13–15 February 2026
            </p>
            <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
