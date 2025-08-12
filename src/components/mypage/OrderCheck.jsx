import { OrderCheckStyle } from './style';
import { IoIosArrowForward } from 'react-icons/io';

const OrderCheck = () => {
    return (
        <OrderCheckStyle>
            <h3>
                주문/배송 조회<span>(최근 3개월 이내)</span>
            </h3>
            <ul className="wrap">
                <li>
                    <strong>0</strong>
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
                    <strong className="on">1</strong>
                    <span>배송중</span>
                </li>
                <li className="next">
                    <IoIosArrowForward />
                </li>
                <li>
                    <strong>0</strong>
                    <span>배송완료</span>
                </li>
            </ul>
        </OrderCheckStyle>
    );
};

export default OrderCheck;
