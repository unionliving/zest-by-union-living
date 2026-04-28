import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
const Reviews = () => {
    const reviews = [
        { id: 1, video: '/assets/review1.mp4' },
        { id: 2, video: '/assets/review2.mp4' },
        { id: 3, video: '/assets/review3.mp4' },
        { id: 4, video: '/assets/review4.mp4' },
        { id: 5, video: '/assets/review5.mov' },
    ];
    return (<section className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <h2 className="text-[2rem] font-bold leading-none tracking-[-0.05em] text-black sm:text-[2.3rem] md:text-[3rem]">
          Review
        </h2>

        <div className="mt-7">
          <Carousel opts={{
            align: 'start',
            loop: false,
            slidesToScroll: 1,
        }} className="w-full">
            <CarouselContent className="-ml-3">
              {reviews.map((review) => (<CarouselItem key={review.id} className="basis-[82%] pl-3 sm:basis-[32%] lg:basis-1/5">
                  <div className="overflow-hidden rounded-[12px] bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                    <video className="h-[300px] w-full rounded-[12px] object-cover sm:h-[500px]" controls preload="metadata" playsInline muted>
                      <source src={review.video}/>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CarouselItem>))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>);
};
export default Reviews;
