import React, { useState } from 'react';
import { LogoutAcessStyles } from './style';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';

const MypageAcess = () => {
    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/login/Join');
    };
    const toggleLogin = () => setIsLoginOpen((prev) => !prev);
    return (
        <LogoutAcessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="/images/Sucessicon.png" alt="" />
                </div>
                <div className="check-text">
                    <h2>“마이페이지는 회원 전용입니다"</h2>
                    <h3>로그인 후, 나만의 맞춤 뷰티 정보를 확인해보세요.</h3>
                </div>
                <div className="buttonbox">
                    <div className="buttons">
                        <button type="submit" onClick={onSubmit}>
                            회원가입하기
                        </button>
                        <button type="submit" onClick={toggleLogin}>
                            로그인
                        </button>
                    </div>
                </div>
            </div>
            {isLoginOpen && <Login onClose={toggleLogin} />}
        </LogoutAcessStyles>
    );
};

export default MypageAcess;
