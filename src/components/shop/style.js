import styled from 'styled-components';

export const ProductdetailStyle = styled.div`
    position: relative;
    margin-top: 80px;
    .bg {
        background-color: #f1f9ff;
        height: 330px;
        width: 100%;
        position: absolute;
        top: 640px;
    }
    .inner {
        padding-bottom: 250px;
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
        position: relative;

        .itemImg {
            width: 705px;
            min-height: 800px;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            filter: drop-shadow(-30px 20px 4px rgba(29, 29, 29, 0.2));
        }

        .itemImg img {
            object-fit: contain;
            /* padding-bottom: 300px; */
            width: 705px;
            min-height: 800px;
        }

        > p {
            margin-top: 210px;
            font-size: 36px;
            font-weight: 700;
            width: 365px;
        }
        > ul {
            margin-top: 210px;
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
                transition: 0.3s;
                &:hover {
                    background: var(--hover-color);
                }
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

                            border: 1px solid #8a8a8a;
                            color: #515151;
                            font-size: 16px;
                            font-weight: 500;
                            transition: 0.3s;
                            &:hover {
                                background: #f9f9f9;
                                border: 1px solid #515151;
                            }
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
        flex-wrap: wrap;
        gap: 9.3px;
        > article {
            width: 343px;
            height: 480px;
            text-align: center;
            margin-bottom: 56px;

            .img {
                position: relative;
                cursor: pointer;
                background: #f6f6f6;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 400px;

                > img {
                    max-width: 100%;
                    height: auto;
                }
                .bg {
                    position: absolute;
                    /* top: 50%; */
                    bottom: 0px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 20px;
                    opacity: 0;
                    transition: 0.65s;
                }
                &:hover {
                    .bg {
                        opacity: 1;
                        bottom: 30px;
                        cursor: default;
                        img {
                            cursor: pointer;
                        }
                    }
                }
            }
            .txt {
                .title {
                    /* margin-top: 20px;
                    margin-bottom: 10px; */
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 250px;
                    margin: 20px auto 10px auto;
                    font-size: 16px;
                    cursor: pointer;
                }
                h4 {
                    display: block;
                    font-weight: 700;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const ProductDescStyle = styled.div`
    background-color: #f1f9ff;
    height: 980px;
    .inner {
        padding: 60px 0 160px 0;
    }
    .contentWrap {
        display: flex;
        width: 1296px;
        margin: auto;
        justify-content: space-between;
        ul {
            /* width: 404px; */
            margin: 240px 0;
            box-sizing: border-box;

            li {
                display: flex;
                margin-bottom: 60px;
                color: #1a1a1a;
                font-size: 20px;
                font-weight: 500;

                .icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    background: #54afea;
                    text-align: center;
                    padding: 10px 0;
                    box-sizing: border-box;
                }

                strong {
                    margin-left: 30px;
                    width: 250px;
                    word-break: keep-all;
                }
            }
        }
    }
`;

export const ProductRecomStyle = styled.div`
    /* background: #000; */
    padding: 160px 0;
    .inner {
    }
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 8px;
    }
    strong {
        font-size: 16px;
        font-weight: 500;
        display: block;
        text-align: center;
        margin-bottom: 54px;
    }
`;

export const RecommendListStyle = styled.ul`
    display: flex;
    gap: 8px;
    width: 273px;
    text-align: center;
    p {
        img {
        }
    }
    h4 {
        font-size: 20px;
        font-weight: 500;
        margin: 22px 0 10px 0;
    }
    strong {
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
    }
`;

export const ReviewStyle = styled.div`
    padding: 160px 0;

    .inner {
        /* height: 533px; */
        text-align: center;

        button {
            font-size: 18px;
            width: 272px;
            height: 50px;
            background: #fff;
            transition: 0.3s;
            &:hover {
                background: var(--hover-color);
                color: #fff;
            }
        }
    }

    h2 {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
    }
    ul {
        display: flex;
        justify-content: space-between;

        .test {
            margin-bottom: 56px;
            h4 {
                margin-bottom: 18px;
                font-weight: 600;
            }
            > ul {
                display: flex;
                /* justify-content: space-between; */

                li {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    &:nth-child(1) {
                        text-align: left;
                        width: 50px;
                        margin-right: 20px;
                    }
                    &.total {
                        width: 250px;
                        height: 10px;
                        border-radius: 10px;
                        background: #ececec;
                        position: relative;
                        .score {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 10px;
                            background: #515151;
                            border-radius: 10px;
                        }
                    }
                    &.percent {
                        width: 50px;
                        text-align: right;
                    }
                }
            }
        }
    }
    .photo {
        display: flex;
        gap: 10.3px;
        margin-bottom: 54px;
        li {
            position: relative;
            p {
                width: 166px;
                height: 166px;
            }
            .black_bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0);
                transition: 0.3s;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: 0.3s;
                color: #fff;
            }
            &:hover {
                .black_bg {
                    background: rgba(0, 0, 0, 0.5);
                }
                span {
                    opacity: 1;
                }
            }
        }
    }
`;
