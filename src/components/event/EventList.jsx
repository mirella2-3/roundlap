import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { eventActions } from '../../store/modules/EventSlice';

import Pagination1 from '../pagination/Megazinindex';
import EventItem from './EventItem';
import { EventListStyle } from './style';

const EventList = () => {
    const dispatch = useDispatch();
    const { events, currentPage, itemsPerPage } = useSelector((state) => state.event);

    // 🔁 isActive가 true인 항목이 먼저 오도록 정렬
    const sortedEvents = [...events].sort((a, b) => b.isActive - a.isActive);

    // 📄 페이징을 정렬된 목록에 적용
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentEvents = sortedEvents.slice(indexOfFirst, indexOfLast);

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
