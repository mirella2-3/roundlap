import { useDispatch } from 'react-redux';
import { addCart } from '../../store/modules/CartSlice';
import { addWish } from '../../store/modules/WishListSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CartModal from '../cart/CartModal';
import WishModal from '../cart/WishModal';

const ProductItem = ({ product }) => {
    const { title, price, imgUrl } = product;
    const dispatch = useDispatch();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishOpen, setIsWishOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const openWish = () => setIsWishOpen(true);
    const closeWish = () => setIsWishOpen(false);

    const handleCartClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // 이미 마지막 클릭에서 추가했는지 체크
        if (!product.__added) {
            dispatch(addCart(product));
            setIsCartOpen(true);
            product.__added = true; // 임시 플래그
            setTimeout(() => {
                product.__added = false;
            }, 100); // 0.1초 후 플래그 초기화
        }
    };

    const handleWishClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // ← 여기 추가
        dispatch(addWish(product));
        setIsWishOpen(true);
    };
    const navigate = useNavigate();

    return (
        <article
            onClick={() => {
                if (!isCartOpen && !isWishOpen) {
                    navigate(`/shop/${product.id}`);
                }
            }}
            style={{ cursor: 'pointer' }}
        >
            <Link>
                <div className="img">
                    <img src={imgUrl} alt={title} />
                    <div className="bg">
                        <img
                            src="/images/wish_1.png"
                            alt="wish"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleWishClick(e);
                            }}
                        />
                        <img
                            src="/images/wish_2.png"
                            alt="cart"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCartClick(e);
                            }}
                        />
                    </div>
                </div>

                <div className="txt">
                    <p className="title">{title}</p>
                    <h4>{price.toLocaleString()}원</h4>
                </div>
            </Link>
            {isCartOpen && <CartModal onClose={closeCart} product={product} />}
            {isWishOpen && <WishModal onClose={closeWish} />}
        </article>
    );
};

export default ProductItem;
