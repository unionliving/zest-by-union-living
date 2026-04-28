const CommunityCulture = () => {
    return (<section id="community" className="overflow-hidden bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="community-artboard relative mx-auto hidden aspect-[1280/820] w-full md:block">
          <div className="community-copy left-[3.4%] top-[4.6%]">Experi</div>
          <div className="community-copy left-[67.8%] top-[4.8%]">ence</div>
          <div className="community-copy left-[28.1%] top-[24.8%]">Community</div>
          <div className="community-copy left-[1.6%] top-[48.5%]">Culture</div>
          <div className="community-copy left-[84%] top-[48.3%]">At</div>
          <div className="community-copy left-[25%] top-[72.5%]">Union Living</div>

          <div className="community-tile left-[45.4%] top-[4%] h-[20%] w-[19.2%] rounded-[10px]">
            <img src="/assets/community-1.jpeg" alt="Union Living community gathering" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[4.1%] top-[25%] h-[18.2%] w-[11.2%] rounded-[10px]">
            <img src="/assets/community-2.jpeg" alt="Community dinner outdoors" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[16%] top-[25%] h-[18.2%] w-[11.2%] rounded-[10px]">
            <img src="/assets/community-3.jpeg" alt="Residents gathering on a terrace" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[51%] top-[45%] h-[18.4%] w-[19.6%] rounded-[10px]">
            <img src="/assets/community-5.png" alt="Shared workspace and events area" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[72%] top-[45%] h-[18.4%] w-[11.8%] rounded-[10px]">
            <img src="/assets/community-6.png" alt="Talk or workshop session" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[4.1%] top-[70%] h-[18%] w-[20.4%] rounded-[10px]">
            <img src="/assets/community-6.png" alt="Residents playing games together" className="h-full w-full object-cover"/>
          </div>
        </div>

        <div className="community-mobile md:hidden">
          <h2 className="font-display text-center text-[3.5rem] leading-[0.9] tracking-[0] text-[#ff5a0a] sm:text-[2.7rem]">
            Experience
            <br />
            Community
            <br />
            Culture At
            <br />
            Union Living
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="community-tile aspect-[1.1/1]">
              <img src="/assets/community-2.jpeg" alt="Community dinner outdoors" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.1/1]">
              <img src="/assets/community-3.jpeg" alt="Residents gathering on a terrace" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.25/1] col-span-2">
              <img src="/assets/community-1.jpeg" alt="Union Living community gathering" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.35/1] col-span-2">
              <img src="/assets/community-5.png" alt="Shared workspace and events area" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>

      </div>
    </section>);
};
export default CommunityCulture;
