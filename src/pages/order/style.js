import styled from 'styled-components';

export const OrderStyles = styled.div`
    .inner {
        padding: 160px 0;
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: space-between;
    }
`;
export const OrderInfoStyles = styled.div`
    .Info {
        width: 821px;
        border-right: 1px solid #d6d6d6;
        h2 {
            font-size: 36px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 80px;
        }
    }
`;
export const OrderCartStyles = styled.div`
    .ordercart {
        width: 462px;
        margin-bottom: 70px;
        h2 {
            font-size: 30px;
            font-weight: 700;
            color: #1a1a1a;
        }
    }
`;
export const OrderListStyle = styled.div`
    .OrderList {
        display: flex;
        justify-content: center;
        .OrderListBox {
            width: 460px;
            height: 433px;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
        }
    }
`;
export const OrderItemStyle = styled.div`
    .itembox {
        width: 440px;
        height: 114px;
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 12px 0px;
        border-bottom: 1px solid #e3e3e3;

        .itemInfo {
            display: flex;
            align-items: center;
            p {
                margin-right: 20px;
            }
        }

        .itemtitle {
            h2 {
                font-size: 14px;
                font-weight: 500;
                color: #515151;
                margin-bottom: 10px;
                text-align: left;
            }
            h3 {
                font-size: 16px;
                font-weight: 700;
                color: #1a1a1a;
            }
        }
    }
`;
export const OrderSummaryStyles = styled.div`
    display: flex;
    justify-content: center;
    .orderSummary {
        margin-top: 98px;
        .summaryItem {
            width: 450px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            span {
                font-size: 18px;
                font-weight: 500;
                color: #1a1a1a;
            }
        }

        .summaryTotal {
            width: 450px;
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            color: #007bcc;
            font-size: 20px;
            font-weight: 600;
        }

        .orderButton {
            width: 450px;
            height: 48px;
            background-color: #515151;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            margin-top: 35px;
            padding: 0px;
        }

        .orderButton:hover {
            background-color: #54afea;
        }
    }
`;
export const OrderInfoInputStyles = styled.div`
    span {
        color: #f00;
    }
    h3 {
        width: 160px;
        font-size: 16px;
        font-weight: 500;
    }
    input[type='text'] {
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

    .orderlayout {
        .orderName {
            display: flex;
            align-items: center;
            margin-bottom: 54px;
        }

        .whos {
            margin-left: 160px;
            margin-bottom: 10px;

            display: flex;
            align-items: center;
            label {
                width: auto;
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

                &:last-of-type {
                    margin-left: 30px;
                }
            }
        }

        .receiver {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }

        .orderAddr {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            input {
                width: 360px;
            }
            button {
                margin-left: 20px;
                width: 164px;
                height: 48px;
                background: #e3e3e3;
                border: none;

                font-size: 16px;
                font-weight: 500;
                color: #515151;

                cursor: pointer;
            }
        }
        .orderAddr1 {
            margin-left: 160px;
            margin-bottom: 10px;
        }
        .orderAddr2 {
            margin-left: 160px;
            margin-bottom: 30px;
        }
        .orderPhone {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #6b6b6b;
            font-weight: 600;
            margin-bottom: 30px;

            input[type='text'] {
                width: 160px;
                height: 48px;
                margin: 0 12px;
                &:last-of-type {
                    margin-right: 0px;
                }
            }
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
        }

        .postmessge {
            display: flex;
            align-items: center;
            margin-bottom: 64px;
        }

        .point {
            display: flex;
            align-items: center;
            input {
                width: 200px;
            }
            h4 {
                margin: 0 20px;
                font-size: 16px;
                font-weight: 500;
            }
            h5 {
                font-size: 16px;
                font-weight: 500;
                color: #8ac8f1;
            }
        }
    }
`;

export const PaymentMethodStyles = styled.div`
    .payment {
        display: flex;
        margin: 30px 0;
        label {
            width: auto;
            display: flex;
            align-items: center;

            margin-left: 30px;

            &:first-of-type {
                margin-left: 0px;
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
`;
export const CardStyles = styled.div`
    .card {
        button {
            width: 160px;
            height: 60px;
            margin-right: 20px;
            margin-bottom: 10px;
            border: 1px solid #e3e3e3;
            background-color: #fff;

            font-size: 18px;
            font-weight: 400;
            color: #515151;

            &:hover {
                background-color: #e6f3fc;
            }
        }
    }
`;

export const PaySucessStyles = styled.div`
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
