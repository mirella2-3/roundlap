import { createPortal } from 'react-dom';
import { ModalContent, ModalWrapper } from './style';
import SearchWrap from './SearchWrap';
import { useEffect } from 'react';

const Search = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        };
    }, []);

    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <SearchWrap onClose={onClose}></SearchWrap>
            </ModalContent>
        </ModalWrapper>,
        document.body
    );
};

export default Search;
