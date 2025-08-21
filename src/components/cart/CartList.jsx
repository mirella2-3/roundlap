import { useSelector } from 'react-redux';
import CartBottom from './CartBottom';
import CartItem from './CartItem';
import { CartListStyle } from './style';

const CartList = ({ onClose }) => {
    const carts = useSelector((state) => state.cart.cartItems);
    const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = totalPrice > 0 && totalPrice < 15000 ? 2500 : 0;
    const finalTotal = totalPrice + shipping;

    return (
        <CartListStyle>
            <div className="CartList">
                {carts.length === 0 ? (
                    <p>카트가 비어 있습니다.</p>
                ) : (
                    carts.map((item) => <CartItem key={item.id} product={item} />)
                )}
            </div>
            <div className="CartPrice">
                <h2>상품금액</h2>
                <h3>{totalPrice.toLocaleString()}원</h3>
            </div>
            <div className="CartProduct">
                <h2>배송비</h2>
                <h3>{shipping.toLocaleString()}원</h3>
            </div>
            <div className="CartTotal">
                <h2>TOTAL</h2>
                <h3>{finalTotal.toLocaleString()}원</h3>
            </div>
        </CartListStyle>
    );
};

export default CartList;
