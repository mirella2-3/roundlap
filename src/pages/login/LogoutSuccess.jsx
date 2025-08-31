import React, { useState } from 'react';
import { SuccessStyles } from './style';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const LogoutSuccess = () => {
    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleGoMain = () => {
        navigate('/');
    };

    const toggleLogin = () => setIsLoginOpen((prev) => !prev);

    return (
        <SuccessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="/images/Successicon.png" alt="로그아웃 성공 아이콘" />
                </div>
                <div className="check-text">
                    <h2>로그아웃이 완료되었습니다.</h2>
                    <h3>라운드랩을 이용해주셔서 감사합니다.</h3>
                </div>
                <div className="buttonbox">
                    <div className="buttons">
                        <button type="button" onClick={handleGoMain}>
                            메인으로 가기
                        </button>
                        <button type="button" onClick={toggleLogin}>
                            다시 로그인
                        </button>
                    </div>
                </div>
                {isLoginOpen && <Login onClose={toggleLogin} />}
            </div>
        </SuccessStyles>
    );
};

export default LogoutSuccess;
