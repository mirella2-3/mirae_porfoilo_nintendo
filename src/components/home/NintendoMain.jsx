// NintendoMain.jsx
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller } from 'swiper/modules';
import 'swiper/css';

import nintendoList from '../../assets/nintendoList';
import NintendoSlide from './NintendoSlide';

const NintendoMain = () => {
    const mainSwiperRef = useRef(null);
    const thumbSwiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="nintendo-main">
            <Swiper
                modules={[Controller, Autoplay]}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                controller={{ control: thumbSwiperRef.current }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                className="main-swiper"
            >
                {nintendoList.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="main-slide-content">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NintendoMain;
