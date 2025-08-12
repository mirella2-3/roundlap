import { useEffect, useRef, useState } from 'react';
import {
    Brand_Con1,
    Brand_Con2,
    Brand_Con3,
    Brand_Index,
    Brand_Intro,
    Brand_Last,
    Brand_Video,
} from '../../components';
import { BrandStyle } from './style';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
    const wrapRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('.panel'); // 패널들 선택

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: wrapRef.current,
                start: 'top top',
                end: () => `+=${window.innerWidth * sections.length - 1}`,
                scrub: 1,
                pin: true,
                // markers: true, // 위치 확인용
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return (
        <BrandStyle>
            <Brand_Video />

            <div className="wrap " id="wrap" ref={wrapRef}>
                <div className="panel">
                    <Brand_Intro />
                </div>

                <div className="panel Brand_Index">
                    <Brand_Index />
                </div>
                <div className="panel">
                    <Brand_Con1 />
                </div>
                <div className="panel">
                    <Brand_Con2 />
                </div>
                <div className="panel">
                    <Brand_Con3 />
                </div>
            </div>
            <Brand_Last />
        </BrandStyle>
    );
};

export default Brand;
