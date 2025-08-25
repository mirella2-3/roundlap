import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Con1Style } from './style';

gsap.registerPlugin(ScrollTrigger);

const Brand_Con1 = () => {
    const brandCon1Ref = useRef(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(null);
    const imageList = [
        './images/Brand/brand_dongbaek.png',
        './images/Brand/brand_oats.png',
        './images/Brand/brand_water.png',
        './images/Brand/brand_jajack.png',
        './images/Brand/brand_sonamu.png',
        './images/Brand/brand_yakkong.png',
        './images/Brand/brand_vita.png',
    ];

    useLayoutEffect(() => {
        if (!brandCon1Ref.current) return;
        const ctx = gsap.context(() => {
            const spans = brandCon1Ref.current.querySelectorAll('span');
            gsap.fromTo(
                spans,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 1,
                    scrollTrigger: {
                        trigger: brandCon1Ref.current,
                        start: 'top center', // ← 'left center' 대신 유효한 값
                        toggleActions: 'restart none restart none',
                        markers: false,
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    // 자동 슬라이드
    useLayoutEffect(() => {
        const id = setInterval(() => {
            setPrevIdx((p) => (p === null ? 0 : (p + 1) % imageList.length));
            setCurrentIdx((prev) => (prev + 1) % imageList.length);
        }, 3000);
        return () => clearInterval(id);
    }, [imageList.length]);

    const imgRefs = useRef([]);
    useLayoutEffect(() => {
        if (prevIdx !== null && imgRefs.current[prevIdx]) {
            gsap.to(imgRefs.current[prevIdx], { opacity: 0, duration: 1 });
        }
        if (imgRefs.current[currentIdx]) {
            gsap.to(imgRefs.current[currentIdx], { opacity: 1, duration: 1 });
        }
    }, [currentIdx, prevIdx]);

    const colors = ['#ffa39f', '#0087e0', '#709fd2', '#0087e0', '#1e8e67', '#ff8e41', '#ffb006'];

    return (
        <Con1Style>
            <ul className="top_menu">
                <li className="on">깨끗한 원료를 선별하다</li>
                <li>피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox" ref={brandCon1Ref}>
                <span>SELECT</span>
                <span>CLEAN</span>
                <span>RAW MATERIALS</span>
            </div>
            <div className="wrap">
                <div className="left" style={{ position: 'relative', overflow: 'hidden' }}>
                    {imageList.map((src, i) => (
                        <img
                            key={i}
                            ref={(el) => (imgRefs.current[i] = el)}
                            src={src}
                            alt={`Brand Visual ${i}`}
                            style={{ opacity: i === currentIdx ? 1 : 0 }}
                        />
                    ))}
                </div>
                <div className="right">
                    <div className="txts">
                        <span>사람의 손이 닿지 않는 깊은 바다의</span>
                        <strong>울릉도 해양심층수</strong>
                    </div>
                    <div className="scroll-section">
                        <div className="sticky-container">
                            <svg
                                className="svg"
                                width={700}
                                height={700}
                                viewBox="0 0 700 700"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ animation: 'spin 30s linear infinite' }}
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="
                      M 350,350
                      m -300,0
                      a 300,300 0 1,1 600,0
                      a 300,300 0 1,1 -600,0
                    "
                                    />
                                </defs>
                                <text className="animate">
                                    <textPath href="#circlePath" startOffset={0}>
                                        {[
                                            'C A M E L L I A',
                                            'O A T S',
                                            'D O K D O',
                                            'B I R C H',
                                            'P I N E',
                                            'S O Y B E A N',
                                            'V I T A',
                                        ].map((word, i) => (
                                            <tspan
                                                key={i}
                                                className="word"
                                                dx="50"
                                                style={{
                                                    fill: currentIdx === i ? colors[i] : '#d6d6d6',
                                                    cursor: 'default',
                                                    transition: 'fill 0.5s ease',
                                                }}
                                            >
                                                {word}
                                            </tspan>
                                        ))}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Con1Style>
    );
};

export default Brand_Con1;
