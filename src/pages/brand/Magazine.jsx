import MagazineList from '../../components/magazine/MagazineList';
import MagazineVisual from '../../components/magazine/MagazineVisual';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { MagazineStyle } from './style';

const Magazine = () => {
    return (
        <>
            <ScrollBtns />
            <MagazineStyle>
                <div className="inner">
                    <MagazineVisual />
                    <MagazineList />
                </div>
            </MagazineStyle>
        </>
    );
};

export default Magazine;
