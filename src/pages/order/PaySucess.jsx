import React from 'react';
import { PaySucessStyles } from './style';
import { useNavigate } from 'react-router-dom';

const PaySucess = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/');
    };
    return (
        <PaySucessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="/images/Sucessicon.png" alt="" />
                </div>
                <div className="check-text">
                    <h2>주문이 완료되었습니다.</h2>
                    <h3>고객님의 주문이 정상적으로 완료되었습니다.</h3>
                </div>
                <div className="buttonbox">
                    <div className="buttons">
                        <button type="submit" onClick={onSubmit}>
                            메인으로가기
                        </button>
                        <button type="submit">주문내역 확인</button>
                    </div>
                </div>
            </div>
        </PaySucessStyles>
    );
};

export default PaySucess;
