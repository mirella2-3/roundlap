import React from 'react';
import { OrderItemStyle } from './style';

const OrderItem = () => {
    return (
        <OrderItemStyle>
            <div className="itembox">
                <div className="itemInfo">
                    <p>
                        <img src="https://placehold.co/90x90" alt="" />
                    </p>
                </div>
                <div className="itemtitle">
                    <h2>상품이름</h2>
                    <h3>00000 원</h3>
                </div>
            </div>
        </OrderItemStyle>
    );
};

export default OrderItem;
