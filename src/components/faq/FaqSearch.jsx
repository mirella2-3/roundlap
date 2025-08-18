import { useDispatch } from 'react-redux';
import { FaqSearchWrap } from './style';
import { useState } from 'react';
import { faqActions } from '../../store/modules/faqSlice';

const FaqSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(faqActions.searchFaq(text));
    };
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <FaqSearchWrap>
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
        </FaqSearchWrap>
    );
};

export default FaqSearch;
