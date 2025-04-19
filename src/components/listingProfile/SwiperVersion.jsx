import { Pagination, Navigation } from "swiper/modules";
import "swiper/css"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css/pagination"
import { Rating } from "@mui/material";
import p1 from "../../assets/Profile/p1.png"
import right from "../../assets/Profile/right.svg"
import left from "../../assets/Profile/left.svg"
import { CustomerReviews } from "./CustomerReviews";


export function SwiperVersion()
{
    return(
        <main className="relative">
            <div className="absolute my-swiper-button-next top-full left-1/2 translate-y-10 translate-x-6">
                 <img src={right} alt="icon_right"/>
            </div>
            <div className="absolute my-swiper-button-prev top-full right-1/2 translate-y-10 -translate-x-2">
                    <img src={left} alt="icon_left"/>
            </div>
            <div className="container mt-16">
                <Swiper
                modules = {[Pagination,Navigation]}
                grabCursor ={true}
                initialSlide={1}
                slidesPerView= "2"
                navigation={{
                    nextEl: '.my-swiper-button-next',
                    prevEl: '.my-swiper-button-prev',
                }}
                >
                <SwiperSlide className="!w-[580px] mx-4">
                    <CustomerReviews/>
                </SwiperSlide>
                
                <SwiperSlide className="!w-[580px] mx-4">
                    <CustomerReviews/>
                </SwiperSlide>
                
                <SwiperSlide className="!w-[580px] mx-4">
                    <CustomerReviews/>
                </SwiperSlide>

                </Swiper>
            </div>
        </main>
    )
}