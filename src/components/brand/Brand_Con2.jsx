/* import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Con2Style } from './style';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Brand_Con2 = () => {
    const sectionsRef = useRef([]);
    const brandCon2Ref = useRef(null);

    useEffect(() => {
        const elements = sectionsRef.current;

        gsap.fromTo(
            elements,
            {
                x: 170,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 3,
                ease: 'ease.out',
                stagger: 1.5, // 순차적으로 등장
                trigger: brandCon2Ref.current,
                start: 'left center',
                toggleActions: 'play none none none',
                markers: false,
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return (
        <Con2Style>
          
            <ul className="top_menu">
                <li>깨끗한 원료를 선별하다</li>
                <li className="on">피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>THOUGHTFUL</span>
                <span>ABOUT</span>
                <span>YOUR SKIN</span>
            </div>
            <div className="txtwrap">
                <strong>" 피부가 원하는 화장품은 따로 있지 않을까? "</strong>
                <span>라운드랩은 건강한 원료가 피부에 온전히 닿길 바라는</span>
                <span>마음으로 복잡하고 무거운 성분은 내려놓고</span>
                <span>
                    <strong>효과를 오롯이 담을 수 있는 제형과 성분</strong>을 고민합니다.
                </span>
            </div>
        </Con2Style>
    );
};

export default Brand_Con2;
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Con2Style } from './style';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Brand_Con2 = () => {
    const sectionsRef = useRef([]);
    const brandCon2Ref = useRef(null);

    useEffect(() => {
        if (!brandCon2Ref.current) return;

        const strongEl = brandCon2Ref.current.querySelector('strong');
        const divEl = brandCon2Ref.current.querySelector('div');

        gsap.fromTo(
            strongEl,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: brandCon2Ref.current,
                    start: 'left center',
                    toggleActions: 'play none none none',
                    markers: false,
                },
            }
        );

        gsap.fromTo(
            divEl,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: 'power3.out',
                delay: 1.5, // strong 애니메이션 뒤에 시작하도록 약간 딜레이
                scrollTrigger: {
                    trigger: brandCon2Ref.current,
                    start: 'left center',
                    toggleActions: 'play none none none',
                    markers: false,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <Con2Style>
            <ul className="top_menu">
                <li>깨끗한 원료를 선별하다</li>
                <li className="on">피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>THOUGHTFUL</span>
                <span>ABOUT</span>
                <span>YOUR SKIN</span>
            </div>
            <div className="txtwrap" ref={brandCon2Ref}>
                <strong>" 피부가 원하는 화장품은 따로 있지 않을까? "</strong>
                <div>
                    <span>라운드랩은 건강한 원료가 피부에 온전히 닿길 바라는</span>
                    <span>마음으로 복잡하고 무거운 성분은 내려놓고</span>
                    <span>
                        <strong>효과를 오롯이 담을 수 있는 제형과 성분</strong>을 고민합니다.
                    </span>
                </div>
            </div>
        </Con2Style>
    );
};

export default Brand_Con2;
