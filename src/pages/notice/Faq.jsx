import FaqList from '../../components/faq/FaqList';
import FaqSearch from '../../components/faq/FaqSearch';
import Pagination from '../../components/pagination';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { FaqStyle } from './style';

const Faq = () => {
    return (
        <>
        
            <ScrollBtns />
            <FaqStyle>
                <div className="inner">
                    <h2>FAQ</h2>

                    <FaqSearch />
                    <FaqList />
                    <Pagination />
                </div>
            </FaqStyle>
        </>
    );
};

export default Faq;
