import { Link, useNavigate } from 'react-router-dom';
import { CartBottomStyle } from './style';
import { useDispatch } from 'react-redux';
import { setOrderItems } from '../../store/modules/OrderSlice';

const CartBottom = ({ carts, onClose }) => {
    const isEmpty = carts.length === 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrder = () => {
        dispatch(setOrderItems(carts));
        onClose();
        navigate('/shop/order');
    };
    return (
        <CartBottomStyle>
            <div className="cartBottom">
                {isEmpty ? (
                    <Link to="/shop/all/ALL">
                        <button className="actionBtn" onClick={() => onClose()}>
                            상품 보러가기
                        </button>
                    </Link>
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
