import { BiShoppingBag } from 'react-icons/bi';
import { CartModalStyle } from './style';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { setOrderItems } from '../../store/modules/OrderSlice';

const CartModal = ({ onClose, product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToOrder = () => {
        dispatch(setOrderItems([{ ...product, quantity: product.quantity || 1 }]));
        navigate('/shop/order');
        onClose();
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
                    <button onClick={goToOrder}>결제하기</button>
                </div>
            </div>
        </CartModalStyle>
    );
};

export default CartModal;
