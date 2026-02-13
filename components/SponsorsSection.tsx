import React from "react";

type Sponsor = {
    name: string;
    logo: string;
};

type Props = {
    titleSponsors: Sponsor[];
    coSponsors: Sponsor[];
    trainingPartner: Sponsor[];
    iamSponsor: Sponsor[];
};

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
    return (
        <div className="bg-zinc-900 rounded-2xl px-8 py-6 shadow-lg hover:scale-105 transition duration-300 w-fit">
            <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 object-contain mx-auto"
            />
        </div>
    );
};

export default function SponsorsSection({ titleSponsors, coSponsors, trainingPartner, iamSponsor }: Props) {
    return (
        <section className="text-white py-16 px-6 md:px-16">

            {/* TITLE SPONSOR */}
            <div className="mb-20">
                <h2 className="text-5xl font-bold mb-10">Title Sponsor</h2>

                <div className="flex flex-wrap gap-10 items-center">
                    {titleSponsors.map((sponsor, i) => (
                        <SponsorCard sponsor={sponsor} key={i} />
                    ))}
                </div>
            </div>

            {/* CO SPONSORS */}
            <div>
                <h2 className="text-5xl font-bold mb-10">Co-Sponsor</h2>

                <div className="flex flex-wrap gap-10 items-center">
                    {coSponsors.map((sponsor, i) => (
                        <SponsorCard sponsor={sponsor} key={i} />
                    ))}
                </div>
            </div>

            {/* Training Patner */}

            <div>
                <h2 className="text-5xl font-bold mb-10">Training Partner</h2>

                <div className="flex flex-wrap gap-10 items-center">
                    {trainingPartner.map((sponsor, i) => (
                        <SponsorCard sponsor={sponsor} key={i} />
                    ))}
                </div>
            </div>


            {/* Training Patner */}

            <div>
                <h2 className="text-5xl font-bold mb-10">Training Partner</h2>

                <div className="flex flex-wrap gap-10 items-center">
                    {trainingPartner.map((sponsor, i) => (
                        <SponsorCard sponsor={sponsor} key={i} />
                    ))}
                </div>
            </div>

            {/* IAM Sponsors */}

            <div>
                <h2 className="text-5xl font-bold mb-10">IAM Sponsors</h2>

                <div className="flex flex-wrap gap-10 items-center">
                    {iamSponsor.map((sponsor, i) => (
                        <SponsorCard sponsor={sponsor} key={i} />
                    ))}
                </div>
            </div>

        </section>
    );
}
