import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ProductdetailStyle } from './style';
import ProductDesc from './ProductDesc';
import ProductRecom from './ProductRecom';
import Review from './Review';
import { allProductData } from '../../assets/api/productData';
import { useDispatch } from 'react-redux';
import { setOrderItem } from '../../store/modules/OrderSlice';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const productRef = useRef(null);
    const imgRef = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        const found = allProductData.find((item) => String(item.id) === String(productId));
        setProduct(found);
    }, [productId]);

    const onClick = () => {
        dispatch(setOrderItem({ ...product, quantity }));
        navigate('/shop/order');
    };
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    useEffect(() => {
        if (!product) return;

        const ctx = gsap.context(() => {
            gsap.to(imgRef.current, {
                scale: 0.95,
                scrollTrigger: {
                    trigger: productRef.current,
                    start: 'top top',
                    endTrigger: targetRef.current,
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: true,
                },
            });
        }, productRef);

        return () => ctx.revert();
    }, [product]);

    if (!product) {
        return <div>상품을 불러오는 중...</div>;
    }

    const {
        title,
        price,
        imgUrl,
        salePercent,
        salePrice,
        nowLine,
        colorDark,
        colorSale,
        colorLight,
    } = product;

    return (
        <>
            <ProductdetailStyle>
                <div className="bg" style={{ background: colorLight }}></div>
                <div className="inner">
                    <div className="bgtxt" style={{ color: colorLight }}>
                        {nowLine}
                    </div>

                    <section className="text">
                        <p>{title}</p>

                        <div className="itemImg" ref={productRef}>
                            <img ref={imgRef} src={imgUrl} alt={title} />
                        </div>

                        <ul>
                            <li className="price">
                                {salePercent && (
                                    <button style={{ background: colorSale }}>
                                        <span>{salePercent}</span>%
                                    </button>
                                )}
                                <span>
                                    <strong>{salePrice.toLocaleString()}</strong>원
                                </span>
                                <p>{price.toLocaleString()}원</p>
                            </li>

                            <li>
                                <ul className="delivery">
                                    <li>배송안내</li>
                                    <li>2,500원(15,000원 이상 구매 시 무료)</li>
                                </ul>
                            </li>

                            <li>
                                <ul className="product_title">
                                    <li className="ttl">{title}</li>
                                    <li>
                                        <button onClick={decreaseQuantity}>-</button>
                                        <strong>{quantity}</strong>
                                        <button onClick={increaseQuantity}>+</button>
                                    </li>
                                </ul>
                            </li>

                            <li className="total">
                                TOTAL
                                <span>
                                    <strong>{(price * quantity).toLocaleString()}</strong>원
                                </span>
                            </li>
                            <button
                                className="buy"
                                onClick={onClick}
                                style={{
                                    '--hover-color': colorSale,
                                }}
                            >
                                구매하기
                            </button>

                            <li>
                                <ul>
                                    <button className="cart">장바구니</button>
                                    <button className="wish">관심상품</button>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>

                <div ref={targetRef}>
                    <ProductDesc product={product} />
                </div>
            </ProductdetailStyle>

            <ProductRecom />
            <Review product={product} />
        </>
    );
};

export default ProductDetail;
