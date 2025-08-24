import RecommendItem from './RecommendItem';
import { RecommendListStyle } from './style';
import { useSelector } from 'react-redux';
import { allProductData } from '../../assets/api/productData';

const RecommendList = ({ currentItem }) => {
    if (!currentItem) return <div>Loading...</div>;

    const filteredItems = allProductData.filter((item) => item.id !== currentItem.id);
    const shuffled = filteredItems.sort(() => Math.random() - 0.5).slice(0, 5);
    return (
        <RecommendListStyle>
            {shuffled.map((item) => (
                <RecommendItem key={item.id} item={item} />
            ))}
        </RecommendListStyle>
    );
};

export default RecommendList;
