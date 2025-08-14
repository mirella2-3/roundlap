import styled from 'styled-components';
export const ModalWrapper = styled.div`
    position: fixed;
    top: 30px;
    right: 0;
    width: 630px;
    height: 1380px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 40px;
    height: 100%;
    width: 90%;
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
        width: 550px;
        justify-content: space-between;
        display: flex;
        padding: 60px 30px 0px 30px;
        h2 {
            font-size: 36px;
            font-weight: 600;
        }
        svg {
            color: #000;
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    }
`;
export const CartBottomStyle = styled.div`
    display: flex;
    justify-content: center;

    .actionBtn {
        margin-top: 110px;
        width: 272px;
        height: 48px;
        font-size: 18px;
        font-weight: 400;
        background-color: #515151;
        color: white;
        border: none;
        cursor: pointer;
        text-align: center;
        margin-right: 10px;
        font-weight: bold;
        &:hover {
            background-color: #54afea;
            color: white;
        }
    }
`;

export const CartItemStyle = styled.div`
    .itembox {
        width: 480px;
        height: 124px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #ddd;
        .itemInfo {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .itemtitle {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: left;
            h2 {
                font-size: 18px;
            }
            .itemquantity {
                margin-top: 30px;
                width: 79px;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
                text-align: center;
            }
        }
        .itemIcon {
            position: absolute;
            top: 10px;
            right: 0;
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
        max-height: 400px;
        overflow-y: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .CartPrice {
        margin-top: 40px;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        width: 510px;
        align-items: center;
        h2 {
            font-size: 16px;
        }
        h3 {
            font-weight: 500;
        }
    }
    .CartProduct {
        padding-top: 8px;
        padding-bottom: 12px;

        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        width: 510px;
        align-items: center;
        h2 {
            font-size: 16px;
        }
        h3 {
            font-weight: 500;
        }
    }
    .CartTotal {
        margin-left: 10px;
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
