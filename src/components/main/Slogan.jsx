import { SloganStyle } from './style';

const Slogan = () => {
    return (
        <SloganStyle>
            <div className="inner">
                <strong>BETTER SKIN, BETTER ROUND</strong>
                <h3>피부와 세상을 변화시키는 매일의 힘, 라운드랩</h3>
                <span>
                    지친 하루의 끝, 나를 웃음 짓게 하는 소소한 행복처럼 삶의 휴식이 필요한 당신에게
                    피부를 위한 다정한 쉬어감을 제안합니다.
                    <br />
                    건강한 원료들이 전하는 따스한 토닥임으로 오늘도 ‘라운드랩’하세요.
                </span>
                <p>
                    <img src="/images/Main/slogan1.png" alt="" />
                </p>
            </div>
        </SloganStyle>
    );
};

export default Slogan;
