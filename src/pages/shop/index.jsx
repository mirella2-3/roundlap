import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShopStyle } from './style';
import ProductList from '../../components/shop/ProductList';
import Pagination from '../../components/pagination';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/modules/productSlice';

const categories = {
    all: ['ALL', 'BEST', 'SET', 'SALE'],
    cleansing: ['토너/미스트', '에센스/앰플', '로션/크림', '클렌징/스크럽', '마스크/팩', '선 케어'],
    sunblock: ['수분/보습', '민감/진정', '영양/보호', '각질/결', '자외선 차단'],
    line: ['1025', '자작나무 수분', '소나무 진정시카', '약콩 판테놀', '포 맨', '비타 나이아신'],
};

const Shop = () => {
    const { category, line } = useParams(); // /product/:category/:line 구조
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState(category || 'all');
    const lines = categories[activeCategory] || [];

    const handleTabClick = (lineName) => {
        navigate(`/shop/${activeCategory}/${lineName}`);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        // 첫 로딩 시 전체 상품 세팅
        dispatch(productActions.setAllProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productActions.filterByCategory(line));
    }, [line, dispatch]);

    return (
        <ShopStyle>
            <div className="inner">
                <h2>전제품</h2>
                <div className="product-tabs on">
                    {lines.map((lineName) => (
                        <div
                            key={lineName}
                            className={lineName === line ? 'active-tab' : ''}
                            onClick={() => handleTabClick(lineName)}
                        >
                            {lineName}
                        </div>
                    ))}
                </div>
                <p className="line"></p>
                <ProductList category={activeCategory} line={line} />
                <Pagination />
            </div>
        </ShopStyle>
    );
};

export default Shop;
