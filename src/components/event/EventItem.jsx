import React from 'react';
import { EventItemStyle } from './style';

const EventItem = ({ event }) => {
    const { title, desc, imgurl, date } = event;
    return (
        <EventItemStyle>
            <div className="img-container">
                <img src={imgurl} alt={title} />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p>{desc}</p>
                <span>{date}</span>
            </div>
        </EventItemStyle>
    );
};

export default EventItem;
