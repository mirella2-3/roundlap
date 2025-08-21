import { SearchStyle } from './style';
import { MdOutlineClose } from 'react-icons/md';

const SearchWrap = ({ onClose }) => {
    return (
        <SearchStyle>
            <div className="searchbox">
                <div className="searchtool">
                    <div className="SearchTop">
                        <h2>SEARCH</h2>
                        <button>
                            <MdOutlineClose className="Close" onClick={onClose} />
                        </button>
                    </div>
                    <div className="input">
                        <p>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="검색어를 입력하세요."
                            />
                            <img src="./images/Search/Search_icon.png" alt="" />
                        </p>
                    </div>
                    <div className="best">
                        <h3>인기검색어</h3>
                        <p>#독도토너</p>
                        <p>#소나무앰플</p>
                        <p>#선크림</p>
                    </div>
                    <div className="producttype">
                        <h2>제품유형</h2>
                    </div>
                    <div className="type">
                        <button>토너 / 미스트</button>
                        <button>에센스 / 앰플</button>
                        <button>로션 / 크림</button>
                        <button>클렌징 / 스크럽</button>
                        <button>마스크 / 팩</button>
                        <button>선케어</button>
                    </div>
                    <div className="producttype">
                        <h2>피부고민</h2>
                    </div>
                    <div className="type">
                        <button>수분 / 보습</button>
                        <button>민감 / 진정</button>
                        <button>영양 / 보호</button>
                        <button>각질 / 결</button>
                        <button>자외선 차단</button>
                    </div>

                    <div className="producttype">
                        <h2>제품라인</h2>
                    </div>
                    <div className="type">
                        <button>1025 독도</button>
                        <button>자작나무 수분</button>
                        <button>소나무 진정 시카</button>
                        <button>약콩 판테놀</button>
                        <button>포맨</button>
                        <button>비타나이아신</button>
                        <button>베이비</button>
                        <button>동백탄력</button>
                    </div>
                </div>
            </div>
        </SearchStyle>
    );
};

export default SearchWrap;
