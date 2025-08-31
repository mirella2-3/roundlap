import { IoCartOutline } from 'react-icons/io5';
import { CartEmptyStyle } from './style';
import CartBottom from './CartBottom';

const CartEmpty = () => {
    return (
        <CartEmptyStyle>
            <div className="Emptybox">
                <div className="EmptyIcon">
                    <IoCartOutline />
                </div>
                <div className="EmptyText">
                    <p className="EmptyText">장바구니가 비어 있습니다.</p>
                    <span className="EmptySubText">원하는 상품을 담아보세요!</span>
                    <CartBottom carts={[]} />
                </div>
            </div>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
