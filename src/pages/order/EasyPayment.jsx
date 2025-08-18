import React from 'react';
import { CardStyles } from './style';

const EasyPayment = () => {
    return (
        <CardStyles>
            <div className="card">
                <button>네이버페이</button>
                <button>카카오페이</button>
                <button>토스페이</button>
                <button>삼성페이</button>
                <button>애플페이</button>
                <button>KB페이</button>
                <button>PAYCO</button>
            </div>
        </CardStyles>
    );
};

export default EasyPayment;
