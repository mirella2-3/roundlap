import React, { useState, useEffect, useRef } from 'react';
import { VisualStyle } from './style';

const articlesData = [
    {
        id: 1,
        left: {
            imgUrl: '/images/Main/Left0.png',
            title: '클린하고 \n산뜻한 \n데일리 필수템',
            subtext: '깨끗한 성분에 산뜻한 사용감까지, \n 매일 손이 가는 필수 스킨케어',
        },
        right: {
            imgUrl: '/images/Main/Right0.png',
            alt: 'Main background',
        },
    },
    {
        id: 2,
        left: {
            id: '03',
            imgUrl: '/images/Main/Left1.png',
            title: '거칠어진 피부 결 \n한 장으로 매끈하게',
            subtext: '자극없는 부드러운 비건 인증원단으로 \n민감한 피부도 순하게 사용',
        },
        right: {
            imgUrl: '/images/Main/Right1.png',
            alt: 'Main background',
        },
    },
    {
        id: 3,
        left: {
            imgUrl: '/images/Main/Left2.png',
            title: '피부가 반응하는 \n산뜻한 촉촉함',
            subtext: '피부에 닿는 순간 느껴지는 산뜻함, 촉촉함이 하루 종일 이어져요!',
        },
        right: {
            imgUrl: '/images/Main/Right2.png',
            alt: 'Main background',
        },
    },
    {
        id: 4,
        left: {
            imgUrl: '/images/Main/Left3.png',
            title: '정선 약콩의 영양을 담아\n더욱 진한 보습감',
            subtext: '단백질, 비타민B 등 영양이 풍부하여 진한 보습감을 선사',
        },
        right: {
            imgUrl: '/images/Main/Right3.png',
            alt: 'Main background',
        },
    },
];

const MainVisual = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState(null); // 'next' or 'prev'

    const isAnimating = useRef(false);
    const totalSlides = articlesData.length;

    const goToSlide = (index, dir) => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setAnimating(true);
        setDirection(dir);
        setPrevIndex(visibleIndex);
        setVisibleIndex(index);
        // window.location.hash = `slide${index + 1}`;
    };

    const nextSlide = () => {
        const nextIndex = (visibleIndex + 1) % totalSlides;
        goToSlide(nextIndex, 'next');
    };

    const prevSlide = () => {
        const prevIdx = (visibleIndex - 1 + totalSlides) % totalSlides;
        goToSlide(prevIdx, 'prev');
    };

    const handleAnimationEnd = () => {
        isAnimating.current = false;
        setAnimating(false);
        setDirection(null);
        setPrevIndex(null);
    };

    // useEffect(() => {
    //     const handleWheel = (event) => {
    //         if (isAnimating.current) return;
    //         if (event.deltaY < 0) {
    //             prevSlide();
    //         } else {
    //             nextSlide();
    //         }
    //     };

    //     window.addEventListener('wheel', handleWheel, { passive: true });
    //     return () => window.removeEventListener('wheel', handleWheel);
    // }, [visibleIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5초마다 넘어감 (원하는 시간으로 조절)

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
    }, [visibleIndex]);

    return (
        <VisualStyle>
            <main>
                {articlesData.map((item, index) => {
                    let leftClass = '';
                    let rightClass = '';
                    let visibleClass = '';

                    if (index === visibleIndex) {
                        visibleClass = 'visible';

                        if (animating) {
                            if (direction === 'next') {
                                leftClass = 'left-slide-in-down';
                                rightClass = 'right-slide-in-up';
                            } else if (direction === 'prev') {
                                leftClass = 'left-slide-in-up';
                                rightClass = 'right-slide-in-down';
                            }
                        }
                    } else if (index === prevIndex) {
                        if (animating) {
                            if (direction === 'next') {
                                leftClass = 'left-slide-out-down';
                                rightClass = 'right-slide-out-up';
                            } else if (direction === 'prev') {
                                leftClass = 'left-slide-out-up';
                                rightClass = 'right-slide-out-down';
                            }
                        }
                    } else {
                        leftClass = '';
                        rightClass = '';
                        visibleClass = '';
                    }

                    return (
                        <article key={index} className={visibleClass}>
                            <div
                                className={`left ${leftClass}`}
                                style={{ backgroundImage: `url(${item.left.imgUrl})` }}
                                onAnimationEnd={handleAnimationEnd}
                            >
                                <div className={`textBox ${index >= 2 ? 'centerText' : ''}`}>
                                    <h2>
                                        {item.left.title?.split('\n').map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h2>

                                    <strong>
                                        {item.left.subtext?.split('\n').map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </strong>
                                </div>
                            </div>

                            <div
                                className={`right ${rightClass}`}
                                style={{ backgroundImage: `url(${item.right.imgUrl})` }}
                                onAnimationEnd={handleAnimationEnd}
                            ></div>
                        </article>
                    );
                })}
            </main>
            <nav className="pagination">
                {articlesData.map((item, idx) => {
                    const number = item.id.toString().padStart(2, '0');

                    return (
                        <button
                            key={idx}
                            className={idx === visibleIndex ? 'active' : ''}
                            onClick={() => {
                                if (idx !== visibleIndex) {
                                    const dir = idx > visibleIndex ? 'next' : 'prev';
                                    goToSlide(idx, dir);
                                }
                            }}
                            aria-label={`Go to slide ${number}`}
                        >
                            {number}
                        </button>
                    );
                })}
            </nav>
        </VisualStyle>
    );
};

export default MainVisual;
