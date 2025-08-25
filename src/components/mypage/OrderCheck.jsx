import { OrderCheckStyle } from './style';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

const OrderCheck = () => {
    const counts = {
        paid: 0,
        received: 0,
        preparing: 0,
        shipping: 0,
        completed: 0,
    };

    const orderItems = useSelector((state) => state.order.orderItems || []);
    const orderHistory = useSelector((state) => state.order.orderHistory || []);

    orderHistory.forEach((item) => {
        if (item.status === 'paid') counts.paid += 1;
    });

    orderItems.forEach((item) => {
        switch (item.status) {
            case 'paid':
                counts.paid += 1;
                break;
            case 'received':
                counts.received += 1;
                break;
            case 'preparing':
                counts.preparing += 1;
                break;
            case 'shipping':
                counts.shipping += 1;
                break;
            case 'completed':
                counts.completed += 1;
                break;
            default:
                break;
        }
    });

    return (
        <OrderCheckStyle>
            <h3>
                주문/배송 조회<span>(최근 3개월 이내)</span>
            </h3>
            <ul className="wrap">
                <li>
                    <strong className={counts.paid > 0 ? 'on' : ''}>{counts.paid}</strong>
                    <span>결제완료</span>
                </li>
                <li className="next">
                    <IoIosArrowForward />
                </li>
                <li>
                    <strong>0</strong>
                    <span>주문접수</span>
                </li>
                <li className="next">
                    <IoIosArrowForward />
                </li>
                <li>
                    <strong>0</strong>
                    <span>배송준비중</span>
                </li>
                <li className="next">
                    <IoIosArrowForward />
                </li>
                <li>
                    <strong>{counts.shipping}</strong>
                    <span>배송중</span>
                </li>
                <li className="next">
                    <IoIosArrowForward />
                </li>
                <li>
                    <strong>{counts.completed}</strong>
                    <span>배송완료</span>
                </li>
            </ul>
        </OrderCheckStyle>
    );
};

export default OrderCheck;
