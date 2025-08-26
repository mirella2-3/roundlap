import React, { useState } from 'react';
import { CardStyles } from './style';

const MobilePayment = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const cards = ['휴대폰결제'];

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

export default MobilePayment;
