import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItemStyle } from './style';

const OrderItem = () => {
    const orderItems = useSelector((state) => state.order.orderItems);

    return (
        <div>
            {orderItems.map((item) => (
                <OrderItemStyle key={item.id}>
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
