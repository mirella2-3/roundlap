import React from 'react';
import { OrderStyles } from './style';
import OrderInfo from '../../components/order/OrderInfo';
import OrderCart from '../../components/order/OrderCart';
import { useSelector } from 'react-redux';
import OrderEmpty from '../../components/order/OrderEmpty';

const Order = () => {
    const orderItems = useSelector((state) => state.order.orderItems || []); //
    return (
        <OrderStyles>
            <div className="inner">
                {orderItems.length === 0 ? (
                    <OrderEmpty />
                ) : (
                    <>
                        <OrderInfo />
                        <OrderCart />
                    </>
                )}
            </div>
        </OrderStyles>
    );
};

export default Order;
