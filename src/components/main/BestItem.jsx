import { BestItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { addWish } from '../../store/modules/WishListSlice';
import { addCart, openCart } from '../../store/modules/CartSlice';
import { useNavigate } from 'react-router-dom';

const BestItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleWishClick = (product) => {
        dispatch(addWish(product));
    };

    const handleCartClick = (product) => {
        dispatch(addCart(product));
        dispatch(openCart());
    };
    const handleDetailClick = (product) => {
        navigate(`/shop/${product.id}`);
    };
    const products = [
        {
            id: 23,
            title: '1025 독도 토너 대용량 500ml',
            price: 30000,
            salePrice: 26500,
            category: ['toner', 'sensitive', '1025', 'SALE'],
            salePercent: 12,

            imgUrl: '/images/Main/Main-products01.png',
            nowLine: '1025',
            colorDark: '#A1D7EB',
            colorSale: '#709FD2',
            colorLight: '#EFF7FB',
            desc: [
                '민감한 피부도 편안하게 사용하는 저자극 수분케어',
                '해양심층수가 전하는 깊고 풍부한 보습 에너지',
                '데일리 케어에 적합한 산뜻하고 촉촉한 수분라인',
                '피부 밸런스를 맞춰주는 약산성 진정 솔루션',
                '번들거림 없이 흡수되는 산뜻한 수분 진정 포뮬러',
                '피부를 맑고 촉촉하게 가꿔주는 균형 잡힌 보습관리',
            ],
        },
        {
            id: 26,
            title: '1025 독도 로션 200ml',
            price: 16000,
            salePrice: 16000,
            category: ['lotion', 'sensitive', '1025', 'BEST'],

            imgUrl: '/images/Main/Main-products02.png',
            nowLine: '1025',
            colorDark: '#A1D7EB',
            colorSale: '#709FD2',
            colorLight: '#EFF7FB',
            desc: [
                '민감한 피부도 편안하게 사용하는 저자극 수분케어',
                '해양심층수가 전하는 깊고 풍부한 보습 에너지',
                '데일리 케어에 적합한 산뜻하고 촉촉한 수분라인',
                '피부 밸런스를 맞춰주는 약산성 진정 솔루션',
                '번들거림 없이 흡수되는 산뜻한 수분 진정 포뮬러',
                '피부를 맑고 촉촉하게 가꿔주는 균형 잡힌 보습관리',
            ],
        },
        {
            id: 1,
            title: '촉촉한 각질제거 1025 독도 토너 200ml',
            price: 16700,
            salePrice: 16700,
            category: ['toner', 'water', '1025', 'BEST'],

            imgUrl: '/images/Main/Main-products03.png',
            nowLine: '1025',
            colorDark: '#A1D7EB',
            colorSale: '#709FD2',
            colorLight: '#EFF7FB',
            desc: [
                '민감한 피부도 편안하게 사용하는 저자극 수분케어',
                '해양심층수가 전하는 깊고 풍부한 보습 에너지',
                '데일리 케어에 적합한 산뜻하고 촉촉한 수분라인',
                '피부 밸런스를 맞춰주는 약산성 진정 솔루션',
                '번들거림 없이 흡수되는 산뜻한 수분 진정 포뮬러',
                '피부를 맑고 촉촉하게 가꿔주는 균형 잡힌 보습관리',
            ],
        },
        {
            id: 27,
            title: '1025 독도 크림 80ml',
            price: 16000,
            salePrice: 16000,
            category: ['lotion', 'sensitive', '1025'],

            imgUrl: '/images/Main/Main-products04.png',
            nowLine: '1025',
            colorDark: '#A1D7EB',
            colorSale: '#709FD2',
            colorLight: '#EFF7FB',
            desc: [
                '민감한 피부도 편안하게 사용하는 저자극 수분케어',
                '해양심층수가 전하는 깊고 풍부한 보습 에너지',
                '데일리 케어에 적합한 산뜻하고 촉촉한 수분라인',
                '피부 밸런스를 맞춰주는 약산성 진정 솔루션',
                '번들거림 없이 흡수되는 산뜻한 수분 진정 포뮬러',
                '피부를 맑고 촉촉하게 가꿔주는 균형 잡힌 보습관리',
            ],
        },
        {
            id: 3,
            title: '1025 독도 클렌저  150ml',
            price: 13800,
            salePrice: 13800,
            category: ['cleansing', 'corneous', '1025', 'BEST'],

            imgUrl: '/images/Main/Main-products05.png',
            nowLine: '1025',
            colorDark: '#A1D7EB',
            colorSale: '#709FD2',
            colorLight: '#EFF7FB',
            desc: [
                '민감한 피부도 편안하게 사용하는 저자극 수분케어',
                '해양심층수가 전하는 깊고 풍부한 보습 에너지',
                '데일리 케어에 적합한 산뜻하고 촉촉한 수분라인',
                '피부 밸런스를 맞춰주는 약산성 진정 솔루션',
                '번들거림 없이 흡수되는 산뜻한 수분 진정 포뮬러',
                '피부를 맑고 촉촉하게 가꿔주는 균형 잡힌 보습관리',
            ],
        },
    ];

    return (
        <BestItemStyle>
            <div className="inner">
                <p className="circle"></p>
                <h2 className="engTitle">BEST ITEMS</h2>
                <ul className="items">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div>
                                <img
                                    src={product.imgUrl}
                                    alt={product.title}
                                    onClick={() => handleDetailClick(product)}
                                />

                                <p className="bg">
                                    <img
                                        src="/images/wish_1.png"
                                        alt="wish"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleWishClick(product);
                                        }}
                                    />
                                    <img
                                        src="/images/wish_2.png"
                                        alt=""
                                        nClick={(e) => {
                                            e.stopPropagation();
                                            handleCartClick(product);
                                        }}
                                    />
                                </p>
                            </div>
                            <strong>{product.title}</strong>
                            {/* <span>{product.price.toLocaleString()}원</span> */}
                        </li>
                    ))}
                </ul>
            </div>
        </BestItemStyle>
    );
};

export default BestItem;
