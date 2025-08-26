import { useDispatch } from 'react-redux';
import { addCart } from '../../store/modules/CartSlice';
import { addWish } from '../../store/modules/WishListSlice';
import { Link } from 'react-router-dom';
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

    const handleWishClick = (e) => {
        e.preventDefault();
        dispatch(addWish(product));
        openWish();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        dispatch(addCart(product));
        openCart();
    };

    return (
        <article>
            <Link to={`/shop/${product.id}`}>
                <div className="img">
                    <img src={imgUrl} alt={title} />
                    <div className="bg">
                        <img src="/images/wish_1.png" alt="wish" onClick={handleWishClick} />
                        <img src="/images/wish_2.png" alt="cart" onClick={handleCartClick} />
                    </div>
                </div>

                <div className="txt">
                    <p className="title">{title}</p>
                    <h4>{price.toLocaleString()}원</h4>
                </div>
            </Link>
            {isCartOpen && <CartModal onClose={closeCart} />}
            {isWishOpen && <WishModal onClose={closeWish} />}
        </article>
    );
};

export default ProductItem;
