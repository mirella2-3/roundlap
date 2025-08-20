import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { eventActions } from '../../store/modules/EventSlice';

import Pagination1 from '../pagination/Megazinindex';
import EventItem from './EventItem';
import { EventListStyle } from './style';

const EventList = () => {
    const dispatch = useDispatch();
    const { events, currentPage, itemsPerPage } = useSelector((state) => state.event);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentEvents = events.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(events.length / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) dispatch(eventActions.setCurrentPage(currentPage - 1));
    };

    const handleNext = () => {
        if (currentPage < totalPages) dispatch(eventActions.setCurrentPage(currentPage + 1));
    };

    const handlePageClick = (page) => {
        dispatch(eventActions.setCurrentPage(page));
    };

    return (
        <EventListStyle>
            <div className="Event-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {currentEvents.map((event) => (
                    <EventItem key={event.id} event={event} />
                ))}
            </div>

            <Pagination1
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={handlePrev}
                onNext={handleNext}
                onPageClick={handlePageClick}
            />
        </EventListStyle>
    );
};

export default EventList;
