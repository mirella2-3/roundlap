import { StoryStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Story = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/brand');
    };
    return (
        <StoryStyle>
            <div className="left"></div>
            <div className="right">
                <h3>STORY</h3>
                <span>
                    매일 바쁜 하루 속, 당신의 피부는 괜찮으신가요? <br />
                    자연이 말하는 진짜 휴식, 라운드랩이 전해드립니다. <br />
                    깨끗하고 맑은 자연을 닮은 그 이야기, 지금 함께 들어보세요.
                </span>
                <p>
                    <button className="btn" onClick={onClick}>
                        More
                    </button>
                </p>
            </div>
        </StoryStyle>
    );
};

export default Story;
