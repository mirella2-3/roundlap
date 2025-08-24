import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { ScrollStyle } from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ScrollBtns = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const [isChatVisible, setIsChatVisible] = useState(false);

    const toggleChat = () => {
        setIsChatVisible((prev) => !prev);
    };

    return (
        <ScrollStyle>
            <button className="chatBot" onClick={toggleChat}>
                Ch
            </button>
            {isChatVisible && (
                <div className="chat-window">
                    <div className="chat-header">💬 라운드랩 상담원과 연결하기</div>
                    <div className="chat-body">
                        <div className="chat-bubble bot">안녕하세요! 무엇을 도와드릴까요?</div>
                    </div>
                </div>
            )}
            <button className="top" onClick={scrollToTop} aria-label="Scroll to top">
                <MdKeyboardArrowUp size={30} />
            </button>
            <button className="bottom" onClick={scrollToBottom} aria-label="Scroll to bottom">
                <MdKeyboardArrowDown size={30} />
            </button>
        </ScrollStyle>
    );
};

export default ScrollBtns;
