import { createPortal } from 'react-dom';
import { ModalContent, ModalWrapper } from './style';
import SearchWrap from './SearchWrap';

const Search = ({ onClose }) => {
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
