import React, { useState, useEffect, useRef } from 'react';
import { SloganStyle } from './style';

const Slogan = () => {
    const [inView, setInView] = useState(false);
    const innerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!innerRef.current) return;
            const rect = innerRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                // 뷰포트 85% 이내 도달 시
                setInView(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 실행용

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <SloganStyle>
            <div ref={innerRef} className={`inner ${inView ? 'show' : ''}`}>
                <strong>BETTER SKIN, BETTER ROUND</strong>
                <h3>피부와 세상을 변화시키는 매일의 힘, 라운드랩</h3>
                <span>
                    지친 하루의 끝, 나를 웃음 짓게 하는 소소한 행복처럼 삶의 휴식이 필요한 당신에게
                    피부를 위한 다정한 쉬어감을 제안합니다.
                    <br />
                    건강한 원료들이 전하는 따스한 토닥임으로 오늘도 ‘라운드랩’하세요.
                </span>
                <p>
                    <img src="/images/Main/slogan1.png" alt="" />
                </p>
                {/* <video src="/videos/Kwinter.mp4" autoPlay muted loop playsInline></video> */}
            </div>
        </SloganStyle>
    );
};

export default Slogan;
