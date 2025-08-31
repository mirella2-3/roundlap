import SetItemSwiper from './SetItemSwiper';
import { SetItemStyle } from './style';

const SetItem = () => {
    return (
        <SetItemStyle>
            <ul>
                <li className="imgTitle"></li>
                <li className="productList">
                    <p className="circle"></p>
                    <h3>SET ITEMS</h3>
                    <p>Your must-haves, now for less</p>
                    <SetItemSwiper />
                </li>
            </ul>
        </SetItemStyle>
    );
};

export default SetItem;
