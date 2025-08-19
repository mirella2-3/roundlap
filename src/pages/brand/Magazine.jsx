import MegazinList from '../../components/megazine/MegazinList';
import MegazinVisual from '../../components/megazine/MegazinVisual';
import { MagazineStyle } from './style';

const Magazine = () => {
    return (
        <MagazineStyle>
            <div className="inner">
                <MegazinVisual />
                <MegazinList />
            </div>
        </MagazineStyle>
    );
};

export default Magazine;
