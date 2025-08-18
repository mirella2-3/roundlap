import React from 'react';
import { OrderSummaryStyles } from './style';

const OrderSummary = () => {
    return (
        <OrderSummaryStyles>
            <div className="orderSummary">
                <div className="summaryItem">
                    <span>상품금액</span>
                    <span> 원</span>
                </div>
                <div className="summaryItem">
                    <span>배송비</span>
                    <span> 원</span>
                </div>
                <div className="summaryItem">
                    <span>적립금</span>
                    <span> P</span>
                </div>
                <div className="summaryTotal">
                    <span>TOTAL</span>
                    <span> 원</span>
                </div>
                <button className="orderButton">주문하기</button>
            </div>
        </OrderSummaryStyles>
    );
};

export default OrderSummary;
