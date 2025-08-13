import { useDispatch, useSelector } from 'react-redux';
import { FaqListStyle, NoticeListStyle } from './style';
import NoticeItem from './NoticeItem';
import { useEffect } from 'react';
import { paginationActions } from '../../store/modules/paginationSlice';

const FaqList = () => {
    const { notices } = useSelector((state) => state.notice);
    const { pageData, perPage, currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentNotices = pageData.slice(startIdx, endIdx);

    useEffect(() => {
        dispatch(paginationActions.setData(notices));
    }, [notices]);

    return <FaqListStyle></FaqListStyle>;
};

export default FaqList;
