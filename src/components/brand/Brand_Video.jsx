import { VideoStyle } from './style';

import React, { useEffect, useState } from 'react';

const Brand_Video = () => {
    const [opacity, setOpacity] = useState(1);
    const [displayNone, setDisplayNone] = useState(false);

    useEffect(() => {
        const fadeStart = 500;
        const fadeEnd = 1500;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= fadeStart && scrollY <= fadeEnd) {
                const ratio = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                const newOpacity = Math.max(1 - ratio, 0);
                setOpacity(newOpacity);
                setDisplayNone(false); // 다시 보이게
            }

            // ✨ fadeEnd 이후 완전히 사라지고 display none 처리
            if (scrollY > fadeEnd) {
                setOpacity(0);
                setTimeout(() => {
                    setDisplayNone(true);
                }, 300); // opacity transition 끝나고 숨김
            }

            // ✨ fadeStart 이전으로 올라가면 다시 보이게
            if (scrollY < fadeStart) {
                setOpacity(1);
                setDisplayNone(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <VideoStyle className={displayNone ? 'hidden' : 'visible'} style={{ opacity }}>
                <video src="/videos/video1.mp4" autoPlay muted loop playsInline />
            </VideoStyle>
        </>
    );
};

export default Brand_Video;
