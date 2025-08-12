import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Con1Style } from './style';

gsap.registerPlugin(ScrollTrigger);

const Brand_Con1 = ({ scrollPercent }) => {
    // const ref = useRef(null);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from(ref.current, {
    //             opacity: 0,
    //             y: 50,
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: ref.current,
    //                 start: 'left center',
    //                 end: 'right center',
    //                 scrub: true,
    //             },
    //         });
    //     }, ref);

    //     return () => ctx.revert();
    // }, []);

    return (
        <Con1Style>
            <ul className="top_menu">
                <li className="on">깨끗한 원료를 선별하다</li>
                <li>피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>SELECT</span>
                <span>CLEAN</span>
                <span>RAW MATERIALS</span>
            </div>
            <div className="wrap">
                <div className="left">
                    {/* 스크롤하면 이미지변경 */}
                    <img src="./images/brand_water.png" alt="" />
                </div>
                <div className="right">
                    {/* 스크롤하면 텍스트 돌면서 색상변경 */}
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
                                {/* <text className={animate ? 'colorText' : ''}> */}
                                <text className="animate">
                                    <textPath href="#circlePath" startOffset={`${scrollPercent}%`}>
                                        <tspan className="word" dx="50">
                                            C A M E L L I A
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            O A T S
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            D O K D O
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            B I R C H
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            P I N E
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            S O Y B E A N
                                        </tspan>
                                        <tspan className="word" dx="50">
                                            V I T A
                                        </tspan>
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
