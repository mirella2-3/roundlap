import RecommendList from './RecommendList';
import Review from './Review';
import { ProductRecomStyle } from './style';

const ProductRecom = () => {
    return (
        <ProductRecomStyle>
            <div className="inner">
                <h2>YOU MIGHT ALSO LIKE</h2>
                <strong>이런 상품은 어떠신가요?</strong> <RecommendList />
            </div>
        </ProductRecomStyle>
    );
};

export default ProductRecom;
