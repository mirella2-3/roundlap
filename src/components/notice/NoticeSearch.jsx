import { useDispatch } from 'react-redux';
import { NoticeSearchWrap } from './style';
import { useState } from 'react';
import { searchActions } from '../../store/modules/searchSlice';

const NoticeSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.searchNotice(text));
    };
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

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
