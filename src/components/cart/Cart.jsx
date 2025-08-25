import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent } from './style';

import CartWrap from './CartWrap';
import CartList from './CartList';
import CartBottom from './CartBottom';
import CartEmpty from './CartEmpty';

const Cart = ({ onClose, carts }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

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
        document.body
    );
};

export default Cart;
