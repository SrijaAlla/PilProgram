import {Swiper, SwiperSlide} from "swiper/react";
import { Thumbs} from 'swiper/modules';

export function ThumbNailSwiper({images,setThumbsSwiper})
{
    return(
        <div>
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={4}
                slidesPerView={4}
                watchSlidesProgress
            >
                {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <img
                    src={img.url}
                    alt={img.alt}
                    className="w-[138px] h-[138px] object-cover cursor-pointer"
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}