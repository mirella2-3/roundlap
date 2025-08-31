import { useDispatch, useSelector } from 'react-redux';
import { FaqListStyle } from './style';
import FaqItem from './FaqItem';
import { useEffect, useState } from 'react';
import { paginationActions } from '../../store/modules/paginationSlice';
import { faqActions } from '../../store/modules/faqSlice';

const FaqList = () => {
    const { faqsF } = useSelector((state) => state.faq);
    // const { pageData, perPage, currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state.pagination);
    // const startIdx = (currentPage - 1) * perPage;
    // const endIdx = startIdx + perPage;
    // const currentFaqs = pageData.slice(startIdx, endIdx);

    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        const faqsNew = faqsF.map((faq) => ({ ...faq, isOpen: false }));
        setFaqList(faqsNew);
        dispatch(paginationActions.setData(faqsNew));
    }, [faqsF]);

    useEffect(() => {
        dispatch(paginationActions.setCurrentPage(1));
        dispatch(faqActions.clearSearchResults());
    }, [currentPage, dispatch]);

    const onClick = (id) => {
        setFaqList((item) =>
            item.map((faq) => ({
                ...faq,
                isOpen: faq.id === id ? !faq.isOpen : false,
            }))
        );
    };

    return (
        <FaqListStyle>
            {faqList.map((faq) => (
                <FaqItem key={faq.id} faq={faq} onClick={() => onClick(faq.id)} />
            ))}
        </FaqListStyle>
    );
};

export default FaqList;
