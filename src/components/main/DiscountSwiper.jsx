import { mainDiscountData } from '../../assets/api/mainDiscountData';
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';

const DiscountSwiper = () => {
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
                direction={direction}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next-dis',
                    prevEl: '.swiper-button-prev-dis',
                }}
                style={{ width: '100%', height: '100%' }}
                loop={true}
            >
                {mainDiscountData.map(({ id, title, imgUrl, discount }) => (
                    <SwiperSlide key={id}>
                        <div className="wish-inner">
                            <img src={imgUrl} alt={title} />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </div>
                        <span className="title">{title}</span>
                        <p className="discount">{discount}%</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev-dis">
                <MdKeyboardArrowLeft size={40} />
            </button>
            <button className="swiper-button-next-dis">
                <MdKeyboardArrowRight size={40} />
            </button>
        </div>
    );
};
export default DiscountSwiper;
