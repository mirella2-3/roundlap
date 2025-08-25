import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Con2Style } from './style';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Brand_Con2 = ({ containerAnimation }) => {
    const brandCon2Ref = useRef(null);

    useLayoutEffect(() => {
        if (!brandCon2Ref.current) return;

        const ctx = gsap.context(() => {
            const strongEl = brandCon2Ref.current.querySelector('strong');
            const divEl = brandCon2Ref.current.querySelector('div');

            // 공통 트리거 설정 (가로 스크롤 연결: containerAnimation)
            const baseTrigger = {
                trigger: brandCon2Ref.current,
                // 가로 스크롤 타임라인과 동기화
                ...(containerAnimation ? { containerAnimation } : {}),
                // Brand_Con2 패널의 "왼쪽"이 뷰포트 "센터"에 닿을 때
                start: 'left center',
                toggleActions: 'restart none restart none',
                markers: false,
            };

            gsap.fromTo(
                strongEl,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.6,
                    ease: 'power3.out',
                    scrollTrigger: baseTrigger,
                }
            );

            gsap.fromTo(
                divEl,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    delay: 0.6, // strong 이후 자연스럽게
                    ease: 'power3.out',
                    scrollTrigger: baseTrigger,
                }
            );
        });

        return () => ctx.revert();
    }, [containerAnimation]);

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
