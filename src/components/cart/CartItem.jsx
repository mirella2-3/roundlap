import { CartItemStyle } from './style';
import { MdOutlineClose } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { removeCart, updateQuantity } from '../../store/modules/cartSlice';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <CartItemStyle>
            <div className="itembox">
                <img src={product.imgUrl} alt={product.title} />
                <div className="itemtitle">
                    <h2>{product.title}</h2>

                    <strong>{(product.salePrice * product.quantity).toLocaleString()}원</strong>

                    <div className="itemquantity">
                        <button
                            onClick={() =>
                                dispatch(updateQuantity({ id: product.id, type: 'decrement' }))
                            }
                        >
                            -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                            onClick={() =>
                                dispatch(updateQuantity({ id: product.id, type: 'increment' }))
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="itemIcon">
                    <div onClick={() => dispatch(removeCart(product.id))}>
                        <MdOutlineClose />
                    </div>
                </div>
            </div>
        </CartItemStyle>
    );
};

export default CartItem;
