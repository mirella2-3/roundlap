import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { BackgroundImage, BackgroundWrapper, ContentStyle3 } from './style';
import Button from '../../ui/Pagination';

const MainProductLine = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const slides = [
        {
            img: 'MainCon2.png',
            texts: [
                {
                    index: 3,
                    id: '04',
                    title: '약콩 판테놀',
                    desc: '영양 가득한 약콩 추출물과 보습의 대명사 판테놀이 만나 거칠어진 피부 장벽을 튼튼하게 보호하고,쫀쫀한 탄력을 채워줍니다.',
                },
                {
                    index: 0,
                    id: '01',
                    title: '1025 독도',
                    desc: '우리 땅 독도에서 전해온 청정 에너지 미네랄 가득한 해양심층수가 자극 받은 피부를 부드럽게 진정시키고, 자연의 깊은 힘으로 균형을 되찾아줍니다.',
                },
                {
                    index: 1,
                    id: '02',
                    title: '자작나무 수분',
                    desc: '백두대간 자작나무 수액을 담아 건조한 피부에 촘촘한 수분을 채워요. 가볍지만 깊은 보습으로 맑고 촉촉한 피부 결을 완성합니다.',
                },
            ],
        },
        {
            img: 'MainCon2-2.png',
            texts: [
                {
                    index: 0,
                    id: '01',
                    title: '1025 독도',
                    desc: '우리 땅 독도에서 전해온 청정 에너지 미네랄 가득한 해양심층수가 자극 받은 피부를 부드럽게 진정시키고, 자연의 깊은 힘으로 균형을 되찾아줍니다.',
                },
                {
                    index: 1,
                    id: '02',
                    title: '자작나무 수분',
                    desc: '백두대간 자작나무 수액을 담아 건조한 피부에 촘촘한 수분을 채워요. 가볍지만 깊은 보습으로 맑고 촉촉한 피부 결을 완성합니다.',
                },
                {
                    index: 2,
                    id: '03',
                    title: '소나무 진정 시카',
                    desc: '청정 소나무잎과 울릉도 해풍에서 얻은 진정 에너지로 붉고 민감한 피부를 부드럽게 차분히 가라앉히고, 센텔라아시아티카와 시너지로 더 강력한 진정을 선사합니다.',
                },
            ],
        },
        {
            img: 'MainCon2-3.png',
            texts: [
                {
                    index: 1,
                    id: '02',
                    title: '자작나무 수분',
                    desc: '백두대간 자작나무 수액을 담아 건조한 피부에 촘촘한 수분을 채워요. 가볍지만 깊은 보습으로 맑고 촉촉한 피부 결을 완성합니다.',
                },
                {
                    index: 2,
                    id: '03',
                    title: '소나무 진정 시카',
                    desc: '청정 소나무잎과 울릉도 해풍에서 얻은 진정 에너지로 붉고 민감한 피부를 부드럽게 차분히 가라앉히고, 센텔라아시아티카와 시너지로 더 강력한 진정을 선사합니다.',
                },
                {
                    index: 3,
                    id: '04',
                    title: '약콩 판테놀',
                    desc: '영양 가득한 약콩 추출물과 보습의 대명사 판테놀이 만나 거칠어진 피부 장벽을 튼튼하게 보호하고, 쫀쫀한 탄력을 채워줍니다.',
                },
            ],
        },
        {
            img: 'MainCon2-4.png',
            texts: [
                {
                    index: 2,
                    id: '03',
                    title: '소나무 진정 시카',
                    desc: '청정 소나무잎과 울릉도 해풍에서 얻은 진정 에너지로 붉고 민감한 피부를 부드럽게 차분히 가라앉히고, 센텔라아시아티카와 시너지로 더 강력한 진정을 선사합니다.',
                },
                {
                    index: 3,
                    id: '04',
                    title: '약콩 판테놀',
                    desc: '영양 가득한 약콩 추출물과 보습의 대명사 판테놀이 만나 거칠어진 피부 장벽을 튼튼하게 보호하고, 쫀쫀한 탄력을 채워줍니다.',
                },
                {
                    index: 0,
                    id: '01',
                    title: '1025 독도',
                    desc: '우리 땅 독도에서 전해온 청정 에너지 미네랄 가득한 해양심층수가 자극 받은 피부를 부드럽게 진정시키고, 자연의 깊은 힘으로 균형을 되찾아줍니다.',
                },
            ],
        },
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPrevIndex(activeIndex);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [activeIndex]);

    return (
        <ContentStyle3 style={{ position: 'relative', overflow: 'hidden' }}>
            <h2>PRODUCT LINE</h2>

            <BackgroundWrapper>
                <BackgroundImage
                    image={slides[prevIndex].img}
                    isActive={prevIndex !== activeIndex}
                />
                <BackgroundImage image={slides[activeIndex].img} isActive={true} />
            </BackgroundWrapper>

            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
                loop
                onSlideChange={handleSlideChange}
                style={{ position: 'relative', zIndex: 2 }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.img}>
                        <div className="text-wrapper">
                            {slide.texts.map((item) => {
                                const isActive = item.index === activeIndex;

                                return (
                                    <div
                                        key={item.id}
                                        className={`text-item ${isActive ? 'active' : 'inactive'}`}
                                        style={{
                                            color: isActive ? 'white' : 'gray',
                                            transition: 'none',
                                            opacity: 1,
                                        }}
                                    >
                                        <strong>{item.id}</strong>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <Button isActive={isActive} />
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContentStyle3>
    );
};

export default MainProductLine;
