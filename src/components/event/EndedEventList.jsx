import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eventActions } from '../../store/modules/eventSlice';
import Pagination1 from '../pagination/Magazinindex';
import EventItem from './EventItem';
import { EventListStyle } from './style';

const EndedEventList = () => {
    const dispatch = useDispatch();
    const { events, currentPage, itemsPerPage } = useSelector((state) => state.event);
    const endedEvents = events.filter((event) => event.isActive === false);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentEvents = endedEvents.slice(indexOfFirst, indexOfLast);
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
            <div className="Event-list">
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

export default EndedEventList;
