import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShopStyle } from './style';
import ProductList from '../../components/shop/ProductList';
import Pagination from '../../components/pagination';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/modules/productSlice';

const categoryDisplayMap = {
    // 영문 → 한글
    all: {
        ALL: 'ALL',
        BEST: 'BEST',
        SET: 'SET',
        SALE: 'SALE',
    },
    type: {
        toner: '토너/미스트',
        essence: '에센스/앰플',
        lotion: '로션/크림',
        cleansing: '클렌징/스크럽',
        mask: '마스크/팩',
        suncare: '선케어',
    },
    concern: {
        water: '수분/보습',
        sensitive: '민감/진정',
        vitamin: '영양/보호',
        corneous: '각질/결',
        sunblock: '자외선차단',
    },
    line: {
        dokdo: '1025',
        jajack: '자작나무 수분',
        sonamu: '소나무 진정시카',
        yakkong: '약콩 판테놀',
        man: '포 맨',
        vita: '비타 나이아신',
        baby: '베이비',
        dongbaek: '동백 탄력',
    },
};

const categories = {
    all: ['ALL', 'BEST', 'SET', 'SALE'],
    type: ['toner', 'essence', 'lotion', 'cleansing', 'mask', 'suncare'],
    concern: ['water', 'sensitive', 'vitamin', 'corneous', 'sunblock'],
    line: ['1025', 'jajack', 'sonamu', 'yakkong', 'man', 'vita', 'baby', 'dongbaek'],
};

const Shop = () => {
    const { category, line } = useParams(); // /product/:category/:line 구조
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        if (category && Object.keys(categories).includes(category)) {
            setActiveCategory(category);
        } else {
            setActiveCategory('all');
        }
    }, [category]);

    const lines = categories[activeCategory] || [];

    const handleTabClick = (lineName) => {
        navigate(`/shop/${activeCategory}/${lineName}`);
    };

    useEffect(() => {
        // 첫 로딩 시 전체 상품 세팅
        dispatch(productActions.setAllProducts());
    }, []);

    useEffect(() => {
        dispatch(productActions.filterByCategory(line));
    }, [line]);

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
                            {categoryDisplayMap[activeCategory]?.[lineName] || lineName}
                        </div>
                    ))}
                </div>
                <p className="line"></p>
                <ProductList category={activeCategory} line={line} />
                {/* <Pagination /> */}
            </div>
        </ShopStyle>
    );
};

export default Shop;
