import React from 'react';
import CardPayment from './CardPayment';
import EasyPayment from './EasyPayment';
import MobilePayment from './MobilePayment';
import BankPayment from './BankPayment';

const PaymentOption = ({ method }) => {
    switch (method) {
        case 'card':
            return <CardPayment />;
        case 'easy':
            return <EasyPayment />;
        case 'mobile':
            return <MobilePayment />;
        case 'bank':
            return <BankPayment />;
        default:
            return null;
    }
};

export default PaymentOption;
