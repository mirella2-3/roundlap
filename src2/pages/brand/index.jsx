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

const Brand = () => {
    return (
        <BrandStyle>
            <Brand_Video />
            <Brand_Intro />
            <div className="Brand_Index">
                <Brand_Index />
            </div>

            <Brand_Con1 />

            <Brand_Con2 />
            <Brand_Con3 />
            <Brand_Last />
        </BrandStyle>
    );
};

export default Brand;
