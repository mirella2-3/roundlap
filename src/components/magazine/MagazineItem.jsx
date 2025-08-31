import React from 'react';
import { MagazineItemStyle } from './style';

const MagazineItem = ({ magazine }) => {
    const { id, title, context, imgUrl, date } = magazine;
    return (
        <MagazineItemStyle>
            <div className="img-container">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p>{context}</p>
                <span>{date}</span>
            </div>
        </MagazineItemStyle>
    );
};

export default MagazineItem;
