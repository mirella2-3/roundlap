import { useSelector } from 'react-redux';
import WishListItem from './WishListItem';
import { WishListStyle } from './style';

const WishList = () => {
    const wishItems = useSelector((state) => state.wish.wishItems);

    if (wishItems.length === 0) return <WishListStyle>위시리스트가 비어있습니다.</WishListStyle>;

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
