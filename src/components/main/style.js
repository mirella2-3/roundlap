import styled from 'styled-components';

export const ContentStyle3 = styled.div`
    h2 {
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: 800;
        color: white;
        z-index: 10;
    }

    .swiper {
        width: 100%;
        height: 100vh;
        min-height: 700px;
    }

    .swiper-wrapper,
    .swiper-slide {
        height: 100%;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .swiper-button-prev,
    .swiper-button-next {
        width: 40px;
        height: 40px;
        font-size: 30px;
        color: white;
        border: 1px solid #fff;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
    }

    .swiper-button-prev {
        left: 8%;
    }
    .swiper-button-next {
        right: 8%;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 24px;
    }

    .text-wrapper {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 200px;
        text-align: center;
    }

    .text-item {
        color: gray;
        transition: color 0.3s ease;

        strong {
            font-size: 30px;
            font-weight: 800;
            opacity: 0.7;
        }
        h3 {
            font-size: 36px;
            font-weight: 700;
        }
        p {
            margin: 20px 0 60px;
            font-size: 16px;
            line-height: 1.5;
        }

        &.active {
            color: white;
        }
        &.inactive {
            color: gray;
        }
    }
`;

export const BackgroundWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
`;

export const BackgroundImage = styled.div`
    background-image: ${({ image }) => `url(/public/images/${image})`};
    background-size: cover;
    background-position: center;
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 1.5s ease-in-out;
    will-change: opacity;
`;
