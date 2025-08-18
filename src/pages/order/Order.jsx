import React from 'react';
import { OrderStyles } from './style';
import OrderInfo from './OrderInfo';
import OrderCart from './OrderCart';

const Order = () => {
    return (
        <OrderStyles>
            <div className="inner">
                <OrderInfo />
                <OrderCart />
            </div>
        </OrderStyles>
    );
};

export default Order;
