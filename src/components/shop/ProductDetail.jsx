import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductdetailStyle } from './style';
import ProductDesc from './ProductDesc';
import ProductRecom from './ProductRecom';
import Review from './Review';

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useSelector((state) => state.product);
    const product = products.find((item) => item.id === productId);
    // const { title, price, imgurl } = product;

    return (
        <ProductdetailStyle>
            <div className="bg"></div>
            <div className="inner">
                <div className="bgtxt">1025</div>
                <section className="text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ex possimus</p>
                    <section className="itemImg">
                        <img src="/images/image_93_1.png" alt="" />
                        {/* <img src="/images/09_jajack_cleanserPads.png" alt="" /> */}
                    </section>
                    <ul>
                        <li className="price">
                            <button>
                                <span>00</span>%
                            </button>
                            <span>
                                <strong>00,000</strong>원
                            </span>
                            <p>00,000원</p>
                        </li>
                        <li>
                            <ul className="delivery">
                                <li>배송안내</li>
                                <li>2,500원(15,000원 이상 구매 시 무료)</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="product_title">
                                <li className="ttl">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Explicabo,
                                </li>
                                <li>
                                    <button>-</button>
                                    <strong>수량</strong>
                                    <button>+</button>
                                </li>
                            </ul>
                        </li>
                        <li className="total">
                            TOTAL
                            <span>
                                <strong>000</strong>원
                            </span>
                        </li>
                        <button className="buy">구매하기</button>
                        <li>
                            <ul>
                                <button className="cart">장바구니</button>
                                <button className="wish">관심상품</button>
                            </ul>
                        </li>
                    </ul>
                </section>
                {/* <h2>{product.title}</h2>
            <img src={product.imgurl} alt={product.title} />
            <p>가격: {product.price}원</p>
            <p>할인가: {product.salePrice}원</p> */}
                {/* 기타 정보 렌더링 */}
                <ProductDesc />
                <ProductRecom />
                <Review />
                {/* <img src={product.imgurl} alt={product.title} />
                <p>가격: {product.price}원</p>
                <p>할인가: {product.salePrice}원</p>  */}
            </div>
        </ProductdetailStyle>
    );
};

export default ProductDetail;
