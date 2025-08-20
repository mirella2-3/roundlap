import styled from 'styled-components';
export const VisualStyle = styled.div`
    width: 100vw;
    .visualImg {
        display: flex;
    }
`;

export const BestItemStyle = styled.div`
    .inner {
        padding: 160px 0;
    }
    h2 {
        font-size: 36px;
        font-weight: 700;
    }
    ul {
        display: flex;
        text-align: center;

        li {
            width: 272px;
            height: 525px;
            color: #b1b1b1;
            font-size: 18px;
            font-weight: 600;
            position: relative;
            cursor: pointer;
            p {
                .bg {
                    position: absolute;
                    /* top: 50%; */
                    bottom: 120px;
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
                        bottom: 143px;
                        cursor: default;
                        img {
                            cursor: pointer;
                        }
                    }
                }
            }
            strong {
                width: 272px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
`;

export const MainMagazineStyle = styled.div`
    .inner {
        padding: 160px 0;
    }
    .container {
        gap: 14px;
        ul {
            display: flex;
            gap: 14px;
            margin-bottom: 14px;
        }

        .item {
            font-size: 16px;
            height: 372px;
            box-sizing: border-box;
            color: #fff;
            transition: filter 0.2s ease-in-out;

            position: relative;
            overflow: hidden;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: transparent;
                transition: 0.3s ease;
                pointer-events: none;
                z-index: 1;
            }
            button,
            h3,
            strong {
                position: relative;
                z-index: 2;
            }
            button {
                display: block;
                background: transparent;
                opacity: 0.5;
                transition: 0.3s;
                z-index: 10;
                margin-top: 44px;
            }
            h3 {
                font-size: 36px;
                font-weight: 700;
                margin-bottom: 24px;
                line-height: 1.3;
                text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            }
            strong {
                font-size: 18px;
                font-weight: 300;
                line-height: 1.3;
                text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            }
            &:hover {
                button {
                    opacity: 1;
                }
                &::after {
                    background: rgba(0, 0, 0, 0.4);
                }
                h3,
                strong {
                    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0);
                }
            }
        }
    }
    .container .box1 {
        background-image: url(/images/Main/MagazineLsit-2.png);
        grid-column: 1/ 3;
        padding: 82px 0 0 72px;
        width: 923px;
    }
    .container .box2 {
        background-image: url(/images/Main/MagazineLsit-1.png);
        padding: 82px 0 0 56px;
        width: 463px;
    }
    .container .box3 {
        background-image: url(/images/Main/MagazineLsit.png);
        padding: 82px 0 0 56px;
        width: 463px;
    }
    .container .box4 {
        background-image: url(/images/Main/MagazineLsit-3.png);
        grid-column: 2/4;
        padding: 82px 0 0 74px;
        width: 923px;
    }
`;

export const SetItemStyle = styled.div`
    width: 100%;
    height: 860px;
    ul {
        display: flex;
        height: 100%;
        li {
            width: 50%;
            box-sizing: border-box;
            height: 100%;
            text-align: center;

            &.imgTitle {
                background-image: url(/images/Main/Content1.png);
                background-repeat: no-repeat;
                color: #f9f9f9;
                padding-top: 390px;
                box-sizing: border-box;

                h4 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 18px;
                }
                strong {
                    font-size: 18px;
                }
            }
            &.productList {
                padding-top: 150px;
                box-sizing: border-box;
                background: #f9f9f9;

                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #1a1a1a;
                }
                p {
                    margin-bottom: 52px;
                    font-size: 18px;
                }

                img {
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #b1b1b1;
                }

                /*  */
                .swiper {
                    width: 100%;
                    height: 100%;
                }

                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 430px;
                    transition: 0.5s;
                }

                .wrap {
                    position: relative;
                    .swiper-button-next {
                        position: absolute;
                        right: 295px;
                        background: transparent;
                        color: #8a8a8a;
                        width: 60px;

                        &::after {
                            display: none;
                        }
                    }
                    .swiper-button-prev {
                        position: absolute;
                        left: 295px;
                        background: transparent;
                        color: #8a8a8a;
                        width: 60px;

                        &::after {
                            display: none;
                        }
                    }

                    /* .swiper-slide-prev,
                .swiper-slide-next {
                    scale: 0.8;
                }
                .swiper-slide-active {
                    scale: 1.3;
                } */
                }
            }
        }
    }
`;

export const DiscountItemStyle = styled.div`
    width: 100%;
    height: 860px;
    ul {
        display: flex;
        height: 100%;
        li {
            width: 50%;
            height: 100%;
            text-align: center;

            &.imgTitle {
                background-image: url(/images/Main/Content4.png);
                background-repeat: no-repeat;
                color: #fff;
                padding-top: 390px;
                box-sizing: border-box;

                h4 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 18px;
                }
                strong {
                    font-size: 18px;
                }
            }
            &.productList {
                padding-top: 150px;
                box-sizing: border-box;
                background: #f9f9f9;

                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #1a1a1a;
                }
                p {
                    margin-bottom: 52px;
                    font-size: 18px;
                }

                img {
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #b1b1b1;
                }
                .discount {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    width: 45px;
                    height: 45px;
                    background: #515151;
                    color: #fff;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 45px;
                }

                /*  */
                .swiper {
                    width: 100%;
                    height: 100%;
                }

                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 430px;
                    transition: 0.5s;
                }

                .wrap {
                    position: relative;
                    .swiper-button-next-dis {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 295px;
                        background: transparent;
                        color: #8a8a8a;
                        /* width: 60px; */
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        &::after {
                            display: none;
                        }
                    }
                    .swiper-button-prev-dis {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 295px;
                        background: transparent;
                        color: #8a8a8a;
                        /* width: 60px; */
                    }
                }
            }
        }
    }
`;
