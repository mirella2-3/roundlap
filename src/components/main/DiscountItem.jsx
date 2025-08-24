import DiscountSwiper from './DiscountSwiper';

import { DiscountItemStyle } from './style';

const DiscountItem = () => {
    return (
        <DiscountItemStyle>
            <ul>
                <li className="productList">
                    <p className="circle"></p>
                    <h3>DISCOUNT ITEMS</h3>
                    <p>Your must-haves, now for less</p>
                    <DiscountSwiper />
                </li>
                <li className="imgTitle">
                    <h4></h4>
                    <strong></strong>
                </li>
            </ul>
        </DiscountItemStyle>
    );
};

export default DiscountItem;
