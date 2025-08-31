import { MdOutlineClose } from 'react-icons/md';
import { ModalWrapper, ModalContent, CartWrapStyle } from './style';

const CartWrap = ({ children, onClose }) => {
    return (
        <CartWrapStyle>
            <div className="ModalText">
                <h2>장바구니</h2>
                <MdOutlineClose className="Close" onClick={onClose} />
            </div>
            {children}
        </CartWrapStyle>
    );
};

export default CartWrap;
