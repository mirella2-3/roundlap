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
                    <h2>상품이름</h2>
                    <div className="itemquantity">
                        <CiSquareChevLeft />
                        <span>1</span>
                        <CiSquareChevRight />
                    </div>
                </div>
                <div className="itemIcon">
                    <MdOutlineClose />
                </div>
            </div>
        </CartItemStyle>
    );
};

export default CartItem;
