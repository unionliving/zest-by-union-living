import { Check, X } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      name: 'Fully Furnished Rooms',
      description: 'Ready to move in with bed, wardrobe, study table',
      unionLiving: true,
      traditionalPG: false,
    },
    {
      name: 'High-Speed WiFi',
      description: 'Unlimited 100 Mbps internet for seamless studying',
      unionLiving: true,
      traditionalPG: false,
    },
    {
      name: 'Daily Housekeeping',
      description: 'Professional cleaning staff for common areas',
      unionLiving: true,
      traditionalPG: false,
    },
    {
      name: '24/7 Security',
      description: 'CCTV surveillance and security guards',
      unionLiving: true,
      traditionalPG: true,
    },
    {
      name: 'Community Events',
      description: 'Regular networking and fun activities',
      unionLiving: true,
      traditionalPG: false,
    },
    {
      name: 'App-Based Services',
      description: 'Raise complaints, pay rent, book amenities',
      unionLiving: true,
      traditionalPG: false,
    },
  ];

  const IconBadge = ({ value }) =>
    value ? (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f5ea]">
        <Check className="h-4 w-4 text-[#52bf74]" strokeWidth={2.4} />
      </div>
    ) : (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fde7e7]">
        <X className="h-4 w-4 text-[#ef8a8a]" strokeWidth={2.4} />
      </div>
    );

  return (
    <section className="bg-white !pt-0 py-8 md:py-16">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex rounded-[8px] bg-[#e8ddce] px-7 py-3 text-[15px] font-medium tracking-[0.03em] text-[#ff5a24] sm:px-10">
            Why Choose Us
          </span>
        </div>

        {/* Main grid */}
        <div className="mt-10 grid items-center gap-10 xl:grid-cols-[0.92fr_1.25fr] xl:gap-14">
          {/* Left: heading + description */}
          <div className="flex flex-col items-center text-center xl:min-h-[100%] xl:items-center xl:justify-center xl:self-stretch xl:pb-2">
            <h2 className="text-[2.6rem]  leading-[1] tracking-[5px] text-black sm:text-[4.2rem] lg:text-[5rem]">
              <span className="block">Union Living</span>
              <span className="block text-[0.72em] font-normal leading-[1.1]">vs</span>
              <span className="block">Traditional PG</span>
            </h2>

            <p className="mt-8 max-w-[340px] text-[17px] leading-[1.32] text-[#202020] sm:text-[22px]">
              See why thousands of students prefer Union Living over conventional paying guest accommodations.
            </p>
          </div>

          {/* Right: comparison table */}
          <div>
            {/* ── DESKTOP table (sm and up) ── */}
            <div className="hidden sm:block overflow-x-auto">
              <div className="min-w-[560px]">
                {/* Header row */}
                <div className="grid grid-cols-[1.55fr_0.78fr_0.78fr] items-center gap-4 px-1">
                  <div className="pl-2 text-[15px] text-[#7b7b7b]">Features</div>
                  <div className="text-center">
                    <span className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#de4f24] px-4 py-3 text-[16px] font-semibold text-white">
                      Union Living
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#f0f0f0] px-4 py-3 text-[16px] font-semibold text-[#263247]">
                      Traditional PG
                    </span>
                  </div>
                </div>

                {/* Feature rows */}
                <div className="mt-6 space-y-4">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="grid grid-cols-[1.55fr_0.78fr_0.78fr] items-center gap-4 rounded-[18px] bg-[#f6f6f8] px-4 py-4 md:px-5"
                    >
                      <div>
                        <p className="text-[15px] font-semibold leading-[1.2] text-[#101828]">{feature.name}</p>
                        <p className="mt-1.5 max-w-[320px] text-[13px] leading-[1.35] text-[#7f8aa3]">
                          {feature.description}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <IconBadge value={feature.unionLiving} />
                      </div>
                      <div className="flex justify-center">
                        <IconBadge value={feature.traditionalPG} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── MOBILE cards (xs only) ── */}
            <div className="sm:hidden space-y-3">
              {/* Column labels */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <span className="flex items-center justify-center rounded-[12px] bg-[#de4f24] px-3 py-3 text-[14px] font-semibold text-white text-center">
                  Union Living
                </span>
                <span className="flex items-center justify-center rounded-[12px] bg-[#f0f0f0] px-3 py-3 text-[14px] font-semibold text-[#263247] text-center">
                  Traditional PG
                </span>
              </div>

              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-[16px] bg-[#f6f6f8] px-4 py-4"
                >
                  {/* Feature name + description */}
                  <p className="text-[15px] font-semibold leading-[1.2] text-[#101828]">{feature.name}</p>
                  <p className="mt-1 text-[12px] leading-[1.35] text-[#7f8aa3]">{feature.description}</p>

                  {/* Badges row */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <IconBadge value={feature.unionLiving} />
                      <span className="text-[12px] text-[#7b7b7b]">Union Living</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconBadge value={feature.traditionalPG} />
                      <span className="text-[12px] text-[#7b7b7b]">Traditional PG</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 xl:mt-16 text-center">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
            className="inline-flex min-w-[164px] items-center justify-center rounded-[10px] bg-[#ff5a24] px-8 py-4 text-[18px] font-medium text-white shadow-[8px_8px_0_rgba(0,0,0,0.12)] transition-colors hover:bg-[#f24b14]"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;