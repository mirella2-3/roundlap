import { useDispatch, useSelector } from 'react-redux';
import { PaginationStyle } from './style';
import { paginationActions } from '../../store/modules/paginationSlice';

const Pagination = () => {
    const { totalPages, currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    // 숫자를 강제로 배열로 만들어줌
    const pageArray = [...Array(totalPages)].map((_, i) => i + 1);

    return (
        <PaginationStyle>
            <div>
                <button className="pagePrev" onClick={() => dispatch(paginationActions.prevPage())}>
                    <img src="./images/pagination_arrowLeft.png" alt="이전" />
                    이전
                </button>

                {pageArray.map((item) => (
                    <button
                        key={item}
                        className={currentPage === item ? 'on' : ''}
                        onClick={() => dispatch(paginationActions.goToPage(item))}
                    >
                        {item}
                    </button>
                ))}

                <button className="pageNext" onClick={() => dispatch(paginationActions.nextPage())}>
                    다음
                    <img src="./images/pagination_arrowRight.png" alt="다음" />
                </button>
            </div>
        </PaginationStyle>
    );
};

export default Pagination;
