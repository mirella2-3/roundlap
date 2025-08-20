import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const instaImages = [
    '/images/Main/instaImg0.png',
    '/images/Main/instaImg1.png',
    '/images/Main/instaImg2.png',
    '/images/Main/instaImg3.png',
    '/images/Main/instaImg4.png',
    '/images/Main/instaImg5.png',
    '/images/Main/instaImg6.png',
    '/images/Main/instaImg7.png',
];

const buttonImages = [
    '/images/Main/instagram_image.png',
    '/images/Main/instagram_video.png',
    '/images/Main/instagram_image.png',
    '/images/Main/instagram_image.png',
    '/images/Main/instagram_image.png',
    '/images/Main/instagram_video.png',
    '/images/Main/instagram_video.png',
    '/images/Main/instagram_image.png',
];

const InstaSlider = () => {
    const sliderRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const items = slider.children;
        const originalCount = items.length;

        // 처음에 원본 아이템 복제해서 끝에 붙임
        for (let i = 0; i < originalCount; i++) {
            const clone = items[i].cloneNode(true);
            slider.appendChild(clone);
        }

        const itemWidth = items[0].offsetWidth + 30; // margin 포함
        const totalCount = slider.children.length;
        slider.style.width = `${itemWidth * totalCount}px`;

        // 애니메이션 타임라인 생성
        tl.current = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

        tl.current.to(slider, {
            x: -itemWidth * originalCount,
            duration: 90,
            onComplete: () => {
                gsap.set(slider, { x: 0 }); // 위치 리셋
            },
        });

        // 마우스 이벤트로 정지/재생 제어 (필요하면)
        const handleEnter = () => tl.current.pause();
        const handleLeave = () => tl.current.resume();

        slider.addEventListener('mouseenter', handleEnter);
        slider.addEventListener('mouseleave', handleLeave);

        return () => {
            tl.current.kill();
            slider.removeEventListener('mouseenter', handleEnter);
            slider.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <div id="box" style={{ overflow: 'hidden', width: '100%', maxWidth: '2735px' }}>
            <ul
                ref={sliderRef}
                style={{
                    listStyle: 'none',
                    userSelect: 'none',
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <li key={num}>
                        <img src={instaImages[num - 1]} alt={`instaImages-${num}`} />
                        <img
                            className="buttonImage"
                            src={buttonImages[num - 1]}
                            alt={`buttonImages-${num}`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InstaSlider;
//
