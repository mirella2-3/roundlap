import { WishListStyle } from './style';
import WishListItem from './WishListItem';

import { LuPlus } from 'react-icons/lu';

const WishList = () => {
    return (
        <WishListStyle>
            <ul>
                <li>
                    <p>
                        <img src="https://placehold.co/274x276" alt="" />
                    </p>
                    <p className="title">상품이름</p>
                    <strong>
                        <span>가격</span>원
                    </strong>
                </li>
                <li>
                    <p>
                        <img src="https://placehold.co/274x276" alt="" />
                    </p>
                    <p className="title">상품이름상품이름상품이름상품이름상품이름</p>
                    <strong>
                        <span>가격</span>원
                    </strong>
                </li>
                <li>
                    <p>
                        <img src="https://placehold.co/274x276" alt="" />
                    </p>
                    <p className="title">상품이름</p>
                    <strong>
                        <span>가격</span>원
                    </strong>
                </li>
                <li>
                    <p>
                        <img src="https://placehold.co/274x276" alt="" />
                    </p>
                    <p className="title">상품이름</p>
                    <strong>
                        <span>가격</span>원
                    </strong>
                </li>
                <li>
                    <p>
                        <img src="https://placehold.co/274x276" alt="" />
                    </p>
                    <p className="title">상품이름</p>
                    <strong>
                        <span>가격</span>원
                    </strong>
                </li>
            </ul>
        </WishListStyle>
    );
};

export default WishList;
