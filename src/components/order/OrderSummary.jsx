import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderSummaryStyles } from './style';
import { useNavigate } from 'react-router-dom';
import {
    resetOrder,
    addOrderHistory,
    setOrderSummary,
    addUserPoints,
    setUsedPoints,
} from '../../store/modules/orderSlice';
import { clearCart } from '../../store/modules/cartSlice';

const OrderSummary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderItems = useSelector((state) => state.order.orderItems || []);
    const usedPoints = useSelector((state) => state.order.usedPoints || 0);
    const userPoints = useSelector((state) => state.order.userPoints || 0);

    const productTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = productTotal >= 15000 || productTotal === 0 ? 0 : 2500;
    const earnedPoints = Math.floor(productTotal * 0.01); // 10% 적립
    const total = productTotal + shipping - usedPoints;

    const handlePayment = () => {
        const updatedItems = orderItems.map((item) => ({ ...item, status: 'paid' }));

        dispatch(addOrderHistory(updatedItems));
        dispatch(setOrderSummary({ productTotal, shipping, points: earnedPoints, total }));
        const newPoints = userPoints - usedPoints + earnedPoints;
        dispatch(setUsedPoints(0));
        dispatch(addUserPoints(earnedPoints));
        localStorage.setItem('currentUserPoints', newPoints);
        dispatch(resetOrder());
        dispatch(clearCart());
        navigate('/shop/order/PaySuccess');
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
                    <span>{earnedPoints.toLocaleString()} P</span>
                </div>
                <div className="summaryItem">
                    <span>사용 적립금</span>
                    <span>-{usedPoints.toLocaleString()} P</span>
                </div>
                <div className="summaryTotal">
                    <span>TOTAL</span>
                    <span>{total.toLocaleString()} 원</span>
                </div>

                <button type="button" className="orderButton" onClick={handlePayment}>
                    주문하기
                </button>
            </div>
        </OrderSummaryStyles>
    );
};

export default OrderSummary;
