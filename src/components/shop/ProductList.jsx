import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { ProductListWrap } from './style';

const ProductList = () => {
    // const { products } = useSelector((state) => state.product);
    const filteredProducts = useSelector((state) => state.product.filtered);

    return (
        <ProductListWrap className="product-box">
            {filteredProducts?.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductListWrap>
    );
};

export default ProductList;
