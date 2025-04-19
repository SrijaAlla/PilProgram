import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Thumbs } from 'swiper/modules';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import 'swiper/css'
import 'swiper/css/navigation'; // arrow styles
import 'swiper/css/pagination';

export function MainImageSwiper({images,thumbsSwiper}){
    return (
        <div className="relative">
            <div className="absolute z-10 right-full -translate-x-4 top-1/2 my-swiper-button-prev">
                <ChevronLeftIcon fontSize="large" className=""/>
            </div>
            <div className="absolute z-10 left-full top-1/2 translate-x-4 my-swiper-button-next">
                <ChevronRightIcon fontSize="large" />
            </div>
            <div className="w-[428px] h-[428px]">
                <Swiper
                    modules={[Thumbs,Navigation]}
                    spaceBetween={10}
                    navigation={{
                        nextEl: '.my-swiper-button-next',
                        prevEl: '.my-swiper-button-prev',
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {
                        images.map((img,i)=>(
                            <SwiperSlide key={i}>
                                <img src={img.url} alt={img.alt} className="w-[428px] rounded-xl h-[428px] object-cover"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}