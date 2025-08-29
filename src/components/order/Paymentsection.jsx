import React, { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import PaymentOption from './PaymentOption';

const PaymentSection = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <div>
            <PaymentMethod selectedMethod={paymentMethod} onSelectMethod={setPaymentMethod} />
            <PaymentOption method={paymentMethod} />
        </div>
    );
};

export default PaymentSection;
