import styled from 'styled-components';

export const OrderStyles = styled.div`
    .inner {
        padding: 160px 0;
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        display: flex;
    }
`;
export const OrderInfoStyles = styled.div`
    .Info {
        width: 819px;
        border-right: 1px solid #d6d6d6;
        h2 {
            font-size: 36px;
            font-weight: 700;
            color: #1a1a1a;
        }
    }
`;
export const OrderCartStyles = styled.div`
    .ordercart {
        width: 590px;
        margin-bottom: 70px;
        h2 {
            font-size: 36px;
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
        width: 450px;
        height: 114px;
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;

        .itemInfo {
            display: flex;
            align-items: center;
            */ p {
                margin: 0;
                display: flex;
                align-items: center;
            }

            img {
                height: auto;
                margin-right: 20px;
            }
        }

        .itemtitle {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h2 {
                font-size: 14px;
                font-weight: 400;
                margin: 0;
                line-height: 1.4;
            }
            h3 {
                font-weight: 600;
                font-size: 18px;
            }
        }
    }
`;
export const OrderSummaryStyles = styled.div`
    display: flex;
    justify-content: center;
    .orderSummary {
        margin-top: 100px;
        .summaryItem {
            width: 450px;
            display: flex;
            justify-content: space-between;
            margin: 12px 0;
            span {
                font-size: 18px;
                font-weight: Medium;
            }
        }

        .summaryTotal {
            display: flex;
            justify-content: space-between;
            color: #007bcc;
            font-size: 20px;
            font-weight: 600;
        }

        .orderButton {
            width: 100%;
            padding: 12px;
            background-color: #007bcc;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s;
        }

        .orderButton:hover {
            background-color: #0056b3;
        }
    }
`;
export const OrderInfoInputStyles = styled.div`
    span {
        color: red;
    }
    h3 {
        width: 90px;
        margin-right: 73px;
        font-size: 16px;
        font-weight: 400;
    }
    input[type='text'] {
        width: 544px;
        height: 48px;
        padding: 0 12px;
        font-size: 16px;
    }
    .orderlayout {
        .whos {
            margin-left: 163px;
            margin-bottom: 5px;
        }
        .orderName {
            display: flex;
            margin-bottom: 54px;
            align-items: center;
        }
        .receiver {
            display: flex;
            margin-bottom: 30px;
            align-items: center;
        }
        .orderAddr {
            display: flex;
            margin-bottom: 10px;
            input {
                width: 360px;
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
            }
        }
        .orderAddr1 {
            margin-left: 163px;
            margin-bottom: 10px;
        }
        .orderAddr2 {
            margin-left: 163px;
            margin-bottom: 30px;
        }
        .orderPhone {
            display: flex;
            align-items: center;
            input[type='text'] {
                width: 147px;
                height: 50px;
                margin: 0 12px;
            }
            select {
                width: 160px;
                height: 50px;
                margin-right: 12px;
            }
            margin-bottom: 30px;
        }
        .postmessge {
            display: flex;
            align-items: center;
            margin-bottom: 65px;
        }
        .point {
            display: flex;
            align-items: center;
            input {
                width: 200px;
            }
            h4 {
                margin: 0 20px;
            }
            h5 {
                color: #8ac8f1;
            }
        }
    }
`;

export const PaymentMethodStyles = styled.div`
    .payment {
        display: flex;
        margin: 30px 0;
        label:first-of-type {
            margin-left: 0;
        }
        label {
            margin-left: 30px;
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
            background: none;
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
