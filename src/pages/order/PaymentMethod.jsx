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
                    <p>카드결제</p>
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="easy"
                        checked={selectedMethod === 'easy'}
                        onChange={() => onSelectMethod('easy')}
                    />
                    <p>간편결제</p>
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="mobile"
                        checked={selectedMethod === 'mobile'}
                        onChange={() => onSelectMethod('mobile')}
                    />
                    <p>휴대폰결제</p>
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={selectedMethod === 'bank'}
                        onChange={() => onSelectMethod('bank')}
                    />
                    <p>무통장입금</p>
                </label>
            </div>
        </PaymentMethodStyles>
    );
};

export default PaymentMethod;
