import { useEffect, useState } from "react";

export default function Merchandise() {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf74a4baekYrlb2gLDmJ18eMtHlAE5py4KxqdVudEGY3tsR8w/viewform",
                "_blank"
            );
            setRedirect(false); // prevent re-trigger
        }
    }, [redirect]);

    return (
        <section className="relative overflow-hidden py-20 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_45%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Official Gear</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
                        Merchandise
                    </h2>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                        Minimal, technical, and built for the IMPETUS aesthetic. Stock is limited.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-6 text-center lg:text-left">
                        <p className="text-lg leading-relaxed text-white/85">
                            Gear up for <span className="font-bold text-white">IMPETUS 9.0</span> with
                            the official polo tee engineered for long days and late nights.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-white/60">Color</p>
                                <p className="font-semibold text-white">Black</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-white/60">Type</p>
                                <p className="font-semibold text-white">Polo T-shirt</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-white/60">Sizes</p>
                                <p className="font-semibold text-white">S, M, L, XL, XXL, XXXL</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-white/60">Cost</p>
                                <p className="font-semibold text-cyan-300">Rs 350</p>
                            </div>
                        </div>

                        <p className="text-white/70 text-sm">
                            First lot availability depends on demand and size. Limited stock.
                            Special sizes can be requested in the second lot.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
                            <button onClick={() => setRedirect(true)} className="inline-flex items-center justify-center rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 transition shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                                Buy Now
                            </button>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                                Limited Drop
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-transparent blur-2xl" />
                            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
                                <img
                                    src="/ImpetusTshirt.jpeg"
                                    alt="IMPETUS 9.0 Merchandise"
                                    className="w-full rounded-xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
