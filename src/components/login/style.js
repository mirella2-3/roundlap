import styled from 'styled-components';

export const SearchStyle = styled.div`
    position: relative;
    article {
        display: flex;
        .LogLeft {
            width: 720px;
            padding: 90px 150px;
            box-sizing: border-box;

            h2 {
                font-size: 36px;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 60px;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 12px;
                input {
                    border: none;
                    outline: none;
                    width: 420px;
                    height: 48px;
                    border: 1px solid #b1b1b1;
                    padding: 0px 20px;
                    box-sizing: border-box;

                    font-family: 'Pretendard';
                    font-size: 16px;
                    font-weight: 400;
                    color: #1a1a1a;

                    &::placeholder {
                        color: #b1b1b1;
                    }
                }
            }
            .userSet {
                width: 420px;
                margin-top: 12px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;

                p {
                    display: flex;
                    align-items: center;

                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    color: #515151;

                    input[type='checkbox'] {
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    strong {
                        margin-right: 24px;
                        &:first-of-type {
                            position: relative;
                            &::after {
                                display: block;
                                content: '';
                                height: 12px;
                                width: 1px;
                                position: absolute;
                                background: #6b6b6b;
                                top: 50%;
                                right: -12px;
                                transform: translateY(-50%);
                            }
                        }
                        &:last-of-type {
                            margin-right: 0px;
                        }
                    }
                }
            }
            button {
                width: 420px;
                height: 48px;
                margin-bottom: 12px;
                font-size: 16px;
                font-weight: 400;
                color: #515151;
                &.loginBtn {
                    background: #515151;
                    border: none;
                    color: #fff;
                }
                &.joinBtn {
                    background: #fff;
                    border: 1px solid #515151;
                }
            }
            span {
                display: block;
                width: 420px;
                text-align: right;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #b1b1b1;
                img {
                    margin-left: 2px;
                }
            }
            .SNS {
                margin-top: 50px;
                text-align: center;
                position: relative;
                &::before {
                    display: block;
                    content: '';
                    height: 1px;
                    width: 136px;
                    position: absolute;
                    background: #515151;
                    top: 8px;
                    left: 0px;
                    transform: translateY(-50%);
                }
                &::after {
                    display: block;
                    content: '';
                    height: 1px;
                    width: 136px;
                    position: absolute;
                    background: #515151;
                    top: 8px;
                    right: 0px;
                    transform: translateY(-50%);
                }
                p {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 30px;
                }
                img {
                    margin-right: 14px;
                    cursor: pointer;
                    &:last-of-type {
                        margin-right: 0px;
                    }
                }
            }
        }
        .LogRight {
            width: 480px;
            height: 740px;
            background: #b0daf5;
            background-image: url('/images/Login/Login_LogoRound.png');
            background-repeat: no-repeat;
            background-position: right bottom;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .Close {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0px;

        background: none;
        svg {
            color: #fff;
            width: 40px;
            height: 40px;
            /* cursor: pointer; */
        }
    }
`;
