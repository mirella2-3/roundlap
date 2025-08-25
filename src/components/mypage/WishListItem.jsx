import { FaHeart } from 'react-icons/fa';
import { WishListItem as WishItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { removeWish } from '../../store/modules/WishListSlice';

const WishListItem = ({ product }) => {
    const dispatch = useDispatch();
    if (!product) return null;

    const { id, title, price, imgUrl } = product;

    const handleRemove = () => {
        dispatch(removeWish(id));
    };

    return (
        <WishItemStyle>
            <div className="wishItem">
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
