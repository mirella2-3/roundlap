// import { ShopStyle } from './style';

import { BiShoppingBag } from 'react-icons/bi';
import { CartModalStyle } from './style';
import { IoClose } from 'react-icons/io5';

const CartModal = ({ onClose }) => {
    return (
        <CartModalStyle>
            <div className="CartModal">
                <div className="Closebox">
                    <IoClose onClick={onClose} />
                </div>
                <div className="top">
                    <h2>
                        <BiShoppingBag />
                        장바구니에 상품을 담았습니다.
                    </h2>
                </div>
                <div className="bottom">
                    <button>계속 쇼핑하기</button>
                    <button>장바구니 바로가기</button>
                </div>
            </div>
        </CartModalStyle>
    );
};

export default CartModal;
