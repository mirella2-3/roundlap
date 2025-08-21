import { BestItemStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWish } from '../../store/modules/WishListSlice';

const BestItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            title: '1025 독도토너 대용량 500ml',
            price: 25000,
            imgurl: '/images/Main/Main-products01.png',
        },
        {
            id: 2,
            title: '1025 독도로션 200ml',
            price: 18000,
            imgurl: '/images/Main/Main-products02.png',
        },
        {
            id: 3,
            title: '1025 독도토너 200ml',
            price: 12000,
            imgurl: '/images/Main/Main-products03.png',
        },
        {
            id: 4,
            title: '1025 독도크림 80ml',
            price: 30000,
            imgurl: '/images/Main/Main-products04.png',
        },
        {
            id: 5,
            title: '1025 독도클렌져 150ml x 2 세트',
            price: 45000,
            imgurl: '/images/Main/Main-products05.png',
        },
    ];

    const handleWishClick = (product) => {
        dispatch(addWish(product));
        navigate('/mypage');
    };

    return (
        <BestItemStyle>
            <div className="inner">
                <h2>BEST ITEM</h2>
                <ul className="items">
                    {products.map((product) => (
                        <li key={product.id}>
                            <p>
                                <img src={product.imgurl} alt={product.title} />
                                <div className="bg">
                                    <img
                                        src="/images/wish_1.png"
                                        alt="wish"
                                        onClick={() => handleWishClick(product)}
                                    />
                                    <img src="/images/wish_2.png" alt="" />
                                </div>
                            </p>
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
