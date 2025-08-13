import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent } from './style';

import CartWrap from './CartWrap';
import CartList from './CartList';
import CartBottom from './CartBottom';
import CartEmpty from './CartEmpty';

const Cart = ({ onClose, carts }) => {
    const isEmpty = carts.length === 0;

    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CartWrap onClose={onClose}>
                    {isEmpty ? (
                        <CartEmpty />
                    ) : (
                        <>
                            <CartList carts={carts} />
                            <CartBottom carts={carts} />
                        </>
                    )}
                </CartWrap>
            </ModalContent>
        </ModalWrapper>,
        document.body
    );
};

export default Cart;
