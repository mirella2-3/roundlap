import styled from 'styled-components';

export const ProductdetailStyle = styled.div`
    position: relative;
    .bg {
        background-color: #f1f9ff;
        height: 330px;
        width: 100%;
        position: absolute;
        top: 640px;
    }
    .inner {
        padding: 80px 0 250px 0;
        height: 970px;
        box-sizing: border-box;
        .bgtxt {
            color: #f1f9ff;
            font-weight: 800;
            font-size: 250px;
            position: absolute;
            bottom: 240px;
            display: block;
            z-index: -10;
        }
    }
    .text {
        margin-bottom: 250;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        /* .itemImg {
        
            max-height: 680px;
            max-width: 505;
            display: block;
            justify-content: center;
            align-items: center;
            filter: drop-shadow(-30px 20px 4px rgba(130, 130, 130, 0.1));
        } */
        .itemImg {
            width: 505px;
            height: 680px;
            display: flex;
            align-items: center; /* 수직 가운데 정렬 */
            justify-content: center; /* 수평 가운데 정렬 */

            overflow: hidden; /* 넘치는 이미지 잘림 방지 */
            filter: drop-shadow(-30px 20px 4px rgba(29, 29, 29, 0.2));
        }

        .itemImg img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain; /* 비율 유지하며 박스 안에 맞춤 */
        }

        > p {
            margin-top: 131px;
            font-size: 36px;
            font-weight: 700;
            width: 365px;
        }
        > ul {
            margin-top: 131px;
            width: 365px;
            .price {
                display: flex;
                gap: 20px;
                align-items: center;
                margin-bottom: 67px;
                > button {
                    width: 65px;
                    height: 44px;
                    background: #0087e0;
                    font-size: 20px;
                    font-weight: 700;
                    color: #fff;
                    font-family: 'pretendard';
                    cursor: default;
                }
                > span {
                    font-size: 36px;
                    font-weight: 700;
                    color: #1a1a1a;
                }
                > p {
                    font-size: 24px;
                    font-weight: 500;
                    position: relative;
                    &::after {
                        content: '';
                        display: block;
                        height: 2px;
                        width: 100%;
                        position: absolute;
                        bottom: 48%;
                        background: #515151;
                    }
                }
            }
            .delivery {
                display: flex;
                color: #8a8a8a;
                font-size: 16px;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            .product_title {
                display: flex;
                justify-content: space-between;

                .ttl {
                    width: 250px;
                }
                li {
                    &:last-child {
                        button {
                            height: 25px;
                            width: 25px;
                            background: #e3e3e3;
                            margin-right: 0;
                        }
                        strong {
                            margin: 0 10px;
                            color: #1a1a1a;
                            font-size: 18px;
                            font-weight: 500;
                        }
                    }
                }
            }
            .total {
                font-size: 16px;
                font-weight: 500;
                display: block;
                text-align: right;
                margin: 9px 0 20px 0;
                span {
                    padding-left: 10px;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1a1a1a;
                }
            }
            .buy {
                height: 50px;
                width: 100%;
                background: #515151;
                margin-bottom: 6px;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
            }
            li {
                &:last-child {
                    ul {
                        display: flex;
                        justify-content: space-between;
                        gap: 5px;
                        button {
                            width: 179px;
                            height: 38px;
                            background: #fff;
                            border: 1px solid #515151;
                            color: #515151;
                            font-size: 16px;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
`;
export const ProductListWrap = styled.div`
    &.product-box {
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;

        gap: 9.3px;
        > article {
            width: 343px;
            height: 480px;
            text-align: center;

            margin-bottom: 56px;
            > div {
                img {
                    width: 343px;
                    height: 400px;
                }
            }
            .txt {
                .title {
                    margin-top: 20px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 320px;
                    font-size: 16px;
                }
                h4 {
                    display: block;
                    font-weight: 700;
                    font-size: 18px;
                }
            }
        }
    }
`;

export const ProductDescStyle = styled.div`
    background-color: #f1f9ff;
`;
