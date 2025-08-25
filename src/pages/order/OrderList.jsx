import React from 'react';
import { useSelector } from 'react-redux';
import { OrderListStyle } from './style';
import OrderItem from './OrderItem';
import OrderSummary from './OrderSummary';

const OrderList = () => {
    const orderItems = useSelector((state) => state.order.orderItems || []); //

    return (
        <OrderListStyle>
            <div className="OrderList">
                <div className="OrderListBox">
                    {orderItems.length === 0 ? (
                        <p>주문할 상품이 없습니다.</p>
                    ) : (
                        orderItems.map((item) => <OrderItem key={item.id} item={item} />)
                    )}
                </div>
            </div>
            <OrderSummary />
        </OrderListStyle>
    );
};

export default OrderList;
