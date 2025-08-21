import styled from 'styled-components';
export const VisualStyle = styled.div`
    width: 100%;
    .visualImg {
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        li {
            width: 50%;
            img {
                width: 100%;
            }
        }
    }
`;

export const BestItemStyle = styled.div`
    .inner {
        padding: 160px 0;
        padding-top: 1200px;
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
                top: 464px;
                left: 50%;
                transform: translateX(-50%);
                font-weight: 300;
            }
            &:hover {
                strong {
                    font-weight: 400;
                    color: #515151;
                }
            }
        }
    }
`;

export const SloganStyle = styled.div`
    cursor: default;
    text-align: center;
    padding: 160px;
    strong {
        color: #339fe6;
        font-size: 18px;
        font-weight: 600;
    }
    h3 {
        padding: 22px 0;
        color: #1a1a1a;
        font-size: 36px;
        font-weight: 700;
    }
    span {
        font-size: 18px;
    }
    p {
        padding-top: 22px;
    }
`;

export const ProductLineStyle = styled.div`
    position: relative;
    padding: 160px 0;
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: 0.5s ease forwards;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .inner {
        height: 760px;
        overflow: visible;

        h2 {
            font-size: 48px;
            font-weight: 800;
            color: #fff;
            padding-top: 60px;
            margin-bottom: 108px;
        }
    }
    .swiper {
        width: 1400px;
        /* width: 1670px; */
        height: 311px;
    }
    .swiper-wrapper {
        width: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        /* border: 1px solid #000; */
        color: rgba(255, 255, 255, 0.3);
        span {
            font-size: 30px;
            font-weight: 800;
        }
        h4 {
            font-size: 36px;
            font-weight: 700;
            padding: 20px 0 12px 0;
        }
        strong {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.3;
        }
        button {
            display: block;
            position: absolute;
            bottom: 1px;
            left: 50%;
            transform: translateX(-50%);
            width: 272px;
            height: 50px;
            font-size: 18px;

            color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.15);
            cursor: default;
        }
    }
    .swiper-slide-active {
        span {
            color: rgba(255, 255, 255, 0.3);
        }
        color: rgba(255, 255, 255, 1);
        button {
            color: #fff;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid #fff;
            cursor: pointer;

            &:hover {
                color: #0087e0;
                border: 1px solid #0087e0;
                background: rgba(255, 255, 255, 1);
            }
        }
    }
    .swiper {
        margin-left: auto;
        margin-right: auto;
    }

    .custom-prev,
    .custom-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0);
        border: 1px solid #c2c2c2;
        cursor: pointer;
        font-size: 20px;
        color: #c2c2c2;
    }
    .custom-prev {
        left: -125px;
    }

    .custom-next {
        right: -125px;
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
        width: 100vw;
        li {
            width: 50vw;
            box-sizing: border-box;
            height: 100%;
            text-align: center;

            &.imgTitle {
                background-image: url(/images/Main/Content1.png);
                background-repeat: no-repeat;
                background-size: cover;
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
                .wish-inner {
                    position: relative;
                    cursor: pointer;

                    .bg {
                        position: absolute;
                        bottom: 40px;
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
                            bottom: 80px;
                            cursor: default;

                            img {
                                cursor: pointer;
                            }
                        }
                    }
                }

                img {
                }
                .slide-item {
                    .title {
                        position: absolute;
                        bottom: 0;
                        font-size: 18px;
                        font-weight: 300;
                        color: #b1b1b1;
                        cursor: pointer;
                    }
                    &:hover {
                        .title {
                            color: #1a1a1a;
                            font-weight: 400;
                        }
                    }
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
        width: 100vw;
        li {
            width: 50vw;
            height: 100%;
            text-align: center;

            &.imgTitle {
                background-image: url(/images/Main/Content4.png);
                background-repeat: no-repeat;
                background-size: cover;
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
                    scale: 0.9;
                }
                .wish-inner {
                    position: relative;
                    cursor: pointer;

                    .bg {
                        position: absolute;
                        bottom: 40px;
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
                            bottom: 80px;
                            cursor: default;

                            img {
                                cursor: pointer;
                            }
                        }
                    }
                }

                .slide-item {
                    .title {
                        position: absolute;
                        bottom: 0;
                        font-size: 18px;
                        font-weight: 300;
                        color: #b1b1b1;
                        cursor: pointer;
                    }
                    &:hover {
                        .title {
                            color: #1a1a1a;
                            font-weight: 400;
                        }
                    }
                }
                .discount {
                    font-size: 16px;
                    position: absolute;
                    top: 40px;
                    left: 40px;
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
                        z-index: 10;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 295px;
                        background: transparent;
                        color: #8a8a8a;
                        /* width: 60px; */
                    }
                    /* .swiper-button-next,
                    .swiper-button-prev {
                        &::after {
                            display: none;
                        }
                    } */
                    .swiper-button-prev-dis {
                        position: absolute;
                        z-index: 10;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 295px;
                        background: transparent;
                        color: #8a8a8a;
                    }
                }
            }
        }
    }
`;

export const StoryStyle = styled.div`
    width: 100%;
    height: 1080px;
    display: flex;
    .left {
        height: 100%;
        width: 50%;
        background-image: url(/images/Main/Left00.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
    }
    .right {
        height: 100%;
        width: 50%;
        background-image: url(/images/Main/Right00.png);
        background-size: cover;
        h3 {
            font-size: 36px;
            font-weight: 700;
            color: #54afea;
            text-align: center;
            /* margin-top: 432px; */
            margin-top: 45%;
        }
        span {
            display: block;
            text-align: center;
            margin-top: 100px;
            font-size: 18px;
            color: #54afea;
            font-weight: 300;
        }
        p {
            display: block;
            text-align: center;
            margin-top: 50px;

            button {
                width: 226px;
                height: 50px;
                border: 1px solid #54afea;
                background: transparent;
                color: #54afea;
                font-size: 18px;
                transition: 0.3s;
                &:hover {
                    color: #fff;
                    background: #54afea;
                }
            }
        }
    }
`;

export const SnsStyle = styled.div`
    padding: 160px 0;
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 80px;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    #box {
        margin: 0 auto;
        background-color: #fff;
        overflow: hidden;
        width: 2045px; /* 필요에 따라 조절 */

        .slider_wrap {
            position: relative;
            width: 100%;
            height: 320px;
            overflow: hidden;
        }
        ul {
            display: flex;
            padding: 0;
            margin: 0;
            width: fit-content;
        }
        ul li {
            width: 320px;
            height: 320px;
            margin-right: 25px;
            flex-shrink: 0; /* 크기 고정 */
            text-align: center;
            overflow: hidden;
            cursor: pointer;
            position: relative;
        }
        ul li img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: 0.6s;

            &:hover {
                transform: scale(1.15);
            }
            &.buttonImage {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 30px;
                height: 30px;
            }
        }
    }
`;
