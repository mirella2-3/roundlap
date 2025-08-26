import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderItems } from '../../store/modules/OrderSlice';
import { OrderItemStyle } from './style';

const OrderItem = () => {
    const cartItems = useSelector((state) => state.cart.items || []);
    const orderItems = useSelector((state) => state.order.orderItems);
    const displayItems = orderItems.map((item) => ({ ...item, status: 'paid' }));

    return (
        <div>
            {displayItems.map((item, index) => (
                <OrderItemStyle key={item.id || index}>
                    <div className="itembox">
                        <div className="itemInfo">
                            <p>
                                <img src={item.imgUrl} alt={item.title} />
                            </p>
                        </div>
                        <div className="itemtitle">
                            <h2>{item.title}</h2>
                            <p>수량: {item.quantity}</p>
                            <h3>{(item.salePrice * item.quantity).toLocaleString()} 원</h3>
                        </div>
                    </div>
                </OrderItemStyle>
            ))}
        </div>
    );
};

export default OrderItem;
