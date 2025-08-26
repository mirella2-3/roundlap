import React, { useState } from 'react';
import { CardStyles } from './style';

const CardPayment = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        'KB국민카드',
        'BC카드',
        '현대카드',
        '롯데카드',
        '하나카드',
        '삼성카드',
        '우리카드',
        '씨티카드',
        'NH카드',
        '그 외',
    ];

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

export default CardPayment;
