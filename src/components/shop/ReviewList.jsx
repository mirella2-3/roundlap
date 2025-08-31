import ReviewItem from './ReviewItem';

const ReviewList = ({ reviewImages }) => {
    return (
        <ul className="photo">
            {reviewImages.map((img, idx) => (
                <ReviewItem key={idx} image={img} />
            ))}
        </ul>
    );
};

export default ReviewList;
