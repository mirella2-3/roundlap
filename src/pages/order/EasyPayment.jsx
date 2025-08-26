import React, { useState } from 'react';
import { CardStyles } from './style';

const EasyPayment = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        '네이버페이',
        '카카오페이',
        '토스페이',
        '삼성페이',
        '애플페이',
        'KB페이',
        'PAYCO',
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

export default EasyPayment;
