import DiscountSwiper from './DiscountSwiper';

import { DiscountItemStyle } from './style';

const DiscountItem = () => {
    return (
        <DiscountItemStyle>
            <ul>
                <li className="productList">
                    <h3>DISCOUNT ITEMS</h3>
                    <p>Your must-haves, now for less</p>
                    <DiscountSwiper />
                </li>
                <li className="imgTitle">
                    <h4>Feel the Calm</h4>
                    <strong>예민한 피부를 부드럽게 진정하는 하루 루틴</strong>
                </li>
            </ul>
        </DiscountItemStyle>
    );
};

export default DiscountItem;
