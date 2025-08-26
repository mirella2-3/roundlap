import styled from 'styled-components';

// export const VideoStyle = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 0;
//     width: 100%;
//     transition: opacity 0.3s ease-out;
//     opacity: 1;
//     display: block;

//     &.hidden {
//         opacity: 0;
//     }

//     video {
//         width: 100%;
//         display: block;
//     }
// `;

export const VideoStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    /* height: auto; */
    transition: opacity 0.3s ease-out;

    video {
        width: 100%;
        /* height: auto; */
        display: block;
    }

    .txtbox {
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h2 {
            font-weight: 700;
            font-size: 38px;
            color: #fff;
            /* color: #515151; */
            margin-bottom: 0;
        }
        p {
            margin: 17px 0 60px 0;
        }
        span {
            display: block;
            color: #515151;
            line-height: 1.3;
        }
    }
`;

export const IntroStyle = styled.div`
    height: 500px;
    position: relative;

    .txtbox {
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        transition: all 0.5s ease;
        /* opacity: 1; */
        visibility: visible;
        pointer-events: auto;

        h2 {
            font-weight: 700;
            font-size: 38px;
            color: #fff;
            margin-bottom: 0;
            transition: color 0.5s ease;
        }

        p {
            margin: 17px 0 60px 0;
            filter: brightness(0) invert(1);
            transition: 0.5s ease;
        }

        span {
            display: block;
            color: #515151;
            line-height: 1.6;
            opacity: 0;
            transform: translateY(40px);

            &.txt1 {
                transition: 2s ease;
            }
            &.txt2 {
                transition: 2s ease 1s;
            }
        }
    }

    /* 스크롤 200px 이상일 때 스타일 */
    &.scrolled .txtbox {
        h2,
        span {
            color: #1a1a1a;
        }

        span {
            color: #515151;
            opacity: 1;
            transform: translateY(0px);
        }
        p {
            filter: brightness(1);
        }
    }

    &.hidden .txtbox {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }
`;
// export const IntroStyle = styled.div`
//     width: 100vw;
//     position: relative;

//     .txtbox {
//         position: fixed;
//         top: 45%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//         transition: all 0.5s ease;
//         opacity: 1;
//         visibility: visible;
//         pointer-events: auto;
//         z-index: 1000;

//         h2 {
//             font-weight: 700;
//             font-size: 38px;
//             color: #fff;
//             margin-bottom: 0;
//             transition: color 0.5s ease;
//         }

//         p {
//             margin: 17px 0 60px 0;
//             filter: brightness(0) invert(1);
//             transition: 0.5s ease;
//         }

//         span {
//             display: block;
//             color: #515151;
//             line-height: 1.6;
//             opacity: 0;
//             transform: translateY(40px);

//             &.txt1 {
//                 transition: 2s ease;
//             }
//             &.txt2 {
//                 transition: 2s ease 1s;
//             }
//         }
//     }

//     &.scrolled .txtbox {
//         h2,
//         span {
//             color: #1a1a1a;
//         }

//         span {
//             color: #515151;
//             opacity: 1;
//             transform: translateY(0px);
//         }
//         p {
//             filter: brightness(1);
//         }
//     }

//     &.hidden .txtbox {
//         opacity: 0;
//         visibility: hidden;
//         pointer-events: none;
//     }
// `;

