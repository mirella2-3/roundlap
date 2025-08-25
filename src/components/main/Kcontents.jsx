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
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <KConStyle>
            <Swiper
                loop={true}
                modules={[Pagination]}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {seasonsData.map(
                    ({
                        id,
                        textColor,
                        boxColor,
                        boxTxtColor,
                        desc,
                        img,
                        titleImg,
                        bgImg,
                        textureImg,
                    }) => (
                        <SwiperSlide className="wrap" key={id}>
                            <div
                                className="bg"
                                style={{
                                    backgroundImage: `url(${bgImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                            <ul>
                                <li className="whiteBox">
                                    <div className="wrapper">
                                        <div className="fill">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                width="2300px"
                                                height="1300px"
                                                viewBox="0 0 300 300"
                                                enableBackground="new 0 0 300 300"
                                                xmlSpace="preserve"
                                            >
                                                <defs>
                                                    <pattern
                                                        id="wavePattern"
                                                        patternUnits="userSpaceOnUse"
                                                        width="300"
                                                        height="300"
                                                    >
                                                        <image
                                                            href={
                                                                seasonsData[activeIndex]?.textureImg
                                                            } // 👈 여기서 배열의 이미지 props 사용
                                                            x="0"
                                                            y="0"
                                                            width="300"
                                                            height="300"
                                                        />
                                                    </pattern>
                                                </defs>

                                                <path
                                                    fill="url(#wavePattern)" // 👈 여기서 패턴으로 채움
                                                    className="waveShape"
                                                    d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                                                />
                                                {/* <path
                                                    fill="#04ACFF"
                                                    className="waveShape"
                                                    d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                                                /> */}
                                            </svg>
                                        </div>
                                    </div>
                                    <img className="pong" src="/images/Main/Kpong.png" alt="" />
                                </li>
                                <li className="bgTxt right" style={{ color: textColor }}>
                                    <img src={titleImg} alt="" />
                                </li>
                            </ul>
                            <h3 className="desc">
                                {desc.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h3>
                            <button className="cta" style={{ '--boxColor': boxColor }}>
                                <span style={{ color: boxTxtColor }}>제품 보러가기</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </SwiperSlide>
                    )
                )}
                <div
                    className="swiper-pagination"
                    style={{ '--bgColor': seasonsData[activeIndex]?.boxTxtColor || '#ccc' }}
                ></div>
            </Swiper>
        </KConStyle>
    );
};

export default Kcontents;
