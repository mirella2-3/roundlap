import styled from 'styled-components';

export const MypageDetailStyle = styled.div`
    .wrap {
        display: flex;
        border: 1px solid #e3e3e3;
        cursor: pointer;

        li {
            width: 280px;
            height: 160px;
            border-right: 1px solid #e3e3e3;
            text-align: center;
            padding: 30px 0;
            box-sizing: border-box;

            &:last-child {
                border: none;
            }
            img {
                margin-bottom: 10px;
            }

            strong {
                display: block;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 2px;
            }
            span {
                display: block;
                color: #b1b1b1;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
`;

export const OrderCheckStyle = styled.div`
    h3 {
        font-size: 24px;
        font-weight: 700;
        padding-right: 8px;
        margin-bottom: 20px;
        span {
            font-size: 14px;
            font-weight: 400;
            color: #b1b1b1;
        }
    }
    .wrap {
        padding: 37px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            text-align: center;
            margin-right: 95px;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
            strong {
                font-size: 48px;
                font-weight: 500;
                color: #b1b1b1;

                padding-bottom: 8px;
                /* margin-bottom: 28px; */
                &.on {
                    color: #007bcc;
                }
            }
            span {
                display: block;
                font-size: 16px;
                font-weight: 500;
            }
            &.next {
                font-size: 30px;
                color: #e3e3e3;
                cursor: default;
            }
        }
    }
`;

export const WishListStyle = styled.div`
    ul {
        display: flex;
        li {
            margin-right: 7.5px;
            font-size: 20px;
            text-align: center;
            img {
                margin-bottom: 20px;
            }
            .title {
                display: block;
                font-weight: 500;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 230px;
                margin: auto;
                margin-bottom: 10px;
            }
            strong {
                font-weight: 700;
            }
        }
    }
`;
export const WishListNotingStyle = styled.div`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #b1b1b1;
`;
export const WishListItem = styled.div`
    position: relative;
    display: flex;
    .wishItem {
        width: 274px;
        height: 354px;
        position: relative;
        p {
            img {
                width: 274px;
                height: 354px;
                object-fit: contain;
            }
        }
        .heart {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 21px;
            height: 21px;
            cursor: pointer;
        }
        .title {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            font-weight: 500;
        }
    }
`;
