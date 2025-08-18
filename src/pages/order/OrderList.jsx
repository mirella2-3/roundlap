import React from 'react';
import { OrderListStyle } from './style';
import OrderItem from './OrderItem';
import OrderSummary from './OrderSummary';

const OrderList = () => {
    return (
        <OrderListStyle>
            <div className="OrderList">
                <div className="OrderListBox">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
            <OrderSummary />
        </OrderListStyle>
    );
};

export default OrderList;
