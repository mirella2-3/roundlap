import {
    BestItem,
    BestReview,
    DiscountItem,
    Kcontents,
    MainMagazine,
    MainProductLine,
    MainVisual,
    SetItem,
    Slogan,
    Story,
} from '../../components';

import { MainStyle } from './style';

const Main = () => {
    return (
        <>
            <MainStyle id="main_wrap">
                <MainVisual />
                <BestItem />
                <Slogan />
                <MainProductLine />
                <Kcontents />
                <SetItem />
                <DiscountItem />
                <MainMagazine />
                <Story />
                <BestReview />
            </MainStyle>
        </>
    );
};

export default Main;
