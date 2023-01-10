import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Slider({
    children,
    className,
    imageHight = "",
    autoplay = false,
    DUMMY_DATA,
    pagination,
    breakpoints,
    effect = '',
    loop = false,
    speed = 800 }) {

    return (
        <Swiper className={`relative ${className}`}
            modules={[Pagination, EffectFade, Autoplay]}
            pagination={pagination}
            breakpoints={breakpoints}
            effect={effect}
            speed={speed}
            loop={loop}
            autoplay={autoplay}
        >
            {DUMMY_DATA.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <div className="relative cursor-pointer h-full">
                            <img className={`rounded-md w-full ${imageHight} object-cover`} src={item.imageURL} alt="" />
                            {children}
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


Slider.Swiper = function SliderSwiper({ children }) {
    return (
        <Swiper
        // navigation={{
        //     revEl: leftArrowRef.current,
        //     nextEl: rightArrowRef.current
        // }}
        // onInit={(swiper) => {
        //     swiper.params.navigation.prevEl = leftArrowRef.current
        //     swiper.params.navigation.nextEl = rightArrowRef.current
        //     swiper.navigation.init()
        //     swiper.navigation.update()
        // }}
        >
            <div ref={rightArrowRef} >
                <MdOutlineKeyboardArrowLeft className="z-10 absolute top-1/2 cursor-pointer left-0 text-accent text-3xl" />
            </div>
            <div ref={leftArrowRef}>
                <MdOutlineKeyboardArrowRight className="z-10 absolute top-1/2 cursor-pointer right-0 text-accent text-3xl" />
            </div>
        </Swiper>
    )
}

Slider.SwiperSlide = function SliderSwiperSlide({ item }) {
    return (
        <SwiperSlide >
            <div className="cursor-pointer">
                <img className="rounded-md h-full w-full object-cover" src={item.imageURL} alt="" />
                <div className="absolute top-2 w-full">
                    <p className="w-14 text-center mx-auto bg-accent text-minorBackground rounded-full">title</p>
                </div>
            </div>
        </SwiperSlide>
    )
}
