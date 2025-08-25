import { useLayoutEffect, useRef, useState } from 'react';
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
    const [containerAnim, setContainerAnim] = useState(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.panel');

            const tween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: 'top top',
                    end: () => `+=${window.innerWidth * sections.length}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    // markers: true,
                },
            });

            setContainerAnim(tween); // 👈 자식에게 넘길 애니메이션 저장
        });

        return () => ctx.revert();
    }, []);

    return (
        <BrandStyle>
            <Brand_Video />
            <Brand_Intro />
            <div className="wrap" id="wrap" ref={wrapRef}>
                <div className="panel Brand_Index">
                    <Brand_Index />
                </div>
                <div className="panel">
                    <Brand_Con1 />
                </div>
                <div className="panel">
                    {/* 👇 가로 스크롤 타임라인 전달 */}
                    <Brand_Con2 containerAnimation={containerAnim} />
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
