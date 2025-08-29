import styled from 'styled-components';

export const MypageStyle = styled.div`
    color: #515151;
    .inner {
        margin: 160px auto;
        margin-top: 280px;
    }
    h2 {
        color: #1a1a1a;
        font-size: 36px;
        font-weight: 700;
    }
    .line {
        height: 1px;
        width: 100%;
        background: #e3e3e3;
    }

    section {
        margin-bottom: 80px;
    }

    .namePoint {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                background: #d9d9d9;
                border-radius: 50px;
            }
        }

        strong {
            margin-left: 12px;
            margin-right: 2px;
            color: #007bcc;
            font-weight: 700;
            font-size: 20px;
        }

        span {
            margin-left: 80px;
            margin-right: 10px;
            color: #007bcc;
            font-size: 20px;
            font-weight: 700;
            border-bottom: 1px solid #007bcc;
        }
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        h3 {
            font-size: 24px;
            font-weight: 700;
            padding-right: 8px;
            box-sizing: border-box;
            color: #1a1a1a;
        }
        .more {
            cursor: pointer;
        }
    }
`;
export const LogoutAccessStyles = styled.div`
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
