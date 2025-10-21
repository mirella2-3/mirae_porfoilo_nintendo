import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import nintendoList from '../../assets/nintendoList';

const NintendoSlide = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className="custom-swiper">
            <Swiper
                modules={[Navigation]}
                slidesPerView={'auto'}
                spaceBetween={20}
                navigation
                className="mySwiper"
                centeredSlides={true}
                slideToClickedSlide={true}
                initialSlide={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {nintendoList.map((src, i) => (
                    <SwiperSlide key={i} className={activeIndex === i ? 'active' : ''}>
                        <div className="slide-box">
                            <img src={src.img} alt={src.title} />
                            <div className="slide-text">
                                <p>{src.genre}</p>
                                <h3>{src.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NintendoSlide;
