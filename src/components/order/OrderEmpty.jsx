import { OrderStyles } from '../../pages/order/style';

const OrderEmpty = () => {
    return (
        <OrderStyles className="emptyOrder">
            <p>주문 할 상품이 존재하지 않습니다.</p>
        </OrderStyles>
    );
};

export default OrderEmpty;
