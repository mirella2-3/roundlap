import React from 'react';
import { SucessStyles } from './style';
import { useNavigate } from 'react-router-dom';

const JoinSucess = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/');
    };
    return (
        <SucessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="/images/Sucessicon.png" alt="" />
                </div>
                <div className="check-text">
                    <h2>회원가입이 완료되었습니다.</h2>
                    <h3>로그인하시면 더욱 다양한 서비스와 혜택을 제공 받으실 수 있습니다.</h3>
                </div>
                <div className="buttonbox">
                    <div className="buttons">
                        <button type="submit" onClick={onSubmit}>
                            메인으로 이동
                        </button>
                        <button type="submit">로그인</button>
                    </div>
                </div>
            </div>
        </SucessStyles>
    );
};

export default JoinSucess;
