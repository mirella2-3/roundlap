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
        margin-top: 260px;
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
        margin-top: 38px;
        text-align: center;
        gap: 10px;
        p {
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
        }
        span {
            font-size: 16px;
            font-weight: 500;
        }
    }
`;
export const CartWrapStyle = styled.div`
    .ModalText {
        margin-top: 90px;
        /* margin-left: 59px; */
        margin-bottom: 54px;

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
    position: relative;
    .itembox {
        margin-top: 12px;
        width: 480px;
        height: 124px;
        position: relative;
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        box-sizing: border-box;
        border-bottom: 1px solid #e3e3e3;
        img {
            width: 112px;
            height: 112px;
            object-fit: contain;
            background: #f6f6f6;
        }

        .itemtitle {
            margin-left: 20px;
            width: 220px;
            height: 104px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            strong {
                font-size: 18px;
                color: #1a1a1a;
                position: absolute;
                top: 50%;
                right: 0%;
                transform: translateY(-50%);
                font-weight: 600;
            }

            h2 {
                position: absolute;
                top: 10px;
                width: 220px;
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #1a1a1a;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .itemquantity {
                position: absolute;
                bottom: 20px;
                margin-top: 28px;
                width: 79px;
                font-size: 16px;
                font-weight: 400;
                line-height: 25px;
                color: #1a1a1a;
                display: flex;
                justify-content: space-between;
                text-align: center;
                button {
                    width: 22px;
                    height: 22px;
                    background: #cecece;
                    border: none;

                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;

                    &:hover {
                        background: #8ac8f1;
                    }
                }
            }
        }
        .itemPrice {
            margin-left: auto;
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
        width: 510px;
        height: 480px;
        overflow-y: auto;
        overflow-x: hidden;
        /* background: #000; */
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
export const ShopStyle = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    .modal-box {
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        width: 320px;
        padding: 24px 20px 0;
        text-align: center;
        font-size: 16px;
        font-weight: 500;

        .modal-message {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            font-size: 16px;
        }

        .modal-buttons {
            display: flex;
            border-top: 1px solid #eee;
            margin-top: 20px;

            button {
                flex: 1;
                padding: 12px 0;
                border: none;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;

                &.btn-grey {
                    background: #4a4a4a;
                    color: white;
                    border-bottom-left-radius: 10px;
                }

                &.btn-blue {
                    background: #3ca6e6;
                    color: white;
                    border-bottom-right-radius: 10px;
                }
            }
        }
    }
`;

export const CartModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .CartModal {
        width: 280px;
        height: 150px;
        overflow: hidden;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 0.3s ease;
        position: relative;
        .Closebox {
            position: absolute;
            top: 10px;
            right: 10px;
            svg {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
        .top {
            width: 280px;
            height: 105px;
            h2 {
                .icon {
                    /* margin-right: 10px; */
                    display: b;
                }
                position: absolute;
                top: 37%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                align-items: center;
            }
        }

        .bottom {
            width: 280px;
            display: flex;
            border-top: 1px solid #ececec;
            button {
                width: 233px;
                font-size: 14px;
                font-weight: 500;
                height: 45px;
                &:first-of-type {
                    color: #515151;
                    background: #fff;
                    border-right: 1px solid #ececec;
                    &:hover {
                        color: #fff;
                        background: #515151;
                    }
                }
                &:last-of-type {
                    color: #54afea;
                    background: #fff;
                    &:hover {
                        background: #54afea;
                        color: #fff;
                    }
                }
            }
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
export const CartWishStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .CartModal {
        width: 280px;
        height: 150px;
        overflow: hidden;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 0.3s ease;
        position: relative;
        .Closebox {
            position: absolute;
            top: 10px;
            right: 10px;
            svg {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
        .top {
            width: 280px;
            height: 105px;
            h2 {
                position: absolute;
                top: 37%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                align-items: center;
            }
        }

        .bottom {
            width: 280px;
            display: flex;
            border-top: 1px solid #ececec;
            button {
                width: 233px;
                font-size: 14px;
                font-weight: 500;
                height: 45px;
                &:first-of-type {
                    color: #515151;
                    background: #fff;
                    border-right: 1px solid #ececec;
                    &:hover {
                        color: #fff;
                        background: #515151;
                    }
                }
                &:last-of-type {
                    color: #54afea;
                    background: #fff;
                    &:hover {
                        background: #54afea;
                        color: #fff;
                    }
                }
            }
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
