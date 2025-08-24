import { mainSetItemData } from '../../assets/api/mainSetItemData';
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';

const SetItemSwiper = () => {
    const [direction, setDirection] = useState('horizontal');

    // 윈도우 크기에 따라 방향 바꾸기
    useEffect(() => {
        function updateDirection() {
            const newDirection = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
            setDirection(newDirection);
        }

        updateDirection(); // 초기 실행
        window.addEventListener('resize', updateDirection);
        return () => window.removeEventListener('resize', updateDirection);
    }, []);

    return (
        <div className="wrap">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={200}
                direction={direction}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                style={{ width: '100%', height: '100%' }}
                loop={true}
            >
                {mainSetItemData.map(({ id, title, imgUrl }) => (
                    <SwiperSlide key={id} className="slide-item">
                        <div className="wish-inner">
                            <img src={imgUrl} alt={title} />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </div>
                        <span className="title">{title}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev">
                <MdKeyboardArrowLeft size={40} />
            </button>
            <button className="swiper-button-next">
                <MdKeyboardArrowRight size={40} />
            </button>
        </div>
    );
};
export default SetItemSwiper;
