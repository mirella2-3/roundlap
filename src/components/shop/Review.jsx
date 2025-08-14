import ReviewList from './ReviewList';
import { ReviewStyle } from './style';

const Review = () => {
    return (
        <ReviewStyle>
            <div className="inner">
                <h2>CUSTOMER REVIEW</h2>
                <ul>
                    <li className="test">
                        <h4>모공 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                    </li>
                    <li className="test">
                        <h4>피부결 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                    </li>
                    <li className="test">
                        <h4>피지&각질 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li></li>
                            <li>%</li>
                        </ul>
                    </li>
                </ul>

                <ReviewList />
                <button>리뷰 더 보기</button>
            </div>
        </ReviewStyle>
    );
};

export default Review;
