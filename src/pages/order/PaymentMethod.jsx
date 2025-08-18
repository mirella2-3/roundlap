import React from 'react';
import { PaymentMethodStyles } from './style';

const PaymentMethod = ({ selectedMethod, onSelectMethod }) => {
    return (
        <PaymentMethodStyles>
            <div className="payment">
                <h3>결제수단</h3>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={selectedMethod === 'card'}
                        onChange={() => onSelectMethod('card')}
                    />
                    카드결제
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="easy"
                        checked={selectedMethod === 'easy'}
                        onChange={() => onSelectMethod('easy')}
                    />
                    간편결제
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="mobile"
                        checked={selectedMethod === 'mobile'}
                        onChange={() => onSelectMethod('mobile')}
                    />
                    휴대폰결제
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={selectedMethod === 'bank'}
                        onChange={() => onSelectMethod('bank')}
                    />
                    무통장입금
                </label>
            </div>
        </PaymentMethodStyles>
    );
};

export default PaymentMethod;
