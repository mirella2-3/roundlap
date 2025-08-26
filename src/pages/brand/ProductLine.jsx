import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import { PDLINEStyle, ProductlineStyle, SubtextStyle } from './style';

export default function FashionSlider() {
    // 데이터 (필요 시 props로 치환 가능)
    const slides = useMemo(
        () => [
            {
                title: 'DOKDO',
                subText: '사람의 손이 닿지 않는 깊은 바다의 울릉도 해양심층수',
                color: '#00527B',

                img: '/images/productLine/dokdoImg_O.png',
                alt: 'DOKDO',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'BIRCH',
                subText: '선선하고 청량한 인제에서 자라난 자작나무',
                color: '#5D7681',
                img: '/images/productLine/jajakImg_O.png',
                alt: 'BIRCH',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'PINE',
                subText: '해오름의 고장 강원도 양양에서 자라난 소나무',
                color: '#1A280F',
                img: '/images/productLine/pineImg_O.png',
                alt: 'PINE',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'SOYBEAN',
                subText: '새벽이 차갑고 청량한 정선에서 자라난 약콩',
                color: '#2C2C2C',
                img: '/images/productLine/soybeanImg_O.png',
                alt: 'SOYBEAN',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'VITA',
                subText: '강원도 영월의 햇살을 머금은 비타민 나무',
                color: '#B87800',
                img: '/images/productLine/vitaImg_O.png',
                alt: 'VITA',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'CAMELLIA',
                subText: '300년 제주 동백 마을에서 자라난 동백',
                color: '#630400',
                img: '/images/productLine/camelliaImg_O.png',
                alt: 'CAMELLIA',
                sub2Text: 'PRODUCT LINE',
            },
            {
                title: 'OATS',
                subText: '아기의 순수함을 닮은 해남 무농약 귀리',
                color: '#432200',
                img: '/images/productLine/oatsImg_O.png',
                alt: 'OATS',
                sub2Text: 'PRODUCT LINE',
            },
        ],
        []
    );

    const rootRef = useRef(null);
    const swiperRef = useRef(null);

    const [bg, setBg] = useState(slides[0]?.color || '#000');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // 전환 시 튐 방지 (컴포넌트 내부 스코프)
    const freezeNoTransition = useCallback((el) => {
        if (!el) return;
        el.classList.add('fashion-slider-no-transition');
        let raf;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            el.classList.remove('fashion-slider-no-transition');
        });
    }, []);

    const goNext = useCallback(() => {
        if (isAnimating) return;
        swiperRef.current?.slideNext();
    }, [isAnimating]);

    const goPrev = useCallback(() => {
        if (isAnimating) return;
        swiperRef.current?.slidePrev();
    }, [isAnimating]);

    // Swiper 이벤트들 (전역함수 사용하지 않음)
    const onBeforeInit = useCallback(
        (s) => {
            swiperRef.current = s;
            freezeNoTransition(s.el);
        },
        [freezeNoTransition]
    );

    const onInit = useCallback(
        (s) => {
            const initColor =
                s.slides[s.activeIndex]?.getAttribute('data-slide-bg-color') ||
                slides[0]?.color ||
                '#000';
            setBg(initColor);

            // 초기 상태를 transitionEnd와 유사하게 세팅
            const active = s.slides[s.activeIndex];
            if (active) {
                const scaleWrap = active.querySelector('.fashion-slider-scale');
                const img = active.querySelector('img');
                const title = active.querySelector('.fashion-slider-title-text');
                const subText = active.querySelector('.fashion-slider-subText');

                if (scaleWrap) scaleWrap.style.transform = 'scale(1)';
                if (img) {
                    img.style.transitionDuration = '1000ms';
                    img.style.transform = 'scale(1)';
                }
                if (title) {
                    title.style.transition = '1000ms';
                    title.style.color = 'rgba(255,255,255,1)';
                }
                if (subText) {
                    subText.style.transition = 'opacity 0.5s';
                    subText.style.opacity = 0;
                    setTimeout(() => {
                        subText.style.opacity = 1;
                    }, 700);
                }
            }
            setActiveIndex(s.activeIndex);
        },
        [slides]
    );

    const onResize = useCallback(
        (s) => {
            freezeNoTransition(s.el);
        },
        [freezeNoTransition]
    );

    const onTransitionStart = useCallback((s) => {
        const { slides: slideEls, previousIndex, activeIndex: aIdx } = s;
        if (!slideEls?.length) return;

        setIsAnimating(true);

        const active = slideEls[aIdx];
        const prev = slideEls[previousIndex];
        if (!active || !prev) return;

        // 배경색 전환
        const bgColor = active.getAttribute('data-slide-bg-color') || '#000';
        setBg(bgColor);

        // 이전 슬라이드 축소 + 이미지 이동
        const prevScaleWrap = prev.querySelector('.fashion-slider-scale');
        const prevImg = prev.querySelector('img');
        const nextImg = active.querySelector('img');

        if (prevScaleWrap) prevScaleWrap.style.transform = 'scale(0.6)';
        if (prevImg) {
            prevImg.style.transitionDuration = '1000ms';
            prevImg.style.transform = 'scale(1.2)';
        }

        // 이전 타이틀 텍스트 투명화
        const prevTitle = prev.querySelector('.fashion-slider-title-text');
        if (prevTitle) {
            prevTitle.style.transition = '1000ms';
            prevTitle.style.color = 'rgba(255,255,255,0)';
        }

        // 이전 이미지 전환 완료 후, 다음/이전 이미지 이동 모션
        const delta = aIdx - previousIndex;

        const onPrevImgEnd = (ev) => {
            if (!prevImg || ev.target !== prevImg) return;
            prevImg.removeEventListener('transitionend', onPrevImgEnd);

            if (nextImg) {
                nextImg.style.transitionDuration = '1300ms';
                nextImg.style.transform = 'translate3d(0, 0, 0) scale(1.2)';
            }
            if (prevImg) {
                prevImg.style.transitionDuration = '1300ms';
                prevImg.style.transform = `translate3d(${60 * delta}%, 0, 0) scale(1.2)`;
            }
        };

        if (prevImg) prevImg.addEventListener('transitionend', onPrevImgEnd);
    }, []);

    const onTransitionEnd = useCallback((s) => {
        const { slides: slideEls, activeIndex: aIdx } = s;
        const active = slideEls?.[aIdx];
        if (!active) return;

        // 활성 슬라이드 복구
        const scaleWrap = active.querySelector('.fashion-slider-scale');
        const img = active.querySelector('img');
        const title = active.querySelector('.fashion-slider-title-text');

        if (scaleWrap) scaleWrap.style.transform = 'scale(1)';
        if (img) {
            img.style.transitionDuration = '1000ms';
            img.style.transform = 'scale(1)';
        }
        if (title) {
            title.style.transition = '1000ms';
            title.style.color = 'rgba(255,255,255,1)';
        }

        if (img) {
            const onEnd = (ev) => {
                if (ev.target !== img) return;
                img.removeEventListener('transitionend', onEnd);
                setIsAnimating(false);
            };
            img.addEventListener('transitionend', onEnd);
        } else {
            setIsAnimating(false);
        }

        setActiveIndex(aIdx);
    }, []);

    // 배경색을 .swiper 컨테이너에 적용
    useEffect(() => {
        const el = rootRef.current?.querySelector('.swiper');
        if (el) el.style.backgroundColor = bg;
    }, [bg]);

    const isPrevDisabled = isAnimating;
    const isNextDisabled = isAnimating;

    return (
        <ProductlineStyle ref={rootRef}>
            <div className="fashion-slider">
                <div className="productBlock"></div>
                <Swiper
                    modules={[Parallax]}
                    speed={1300}
                    allowTouchMove={false}
                    loop={true}
                    rewind={true}
                    parallax={true}
                    onBeforeInit={onBeforeInit}
                    onInit={onInit}
                    onResize={onResize}
                    onTransitionStart={onTransitionStart}
                    onTransitionEnd={onTransitionEnd}
                    onSwiper={(s) => (swiperRef.current = s)}
                    className="swiper"
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide
                            className="swiper-slide"
                            key={i}
                            data-slide-bg-color={slide.color}
                        >
                            <div className="fashion-slider-title">
                                <div className="fashion-slider-title-text">{slide.title}</div>
                                <SubtextStyle>
                                    <div className="fashion-slider-subText">{slide.subText}</div>
                                </SubtextStyle>
                            </div>

                            <div className="fashion-slider-scale">
                                <img src={slide.img} alt={slide.alt} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <PDLINEStyle>
                    <div className="fashion-slider-sub2Text">
                        <h2>PRODUCT LINE</h2>
                    </div>
                </PDLINEStyle>
                {/* Prev */}
                <button
                    type="button"
                    aria-label="Previous slide"
                    className={`fashion-slider-button-prev fashion-slider-button${
                        isPrevDisabled ? ' fashion-slider-button-disabled' : ''
                    }`}
                    onClick={goPrev}
                    disabled={isPrevDisabled}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                        <g className="fashion-slider-svg-wrap">
                            <g className="fashion-slider-svg-circle-wrap">
                                <circle cx="42" cy="42" r="40"></circle>
                            </g>
                            <path
                                className="fashion-slider-svg-arrow"
                                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                            ></path>
                            <path className="fashion-slider-svg-line" d="M80,0H0"></path>
                        </g>
                    </svg>
                </button>

                {/* Next */}
                <button
                    type="button"
                    aria-label="Next slide"
                    className={`fashion-slider-button-next fashion-slider-button${
                        isNextDisabled ? ' fashion-slider-button-disabled' : ''
                    }`}
                    onClick={goNext}
                    disabled={isNextDisabled}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                        <g className="fashion-slider-svg-wrap">
                            <g className="fashion-slider-svg-circle-wrap">
                                <circle cx="42" cy="42" r="40"></circle>
                            </g>
                            <path
                                className="fashion-slider-svg-arrow"
                                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                            ></path>
                            <path className="fashion-slider-svg-line" d="M80,0H0"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </ProductlineStyle>
    );
}
