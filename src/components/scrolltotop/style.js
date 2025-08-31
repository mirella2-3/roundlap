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
        bottom: 210px;
        right: 50px;
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
            cursor: pointer;
        }
    }

    .chat-body {
        overflow: hidden;
        .chat-page {
            flex: 1;
            margin: 8px 20px;
            padding: 0 25px;
            box-sizing: border-box;
            width: 329px;
            /* height: 274px; */
            border-radius: 30px;
            background: #fff;
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
                transition: 0.3s;
                &:hover {
                    background: #339fe6;
                }
            }

            .notice {
                font-size: 12px;
                margin-top: 12px;
                text-align: center;
                display: flex;
                justify-content: center;
                padding-bottom: 45px;
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
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        gap: 66px;

        div {
            text-align: center;
            font-size: 13px;
            font-weight: 500;
            padding-bottom: 15px;
            cursor: pointer;
        }
    }

    .chat-content {
        background: #fff;
        border-radius: 30px;
        /* height: 580px; */
        padding: 23px 20px;
        .toBack {
            cursor: pointer;
            padding-left: 5px;
            margin-bottom: 11px;
        }

        .notice {
            width: 330px;
            padding: 10px 0;
            background: #f9f9f9;
            display: flex;
            padding: 11px 22px;
            box-sizing: border-box;
            border-radius: 16px;
            margin-bottom: 40px;
            span {
                margin-left: 10px;

                box-sizing: border-box;
                font-size: 12px;
                line-height: 17px;
            }
        }

        .title {
            text-align: center;
            .logo {
                width: 125px;
                margin: auto;
                img {
                    width: 100%;
                    opacity: 0.7;
                }
            }
            strong {
                display: block;
                padding: 16px 0;
                font-size: 24px;
                font-weight: 700;
            }
            span {
                cursor: pointer;
                font-size: 12px;
                text-align: center;
            }
        }
        .chat-time {
            margin-top: 25px;
            margin-bottom: 10px;
            font-size: 12px;
            text-align: center;
        }

        /* 봇 메시지 (왼쪽) */
        .chat-bubble.bot {
            display: flex;
            .profile {
                margin-top: 45px;
            }
            strong {
                background-color: #f9f9f9;
                border-radius: 16px 16px 0 0;
                color: #1a1a1a;
                align-self: flex-start;
                margin-left: 10px;
                font-size: 13px;
                padding: 20px 15px;
            }
        }

        /* 사용자 메시지 (오른쪽) 추가하고 싶을 때 사용 */
        .chat-bubble.user {
            margin-top: 26px;

            .select {
                display: flex;
                justify-content: end;
                flex-wrap: wrap;
                li {
                    font-size: 13px;
                    color: #1a1a1a;
                    border: 1px solid #d6d6d6;
                    border-radius: 34px;
                    padding: 10px 14px;
                    margin: 3px;
                    cursor: pointer;
                    transition: 0.2s;
                    &:hover {
                        background: #339fe6;
                        color: #fff;
                        border: 1px solid #339fe6;
                    }
                }
            }
        }
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
`;
