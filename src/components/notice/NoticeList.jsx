import { useDispatch, useSelector } from 'react-redux';
import { NoticeListStyle } from './style';
import NoticeItem from './NoticeItem';
import { useEffect } from 'react';
import { paginationActions } from '../../store/modules/paginationSlice';

const NoticeList = () => {
    const { notices } = useSelector((state) => state.notice);
    const { pageData, perPage, currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentNotices = pageData.slice(startIdx, endIdx);

    useEffect(() => {
        dispatch(paginationActions.setData(notices));
    }, [notices]);

    return (
        <NoticeListStyle>
            <table className="noticeTable">
                <caption>notice</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <tbody>
                    {currentNotices.map((notice) => (
                        <NoticeItem key={notice.id} notice={notice} />
                    ))}
                </tbody>
            </table>
        </NoticeListStyle>
    );
};

export default NoticeList;
