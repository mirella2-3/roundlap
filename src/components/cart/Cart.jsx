import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent, CartBottomStyle } from './style';

import CartWrap from './CartWrap';
import CartList from './CartList';
import CartEmpty from './CartEmpty';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOrderItems } from '../../store/modules/orderSlice';

const Cart = ({ onClose }) => {
    const carts = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        };
    }, []);

    const onProduct = () => {
        onClose();
        navigate('/shop/all/ALL');
    };

    const onOrder = () => {
        onClose();
        dispatch(setOrderItems(carts));
        navigate('/shop/order');
    };

    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CartWrap onClose={onClose}>
                    {carts.length === 0 ? (
                        <>
                            <CartEmpty />
                            <CartBottomStyle onClick={onProduct}>상품 보러가기</CartBottomStyle>
                        </>
                    ) : (
                        <>
                            <CartList carts={carts} onClose={onClose} />
                            <CartBottomStyle onClick={onOrder}>주문하기</CartBottomStyle>
                        </>
                    )}
                </CartWrap>
            </ModalContent>
        </ModalWrapper>,
        document.body
    );
};

export default Cart;
