import React from 'react';
import { SearchStyle } from './style';
import { IoClose } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
const Search = ({ onClose }) => {
    return (
        <SearchStyle>
            <div className="searchbox">
                <div className="searchtool">
                    <div className="SearchTop">
                        <h2>Search</h2>
                        <button>
                            <IoClose onClick={onClose} />
                        </button>
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="검색어를 입력해 주세요."
                        />
                        <p>
                            <IoMdSearch />
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
                        <button className="small">선케어</button>
                    </div>
                    <div className="producttype1">
                        <h2>피부고민</h2>
                    </div>
                    <div className="type1">
                        <button>수분 / 보습</button>
                        <button>민감 / 진정</button>
                        <button>영양 / 보호</button>
                        <button className="small">각질 / 결</button>
                        <button className="big">자외선 차단</button>
                    </div>

                    <div className="producttype2">
                        <h2>제품라인</h2>
                    </div>
                    <div className="type2">
                        <button>1025 독도</button>
                        <button className="medium">자작나무 수분</button>
                        <button className="big">소나무 진정 시카</button>
                        <button>약콩 판테놀</button>
                        <button className="small">포맨</button>
                        <button className="medium">비타나이아신</button>
                        <button className="small">베이비</button>
                        <button>동백탄력</button>
                    </div>
                </div>
            </div>
        </SearchStyle>
    );
};

export default Search;
