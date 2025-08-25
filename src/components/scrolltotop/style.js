import styled from 'styled-components';

export const ScrollStyle = styled.div`
    .chatBot {
        position: fixed;
        right: 66px;
        /* right: 30px; */
        bottom: 161px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        color: #00395e;
        font-size: 16px;
        font-weight: 700;
        z-index: 1000;
        box-shadow: 0 0 2px;
        &:hover {
            background: #00395e;
            color: #fff;
        }
    }

    .chat-window {
        position: fixed;
        bottom: 100px;
        right: 130px;
        width: 370px;
        height: 650px;
        background-image: url(/images/scroll/CH.png);
        border-radius: 30px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        z-index: 1000;
    }

    .chat-header {
        padding: 0 25px;
        padding-top: 144px;
        box-sizing: border-box;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 24px;
        strong {
            font-size: 12px;
            font-weight: 300;
        }
    }

    .chat-body {
        margin: 8px 20px;
        flex: 1;
        padding: 0 25px;
        box-sizing: border-box;
        width: 329px;
        /* height: 274px; */
        border-radius: 30px;
        background: #fff;
        .chat-page {
            .logo {
                padding-top: 44px;
                padding-bottom: 29px;
                width: 156px;
                img {
                    width: 100%;
                }
            }
            .hi {
                font-size: 14px;
                color: #1a1a1a;
                width: 100%;
                font-weight: 500;
                margin-bottom: 37px;
            }
            .chat-button {
                font-size: 16px;
                font-weight: 700;
                padding: 12px 111px;
                box-sizing: border-box;
                background: #515151;
                color: #fff;
                cursor: pointer;
            }

            .notice {
                font-size: 12px;
                margin-top: 12px;
                text-align: center;
                display: flex;
                justify-content: center;
                .circle {
                    width: 6px;
                    height: 6px;
                    background: #b0daf5;
                    border-radius: 50%;
                    margin: 4px 8px;
                }
            }
        }
    }

    .chat-menu {
        /* margin-top: 138px; */
        display: flex;
        padding: 0 72px;
        justify-content: space-between;
        div {
            text-align: center;
            font-size: 13px;
            font-weight: 500;
            padding-bottom: 20px;
            cursor: pointer;
        }
    }

    .chat-content {
        padding: 23px 0;
        background: #fff;

        /* 봇 메시지 (왼쪽) */
        .chat-bubble.bot {
            background-color: #f9f9f9;
            border-radius: 16px;
            color: #1a1a1a;
            align-self: flex-start;
            margin-left: 10px;
            font-size: 13px;
            padding: 20px 15px;
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
                bottom: 100px;
                border-radius: 48px 48px 0 0;
            }
            &.bottom {
                bottom: 49px;
                border-radius: 0 0 48px 48px;
            }
        }
    }
`;
