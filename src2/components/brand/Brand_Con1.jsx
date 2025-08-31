import { Con1Style } from './style';

const Brand_Con1 = () => {
    return (
        <Con1Style>
            <ul className="top_menu">
                <li className="on">깨끗한 원료를 선별하다</li>
                <li>피부를 고민하다</li>
                <li>더 나은 가치를 향하다</li>
            </ul>
            <div className="txtbox">
                <span>SELECT</span>
                <span>CLEAN</span>
                <span>RAW MATERIALS</span>
            </div>
            <div className="wrap">
                <div className="left">
                    {/* 스크롤하면 이미지변경 */}
                    <img src="./images/brand_water.png" alt="" />
                </div>
                <div className="right">
                    {/* 스크롤하면 텍스트 돌면서 색상변경 */}
                    <div className="txts">
                        <span>사람의 손이 닿지 않는 깊은 바다의</span>
                        <strong>울릉도 해양심층수</strong>
                    </div>
                    <ul className="circle">
                        <li className="on">Dokdo</li>
                        <li>BIRCH</li>
                        <li>PINE</li>
                        <li>SOYBEAN</li>
                        <li>VITA</li>
                        <li>CAMELLIA</li>
                        <li>OATS</li>
                    </ul>
                </div>
            </div>
        </Con1Style>
    );
};

export default Brand_Con1;
