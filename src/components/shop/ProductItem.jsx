const ProductItem = ({ product }) => {
    const { title, price, imgurl } = product;
    return (
        <article>
            {/* <Link to={`/shop/:category/:productId`}> */}
            <div>
                <img src={imgurl} alt="" />
            </div>
            <div className="txt">
                <p className="title">{title}</p>
                <h4>
                    <span>{price}</span>원
                </h4>
            </div>
            {/* </Link> */}
        </article>
    );
};

export default ProductItem;
