import FaqList from '../../components/faq/FaqList';
import NoticeSearch from '../../components/notice/NoticeSearch';
import Pagination from '../../components/pagination';
import { FaqStyle } from './style';

const Faq = () => {
    return (
        <FaqStyle>
            <div className="inner">
                <h2>FAQ</h2>

                <NoticeSearch />
                <FaqList />
                <Pagination />
            </div>
        </FaqStyle>
    );
};

export default Faq;
