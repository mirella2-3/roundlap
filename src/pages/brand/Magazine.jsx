import MegazinList from '../../components/megazine/MegazinList';
import MegazinVisual from '../../components/megazine/MegazinVisual';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { MagazineStyle } from './style';

const Magazine = () => {
    return (
        <>
            <ScrollBtns />
            <MagazineStyle>
                <div className="inner">
                    <MegazinVisual />
                    <MegazinList />
                </div>
            </MagazineStyle>
        </>
    );
};

export default Magazine;
