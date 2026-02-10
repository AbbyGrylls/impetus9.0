import { useEffect, useState } from "react";

export default function Merchandise() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf74a4baekYrlb2gLDmJ18eMtHlAE5py4KxqdVudEGY3tsR8w/viewform",
                "_blank"
            );
            setRedirect(false);
        }
    }, [redirect]);

    return (
        <section className="py-16 px-4">
            {/* COMPACT CONTAINER MATCHING BENTO BACKGROUND */}
            <div
                className="relative max-w-5xl mx-auto rounded-2xl
                    bg-[#070707]
                    shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                    ring-1 ring-white/40"
            >

                <div className="px-6 md:px-10 py-10">
                    {/* HEADING */}
                    <div className="text-center mb-4">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#FF6900] mb-1">
                            Official Gear
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Merchandise
                        </h2>
                    </div>

                    {/* CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                        {/* LEFT */}
                        <div className="text-white space-y-5 text-center lg:text-left">
                            <p className="text-base leading-relaxed text-white/85">
                                Grab the official{" "}
                                <span className="text-[#FF6900] font-semibold">
                                    IMPETUS 9.0
                                </span>{" "}
                                polo tee — built for long days, late nights, and
                                serious presence.
                            </p>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <p className="text-white/50">Color</p>
                                    <p className="font-medium text-white">
                                        Black
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <p className="text-white/50">Type</p>
                                    <p className="font-medium text-white">
                                        Polo Tee
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <p className="text-white/50">Sizes</p>
                                    <p className="font-medium text-white">
                                        S – XXXL
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <p className="text-white/50">Price</p>
                                    <p className="font-medium text-[#FF6900]">
                                        ₹350
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                                <button
                                    onClick={() => setRedirect(true)}
                                    className="inline-flex items-center justify-center rounded-xl
                                    bg-[#FF6900] hover:bg-[#e65f00]
                                    text-white font-semibold px-7 py-2.5 transition
                                    shadow-[0_0_25px_rgba(255,105,0,0.4)]
                                    hover:scale-[1.03] active:scale-[0.97]"
                                >
                                    Buy Now
                                </button>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 self-center">
                                    Limited Drop
                                </span>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="relative rounded-xl border border-white/10 bg-black p-2">
                                    <img
                                        src="/ImpetusTshirt.jpeg"
                                        alt="IMPETUS 9.0 Merchandise"
                                        className="w-full rounded-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
