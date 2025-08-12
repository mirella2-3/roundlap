import { WishListStyle } from './style';
import WishListItem from './WishListItem';
import WishListList from './WishListList';
import WishListNoting from './WishListNoting';
import { LuPlus } from 'react-icons/lu';

const WishList = () => {
    return (
        <WishListStyle>
            <div className="title">
                <h3>위시리스트</h3>
                <span>더보기 +</span>
            </div>

            <WishListNoting />
            <WishListList />
        </WishListStyle>
    );
};

export default WishList;
