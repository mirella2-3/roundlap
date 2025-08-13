import NoticeSearch from '../../components/notice/NoticeSearch';
import Pagination from '../../components/pagination';
import { FaqStyle } from './style';

const Faq = () => {
    return (
        <FaqStyle>
            <div className="inner">
                <h2>FAQ</h2>

                <NoticeSearch />

                <Pagination />
            </div>
        </FaqStyle>
    );
};

export default Faq;
