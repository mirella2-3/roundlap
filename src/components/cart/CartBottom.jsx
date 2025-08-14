import { Link } from 'react-router-dom';
import { CartBottomStyle } from './style';

const CartBottom = ({ carts, onClose }) => {
    const isEmpty = carts.length === 0;

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
                    <button className="actionBtn" onClick={() => onClose()}>
                        주문하기
                    </button>
                )}
            </div>
        </CartBottomStyle>
    );
};

export default CartBottom;
