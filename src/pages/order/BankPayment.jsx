import React from 'react';
import { CardStyles } from './style';

const BankPayment = () => {
    return (
        <CardStyles>
            <div className="card">
                <button>무통장 입금</button>
                <button>실시간 계좌이체</button>
            </div>
        </CardStyles>
    );
};

export default BankPayment;
