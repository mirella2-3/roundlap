import { StoryStyle } from './style';

const Story = () => {
    return (
        <StoryStyle>
            <div className="left"></div>
            <div className="right">
                <h3>STORY</h3>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <p>
                    <button>MORE</button>
                </p>
            </div>
        </StoryStyle>
    );
};

export default Story;
