import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IndexStyle } from './style';

gsap.registerPlugin(ScrollTrigger);

const Brand_Index = () => {
    const sectionsRef = useRef([]);
    const txtboxRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const elements = sectionsRef.current.filter(Boolean);

            gsap.fromTo(
                elements,
                { x: 170, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.3, // 필요시 1.5 등으로 조절
                    scrollTrigger: {
                        trigger: txtboxRef.current, // .inner가 뷰포트에 들어오면
                        start: 'top 80%',
                        toggleActions: 'restart none restart none', // 내려갈때/올라올때마다 다시 재생
                        markers: false,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <IndexStyle>
            <div className="inner" ref={txtboxRef}>
                <section className="first" ref={(el) => (sectionsRef.current[0] = el)}>
                    <h1>01</h1>
                    <strong>깨끗한 원료를 선별하다</strong>
                    <div>
                        <span>라운드랩은 자연 그대로의 깨끗한 원료를 사용하여</span>
                        <span>피부에 이로운 화장품을 만듭니다.</span>
                    </div>
                </section>

                <section className="second" ref={(el) => (sectionsRef.current[1] = el)}>
                    <h1>02</h1>
                    <strong>피부를 고민하다</strong>
                    <div>
                        <span>라운드랩은 꼭 필요한 성분만이 온전히 닿도록,</span>
                        <span>피부가 진짜 필요로 하는 것만을 고민합니다.</span>
                    </div>
                </section>

                <section className="third" ref={(el) => (sectionsRef.current[2] = el)}>
                    <h1>03</h1>
                    <strong>더 나은 가치를 향하다</strong>
                    <div>
                        <span>라운드랩은 우리가 살아가는 세상을 더 아름답게 만드는</span>
                        <span>가치 있는 발걸음을 내딛고 있습니다.</span>
                    </div>
                </section>
            </div>
        </IndexStyle>
    );
};

export default Brand_Index;
