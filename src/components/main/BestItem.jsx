import { BestItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { addWish } from '../../store/modules/WishListSlice';
import { addCart } from '../../store/modules/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WishModal from '../cart/WishModal';
import CartModal from '../cart/cartModal';

const BestItem = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishOpen, setIsWishOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const openWish = () => setIsWishOpen(true);
    const closeWish = () => setIsWishOpen(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleWishClick = (product) => {
        dispatch(addWish(product));
        setSelectedProduct(product);
        openWish();
    };

    const handleCartClick = (product) => {
        dispatch(addCart({ ...product, quantity: 1 })); // quantity 1로 시작
        setSelectedProduct({ ...product, quantity: 1 });
        openCart();
    };

    const handleDetailClick = (product) => {
        navigate(`/shop/${product.id}`);
    };

    const products = [
        {
            id: 23,
            title: '1025 독도 토너 대용량 500ml',
            price: 30000,
            salePrice: 26500,
            category: ['toner', 'sensitive', '1025', 'SALE'],
            salePercent: 12,

            imgUrl: '/images/Data/dokdo/01_dokdo_toner500.png',
            mainImg: '/images/Main/Main-products01.png',

            nowLine: '1025',
        },
        {
            id: 26,
            title: '1025 독도 로션 200ml',
            price: 16000,
            salePrice: 16000,
            category: ['lotion', 'sensitive', '1025', 'BEST'],

            imgUrl: '/images/Data/dokdo/19_dokdo_lotion200.png',
            mainImg: '/images/Main/Main-products02.png',

            nowLine: '1025',
        },
        {
            id: 1,
            title: '촉촉한 각질제거 1025 독도 토너 200ml',
            price: 16700,
            salePrice: 16700,
            category: ['toner', 'water', '1025', 'BEST'],

            imgUrl: '/images/Data/dokdo/30_dokdo_toner200.png',
            mainImg: '/images/Main/Main-products03.png',

            nowLine: '1025',
        },
        {
            id: 27,
            title: '1025 독도 크림 80ml',
            price: 16000,
            salePrice: 16000,
            category: ['lotion', 'sensitive', '1025'],

            imgUrl: '/images/Data/dokdo/27_dokdo_eyecream.png',
            mainImg: '/images/Main/Main-products04.png',

            nowLine: '1025',
        },
        {
            id: 3,
            title: '1025 독도 클렌저  150ml',
            price: 13800,
            salePrice: 13800,
            category: ['cleansing', 'corneous', '1025', 'BEST'],

            imgUrl: '/images/Data/dokdo/20_dokdo_cleanser200.png',
            mainImg: '/images/Main/Main-products05.png',

            nowLine: '1025',
        },
    ];

    return (
        <BestItemStyle>
            <div className="inner">
                <p className="circle"></p>
                <h2 className="engTitle">BEST ITEMS</h2>
                <ul className="items">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div>
                                <img
                                    src={product.mainImg}
                                    alt={product.title}
                                    onClick={() => handleDetailClick(product)}
                                />
                                <p className="bg">
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
                                </p>
                            </div>
                            <strong>{product.title}</strong>
                            <span>{product.salePrice.toLocaleString()}원</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 모달 렌더링 */}
            {isCartOpen && selectedProduct && (
                <CartModal onClose={closeCart} product={selectedProduct} />
            )}
            {isWishOpen && selectedProduct && (
                <WishModal onClose={closeWish} product={selectedProduct} />
            )}
        </BestItemStyle>
    );
};

export default BestItem;
