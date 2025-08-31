import { useDispatch } from 'react-redux';
import { NoticeSearchWrap } from './style';
import { useEffect, useState } from 'react';
import { noticeActions } from '../../store/modules/noticeSlice';

const NoticeSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(noticeActions.searchNotice(text));
    };
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    useEffect(() => {
        dispatch(noticeActions.clearSearchResults());
    }, [dispatch]);

    return (
        <NoticeSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <input
                        type="text"
                        name="text"
                        id=""
                        onChange={changeInput}
                        placeholder="검색어를 입력하세요."
                        maxLength={14}
                    />
                    <img src="./images/Notice/Notice_search.png" alt="" />
                </p>
            </form>
        </NoticeSearchWrap>
    );
};

export default NoticeSearch;
