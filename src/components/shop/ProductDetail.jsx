import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();

    // 예시: 전체 상품 중 id로 찾기
    const product = allProducts.find((item) => item.id === parseInt(productId));

    return (
        <div>
            <h2>{product?.title}</h2>
            <img src={product?.imgurl} alt={product?.title} />
            <p>{product?.price}원</p>
            {/* 추가 정보 등 */}
        </div>
    );
};
export default ProductDetail;
