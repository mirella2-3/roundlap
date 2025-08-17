import { VisualStyle } from './style';

const MainVisual = () => {
    return (
        <VisualStyle>
            <ul className="visualImg">
                <li>
                    <img src="/images/Main/Left.png" alt="" />
                </li>
                <li>
                    <img src="/images/Main/Right.png" alt="" />
                </li>
            </ul>
            <div className="inner"></div>
        </VisualStyle>
    );
};

export default MainVisual;
