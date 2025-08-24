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
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';

import { MainStyle } from './style';

const Main = () => {
    return (
        <>
            <ScrollBtns />
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
