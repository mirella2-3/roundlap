import { IoIosClose } from 'react-icons/io';
import { ModalWrapper, ModalContent, CartWrapStyle } from './style';

const CartWrap = ({ children, onClose }) => {
    return (
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CartWrapStyle>
                    <div className="ModalText">
                        <h2>장바구니</h2>
                        <IoIosClose className="Close" onClick={onClose} />
                    </div>
                </CartWrapStyle>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default CartWrap;
