import { NoticeSearchWrap } from './style';

const NoticeSearch = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const changeInput = (e) => {};

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
                    />
                </p>
            </form>
        </NoticeSearchWrap>
    );
};

export default NoticeSearch;
