import { VideoStyle } from './style';

import React, { useEffect, useState } from 'react';

const Brand_Video = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadeStart = 500;
            const fadeEnd = 1000;
            let newOpacity = 1;

            if (scrollY > fadeStart) {
                newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
                newOpacity = Math.max(newOpacity, 0); // 최소 0까지
            }

            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <VideoStyle style={{ opacity }}>
                <video src="/videos/video1.mp4" autoPlay muted loop playsInline />
            </VideoStyle>
        </>
    );
};

export default Brand_Video;
