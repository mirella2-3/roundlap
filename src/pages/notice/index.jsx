import NoticeList from '../../components/notice/NoticeList';
import NoticeSearch from '../../components/notice/NoticeSearch';
import Pagination from '../../components/pagination';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { NociteStyle } from './style';

const Notice = () => {
    return (
        <>
            <ScrollBtns />
            <NociteStyle>
                <div className="inner">
                    <h2>NOTICE</h2>

                    <NoticeSearch />
                    <NoticeList />
                    <Pagination />
                </div>
            </NociteStyle>
        </>
    );
};

export default Notice;
