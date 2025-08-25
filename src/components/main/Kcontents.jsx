import { KConStyle } from './style';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { seasonsData } from '../../assets/api/seasonData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Kcontents = () => {
    return (
        <KConStyle>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                className="mySwiper"
            >
                {seasonsData.map(
                    ({ id, textColor, boxColor, boxTxtColor, desc, img, title, bgImg }) => (
                        <SwiperSlide className="wrap" key={id}>
                            <div className="bg">
                                <img src={bgImg} alt={title} />
                            </div>
                            <div className="whiteBox"></div>
                            <div className="bgTxt" style={{ color: textColor }}>
                                {title.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                            <button className="cta" style={{ '--boxColor': boxColor }}>
                                <span style={{ color: boxTxtColor }}>제품 보러가기</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                            <p>{desc}</p>
                        </SwiperSlide>
                    )
                )}
                <div
                    className="swiper-pagination"
                    style={{ '--bgColor': seasonsData.boxTxtColor }}
                ></div>
            </Swiper>
        </KConStyle>
    );
};

export default Kcontents;
