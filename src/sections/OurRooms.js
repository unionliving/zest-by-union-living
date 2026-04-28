const OurRooms = () => {
     const rooms = [
        {
            type: 'TRIPLE',
            title: 'TRIPLE',
            description: 'Cozy triple room with modern amenities, perfect for sharing and fostering community connections.',
            image: '../assets/zest-triple.png',
        },

        {
            type: 'TWIN',
            title: 'TWIN',
            description: 'Cozy twin room with modern amenities, perfect for sharing and fostering community connections.',
            image: '../assets/zest-twin.png',
        },
        
        {
            type: 'PRIVATE',
            title: 'PRIVATE',
            description: 'Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.',
            image: '../assets/zest-private.png',
        },
    ];

    return (<section id="rooms" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-display mb-10 text-center text-[2.8rem] uppercase leading-[0.9] !tracking-[0] text-black sm:text-[4rem] md:text-left md:text-[5rem]  lg:text-[4.7rem]">
          OUR ROOMS
        </h2>

        <div className="mx-auto mt-8 grid max-w-[930px] grid-cols-1 gap-y-10 md:mt-10 md:grid-cols-3 md:gap-x-[118px] lg:mt-4 lg:max-w-[1440px]">
          {rooms.map((room) => (<div key={room.type} className="mx-auto flex w-full max-w-[550px] flex-col items-center">
              <div className="w-full overflow-hidden max-w-[450px] rounded-[24px]">
                <img src={room.image} alt={room.title} className="h-[240px] w-full object-cover md:h-[280px] lg:h-[300px]"/>
              </div>

              <div className="mt-5 w-full">
                <h3 className="text-center text-[2.5rem] font-bold tracking-[-0.03em] text-black">
                  {room.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[400px] text-center text-[1.2rem] leading-[1.28] text-[#2f2f2f] md:max-w-[550px] md:text-left">
                  {room.description}
                </p>
              </div>
            </div>))}
        </div>

        <div className="mt-12 text-center md:mt-14">
          <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))} className="inline-flex min-w-[140px] items-center justify-center rounded-[7px] bg-[#f97316] px-6 py-3 text-[14px] font-medium text-white shadow-[5px_6px_0_rgba(0,0,0,0.12)] transition-colors hover:bg-[#ea580c] sm:min-w-[148px] sm:px-7 sm:text-[15px]">
            Book Now
          </button>
        </div>
      </div>
    </section>);
};
export default OurRooms;
