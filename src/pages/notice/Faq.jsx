import FaqList from '../../components/faq/FaqList';
import FaqSearch from '../../components/faq/FaqSearch';
import Pagination from '../../components/pagination';
import { FaqStyle } from './style';

const Faq = () => {
    return (
        <FaqStyle>
            <div className="inner">
                <h2>FAQ</h2>

                <FaqSearch />
                <FaqList />
                <Pagination />
            </div>
        </FaqStyle>
    );
};

export default Faq;
