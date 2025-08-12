import React from 'react';
import { SucessStyles } from './style';
import { useNavigate } from 'react-router-dom';

const LogoutSucess = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/');
    };
    return (
        <SucessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="../../../public/images/Sucessicon.png" alt="" />
                </div>
                <div className="check-text">
                    <h2>로그아웃이 완료되었습니다.</h2>
                    <h3>라운드랩을 이용해주셔서 감사합니다.</h3>
                </div>
                <div className="buttonbox">
                    <div className="buttons">
                        <button type="submit" onClick={onSubmit}>
                            메인으로가기
                        </button>
                        <button type="submit">다시 로그인</button>
                    </div>
                </div>
            </div>
        </SucessStyles>
    );
};

export default LogoutSucess;