export const IndexStyle = styled.div`
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    /* border: 1px solid #000; */

    /* 추가 */
    min-height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    z-index: 5;

    .inner {
        height: 800px;
        margin: 80px auto;
        display: flex;
        gap: 100px;

        section {
            position: relative;
            width: 400px;
            height: 800px;
            overflow: hidden;
            h1 {
                font-size: 140px;
                font-weight: 900;
                color: #339fe6;
                line-height: 1.4;
                position: absolute;
                left: -29px;
                top: 344px;
            }
            strong {
                font-weight: 700;
                font-size: 32px;
                color: #1a1a1a;
                display: block;
                margin-bottom: 20px;
                position: absolute;
                top: 540px;
                left: 10px;
            }
            div {
                position: absolute;
                top: 600px;
                left: 10px;
                span {
                    font-size: 18px;
                    font-weight: 500;
                    color: #515151;
                    display: block;
                }
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 2px;
                background: linear-gradient(to bottom, transparent, #cecece, transparent);
                height: 100%;
            }
        }
    }
`;
export const Con1Style = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    /* border: 1px solid #000; */
    .top_menu {
        width: 100%;
        height: 60px;
        background: #f9f9f9;
        display: flex;
        justify-content: space-between;

        box-sizing: border-box;
        align-items: center;
        font-size: 18px;
        font-weight: 600;

        li {
            width: 33%;
            /* border: 1px solid #000; */
            text-align: center;
            color: #e3e3e3;
            cursor: pointer;
            &.on {
                color: #515151;
            }
        }
    }
    .txtbox {
        position: absolute;
        bottom: 50px;
        left: 50px;
        span {
            display: block;
            font-size: 30px;
            font-weight: 700;
            line-height: 40px;
            color: #fff;
            font-family: 'YUniverse-B';
        }
    }
    .wrap {
        display: flex;
        overflow: hidden;
        .left {
            width: 45vw;
            height: auto;

            img {
                position: absolute;
                top: 0px;
                left: 0;
                width: 100%;
                height: 100%;
                /* object-fit: cover; */
                pointer-events: none;
                z-index: -1;
            }
        }
        .right {
            position: relative;
            width: 55vw;

            .txts {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                color: #515151;

                span {
                    display: block;
                    font-size: 18px;
                    font-weight: 500;
                }
                strong {
                    font-size: 38px;
                    font-weight: 700;
                    color: #1a1a1a;
                }
            }
            .scroll-section {
                position: relative;
                width: 100%;
                height: 800px;
                display: flex;
                justify-content: center;
                align-items: center;
                .sticky-container {
                    position: sticky;
                    top: 100px;

                    width: 700px;
                    height: 700px;
                    margin: 0 auto;
                    .svg text {
                        font-size: 50px;
                        font-weight: 700;
                        /* font-family: 'Pretendard', sans-serif; */
                        font-family: 'YUniverse-B';
                        fill: #d6d6d6;
                        letter-spacing: 22%;
                        line-height: 80;

                        &:nth-child(1) {
                            &:hover {
                                fill: #ffa39f;
                            }
                        }
                        &:nth-child(2) {
                            &:hover {
                                fill: #0087e0;
                            }
                        }
                        &:nth-child(3) {
                            &:hover {
                                fill: #709fd2;
                            }
                        }
                        &:nth-child(4) {
                            &:hover {
                                fill: #0087e0;
                            }
                        }
                        &:nth-child(5) {
                            &:hover {
                                fill: #1e8e67;
                            }
                        }
                        &:nth-child(6) {
                            &:hover {
                                fill: #ff8e41;
                            }
                        }
                        &:nth-child(7) {
                            &:hover {
                                fill: #ffb006;
                            }
                        }
                    }
                }
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
`;

export const Con2Style = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    background-image: url('../images/brand_con2.png');
    background-repeat: no-repeat;
    background-position: 0 60px;
    /* border: 1px solid #000; */

    .top_menu {
        width: 100%;
        height: 60px;
        background: #f9f9f9;
        display: flex;
        justify-content: space-between;

        box-sizing: border-box;
        align-items: center;
        font-size: 18px;
        font-weight: 600;

        li {
            width: 33%;
            /* border: 1px solid #000; */
            text-align: center;
            color: #e3e3e3;
            cursor: pointer;
            &.on {
                color: #515151;
            }
        }
    }
    .txtbox {
        position: absolute;
        bottom: 50px;
        left: 50px;
        span {
            display: block;
            font-size: 30px;
            font-weight: 700;
            line-height: 40px;
            color: #d6d6d6;
            font-family: 'YUniverse-B';
        }
    }
    .txtwrap {
        position: absolute;
        text-align: center;
        top: 53%;
        left: 50%;
        transform: translate(-50%, -50%);

        > strong {
            color: #007bcc;
            font-size: 38px;
            font-weight: 700;
            display: block;
            margin-bottom: 42px;
        }
        span {
            display: block;
            color: #515151;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 6px;
            strong {
                font-weight: 700;
                color: #1a1a1a;
            }
        }
    }
`;
export const Con3Style = styled.div`
    position: relative;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    /* height: 1080px; */
    background-image: url('../images/brand_con3.png');
    background-repeat: no-repeat;
    background-position: 0 60px;
    /* border: 1px solid #000; */

    .top_menu {
        width: 100%;
        height: 60px;
        background: #f9f9f9;
        display: flex;
        justify-content: space-between;

        box-sizing: border-box;
        align-items: center;
        font-size: 18px;
        font-weight: 600;

        li {
            width: 33%;
            /* border: 1px solid #000; */
            text-align: center;
            color: #e3e3e3;
            cursor: pointer;
            &.on {
                color: #515151;
            }
        }
    }
    .txtbox {
        position: absolute;
        bottom: 50px;
        left: 50px;
        span {
            display: block;
            font-size: 30px;
            font-weight: 700;
            line-height: 40px;
            color: #d6d6d6;
            font-family: 'YUniverse-B';
        }
    }
    .inner {
        text-align: center;
        h3 {
            font-size: 38px;
            font-weight: 700;
            /* color: #515151; */
            color: #1a1a1a;
            /* margin-top: 320px; */
            margin-top: 270px;
            margin-bottom: 144px;
        }
    }
    .identity {
        display: flex;
        gap: 150px;
        justify-content: center;
        text-align: left;

        li {
            position: relative;
            > strong {
                color: #00609f;
                font-size: 48px;
                font-weight: 700;
                height: 43px;
                overflow: hidden;
                display: block;
                margin-top: 2px;
                position: relative;

                &::after {
                    content: '';
                    height: 1px;
                    width: 101%;
                    display: block;
                    background: #00609f;
                    position: absolute;
                    bottom: 0;
                }
            }
            span {
                margin-top: 11px;
                display: block;
                font-size: 18px;
                color: #00395e;
                > strong {
                    font-weight: 700;
                }
            }
            opacity: 0;
            /* transform: translateY(100px); */
        }
    }
`;
export const LastStyle = styled.div`
    /* border: 1px solid #000; */
    height: 1080px;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;

    .inner {
        text-align: center;
        margin-top: 508px;
        p {
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: 700;
            color: #6b6b6b;
        }
    }
`;
