import CartBottom from './CartBottom';
import CartItem from './CartItem';
import { CartListStyle } from './style';

const CartList = ({ carts, onClose }) => {
    return (
        <CartListStyle>
            <div className="CartListBox">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="CartPrice">
                <h2>상품금액</h2>
                <h3>10000 원</h3>
            </div>
            <div className="CartProduct">
                <h2>배송비</h2>
                <h3>10000 원</h3>
            </div>
            <div className="CartTotal">
                <h2>TOTAL</h2>
                <h3>10000 원</h3>
            </div>
            <CartBottom carts={carts} onClose={onClose} />
        </CartListStyle>
    );
};

export default CartList;
