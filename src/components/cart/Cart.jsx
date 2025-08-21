import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent } from './style';
import { useSelector } from 'react-redux';

import CartWrap from './CartWrap';
import CartList from './CartList';
import CartBottom from './CartBottom';
import CartEmpty from './CartEmpty';

const Cart = ({ onClose }) => {
    const [mounted, setMounted] = useState(false);
    const carts = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // document.body가 준비될 때까지 렌더링 안 함

    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CartWrap onClose={onClose}>
                    {carts.length === 0 ? (
                        <CartEmpty />
                    ) : (
                        <>
                            <CartList carts={carts} onClose={onClose} />
                            <CartBottom carts={carts} onClose={onClose} />
                        </>
                    )}
                </CartWrap>
            </ModalContent>
        </ModalWrapper>,
        document.body // 반드시 존재하는 DOM 요소
    );
};

export default Cart;
