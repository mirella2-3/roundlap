import styled from 'styled-components';

export const ScrollStyle = styled.div`
    .chatBot {
        position: fixed;
        right: 66px;
        /* right: 30px; */
        bottom: 250px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        color: #00395e;
        font-size: 16px;
        font-weight: 700;
        z-index: 1000;
        &:hover {
            background: #00395e;
            color: #fff;
        }
    }

    .chat-window {
        position: fixed;
        bottom: 100px;
        right: 130px;
        width: 300px;
        height: 400px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        z-index: 1000;
    }

    .chat-header {
        padding: 10px;
        color: #515151;
        font-weight: bold;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .chat-body {
        flex: 1;
        padding: 10px;
        overflow-y: auto;
        p {
            font-size: 15px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            box-shadow: 0 2px 10px;
        }
    }
    .chat-bubble {
        max-width: 80%;
        padding: 10px 15px;
        margin: 10px 0;
        border-radius: 15px;
        position: relative;
        font-size: 14px;
        line-height: 1.4;
    }

    /* 봇 메시지 (왼쪽) */
    .chat-bubble.bot {
        background-color: #e0e0e0;
        color: #000;
        align-self: flex-start;
        margin-left: 10px;
    }

    .chat-bubble.bot::after {
        content: '';
        position: absolute;
        left: -10px;
        top: 10px;
        border: 10px solid transparent;
        border-right-color: #e0e0e0;
    }

    /* 사용자 메시지 (오른쪽) 추가하고 싶을 때 사용 */
    .chat-bubble.user {
        background-color: #007bff;
        color: white;
        align-self: flex-end;
        margin-left: auto;
        margin-right: 10px;
    }

    .chat-bubble.user::after {
        content: '';
        position: absolute;
        right: -10px;
        top: 10px;
        border: 10px solid transparent;
        border-left-color: #007bff;
    }
    button {
        position: fixed;
        right: 66px;
        /* right: 30px; */
        font-size: 16px;
        cursor: pointer;
        background: #515151;
        z-index: 1000;
        color: #fff;
        box-sizing: border-box;
        width: 42px;
        height: 50px;

        &.top {
            bottom: 191px;
            border-radius: 48px 48px 0 0;
        }
        &.bottom {
            bottom: 140px;
            border-radius: 0 0 48px 48px;
        }
    }
`;
