import { FaHeart } from 'react-icons/fa';
import { CartWishStyle } from './style';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const WishModal = ({ onClose }) => {
    const navigate = useNavigate();
    const onToggle = () => {
        onClose();
        navigate('/mypage');
    };
    return (
        <CartWishStyle>
            <div className="CartModal">
                <div className="Closebox">
                    <IoClose size={15} onClick={onClose} style={{ cursor: 'pointer' }} />
                </div>

                <div className="top">
                    <h2>
                        관심목록에
                        <br />
                        상품을 담았습니다.
                    </h2>
                </div>

                <div className="bottom">
                    <button onClick={onClose}>계속 쇼핑하기</button>
                    <button onClick={onToggle}>관심상품 확인</button>
                </div>
            </div>
        </CartWishStyle>
    );
};

export default WishModal;
