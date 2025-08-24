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

// import { VideoStyle } from './style';

// import React, { useEffect, useState } from 'react';

// const Brand_Video = () => {
//     const [opacity, setOpacity] = useState(1);
//     const [displayNone, setDisplayNone] = useState(false);

//     useEffect(() => {
//         const fadeStart = 500;
//         const fadeEnd = 2000;
//         const extraShowEnd = fadeEnd + 500;

//         const handleScroll = () => {
//             const scrollY = window.scrollY;

//             if (scrollY >= fadeStart && scrollY <= fadeEnd) {
//                 const ratio = (scrollY - fadeStart) / (fadeEnd - fadeStart);
//                 const newOpacity = Math.max(1 - ratio, 0);
//                 setOpacity(newOpacity);
//                 setDisplayNone(false);
//             }

//             if (scrollY > fadeEnd) {
//                 setOpacity(0);
//                 setTimeout(() => {
//                     setDisplayNone(true);
//                 }, 300);
//             }

//             if (scrollY < fadeStart) {
//                 setOpacity(1);
//                 setDisplayNone(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <>
//             <VideoStyle className={displayNone ? 'hidden' : 'visible'} style={{ opacity }}>
//                 <video src="/videos/video1.mp4" autoPlay muted loop playsInline />
//             </VideoStyle>
//         </>
//     );
// };

// export default Brand_Video;
