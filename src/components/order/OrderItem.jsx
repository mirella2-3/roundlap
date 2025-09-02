import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderItems } from '../../store/modules/orderSlice';
import { OrderItemStyle } from './style';

const OrderItem = ({ item }) => {
    return (
        <OrderItemStyle>
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
    );
};

export default OrderItem;
