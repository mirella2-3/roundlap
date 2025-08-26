import React from 'react';
import { PaginationStyle } from './style';
const Pagination2 = ({ currentPage, totalPages, onPrev, onNext, onPageClick }) => {
    const pageArray = [...Array(Math.max(totalPages, 1))].map((_, i) => i + 1);

    return (
        <PaginationStyle>
            <div>
                <button className="pagePrev" onClick={onPrev} disabled={currentPage === 1}>
                    <img src="/images/pagination_arrowLeft.png" alt="이전" />
                    이전
                </button>

                {pageArray.map((item) => (
                    <button
                        key={item}
                        className={currentPage === item ? 'on' : ''}
                        onClick={() => onPageClick(item)}
                    >
                        {item}
                    </button>
                ))}

                <button className="pageNext" onClick={onNext} disabled={currentPage === totalPages}>
                    다음
                    <img src="/images/pagination_arrowRight.png" alt="다음" />
                </button>
            </div>
        </PaginationStyle>
    );
};

export default Pagination2;
