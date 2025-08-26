import ReviewList from './ReviewList';
import { ReviewStyle } from './style';

const Review = ({ product, reviewImages }) => {
    const { colorSale } = product;
    return (
        <ReviewStyle>
            <div className="inner">
                <h2>CUSTOMER REVIEW</h2>
                <ul>
                    <li className="test">
                        <h4>모공 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li className="total">
                                <ul>
                                    <li
                                        className="score"
                                        style={{ width: 180, background: colorSale }}
                                    ></li>
                                </ul>
                            </li>

                            <li className="percent">70%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li className="total">
                                <ul>
                                    <li className="score" style={{ width: 50 }}></li>{' '}
                                </ul>
                            </li>
                            <li className="percent">29%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li className="total">
                                <ul>
                                    {' '}
                                    <li className="score" style={{ width: 20 }}></li>
                                </ul>
                            </li>
                            <li className="percent">1%</li>
                        </ul>
                    </li>
                    <li className="test">
                        <h4>피부결 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li className="total">
                                <ul>
                                    <li
                                        className="score"
                                        style={{ width: 180, background: colorSale }}
                                    ></li>
                                </ul>
                            </li>

                            <li className="percent">70%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li className="total">
                                <ul>
                                    <li className="score" style={{ width: 50 }}></li>{' '}
                                </ul>
                            </li>
                            <li className="percent">29%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li className="total">
                                <ul>
                                    {' '}
                                    <li className="score" style={{ width: 20 }}></li>
                                </ul>
                            </li>
                            <li className="percent">1%</li>
                        </ul>
                    </li>
                    <li className="test">
                        <h4>피지&각질 개선</h4>
                        <ul>
                            <li>좋음</li>
                            <li className="total">
                                <ul>
                                    <li
                                        className="score"
                                        style={{ width: 180, background: colorSale }}
                                    ></li>
                                </ul>
                            </li>

                            <li className="percent">70%</li>
                        </ul>
                        <ul>
                            <li>보통</li>
                            <li className="total">
                                <ul>
                                    <li className="score" style={{ width: 50 }}></li>{' '}
                                </ul>
                            </li>
                            <li className="percent">29%</li>
                        </ul>
                        <ul>
                            <li>좋지않음</li>
                            <li className="total">
                                <ul>
                                    {' '}
                                    <li className="score" style={{ width: 20 }}></li>
                                </ul>
                            </li>
                            <li className="percent">1%</li>
                        </ul>
                    </li>
                </ul>

                <ReviewList reviewImages={reviewImages} />
                <button
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = colorSale;
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.color = colorSale;
                    }}
                    style={{
                        color: colorSale,
                        border: `1px solid ${colorSale}`,
                        background: '#fff',
                        transition: '0.3s',
                    }}
                >
                    리뷰 더 보기
                </button>
            </div>
        </ReviewStyle>
    );
};

export default Review;
