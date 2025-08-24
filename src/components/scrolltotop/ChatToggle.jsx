import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatStyle } from './style';

const ChatToggle = () => {
    const [isChatVisible, setIsChatVisible] = useState(false);

    const toggleChat = () => {
        setIsChatVisible((prev) => !prev);
    };

    return (
        <ChatStyle>
            <button className="chat-btn" onClick={toggleChat}>
                CH
            </button>

            {isChatVisible && (
                <div className="chat-window">
                    <div className="chat-header">💬 채팅창</div>
                    <div className="chat-body">
                        <p>안녕하세요! 무엇을 도와드릴까요?</p>
                    </div>
                </div>
            )}
        </ChatStyle>
    );
};

export default ChatToggle;
