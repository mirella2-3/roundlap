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
    justify-content: end;
`;

export const ModalContent = styled.div`
    width: 630px;
    height: 100%;
    background: #fff;

    padding: 0px 60px;
    box-sizing: border-box;
`;

export const CartEmptyStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .Emptybox {
        margin-top: 270px;
        .EmptyIcon {
            object-fit: contain;
            display: flex;
            justify-content: center;
            svg {
                width: 76px;
                height: 76px;
            }
        }
    }
    .EmptyText {
        margin-top: 30px;
        p {
            font-size: 28px;
            font-weight: 600;
        }
        span {
            font-size: 16px;
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }
    }
`;
export const CartWrapStyle = styled.div`
    .ModalText {
        margin-top: 70px;
        /* margin-left: 59px; */

        width: 510px;
        display: flex;
        justify-content: space-between;
        h2 {
            font-size: 36px;
            font-weight: 700;
            color: #1a1a1a;
        }
        svg {
            margin-right: -8px;
            color: #1a1a1a;
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
    }
`;
export const CartBottomStyle = styled.div`
    .actionBtn {
        margin-top: 24px;
        width: 510px;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;

        background-color: #515151;
        border: none;
        cursor: pointer;
        text-align: center;
        &:hover {
            background-color: #54afea;
        }
    }
`;
// export const OverlayStyle = styled.div`
//     position: fixed;
//     top: -50px;
//     left: -800px;
//     width: 1920px;
//     height: 1280px;
//     background: rgba(0, 0, 10, 0.8);
//     z-index: 9998;
// `;

export const CartItemStyle = styled.div`
    .itembox {
        margin-top: 12px;
        width: 480px;
        height: 124px;
        position: relative;
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        align-items: top;
        box-sizing: border-box;
        border-bottom: 1px solid #e3e3e3;

        .itemtitle {
            margin-left: 30px;
            height: 76px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: left;

            h2 {
                width: 280px;
                font-size: 18px;
                font-weight: 400px;
                color: #1a1a1a;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .itemquantity {
                margin-top: 28px;
                width: 79px;
                font-size: 18px;
                font-weight: 500;
                line-height: 25px;
                color: #1a1a1a;
                display: flex;
                justify-content: space-between;
                text-align: center;
                button {
                    width: 25px;
                    height: 25px;
                    background: #e3e3e3;
                    border: none;

                    font-size: 18px;
                    font-weight: 500;
                    color: #fff;

                    &:hover {
                        background: #8ac8f1;
                    }
                }
            }
        }
        .itemPrice {
            position: absolute;
            right: 24px;
            top: 83px;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
        }
        .itemIcon {
            position: absolute;
            top: 2px;
            right: 2px;
            color: #c2c2c2;
            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const CartListStyle = styled.div`
    .CartListBox {
        margin-top: 54px;
        width: 510px;
        height: 480px;
        overflow-y: auto;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
    }

    .CartPrice {
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
        width: 510px;
        align-items: center;
        h2 {
            font-size: 16px;
            font-weight: 400;
            color: #515151;
        }
        h3 {
            font-size: 16px;
            font-weight: 500;
            color: #1a1a1a;
        }
    }
    .CartProduct {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
        width: 510px;
        align-items: center;
        h2 {
            font-size: 16px;
            font-weight: 400;
            color: #515151;
        }
        h3 {
            font-size: 16px;
            font-weight: 500;
            color: #1a1a1a;
        }
    }
    .CartTotal {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        width: 510px;
        align-items: center;
        h2 {
            font-size: 18px;
            font-weight: 600;
            color: #007bcc;
        }
        h3 {
            font-size: 18px;
            font-weight: 600;
            color: #007bcc;
        }
    }
`;
