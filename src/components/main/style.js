import styled from 'styled-components';
export const VisualStyle = styled.div`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        font-family: Tahoma, sans-serif;
        overflow: hidden;
        background-color: #2c3e50;
    }

    article {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;

        .left,
        .right {
            position: absolute;
            display: table;
            width: 50%;
            height: 100%;
            top: 0;
            transition: transform 1s;

            > div {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 25px;
            }
        }

        .left {
            left: 0;
            transform: translateY(-100%);

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;

            .textBox {
                position: absolute;
                top: 18%;
                left: 13vw;
                color: #fff;

                h2 {
                    font-size: 60px;
                    font-weight: 800;
                    text-align: left;
                    letter-spacing: 0;
                    line-height: auto;
                    margin-bottom: 22px;
                }
                strong {
                    display: block;
                    font-size: 24px;
                    text-align: left;
                    letter-spacing: 0;
                    line-height: auto;
                }
                .fade-up {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeUp 0.8s ease forwards;
                }

                @keyframes fadeUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                &.centerText {
                    text-align: center;

                    h2,
                    strong {
                        text-align: center;
                    }
                }
            }
        }

        .right {
            right: 0;
            transform: translateY(100%);

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &:nth-child(even) {
            .left {
                background-color: #34495e;
            }

            .right {
                background-color: #1a2530;
            }
        }

        &.visible {
            .left,
            .right {
                z-index: 1;
                transform: translateY(0);
            }
        }
        /* 애니메이션 */

        /* 왼쪽 이전 이미지 아래로 내려가기 */
        .left-slide-out-down {
            animation: slideOutDown 1s forwards;
        }

        /* 왼쪽 새 이미지 위에서 아래로 내려오기 */
        .left-slide-in-down {
            animation: slideInDown 1s forwards;
        }

        /* 왼쪽 이전 이미지 위로 올라가기 */
        .left-slide-out-up {
            animation: slideOutUp 1s forwards;
        }

        /* 왼쪽 새 이미지 아래에서 위로 올라오기 */
        .left-slide-in-up {
            animation: slideInUp 1s forwards;
        }

        /* 오른쪽 이전 이미지 위로 올라가기 */
        .right-slide-out-up {
            animation: slideOutUp 1s forwards;
        }

        /* 오른쪽 이전 이미지 아래로 내려가기 */
        .right-slide-out-down {
            animation: slideOutDown 1s forwards;
        }

        /* 오른쪽 새 이미지 아래에서 위로 올라오기 */
        .right-slide-in-up {
            animation: slideInUp 1s forwards;
        }

        /* 오른쪽 새 이미지 위에서 아래로 내려오기 */
        .right-slide-in-down {
            animation: slideInDown 1s forwards;
        }
    }

    @keyframes slideOutDown {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }

    @keyframes slideInDown {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideOutUp {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }
    }

    @keyframes slideInUp {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .pagination {
        position: absolute;
        top: 500px;
        left: 110px;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 20px;
        z-index: 10;
    }

    .pagination button {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 16px;
        /* font-weight: 700; */
        cursor: pointer;
        padding: 0;
        position: relative;
        width: 40px;
        text-align: left;
        transition: color 0.3s;
    }

    .pagination button.active {
        color: #fff;
        /* font-weight: 900; */
    }

    .pagination button.active::before {
        content: '';
        position: absolute;
        right: 45px;
        top: 50%;
        transform: translateY(-50%);
        width: 110px; /* 가로줄 길이 */
        height: 1px; /* 가로줄 두께 */
        background-color: #fff;
        border-radius: 1px;
    }
`;

