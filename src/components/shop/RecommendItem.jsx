import { useNavigate } from 'react-router-dom';

const RecommendItem = ({ item }) => {
    const { imgUrl, title, salePrice, colorLight, id } = item;
    const navigate = useNavigate();
    const goToDetail = () => {
        navigate(`/shop/${id}`);
    };

    return (
        <li onClick={goToDetail}>
            <p>
                <img src={imgUrl} alt={title} style={{ background: colorLight }} />
            </p>
            <h4 className="title">{title}</h4>
            <strong>{salePrice.toLocaleString()}원</strong>
        </li>
    );
};

export default RecommendItem;
