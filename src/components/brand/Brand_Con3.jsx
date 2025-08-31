import { Con3Style } from './style';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brand_Con3 = ({ containerAnimation }) => {
    const brandCon3Ref = useRef(null);

    useEffect(() => {
        if (!brandCon3Ref.current) return;

        const forTxt = brandCon3Ref.current.querySelectorAll('.item');
        const baseTrigger = {
            trigger: brandCon3Ref.current,
            ...(containerAnimation ? { containerAnimation } : {}),
            start: 'left center',
            toggleActions: 'restart none restart none',
            markers: false,
        };

        gsap.fromTo(
            forTxt,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 1,
                scrollTrigger: {
                    baseTrigger,
                    // trigger: brandCon3Ref.current,
                    // start: 'top center',
                    // toggleActions: 'play none none none',
                    // markers: false,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <Con3Style>
            <ul className="top_menu">
                <li>깨끗한 원료를 선별하다</li>
                <li>피부를 고민하다</li>
                <li className="on">더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox" ref={brandCon3Ref}>
                <span>AIM FOR</span>
                <span>BETTER VALUE</span>
            </div>
            <div className="inner">
                <h3>세상을 더 아름답게 만드는 가치 있는 발걸음</h3>
                <div ref={brandCon3Ref}>
                    <ul className="identity">
                        <li className="item item1">
                            <strong>RECYCLABLE</strong>
                            <span>
                                재활용이 가능한 <strong>종이 포장재</strong> 사용
                            </span>
                        </li>
                        <li className="item item2">
                            <strong>ECO-FRIENDLY</strong>
                            <span>
                                자연을 생각한 <strong>친환경 소이잉크</strong> 인쇄
                            </span>
                        </li>
                        <li className="item item3">
                            <strong>COMMUNITY</strong>
                            <span>
                                이웃을 향한 <strong>따뜻한 나눔</strong> 활동
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Con3Style>
    );
};

export default Brand_Con3;
