import React from 'react';
import { CardStyles } from './style';

const CardPayment = () => {
    return (
        <CardStyles>
            <div className="card">
                <button>KB국민카드</button>
                <button>BC카드</button>
                <button>현대카드</button>
                <button>롯데카드</button>
                <button>하나카드</button>
                <button>삼성카드</button>
                <button>우리카드</button>
                <button>씨티카드</button>
                <button>NH카드</button>
                <button>그 외</button>
            </div>
        </CardStyles>
    );
};

export default CardPayment;
