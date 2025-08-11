import React, { useEffect, useRef, useState } from 'react';

import { IntroStyle } from './style';

const Brand_Intro = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 500);

            const targetEl = document.querySelector('.Brand_Index');
            if (targetEl) {
                const targetTop = targetEl.getBoundingClientRect().top + window.scrollY;

                const fadeStart = targetTop - 800;
                const fadeEnd = targetTop - 500;
                const fadeRange = fadeEnd - fadeStart;

                if (scrollY < fadeStart) {
                    setOpacity(1);
                } else if (scrollY > fadeEnd) {
                    setOpacity(0);
                } else {
                    const ratio = (scrollY - fadeStart) / fadeRange;
                    setOpacity(1 - ratio);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (hidden) return null;

    return (
        <IntroStyle
            className={`Brand_Intro ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}
        >
            <div className="txtbox" style={{ opacity }}>
                <h2>피부와 세상을 변화시키는 매일의 힘</h2>
                <p>
                    <img src="./images/Logo_Blue_Big.png" alt="" />
                </p>
                <span className="txt1">
                    지친 하루의 끝, 나를 웃음 짓게 하는 소소한 행복처럼 삶의 휴식이 필요한 당신에게
                    피부를 위한 다정한 쉬어감을 제안합니다.
                </span>
                <span className="txt2">
                    건강한 원료들이 전하는 따스한 토닥임으로 오늘도 ‘라운드랩’하세요.
                </span>
            </div>
        </IntroStyle>
    );
};

export default Brand_Intro;
