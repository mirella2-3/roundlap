import React from 'react';
import { OrderInfoStyles } from './style';
import OrderInfoInput from './OrderInfoInput';

const OrderInfo = () => {
    return (
        <OrderInfoStyles>
            <div className="Info">
                <h2>주문 정보</h2>
                <OrderInfoInput />
            </div>
        </OrderInfoStyles>
    );
};

export default OrderInfo;
