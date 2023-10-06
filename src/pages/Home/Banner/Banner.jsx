import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";

const Banner = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    fetch("../bannerImg.json")
      .then((res) => res.json())
      .then((image) => setImages(image));
  }, []);

  return (
    <div>
      <Swiper
        className="mySwiper"
        speed={4000}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500 }}
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-[30vh] md:h-[60vh] lg:h-[90vh]"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
