import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSummaryStyles } from './style';

const OrderSummary = () => {
    const orderItems = useSelector((state) => state.order.orderItems || []);

    const productTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const shipping = productTotal >= 15000 || productTotal === 0 ? 0 : 2500;

    const points = Math.floor(productTotal * 0.01);

    const total = productTotal + shipping;

    return (
        <OrderSummaryStyles>
            <div className="orderSummary">
                <div className="summaryItem">
                    <span>상품금액</span>
                    <span>{productTotal.toLocaleString()} 원</span>
                </div>
                <div className="summaryItem">
                    <span>배송비</span>
                    <span>{shipping.toLocaleString()} 원</span>
                </div>
                <div className="summaryItem">
                    <span>적립금</span>
                    <span>{points.toLocaleString()} P</span>
                </div>
                <div className="summaryTotal">
                    <span>TOTAL</span>
                    <span>{total.toLocaleString()} 원</span>
                </div>
                <button className="orderButton">주문하기</button>
            </div>
        </OrderSummaryStyles>
    );
};

export default OrderSummary;
