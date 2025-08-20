import { CartItemStyle } from './style';
import { CiSquareChevLeft } from 'react-icons/ci';
import { CiSquareChevRight } from 'react-icons/ci';
import { MdOutlineClose } from 'react-icons/md';
const CartItem = () => {
    return (
        <CartItemStyle>
            <div className="itembox">
                <div className="itemInfo">
                    <p>
                        <img src="https://placehold.co/112x112" alt="" />
                    </p>
                </div>
                <div className="itemtitle">
                    <h2>1025 독도 토너 200ml + 독도 로션 200ml 2종 세트</h2>
                    <div className="itemquantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="itemPrice">
                    <strong>000000원</strong>
                </div>
                <div className="itemIcon">
                    <MdOutlineClose />
                </div>
            </div>
        </CartItemStyle>
    );
};

export default CartItem;
