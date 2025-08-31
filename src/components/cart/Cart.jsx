import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent } from './style';

import CartWrap from './CartWrap';
import CartList from './CartList';
import CartBottom from './CartBottom';
import CartEmpty from './CartEmpty';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Cart = ({ onClose }) => {
    const carts = useSelector((state) => state.cart.cartItems);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        };
    }, []);

    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CartWrap onClose={onClose}>
                    {carts.length === 0 ? (
                        <CartEmpty />
                    ) : (
                        <>
                            <CartList onClose={onClose} />
                            <CartBottom carts={carts} onClose={onClose} />
                        </>
                    )}
                </CartWrap>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Cart;
