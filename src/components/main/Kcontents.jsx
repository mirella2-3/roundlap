import { KConStyle } from './style';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { seasonsData } from '../../assets/api/seasonData';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Kcontents = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [descVisible, setDescVisible] = useState(false);

    useEffect(() => {
        setDescVisible(false);
        const timer = setTimeout(() => setDescVisible(true), 50);
        return () => clearTimeout(timer);
    }, [activeIndex]);
    return (
        <KConStyle>
            <Swiper
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                className="mySwiper"
            >
                {seasonsData.map((data, index) => {
                    const videoRef = useRef(null);

                    const isActive = activeIndex === index;

                    useEffect(() => {
                        if (isActive && videoRef.current) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                        }
                    }, [isActive]);

                    return (
                        <SwiperSlide className="wrap" key={data.id}>
                            <div
                                className="bg"
                                style={{
                                    backgroundImage: `url(${data.bgImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>

                            <ul>
                                <li className="whiteBox">
                                    <div className="wrapper">
                                        <div className="fill">
                                            <video
                                                ref={videoRef}
                                                src={data.videoImg}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        </div>
                                    </div>
                                    <img
                                        className="pong"
                                        src="/images/Main/Product-Frame.png"
                                        alt=""
                                    />
                                </li>

                                <li className="bgTxt right" style={{ color: data.textColor }}>
                                    <img src={data.titleImg} alt="" />
                                </li>
                            </ul>

                            {/* desc 애니메이션 */}
                            <h3
                                key={
                                    isActive && descVisible
                                        ? `desc-${activeIndex}-${Date.now()}`
                                        : `desc-${index}`
                                }
                                className={`desc ${isActive && descVisible ? 'fade-up' : ''}`}
                            >
                                <p>{data.desc1}</p>
                                <p>{data.desc2}</p>
                            </h3>
                            <Link to={data.link}>
                                <button className="cta" style={{ '--boxColor': data.boxColor }}>
                                    <span style={{ color: data.boxTxtColor }}>제품 보러가기</span>
                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                        <path stroke={data.boxTxtColor} d="M1,5 L11,5"></path>
                                        <polyline
                                            stroke={data.boxTxtColor}
                                            points="8 1 12 5 8 9"
                                        ></polyline>
                                    </svg>
                                </button>
                            </Link>
                        </SwiperSlide>
                    );
                })}
                <div
                    className="swiper-pagination"
                    style={{ '--bgColor': seasonsData[activeIndex]?.boxTxtColor || '#ccc' }}
                ></div>
            </Swiper>
        </KConStyle>
    );
};

export default Kcontents;
