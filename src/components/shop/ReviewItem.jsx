const ReviewItem = ({ image }) => {
    return (
        <li>
            <p>
                <img src={image} alt="" />
            </p>
            <div className="black_bg"></div>
            <span>자세히 보기</span>
        </li>
    );
};

export default ReviewItem;
