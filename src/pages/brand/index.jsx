import { useEffect, useState } from 'react';
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Brand = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll('.panel');
        const st = ScrollTrigger.create({
            trigger: '#wrap',
            start: 'top top',
            end: () => `+=${window.innerWidth * sections.length}`,
            scrub: true,
            onUpdate: (self) => setScrollPercent(self.progress * 100),
            pin: true,
        });
        return () => st.kill();
    }, []);
    return (
        <BrandStyle>
            <Brand_Video />

            <div className="wrap" id="wrap">
                <Brand_Intro />
                <div className="panel Brand_Index">
                    <Brand_Index />
                </div>
                <div className="panel">
                    <Brand_Con1 scrollPercent={scrollPercent} />
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
