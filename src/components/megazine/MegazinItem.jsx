import React from 'react';
import { MegazineItemStyle } from './style';

const MegazinItem = ({ magazine }) => {
    const { id, title, context, imgUrl, date } = magazine;
    return (
        <MegazineItemStyle>
            <div className="img-container">
                <img src={imgUrl} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{context}</p>
            <span>{date}</span>
        </MegazineItemStyle>
    );
};

export default MegazinItem;