export const BestItemStyle = styled.div`
    .inner {
        padding: 160px 0;
        padding-top: 970px;
        position: relative;
    }
    .engTitle {
        font-family: 'YUniverse-B';
    }
    .circle {
        width: 80px;
        height: 80px;
        background: #e6f3fc;
        border-radius: 50%;
        position: absolute;
        left: 550px;
    }
    h2 {
        padding-top: 24px;
        font-size: 38px;
        font-weight: 700;
        position: relative;
        cursor: default;
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
            > div {
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
                span {
                    display: block;
                    margin-top: 10px;
                    font-weight: 500;
                }
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

    strong,
    h3,
    span,
    p {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease, transform 3s ease;
    }

    strong {
        color: #339fe6;
        font-size: 18px;

        transition-delay: 0.1s;
        font-family: 'YUniverse-B';
    }

    h3 {
        padding: 22px 0;
        color: #1a1a1a;
        font-size: 36px;
        font-weight: 700;
        transition-delay: 0.1s;
    }

    span {
        display: block;
        font-size: 18px;
        transition-delay: 1s;
    }

    p {
        padding-top: 22px;
        transition-delay: 1.5s;
    }

    .inner.show {
        strong,
        h3,
        span,
        p {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const ProductLineStyle = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    .bg-wrapper {
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.6s ease-in-out;
        }
    }

    .inner {
        /* height: 760px; */
        overflow: visible;
        padding: 160px 0 385px 0;
        position: relative;
        z-index: 1; // 배경 위로 올라오게

        h2 {
            font-size: 48px;
            font-weight: 800;
            color: #fff;
            margin-top: 60px;
            margin-bottom: 108px;
            font-family: 'YUniverse-B';
        }
    }
    .swiper {
        width: 1400px;
        /* width: 1670px; */
        height: 311px;
        position: relative;
        .btn {
            display: block;
            position: absolute;
            bottom: 1px;
            left: 50%;
            transform: translateX(-50%);
            width: 272px;
            height: 50px;

            font-size: 18px;
            font-weight: bold;
            font-family: 'YUniverse-B';

            color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.15);

            text-transform: uppercase;
            text-decoration: none;

            cursor: default;

            transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;
            overflow: hidden;
            z-index: 1;
        }
    }
    .swiper-wrapper {
        width: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.3);

        width: 311px;

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
            font-weight: 200;
            line-height: 1.3;
        }
    }
    .swiper-slide-active {
        span {
            color: rgba(255, 255, 255, 0.3);
        }
        color: rgba(255, 255, 255, 1);
    }

    /* active 상태일 때만 활성화 */
    .swiper-slide-active .btn {
        color: #fff;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #fff;
        cursor: pointer;
    }

    /* hover: 글자/테두리는 buttonColor, 배경은 흰색 ::before로 */
    .swiper-slide-active .btn:hover {
        color: var(--btn-hover-color);
        border-color: var(--btn-hover-color);
    }

    /* hover용 ::before 대각선 흰색 배경 */
    .btn::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: -40px;
        transform: skewX(45deg);
        background-color: rgba(255, 255, 255, 1); /* 흰색 대각선 */
        z-index: -1;
        transition: width 1s;
    }

    .swiper-slide-active .btn:hover::before {
        width: 160%;
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
    position: relative;
    overflow: hidden;
    .section {
        display: flex;
        width: 100%;
        height: 230px;
        align-items: center;
        justify-content: middle;
        transform: translateX(-0vh) rotate(-0deg);
        transform-origin: top left;

        &.right {
            transform: translateY(100vh) rotate(-90deg);
            position: absolute;
            left: 90%;
            transform-origin: top left;
        }
        &.left {
            transform: translateY(100vh) rotate(90deg);
            position: absolute;
            left: 10%;
            transform-origin: top top;
        }
    }

    .animated-text {
        animation: textLoop 800s infinite linear;
        color: #f9f9f9;
        font-size: 230px;
        font-family: 'YUniverse-B';
    }

    @keyframes textLoop {
        from {
            transform: translateX(-80%);
        }

        to {
            transform: translateX(100%);
        }
    }

    @keyframes positionLoop {
        from {
            transform: none;
        }

        to {
            transform: translateY(100vh) rotate(-90deg);
        }
    }

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
            /* button {
                display: block;
                background: transparent;
                opacity: 0.5;
                transition: 0.3s;
                z-index: 10;
                margin-top: 44px;
                transition: 0.3s;
            } */
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
                &::after {
                    background: rgba(0, 0, 0, 0.4);
                }
                h3,
                strong {
                    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0);
                }
            }
        }
        .cta {
            /* position: absolute;
            bottom: 0;
            left: 0; */
            display: block;
            text-align: left;
            /* opacity: 0.5; */
            z-index: 10;
            margin-top: 44px;
            /* margin: auto; */
            padding: 22px 18px 17px 28px;
            transition: all 0.2s ease;
            border: none;
            background: none;
            cursor: pointer;
        }
        .cta:before {
            content: '';
            position: absolute;
            /* top: 0; */
            bottom: 0;
            left: 0;
            display: block;
            border-radius: 50px;
            background: #fff;
            width: 60px;
            height: 60px;
            transition: all 0.3s ease;
            opacity: 0.2;
        }

        .cta span {
            position: relative;
            /* font-family: 'Ubuntu', sans-serif; */
            font-size: 18px;
            font-weight: 500;
            color: #fff;
        }

        .cta svg {
            position: relative;
            top: 0;
            margin-left: 12px;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: #fff;
            stroke-width: 2;
            transform: translateX(-5px);
            transition: all 0.3s ease;
        }

        .cta:hover:before {
            width: 100%;
            background: #fff;
        }

        .cta:hover svg {
            transform: translateX(0);
        }

        .cta:active {
            transform: scale(0.95);
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
            }
            &.productList {
                padding-top: 150px;
                box-sizing: border-box;
                background: #f9f9f9;
                position: relative;

                .circle {
                    width: 60px;
                    height: 60px;
                    background: #e6f3fc;
                    border-radius: 50%;
                    position: absolute;
                    top: 130px;
                    left: 357px;
                }

                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #1a1a1a;
                    font-family: 'YUniverse-B';
                    position: relative;
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
                    .wish-inner {
                        > img {
                            opacity: 0.3;
                            filter: saturate(30%);
                            transition: 0.3s;
                        }
                    }
                    .title {
                        white-space: nowrap;
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        font-size: 18px;
                        color: #515151;
                        cursor: pointer;
                        font-weight: 600;
                        gap: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        opacity: 0;
                        .discount {
                            padding: 6px;
                            background: #00395e;
                            color: #fff;
                            display: inline-block;
                        }
                    }
                }
                .swiper-slide-active {
                    .wish-inner {
                        > img {
                            opacity: 1;
                            filter: saturate(100%);
                        }
                    }
                    .title {
                        opacity: 1;
                        transition: opacity 0.3s ease;
                    }
                    &:hover {
                        .title {
                            color: #1a1a1a;
                            font-weight: 600;
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
                        right: 250px;
                        background: transparent;
                        color: #515151;
                        width: 60px;

                        &::after {
                            display: none;
                        }
                    }
                    .swiper-button-prev {
                        position: absolute;
                        left: 250px;
                        background: transparent;
                        color: #515151;
                        width: 60px;

                        &::after {
                            display: none;
                        }
                    }
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
                position: relative;
                overflow: hidden;
            }
            &.productList {
                padding-top: 150px;
                box-sizing: border-box;
                background: #f9f9f9;
                position: relative;

                .circle {
                    width: 60px;
                    height: 60px;
                    background: #e6f3fc;
                    border-radius: 50%;
                    position: absolute;
                    top: 130px;
                    left: 289px;
                }

                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #1a1a1a;
                    font-family: 'YUniverse-B';
                    position: relative;
                }

                > p {
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

                .slide-item {
                    .wish-inner {
                        > img {
                            opacity: 0.3;
                            filter: saturate(30%);
                            transition: 0.3s;
                        }
                    }
                    .title {
                        white-space: nowrap;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        font-size: 18px;
                        font-weight: 600;
                        color: #515151;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        cursor: pointer;
                        .discount {
                            padding: 6px;
                            background: #00395e;
                            color: #fff;
                            display: inline-block;
                            font-size: 15px;
                        }
                    }
                }
                .swiper-slide-active {
                    .wish-inner {
                        > img {
                            opacity: 1;
                            filter: saturate(100%);
                        }
                    }
                    .title {
                        opacity: 1;
                        transition: opacity 0.3s ease;
                    }
                    &:hover {
                        .title {
                            color: #1a1a1a;
                            font-weight: 600;
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
                    .swiper-button-next-dis {
                        position: absolute;
                        z-index: 10;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 250px;
                        background: transparent;
                        color: #515151;
                        /* width: 60px; */
                    }

                    .swiper-button-prev-dis {
                        position: absolute;
                        z-index: 10;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 250px;
                        background: transparent;
                        color: #515151;
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
            font-family: 'YUniverse-B';
        }
        span {
            display: block;
            text-align: center;
            margin-top: 100px;
            font-size: 18px;
            color: #54afea;
            /* font-weight: 300; */
            line-height: 150%;
        }
        p {
            display: block;
            text-align: center;
            margin-top: 50px;

            .btn {
                position: relative;
                color: #54afea;
                text-decoration: none;
                border: 1px solid #54afea;
                padding: 15px 91px;
                font-size: 18px;
                cursor: pointer;
                font-weight: bold;
                background: transparent;
                position: relative;
                transition: all 1s;
                overflow: hidden;
                z-index: 1;
                font-family: 'YUniverse-B';

                &::before {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 0%;
                    top: 0;
                    left: -40px;
                    transform: skewX(45deg);
                    background-color: #54afea;
                    color: #fff;
                    z-index: -1;
                    transition: 1s;
                }
                &:hover {
                    color: white;
                    &::before {
                        width: 160%;
                    }
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
        font-family: 'YUniverse-B';
        position: relative;
        z-index: 1;
        strong {
            margin-top: 12px;
            display: block;
            font-size: 20px;
            color: #515151;
            font-family: 'pretendard';
            font-weight: 200;
        }
        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 80px;
            height: 80px;
            background: #e6f3fc;
            border-radius: 50%;
            top: -41%;
            left: 42.25%;
            z-index: -1;
        }
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

export const KConStyle = styled.div`
    width: 100vw;
    height: 100vh;
    .mySwiper {
        width: 100vw;
        height: 100vh;
    }
    .wrap {
        position: relative;
        height: 100vh;
        width: 100vw;
        .bg {
            height: 100vh;
            width: 100vw;
            position: absolute;
            z-index: 0;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .cta {
            position: absolute;
            bottom: 182px;
            right: 100px;
            margin: auto;
            padding: 22px 18px 17px 28px;
            transition: all 0.2s ease;
            border: none;
            background: none;
            cursor: pointer;
        }
        .whiteBox {
            width: 442px;
            height: 718px;
            border-radius: 994px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            .pong {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }

            .wrapper {
                border-radius: 50%;
                width: 402px;
                height: 718px;
                border-radius: 994px;
                background: #fff;
                overflow: hidden;
                backface-visibility: hidden;
                transform: translate3d(0, 0, 0);
            }
        }
        div {
            display: flex;

            justify-content: center;
            video {
                height: 440px;
                margin: auto;
                padding-bottom: 50px;
            }
        }

        .bgTxt {
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 320px;
            display: flex;
            gap: 200px;
            letter-spacing: -30px;

            img {
                filter: grayscale(100%);
                transition: 0.5s;
                &:hover {
                    filter: grayscale(0%);
                }
            }
        }
        .desc {
            display: block;
            font-size: 30px;
            position: absolute;
            z-index: 1;
            bottom: 23%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            font-weight: 500;
            line-height: 32px;
            text-align: center;

            p {
                display: block;
                margin-left: 0;
                animation: fadeUp 1.5s ease-out forwards;
                opacity: 0;
                &:first-child {
                    animation-delay: 1s;
                }
                &:last-child {
                    animation-delay: 2.5s;
                }
            }
        }
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .cta:before {
        content: '';
        position: absolute;
        /* top: 0; */
        bottom: 0;
        left: 0;
        display: block;
        border-radius: 50px;
        background: var(--boxColor);
        width: 60px;
        height: 60px;
        transition: all 0.3s ease;
    }

    .cta span {
        position: relative;
        /* font-family: 'Ubuntu', sans-serif; */
        font-size: 18px;
        font-weight: 500;
        /* color: #6a32db; */
    }

    .cta svg {
        position: relative;
        top: 0;
        margin-left: 12px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        /* stroke: #6a32db; */
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }

    .cta:hover:before {
        width: 100%;
        background: var(--boxColor);
    }

    .cta:hover svg {
        transform: translateX(0);
    }

    .cta:active {
        transform: scale(0.95);
    }

    .mySwiper {
        width: 100vw;
        height: 100vh;
    }
    .swiper-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    .swiper-pagination-bullet {
        margin: 0;
        margin-bottom: 50px;
        width: 90px; // 네모 가로 길이
        height: 3px; // 얇은 높이
        background-color: white; // 비활성 색상
        opacity: 1;
        border-radius: 0;
        transition: background-color 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        background-color: var(--bgColor); // 활성화 색상
    }
`;
