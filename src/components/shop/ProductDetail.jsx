import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductdetailStyle } from './style';

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useSelector((state) => state.product);
    const product = products.find((item) => item.id === productId);
    // const { title, price, imgurl } = product;

    // const parsedTitle = title.split(/([\uAC00-\uD7A3]+)/).map((part, idx) => {
    //     const isKorean = /[\uAC00-\uD7A3]+/.test(part);
    //     return isKorean ? (
    //         <span key={idx} className="korean-text">
    //             {part}
    //         </span>
    //     ) : (
    //         <span key={idx}>{part}</span>
    //     );
    // });

    return (
        <ProductdetailStyle>
            <div className="inner">
                <section className="text">
                    <p>타이틀</p>
                    <ul>
                        <li className="sale">
                            <p>
                                <span>00</span>%
                            </p>
                            <span>가격</span>원<p>원가(할인안하면없게)</p>
                        </li>
                        <li>
                            <ul>
                                <li>배송안내</li>
                                <li>2,500원(15,000원 이상 구매 시 무료)</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>타이틀</li>
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
                        <li>구매하기</li>
                        <li>
                            <ul>
                                <li>장바구니</li>
                                <li>관심상품</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                {/* <h2>{product.title}</h2>
            <img src={product.imgurl} alt={product.title} />
            <p>가격: {product.price}원</p>
            <p>할인가: {product.salePrice}원</p> */}
                {/* 기타 정보 렌더링 */}
            </div>
        </ProductdetailStyle>
    );
};

export default ProductDetail;
