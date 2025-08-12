import NoticeList from '../../components/notice/NoticeList';
import Pagination from '../../components/pagination';
import { NociteStyle } from './style';

const Notice = () => {
    return (
        <NociteStyle>
            <div className="inner">
                <h2>NOTICE</h2>

                <NoticeList />
                <Pagination />
            </div>
        </NociteStyle>
    );
};

export default Notice;
