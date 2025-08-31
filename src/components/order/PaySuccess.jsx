import React from 'react';
import { PaySuccessStyles } from './style';
import { useNavigate } from 'react-router-dom';

const PaySuccess = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };
    const onOrder = (e) => {
        e.preventDefault();
        navigate('/mypage');
    };
    return (
        <PaySuccessStyles>
            <div className="inner">
                <div className="checkbox">
                    <img src="/images/Successicon.png" alt="" />
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
                        <button type="submit" onClick={onOrder}>
                            주문내역 확인
                        </button>
                    </div>
                </div>
            </div>
        </PaySuccessStyles>
    );
};

export default PaySuccess;
