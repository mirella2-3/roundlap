import React from 'react';
import { MegazineStyle } from './style';

const MegazinVisual = () => {
    return (
        <MegazineStyle>
            <div className="banner">
                <div className="textbox">
                    <h2>
                        팀앤팀 2021 물을 위한 기부 러닝 캠페인 <br />
                        2천 5백만원 상당 제품 후원
                    </h2>
                    <p>
                        지난해 11월에 이어 올해도 국제 구호개발 NGO 팀앤팀에서 진행하는 물을 위한
                        <br />
                        기부 러닝 캠페인에 2천 5백만원 상당의 자작나무 수분 선크림 1,000개를
                        후원했다.
                    </p>
                    <button>자세히보기</button>
                </div>
                <div className="imeagebox">
                    <img src="/images/banner.png" alt="" />
                </div>
            </div>
        </MegazineStyle>
    );
};

export default MegazinVisual;
