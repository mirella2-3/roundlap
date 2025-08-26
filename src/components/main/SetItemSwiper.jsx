import { mainSetItemData } from '../../assets/api/mainSetItemData';
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import { addWish } from '../../store/modules/WishListSlice';
import { useDispatch } from 'react-redux';
import { addCart, openCart } from '../../store/modules/CartSlice';
import { useNavigate } from 'react-router-dom';
import CartModal from '../cart/CartModal';
import WishModal from '../cart/WishModal';

const SetItemSwiper = () => {
    const [direction, setDirection] = useState('horizontal');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishOpen, setIsWishOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const openWish = () => setIsWishOpen(true);
    const closeWish = () => setIsWishOpen(false);

    const handleWishClick = (product) => {
        dispatch(addWish(product));
        setSelectedProduct(product);
        openWish();
    };

    const handleCartClick = (product) => {
        const productWithQuantity = { ...product, quantity: 1 };
        dispatch(addCart(productWithQuantity));
        setSelectedProduct(productWithQuantity);
        openCart();
        dispatch(openCart());
    };
    const handleDetailClick = (product) => {
        navigate(`/shop/${product.id}`);
    };
    // 윈도우 크기에 따라 방향 바꾸기
    useEffect(() => {
        function updateDirection() {
            const newDirection = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
            setDirection(newDirection);
        }

        updateDirection(); // 초기 실행
        window.addEventListener('resize', updateDirection);
        return () => window.removeEventListener('resize', updateDirection);
    }, []);

    return (
        <div className="wrap">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={200}
                direction={direction}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                style={{ width: '100%', height: '100%' }}
                loop={true}
            >
                {mainSetItemData.map((product) => (
                    <SwiperSlide key={product.id} className="slide-item">
                        <div className="wish-inner">
                            <img
                                src={product.mainImg}
                                alt={product.title}
                                onClick={() => handleDetailClick(product)}
                            />

                            <div className="bg">
                                <img
                                    src="/images/wish_1.png"
                                    alt=""
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleWishClick(product);
                                    }}
                                />
                                <img
                                    src="/images/wish_2.png"
                                    alt=""
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCartClick(product);
                                    }}
                                />
                            </div>
                        </div>
                        <span className="title">{product.title}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev">
                <MdKeyboardArrowLeft size={40} />
            </button>
            <button className="swiper-button-next">
                <MdKeyboardArrowRight size={40} />
            </button>
            {isCartOpen && selectedProduct && (
                <CartModal onClose={closeCart} product={selectedProduct} />
            )}
            {isWishOpen && selectedProduct && (
                <WishModal onClose={closeWish} product={selectedProduct} />
            )}
        </div>
    );
};
export default SetItemSwiper;
