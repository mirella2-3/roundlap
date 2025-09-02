import { useDispatch } from 'react-redux';
import { addCart } from '../../store/modules/cartSlice';
import { addWish } from '../../store/modules/wishListSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CartModal from '../cart/CartModal';
import WishModal from '../cart/WishModal';

const ProductItem = ({ product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { title, price, imgUrl } = product;
    const dispatch = useDispatch();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishOpen, setIsWishOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const openWish = () => setIsWishOpen(true);
    const closeWish = () => setIsWishOpen(false);

    const handleCartClick = (product) => {
        dispatch(addCart({ ...product, quantity: 1 }));
        setSelectedProduct({ ...product, quantity: 1 });
        openCart();
    };

    const handleWishClick = (product) => {
        dispatch(addWish(product));
        setSelectedProduct(product);
        openWish();
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
            <div className="img">
                <img src={imgUrl} alt={title} />
                <div className="bg">
                    <img
                        src="/images/wish_1.png"
                        alt="wish"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleWishClick(product);
                        }}
                    />
                    <img
                        src="/images/wish_2.png"
                        alt="cart"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCartClick(product);
                        }}
                    />
                </div>
            </div>

            <div className="txt">
                <p className="title">{title}</p>
                <h4>{price.toLocaleString()}원</h4>
            </div>

            {isCartOpen && selectedProduct && (
                <CartModal onClose={closeCart} product={selectedProduct} />
            )}
            {isWishOpen && selectedProduct && (
                <WishModal onClose={closeWish} product={selectedProduct} />
            )}
        </article>
    );
};

export default ProductItem;
