import styled from 'styled-components';
export const ModalWrapper = styled.div`
    position: fixed;
    top: -70px;
    right: 0;
    width: 630px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* 최상위 */
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 40px;

    height: 700px;
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
// export const CartBottomStyle = styled.div``;

// export const CartItemStyle = styled.div``;
// export const CartListStyle = styled.div``;
