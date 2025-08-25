import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderSummaryStyles } from './style';
import { useNavigate } from 'react-router-dom';
import { resetOrder, addOrderHistory, setOrderSummary } from '../../store/modules/OrderSlice';

const OrderSummary = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const orderItems = useSelector((state) => state.order.orderItems || []);

    const productTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const shipping = productTotal >= 15000 || productTotal === 0 ? 0 : 2500;

    const points = Math.floor(productTotal * 0.01);

    const total = productTotal + shipping;

    const handlePayment = () => {
        const updatedItems = orderItems.map((item) => ({ ...item, status: 'paid' }));
        dispatch(addOrderHistory(updatedItems));
        dispatch(setOrderSummary({ productTotal, shipping, points, total }));
        dispatch(resetOrder());
        Navigate('/shop/order/PaySucess');
    };

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
                <button className="orderButton" onClick={handlePayment}>
                    주문하기
                </button>
            </div>
        </OrderSummaryStyles>
    );
};

export default OrderSummary;
