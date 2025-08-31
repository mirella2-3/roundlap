import { FaHeart } from 'react-icons/fa';
import { WishListItem as WishItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { removeWish } from '../../store/modules/wishListSlice';
import { useNavigate } from 'react-router-dom';

const WishListItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!product) return null;

    const { id, title, price, imgUrl } = product;

    const handleRemove = () => {
        dispatch(removeWish(id));
    };
    const toGo = () => {
        navigate(`/shop/${id}`); // 👈 상품 클릭 시 이동
    };

    return (
        <WishItemStyle>
            <div className="wishItem" onClick={toGo}>
                <p>
                    <img src={imgUrl} alt={title} />
                </p>

                <div className="heart" onClick={handleRemove}>
                    <FaHeart color="#FF7C76" />
                </div>

                <p className="title">{title}</p>
                {/* <strong>{price.toLocaleString()}원</strong> */}
            </div>
        </WishItemStyle>
    );
};

export default WishListItem;
