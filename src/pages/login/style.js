import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0px;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 1200px;
    height: 740px;
    background: #fff;
`;

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
                &:first-of-type {
                    background: #515151;
                    border: none;
                    color: #fff;
                }
                &:last-of-type {
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

export const JoinStyle = styled.div`
    span {
        color: #f00;
    }

    .small {
        margin-top: 10px;
        margin-left: 160px;
        margin-bottom: 30px;
        p {
            color: #6b6b6b;
            font-size: 14px;
            font-weight: 400;
        }
    }

    .inner {
        width: 954px;
        margin: auto;
        box-sizing: border-box;

        h2 {
            margin-top: 160px;
            font-size: 36px;
            font-weight: 700;
            color: #1a1a1a;
        }

        .joinlayout {
            .EssentialInfo {
                margin-top: 80px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;

                strong {
                    color: #515151;
                    font-size: 18px;
                    font-weight: 500;
                }
            }

            label {
                display: block;
                width: 160px;

                font-size: 16px;
                font-weight: 500;
                color: #515151;
            }
            input {
                box-sizing: border-box;
                width: 544px;
                height: 48px;
                padding: 0px 18px;
                border: 1px solid #b1b1b1;
                outline: none;

                font-family: 'Pretendard';
                font-size: 16px;
                font-weight: 500;
                color: #515151;
                &::placeholder {
                    font-family: 'Pretendard';
                    font-size: 16px;
                    font-weight: 300;
                    color: #b1b1b1;
                }
            }

            /* 아이디 */
            .joinID,
            .joinPW,
            .joinPWconfirm,
            .joinName,
            .joinAddr,
            .joinPhone,
            .joinEmail,
            .joinGender,
            .joinbirth {
                align-items: center;
                display: flex;
            }

            /* 비밀번호 확인 */
            .joinPWconfirm {
                margin-bottom: 40px;
            }
            /* 이름 */
            .joinName {
                margin-bottom: 30px;
            }

            /* 주소 */
            .joinAddr {
                label {
                    margin-bottom: 10px;
                }
                input {
                    width: 360px;
                    margin-bottom: 10px;
                }
                button {
                    margin-left: 20px;
                    margin-bottom: 10px;
                    width: 164px;
                    height: 48px;
                    background: #e3e3e3;
                    border: none;

                    color: #515151;
                    font-size: 16px;
                    font-weight: 400;

                    cursor: pointer;
                }
            }
            .joinAddr1 {
                margin-left: 160px;
                margin-bottom: 10px;
            }
            .joinAddr2 {
                margin-left: 160px;
                margin-bottom: 30px;
            }

            /* 휴대전화 */
            .joinPhone {
                font-size: 18px;
                color: #6b6b6b;
                font-weight: 600;
                margin-bottom: 30px;
                .joinPhoneNum {
                    display: flex;
                    align-items: center;

                    select {
                        width: 160px;
                        height: 48px;
                        padding: 0px 20px;
                        margin-right: 12px;

                        border: 1px solid #b1b1b1;
                        outline: none;

                        font-family: 'Pretendard';
                        font-size: 16px;
                        font-weight: 400;
                        color: #515151;

                        appearance: none;
                        background: url('/images/join/join_phone_arrow.png') no-repeat;
                        background-size: 24px auto;
                        background-position: 95% 50%;
                    }
                    input {
                        width: 160px;
                        margin: 0 12px;
                        &:last-of-type {
                            margin-right: 0px;
                        }
                    }
                }
            }

            /* 이메일 */
            .joinEmail {
                margin-bottom: 30px;
            }

            /* 성별 */
            .joinGender {
                margin-bottom: 30px;
                label {
                    display: flex;
                    align-items: center;
                    input[type='radio'] {
                        width: 14px;
                        height: 14px;
                        cursor: pointer;
                        margin: 0px;
                    }
                    p {
                        margin-left: 8px;
                    }
                    &:nth-of-type(2) {
                        width: auto;
                        margin-right: 40px;
                    }
                }
            }

            /* 생년월일 */
            .joinbirth {
                input {
                    width: 140px;
                    margin-left: 20px;
                    margin-right: 5px;
                    &:first-of-type {
                        margin-left: 0px;
                    }
                }
                .joinsolar {
                    display: flex;
                    align-items: center;
                    margin-left: 30px;

                    label {
                        width: auto;
                        display: flex;
                        align-items: center;

                        &:first-of-type {
                            margin-right: 24px;
                        }

                        input[type='radio'] {
                            width: 14px;
                            height: 14px;
                            cursor: pointer;
                            margin: 0px;
                        }
                        p {
                            margin-left: 8px;
                        }
                    }
                }
            }

            /* 약관 동의 */
            .agreementstext {
                margin-top: 160px;
                border-bottom: 1px solid #cecece;
                h2 {
                    margin: 0;
                    padding-bottom: 28px;
                    font-size: 24px;
                    font-weight: 700;
                    color: #1a1a1a;
                }
            }

            .agreements {
                margin-top: 40px;
                label {
                    width: 954px;
                    margin-bottom: 10px;

                    font-size: 16px;
                    font-weight: 500;
                    color: #515151;

                    display: flex;
                    align-items: center;

                    &:first-of-type {
                        margin-bottom: 28px;

                        font-size: 18px;
                        font-weight: 500;
                        color: #1a1a1a;
                    }

                    input[type='checkbox'] {
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                        border: 1px solid #515151;
                        cursor: pointer;
                    }

                    .agreeSpan {
                        display: inline-block;
                        font-size: 16px;
                        font-weight: 400;
                        color: #b1b1b1;
                        border-bottom: 1px solid #b1b1b1;
                        text-align: right;
                        margin-left: auto;
                    }
                }
            }
        }

        .buttons {
            margin-top: 100px;
            margin-bottom: 160px;
            text-align: center;
            button[type='submit'] {
                width: 272px;
                height: 50px;
                font-size: 18px;
                font-weight: 400;
                background-color: #515151;
                color: #fff;
                border: none;
                cursor: pointer;
                text-align: center;

                &:hover {
                    background-color: #54afea;
                }
            }
        }
    }
`;

export const SucessStyles = styled.div`
    .inner {
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        .checkbox {
            margin-top: 210px;
            margin-bottom: 50px;
            text-align: center;
            img {
                width: 64px;
                height: 64px;
                object-fit: contain;
            }
        }
        .check-text {
            margin-bottom: 120px;
            text-align: center;
            h2 {
                font-size: 36px;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 14px;
            }
            h3 {
                font-size: 18px;
                font-weight: 500;
            }
        }
        .buttons {
            margin-bottom: 160px;
            display: flex;
            justify-content: center;
            button[type='submit'] {
                width: 160px;
                height: 50px;

                font-size: 18px;
                font-weight: 400;
                color: #fff;

                background-color: #515151;
                border: none;
                cursor: pointer;
                text-align: center;
                margin-right: 20px;

                &:hover {
                    background-color: #54afea;
                    color: white;
                }

                &:last-of-type {
                    margin-right: 0px;
                }
            }
        }
    }
`;

export const LogoutStyle = styled.div``;
