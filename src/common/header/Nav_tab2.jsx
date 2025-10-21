import tab2Data01 from '../../assets/tab2Data01';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Nav_tab2 = ({ isActive, onMouseEnter }) => {
    return (
        <li className="m m2" onMouseEnter={onMouseEnter}>
            <h2>소프트웨어</h2>
            <div className={`sub sub2 ${isActive ? 'on' : ''}`}>
                <div className="sub_inner">
                    <ul className="wrap">
                        <li className="top">
                            <h2>
                                Nintendo Switch 2 <span>소프트웨어</span>
                            </h2>
                            <div className="sw2">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    slidesPerView={3}
                                    spaceBetween={40}
                                    navigation={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    className="imgsSwiper"
                                >
                                    {tab2Data01.map((src, i) => (
                                        <SwiperSlide key={i}>
                                            <p>
                                                <img src={src} alt={`slide-${i + 1}`} />
                                            </p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </li>
                        <li>
                            <ul className="btmCon">
                                <li>
                                    <h2>
                                        Nintendo Switch <span>소프트웨어</span>
                                    </h2>

                                    <ul className="switches">
                                        <li className="switches-swiper-wrapper">
                                            <Swiper
                                                modules={[Navigation]}
                                                slidesPerView={2}
                                                spaceBetween={40}
                                                loop={true}
                                                navigation={{
                                                    nextEl: '.switches-next',
                                                    prevEl: '.switches-prev',
                                                }}
                                                className="switches-swiper"
                                            >
                                                {tab2Data01.map((src, i) => (
                                                    <SwiperSlide key={i}>
                                                        <p>
                                                            <img src={src} alt={`slide-${i + 1}`} />
                                                        </p>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                            {/* navigation 버튼은 li 대신 div나 button으로 */}
                                            <div className="switches-prev">
                                                <IoIosArrowBack />
                                            </div>
                                            <div className="switches-next">
                                                <IoIosArrowForward />
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right">
                                    <h2>Mobile App</h2>
                                    <ul className="apps">
                                        <li>
                                            <p>
                                                <img src="/images/appIcon1.jpg" alt="" />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <img src="/images/appIcon2.jpg" alt="" />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <img src="/images/appIcon3.jpg" alt="" />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <img src="/images/appIcon4.jpg" alt="" />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <img src="/images/appIcon5.jpg" alt="" />
                                            </p>
                                        </li>
                                    </ul>
                                    <button className="allMore">
                                        더 많은 소프트웨어 정보 보러가기
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab2;
