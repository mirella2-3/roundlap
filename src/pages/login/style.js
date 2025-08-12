import styled from 'styled-components';

export const JoinStyle = styled.div`
    span {
        color: red;
    }

    .small {
        margin-top: 10px;
        margin-left: 120px;
        margin-bottom: 30px;
        font-size: 14px;
        font-weight: 400;
        p {
            color: #6b6b6b;
        }
    }

    .inner {
        width: 954px;
        margin: auto;
        box-sizing: border-box;
        position: relative;

        h2 {
            margin-top: 160px;
        }

        .joinlayout {
            width: 960px;
            margin: auto;
            box-sizing: border-box;
            position: relative;

            .EssentialInfo {
                width: 960px;
                margin-top: 80px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;
            }

            /* 아이디 */
            .joinID {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 5px;

                label {
                    width: 110px; /* 라벨 넓이 고정 */
                }

                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 비밀번호 */
            .joinPW {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 5px;

                label {
                    width: 110px;
                }
                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 비밀번호 확인 */
            .joinPWconfirm {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 64px;

                label {
                    width: 110px;
                }
                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 이름 */
            .joinName {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 64px;

                label {
                    width: 110px;
                }
                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 주소 */
            .joinAddr {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 5px;

                label {
                    width: 110px;
                }
                input {
                    width: 360px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
                button {
                    margin-left: 20px;
                    width: 164px;
                    height: 48px;
                    color: #515151;
                    font-size: 16px;
                    font-weight: 400;
                    cursor: pointer;
                    background: #e3e3e3;
                    border: 1px solid #ccc;
                }
            }
            .joinAddr1 {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 10px;

                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 120px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            .joinAddr2 {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 30px;

                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 120px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 휴대전화 */
            .joinPhone {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 30px;

                label {
                    width: 110px;
                }

                .joinPhoneNum {
                    margin-left: 10px;
                    display: flex;
                    align-items: center;

                    select {
                        width: 160px;
                        padding: 12px 10px;
                        margin-right: 12px;
                    }
                    input {
                        width: 160px;
                        padding: 12px 10px;
                        margin: 0 6px;
                    }
                }
            }

            /* 이메일 */
            .joinEmail {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 30px;

                label {
                    width: 110px;
                }
                input {
                    width: 544px;
                    padding: 12px 10px;
                    margin-left: 10px;
                }
                input::placeholder {
                    padding-left: 10px;
                    text-indent: 10px;
                }
            }

            /* 성별 */
            .joinGender {
                align-items: center;
                display: flex;
                font-weight: 400;
                margin-bottom: 30px;

                label {
                    margin-right: 90px;
                    display: flex;
                    align-items: center;

                    input[type='radio'] {
                        margin-left: 5px;
                        cursor: pointer;
                    }
                }
            }
            .agreementstext {
                margin-top: 160px;
                border-bottom: 1px solid #cecece;
                h2 {
                    margin: 0;
                    padding-bottom: 28px;
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            /* 약관 동의 */
            .agreements {
                margin-top: 20px;
                label:first-of-type {
                    margin-top: 42.5px;
                    margin-bottom: 28px;
                }
                label {
                    font-size: 16px;
                    display: block;
                    margin-bottom: 10px;
                    font-weight: 400;

                    input[type='checkbox'] {
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                        cursor: pointer;
                        border-radius: 0;
                    }
                }
            }
        }
        /* 생년월일 */
        .joinbirth {
            align-items: center;
            display: flex;
            font-weight: 400;
            margin-bottom: 30px;

            label {
                width: 110px;
            }
            .Phoneybd {
                margin-left: 10px;
                display: flex;
                align-items: center;

                select {
                    width: 140px;
                    padding: 12px 10px;
                    margin-right: 12px;
                }
                input {
                    width: 140px;
                    padding: 12px 10px;
                    margin: 0 6px;
                }
                margin-right: 30px;
            }
            .joinsolar {
                display: flex;

                label {
                    font-size: 16px;
                    display: block;
                    width: 50px;
                    margin-right: 24px;
                    font-weight: 400;

                    input[type='checkbox'] {
                        width: 18px;
                        height: 18px;
                        cursor: pointer;
                        border-radius: 0;
                    }
                }
            }
        }
        .buttons {
            margin-top: 100px;
            margin-bottom: 160px;
            display: flex;
            justify-content: center;
            button[type='submit'] {
                width: 272px;
                padding: 15px 0;
                font-size: 18px;
                font-weight: 400;
                background-color: #515151;
                color: white;
                border: none;
                cursor: pointer;
                text-align: center;

                &:hover {
                    background-color: #54afea;
                    color: white;
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
            margin-top: 214px;
            margin-bottom: 50px;
            display: flex;
            justify-content: center;
            img {
                width: 64px;
                height: 64px;
                object-fit: contain;
            }
        }
        .check-text {
            margin-bottom: 120px;
            h2 {
                font-size: 36px;
                font-weight: 600;
                margin-bottom: 14px;
            }
            h3 {
                text-align: center;
            }
        }
        .buttons {
            margin-bottom: 175px;
            display: flex;
            justify-content: center;
            button[type='submit'] {
                width: 160px;
                height: 38px;

                font-size: 18px;
                font-weight: 400;
                background-color: #515151;
                color: white;
                border: none;
                cursor: pointer;
                text-align: center;
                margin-right: 10px;

                &:hover {
                    background-color: #54afea;
                    color: white;
                }
            }
        }
    }
`;

export const LoginStyle = styled.div``;
export const LogoutStyle = styled.div``;
