import { useSelector } from 'react-redux';
import WishListItem from './WishListItem';
import { WishListStyle } from './style';
import WishListNoting from './WishListNoting';

const WishList = () => {
    const wishItems = useSelector((state) => state.wish.wishItems);

    if (wishItems.length === 0) return <WishListNoting />;

    return (
        <WishListStyle>
            <ul>
                {wishItems.map((item) => (
                    <li key={item.id}>
                        <WishListItem product={item} />
                    </li>
                ))}
            </ul>
        </WishListStyle>
    );
};

export default WishList;
