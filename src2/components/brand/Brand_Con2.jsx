import { Con2Style } from './style';

const Brand_Con2 = () => {
    return (
        <Con2Style>
            {/* 페이지  인 ( <- 방향) 효과 */}
            <ul className="top_menu">
                <li>깨끗한 원료를 선별하다</li>
                <li className="on">피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>THOUGHTFUL</span>
                <span>ABOUT</span>
                <span>YOUR SKIN</span>
            </div>
            <div className="txtwrap">
                <strong>" 피부가 원하는 화장품은 따로 있지 않을까? "</strong>
                <span>라운드랩은 건강한 원료가 피부에 온전히 닿길 바라는</span>
                <span>마음으로 복잡하고 무거운 성분은 내려놓고</span>
                <span>
                    <strong>효과를 오롯이 담을 수 있는 제형과 성분</strong>을 고민합니다.
                </span>
            </div>
        </Con2Style>
    );
};

export default Brand_Con2;
