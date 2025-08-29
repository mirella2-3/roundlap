// components/magazine/MegazinList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MagazinItem from './MagazineItem';
import { magazineActions } from '../../store/modules/magazineSlice';
import { MagazineListStyle } from './style';
import Pagination1 from '../pagination/Magazinindex';

const MagazineList = () => {
    const dispatch = useDispatch();
    const { magazines, currentPage, itemsPerPage } = useSelector((state) => state.magazine);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentMagazines = magazines.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(magazines.length / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) dispatch(magazineActions.setCurrentPage(currentPage - 1));
    };

    const handleNext = () => {
        if (currentPage < totalPages) dispatch(magazineActions.setCurrentPage(currentPage + 1));
    };

    const handlePageClick = (page) => {
        dispatch(magazineActions.setCurrentPage(page));
    };

    return (
        <MagazineListStyle>
            <div
                className="magazine-list"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
            >
                {currentMagazines.map((mag) => (
                    <MagazinItem key={mag.id} magazine={mag} />
                ))}
            </div>

            <Pagination1
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={handlePrev}
                onNext={handleNext}
                onPageClick={handlePageClick}
            />
        </MagazineListStyle>
    );
};

export default MagazineList;
