import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const { title, price, imgurl } = product;
    return (
        <article>
            <Link to={`/shop/${product.id}`}>
                <div className="img">
                    <img src={imgurl} alt="" />
                    <div className="bg">
                        <img src="/images/wish_1.png" alt="" />
                        <img src="/images/wish_2.png" alt="" />
                    </div>
                </div>

                <div className="txt">
                    <p className="title">{title}</p>
                    <h4>{price.toLocaleString()}원</h4>
                </div>
            </Link>
        </article>
    );
};

export default ProductItem;
