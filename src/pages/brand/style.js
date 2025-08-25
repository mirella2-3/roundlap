import styled from 'styled-components';

export const BrandStyle = styled.div`
    padding-top: 3000px;
    .wrap {
        display: flex;
        /* width: max-content; */
        width: 100%;
        overflow-x: hidden;

        height: 100vh;
    }

    .wrap > * {
        flex-shrink: 0;
        height: 100vh;
    }

    .panel {
        width: 100vw;
        height: 100vh;
    }
`;
export const MagazineStyle = styled.div``;

export const ProductlineStyle = styled.div`
    /* CSS 변수 (컴포넌트 범위) */
    --fashion-slider-font-family: sans-serif;
    --fashion-slider-button-side-offset: 32px;
    --fashion-slider-button-mobile-side-offset: 24px;
    --fashion-slider-button-mobile-bottom-offset: 16px;
    --fashion-slider-title-font-size: 88px;
    --fashion-slider-title-line-height: 1.2;

    /* Swiper 기본 구조 */
    .swiper {
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        transition: 1s background-color 1.3s;
    }

    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
        transition-delay: 1s;
        transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
    }

    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* 컨테이너 */
    .fashion-slider {
        position: absolute;
        top: 0;
        /* padding-bottom: 100px; */
        width: 100%;
        height: 100%;
        font-family: var(--fashion-slider-font-family);
    }

    @media (max-width: 480px) {
        .fashion-slider {
            --fashion-slider-title-font-size: 60px;
        }
    }

    /* 전환 잠금 시 끊김 방지 */
    .fashion-slider-no-transition {
        transition-duration: 0ms !important;
        transition-delay: 0ms !important;
        transition-property: none !important;

        *:not(.swiper-wrapper) {
            transition-duration: 0ms !important;
            transition-delay: 0ms !important;
            transition-property: none !important;
        }

        .swiper-wrapper {
            transition-delay: 0ms !important;
        }
    }

    /* 타이틀 */
    .fashion-slider-title {
        transition-delay: 1s;
        z-index: 10;
    }

    .fashion-slider-title-text {
        display: block;
        font-weight: 700;
        font-size: 300px;
        letter-spacing: -10px;
        color: #fff0;
        -webkit-text-stroke: 2px #fff;
        margin-bottom: 140px;
    }

    /* 확대 축소 래퍼 + 이미지 */
    .fashion-slider-scale {
        width: 100%;
        height: 100%;
        position: absolute;
        transform: scale(0.6);
        transition-duration: 1s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.5, 0, 0, 1);

        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.2) translate(50%);
            transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
            transition-property: transform;
        }
    }

    /* 내비게이션 버튼 */
    .fashion-slider-button {
        transition: 0.5s;
        outline: none;
        position: absolute;
        width: 140px;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        background: transparent;

        &.fashion-slider-button-prev {
            left: var(--fashion-slider-button-side-offset);
        }
        &.fashion-slider-button-next {
            right: var(--fashion-slider-button-side-offset);
        }

        &.fashion-slider-button-disabled {
            /* opacity: 0.2; */

            cursor: default;
        }

        svg {
            display: block;
            transition: 0.5s;
        }

        .fashion-slider-svg-circle-wrap {
            transition: 0.5s;
            transform-origin: -20px 40px;
            opacity: 1;
        }

        circle {
            transition: 0.5s;
            stroke-width: 2px;
            stroke: #fff;
            fill: none;
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            opacity: 1;
            transform-origin: 0 0 0;
        }

        .fashion-slider-svg-arrow {
            transition: 0.5s;
            fill: #fff;
            transform: rotateY(180deg) translate(-55px, 36.1px) scale(1.75);
        }

        .fashion-slider-svg-wrap {
            transform: translateY(353px);
        }

        &.fashion-slider-button-next {
            .fashion-slider-svg-wrap {
                transform: translateY(353px) rotateY(180deg);
                transform-origin: 80px 0 0;
            }
        }

        .fashion-slider-svg-line {
            transition: 0.5s;
            stroke: #fff;
            stroke-width: 2;
            transform: translate(50px, 42px);
        }

        &:not(.fashion-slider-button-disabled).fashion-slider-button-prev:hover svg {
            transform: translate(-16px);
        }

        &:not(.fashion-slider-button-disabled).fashion-slider-button-next:hover svg {
            transform: translate(16px);
        }

        &:not(.fashion-slider-button-disabled):hover {
            .fashion-slider-svg-circle-wrap {
                transform: scale(1.1);
            }
            circle {
                stroke-dasharray: 4px;
                stroke-dashoffset: 4px;
                opacity: 1;
            }
            .fashion-slider-svg-arrow {
                transform: rotateY(180deg) translate(-40px, 36.1px) scale(1.75);
            }
            .fashion-slider-svg-line {
                transform: translate(35px, 42px) scaleX(0.5);
            }
        }
    }

    @media (max-width: 640px) {
        .fashion-slider-button {
            top: auto;
            bottom: var(--fashion-slider-button-mobile-bottom-offset);
            transform: none;

            &.fashion-slider-button-prev {
                left: var(--fashion-slider-button-mobile-side-offset);
            }
            &.fashion-slider-button-next {
                right: var(--fashion-slider-button-mobile-side-offset);
            }
        }
    }
`;
