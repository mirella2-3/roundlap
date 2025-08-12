import { Con3Style } from './style';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brand_Con3 = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.identity li');

        gsap.set(items, {
            opacity: 0,
            y: 50,
        });

        ScrollTrigger.create({
            trigger: '.scrollTrigger',
            start: 'top 50%',
            onEnter: () => {
                const startDelay = 1;
                items.forEach((el, i) => {
                    gsap.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: 2,
                        delay: startDelay + i * 1,
                        ease: 'power1.out',
                        marker: true,
                    });
                });
            },
        });
    }, []);
    return (
        <Con3Style className="scrollTrigger">
            <ul className="top_menu">
                <li>깨끗한 원료를 선별하다</li>
                <li>피부를 고민하다</li>
                <li className="on">더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>AIM FOR</span>
                <span>BETTER VALUE</span>
            </div>
            <div className="inner">
                <h3>세상을 더 아름답게 만드는 가치 있는 발걸음</h3>
                <ul className="identity">
                    <li className="item1">
                        <strong>RECYCLABLE</strong>
                        <span>
                            재활용이 가능한 <strong>종이 포장재</strong> 사용
                        </span>
                    </li>
                    <li className="item2">
                        <strong>ECO-FRIENDLY</strong>
                        <span>
                            자연을 생각한 <strong>친환경 소이잉크</strong> 인쇄
                        </span>
                    </li>
                    <li className="item3">
                        <strong>COMMUNITY</strong>
                        <span>
                            이웃을 향한 <strong>따뜻한 나눔</strong> 활동
                        </span>
                    </li>
                </ul>
            </div>
        </Con3Style>
    );
};

export default Brand_Con3;
