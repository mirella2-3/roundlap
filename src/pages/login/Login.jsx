import { createPortal } from 'react-dom';
import { ModalContent, ModalWrapper } from './style';
import LoginWrap from '../../components/login/LoginWrap';

const Login = ({ onClose }) => {
    return createPortal(
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <LoginWrap onClose={onClose}></LoginWrap>
            </ModalContent>
        </ModalWrapper>,
        document.body
    );
};

export default Login;
