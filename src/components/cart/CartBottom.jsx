import { Link, useNavigate } from 'react-router-dom';
import { CartBottomStyle } from './style';
import { useDispatch } from 'react-redux';
import { setOrderItems } from '../../store/modules/orderSlice';

const CartBottom = ({ carts, onClose }) => {
    const isEmpty = carts.length === 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrder = () => {
        console.log('handleOrder onClose:', onClose);
        dispatch(setOrderItems(carts));
        onClose();
        navigate('/shop/order');
    };

    const onProduct = () => {
        // onClose();
        navigate('/shop/all/ALL');
    };
    return (
        <CartBottomStyle>
            <div className="cartBottom">
                {isEmpty ? (
                    <button className="actionBtn" onClick={onProduct}>
                        상품 보러가기
                    </button>
                ) : (
                    <button className="actionBtn" onClick={handleOrder}>
                        주문하기
                    </button>
                )}
            </div>
        </CartBottomStyle>
    );
};

export default CartBottom;
