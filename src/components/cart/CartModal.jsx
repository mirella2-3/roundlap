import { BiShoppingBag } from 'react-icons/bi';
import { CartModalStyle } from './style';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { openCart } from '../../store/modules/CartSlice';

const CartModal = ({ onClose }) => {
    const dispatch = useDispatch();

    const goToCart = () => {
        onClose();
        dispatch(openCart());
    };

    return (
        <CartModalStyle>
            <div className="CartModal">
                <div className="Closebox">
                    <IoClose size={24} onClick={onClose} style={{ cursor: 'pointer' }} />
                </div>

                <div className="top">
                    <h2>
                        <BiShoppingBag />
                        장바구니에 상품을 담았습니다.
                    </h2>
                </div>

                <div className="bottom">
                    <button onClick={onClose}>계속 쇼핑하기</button>
                    <button onClick={goToCart}>장바구니 바로가기</button>
                </div>
            </div>
        </CartModalStyle>
    );
};

export default CartModal;
