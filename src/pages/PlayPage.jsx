import React from 'react'
import '../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PlayPage() {

    const slides = [
        {
            title: "歡迎來到我們的伺服器",
            subtitle: "模組生存 - 版本 1.21.1",
            image: "https://media.forgecdn.net/attachments/511/258/scr6.png"
        },
        {
            title: "最新活動：聖誕節限時任務開跑！",
            subtitle: "完成任務獲得特殊獎勵",
            image: "https://staticg.sportskeeda.com/editor/2022/12/d13ee-16715248817983-1920.jpg"
        }
    ];

    return (
        <div className="-mx-6 -mt-6 h-full">
            <Swiper

                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-[115%] w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-gray-800"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                                    <p className="text-xl text-gray-300">{slide.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PlayPage