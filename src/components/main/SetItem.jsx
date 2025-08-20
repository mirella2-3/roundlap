import SetItemSwiper from './SetItemSwiper';
import { SetItemStyle } from './style';

const SetItem = () => {
    return (
        <SetItemStyle>
            <ul>
                <li className="imgTitle">
                    <h4>Love Your Layers</h4>
                    <strong>피부 속부터 겉까지 촘촘히 채우는 수분 영양</strong>
                </li>
                <li className="productList">
                    <h3>SET ITEMS</h3>
                    <p>Your must-haves, now for less</p>
                    <SetItemSwiper />
                </li>
            </ul>
        </SetItemStyle>
    );
};

export default SetItem;
