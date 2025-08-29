import React from 'react';
import { OrderCartStyles } from './style';
import OrderList from './OrderList';

const OrderCart = () => {
    return (
        <OrderCartStyles>
            <div className="ordercart">
                <h2>주문 상품</h2>
            </div>
            <OrderList />
        </OrderCartStyles>
    );
};

export default OrderCart;
