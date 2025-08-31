import React, { useState } from 'react';
import { CardStyles } from './style';

const BankPayment = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = ['무통장 입금', '실시간 계좌이체'];

    const onClick = (card) => {
        setSelectedCard(card);
    };
    return (
        <CardStyles>
            <div className="card">
                {cards.map((card) => (
                    <button
                        key={card}
                        onClick={() => onClick(card)}
                        className={selectedCard === card ? 'selected' : ''}
                    >
                        {card}
                    </button>
                ))}
            </div>
        </CardStyles>
    );
};

export default BankPayment;
