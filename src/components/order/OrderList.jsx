import React from 'react';
import { useSelector } from 'react-redux';
import { OrderListStyle } from './style';
import OrderItem from './OrderItem';
import OrderSummary from './OrderSummary';

const OrderList = () => {
    const orderItems = useSelector((state) => state.order.orderItems || []); //
    const usedPoints = useSelector((state) => state.order.usedPoints || 0);

    return (
        <OrderListStyle>
            <div className="OrderList">
                <div className="OrderListBox">
                    {orderItems.map((item) => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <OrderSummary usedPoints={usedPoints} />
        </OrderListStyle>
    );
};

export default OrderList;
